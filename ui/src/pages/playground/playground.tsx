import DrawingArea from '@components/DrawingArea';

export default function Playground() {
  return (
    <div className="h-screen">
      <div className="mx-auto h-3/4 w-3/4">
        <DrawingArea />
      </div>
    </div>
  );
}
