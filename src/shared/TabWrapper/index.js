import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

export default function TabWrapper({ categories, isLoading }) {
  if (isLoading) return <TabSkeleton />;
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-zinc-600/20 border border-zinc-700/50 p-2 overflow-y-auto">
          {categories &&
            categories?.map((category) => (
              <Tab
                key={category?.slug}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 px-5 rounded-lg text-sm font-semibold leading-5 ",
                    "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow !text-main"
                      : "text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category?.title}
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories?.map((category) => (
            <Tab.Panel key={category?.slug}>{category?.content}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

const TabSkeleton = () => {
  return (
    <div className="w-full">
      <div className="animate-pulse">
        <div className="h-[58px] flex space-x-2 rounded-xl bg-zinc-600/30 p-2">
          <div className="w-[120px] py-2.5 px-5 rounded-lg text-white bg-white/[0.06]" />
          <div className="w-[80px] py-2.5 px-5 rounded-lg text-white bg-white/[0.06]"></div>
          <div className="w-[100px] py-2.5 px-5 rounded-lg text-white bg-white/[0.06]"></div>
        </div>
        <div className="mt-4">
          <div className="w-full h-96 bg-zinc-600/20 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
