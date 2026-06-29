import React from 'react';
import { useData } from '../context/GoogleSheetsDataContext';
import { StatCardOnLoading } from './Modules';

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
    <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">{label}</div>
    <div className="text-xl font-mono text-scp-orange font-bold tracking-tighter">{value}</div>
  </div>
);

export const StatisticsContainer: React.FC = () => {
  const { data, loading, error } = useData();

  if (error) {
    return <div className="text-red-500 col-span-full">Ошибка загрузки статистики.</div>;
  }

  if (loading) {
    return (
      <>
        <StatCardOnLoading />
        <StatCardOnLoading />
        <StatCardOnLoading />
        <StatCard label="Последнее обновление" value="12.05.2026" />
      </>
    );
  }
  
  const TCinfo = (data.database1?.length ?? 0) + (data.database2?.length ?? 0) + (data.database7?.length ?? 0);
  const TotalCinfo = TCinfo.toString();
  
  const TCassie = (data.database3?.length ?? 0) + (data.database4?.length ?? 0) + (data.database6?.length ?? 0);
  const TotalCassie = TCassie.toString();
  
  const TKeycards = (data.database5?.length ?? 0) + (data.database8?.length ?? 0);
  const TotalKeycards = TKeycards.toString();

  return (
    <>
      <StatCard label='Всего Custom-Info' value={TotalCinfo} />
      <StatCard label='Всего CASSIE' value={TotalCassie} />
      <StatCard label='Всего Ключ-карт' value={TotalKeycards} />
      <StatCard label="Последнее обновление" value="12.05.2026" />
    </>
  );
};