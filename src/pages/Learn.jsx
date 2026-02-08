import React from 'react';

const Learn = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">AI 개념 배우기</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          이곳에서는 인공지능이 무엇인지,<br/>
          우리 생활에 어떤 도움이 되는지 쉽게 설명해 드립니다.
        </p>
      </div>
      
      <div className="space-y-4">
        {/* Placeholder for content list */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <p className="text-slate-500 text-center">준비 중인 콘텐츠입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
