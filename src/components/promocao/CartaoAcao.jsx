import IconeWidget from "./IconeWidget";

const CartaoAcao = () => {
    return(
        <div className=" p-5 flex items-center justify-between">
            <div className="flex flex-col space-y-4 items-start">
                <div>
                    <h2 className="font-bold text-lg text-gray-90">Custom your Home Screen</h2>
                     <p className="text-sm text-gray-500">Change home widget</p>                
                </div>
                <button className="bg-black text-white font-semibold rounded-full px-5 py-2 hover:bg-gray-800 transition-colors">
                    Try Now
                </button>
            </div>

            <div>
                <IconeWidget className="w-16 h-16 text-gray-800" />
            </div>
        </div>
    );
}
export default CartaoAcao;