import * as React from "react";
const LinkExternal = ({ fill = "#000", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: fill,
    }}
    {...props}
  >
    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
  </svg>
);
export default LinkExternal;
