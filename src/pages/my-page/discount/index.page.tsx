import CouponSvg from '@icons/icon_coupon.svg';
import { Stack, Typography } from '@mui/material';
import CommonTabs from 'components/CommonTabs';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import TabContent from 'components/Discount/TabContent';
import Layout from 'components/Layout';
import ListPagination from 'components/ListPagination';
import { useList } from 'hooks';
import type { ICoupon } from 'models/discount/interface';
import { PRIVATE_COUPON, PUBLIC_COUPON } from 'models/discount/interface';
import discountQuery from 'models/discount/query';
import { useRouter } from 'next/router';
import { CouponType } from 'utils/const';

import styles from './styles';

const DiscountListPage = () => {
  const router = useRouter();
  // const { type = PRIVATE_COUPON, page } = router.query;
  const { type = PUBLIC_COUPON, page } = router.query;

  const { list, perPage, total, isLoading } = useList<ICoupon>({
    ...discountQuery.getDiscounts({
      type,
      page: typeof page === 'string' ? Number(page) : 1,
      limit: 4,
    }),
  });

  const totalPages = Math.ceil(total / perPage);

  const handleChangeTab = (value: number) => {
    const currentQuery = { ...router.query };
    if (value === CouponType.PRIVATE) {
      delete currentQuery.type;
    } else {
      currentQuery.type = PUBLIC_COUPON;
    }

    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  };

  const renderTabContent = () => (
    <TabContent data={list} isLoading={isLoading} />
  );

  const tabs = [
    {
      label: <TabLabelItem label="プライベート" />,
      component: renderTabContent(),
    },
    {
      label: <TabLabelItem label="公共" />,
      component: renderTabContent(),
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
        active={
          type === PRIVATE_COUPON ? CouponType.PRIVATE : CouponType.PUBLIC
        }
        // active={CouponType.PUBLIC}
        onChangeTab={handleChangeTab}
      />
      {totalPages > 1 && <ListPagination total={total} limit={4} />}
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
