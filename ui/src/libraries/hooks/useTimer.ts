import { useState, useRef, useEffect } from 'react';

export const useTimer = (initialStartTime: number) => {
  const [startTime] = useState(initialStartTime);
  const interval = useRef<number>();
  const [time, setTime] = useState(new Date().getTime() - startTime);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(new Date().getTime() - startTime);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [startTime]);

  return time / 1000;
};
