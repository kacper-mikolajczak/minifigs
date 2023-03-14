// Based on great article
// https://www.brendonovich.dev/blog/the-ultimate-form-abstraction
import React, {PropsWithChildren} from 'react';
import {
  FieldValues,
  FormProvider,
  UseFormReturn,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

interface Props<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
}

export function Form<T extends FieldValues>({form, children}: Props<T>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}

interface UseZodFormProps<S extends z.ZodSchema>
  extends Exclude<UseFormProps<z.infer<S>>, 'resolver'> {
  schema: S;
}

export const useZodForm = <S extends z.ZodSchema>({
  schema,
  ...formProps
}: UseZodFormProps<S>) =>
  useForm({
    ...formProps,
    resolver: zodResolver(schema),
  });
