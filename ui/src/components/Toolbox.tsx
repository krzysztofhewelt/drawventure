import { MouseEventHandler, ReactNode, useState } from 'react';
import Return from '@icons/Return.svg?react';
import Rubber from '@icons/Rubber.svg?react';
import Pencil from '@icons/Pencil.svg?react';
import Palette from '@icons/Palette.svg?react';

interface Props {
  icon: ReactNode;
  text: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ToolboxItem = ({ icon, text, active, onClick }: Props) => {
  const style: string =
    'flex cursor-pointer flex-col items-center justify-center gap-2 border-black p-1 text-center select-none hover:text-primary hover:fill-primary';

  return (
    <div className={active ? style + ' border font-bold' : style} onClick={onClick}>
      <div>{icon}</div>
      <div className="text-xs">{text}</div>
    </div>
  );
};

const ToolboxColorPicker = () => {
  const colors = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-300',
  };

  return Object.entries(colors).map(([key, value]) => (
    <ToolboxColorPickerElement color={key} colorClass={value} key={key} />
  ));
};

const ToolboxColorPickerElement = ({ color, colorClass }: { color: string; colorClass: string }) => {
  return <div className={`h-10 w-10 rounded-full ${colorClass} hover:cursor-pointer`} id={color}></div>;
};

const Toolbox = () => {
  const iconStyle: string = 'h-6 fill-inherit';
  const [colorPicker, setColorPicker] = useState(false);

  return (
    <div className="flex gap-x-6">
      <ToolboxItem icon={<Return className={iconStyle} />} text="Cofnij" active={false} />
      <ToolboxItem icon={<Rubber className={iconStyle} />} text="Gumka" active={false} />
      <ToolboxItem icon={<Pencil className={iconStyle} />} text="Ołówek" active={true} />
      <div className="relative">
        <ToolboxItem
          icon={<Palette className={iconStyle} />}
          onClick={() => setColorPicker(!colorPicker)}
          text="Kolor"
          active={false}
        />
        {colorPicker && (
          <div className="absolute z-50 flex flex-col gap-y-3 rounded-normal border border-slate-400 bg-background p-2 drop-shadow-md">
            <ToolboxColorPicker />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbox;
