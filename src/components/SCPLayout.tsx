import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Info, Megaphone, IdCard, History } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTOCState } from '../context/TOCContext';
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
  const location = useLocation();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const showTOCContext = useTOCState();

  React.useEffect(() => {
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
  }, [location.pathname, showTOCContext, children]);

  const scrollToHeader = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-scp-bg text-zinc-200 selection:bg-scp-orange selection:text-black">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="scanline" />
      </div>

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 bg-black flex flex-col shrink-0">
          <div className="p-8 border-b border-zinc-800">
            <div className="flex items-center gap-3 text-scp-orange mb-2">
              <img src={litery} className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none tracking-tighter">Events</span>
                <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">Litery</span>
              </div>
            </div>
            <div className="h-1 w-full bg-zinc-800 mt-4 relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-scp-orange/40 w-1/2"
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
                        onClick={() => scrollToHeader(item.id)}
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

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-zinc-950/20 relative" ref={contentRef}>
          
          <div className="p-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>

          {/* Footer Overlay */}
          <footer className="-mt-16 p-6 border-t border-zinc-900 text-zinc-600 text-[10px] flex justify-between uppercase tracking-widest font-bold">
            <div>Создано Aphin, при помощи mr wdy xiii</div>
            <div>2025-2026</div>
          </footer>
        </main>
      </div>
    </div>
  );
};
