import { useEffect, useState } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const start = Date.now();

  const getTime = () => {
    const diff = Date.now() - start;

    setMinutes(
      Math.floor((diff / 1000 / 60) % 60)
        .toString()
        .padStart(2, '0')
    );
    setSeconds(
      Math.floor((diff / 1000) % 60)
        .toString()
        .padStart(2, '0')
    );
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {minutes}:{seconds}s
    </>
  );
};

export default Timer;
