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
    <nav className="bg-white border-t border-gray-200">
      <ul className="flex justify-around items-center py-2">
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
      className="flex flex-col items-center text-xs cursor-pointer"
    >
      <div className={`mb-1 w-full ${active ? 'border-t-2 border-black' : 'border-t-2 border-transparent'}`} />
      <div className={`${active ? 'text-black' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`mt-1 ${active ? 'text-black font-medium' : 'text-gray-500'}`}>{label}</span>
    </li>
  );
};

export default NavBar;
