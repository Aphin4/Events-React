import { ChevronDown, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const InfoSection = ({ title, color = "scp-orange", children }: { title: string, color?: string, children: React.ReactElement}) => (
  <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/5 blur-[60px] pointer-events-none group-hover:bg-${color}/10 transition-colors`} />
    <div className="flex items-start gap-6 relative z-10">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-widest text-white group-hover:scp-glitch">{title}</h2>
        <div className="h-px w-24 bg-scp-orange/30 group-hover:w-full transition-all duration-700" />
        <div className="text-zinc-400 text-sm leading-relaxed font-medium space-y-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const InfoSectionCenter = ({ title, color = "scp-orange", children }: { title: string, color?: string, children: React.ReactElement}) => (
  <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/5 blur-[60px] pointer-events-none group-hover:bg-${color}/10 transition-colors`} />
    <div className="flex items-start gap-6 relative z-10">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-widest text-white group-hover:scp-glitch flex flex-cols justify-center">{title}</h2>
        <div className="text-zinc-400 text-sm leading-relaxed font-medium space-y-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const Code = ({children}: {children: string}) => (<span className='text-zinc-200 inset-x-1 bottom-0 h-fit bg-zinc-800 -z-10 px-1.5 font-normal'>{children}</span>);
export const FCode = ({children}: {children: string}) => (<span className='text-zinc-200 inset-x-1 bottom-0 h-max w-12 bg-zinc-800 -z-10 px-1.5 font-normal'>{children}</span>);

export const Group = ({ title, children, header = true }: { title: string; children: React.ReactNode; header?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const TitleTag = header ? 'h3' : 'p';

  return (
    <div className="overflow-hidden rounded-lg bg-zinc-950 border border-zinc-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-900 transition-colors"
      >
        <TitleTag className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
          <Layers className="w-4 h-4 text-scp-orange" />
          {title}
        </TitleTag>
        <div className={`w-6 h-6 rounded bg-zinc-850 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-zinc-300" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-zinc-900">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};