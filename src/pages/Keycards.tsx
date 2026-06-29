import React from 'react';
import keycard1 from '../assets/keycard1.png';
import keycard2 from '../assets/keycard2.png';
import keycard3 from '../assets/keycard3.png';
import keycard4 from '../assets/keycard4.png';
import keycard5 from '../assets/keycard5.png';
import { Link } from 'react-router-dom';
import { useTOC } from '../context/TOCContext';
import { InfoSection } from '../components/Modules';
import { Code } from '../components/Modules'; // Исправил относительный импорт, если нужно
import AccordionContainer from '../components/AccordionContainer';
import { GoogleSheetsDataProvider } from '../context/GoogleSheetsDataContext';

const keycardImages = [
  { src: keycard2, code: 'keycardcustommetalcase' },
  { src: keycard3, code: 'keycardcustommanagement' },
  { src: keycard4, code: 'keycardcustomsite02' },
  { src: keycard5, code: 'keycardcustomtaskforce' },
];

export const Keycards: React.FC = () => {
  useTOC(true);

  return (
    <div className="space-y-12 pb-24">
      {/* Адаптивный контейнер шапки */}
      <div className="border-b border-zinc-800 pb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="max-w-2xl">
           <h1 className="text-2xl sm:text-5xl font-black uppercase tracking-wide sm:tracking-[0.19em]">
             Ключ-<span className="text-scp-orange">карты</span>
           </h1>
           <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-bold uppercase tracking-widest border-l-2 border-scp-orange pl-4">
             Настройка кастомных ключ-карт на сервере
           </p>
        </div>
      </div>

      <InfoSection title="Кастомные модели">
        <div className="space-y-8">
          {/* Сетка картинок: 1 колонка на мобилках, 2 на планшетах, 4 на компах */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {keycardImages.map((img, index) => (
              <div key={index} className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4 flex flex-col items-center justify-between gap-4">
                <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-lg bg-black/20">
                  <img src={img.src} alt={img.code} className="max-h-full object-contain transform hover:scale-105 transition-transform duration-300" />
                </div>
                {/* break-all не дает длинному id карты распирать блок вширь */}
                <div className="w-full text-center">
                  <p className="text-[10px] text-zinc-500 font-mono mb-1 uppercase tracking-wider">ID Предмета:</p>
                  <code className="text-xs font-mono text-scp-orange bg-zinc-900/80 px-2 py-1 rounded block break-all select-all">
                    {img.code}
                  </code>
                </div>
              </div>
            ))}
          </div>

          {/* Информационный блок под картинками */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-4 sm:p-6 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
              <div className="w-1 h-3 bg-scp-orange" /> Важная информация
            </h4>
            
            <div className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Все пробелы в названиях заменяются нижним подчеркиванием <Code>_</Code>.</li>
                <li>
                  Цвета ключ-карт настраиваются английскими названиями или цветом {' '}
                  <Link to="https://csscolor.ru/" target="_blank" className="underline text-scp-orange hover:text-white transition-colors">
                    HEX
                  </Link> (например, <span className="text-red-500 font-bold">#f00</span>).
                </li>
                <li>Основная надпись и имя владельца выводятся на всех моделях, кроме <Code>keycardcustommanagement</Code>.</li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>

      <div className="border-b border-zinc-800" />
      
      {/* Секции с таблицами/аккордеонами из бд */}
      <InfoSection title="Burst173">
        <div>
          <p className="text-zinc-400 my-4 font-bold uppercase tracking-widest text-xs sm:text-sm border-l-2 border-scp-orange pl-4">
            Введите id игрока/игроков и используйте кнопку справа от текста для копирования
          </p>
          <GoogleSheetsDataProvider><AccordionContainer databaseName='database8'/></GoogleSheetsDataProvider>
        </div>
      </InfoSection>

      <InfoSection title="SoloSquad2008">
        <div>
          <GoogleSheetsDataProvider><AccordionContainer databaseName='database5'/></GoogleSheetsDataProvider>
        </div>
      </InfoSection>
    </div>
  );
};