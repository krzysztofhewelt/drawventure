import { useTimer } from '@lib/hooks/useTimer';

const Timer = ({ startTime, className }: { startTime: number; className?: string }) => {
  const time = useTimer(startTime);
  const dateFormatter = new Intl.DateTimeFormat('pl', { minute: '2-digit', second: '2-digit' });

  return <div className={className}>{dateFormatter.format(time)}</div>;
};

export default Timer;
