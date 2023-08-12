import { Resizable } from "re-resizable";
const PlaygroundView = () => {
  return (
    <div className="w-screen h-screen mt-[85px] bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-screen h-full bg-red-400 flex flex-row items-center justify-center">
        <div className="h-full w-fit bg-blue-500">
          <Resizable
            defaultSize={{
              width: 200,
              height: "100%",
            }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            minWidth={50}
            minHeight={"100%"}
            maxWidth={"70vw"}
          >
            <div className="bg-red-900 min-h-full">a</div>
          </Resizable>
        </div>
        <div className="flex-1 w-full h-full flex flex-row items-center justify-center bg-zinc-600">
          <div className="h-full w-fit min-w-[50px] bg-green-500">
            <Resizable
              defaultSize={{
                height: 500,
              }}
              enable={{
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
              minWidth={50}
              minHeight={"100%"}
            >
              <div className="min-h-full bg-lime-400">a</div>
            </Resizable>
          </div>
          <div className="flex-1 h-full min-w-[50px] bg-purple-500">
            <div className="min-h-full bg-teal-600">b</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundView;
