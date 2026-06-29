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
  const inputMatches = [...item.code.matchAll(/\{\{input(?::([^}]+))?\}\}/g)];
  const inputCount = inputMatches.length;
  
  const placeholders = inputMatches.map(match => match[1] || '');
  
  const [inputValues, setInputValues] = useState<string[]>(
    new Array(inputCount).fill('')
  );

  const hasInputs = inputCount > 0;

  const buildFinalCode = (): string => {
    if (!hasInputs) return item.code;

    let result = item.code;
    let currentIndex = 0;

    return result.replace(/\{\{input(?::[^}]+)?\}\}/g, () => {
      const value = inputValues[currentIndex] || '';
      currentIndex++;
      return value;
    });
  };

  const finalCode = buildFinalCode();

  const updateInputValue = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  // Улучшенный рендер инпутов: добавили удобные отступы для пальцев и выравнивание
  const renderCodeWithInputs = () => {
    if (!hasInputs) {
      return <>{item.code}</>;
    }

    const parts = item.code.split(/(\{\{input(?::[^}]+)?\}\})/);
    let inputIndex = 0;

    return parts.map((part, idx) => {
      if (part.match(/\{\{input(?::[^}]+)?\}\}/)) {
        const currentInputIndex = inputIndex;
        const placeholder = placeholders[currentInputIndex] || `#${currentInputIndex + 1}`;
        inputIndex++;
        
        return (
          <input
            key={`input-${idx}`}
            type="text"
            value={inputValues[currentInputIndex]}
            onChange={(e) => updateInputValue(currentInputIndex, e.target.value)}
            placeholder={placeholder}
            onClick={(e) => e.stopPropagation()}
            // Добавили py-1 для высоты, inline-block, align-middle и вертикальные маржи my-0.5, чтобы при переносе строк всё стояло ровно
            className="bg-zinc-950 border border-zinc-800 focus:border-scp-orange/60 rounded px-2 py-1 mx-1 text-xs font-mono text-zinc-200 min-w-[75px] max-w-[150px] focus:outline-none transition-all placeholder:text-zinc-600 inline-block align-middle my-0.5"
            style={{ width: `${Math.max(75, placeholder.length * 8)}px` }}
          />
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    // Добавили flex-col и зазоры gap-3, увеличили паддинги до p-4
    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80 hover:border-scp-orange/40 transition-all w-full overflow-hidden flex flex-col gap-3">
      
      {/* Шапка карточки: Название (теперь аккуратно переносится по словам) и более аккуратная кнопка */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm sm:text-base font-bold text-zinc-300 uppercase tracking-tight break-words flex-1">
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
          className={cn(
            "p-2 rounded-lg transition-colors shrink-0 border flex items-center justify-center",
            copiedKey === id 
              ? "bg-green-950/30 border-green-800 text-green-400" 
              : "bg-zinc-800/30 border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
          )}
        >
          {copiedKey === id ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Контейнер кода: Обернули в темную подложку bg-black/30, чтобы отделить от фона, и исправили перенос строк через break-words */}
      <div className="rich-text-preview text-xs sm:text-sm opacity-90 whitespace-pre-wrap break-words text-[#94949E] bg-black/30 p-3 rounded-lg border border-zinc-950 leading-relaxed">
        {renderCodeWithInputs()}
      </div>
      
      {/* Результат сборки: Сделали более явным и читаемым */}
      {hasInputs && inputValues.some(v => v.length > 0) && (
        <div className="pt-2 border-t border-zinc-800/80">
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-bold">
            Результат сборки:
          </div>
          <div className="text-xs text-scp-orange font-mono bg-zinc-950/50 p-2 rounded border border-zinc-900/50 break-all select-all">
            {finalCode}
          </div>
        </div>
      )}
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