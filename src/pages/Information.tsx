import React from 'react';
import { useTOC } from '../context/TOCContext';
import { Group } from '@/components/Modules';
import { Code } from '@/components/Modules';
import { InfoSectionCenter } from '@/components/Modules';
import { X } from 'lucide-react';
import { Check } from 'lucide-react';
import other1 from '../assets/other1.png';
import other2 from '../assets/other2.png';
import toolgun from '../assets/toolgun.png';
import other3 from '../assets/other3.png'

export const Information: React.FC = () => {
  useTOC(true);
  return (
      <div className="space-y-12 pb-24">
        <div className="border-b border-zinc-800 pb-12 flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black uppercase tracking-[0.19em] text-white">Полезная <div className='text-scp-orange'>Информация</div></h1>
              <p className="text-zinc-400 mt-4 font-bold uppercase tracking-widest text-base border-l-2 border-scp-orange pl-4">
                Используйте оглавление слева для более удобной навигации
              </p>
             </div>
          </div>
          <InfoSectionCenter title="Custom-Info">
            <div className="block">
              <div className='grid grid-cols-4 space-x-4 text-[16px]'>
                 <div className="scp-panel p-4 rounded-2xl relative overflow-hidden group border-zinc-800 mt-2 flex flex-col items-center justify-center">
                  <span className='text-2xl'><Code>{"<size>"}</Code></span>
                  <br /> <span className='italic'>размер</span>
                  </div>
                 <div className="scp-panel p-4 rounded-2xl relative overflow-hidden group border-zinc-800 mt-2 flex flex-col items-center justify-center">
                  <span className='font-black text-zinc-200 inset-x-1 bottom-0 h-7 bg-zinc-800 -z-10 px-1.5'>{"<b>"}</span>
                  <br /> <span className='italic'>жирность</span>
                  </div>
                 <div className="scp-panel p-4 rounded-2xl relative overflow-hidden group border-zinc-800 mt-2 flex flex-col items-center justify-center">
                  <span className='italic'><Code>{"<i>"}</Code></span>
                  <br /> <span className='italic'>курсив</span>
                  </div>
                 <div className="scp-panel p-4 rounded-2xl relative overflow-hidden group border-zinc-800 mt-2 flex flex-col items-center justify-center">
                  <span className='text-scp-orange inset-x-1 bottom-0 h-7 bg-zinc-800 -z-10 px-1.5'>{"<color>"}</span>
                  <br /> <span className='italic'>цвет</span>
                  </div>
              </div>
              <div className="h-px bg-scp-orange/30 mt-6" />
              <h3 className='text-xl mt-4 text-zinc-200'>Примечания</h3>
              <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2 mb-4'>
                <li>Максимальная длина текста в Custom-Info равна <Code>400</Code> символам.</li>
                <li>Теги пишутся вместе с текстом и не видны при правильном написании.</li>
                <li>Для каждого тега обязательно должен быть закрывающий тег: <Code>{"</тэг>"}</Code>.</li>
              </ul>
              <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
                <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Цвет</h3>
                <p className='text-zinc-300 text-base leading-relaxed mt-2 mb-2'>Цвета обязательно должны быть в формате HEX (#FFFFFF) и обязательно из списка доступных цветов. <br /><span className='text-red-600'>Также очень важно: буквы в коде цвета должны быть заглавные, иначе будет ошибка.</span></p>
                <Group title='Цвета' header={false}><p className='text-base'>
                  pink - #FF96DE<br />
                  red - #C50000<br /> 
                  default - #FFFFFF<br />
                  brown - #944710<br />
                  silver - #A0A0A0<br />
                  light_green - #32CD32<br />
                  crimson - #DC143C<br />
                  cyan - #00B7EB<br />
                  aqua - #00FFFF<br />
                  deep_pink - #FF1493<br />
                  tomato - #FF6448<br />
                  yellow - #FAFF86<br />
                  magenta - #FF0090<br />
                  blue_green - #4DFFB8<br />
                  orange - #FF9966<br />
                  lime - #BFFF00<br />
                  green - #228B22<br />
                  emerald - #50C878<br />
                  carmine - #960018<br />
                  nickel - #727472<br />
                  mint - #98FB98<br />
                  army_green - #4B5320<br />
                  pumpkin - #EE7600<br />
                  </p>
                  </Group>
              </div>
              <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
                <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Проблемы</h3>
                <p className='text-zinc-300 text-base leading-relaxed mt-2'>Все ошибки связанные с Custom Info выводятся в клиентскую консоль (консоль на букву Ё), но туда выводятся вообще все ошибки сервера. Например если несколько человек в одно время устанавливают неправильное custom info, то можно перепутать ошибки.<br /><br />
                   <ul className='list-outside list-disc ml-5'>
                    <li><Code>Provided text has rich text tag which is not allowed</Code>  - вы использовали какой то <Code>{"<тег>"}</Code>, который использовать нельзя.<br /></li> 
                    <li><Code>Provided text doesn't match the PlayerCustomInfo regex</Code> - превышено допустимое количество символов, равное <Code>400</Code>, либо у вас есть лишние закрывающие или открывающие теги.<br /></li>
                    <li><Code>Provided color tag doesn't match the requirements - Invalid color</Code> - цвет, который вы написали в <Code>{"<color>"}</Code>, написан неправильно.<br /></li>
                    <li><Code>Provided color tag doesn't match the requirements - This color is not from allowed list</Code> - цвéта, который вы написали в <Code>{"<color>"}</Code>, нет в списке доступных цветов.<br /></li>
                  </ul>
                </p>
              </div>
            </div>
          </InfoSectionCenter>
          <InfoSectionCenter title="Строительство (ProjectMER)">
            <div className="block">
              <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
              <p className='text-zinc-300 text-base leading-relaxed mt-2 mb-2'>С ProjectMER вам доступно продвинутое редактирование карты и создание сложных построек. Для этого в плагине есть множество инструментов. Вы можете увидеть все команды написав в RemoteAdmin панель команду  <Code>mp</Code> . Почти все команды имеют альтернативное, сокращённое написание. В тексте будет приведено лишь основное написание команды.
              <br />Важно! Ни в одной из команд не нужно писать <Code>``</Code>.
              <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
                <div className='grid grid-cols-2'>
                  <img src={toolgun} alt="ToolGun UI" className='w-100 h-150 rounded-xl hover:scale-105 transition-transform'/>
                  <div className='flex flex-col items-start w-full '>
                    <h3 className=' text-white text-xl font-black uppercase tracking-widest self-center '>ToolGun</h3>
                    <p className='text-zinc-300 text-base leading-relaxed mt-6'>Тулган выдается командой <Code>mp toolgun</Code> или сокращенно <Code>mp tg</Code>. С его помощью можно создавать примитивы, двери, источники освещения и т.д. Внизу экрана можно увидеть основную информацию об объекте, который вы создаете (см. скриншот)<br/><span className='font-bold text-[18px]'>Управление:</span></p>
                    <div className="grid grid-cols-12 border rounded-lg border-zinc-800 mt-4">
                      <div className="col-span-2 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>R</Code>
                      </div>
                      <div className="col-span-10 p-3 border-b border-zinc-800">Переключение влево</div>
                      <div className="col-span-2 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>T</Code>
                      </div>
                      <div className="col-span-10 p-3 border-b border-zinc-800">Переключение вправо</div>
                      <div className="col-span-2 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>F</Code>
                      </div>
                      <div className="col-span-10 p-3 border-b border-zinc-800">Переключение режима установка/удаление</div>
                      <div className="col-span-2 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>ПКМ</Code>
                      </div>
                      <div className="col-span-10 p-3 border-b border-zinc-800">Режим выделения</div>
                      <div className="col-span-2 p-3 flex justify-center border-r border-zinc-800">
                        <Code>ЛКМ</Code>
                      </div>
                      <div className="col-span-10 p-3">Установка/удаление объекта</div>
                    </div>
                    <p className='text-zinc-300 text-base leading-relaxed mt-2'>Также если у вас переназначены клавиши перезарядки, выбрасывания предмета, фонарика на оружии и прицеливания, то используйте ваши клавиши вместо приведенных выше.</p>
                  </div>
                </div>
              </div>
            <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
              <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Взаимодействие с картой и объектами</h3>
                <p className='text-zinc-300 text-base leading-relaxed mt-2'>В ProjectMER есть два типа построек:
                <div className="grid grid-cols-4 divide-x divide-zinc-800 border-zinc-800 mt-4 mb-8 border rounded-lg">
                  <div className="col-span-1 divide-y divide-zinc-800">
                    <div className="p-4 flex justify-center"><span className='text-scp-orange'>Схематики</span></div>
                    <div className="p-4 flex justify-center items-center"><span className='text-scp-orange'>Карты</span></div>
                  </div>
                  <div className="col-span-3 divide-y divide-zinc-800">
                    <div className="p-4">Создаются в Unity, их можно перемещать, вращать, изменять размер.</div>
                    <div className="p-4">Создаются на самом сервере из уже поставленных схематиков и иных объектов, их нельзя перемещать, вращать, изменять размер.</div>
                  </div>
                </div>
                Взаимодействие с <span className='text-scp-orange'>картой</span> ограничено всего четырьмя командами:
                <div className="grid grid-cols-12  border-zinc-800 mt-4 mb-4 divide-zinc-800 border rounded-lg">
                    <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800">
                      <Code>mp save `название карты`</Code>
                    </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Сохранить текущие постройки</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>mp load `название карты`</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Загрузить карту</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>mp unload</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Удалить все загруженные схематики, карты и иные объекты</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-zinc-800 items-center">
                        <Code>mp merge `новая карта` `карта 1` `карта 2`</Code>
                      </div>
                    <div className="col-span-7 p-3">Превратить несколько карт в одну, их количество может быть каким угодно</div>
                </div>
                В свою очередь инструментов для взаимодействия со <span className='text-scp-orange'>схематиками</span> и <span className='text-scp-orange'>объектами</span> гораздо больше:
                <div className="grid grid-cols-12  border-zinc-800 mt-4 mb-4 divide-zinc-800 border rounded-lg">
                    <div className="col-span-3 p-3 flex justify-center border-r border-b border-zinc-800">
                      <Code>mp list</Code>
                    </div>
                    <div className="col-span-9 p-3 border-b border-zinc-800">Выводит список всех схематиков и карт</div>
                      <div className="col-span-3 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>mp indicators</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b border-zinc-800">Переключает отображение телепортов, мест спавна игроков, вещей и т.д</div>
                      <div className="col-span-3 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>mp delete `id объекта`</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b border-zinc-800">Удалить объект на который вы смотрите, или удалить объект с указанным <Code>id</Code></div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-zinc-800 ">
                        <Code>mp select</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Выделить объект на который вы смотрите, в случае если у вас уже выделен какой-либо объект и вы смотрите не на другой объект, то вы уберете выделение</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-t-2 border-zinc-800 ">
                        <Code>mp scale set x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b border-t-2">Добавляет размер к уже существующему размеру</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b  border-zinc-800 ">
                        <Code>mp scale set x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Задает указанный размер</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-t-2 border-zinc-800 ">
                        <Code>mp position add x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b border-t-2">Добавляет координаты к уже существующим</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-zinc-800 ">
                        <Code>mp position set x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Задает указанные координаты в этой комнате</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-zinc-800 ">
                        <Code>mp position bring</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Телепортирует схематик к вам</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-zinc-800 ">
                        <Code>mp position grab</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Позволяет "взять" схематик на который вы смотрите</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-t-2 border-zinc-800 ">
                        <Code>mp rotation add x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b border-t-2">Добавляет указанное значение к повороту</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-b border-zinc-800 ">
                        <Code>mp rotation set x y z</Code>
                      </div>
                    <div className="col-span-9 p-3 border-b">Устанавливает указанное значение поворота</div>
                      <div className="col-span-3 p-3 flex justify-center items-center border-r border-t-2 border-zinc-800 ">
                        <Code>mp create `название схематика или номер объекта`</Code>
                      </div>
                    <div className="col-span-9 p-3 border-t-2 border-zinc-800 flex items-center">Создать схематик или какой либо объект из списка</div>
                </div>
                <p className="flex justify-center mb-4 text-[22px] font-black">Объекты</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "1 - Красный примитив 1х1х1", "2 - Источник освещения", "3 - Дверь", "4 - Стол модификации оружия", "5 - Точка спавна предметов", "6 - Точка спавна игроков", "7 - Капибара", "8 - Текст", "9 - Камера SCP-079 (функциональна)", "10 - Мишень для стрельбы", "11 - Все виды шкафчиков", "12 - Телепорт"
                      ].map(obj => (
                        <div key={obj} className="text-sm px-2 py-1 bg-zinc-900 rounded border border-zinc-800 text-zinc-400  flex justify-center">
                          {obj}
                        </div>
                      ))}
                  </div>
                </p>
              </div>
              <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
                <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства объектов</h3>
                <p className='text-zinc-300 text-base leading-relaxed mt-2'>Команда <Code>mp mod</Code> позволяет изменять свойства созданных объектов:<br />
                  <ul className='text-zinc-300 text-base leading-relaxed list-disc list-outside pl-5 pt-4 space-y-2 mb-4'>
                    <li>Если просто прописать <Code>mp mod</Code>, то вы получите все свойства выделенного объекта и их значения.</li>
                    <li>Узнать возможные значения свойства: <Code>mp mod `название свойства`</Code></li>
                    <li>Задать свойство объекту: <Code>mp mod `название свойства` `значение свойства`</Code></li>
                  </ul>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <div className='grid grid-cols-2 gap-8 items-start'>
                  <div className='flex flex-col items-center gap-4'>
                    <img src={other3} className='w-110 h-auto rounded-xl hover:scale-105 transition-transform' alt="Object Properties"/>
                      <Code>При выделенном "примитиве"</Code>
                  </div>
                  <div className='flex flex-col items-start w-full'>
                    <h4 className='text-white text-xl font-black uppercase tracking-widest self-center'>
                      Свойства всех объектов
                    </h4>
                    <p className='text-zinc-300 text-base leading-relaxed mt-6'>
                      <Code>MapName</Code> - название карты, к которой принадлежит объект.<br />
                      <Code>ID</Code> - идентификатор объекта.<br />
                      <Code>Room</Code> - название комнаты к которой принадлежит объект.<br />
                      <Code>Index</Code> - Позволяет ставить объект в таких же комнатах изменяя значение этого свойства.<br />
                      Чтобы объект появился в каждой такой же комнате поставьте значение -1, объект будет с такими же свойствами что и оригинальный, а так же будет обновляться при изменении оригинального объекта.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства примитива</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>PrimitiveType</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Тип примитива, по умолчанию это Cube. Вводить нужно либо числовое значение, либо буквенное.</div>
                  <div className="col-span-4 p-4"><Code>0 - Sphere</Code><br /> <Code>1 - Capsule</Code><br /><Code>2 - Cylinder</Code><br /><Code>3 - Cube</Code><br /><Code>4 - Plane</Code><br /><Code>5 - Quad</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Color</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Цвет примитива, по умолчанию - красный. Принимает цвет как в формате HEX, таки в формате RGB. Цвет в HEX формате выглядит как #ff0000, а в RGB формате это будет 255:0:0:1. У RGB формата больше возможностей: если поставить значения цвета выше 255, а значение прозрачности (последняя цифра) меньше единицы, то у вас получится примитив который "светится" но не освещает вокруг себя ничего. И чем больше значения - тем ярче светится примитив.</div>
                  <div className="col-span-4 p-4 flex items-center"><Code>#ff0000</Code><Code>255:0:0:1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>PrimitiveFlags</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Свойства видимости и коллизии объекта. Если вам нужно сделать невидимый барьер, то лучше сделать это через PrimitiveFlags</div>
                  <div className="col-span-4 p-4"><Code>0 - невидимый и без коллизии</Code><br /><Code>1 - с коллизией, но невидимый</Code><br /><Code>2 - без коллизии, но видимый</Code><br /><Code>3 - видимый и с коллизией</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства источника света</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Color</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Цвет освещения. Воспринимает цвета в формате HEX.</div>
                  <div className="col-span-4 p-4"><Code>1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Intensity</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Яркость освещения</div>
                  <div className="col-span-4 p-4 flex items-center"><Code>1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Range</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Дистанция на которую источник будет светить</div>
                  <div className="col-span-4 p-4"><Code>1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Shadows</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Качество теней отбрасываемых объектами от света. Крайне не рекомендуется ставить мягкие тени</div>
                  <div className="col-span-4 p-4"><Code>None - не отбрасывать тени</Code><br /><Code>Hard - отбрасывать обычные тени</Code><br /><Code>Soft - отбрасывать мягкие тени</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>SpotAngle</Code></div>
                  <div className="col-span-6 p-4 flex items-center">Угол освещения типом Spot. Не может превышать 179 градусов.</div>
                  <div className="col-span-4 p-4"><Code>90</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>LightType</Code></div>
                  <div className="col-span-2 p-4 flex items-center">Тип освещения</div>
                  <div className="col-span-8 p-4"><Code>Spot - освещение определенной области, как если бы на нее светил фонарь</Code><br /><Code>Directional - освещение всей карты в каком-то направлении</Code><br /><Code>Point - освещение из точки, все остальные типы не отличаются от него</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства двери</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>DoorType</Code></div>
                  <div className="col-span-3 p-4 flex items-center">Тип двери</div>
                  <div className="col-span-7 p-4"><Code>LightContainmentDoor - дверь из ЛЗС</Code><br /><Code>Hcz - дверь из ТЗС</Code><br /><Code>Ez - дверь из входной зоны</Code><br /><Code>Bulkdoor - современные гермоворота из ТЗС</Code><br /><Code>Gate - устаревшие гермоворота из других зон</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>IsOpen</Code></div>
                  <div className="col-span-3 p-4 flex items-center">Открыта ли дверь</div>
                  <div className="col-span-7 p-4"><Code>False - закрыта</Code><br /><Code>True - открыта</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>IsOpen</Code></div>
                  <div className="col-span-3 p-4 flex items-center">Открыта ли дверь</div>
                  <div className="col-span-7 p-4"><Code>False - закрыта</Code><br /><Code>True - открыта</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>IsLocked</Code></div>
                  <div className="col-span-3 p-4 flex items-center">Заблокирована ли дверь</div>
                  <div className="col-span-7 p-4"><Code>False - разблокирована</Code><br /><Code>True - заблокирована</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><span className='text-sm'><Code>RequiredPermissions</Code></span></div>
                  <div className="col-span-3 p-4 flex items-center">Требования к ключ-карте для открытия.</div>
                  <div className="col-span-7 p-4"><Code>None - не требуется</Code><br /><Code>Checkpoints - карты с доступом к КПП</Code><br /><Code>ExitGates - карты с доступом к гейтам</Code><br /><Code>Intercom - карты с доступом к интеркому</Code><br /><Code>AlphaWarhead - карты с доступом к боеголовке</Code><br /><Code>ContainmentLevelOne - карты с 1УД к SCP</Code><br /><Code>ContainmentLevelTwo - карты со 2УД к SCP</Code><br /><Code>ContainmentLevelThree - карты с 3УД к SCP</Code><br /><Code>ArmoryLevelOne - карты с 1УД допуска к оружейным</Code><br /><Code>ArmoryLevelTwo - карты со 2УД к оружейным</Code><br /><Code>ArmoryLevelThree - карты с 3УД к оружейным</Code><br /><Code>ScpOverride - доступ только для SCP</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>RequireAll</Code></div>
                  <div className="col-span-3 p-4 flex items-center">Требуются ли все выше доступы для открытия двери</div>
                  <div className="col-span-7 p-4"><Code>False - не требуются</Code><br /><Code>True - требуются</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства ItemSpawnpoint</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>ItemType</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Предмет который будет появляться</div>
                  <div className="col-span-5 p-4">Принимает текстовый или числовой ID предмета:<br /><Code>25</Code><br /><Code>GrenadeHE</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Weight</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Тяжесть предмета, влияет только на скорость подбора предмета в первый раз</div>
                  <div className="col-span-5 p-4"><Code>1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>AttachmentsCode</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Влияет на обвесы для оружия</div>
                  <div className="col-span-5 p-4"><Code>512</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>NumberOfItems</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Количество предметов появляющихся одновременно</div>
                  <div className="col-span-5 p-4"><Code>1</Code><br /><span className='text-red-600'>Значения свыше 100 могут положить сервер</span></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>NumberOfUses</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Сколько раз можно будет подобрать предмет</div>
                  <div className="col-span-5 p-4"><Code>1</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>UseGravity</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Подчиняется ли предмет закону гравитации</div>
                  <div className="col-span-5 p-4"><Code>False - предмет будто в космосе</Code><br /><Code>True - нормальное поведение предмета</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>CanBePickedUp</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Можно ли поднять предмет</div>
                  <div className="col-span-5 p-4"><Code>False - нет</Code><br /><Code>True - да</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства Locker</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>LockerType</Code></div>
                  <div className="col-span-2 p-4 flex items-center">Тип шкафчика</div>
                  <div className="col-span-8 p-4"><Code>PedestalScp`подставьте номер SCP` - ящики всех карманных SCP игры</Code><br />
                  <Code>PedestalScpAntiScp207 - ящик с анти-колой</Code><br />
                  <Code>LargeGun - большой, оружейный шкаф</Code><br />
                  <Code>RifleRack - контейнер с E11-SR</Code><br />
                  <Code>Misc - шкаф с ключ-картами, аптечками, фонариками и т.д.</Code><br />
                  <Code>Medkit - шкафчик с аптечкой и обезболивающим</Code><br />
                  <Code>Adrenaline - шкафчик с аптечкой и адреналином</Code><br />
                  <Code>ExperimentalWeapon - контейнер с экспериментальным оружием</Code><br />
                  <Code>None - удаляет шкафчик</Code>
                  </div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Loot</Code><br /><Code>Chambers</Code></div>
                  <div className="col-span-4 p-4 flex items-center">Изменяет заготовленные пресеты вещей в шкафчике</div>
                  <div className="col-span-6 p-4"><Code>add ???</Code><br /><Code>remove ???</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства Teleport</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Targets</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Id телепортов к которым телепортирует телепорт</div>
                  <div className="col-span-5 p-4"><Code>add id</Code><br /><Code>remove id</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Cooldown</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Задержка между телепортациями</div>
                  <div className="col-span-5 p-4"><Code>1</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства Workstation</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>IsInteractable</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Можно ли взаимодействовать с этим столом</div>
                  <div className="col-span-5 p-4"><Code>False - нет</Code><br /><Code>True - да</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства TextToy</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Text</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Текст, который будет на вашем объекте</div>
                  <div className="col-span-5 p-4"><Code>{"<color=red><size=67>Hello world!"}</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства Scp079Camera</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>CameraType</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Внешний вид камеры</div>
                  <div className="col-span-5 p-4"><Code>Lcz - камера из Легкой Зоны</Code><br /><Code>
                    Hcz - камера из Тяжелой Зоны</Code><br /><Code>
                    Ez - камера из Офисной Зоны</Code><br /><Code>  
                    EzArm - усиленная камера из Офисной Зоны</Code><br /><Code>
                    Sz - камера с Поверхности</Code></div>
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Label</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Название камеры в интерфейсе SCP-079</div>
                  <div className="col-span-5 p-4"><Code>TestRoom</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства ShootingTarget</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>TargetType</Code></div>
                  <div className="col-span-5 p-4 flex items-center">Тип мишени</div>
                  <div className="col-span-5 p-4"><Code>Sport</Code><br /><Code>ClassD</Code><br /><Code>Binary</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Свойства PlayerSpawnpoint</h4>
                <div className="grid grid-cols-12 border border-zinc-800 rounded-lg divide-x divide-y divide-zinc-800  mt-4">
                  <div className="col-span-2 row-span-1 p-4 flex items-center justify-center"><Code>Roles</Code></div>
                  <div className="col-span-4 p-4 flex items-center">Роли которые будут возрождаться на этой точке. Если точек несколько, то будет выбрана случайная</div>
                  <div className="col-span-6 p-4"><Code>add `id роли`</Code><br /><Code>remove `id роли`</Code><br /><Code>ID ролей нужно добавлять и удалять по одному, их можно найти ниже</Code></div>
                </div>
                <div className="h-px bg-scp-orange/30 mt-6 mb-6" />
                <h4 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Другие объекты</h4>
                <div className="mt-4">
                  <Code>Capybara</Code> - у нее нет свойств<br />
                  <Code>Interactable, Waypoint</Code> - не нужны вне схематика
                </div>
                </p>
              </div>
            </p>
          </div>
          </InfoSectionCenter>
          <InfoSectionCenter title="Прочее">
          <div className="block">
            <div className="h-px bg-scp-orange/30 mt-6" />
            <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
            <div className='flex flex-2 space-x-5'>
              <img src={other1} alt="ccolor" className='w-100 h-auto rounded-xl hover:scale-102 transition-transform'/>
              <div className='flex flex-col items-start w-full '>
                <h3 className=' text-white text-xl font-black uppercase tracking-widest self-center'>Кастомное освещение</h3>
                <p className='text-zinc-300 text-base leading-relaxed -mt-2'>
                <br />Помимо создания различных объектов, вы можете задавать цвет освещения в отдельных комнатах. Выключить свет этой командой в определенной комнате не получится, потому что если поставить все значения на 0, то свет становится примерно как при ночном видении у SCP.<p className='text-zinc-200 bottom-0 h-fit w-full bg-zinc-800 -z-10 font-normal mt-4 px-1.5 text-[18px]'>ccolor r g b</p>
                r - количество <span className='text-red-500'>красного</span> в цвете.
                <br />g - количество <span className='text-green-500'>зеленого</span> в цвете.
                <br />b - количество <span className='text-blue-500'>синего</span> в цвете.
                </p>
              </div>
            </div>
            </div>
            <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
              <div className='flex flex-2 space-x-5'>
                <img src={other2} alt="intercomtext" className='w-100 h-auto rounded-xl hover:scale-102 transition-transform' />
                <div className='flex flex-col items-start w-full '>
                  <h3 className=' text-white text-xl font-black uppercase tracking-widest self-center mb-3'>Текст интеркома</h3>
                  <p className='text-zinc-300 text-base leading-relaxed mt-2'>
                    Меняет текст на мониторе интеркома. <br />
                    <p className='text-zinc-200 bottom-0 h-fit w-full bg-zinc-800 -z-10 font-normal mt-2 px-1.5 text-[18px] mb-2'>intercomtext [текст]</p>
                    Можно изменить размер текста с помощью <Code>{"<size=>"}</Code>, а также цвет с помощью <Code>{"<color=>"}</Code>.
                    <br />Чтобы вернуть стандартный текст нужно просто прописать <Code>intercomtext</Code>.
                  </p>
                </div>
              </div>
            </div>
            <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
              <div className='flex flex-col items-start w-full '>
                <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Различные команды</h3>
                <p className='text-zinc-300 text-base leading-relaxed mt-2'>
                  <div className="grid grid-cols-12  border-zinc-800 mt-4 mb-4 divide-zinc-800 border rounded-lg">
                    <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800">
                      <Code>scale id размер</Code>
                    </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Меняет размер игрока по id во всех направлениях</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800 items-center">
                        <Code>size id x y z</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Меняет размер игрока отдельно для каждой координаты <br />Если поставить одну из координат меньше нуля, то у игрока инвертируется управление в одной из плоскостей</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800">
                        <Code>breakdoors id</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Позволяет игроку выбивать двери, вместо их открытия</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800 items-center">
                        <Code>prygate id</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Позволяет игроку открывать закрытые гермоворота, так как это делает SCP-096</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800 items-center">
                        <Code>drop `id игрока` `id предмета` количество</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Создает указанное количество, указанных предметов под игроком</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-b border-zinc-800 items-center">
                        <Code>dropsize `id игрока` `id предмета` x y z</Code>
                      </div>
                    <div className="col-span-7 p-3 border-b border-zinc-800">Создает указанный предмет с указанным размером, под игроком</div>
                      <div className="col-span-5 p-3 flex justify-center border-r border-zinc-800 items-center">
                        <Code>randomtp id</Code>
                      </div>
                    <div className="col-span-7 p-3">Телепортирует игрока в случайную комнату (На данный момент команда сломана)</div>
                </div>
              </p>
            </div>
          </div>
          <div className="scp-panel p-8 rounded-2xl relative overflow-hidden group border-zinc-800 mt-4">
            <div className='flex flex-col items-start w-full mb-4'>
              <h3 className='text-xl font-black uppercase tracking-widest text-white group-hover:scp-glitch border-l-2 border-scp-orange pl-3'>Использование команд на множество игроков</h3>
              <p className='text-zinc-300 text-base leading-relaxed mt-2'>
                Иногда нужно выделить целую группу людей, например всех сержантов МОГ чтобы выдать им cinfo, и вместо того чтобы выдавать им cinfo по одному можно выдать сразу всем с помощью id класса:  <br />
                <div className="flex border rounded-lg border-zinc-800 p-2">
                  <div className="flex flex-col">
                    <Code>cinfo 23 Сержант МОГ | 3 УД</Code>
                    <Code>cinfo 33 Сержант МОГ | 3 УД</Code>
                    <Code>cinfo 13 Сержант МОГ | 3 УД</Code>
                  </div>
                  <div className="ml-5 self-stretch flex items-center">
                    <X size={80} color='red'/>
                  </div>
                </div>
                <div className="flex border rounded-lg border-zinc-800 p-2 mt-2 mb-2">
                  <div className="flex flex-col">
                    <Code>cinfo ntfsergeant Сержант МОГ | 3 УД</Code>
                  </div>
                  <div className="ml-5 self-stretch flex items-center">
                    <Check size={80/3} color='lightgreen'/>
                  </div>
                </div>
                Также можно выполнять команду для отдельных нескольких ID, достаточно прописать их через точку: <br /><Code>setname 13.23.33 ??? </Code><br />Это также работает и с id целых классов:  <br /><Code>setname ntfsergeant.classd.facilityguard ???</Code><br />ID роли можно найти в самой игре, нажмите по человеку с необходимой ролью {"-> Request Data -> Request."} В строке Class вы найдете класс, здоровье, щит SCP и щит от эффектов.      
              </p>
            </div>
              <Group title='Id классов' header={true}>
                  <p className='text-zinc-300 text-base leading-relaxed mt-2'>spectator - Наблюдатель <br />overwatch - Надзиратель <br />filmmaker - Режиссер <br />tutorial - Обучение <br />classd - Д-класс <br />facilityguard - Сотрудник безопасности <br />scientist - Научный сотрудник <br />chaosrepressor - Усмиритель ПХ <br />chaosmarauder - Мародёр ПХ <br />chaosrifleman - Стрелок ПХ <br />chaosconscript - Новобранец ПХ <br />ntfprivate - Рядовой МОГ <br />ntfsergeant - Сержант МОГ <br />ntfcaptain - Капитан МОГ <br />ntfspecialist - Специалист МОГ <br />scp049 - SCP-049 <br />scp3114 - SCP-3114 <br />scp939 - SCP-939 <br />scp079 - SCP-079 <br />scp0492 - SCP-049-2 <br />scp096 - SCP-096 <br />scp106 - SCP-106 <br />scp173 - SCP-173<br />Сокращения: <br />tut - Обучение <br />sci - Научный сотрудник <br />cld - Д-класс <br />Команды:  <br />ci - Повстанцы Хаоса <br />mtf - МОГ <br />scp - SCP <br />alive - Все живые игроки <br />rip - Все игроки в Наблюдателях и Надзирателях <br />civilian - Научные сотрудники и Д-класс <br />military - Оперативники МОГ, Повстанцы Хаоса, Служба безопасности <br />staff - Весь персонал фонда <br />nostaff - Все, кто не относится к персоналу  <br />all - Все <br />* - То же самое что и all</p>
              </Group>
          </div>          
        </div>
      </InfoSectionCenter>
    </div>
  );
};
