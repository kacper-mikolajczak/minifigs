import {ENV} from '@config/env.config';
import {Sleep} from 'src/utils/Sleep';
import {APIBuilder, APIInstance} from '../ApiBuilder';
import {mapSearchMinifigResponseToMinifigs} from './rebrickable.api.map';
import {
  OrderMinifigRequestPayload,
  SearchMinifigResponse,
} from './rebrickable.api.types';

// Singleton implementation
class RebrickableClient {
  private static singleton: RebrickableClient;
  private searchMinifigResponseCache: Map<
    string,
    Awaited<ReturnType<RebrickableClient['searchMinifigs']>>
  >;

  private constructor(private client: APIInstance) {
    this.searchMinifigResponseCache = new Map();
  }

  public static getInstance(client?: APIInstance): RebrickableClient {
    if (!RebrickableClient.singleton) {
      if (!client) {
        throw new Error('RebrickableAPI: Client was not provided');
      }
      RebrickableClient.singleton = new RebrickableClient(client);
    }

    return RebrickableClient.singleton;
  }

  public async searchMinifigs(
    search: string,
    config?: Parameters<typeof this.client.get>[1],
  ) {
    const res = await this.client.get<SearchMinifigResponse>('/lego/minifigs', {
      ...config,
      params: {...config?.params, search},
    });

    return {...res.data, results: mapSearchMinifigResponseToMinifigs(res.data)};
  }

  public async searchRandomMinifig(
    search: string,
    config?: Parameters<typeof this.client.get>[1],
  ) {
    if (!this.searchMinifigResponseCache.get(search)) {
      const cacheResponse = await this.searchMinifigs(search, config);
      this.searchMinifigResponseCache.set(search, cacheResponse);
    }

    const cache = this.searchMinifigResponseCache.get(search)?.results;
    if (!cache) {
      throw new Error(
        `RebrickableAPI(getRandomMinifg): Cache entry is no available for ${search}`,
      );
    }
    return cache[Math.floor(Math.random() * cache.length)];
  }

  public async orderMinifig(payload: OrderMinifigRequestPayload) {
    // Fake API call
    await Sleep(1000);
    return {orderId: payload.setId + payload.shippingInfo.email};
  }
}

export const RebrickableAPI = RebrickableClient.getInstance(
  APIBuilder.createInstance({
    baseURL: ENV.REBRICKABLE_API_URL,
    headers: {Authorization: `key ${ENV.REBRICKABLE_API_KEY}`},
  }),
);
