import Layout from 'components/Layout';
import React from 'react';

const CardListPage = () => {
  return <div>CardListPage</div>;
};

CardListPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default CardListPage;
