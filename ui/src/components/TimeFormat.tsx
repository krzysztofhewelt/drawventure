import { t } from 'i18next';

const TimeFormat = ({ time }: { time: number }) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time % 60);

  return (
    <>
      {minutes > 0 && minutes + t('miscellaneous.time.minutes')} {seconds + t('miscellaneous.time.seconds')}
    </>
  );
};

export default TimeFormat;
