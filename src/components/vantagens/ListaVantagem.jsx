import React from 'react';

const IconePresente = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
const IconeCarteira = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5l-4-4-4 4M19 7.5H5.134a1.134 1.134 0 00-1.134 1.134v9.732A1.134 1.134 0 005.134 19.5H19a1.134 1.134 0 001.134-1.134V8.634A1.134 1.134 0 0019 7.5z" /></svg>;
const IconePorcentagem = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 15.91L8.09 8.09M9 9.09a1.5 1.5 0 11-2.122-2.122 1.5 1.5 0 012.122 2.122zM15 15.09a1.5 1.5 0 11-2.122-2.122 1.5 1.5 0 012.122 2.122z" /></svg>;

const dadosDasVantagens = [
  { id: 1, icone: IconePresente, titulo: 'Get $20 Cover', subtitulo: 'Unlock peace of mind', acao: { tipo: 'link', texto: 'Unlock' } },
  { id: 2, icone: IconeCarteira, titulo: 'Cash back', subtitulo: 'Earn on groceries and more', acao: { tipo: 'seta' } },
  { id: 3, icone: IconePorcentagem, titulo: 'Earn up to 4.5% interest', subtitulo: 'On your entire balance', acao: { tipo: 'seta' } },
];

const ListaVantagens = () => {
  return (
    <div className="space-y-1"> 
      {dadosDasVantagens.map((vantagem) => (
        
        <div 
          key={vantagem.id} 
          className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-transform duration-200 hover:scale-[1.03]"
        >
          <div className="flex items-center space-x-4">
            {vantagem.icone}
            <div>
              <h3 className="font-bold text-gray-900 text-base">{vantagem.titulo}</h3>
              <p className="text-sm text-gray-500">{vantagem.subtitulo}</p>
            </div>
          </div>
          
          <div>
            {vantagem.acao.tipo === 'link' ? (
              <button className="font-semibold text-sm text-gray-900">
                {vantagem.acao.texto}
              </button>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaVantagens;