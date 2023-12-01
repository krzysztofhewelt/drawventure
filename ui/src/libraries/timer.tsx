import { useEffect, useState } from 'react';

export const useTimer = (initialStartTime: number) => {
  const [startTime] = useState(initialStartTime);
  const [time, setTime] = useState(new Date().getTime() - startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return time;
};
