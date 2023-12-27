import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import React, { useState } from 'react';
import Toolbox from './Toolbox';
import { Color } from 'types/types';
import { colors } from 'consts/color';
import { downloadImage } from '@lib/downloadImage';
import Timer from '@components/Timer';

interface Props {
  timer?: number;
}

const DrawingArea = ({ timer }: Props) => {
  const canvas = React.createRef<ReactSketchCanvasRef>();
  const [color, setColor] = useState<Color>(colors.black);
  const [colorBeforeErase, setColorBeforeErase] = useState<Color>(colors.black);

  const handleColorChange = (newColor: Color) => {
    setColor(newColor);
  };

  const handleRevert = () => {
    const undo = canvas.current?.undo;

    if (undo) undo();
  };

  const handleErase = (enable: boolean) => {
    if (enable) {
      setColorBeforeErase(color);
      setColor(colors.white);
    } else {
      setColor(colorBeforeErase);
    }
  };

  const handleDownload = async () => {
    const image = canvas.current?.exportImage;

    if (image) {
      const exportedImageURI = await image('png');
      downloadImage(exportedImageURI);
    }
  };

  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-2">
        {timer && <Timer className="mb-4 text-3xl font-bold" startTime={timer} />}
        <Toolbox
          onErase={() => handleErase(true)}
          onRevert={handleRevert}
          onDraw={() => handleErase(false)}
          onColorChange={handleColorChange}
          onDownload={handleDownload}
          canDownload={true}
        />
        <ReactSketchCanvas ref={canvas} strokeWidth={5} eraserWidth={12} strokeColor={color} />
      </div>
    </>
  );
};

export default DrawingArea;
