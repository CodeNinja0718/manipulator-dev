import useGlobalState from 'hooks/useGlobalState';
import useMutate from 'hooks/useMutate';
// import { useRouter } from 'nextz/router';
import Helper from 'utils/helpers';
import queryClient from 'utils/queryClient';

import authQuery from './query';

const useLogout = () => {
  // const { replace, pathname } = useRouter();
  const { setConfirmModal } = useGlobalState();
  const { mutateAsync: handleLogout } = useMutate<{ refreshToken: string }>(
    authQuery.logout,
  );
  const logout = () => {
    const webCookie = Helper.getWebCookie();
    try {
      handleLogout({ refreshToken: webCookie?.token || '' });
    } finally {
      setTimeout(() => Helper.removeWebCookie());
      queryClient
        .getQueryCache()
        .findAll(['currentUser'])
        .forEach((query) => query.setData(undefined));
      // if (pathname.startsWith('/my-page')) {
      //   replace('/login');
      // }
    }
  };

  const showConfirmLogout = () => {
    setConfirmModal({
      title: 'ログアウト',
      onConfirm: logout,
      content: '本当にログアウトしますか？',
    });
  };
  return { logout: showConfirmLogout };
};

export default useLogout;
