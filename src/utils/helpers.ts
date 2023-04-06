/* eslint-disable import/no-cycle */

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import type { IListItem } from 'hooks/types';
import { get, map } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import process from 'process';
import type { ToastContent, ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

import { FEATURES } from './const';

const Helper = {
  getWebCookie: (
    req?: NextApiRequest,
    res?: NextApiResponse,
  ): Record<string, string> => {
    const cookies = JSON.parse(
      (getCookie(
        `${process.env.PROJECT_NAME}-web-cookie`,
        req && res ? { req, res } : {},
      ) || null) as string,
    );
    return cookies;
  },
  getUserRole: () => {
    const webCookie = Helper.getWebCookie();
    return get(webCookie, 'role');
  },

  setToken: (data: Record<string, string>, remember?: boolean): void =>
    // Save cookie for 3 months if remembered, if not only held for 1 day
    setCookie(`${process.env.PROJECT_NAME}-web-cookie`, data, {
      path: '/',
      ...(remember
        ? {
            maxAge: 7776000,
          }
        : {
            maxAge: 86400,
          }),
    }),
  removeWebCookie: (): void =>
    deleteCookie(`${process.env.PROJECT_NAME}-web-cookie`, { path: '/' }),
  convertObjectToOptions: (obj: Record<string, string>): IListItem[] => {
    return Object.keys(obj).map((key) => ({
      id: key,
      name: obj[key] as string,
    }));
  },
  getTokenConfig: (req: unknown, res: unknown) => {
    const cookies = Helper.getWebCookie(
      req as NextApiRequest,
      res as NextApiResponse,
    );
    const { token } = cookies;
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
  checkValidImage: (file: File, config?: { maxSize: number; type: string }) => {
    const maxSize = config?.maxSize || 5;
    const type = config?.type || 'image';
    if (!file.type.startsWith(type)) {
      Helper.toast('Invalid', { type: 'error' });
      return false;
    }
    if (file.size > 1000000 * maxSize) {
      Helper.toast('invalid size', {
        type: 'error',
      });
      return false;
    }
    return true;
  },
  formatUrl: (url: string) => {
    if (typeof url !== 'string') {
      return undefined;
    }
    return url.startsWith('https://') || url.startsWith('http://')
      ? url
      : `http://${url}`;
  },
  convertArrayToEntities: (array: IListItem[]) => {
    const ids: string[] = [];
    const entities = (array || []).reduce((acc, cur) => {
      ids.push(cur.id);
      return { ...acc, [cur.id]: cur };
    }, {});
    return {
      ids,
      entities,
    };
  },

  toast: (
    message: ToastContent<unknown>,
    options?: ToastOptions<{}> | undefined,
  ) => {
    const type = get(options, 'type', 'success');
    return toast(message, {
      type,
      ...options,
    });
  },
  getYouTubeVideoIdFromUrl: (url: string) => {
    // Our regex pattern to look for a youTube ID
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    // Match the url with the regex
    const match = url.match(regExp);
    // Return the result
    return match && match[2]?.length === 11 ? match[2] : undefined;
  },
  addComma: (value: string | number) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  parseURLByParams: (params: object, url: string) => {
    const convertParamsToString: string[] = [];
    map(
      params,
      (value, key) =>
        value &&
        convertParamsToString.push(
          `${key}=${encodeURIComponent(value as string)}`,
        ),
    );
    const newURL = `${url}?${convertParamsToString.join('&')}`;
    return newURL;
  },
  encodeParams: (params: object) => {
    const currentParams = {};
    map(params, (_value, key) => {
      return Object.assign(currentParams, {
        [key]: encodeURIComponent(_value as string),
      });
    });

    return currentParams;
  },
  formatCardNumberText: (number: string) => {
    const numberMatch = number.match(/.{4}/g);
    if (number && numberMatch) {
      return numberMatch.join(' ');
    }
    return '';
  },
  getExpYear: (careerStart: string): number => {
    return new Date().getFullYear() - +careerStart;
  },
  getFeatueImage: (id: string): string => {
    return FEATURES.find((item) => item.value === id)?.img || '';
  },
  checkExpTicketWarning: (day: string): boolean => {
    const currentDay = dayjs().tz();
    const expDay = dayjs(day).tz();
    const countExp = expDay.diff(currentDay, 'day');
    const isWarningExp = countExp <= 30;
    return isWarningExp;
  },
};

export default Helper;
