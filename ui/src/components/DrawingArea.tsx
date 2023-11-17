import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import React, { useState } from 'react';
import Toolbox from './Toolbox';
import { Color } from 'types/types';
import { colors } from 'consts/color';
import { downloadImage } from '@lib/downloadImage';

const DrawingArea = () => {
  const canvas = React.createRef<ReactSketchCanvasRef>();
  const [color, setColor] = useState<Color>(colors.red);

  const handleColorChange = (newColor: Color) => {
    setColor(newColor);
  };

  const handleRevert = () => {
    const undo = canvas.current?.undo;

    if (undo) undo();
  };

  const handleErase = (enable: boolean) => {
    const eraseMode = canvas.current?.eraseMode;

    if (eraseMode) eraseMode(enable);
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
