import './App.css';
import HeaderBase from '../src/components/header/headerBase';
import BarraAcoes from './components/acoes/BarraAcoes';
import ListaVantagens from './components/vantagens/ListaVantagem';
import CartaoAcao from './components/promocao/CartaoAcao';
import NavBar from './components/navegacao/NavBar';
function App() {
  return (
     <main className='bg-slate-500 min-h-screen flex items-center justify-center p-4'>
        <div className='w-full max-w-sm aspect-[9/20] bg-white rounded-3xl shadow-2x flex flex-col justify-start'>
          <HeaderBase/>

      
            <div className="flex-grow">
              <BarraAcoes />

               <div className="mt-10 px-5">
                <ListaVantagens/>
                <CartaoAcao/>
              </div>
            </div>
            <NavBar/>
          </div>
     </main>
  );
}

export default App;
