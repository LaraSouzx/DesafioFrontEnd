// src/components/header/headerBase.jsx

import logo from '../../assets/logo.png';
import NotificacaoIcon from './Notificacao';
import PerfilIcon from './Perfil';
import SeletorDeConta from './SeletorConta';
import Balance from './balance'; 

function HeaderBase() {
  return (
   
    <div className='bg-black h-[40%] w-full rounded-3xl relative overflow-hidden'>
      <img
          src={logo}
          alt='Logo'
          className='absolute top-2 left-4 w-20 h-20 object-contain'
      />

     
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <NotificacaoIcon />
        <PerfilIcon />
      </div>

      <div className="
        absolute 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        flex flex-col items-center space-y-4
      ">
        <Balance valor={8013.20} />
        <SeletorDeConta />
      </div>
      
    </div>
  );
}

export default HeaderBase;