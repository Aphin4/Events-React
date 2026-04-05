import React from 'react';
import { useTOC } from '../context/TOCContext';
import { InfoSection } from '@/components/Modules';
import { Group } from '@/components/Modules';

export const History: React.FC = () => {
  useTOC(true);
  return (
      <div className="space-y-12 pb-24">
        <div className="border-b border-zinc-800 pb-12 flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black uppercase tracking-[0.19em] text-white">История <div className="text-scp-orange">изменений</div></h1>
              <p className="text-zinc-400 mt-4 font-bold uppercase tracking-widest text-base border-l-2 border-scp-orange pl-4">
                Журнал изменений разбит на сезоны для удобства
              </p>
          </div>
        </div>
        <div className='border-b border-zinc-800 pb-12 items-center justify-between'>
          <div className='mb-6'>
            <InfoSection title="Немного предыстории">
              <p className='text-zinc-300 text-sm leading-relaxed font-medium space-y-4'>Этот сайт был создан 7 июня 2025 года. Однако первая публикация состоялась немного позже. <br />Она включала в себя лишь C.A.S.S.I.E от бывшего ГИМ(Frezee, ныне глава отдела) и скромный список кастом инфо от бывшего главы отдела (ComicManatee926).</p>
            </InfoSection>
          </div>
          <InfoSection title="Последние изменения - 05.04.2026">
            <p className='text-zinc-300 text-sm leading-relaxed font-medium space-y-4'>
              <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                <li>Сайт полностью переписан на React.</li>
                <li>Вновь полностью обновлен дизайн.</li>
                <li>Каждая страница частично переписана, страница c информацией частично урезана.</li>
              </ul>
            </p>
          </InfoSection>
        </div>
        <div className='border-b border-zinc-800 pb-12 items-center justify-between'>
          <InfoSection title='Лето 2025'>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <Group title="8 Июня">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                    <li>Добавлена страница "Список ивентов".</li>
                    <li>Добавлена страница "Полезные команды и прочее". </li>
                    <li>Некоторые C.A.S.S.I.E заменены на мои.</li>
                  </ul>
                </div>
              </Group>
              <Group title="9 - 13 Июня">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                    <li>Добавлена страница "Ключ-карты". </li>
                    <li>Сильно дополнена страница "Разное".</li>
                    <li>Возвращен ивент "Переговорщики".</li>
                  </ul>
                </div>
              </Group>
              <Group title="21 - 23 Июня">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                    <li>К этому моменту все C.A.S.S.I.E были заменены на мои. </li>
                    <li>Добавлены мини-ивенты "Важный чин" и "Хищные грёзы".</li>
                    <li>Добавлен мини-ивент "SCP-966".</li>
                  </ul>
                </div>
              </Group>
              <Group title="13 - 16 Июля">
                <div className="space-y-2 mt-4">
                  <p className='border-b-2 border-zinc-900 p-4'>Первое, отписанное мною изменение в канал новостей ивент-мастеров.</p>
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-3 space-y-2'>
                    <li>Возвращен мини-ивент "Неисправность".</li>
                    <li>Добавлены условия по количеству игроков для проведения мини-ивентов "Хищные Грёзы", "SCP-966", "Лазутчики".</li>
                    <li>Для мини-ивента "Бомба" добавлено касси на прибытие саперов.</li>
                    <li>Изменено оформление во вкладке "Cinfo".</li>
                    <li>Некоторые незначительные изменения во вкладках "C.A.S.S.I.E" и "Разное".</li>
                    <li>В мини-ивент "Неисправность" было добавлено примечание: "Ваши касси не должны использовать мета-информацию, то есть запрещено любое упоминание людей по никам (исключение: у человека нет рп имени), а также упоминание людей из наблюдателей и надзирателей."</li>
                  </ul>
                </div>
              </Group>
            </div>
          </InfoSection>
        </div>
        <div className='border-b border-zinc-800 pb-12 items-center justify-between'>
          <InfoSection title='Осень 2025'>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <Group title="2 Сентября">
                <div className="space-y-2">
                  <p className='border-b-2 border-zinc-900 p-4'>21 августа, Ивент-мастер mr. wdy XIII [926] предложил мне помощь по развитию сайта, потому что на тот момент ничего нового на сайте не было уже больше месяца. Больша́я часть изменений с этого момента производилась именно им.</p>
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                  <li>Был произведен редизайн всего сайта, изменились цвета фона, заголовков, текста, некоторые C.A.S.S.I.E перенесены в соответствующие сворачиваемые группы.</li>
                  <li>Были добавлены C.A.S.S.I.E и Cinfo авторства Dev1lMachine, но на тот момент они были не стилизованы, так как делалось все чтобы загрузить информацию на сайт как можно быстрее.</li>
                  <li>Был создан раздел "C.A.S.S.I.E | Раунд".</li>
                  <li>Вкладка "Полезная информация и прочее" была переименована просто в "Прочее", а вкладка "C.A.S.S.I.E" в "C.A.S.S.I.E | Ивент"</li>
                  <li>Раздел "Прочее" претерпел некоторые изменения: Гайд на создание ключ карт был перенесен на страницу "Ключ-карты", ID классов перенесен вверх, добавлены некоторые уточнения в команды.</li>
                  <li>В разделах "Прочее", "C.A.S.S.I.E" и "Cinfo" появились оглавления для удобства.</li>
                  <li>Так же восстановлены некоторые утерянные картинки на основной странице и в разделе "Ключ-карты".</li>
                  </ul>
                </div>
              </Group>
              <Group title="7 Сентября">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                  <li>Постепенно происходил дальнейший редизайн разделов "C.A.S.S.I.E" и "Cinfo".</li>
                  <li>Были добавлены цветные Cinfo моего авторства.</li>
                  <li>Временно добавлены "Безымянные" C.A.S.S.I.E.</li>
                  </ul>
                </div>
              </Group>
              <Group title="18 Сентября">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                  <li>Мы закончили полный редизайн, изменили шрифт, его цвет, его заливку в некоторых случаях.</li>
                  <li>Все C.A.S.S.I.E и Cinfo были рассортированы.</li>
                  <li>Раздел "C.A.S.S.I.E | Раунд" скрыт.</li>
                  <li>Раздел "Прочее" переименован в "Полезная информация".</li>
                  <li>Был написан полный гайд по ProjectMER в разделе "Полезная информация".</li>
                  <li>Добавлены ключ-карты авторства Dev1lMachine.</li>
                  </ul>
                </div>
              </Group>
              <Group title="11 Откября">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                  <li>Добавлен раздел "История изменений". </li>
                  <li>Добавлен раздел "Предложения". </li>
                  <li>Добавлено пояснение для свойства Index в ProjectMER, и пояснение для MEROptimizer.</li>
                  <li>Раздел "C.A.S.S.I.E | Ивент" переименован в "C.A.S.S.I.E".</li>
                  </ul>
                </div>
              </Group>
              <Group title="18 Декабря">
                <div className="space-y-2">
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                  <li>Все CASSIE переведены в новый формат.</li>
                  <li>Добавлен небольшой гайд по Custom Info.</li>
                  <li>Удалены Custom-Info, авторства ComicManatee926.</li>
                  </ul>
                </div>
              </Group>
            </div>
          </InfoSection>
        </div>
        <InfoSection title='Зима 2025 - 2026'>
          <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
            <Group title="18 Декабря">
              <div className="space-y-2">
                <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                <li>Все CASSIE переведены в новый формат.</li>
                <li>Добавлен небольшой гайд по Custom Info.</li>
                <li>Удалены Custom-Info, авторства ComicManatee926.</li>
                </ul>
              </div>
            </Group>
            <Group title="10 Января">
              <div className="space-y-2">
                <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2'>
                <li>Заменены названия страниц: <br />C.A.S.S.I.E - CASSIE<br />CInfo - CINFO<br />Полезная информация - INFORMATION<br />Ключ-карты - KEYCARDS<br />История изменений - HISTORY</li>
                <li>Страницы "Предложения" и "Список ивентов (устарел)" были удалены.</li>
                <li>Вновь изменен дизайн сайта.</li>
                <li>CASSIE, CINFO и Ключ-карты теперь копируются нажатием мыши.</li>
                <li>CASSIE для мини-ивентов были удалены</li>
                <li>Переписана больша́я часть текста на странице INFORMATION, убран неактуальный блок про MEROptimizer.</li>
                </ul>
              </div>
            </Group>
          </div>
        </InfoSection>
      </div>
  );
};
