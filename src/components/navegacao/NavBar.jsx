import React, { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState('Home');

  const svgIcons = {
    HomeIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`,
    PaymentIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>`,
    SpendingIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"/></svg>`,
    CardIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>`,
  };

  const items = [
    { label: 'Home', icon: svgIcons.HomeIcon },
    { label: 'Payment', icon: svgIcons.PaymentIcon },
    { label: 'Spending', icon: svgIcons.SpendingIcon },
    { label: 'Card', icon: svgIcons.CardIcon },
  ];

  return (
    <nav className="bg-white  border-gray-200 relative p-0 m-0">
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
    >
      {active && (
        <div className="absolute top-0 left-0 w-full h-1 bg-[#644BBF] rounded-t-full" />
      )}

      <div
        className={`${active ? 'text-black transform scale-125 transition-transform duration-200' : 'text-gray-500'}`}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span className={`${active ? 'text-black font-bold' : 'text-black'} mt-1`}>
        {label}
      </span>
    </li>
  );
};

export default NavBar;