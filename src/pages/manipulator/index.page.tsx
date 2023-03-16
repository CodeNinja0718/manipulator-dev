import { Box, CircularProgress } from '@mui/material';
import Layout from 'components/Layout';
import ListPagination from 'components/ListPagination';
import ManipulatorCard from 'components/ManipulatorList/ManipulatorCard';
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
import Helper from 'utils/helpers';

import styles from './styles';

const EmptyManipulator = dynamic(
  () => import('components/ManipulatorList/EmptyManipulator'),
);

const ManipulatorList = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isLoading, list, total } = useList<IManipulator>(
    manipulatorQuery.searchManiplator(Helper.encodeParams(router.query)),
  );

  useEffect(() => {
    setCurrentPage(Number(get(router, 'query.page', 1)));
  }, [router]);

  const manipulators = useMemo(() => {
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
            {total === 0 ? (
              // Empty List
              <EmptyManipulator />
            ) : (
              manipulators.map((item: IManipulator) => (
                <ManipulatorCard key={item._id} data={item} />
              ))
            )}
            {currentPage && total > 0 && (
              <Box display="flex" justifyContent="center">
                <ListPagination total={total} limit={10} />
              </Box>
            )}
          </>
        )}
      </>
    </Box>
  );
};

ManipulatorList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isCardLayout>
      <Box sx={styles.manipulatorContainer}>
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
