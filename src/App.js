import './App.css';
import HeaderBase from '../src/components/header/headerBase';
function App() {
  return (
     <main className='bg-slate-500 
        min-h-screen  
        flex          
        items-center
        justify-center
        p-4
      '>
        <div className='
          w-full max-w-sm 
          aspect-[9/16]
          bg-white
          rounded-3xl
          shadow-2xl
          flex flex-col
          justify-start
          
        '>
          <HeaderBase/>
         
        </div>
     </main>
  );
}

export default App;
