import { MouseEventHandler, ReactNode, useState } from 'react';
import Return from '@icons/Return.svg?react';
import Rubber from '@icons/Rubber.svg?react';
import Pencil from '@icons/Pencil.svg?react';
import Palette from '@icons/Palette.svg?react';
import Download from '@icons/Download.svg?react';
import classNames from 'classnames';
import { useOutsideClick } from '@lib/clickOutside';
import { drawingMode } from '../consts/drawingMode';
import { Color, DrawMode } from '../types/types';
import { t } from 'i18next';
import { colors } from 'consts/color';

interface ToolboxProps {
  canDownload: boolean;
  onErase: () => void;
  onRevert: () => void;
  onDraw: () => void;
  onColorChange: (newColor: Color) => void;
  onDownload: () => void;
}

interface ToolboxItemProps {
  icon: ReactNode;
  text: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

interface ToolboxColorPickerProps {
  onColorChange: (newColor: Color) => void;
  handleClose: () => void;
}

interface ToolboxColorPickerElementProps {
  color: Color;
  onColorChange: (newColor: Color) => void;
  handleClose: () => void;
}

const ToolboxItem = ({ icon, text, active, onClick }: ToolboxItemProps) => {
  const style: string =
    'flex cursor-pointer flex-col items-center justify-center gap-2 border-black p-1 text-center select-none hover:text-primary hover:fill-primary';

  return (
    <div className={classNames(style, active && ' border font-bold')} onClick={onClick}>
      <div>{icon}</div>
      <div className="text-xs">{text}</div>
    </div>
  );
};

const ToolboxColorPicker = ({ onColorChange, handleClose }: ToolboxColorPickerProps) => {
  return Object.values(colors).map((color) => (
    <ToolboxColorPickerElement color={color} key={color} onColorChange={onColorChange} handleClose={handleClose} />
  ));
};

const ToolboxColorPickerElement = ({ color, onColorChange, handleClose }: ToolboxColorPickerElementProps) => {
  const handleChange = (color: Color) => {
    onColorChange(color);
    handleClose();
  };

  return (
    <div
      className="h-10 w-10 rounded-full hover:cursor-pointer"
      style={{ backgroundColor: color }}
      id={color}
      onClick={() => handleChange(color)}
    ></div>
  );
};

const Toolbox = ({ canDownload, onErase, onRevert, onDraw, onColorChange, onDownload }: ToolboxProps) => {
  const iconStyle: string = 'h-6 fill-inherit';
  const [colorPicker, setColorPicker] = useState(false);
  const [activeMode, setActiveMode] = useState<DrawMode>(drawingMode.DRAW);
  const colorPickerRef = useOutsideClick(() => {
    setColorPicker(false);
  });

  return (
    <div className="flex gap-x-6">
      <ToolboxItem icon={<Return className={iconStyle} />} text={t('toolbox.undo')} onClick={onRevert} active={false} />
      <ToolboxItem
        icon={<Rubber className={iconStyle} />}
        text={t('toolbox.erase')}
        onClick={() => {
          onErase();
          setActiveMode(drawingMode.ERASE);
        }}
        active={activeMode == drawingMode.ERASE}
      />
      <ToolboxItem
        icon={<Pencil className={iconStyle} />}
        text={t('toolbox.draw')}
        onClick={() => {
          onDraw();
          setActiveMode(drawingMode.DRAW);
        }}
        active={activeMode == drawingMode.DRAW}
      />
      <div ref={colorPickerRef} className="relative">
        <ToolboxItem
          icon={<Palette className={iconStyle} />}
          onClick={() => {
            setColorPicker(!colorPicker);
          }}
          text={t('toolbox.color')}
          active={false}
        />
        {colorPicker && (
          <div className="absolute z-50 flex flex-col gap-y-3 rounded-normal border border-slate-400 bg-background p-2 drop-shadow-md">
            <ToolboxColorPicker onColorChange={onColorChange} handleClose={() => setColorPicker(false)} />
          </div>
        )}
      </div>
      {canDownload && (
        <ToolboxItem
          icon={<Download className={iconStyle} />}
          onClick={onDownload}
          text={t('toolbox.download')}
          active={false}
        />
      )}
    </div>
  );
};

export default Toolbox;
