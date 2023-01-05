// import Layout from 'components/Layout';
import SideMenuLayout from 'components/Layout/SideMenuLayout';
import type { ReactElement } from 'react';

const ReservationHistory = () => {
  return <>ReservationHistory</>;
};

ReservationHistory.getLayout = function getLayout(page: ReactElement) {
  return <SideMenuLayout>{page}</SideMenuLayout>;
};

export default ReservationHistory;
