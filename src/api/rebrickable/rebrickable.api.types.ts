export type ListResponse<Data> = {
  count: number;
  results: Array<Data>;
};

export type PaginationResponse<Data> = {
  previous: string | null;
  next: string | null;
} & ListResponse<Data>;

export type SearchMinifigResponseItem = {
  setNum: string;
  name: string;
  numParts: number;
  setImgUrl: string;
  setUrl: string;
  lastModifiedDt: string;
};

export type SearchMinifigResponse =
  PaginationResponse<SearchMinifigResponseItem>;

export type OrderMinifigRequestPayload = {
  shippingInfo: Domain.UserShippingInfo;
} & Pick<Domain.Minifig, 'setId'>;

type MinifigPartsResponseItemPart = {
  partNum: string;
  name: string;
  partCatId: string;
  partUrl: string;
  partImgUrl: string;
  externalIds: unknown; // Currently not in use
};

export type MinifigPartsResponseItem = {
  id: string;
  invPartId: string;
  part: MinifigPartsResponseItemPart;
  color: unknown; // Currently not in use
};

export type MinifigPartsResponse = PaginationResponse<MinifigPartsResponseItem>;
