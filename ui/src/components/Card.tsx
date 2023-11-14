import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  className: string;
  header: ReactNode;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Card = ({ header, description, image, imagePosition, className, onClick }: Props) => {
  const style = classNames(
    className,
    'flex flex-col gap-4 p-2',
    imagePosition == 'left' && 'sm:flex-row',
    imagePosition == 'right' && 'sm:flex-row-reverse'
  );

  return (
    <div className={style} onClick={onClick}>
      <img src={image} alt={image} className="my-auto h-3/4 w-1/3" />
      <div className="w-full p-4">
        <h3 className="text-2xl font-bold">{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
