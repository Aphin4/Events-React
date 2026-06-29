import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Info, Megaphone, IdCard, History, Menu, X } from 'lucide-react'; // Добавили Menu и X
import { cn } from '../utils/cn';
import { useTOCState, useTOCRefresh  } from '../context/TOCContext';
import litery from '../assets/litery.png'

const NavLink = ({ to, children, icon: Icon }: { to: string, children: React.ReactNode, icon: any }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-6 py-4 transition-all relative border-r-4",
        isActive 
          ? "bg-zinc-800/40 border-scp-orange text-scp-orange" 
          : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
      )}
    >
      <Icon className={cn("w-5 h-5", isActive && "scp-glitch")} />
      <span className="text-xs font-black uppercase tracking-widest">{children}</span>
      {isActive && (
        <motion.div
          layoutId="nav-glow"
          className="absolute inset-0 bg-scp-orange/5 blur-xl pointer-events-none"
        />
      )}
    </Link>
  );
};

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export const SCPLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toc, setToc] = React.useState<TOCItem[]>([]);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false); // Состояние для мобильного меню
  const location = useLocation();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const showTOCContext = useTOCState();
  const { refreshTrigger } = useTOCRefresh();

  React.useEffect(() => {
    setIsMobileOpen(false); // Автоматически закрываем меню при переходе на другую страницу

    if (!showTOCContext) {
      setToc([]);
      return;
    }

    const timer = setTimeout(() => {
      if (contentRef.current) {
        const headers = contentRef.current.querySelectorAll('h2, h3');
        const items: TOCItem[] = Array.from(headers).map((header, index) => {
          if (!header.id) {
            header.id = `toc-header-${index}`;
          }
          return {
            id: header.id,
            text: header.textContent || '',
            level: parseInt(header.tagName.substring(1))
          };
        });
        setToc(items);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, refreshTrigger, showTOCContext, children]);

  const scrollToHeader = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-scp-bg text-zinc-200 selection:bg-scp-orange selection:text-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="scanline" />
      </div>

      <div className="flex h-screen relative z-10 overflow-hidden">
        
        {/* Затемнение заднего фона на мобилках при открытом меню */}
        {isMobileOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Боковое меню (Sidebar) */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-zinc-800 bg-black flex flex-col shrink-0 transition-transform duration-300 ease-in-out",
          "lg:static lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          {/* Блок логотипа с интегрированной анимацией линии */}
          <div className="p-8 flex items-center justify-between relative">
            <div className="flex items-center gap-3 text-scp-orange">
              <img src={litery} className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none tracking-tighter">Events</span>
                <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">Litery</span>
              </div>
            </div>
            
            {/* Анимированная линия теперь служит нижней границей (border-b) */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 overflow-hidden">
              <motion.div
                animate={{ x: ['-150%', '250%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-scp-orange/50 w-1/3"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <NavLink to="/" icon={Home}>Главная</NavLink>
            <NavLink to="/cinfo" icon={Users}>Custom-Info</NavLink>
            <NavLink to="/cassie" icon={Megaphone}>C.A.S.S.I.E</NavLink>
            <NavLink to="/keycards" icon={IdCard}>Ключ-Карты</NavLink>
            <NavLink to="/information" icon={Info}>Информация</NavLink>
            <NavLink to="/history" icon={History}>История</NavLink>
            <nav className="border-b border-zinc-800 pb-4 items-center justify-between "></nav>
            {showTOCContext && toc.length > 0 && (
              <>
                <div className="mt-8 mb-2 px-6">
                  <div className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                    <div className="w-0.5 h-4 bg-scp-orange" />
                    ОГЛАВЛЕНИЕ
                  </div>
                  <div className="space-y-1 pr-4 max-h-[36vh] overflow-y-auto custom-scrollbar">
                    {toc.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToHeader(item.id);
                          setIsMobileOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left text-[9px] font-bold uppercase transition-colors hover:text-scp-orange",
                          item.level === 2 ? "pl-0 text-zinc-300" :
                          item.level === 3 ? "pl-3 text-zinc-500" : "pl-6 text-zinc-600"
                        )}
                      >
                        {item.text}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </nav>

          <div className="p-6 border-t border-zinc-800 bg-zinc-900/20">
            <div className="flex items-center gap-2 text-zinc-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-tighter">Соединение стабильно</span>
            </div>
          </div>
        </aside>

        {/* Основной контент */}
        <main className="flex-1 overflow-y-auto bg-zinc-950/20 relative flex flex-col" ref={contentRef}>
          
          {/* Верхняя мобильная плашка с кнопкой гамбургера (скрыта на десктопах) */}
          <div className="lg:hidden w-full bg-black/80 border-b border-zinc-800 p-4 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md">
            <div className="flex items-center gap-3 text-scp-orange">
              <img src={litery} className="w-8 h-8" />
              <span className="text-sm font-black uppercase tracking-widest leading-none">Events</span>
            </div>
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 text-zinc-400 hover:text-zinc-200 focus:outline-none transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Адаптивные отступы p-6 на мобилках и p-12 на больших экранах */}
          <div className="p-6 sm:p-12 flex-1 max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>

          <footer className="p-6 border-t border-zinc-900 text-zinc-600 text-[10px] flex flex-col sm:flex-row justify-between gap-2 uppercase tracking-widest font-bold bg-black/10">
            <div>Создано Aphin, при помощи mr wdy xiii</div>
            <div>2025-2026</div>
          </footer>
        </main>
      </div>
    </div>
  );
};