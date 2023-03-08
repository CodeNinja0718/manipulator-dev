import { Button, Stack } from '@mui/material';
import { STEPPER_CONTENT } from 'utils/const';

import styles from './styles';

interface BookingStepperProps {
  currentStep: string;
  onChangeStep: (step: string) => void;
}

const BookingStepper: React.FC<BookingStepperProps> = ({
  currentStep,
  onChangeStep,
}) => {
  const stepIndex = STEPPER_CONTENT.findIndex(
    (step) => step.value === currentStep,
  );

  return (
    <Stack direction="row" sx={styles.stepperWrapper}>
      {STEPPER_CONTENT.map((content, index) => {
        return (
          <Button
            color="secondary"
            variant="text"
            size="small"
            key={content.value}
            sx={styles.stepBtn}
            data-completed={stepIndex > index}
            data-active={currentStep === content.value}
            onClick={() => {
              if (stepIndex > index) {
                onChangeStep(content.value);
              }
            }}
          >
            {content.label}
          </Button>
        );
      })}
    </Stack>
  );
};

export default BookingStepper;
