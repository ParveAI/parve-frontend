import CropperView from "@/modals/components/UploadModal/components/CropperView";
import Dropdown from "@/shared/Dropdown";
import TabWrapper from "@/shared/TabWrapper";

const itemsArray = [
  [
    {
      name: "Edit",
      icon: (
        <EditIcon
          fill="transparent"
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
      ),
      onClick: () => alert("edit"),
    },
    {
      name: "Duplicate",
      icon: (
        <DuplicateIcon
          fill="transparent"
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
      ),
    },
  ],
  [
    {
      name: "Edit",
      icon: (
        <EditIcon
          fill="transparent"
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
      ),
    },
    {
      name: "Duplicate",
      icon: (
        <DuplicateIcon
          fill="transparent"
          className="mr-2 h-5 w-5"
          aria-hidden="true"
        />
      ),
    },
  ],
];

export default function TestPage() {
  return (
    <div className="mt-[120px] flex items-start justify-center w-full h-full">
      {/* <CropperView /> */}
      {/* <Dropdown itemsArray={itemsArray}>
        <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md focus:outline-none">
          Dropdown
        </div>
      </Dropdown> */}
      <TabWrapper />
    </div>
  );
}

function EditIcon({ fill = "#8B5CF6", stroke = "#C4B5FD", ...props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateIcon({ fill = "transparent", ...props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4H12V12H4V4Z" fill={fill} stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill={fill} stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
