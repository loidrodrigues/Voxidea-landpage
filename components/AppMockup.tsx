
import React from 'react';
import { AppTone } from '../types';

interface AppMockupProps {
  tone: AppTone;
  text: string;
}

const MobileScreen: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`relative w-[280px] h-[580px] rounded-[2.5rem] border-[8px] border-zinc-800 bg-white overflow-hidden shadow-2xl shrink-0 transition-transform duration-500 hover:scale-105 ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-50"></div>
    <div className="h-full flex flex-col hide-scrollbar overflow-y-auto bg-[#F8F9FB]">
      {children}
    </div>
  </div>
);

const AppMockup: React.FC<AppMockupProps> = ({ tone, text }) => {
  return (
    <section className="py-12 space-y-12">
      <div className="text-center space-y-4">
        <h2 className={`text-3xl font-bold ${tone === 'bold' ? 'font-bold-brand text-5xl text-white' : 'text-slate-900'}`}>
          Prints do App
        </h2>
        <p className={tone === 'bold' ? 'text-zinc-400' : 'text-slate-500'}>
          {text}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 overflow-x-auto hide-scrollbar pb-8">
        
        {/* Screen 1: Feed (Descubra & Vote) */}
        <MobileScreen>
          <div className="bg-[#2563EB] p-6 pt-10 text-white space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-[10px] font-bold opacity-80">OLÁ, LOID RODRIGUES PADRE</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="fa-solid fa-bell text-xs"></i></div>
                <div className="w-8 h-8 rounded-full bg-zinc-300 overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Loid" alt="avatar" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Descubra & Vote</h3>
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
          <div className="bg-white px-2 py-3 flex gap-4 text-[9px] font-bold text-slate-400 border-b">
            <span className="text-blue-600 border-b-2 border-blue-600 pb-1">EM ALTA</span>
            <span>RECENTES</span>
            <span>TOP 5 DA SEMANA</span>
          </div>
          <div className="p-3 space-y-3">
            {[
              { cat: 'SUSTENTABILIDADE', title: 'Aplicativo para vender saco', desc: 'Esse app é muito bom para quem gosta de sustentabilidade...', votes: 3, hearts: 3, comments: 0 },
              { cat: 'SUSTENTABILIDADE', title: 'uma strtup de reciclagem', desc: 'esse esse, o usuari vai poder apanhar lixo e cadastrar no app...', votes: 2, hearts: 2, comments: 1 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 space-y-2">
                <div className="text-[8px] font-bold text-blue-600 uppercase tracking-wider">{item.cat}</div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.title}</h4>
                <p className="text-[9px] text-slate-500 line-clamp-2">{item.desc}</p>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                    <span className="text-[8px] font-medium text-slate-500">Loid Rodrigues Padre</span>
                  </div>
                  <div className="flex gap-3 text-[9px] font-bold text-slate-400">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-arrow-up text-orange-400"></i> {item.votes}</span>
                    <span className="flex items-center gap-1"><i className="fa-solid fa-heart text-red-500"></i> {item.hearts}</span>
                    <span className="flex items-center gap-1"><i className="fa-solid fa-comment"></i> {item.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-xl">
            <i className="fa-solid fa-plus"></i>
          </div>
        </MobileScreen>

        {/* Screen 2: Hall of Fame (Top 5 Ideias) */}
        <MobileScreen className="lg:-translate-y-4">
          <div className="bg-[#D9A507] p-6 pt-10 text-white space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="fa-solid fa-arrow-left text-xs"></i></div>
              <div className="text-[10px] font-bold opacity-80 tracking-widest uppercase">HALL DA FAMA</div>
            </div>
            <div className="flex gap-4 items-start">
              <i className="fa-solid fa-trophy text-4xl"></i>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold leading-tight">Top 5 Ideias da Semana</h3>
                <p className="text-[9px] opacity-80 leading-tight">Essas ideias serão comentadas na nossa próxima Review Comunitária ao Vivo!</p>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-3 -mt-4">
            {[
              { rank: '#1', cat: 'SUSTENTABILIDADE', title: 'Aplicativo para vender saco', votes: 3, author: 'Loid Rodrigues Padre', icon: 'fa-trophy text-yellow-500' },
              { rank: '#2', cat: 'SUSTENTABILIDADE', title: 'uma strtup de reciclagem', votes: 2, author: 'Pedro Panzo', icon: 'fa-star text-slate-300' },
              { rank: '#3', cat: 'TECNOLOGIA', title: 'Criação de um App para controle dos orfanatos em Angola', votes: 1, author: 'Bruno Eduardo Miala', icon: 'fa-award text-orange-500' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex gap-4 items-center">
                <div className="flex flex-col items-center gap-1">
                  <i className={`fa-solid ${item.icon} text-lg`}></i>
                  <span className="text-[10px] font-black text-slate-300">{item.rank}</span>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-[8px] font-bold text-blue-600 uppercase tracking-wider">{item.cat}</div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.title}</h4>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-[9px] font-bold text-orange-400 flex items-center gap-1"><i className="fa-solid fa-arrow-up"></i> {item.votes} votos</span>
                    <span className="text-[9px] text-slate-400 flex items-center gap-1"><i className="fa-solid fa-circle-user"></i> {item.author}</span>
                  </div>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-200 text-xs"></i>
              </div>
            ))}
          </div>
        </MobileScreen>

        {/* Screen 3: Top Creators */}
        <MobileScreen>
          <div className="bg-[#4F46E5] p-6 pt-10 text-white space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="fa-solid fa-arrow-left text-xs"></i></div>
              <div className="text-[10px] font-bold opacity-80 tracking-widest uppercase">COMUNIDADE</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <i className="fa-solid fa-sparkles text-yellow-300"></i> Top Creators
              </h3>
              <p className="text-[10px] opacity-80 leading-tight">Os membros que mais contribuem com ideias inovadoras.</p>
            </div>
          </div>
          <div className="p-4 space-y-3 -mt-4">
            {[
              { rank: '#1', name: 'Loid Rodrigues Padre', posts: '1 publicação', color: 'text-orange-500', img: 'Loid' },
              { rank: '#2', name: 'Bruno Eduardo Miala', posts: '1 publicação', color: 'text-orange-400', img: 'Bruno' },
              { rank: '#3', name: 'Pedro Panzo', posts: '1 publicação', color: 'text-orange-300', img: 'Pedro' },
              { rank: '#4', name: 'Rodrigues', posts: '1 publicação', color: 'text-slate-300', img: 'Rodrigues' }
            ].map((user, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center gap-4">
                <span className={`text-xs font-black ${user.color} w-6`}>{user.rank}</span>
                <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 overflow-hidden shrink-0">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.img}`} alt="user" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-slate-900">{user.name}</h4>
                  <p className="text-[9px] text-slate-400">{user.posts}</p>
                </div>
              </div>
            ))}
          </div>
        </MobileScreen>

      </div>
    </section>
  );
};

export default AppMockup;
