import Toolbox from './Toolbox.tsx';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import React, { useState } from 'react';

const DrawingArea = () => {
  const canvas = React.createRef<ReactSketchCanvasRef>();
  const [color, setColor] = useState('red');
  const [imageURI, setImageURI] = useState('');

  const handleColorChange = (newColor: string) => {
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
    const downloadImg = canvas.current?.exportImage;

    if (downloadImg) {
      const exportedImageURI = await downloadImg('png');
      setImageURI(exportedImageURI);
    }
  };

  return (
    <>
      <div className="flex h-[600px] w-1/2 flex-col items-center">
        <Toolbox
          onErase={() => handleErase(true)}
          onRevert={handleRevert}
          onDraw={() => handleErase(false)}
          onColorChange={handleColorChange}
          onDownload={handleDownload}
          canDownload={true}
        />
        <ReactSketchCanvas ref={canvas} strokeWidth={4} eraserWidth={12} strokeColor={color} />
      </div>
      <img src={imageURI} alt="your sketch" className="h-96 w-96" />
    </>
  );
};

export default DrawingArea;
