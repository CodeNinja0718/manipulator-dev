import Layout from 'components/Layout';
import React from 'react';

const MyProfilePage = () => {
  return <div>MyProfilePage</div>;
};

MyProfilePage.getLayout = (page: React.ReactNode) => (
  <Layout isCardLayout withSideMenu>
    {page}
  </Layout>
);

export default MyProfilePage;
