import React from "react";
//recebe o icone como componente e texto como propriedades
const BotaoAcao = ({icone, texto}) => {
    return(
        <button className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 transition-colors">
            {icone}
            <span className="text-sm font-medium">{texto}</span>
        </button>
    );
};
export default BotaoAcao;