import React from 'react';

const BarraAcoes = () => {
  return (
    <div className="w-11/12 mx-auto -mt-10 relative bg-white rounded-2xl shadow-lg flex items-center justify-around py-4">
      
      {/* Botão Adicionar */}
      <div className="flex flex-col items-center space-y-1">
        <button className="
          flex items-center justify-center 
          w-12 h-12 rounded-full
          text-black hover:text-gray-800
          hover:bg-gray-100 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-50
          transition-all duration-300 group
        ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <span className="text-xs font-semibold">Add</span>
      </div>

      {/* Botão Enviar */}
      <div className="flex flex-col items-center space-y-1">
        <button className="
          flex items-center justify-center 
          w-12 h-12 rounded-full
          text-black hover:text-gray-800
          hover:bg-gray-100 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-50
          transition-all duration-300 group
        ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
        <span className="text-xs font-semibold">Send</span>
      </div>

      {/* Botão Receber */}
      <div className="flex flex-col items-center space-y-1">
        <button className="
          flex items-center justify-center 
          w-12 h-12 rounded-full
          text-black hover:text-gray-800
          hover:bg-gray-100 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-50
          transition-all duration-300 group
        ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </button>
        <span className="text-xs font-semibold">Recieve</span>
      </div>

      {/* Botão Mais */}
      <div className="flex flex-col items-center space-y-1">
        <button className="
          flex items-center justify-center 
          w-12 h-12 rounded-full
          text-black hover:text-gray-800
          hover:bg-gray-100 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-50
          transition-all duration-300 group
        ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
        <span className="text-xs font-semibold">More</span>
      </div>

    </div>
  );
};

export default BarraAcoes;
