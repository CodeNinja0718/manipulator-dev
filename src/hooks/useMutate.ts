import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';
import api from 'utils/api';
import Helper from 'utils/helpers';

interface Options<TData, TVariables>
  extends Omit<UseMutationOptions<TVariables, unknown, TData>, 'mutationFn'> {
  apiUrl: string | ((params: TData) => string);
  method?: string;
  defaultToast?: boolean;
  successMessage?: string;
  omitKeys?: string[];
  axiosConfig?: AxiosRequestConfig;
}

const useMutate = <TData = unknown, TVariables = unknown>(
  options: Options<TData, TVariables>,
) => {
  const {
    apiUrl,
    defaultToast,
    method = 'post',
    successMessage,
    axiosConfig,
    omitKeys,
    ...otherOptions
  } = options;
  return useMutation(
    async (params: TData) => {
      const formattedParams: any = { ...params };
      const url = typeof apiUrl === 'string' ? apiUrl : apiUrl(params);
      if (omitKeys) {
        omitKeys.forEach((key) => {
          if (formattedParams[key]) {
            delete formattedParams[key];
          }
        });
      }
      switch (method) {
        case 'put': {
          const { data } = await api.put(url, formattedParams, axiosConfig);
          return data;
        }
        case 'delete': {
          const { data } = await api.delete(url, {
            data: formattedParams,
            ...axiosConfig,
          });
          return data;
        }
        case 'patch': {
          const { data } = await api.patch(url, formattedParams, axiosConfig);
          return data;
        }
        default: {
          const { data } = await api.post(url, formattedParams, axiosConfig);
          return data;
        }
      }
    },
    {
      onSuccess: () => {
        if (defaultToast || successMessage) {
          Helper.toast(successMessage || 'Completed', {
            type: 'success',
          });
        }
      },
      ...otherOptions,
    },
  );
};

export default useMutate;
