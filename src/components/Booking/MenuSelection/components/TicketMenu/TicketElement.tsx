import ArrowRight from '@icons/arrow-right.svg';
import ArrowDownIcon from '@icons/fill-arrow-down.svg';
import ArrowUpIcon from '@icons/fill-arrow-up.svg';
import { Box, Button, Stack, Typography } from '@mui/material';
import { NumberInput } from 'components/NumberInput';
import type { ITicket } from 'models/manipulator/interface';

import styles from './styles';

interface ITicketElement {
  isShowAvailableCount: boolean;
  onAddTicket: () => void;
  availableCount: number;
  handleChangeTicket: () => void;
  numberOfTicketRef: React.RefObject<HTMLInputElement>;
  ticket: ITicket | any;
  isSelected: boolean | any;
}

const TicketElement: React.FC<ITicketElement> = ({
  isShowAvailableCount,
  onAddTicket,
  availableCount,
  ticket,
  handleChangeTicket,
  numberOfTicketRef,
  isSelected,
}) => {
  const handleExistTicket = () => {
    const numberTicket = availableCount || ticket?.numberOfTicket || 0;
    let numberOfSelectedTicket = ticket?.numberOfSelectedTicket || 1;

    if (numberOfTicketRef?.current) {
      const children: any = numberOfTicketRef?.current?.firstChild;
      numberOfSelectedTicket = children?.value || 1;
    }

    return isSelected ? numberTicket - numberOfSelectedTicket : numberTicket;
  };

  return (
    <Stack
      direction={'column'}
      alignItems={{ xs: 'flex-end', tablet: 'flex-start' }}
    >
      {isShowAvailableCount ? (
        <Button
          size="medium"
          color="primary"
          endIcon={<ArrowRight />}
          variant="contained"
          sx={styles.addTicketBtn}
          onClick={onAddTicket}
        >
          回数券購入へ進む
        </Button>
      ) : (
        <Stack direction={'row'} spacing={10} pl={11} alignItems={'center'}>
          <Box sx={styles.ticketLeft}>
            <Typography sx={styles.ticketLeftText}>
              残り
              <Typography component={'span'} sx={styles.ticketLeftNumber}>
                {handleExistTicket()}
              </Typography>
              回
            </Typography>
          </Box>
          <Typography sx={styles.text} pl={5}>
            使用する
          </Typography>
          <NumberInput
            ref={numberOfTicketRef}
            sx={styles.numberInput}
            className={`${isSelected ? '' : ' hide'}`}
            onClick={handleChangeTicket}
            required
            inputProps={{
              inputMode: 'numeric',
              pattern: '[1-9]*',
            }}
            value={ticket?.numberOfSelectedTicket || 1}
            min={1}
            max={availableCount || ticket?.numberOfTicket || 1}
          />
          <Box
            sx={styles.defaultNumberOfTicket}
            className={`${!isSelected ? '' : ' hide'}`}
          >
            <>0</>
            <Box sx={styles.arrowGroupBtn}>
              <ArrowUpIcon width={10} height={5} color="black" />
              <ArrowDownIcon
                width={10}
                height={5}
                color="black"
                opacity={0.5}
              />
            </Box>
          </Box>
          <Typography sx={styles.text}>回</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default TicketElement;
