const PlaygroundView = () => {
  return (
    <div className="w-screen h-screen mt-[85px] bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-screen h-full bg-red-400 flex flex-row items-center justify-center">
        <div className="h-full min-w-[320px] bg-blue-500">
          <div className="bg-red-900 min-h-full">a</div>
        </div>
        <div className="flex-1 w-full h-full flex flex-row items-center justify-center bg-zinc-600">
          <div className="flex-1 h-full w-full bg-green-500">
            <div className="min-h-full bg-lime-400">a</div>
          </div>
          <div className="flex-1 h-full w-full  bg-purple-500">
            <div className="min-h-full bg-teal-600">b</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundView;
