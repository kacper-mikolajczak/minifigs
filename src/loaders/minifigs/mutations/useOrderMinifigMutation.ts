import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {RebrickableAPI} from '@api/rebrickable/rebrickable.api';
import {OrderMinifigRequestPayload} from '@api/rebrickable/rebrickable.api.types';

export const useOrderMinifigMutation = (
  options?: UseMutationOptions<{}, unknown, OrderMinifigRequestPayload>,
) => {
  return useMutation(RebrickableAPI.orderMinifig, options);
};
