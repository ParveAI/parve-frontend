import { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

export default function TabWrapper({ categories }) {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-zinc-300/20 p-1">
          {categories?.map((category) => (
            <Tab
              key={category?.slug}
              className={({ selected }) =>
                classNames(
                  "py-2.5 px-5 rounded-lg text-sm font-semibold leading-5 text-main",
                  "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
