/** @format */

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
      <div className='relative inline-block text-left'>
        <div>
          <button
            onClick={handleClick}
            type='button'
            className='inline-flex btn justify-center rounded-md border border-gray-300 bg-[#76CA71] px-2 py-1 '
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'>
            Menu
            <svg
              className='-mr-1 ml-2 h-5 w-5 mt-1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'>
              <path
                fill-rule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>
        {showOptions && (
          <div
            className='absolute right-0 z-10 mt-2 w-24 lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabindex='-1'>
            <div className='py-1' role='none'>
              <NavLink
                to="/product"
                className='text-gray-700 block px-4 py-2 text-sm hover:text-[#76CA71]'
                role='menuitem'
                tabindex='-1'
                id='menu-item-0'>
                Produk
              </NavLink>
              <NavLink
                to="/usahadanjasa"
                className='text-gray-700 block px-4 py-2 text-sm hover:text-[#76CA71]'
                role='menuitem'
                tabindex='-1'
                id='menu-item-1'>
                Usaha dan Jasa
              </NavLink>
             
              
            </div>
          </div>
        )}

        {showOptions}
      </div>
    </>
  );
}
