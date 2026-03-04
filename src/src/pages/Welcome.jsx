import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
  const navigate = useNavigate();
  // لو لسة معملناش تسجيل دخول، هنفترض إن اسمه "طالب القمة"
  const userName = localStorage.getItem('userName') || 'طالب القمة';

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="stars-bg"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-slate-900/80 border-2 border-yellow-500/50 p-8 rounded-3xl shadow-[0_0_40px_rgba(234,179,8,0.3)] max-w-2xl text-center backdrop-blur-md"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 animate-pulse">🌙 رمضان كريم 🌙</h1>
        <h2 className="text-2xl mb-8">أهلاً بك يا {userName} في أكاديمية القمة</h2>
        
        <div className="space-y-6 text-gray-200 text-lg leading-relaxed font-serif">
          <p className="text-yellow-300 font-bold">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          <p>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</p>
          <div className="w-1/2 h-px bg-yellow-500/30 mx-auto"></div>
          <p>اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...</p>
          <div className="w-1/2 h-px bg-yellow-500/30 mx-auto"></div>
          <p className="text-emerald-400 italic">"اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً"</p>
        </div>

        <button 
          onClick={() => navigate('/subjects')}
          className="mt-8 px-12 py-3 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full font-bold text-xl hover:scale-105 transition shadow-lg shadow-yellow-500/50"
        >
          التالي 🚀
        </button>
      </motion.div>
    </div>
  );
}
