import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { ReactElement, useContext, useState } from 'react';

import { STATEACTIONS } from '../context/stateActions';
import { myContext } from '../context/stateProvider';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(): ReactElement {
  const { state, dispatch } = useContext(myContext);
  const { isOverlayOpen } = state;

  const [navigation, setNavigation] = useState([
    { name: 'Experience', href: '#', current: true },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Contact Me', href: '#', current: false }
  ]);

  const handleOpenOverlay = () => {
    if (isOverlayOpen) {
      dispatch({ type: STATEACTIONS.closeOverlay });
    } else {
      dispatch({ type: STATEACTIONS.openOverlay });
    }
  };

  // TODO: update on scroll
  function setNavigationCurrent(index: number): void {
    setNavigation(
      navigation.map((val, ix) => {
        val.current = index === ix;
        return val;
      })
    );
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all">
                  <span className="sr-only">Open main menu</span>
                  
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}

                  <div className="flex-shrink-0 flex items-center">
                    <p className="text-white text-lg sm:text-2xl ml-3 sm:ml-0">Mark Kraus</p>
                  </div>
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch">
                <p className="text-white hidden sm:flex items-center sm:text-xl md:text-2xl">Mark Kraus</p>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        ) + 'transition-all'}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => setNavigationCurrent(index)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="absolute right-0 flex items-center mr-5 sm:static sm:inset-auto p-1 cursor-pointer rounded-md text-lg text-white hover:bg-gray-700 transition-all"
                onClick={handleOpenOverlay}
              >
                <p className="mx-4">My Skills</p>
                <img
                  className="h-10 w-10 rounded-full mr-2"
                  src="/mark-portrait.jpg"
                  alt="image of a man's face"
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => {
                return <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => setNavigationCurrent(index)}
                >
                  {item.name}
                </a>;
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
