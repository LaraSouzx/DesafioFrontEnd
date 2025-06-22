const SeletorConta = () =>{
    return(
         <button className="flex items-center space-x-1 text-white hover:text-gray-600 transition-colors">
            <span className="font-normal">Personal</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
    );
};
export default SeletorConta;