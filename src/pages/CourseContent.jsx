import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, PlayCircle, Lock, BookOpen } from 'lucide-react';

export default function CourseContent() {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  // بيانات هيكلية: 6 شهور، 4 محاضرات، 5 فيديوهات
  const [activeMonth, setActiveMonth] = useState(1);
  const [activeLecture, setActiveLecture] = useState(null);
  const [currentVideo, setCurrentVideo] = useState("");

  const months = [1, 2, 3, 4, 5, 6];
  const lectures = [1, 2, 3, 4];
  const videos = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 no-select">
      <div className="stars-bg"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-slate-900/50 p-4 rounded-2xl border border-cyan-500/20 backdrop-blur-md">
        <button onClick={() => navigate('/subjects')} className="flex items-center gap-2 text-cyan-400 hover:text-white transition">
          <ChevronLeft /> العودة للمواد
        </button>
        <h2 className="text-xl font-bold text-cyan-300">محتوى المنهج - {teacherId}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* القائمة الجانبية (الشهور والمحاضرات) */}
        <div className="space-y-4 overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
          {months.map(m => (
            <div key={m} className="bg-slate-900/80 rounded-xl border border-slate-700 overflow-hidden">
              <button 
                onClick={() => setActiveMonth(m === activeMonth ? null : m)}
                className={`w-full p-4 flex justify-between items-center ${activeMonth === m ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800'}`}
              >
                <span className="font-bold">الشهر {m}</span>
                <BookOpen size={20} />
              </button>

              <AnimatePresence>
                {activeMonth === m && (
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                    className="bg-slate-800/50 p-2 space-y-2"
                  >
                    {lectures.map(lec => (
                      <div key={lec} className="border-b border-slate-700 last:border-0">
                        <button 
                          onClick={() => setActiveLecture(lec === activeLecture ? null : lec)}
                          className="w-full text-right p-3 text-sm hover:text-cyan-400 flex justify-between"
                        >
                          المحاضرة {lec} {activeLecture === lec ? '🔽' : '◀️'}
                        </button>
                        
                        {activeLecture === lec && (
                          <div className="pr-4 pb-2 space-y-1">
                            {videos.map(v => (
                              <button 
                                key={v}
                                onClick={() => setCurrentVideo("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} // حط هنا روابط اليوتيوب
                                className="w-full text-right p-2 text-xs text-gray-400 hover:bg-cyan-500/20 hover:text-white rounded flex items-center gap-2"
                              >
                                <PlayCircle size={14} /> الفيديو {v}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* مشغل الفيديو */}
        <div className="lg:col-span-2 space-y-6">
          {currentVideo ? (
            <div className="relative group">
              {/* طبقة حماية شفافة فوق الفيديو لمنع كليك يمين والتحكم المباشر */}
              <div className="absolute inset-0 z-10 bg-transparent pointer-events-none"></div>
              
              <div className="aspect-video bg-black rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                <ReactPlayer
                  url={currentVideo}
                  width="100%"
                  height="100%"
                  controls={true} // يفضل تفعيلها للتحكم لكن سنخفيها بالـ CSS لو لزم الأمر
                  config={{
                    youtube: { playerVars: { modestbranding: 1, rel: 0 } }
                  }}
                />
              </div>
              <div className="mt-4 p-4 bg-slate-900/80 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400">اسم الفيديو الحالي</h3>
                <p className="text-gray-400 text-sm mt-2">تذكر أن مشاركة حسابك تعرضك للحظر النهائي من المنصة.</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center text-gray-500">
              <PlayCircle size={80} className="mb-4 opacity-20" />
              <p>اختر محاضرة وابدأ المذاكرة يا بطل</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
