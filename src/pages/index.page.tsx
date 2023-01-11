import Layout from 'components/Layout';
import type { ReactElement } from 'react';

const HomePage = () => {
  return <>Home Page22</>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout isCard>{page}</Layout>;
};

export default HomePage;
