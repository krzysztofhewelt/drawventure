import { t } from 'i18next';

const TimeFormat = ({ time, normalFormat }: { time: number; normalFormat: boolean }) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time % 60);

  const formatTime = () => {
    if (normalFormat) return normalTime();

    return humanizeTime();
  };

  const humanizeTime = () => {
    return (
      (minutes > 0 ? minutes + t('miscellaneous.time.minutes') : '') + ' ' + seconds + t('miscellaneous.time.seconds')
    );
  };

  const normalTime = () => {
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  };

  return <>{formatTime()}</>;
};

TimeFormat.defaultProps = {
  normalFormat: false,
};

export default TimeFormat;
