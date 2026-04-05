import React from 'react';
import { AccordionCopy } from '../components/AccordionCopy';
import { database1, database2 } from '../components/Accordion.data';
import { useTOC } from '../context/TOCContext';
import { InfoSection } from '@/components/Modules';

export const CASSIE: React.FC = () => {
  useTOC(true);
  return (
      <div className="space-y-12 pb-24">
      <div className="border-b border-zinc-800 pb-12 flex items-center justify-between">
        <div className="max-w-2xl">
           <h1 className="text-5xl font-black uppercase tracking-[0.19em] text-white">C.A.S.S.I.E</h1>
           <p className="text-zinc-400 mt-4 font-bold uppercase tracking-widest text-base border-l-2 border-scp-orange pl-4">
             Используйте кнопку справа от текста для копирования
           </p>
        </div>
      </div>
        <InfoSection title="Aphin & ComicManatee926">
          <AccordionCopy items={database1} />
        </InfoSection>
      <div className="border-b border-zinc-800" />
        <InfoSection title="Dev1lmachine">
          <AccordionCopy items={database2} />
        </InfoSection>
    </div>
  );
};
