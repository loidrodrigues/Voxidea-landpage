
import React from 'react';
import { AppTone, LandingContent } from '../types';

interface HeroProps {
  tone: AppTone;
  content: LandingContent['hero'];
}

const MobileScreen: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-zinc-900 bg-[#F8F9FB] overflow-hidden shrink-0 transition-all duration-700 ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-50"></div>
    <div className="h-full flex flex-col hide-scrollbar overflow-y-auto text-left">
      {children}
    </div>
  </div>
);

const Hero: React.FC<HeroProps> = ({ tone, content }) => {
  const whatsappLink = "https://wa.me/5585996537401?text=ola%2C%20Loid%20Padre%2C%20quero%20testar%20o%20Voxidea.";

  return (
    <section className="relative pt-4 lg:pt-12 pb-20 lg:pb-32 overflow-hidden lg:overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] blur-[80px] md:blur-[150px] rounded-full opacity-20 transition-colors duration-1000 ${tone === 'bold' ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 z-20 px-4">
          <div className="space-y-6">
            {tone === 'bold' ? (
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black font-bold-brand leading-[0.9] uppercase tracking-tighter text-white drop-shadow-2xl">
                {content.headline.split('—').map((part, i) => (
                  <span key={i} className="block">
                    {part}{i === 0 ? ' —' : ''}
                  </span>
                ))}
              </h1>
            ) : (
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {content.headline}
              </h1>
            )}
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed ${tone === 'bold' ? 'text-zinc-400' : 'text-slate-600'}`}>
              {content.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ${
                tone === 'bold'
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
              }`}
            >
              {content.cta}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            
            <div className={`flex items-center gap-2 text-sm font-medium ${tone === 'bold' ? 'text-zinc-500' : 'text-slate-400'}`}>
              <i className="fa-solid fa-circle-check text-blue-500"></i>
              <span>{tone === 'bold' ? 'Feedback real sem filtro' : 'Validação profissional'}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Mockup Stack */}
        <div className="flex-1 relative w-full h-[550px] sm:h-[650px] lg:h-[750px] flex items-center justify-center mt-12 lg:mt-0 overflow-visible">
          
          {/* Print 1: Descubra & Vote (Screen 1 - Left) */}
          <div className="absolute transform -translate-x-12 sm:-translate-x-24 -translate-y-6 -rotate-6 z-10 opacity-70 lg:opacity-90 scale-[0.7] sm:scale-85 lg:scale-95 transition-all duration-700 drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]">
            <MobileScreen>
              <div className="bg-[#2563EB] p-6 pt-12 text-white space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-[9px] font-bold opacity-70">OLÁ, LOID RODRIGUES PADRE</div>
                    <h4 className="text-2xl font-bold">Descubra & Vote</h4>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><i className="fa-solid fa-bell text-sm"></i></div>
                    <div className="w-9 h-9 rounded-full bg-slate-300 border border-white/40 overflow-hidden">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Loid" alt="Loid" />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] opacity-80 leading-tight">Sua opinião define quais projetos se tornam realidade.</p>
                <div className="flex gap-2">
                  <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] font-bold">
                    <i className="fa-solid fa-fire text-orange-400"></i> 12 em alta
                  </div>
                  <div className="bg-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] font-bold">
                    <i className="fa-solid fa-sparkles text-yellow-400"></i> Top Creators
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 py-3 flex gap-4 text-[10px] font-bold text-slate-400 border-b">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-1">EM ALTA</span>
                <span>RECENTES</span>
                <span>TOP 5 DA SEMANA</span>
              </div>
              <div className="p-3 space-y-3">
                <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-sm">
                  <div className="text-[9px] font-bold text-blue-600">SUSTENTABILIDADE</div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">Aplicativo para vender saco</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">Esse app é muito bom para quem gosta de sustentabilidade...</p>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Loid" alt="Loid" /></div>
                      <span className="text-[9px] text-slate-500">Loid Rodrigues Padre</span>
                    </div>
                    <div className="flex gap-3 text-[10px] font-bold text-slate-400">
                      <span><i className="fa-solid fa-arrow-up text-orange-400"></i> 3</span>
                      <span><i className="fa-solid fa-heart text-red-500"></i> 3</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Action Button */}
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-xl border-4 border-white/10">
                <i className="fa-solid fa-plus"></i>
              </div>
            </MobileScreen>
          </div>

          {/* Print 2: Hall da Fama (Screen 2 - Center Focus) */}
          <div className="absolute transform translate-y-0 translate-x-0 rotate-0 z-30 scale-[0.85] sm:scale-100 lg:scale-110 transition-all duration-700 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <MobileScreen className="border-blue-600/10">
              <div className="bg-[#D9A507] p-6 pt-12 text-white space-y-5">
                 <div className="flex justify-between items-center">
                    <i className="fa-solid fa-arrow-left text-sm"></i>
                    <span className="text-[10px] font-bold opacity-70 tracking-widest">HALL DA FAMA</span>
                 </div>
                 <div className="flex items-start gap-4">
                    <i className="fa-solid fa-trophy text-4xl"></i>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold leading-tight">Top 5 Ideias da Semana</h3>
                      <p className="text-[10px] opacity-80 leading-tight">Essas ideias serão comentadas na Review ao Vivo!</p>
                    </div>
                 </div>
              </div>
              <div className="p-4 space-y-3 -mt-4">
                {[
                  { rank: '#1', cat: 'SUSTENTABILIDADE', title: 'Aplicativo para vender saco', votes: 3, author: 'Loid Rodrigues Padre', icon: 'fa-trophy text-yellow-500' },
                  { rank: '#2', cat: 'SUSTENTABILIDADE', title: 'uma strtup de reciclagem', votes: 2, author: 'Pedro Panzo', icon: 'fa-medal text-slate-300' },
                  { rank: '#3', cat: 'TECNOLOGIA', title: 'Controle de orfanatos em Angola', votes: 1, author: 'Bruno Eduardo Miala', icon: 'fa-award text-orange-400' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex gap-4 items-center">
                    <div className="flex flex-col items-center gap-1">
                      <i className={`fa-solid ${item.icon} text-lg`}></i>
                      <span className="text-[10px] font-black text-slate-300">{item.rank}</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider">{item.cat}</div>
                      <h4 className="text-[11px] font-bold text-slate-900 leading-tight">{item.title}</h4>
                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-[10px] font-bold text-orange-400"><i className="fa-solid fa-arrow-up"></i> {item.votes} votos</span>
                        <span className="text-[10px] text-slate-400"><i className="fa-solid fa-circle-user"></i> {item.author.split(' ')[0]}</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-chevron-right text-slate-200 text-[10px]"></i>
                  </div>
                ))}
              </div>
            </MobileScreen>
          </div>

          {/* Print 3: Top Creators (Screen 3 - Right) */}
          <div className="absolute transform translate-x-12 sm:translate-x-24 translate-y-6 rotate-6 z-20 opacity-70 lg:opacity-90 scale-[0.7] sm:scale-85 lg:scale-95 transition-all duration-700 drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]">
            <MobileScreen>
               <div className="bg-[#4F46E5] p-6 pt-12 text-white space-y-5">
                 <div className="flex justify-between items-center">
                    <i className="fa-solid fa-arrow-left text-sm"></i>
                    <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">COMUNIDADE</span>
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-2xl font-bold flex items-center gap-2">
                      <i className="fa-solid fa-sparkles text-yellow-300"></i> Top Creators
                    </h4>
                    <p className="text-[10px] opacity-70">Membros que mais contribuem.</p>
                 </div>
               </div>
               <div className="p-4 space-y-3 -mt-4">
                 {[
                   { rank: '#1', name: 'Loid Rodrigues Padre', posts: '1 publicação', color: 'text-orange-500', img: 'Loid' },
                   { rank: '#2', name: 'Bruno Eduardo Miala', posts: '1 publicação', color: 'text-orange-400', img: 'Bruno' },
                   { rank: '#3', name: 'Pedro Panzo', posts: '1 publicação', color: 'text-orange-300', img: 'Pedro' }
                 ].map((user, i) => (
                   <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-4">
                     <span className={`text-[11px] font-black ${user.color} w-6`}>{user.rank}</span>
                     <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 overflow-hidden shrink-0">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.img}`} alt="user" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-[11px] font-bold text-slate-900">{user.name}</h4>
                       <p className="text-[10px] text-slate-400">{user.posts}</p>
                     </div>
                   </div>
                 ))}
               </div>
               {/* Trophy Floating Button Detail */}
               <div className="absolute bottom-10 left-6 w-14 h-14 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl border-4 border-white/10">
                <i className="fa-solid fa-trophy"></i>
              </div>
            </MobileScreen>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
