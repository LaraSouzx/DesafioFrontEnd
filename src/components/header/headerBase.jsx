import logo from '../../assets/logo.png';
import NotificacaoIcon from './Notificacao';
import PerfilIcon from './Perfil';

function HeaderBase() {
  return (
    <div className='bg-black h-[40%] w-full rounded-3xl relative overflow-hidden'>
        <PerfilIcon className=" absolute top-9 left-80"/>
        <NotificacaoIcon className=" absolute top-9 left-60"/>
        <img
            src={logo}
            alt='Logo'
            className='absolute top-4 left-4 w-20 h-20 object-contain'
        />
    </div>
  );
}

export default HeaderBase;
