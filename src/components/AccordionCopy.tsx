import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { cn } from '../utils/cn';
import ReactGA from 'react-ga4';

interface DatabaseItem {
  group: string;
  subgroup?: string;
  name: string;
  code: string;
}

interface AccordionCopyProps {
  items: DatabaseItem[];
}

interface ItemCardProps {
  item: DatabaseItem;
  id: string;
  copiedKey: string | null;
  setCopiedKey: (key: string | null) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, id, copiedKey, setCopiedKey }) => {
  const [inputValue, setInputValue] = useState('');

  const hasInput = item.code.includes('{{input}}');
  const parts = hasInput ? item.code.split('{{input}}') : [];
  
  const finalCode = hasInput 
    ? parts.join(inputValue) 
    : item.code;

  return (
    <div className="bg-zinc-900/60 p-3 rounded border border-zinc-800 hover:border-zinc-700 transition-colors w-full overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[16px] font-bold text-zinc-300 uppercase tracking-tight truncate flex-1 mr-2">
          {item.name}
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(finalCode);
            setCopiedKey(id);

            ReactGA.event({
              category: 'Взаимодействие',
              action: 'copy_item',
              label: item.name,
              value: 1,
              nonInteraction: false,
            });

            setTimeout(() => setCopiedKey(null), 2000);
          }}
          className="p-1 hover:bg-zinc-800 rounded transition-colors shrink-0"
        >
          {copiedKey === id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-zinc-500" />}
        </button>
      </div>
      <div className="rich-text-preview text-xs opacity-90 whitespace-pre-wrap break-words line-clamp-3 text-[#73737D]">
        {hasInput ? (
          <>
            {parts[0]}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder=""
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-800/50 border border-zinc-700 rounded-sm px-1 py-0.5 mx-1 text-xs text-zinc-300 w-24 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-zinc-600 transition-all"
            />
            {parts[1]}
          </>
        ) : (
          item.code
        )}
      </div>
    </div>
  );
};


export const AccordionCopy: React.FC<AccordionCopyProps> = ({ items }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [openSubgroups, setOpenSubgroups] = useState<string[]>([]);

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = { withSub: {}, withoutSub: [] };

    if (item.subgroup && item.subgroup.trim() !== '') {
      if (!acc[item.group].withSub[item.subgroup]) acc[item.group].withSub[item.subgroup] = [];
      acc[item.group].withSub[item.subgroup].push(item);
    } else {
      acc[item.group].withoutSub.push(item);
    }
    return acc;
  }, {} as Record<string, { withSub: Record<string, DatabaseItem[]>; withoutSub: DatabaseItem[] }>);

  const toggle = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, id: string) => {
    setList((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-4">
      {Object.entries(groupedItems).map(([group, data]) => (
        <div key={group} className="scp-panel rounded-lg overflow-hidden border border-zinc-800">
          <button
            onClick={() => toggle(openGroups, setOpenGroups, group)}
            className="w-full flex items-center justify-between p-4 bg-zinc-800/50 hover:bg-zinc-800"
          >
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-scp-orange flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-scp-orange" />
              {group}
            </h3>
            <ChevronDown className={cn('w-5 h-5 transition-transform', openGroups.includes(group) && 'rotate-180')} />
          </button>

          <AnimatePresence>
            {openGroups.includes(group) && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden bg-black/20"
              >
                <div className="p-3 space-y-4">
                  {Object.entries(data.withSub).map(([subgroup, subItems]) => {
                    const subId = `${group}-${subgroup}`;
                    return (
                      <div key={subgroup} className="rounded border border-zinc-800/50 overflow-hidden">
                        <button
                          onClick={() => toggle(openSubgroups, setOpenSubgroups, subId)}
                          className="w-full flex items-center justify-between p-2 px-4 bg-zinc-900/40 hover:bg-zinc-900/80 text-[14px] font-bold text-zinc-400 uppercase tracking-widest"
                        >
                          <span className="flex items-center gap-2">
                            {subgroup}
                            <span className="text-[12px] opacity-40">[{subItems.length}]</span>
                          </span>
                          <ChevronDown className={cn('w-3 h-3 transition-transform', openSubgroups.includes(subId) && 'rotate-180')} />
                        </button>
                        <AnimatePresence>
                          {openSubgroups.includes(subId) && (
                            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="p-3 grid gap-3">
                                {subItems.map((item, idx) => (
                                  <ItemCard
                                    key={idx}
                                    item={item}
                                    id={`${subId}-${idx}`}
                                    copiedKey={copiedKey}
                                    setCopiedKey={setCopiedKey}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  {data.withoutSub.length > 0 && (
                    <div className="grid gap-3 pt-2">
                      {data.withoutSub.map((item, idx) => (
                        <ItemCard
                          key={idx}
                          item={item}
                          id={`${group}-no-sub-${idx}`}
                          copiedKey={copiedKey}
                          setCopiedKey={setCopiedKey}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};