import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timer, User, CreditCard, ShieldCheck } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'طالب القمة';

  // عداد الوقت (مثلاً 30 يوم من الآن)
  const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (24 * 3600));
    const h = Math.floor((seconds % (24 * 3600)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
  };

  const { d, h, m, s } = formatTime(timeLeft);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="stars-bg"></div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-slate-900/90 border border-purple-500/40 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.2)]"
      >
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg mb-4">
            👤
          </div>
          <h2 className="text-2xl font-bold text-white">{userName}</h2>
          <span className="text-cyan-400 text-sm flex items-center justify-center gap-1 mt-1">
            <ShieldCheck size={14} /> حساب موثق
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
            <p className="text-gray-400 text-xs mb-3 flex items-center gap-2">
              <Timer size={14} /> متبقي على نهاية الاشتراك
            </p>
            <div className="flex justify-between text-center">
              <div><span className="text-2xl font-black text-purple-400">{d}</span><p className="text-[10px] text-gray-500">يوم</p></div>
              <span className="text-2xl opacity-30">:</span>
              <div><span className="text-2xl font-black text-purple-400">{h}</span><p className="text-[10px] text-gray-500">ساعة</p></div>
              <span className="text-2xl opacity-30">:</span>
              <div><span className="text-2xl font-black text-purple-400">{m}</span><p className="text-[10px] text-gray-500">دقيقة</p></div>
              <span className="text-2xl opacity-30">:</span>
              <div><span className="text-2xl font-black text-purple-400">{s}</span><p className="text-[10px] text-gray-500">ثانية</p></div>
            </div>
          </div>

          <button className="w-full py-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-right px-6 flex items-center justify-between transition group">
            <span className="text-sm font-medium">سجل المدفوعات</span>
            <CreditCard size={18} className="text-gray-500 group-hover:text-cyan-400" />
          </button>
        </div>

        <button 
          onClick={() => navigate('/subjects')}
          className="w-full mt-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition"
        >
          الذهاب للدراسة 📖
        </button>
      </motion.div>
    </div>
  );
}
