import CouponSvg from '@icons/icon_coupon.svg';
import { Stack, Typography } from '@mui/material';
import CommonTabs from 'components/CommonTabs';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import TabContent from 'components/Discount/TabContent';
import Layout from 'components/Layout';
import { CouponType } from 'utils/const';

import styles from './styles';

const DiscountListPage = () => {
  // const router = useRouter();
  // const { page = '1' } = router.query;

  // const { list, isLoading, totalPages, total } = useList<any>({
  //   ...ticketQuery.getDiscounts,
  //   customParams: {
  //     page: typeof page === 'string' ? Number(page) : 1,
  //     limit: 4,
  //   },
  // });

  const handleChangeTab = (value: number) => {
    console.log(value);
  };

  const tabs = [
    {
      label: <TabLabelItem label="プライベート" />,
      component: <TabContent />,
    },
    {
      label: <TabLabelItem label="公共" />,
      component: <TabContent />,
    },
  ];

  return (
    <Stack
      alignItems="center"
      overflow={'hidden'}
      sx={styles.discountListPageWrapper}
    >
      <Typography
        variant="title"
        mb={55}
        display="flex"
        gap={8}
        alignItems="center"
      >
        <CouponSvg width={24} height={24} />
        クーポン
      </Typography>
      <CommonTabs
        tabs={tabs}
        active={CouponType.PRIVATE}
        onChangeTab={handleChangeTab}
      />
      {/* {totalPages > 1 && <ListPagination total={total} limit={4} />} */}
    </Stack>
  );
};

DiscountListPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default DiscountListPage;
