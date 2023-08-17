import { useState } from "react";

import CollectionsView from "./components/CollectionsView";
import TabWrapper from "@/shared/TabWrapper";

const ProfileTab = ({ isLoading = false }) => {
  let [categories] = useState([
    {
      slug: "collections",
      title: "Collections",
      content: <CollectionsView />,
    },
    {
      slug: "history",
      title: "History",
      content: <CollectionsView />,
    },
  ]);

  return <TabWrapper categories={categories} isLoading={isLoading} />;
};

export default ProfileTab;
