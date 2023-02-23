import Layout from 'components/Layout';
import dynamic from 'next/dynamic';

const Booking = dynamic(() => import('components/Booking'));

const ChooseMenu = () => {
  return <Booking />;
};

ChooseMenu.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default ChooseMenu;
