import { useTimer } from '@lib/timer';

const Timer = () => {
  const time = useTimer(new Date().getTime());
  const dateFormatter = new Intl.DateTimeFormat('pl', { minute: '2-digit', second: '2-digit' });

  // const testDate = new Date().setTime(60000);
  // const datee = new Intl.NumberFormat('pl-PL', { style: 'unit', unit: 'second', unitDisplay: 'short' }).format(testDate/1000);

  return (
    <>
      {dateFormatter.format(time)}
    </>
  );
};

export default Timer;
