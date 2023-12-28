import { useTimer } from '@lib/hooks/useTimer';
import TimeFormat from '@components/TimeFormat';

const Timer = ({ startTime, className }: { startTime: number; className?: string }) => {
  const time = useTimer(startTime);

  return (
    <div className={className}>
      <TimeFormat time={time} normalFormat={true} />
    </div>
  );
};

export default Timer;
