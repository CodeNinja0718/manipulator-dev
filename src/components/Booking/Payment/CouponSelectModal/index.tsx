import ArrowRight from '@icons/arrow-right.svg';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Modal,
  RadioGroup,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import CommonTabs from 'components/CommonTabs';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import type { ICoupon } from 'models/discount/interface';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

import styles from './styles';
import TabContent from './TabContent';

interface CouponSelectModalProps {
  visible: boolean;
  isLoading?: boolean;
  privateCoupons?: ICoupon[];
  publicCoupons?: ICoupon[];
  onClose: () => void;
  onSubmit?: (code: string) => void;
}

const CouponSelectModal = ({
  visible,
  isLoading,
  privateCoupons = [],
  publicCoupons = [],
  onClose,
  onSubmit,
}: CouponSelectModalProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedCode, setSelectedCode] = useState<string>('');

  const renderTabContent = (type: 'private' | 'public' = 'private') => {
    if (type === 'public') {
      return <TabContent data={publicCoupons} isLoading={isLoading} />;
    }
    return <TabContent data={privateCoupons} isLoading={isLoading} />;
  };

  const tabs = [
    {
      label: <TabLabelItem label="プライベート" />,
      component: renderTabContent(),
    },
    {
      label: <TabLabelItem label="公共" />,
      component: renderTabContent('public'),
    },
  ];

  const handleTabChange = (idx: number) => {
    setTabIndex(idx);
  };

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCode(e.target.value || '');
  };

  const onCancel = () => {
    setSelectedCode('');
    onClose();
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selectedCode);
    }
  };

  return (
    <Modal open={visible} onClose={onClose} keepMounted>
      <Box sx={styles.modalContainer}>
        <Box display="flex" justifyContent="center" sx={styles.titleModal}>
          <Typography color={'white'} fontWeight={'bold'} fontSize={18}>
            クーポン選択
          </Typography>
        </Box>
        <Box width={32} height={32} position="absolute" top={8} right={8}>
          <SvgIcon
            component={CloseIcon}
            onClick={onCancel}
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontSize: 32,
            }}
          />
        </Box>
        <Box display={'flex'} flexDirection={'column'} sx={styles.bodyModal}>
          <Box display={'flex'} flexDirection={'column'} sx={{ flex: 1 }}>
            <Stack spacing={2} sx={{ mb: 16 }}>
              <Typography fontWeight={'bold'} fontSize={16}>
                クーポンをお選びください。
              </Typography>
              <Typography fontWeight={'bold'} fontSize={14}>
                ※複数クーポンを同時に使えません。
              </Typography>
            </Stack>
            <RadioGroup value={selectedCode || ''} onChange={handleCodeChange}>
              <CommonTabs
                tabs={tabs}
                active={tabIndex}
                onChangeTab={handleTabChange}
              />
            </RadioGroup>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            sx={styles.buttonWrapper}
          >
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{ ...styles.submitBtn, mb: 8 }}
              onClick={handleSubmit}
              disabled={isLoading}
              endIcon={<ArrowRight />}
            >
              クーポンを使う
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              sx={{ ...styles.submitBtn, color: '#666666' }}
              onClick={onCancel}
              disabled={isLoading}
            >
              <SvgIcon component={CloseIcon} sx={{ fontSize: 24, mr: 8 }} />{' '}
              キャンセル
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CouponSelectModal;
