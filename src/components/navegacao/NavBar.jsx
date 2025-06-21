import React, { useState } from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons nav bar/home.svg';
import { ReactComponent as PaymentIcon } from '../../assets/icons nav bar/bank.svg';
import { ReactComponent as SpendingIcon } from '../../assets/icons nav bar/change.svg';
import { ReactComponent as CardIcon } from '../../assets/icons nav bar/card.svg';

const NavBar = () => {
  const [active, setActive] = useState('Home');

  const items = [
    { label: 'Home', icon: <HomeIcon className="w-6 h-6" /> },
    { label: 'Payment', icon: <PaymentIcon className="w-6 h-6" /> },
    { label: 'Spending', icon: <SpendingIcon className="w-6 h-6" /> },
    { label: 'Card', icon: <CardIcon className="w-6 h-6" /> },
  ];

  return (
    <nav className="bg-white border-t border-gray-200 relative p-0 m-0">
      <ul className="flex justify-around items-center py-0 m-0">
        {items.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ label, icon, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="relative flex flex-col items-center text-xs cursor-pointer flex-1 p-3"
      // p-3 cria espaçamento interno (em todos os lados)
    >
      {/* Barra preta fixa no topo do item */}
      {active && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-full" />
      )}

      <div className={`${active ? 'text-black' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`${active ? 'text-black font-bold' : 'text-gray-500'} mt-1`}>
        {label}
      </span>
    </li>
  );
};


export default NavBar;
