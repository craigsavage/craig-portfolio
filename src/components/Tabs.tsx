'use client';

import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  items: string[];
};

interface TabsProps {
  tabs: Tab[];
}

interface TabHeadersProps {
  tabs: Tab[];
  active: string;
  setActive: (id: string) => void;
}

interface TabContentProps {
  tabs: Tab[];
  active: string;
}

/** Tabs Component */
export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className='w-full'>
      <TabHeaders tabs={tabs} active={active} setActive={setActive} />
      <TabContent tabs={tabs} active={active} />
    </div>
  );
}

/** Tab Headers Component */
export function TabHeaders({ tabs, active, setActive }: TabHeadersProps) {
  return (
    <div className='flex flex-wrap gap-2'>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`pb-2 px-4 font-medium ${
            active === tab.id
              ? 'border-b-2 border-sky-500 text-sky-600'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
          onClick={() => setActive(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/** Tab Content Component */
export function TabContent({ tabs, active }: TabContentProps) {
  return (
    <div className='py-6'>
      {tabs.map(tab =>
        active === tab.id ? (
          <div key={tab.id} className='animate-fadeIn'>
            <div className='flex flex-wrap gap-2'>
              {tab.items.map(skill => (
                <span
                  key={skill}
                  className='inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 dark:bg-sky-700/20 dark:text-sky-300'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
