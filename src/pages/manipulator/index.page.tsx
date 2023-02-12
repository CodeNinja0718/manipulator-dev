import {
  Box,
  CircularProgress,
  Pagination,
  useMediaQuery,
} from '@mui/material';
import Layout from 'components/Layout';
import type { ManipulatorCardModel } from 'components/ManipulatorList/ManipulatorCard/model';
import ManipulatorHeader from 'components/ManipulatorList/ManipulatorHeader';
import SearchColumn from 'components/ManipulatorList/SearchColumn';
import useList from 'hooks/useList';
import get from 'lodash/get';
import type { IManipulator } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import theme from 'theme';
import Helper from 'utils/helpers';

import styles from './styles';

const ManipulatorCard = dynamic(
  () => import('components/ManipulatorList/ManipulatorCard'),
);
const EmptyManipulator = dynamic(
  () => import('components/ManipulatorList/EmptyManipulator'),
);

const ManipulatorList = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isMobile = useMediaQuery(theme.breakpoints.down('normalTablet'));
  const { isLoading, list, total } = useList<IManipulator>(
    manipulatorQuery.searchManiplator(Helper.encodeParams(router.query)),
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    const newQuery = { ...get(router, 'query', {}), page: value };
    setCurrentPage(value);
    router.push({
      pathname: `/manipulator`,
      query: {
        ...newQuery,
      },
    });
  };

  useEffect(() => {
    setCurrentPage(Number(get(router, 'query.page', 1)));
  }, [router]);

  const manipulators = useMemo(() => {
    // return mockupList;
    return list || [];
  }, [list]);

  return (
    <Box sx={styles.rightContainer}>
      <>
        {isLoading ? (
          <Box sx={styles.loadingBox}>
            <CircularProgress size="small" sx={styles.loading} />
          </Box>
        ) : (
          <>
            <ManipulatorHeader resultTotal={total} />
            {manipulators.map((item: ManipulatorCardModel) => (
              <ManipulatorCard key={item.id} data={item} />
            ))}
            {currentPage && total > 0 && (
              <Box display="flex" justifyContent="center">
                <Pagination
                  color="orange"
                  count={10}
                  siblingCount={isMobile ? 0 : 1}
                  shape="rounded"
                  page={currentPage}
                  onChange={handleChangePage}
                />
              </Box>
            )}
            {/* Empty List */}
            {total === 0 && <EmptyManipulator />}
          </>
        )}
      </>
    </Box>
  );
};

ManipulatorList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isCardLayout>
      <Box display={{ xs: 'flex' }}>
        <Box sx={styles.leftContainer}>
          <SearchColumn />
        </Box>
        <Box overflow="hidden" width="100%">
          {page}
        </Box>
      </Box>
    </Layout>
  );
};

export default ManipulatorList;
