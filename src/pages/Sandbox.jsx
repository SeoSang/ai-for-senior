import React from 'react';

const Sandbox = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">AI 직접 써보기</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          복잡한 과정 없이,<br/>
          버튼을 눌러 AI가 만드는 결과를 확인해보세요.
        </p>
      </div>

      <div className="space-y-4">
         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <p className="text-slate-500 text-center">곧 재미있는 기능이 추가될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
