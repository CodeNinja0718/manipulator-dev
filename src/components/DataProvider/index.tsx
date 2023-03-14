import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getRedirecttUrl from 'utils/getRedirectUrl';
import Helper from 'utils/helpers';

const DataProvider = () => {
  const { pathname, replace } = useRouter();
  const webCookie = Helper.getWebCookie();

  const redirectUrl = getRedirecttUrl({
    nextUrl: pathname,
    token: webCookie?.accessToken,
  });

  useEffect(() => {
    if (redirectUrl) {
      replace(redirectUrl);
    }
  }, [redirectUrl, replace]);

  return null;
};

export default DataProvider;
