'use client';
import { useState, useEffect } from 'react';

import FriendZone from '@/components/FriendZone';
import Sidebar from '@/components/Sidebar';
import PostCreationButton from '@/components/PostCreationButton';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const mainContentClass = windowWidth >= 2060 ? 'w-[1464px]' : 'w-full';

  return (
    <div className={`flex ${mainContentClass ? 'justify-center' : ''}`}>
      <div className={mainContentClass}>
        <Sidebar />
        <main className=' flex justify-between lg:pl-96'>
          <div className='w-full pt-6 flex justify-center'>
            <div className='w-full sm:max-w-[680px]'>
              <PostCreationButton avatarAccount='/avatar.jpg' />
            </div>
          </div>
          <FriendZone />
        </main>
      </div>
    </div>
  );
}
