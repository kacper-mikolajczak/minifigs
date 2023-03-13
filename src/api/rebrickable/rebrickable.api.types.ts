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
