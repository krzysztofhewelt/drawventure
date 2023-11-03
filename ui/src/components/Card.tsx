import { MouseEventHandler, ReactNode } from 'react';

// TODO: ability to style subcomponents: CardHeader, CardImage, CardDescription

interface Props {
  className: string;
  header: ReactNode;
  description: ReactNode;
  image: string;
  imagePosition: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card = ({ header, description, image, imagePosition, className, onClick }: Props) => {
  return (
    <div
      className={
        imagePosition == 'left'
          ? 'flex flex-row gap-4 p-2 ' + className
          : 'flex flex-row-reverse gap-4 p-2 ' + className
      }
      onClick={onClick}
    >
      <img src={image} alt={image} className="my-auto h-3/4 w-1/3" />
      <div className="flex w-full flex-col p-4">
        <h3 className="text-2xl font-bold">{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
