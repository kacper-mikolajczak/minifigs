import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {RebrickableAPI} from '@api/rebrickable/rebrickable.api';
import {minifigsQueryKeys, MinifigsQueryKeys} from '../queryKeys';

type QueryKey = [MinifigsQueryKeys['parts']];
type QueryFn = typeof queryFn;
type QueryFnRT = Awaited<ReturnType<QueryFn>>;
const queryFn = async ({queryKey}: QueryFunctionContext<QueryKey>) => {
  const [{id}] = queryKey;
  return RebrickableAPI.getMinifigParts(id);
};

export const useMinifigPartsQuery = <D = QueryFnRT>(
  setId: Domain.Minifig['setId'],
  options?: UseQueryOptions<QueryFnRT, unknown, D, QueryKey>,
) => {
  return useQuery([minifigsQueryKeys.parts(setId)], queryFn, options);
};
