import { useTimer } from '@lib/hooks/useTimer';

const Timer = ({startTime}: {startTime: number}) => {
  const time = useTimer(startTime);
  const dateFormatter = new Intl.DateTimeFormat('pl', { minute: '2-digit', second: '2-digit' });

  return (
    <>
      {dateFormatter.format(time)}
    </>
  );
};

export default Timer;
