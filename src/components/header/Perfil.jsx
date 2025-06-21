import React from "react";
const PerfilIcon = ({className}) =>{
    return(
        <button
            type="button"
            aria-label="perfil do usuario"
            className={`
               relative p-2 rounded-full text-white
               hover:text-gray-800 hover:bg-gray-100
               focus:outline-none
               hover:ring-4 hover:ring-slate-200 hover:ring-opacity-75
               transition-all duration-300
               ${className || ""} 
            `}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
            </svg>
        </button>
    );
};
export default PerfilIcon;