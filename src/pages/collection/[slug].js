import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { Close } from "@/components/icons";
import CollectionView from "@/views/CollectionView";

const TabItem = ({ slug, title, active, collections, setCollections }) => {
  const router = useRouter();
  return (
    <div
      className={`relative mb-[-2px] h-full min-w-[180px] pl-4 pr-1 flex flex-row items-center justify-between gap-3 text-zinc-300 text-sm rounded-se-lg rounded-ss-lg before:absolute before:bottom-0 before:right-[-0.6px] before:z-20 before:h-[82%] before:w-[0.6px] before:bg-zinc-700 last-of-type:before:opacity-0 ${
        active
          ? "font-semibold bg-zinc-700 !text-white before:opacity-0"
          : "font-medium bg-zinc-900 "
      }`}
    >
      <Link
        href={`/collection/${slug}`}
        className="absolute inset-0 h-full w-full"
      ></Link>
      <span className="line-clamp-1">{title}</span>
      <button
        onClick={() => {
          if (collections?.length === 1) {
            router.push("/");
            return;
          }
          setCollections((prev) => {
            prev = prev?.filter((item) => item?.slug !== slug);
            if (active) router.push(`/collection/${prev?.at(-1)?.slug}`);
            return prev;
          });
        }}
        className="scale-75 rounded-full w-6 h-6 flex items-center justify-center transition-colors hover:bg-black/95"
      >
        <Close fill="white" />
      </button>
    </div>
  );
};

export default function Collection() {
  const router = useRouter();
  const { slug } = router.query;

  const [collections, setCollections] = useState([
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

  return (
    <>
      <Head>
        <title>
          {collections?.filter((item) => item?.slug == slug)?.[0]?.title} |
          Collection
        </title>
      </Head>
      <div className="w-full mt-[90px]">
        <div className="w-full h-9 pr-24 overflow-x-auto flex flex-row items-center justify-start ">
          {collections &&
            collections?.map((tab) => (
              <TabItem
                key={tab?.id}
                title={tab?.title}
                slug={tab?.slug}
                active={slug == tab?.slug}
                collections={collections}
                setCollections={setCollections}
              />
            ))}
          <button className="ml-[2px] scale-75 rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors bg-zinc-900 cursor-pointer hover:bg-zinc-700">
            <Close fill="white" className="rotate-45" />
          </button>
        </div>
        <CollectionView slug={slug} />
      </div>
    </>
  );
}
