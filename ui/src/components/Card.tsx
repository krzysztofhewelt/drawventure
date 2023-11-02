// CardHeader
// CardDescription

import React, { ReactNode } from 'react';

interface Props {
  className: string;
  header: ReactNode;
  description: ReactNode;
  image: string;
  imagePosition: 'left' | 'right';
}

const Card: React.FC<Props> = ({ header, description, image, imagePosition, className }) => {
  return (
    <div
      className={
        imagePosition == 'left' ? 'flex flex-row gap-4 ' + className : 'flex flex-row-reverse gap-4 ' + className
      }
    >
      <img src={image} alt={image} className="w-1/3" />
      <div className="flex w-full flex-col p-4">
        <h3 className="text-2xl font-bold">{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
