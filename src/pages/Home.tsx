import React from 'react';
import {  Users, Info, ArrowRight, Megaphone, IdCard, History } from 'lucide-react';
import { Link } from 'react-router-dom';
import { database1, database2, database3, database4, database5 } from '@/components/Accordion.data';

const TCinfo = database3.length + database4.length
const TotalCinfo = TCinfo.toString();
const TCassie = database1.length + database2.length
const TotalCassie = TCassie.toString();
const TKeycards = database5.length
const TotalKeycards = TKeycards.toString();

const Card = ({ title, icon: Icon, to, color = "scp-orange" }: { title: string, icon?: any, to: string, color?: string, }) => (
  <Link to={to} className="group relative">
    <div className={`absolute -inset-1 bg-${color}/10 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
    <div className="relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-scp-orange/50 transition-all overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 bg-zinc-800 rounded-xl group-hover:bg-zinc-700 transition-colors text-${color}`}>
          <Icon className="w-9 h-9" />
        </div>
        <ArrowRight className="w-8 h-8 text-zinc-600 group-hover:text-scp-orange transition-transform group-hover:translate-x-1" />
      </div>
      <h3 className="text-xl font-black uppercase tracking-widest group-hover:scp-glitch">{title}</h3>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-scp-orange group-hover:w-full transition-all duration-500" />
    </div>
  </Link>
);

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
    <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">{label}</div>
    <div className="text-xl font-mono text-scp-orange font-bold tracking-tighter">{value}</div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="mb-10 font-black uppercase"> 
          <span className="block leading-none text-7xl tracking-[0.2em] text-white -mb-6">Терминал</span><br />
          <span className="text-5xl tracking-[0.176em] text-scp-orange">Ивент-мастера</span>
        </h1>
        <p className="text-lg text-zinc-400 font-medium border-l-4 border-scp-orange pl-6 py-2 uppercase tracking-wide">
          Используйте блоки ниже для быстрого поиска необходимой вам информации.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <Card 
          title="Custom-Info" 
          icon={Users} 
          to="/cinfo"
        />
        <Card 
          title="C.A.S.S.I.E" 
          icon={Megaphone} 
          to="/cassie"
        />
        <Card 
          title="Ключ-карты" 
          icon={IdCard} 
          to="/keycards"
        />
        </div>
      <div className="grid grid-cols-2 gap-7 -mt-6">
          <Card 
              title="Информация" 
              icon={Info} 
              to="/information"
          />
          <Card 
              title="История" 
              icon={History} 
              to="/history"
          />
        </div>
      <div className='rounded-2xl p-4 relative group border-zinc-800 scp-panel mb-8 -mt-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
          <StatCard label='Всего Custom-Info' value={TotalCinfo} />
          <StatCard label='Всего CASSIE' value={TotalCassie} />
          <StatCard label='Всего Ключ-карт' value={TotalKeycards} />
          <StatCard label="Последнее обновление" value="05.04.2026" />
        </div>
      </div>
    </div>
  );
};
