import React from 'react';
import AccordionContainer  from '../components/AccordionContainer';
import { useTOC } from '../context/TOCContext';
import { InfoSection } from '@/components/Modules';
import { GoogleSheetsDataProvider } from '../context/GoogleSheetsDataContext';

export const Cinfo: React.FC = () => {
  useTOC(true);

  return (
      <div className="space-y-12 pb-24">
      <div className="border-b border-zinc-800 pb-12 flex items-center justify-between">
        <div className="max-w-2xl">
           <h1 className="text-5xl font-black uppercase tracking-[0.19em] text-white">Custom-Info</h1>
           <p className="text-zinc-400 mt-4 font-bold uppercase tracking-widest text-base border-l-2 border-scp-orange pl-4">
             Введите id игрока/игроков и спользуйте кнопку справа от текста для копирования
           </p>
        </div>
      </div>
      <InfoSection title="Aphin">
        <GoogleSheetsDataProvider><AccordionContainer databaseName='database1'/></GoogleSheetsDataProvider>
      </InfoSection>
      <div className="border-b border-zinc-800" />
      <InfoSection title="Dev1lmachine">
        <GoogleSheetsDataProvider><AccordionContainer databaseName='database2'/></GoogleSheetsDataProvider>
      </InfoSection>
      <div className="border-b border-zinc-800" />
      <InfoSection title="solosquad2008">
        <GoogleSheetsDataProvider><AccordionContainer databaseName='database7'/></GoogleSheetsDataProvider>
      </InfoSection>
    </div>
  );
};
