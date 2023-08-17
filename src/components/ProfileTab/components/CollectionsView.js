import { useEffect, useState } from "react";
import Link from "next/link";
import { Dots, Magic, LinkExternal } from "@/components/icons";
import Dropdown from "@/shared/Dropdown";

const CollectionsView = () => {
  let [collections, setCollections] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCollections([
        {
          id: 1,
          slug: "random-questions",
          title: "Random Questions",
        },
        {
          id: 2,
          slug: "react-native-supabase-interview",
          title: "React Native Supabase Interveiw",
        },
        {
          id: 3,
          slug: "ceng-programming-final-exam-2021",
          title: "Ceng Programming Final Exam 2021",
        },
        {
          id: 4,
          slug: "flutter-firebase-interview",
          title: "Flutter Firebase Interview",
        },

        {
          id: 5,
          slug: "first-collection",
          title: "First Collection",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start text-left pt-4 text-white">
      <div className="w-full flex flex-row items-center justify-between mb-5">
        <h4 className="font-bold text-bold text-2xl ">All Collections</h4>
        <input
          type="text"
          placeholder="Search"
          className="w-[35%] h-full px-3 py-2 rounded-md text-white bg-white/10 max-md:hidden"
        />
      </div>
      <div className="w-full grid grid-cols-2 grid-flow-row gap-4 2xl:grid-cols-3 max-md:grid-cols-1">
        {!collections &&
          [...Array(5)].map((_, i) => <CollectionSkeleton key={i} />)}
        {collections &&
          collections?.map((collection) => (
            <CollectionItem
              key={collection.id}
              title={collection.title}
              slug={collection.slug}
            />
          ))}
      </div>
    </div>
  );
};

const CollectionItem = ({ title, slug }) => {
  return (
    <div className="bg-gradient-to-br from-main/50 from-[10%] to-orange-500/50 flex items-start justify-between rounded-md">
      <Link href={`/collections/${slug}`} className="h-full w-full pl-5 py-5">
        <h5 className="h-full w-[80%] font-[CabinetGrotesk-ExtraBold] text-2xl ">
          {title}
        </h5>
      </Link>

      <div className="h-full pl-0  flex flex-col items-start justify-center">
        <Dropdown
          itemsArray={[
            [
              {
                name: "Edit",
                icon: <LinkExternal fill="white" className="scale-90" />,
                onClick: () => alert("edit"),
              },
              {
                name: "Edit",
                icon: <Magic fill="white" className="!scale-50" />,
                onClick: () => alert("edit"),
              },
            ],
          ]}
        >
          <div className="mt-5 mr-5 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center transition-colors hover:bg-black/40">
            <Dots fill="white" />
          </div>
        </Dropdown>
        <Link
          href={`/collections/${slug}`}
          className="h-full w-full pl-5 py-5 "
        ></Link>
      </div>
    </div>
  );
};

const CollectionSkeleton = () => {
  return (
    <div className="animate-pulse min-h-[80px] p-5 bg-zinc-700 flex items-center justify-between rounded-md">
      <div className="h-full w-full">
        <div className="h-full w-[80%] bg-zinc-600 rounded-lg"></div>
      </div>
      <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
        <Dots fill="white" />
      </div>
    </div>
  );
};

export default CollectionsView;
