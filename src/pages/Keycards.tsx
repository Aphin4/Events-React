import React from 'react';
import keycard1 from '../assets/keycard1.png';
import keycard2 from '../assets/keycard2.png';
import keycard3 from '../assets/keycard3.png';
import keycard4 from '../assets/keycard4.png';
import keycard5 from '../assets/keycard5.png';
import { Link } from 'react-router-dom';
import { AccordionCopy } from '@/components/AccordionCopy';
import { database5 } from '@/components/Accordion.data';
import { useTOC } from '../context/TOCContext';
import { InfoSection } from '@/components/Modules';
import { Code } from '@/components/Modules';

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
      <div className="border-b border-zinc-800 pb-10 flex items-center justify-between">
        <div className="max-w-2xl">
           <h1 className="text-5xl font-black uppercase tracking-[0.19em]">Ключ-Карты</h1>
           <p className="text-zinc-400 mt-4 font-bold uppercase tracking-widest text-base border-l-2 border-scp-orange pl-4">
            Всё, что нужно знать о кастомных ключ-картах и заранее заготовленные решения
           </p>
        </div>  
      </div>
      <InfoSection title="Создание своей ключ-карты">
        <div className="block">
          <img src={keycard1} className='float-left mr-6 my-4 w-48 h-auto rounded-md hover:scale-105 transition-transform' />

          <p className='text-zinc-300 text-base leading-relaxed'>Вы можете создавать ключ-карты с помощью команды <Code>ckeycard</Code>
          <br />Например: <Code>ckeycard 1 keycardcustommanagement Keycard 3 2 1 red black Ключ-карта blue Никнейм 1</Code>
          <br /> <Code>1</Code> - id игрока  ( Например: 17 )
          <br /><Code>keycardcustomanagement</Code> - внешний вид ключ-карты
          <br /><Code>Keycard</Code> - название в инвентаре
          <br /><Code>3</Code> - уровень допуска к SCP
          <br /><Code>2</Code> - уровень допуска к оружию
          <br /><Code>1</Code> - административный уровень допуска
          <br /><Code>red</Code> - цвет кружков уровней допуска
          <br /><Code>black</Code> - основной цвет карточки, фон текста
          <br /><Code>Ключ-карта</Code> - надпись на ключ-карте
          <br /><Code>blue</Code> - цвет текста
          <br /><Code>Никнейм</Code> - кому принадлежит ключ-карта
          <br /><Code>1</Code> - количество кружков вокруг отверстия (на ключ-карте МОГ)
          </p>
          <div className="scp-panel p-4 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
              <div className="flex-1 space-y-4">
                  <p className='text-base text-white text-center'>Вместо <Code>keycardcustomanagement</Code> можно подставить один из вариантов:</p>
                  <div className="grid grid-cols-4 gap-4">
                    {keycardImages.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <img src={item.src} className="w-full h-64 object-cover rounded-lg mb-2" alt={`Keycard ${idx + 1}`}/>
                        <span className="text-sm">
                          <Code>{item.code}</Code>
                        </span>
                      </div>
                    ))}
                  </div>
              </div>
          </div>
          <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
            <div className="flex items-start gap-6 relative z-10">
              <div className="flex-1 space-y-4 ">
                <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-4'>Несколько важных моментов</h3>
                <div className="text-zinc-400 text-sm leading-relaxed font-medium space-y-4">
                <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 space-y-2'><li>Название в инвентаре можно сделать с пробелами с помощью <Code>_</Code> между словами.</li>
                <li>Любые цвета ключ-карты можно сделать какими угодно с помощью слов на английском либо с помощью <Link to={"https://csscolor.ru/"} className='underline text-blue-600 font-normal'>HEX цвета</Link> (например <span className="text-red-600">red</span> это <span className="text-red-600">#f00</span>).</li>
                <li>Основная надпись отображается на всех типах карт. Имя владельца выводится на всех моделях, за исключением keycardcustommanagement. Их также можно сделать с пробелами между словами с помощью <Code>_</Code></li></ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      </InfoSection>
        <div className="border-b border-zinc-800" />
          <InfoSection title="Готовые ключ-карты">
              <div>
                <p className="text-zinc-400 my-4 font-bold uppercase tracking-widest text-sm border-l-2 border-scp-orange pl-4">
                  Используйте кнопку справа от текста для копирования
                </p>
                <AccordionCopy items={database5} />
              </div>
          </InfoSection>
    </div>
  );
};
