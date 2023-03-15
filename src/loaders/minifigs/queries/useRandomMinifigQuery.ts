import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {RebrickableAPI} from '@api/rebrickable/rebrickable.api';
import {minifigsQueryKeys, MinifigsQueryKeys} from '../queryKeys';

type QueryKey = [MinifigsQueryKeys['search']];
type QueryFn = typeof queryFn;
type QueryFnRT = Awaited<ReturnType<QueryFn>>;
const queryFn = async ({queryKey}: QueryFunctionContext<QueryKey>) => {
  const [{search}] = queryKey;
  return RebrickableAPI.searchRandomMinifig(search);
};

export const useRandomMinifigQuery = <D = QueryFnRT>(
  search: string,
  options?: UseQueryOptions<QueryFnRT, unknown, D, QueryKey>,
) => {
  return useQuery([minifigsQueryKeys.search(search)], queryFn, options);
};
