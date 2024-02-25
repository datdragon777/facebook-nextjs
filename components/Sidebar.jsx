'use client';
import SidebarNavList from './SidebarNavList';
import GroupList from './GroupList';

const Sidebar = () => {
  return (
    <aside className='hidden lg:flex flex-col h-[calc(100vh-64px)] fixed w-[27%] max-w-[360px] min-w-72 px-2 pt-6 overflow-x-hidden overflow-y-auto'>
      <SidebarNavList
        containerStyles='flex flex-col'
        buttonStyles='w-full bg-transparent text-gray-500 justify-start p-2 h-[52px] font-semibold text-[15px] hover:bg-gray-200'
        avatarStyles='w-9 h-9 mr-3 rounded-full'
        avatarImage='/avatar.jpg'
        avatarFallback='DK'
        nameUser='Nguyễn Đức Đạt'
        imgLink='/'
      />

      <div className='h-[1px] w-full mt-3 mr-4 bg-[#CED0D4]'></div>
      <GroupList
        buttonStyles='w-full bg-transparent text-gray-500 justify-start p-2 h-[52px] font-semibold text-[15px] hover:bg-gray-200'
        imgStyles='w-9 h-9 mr-3 rounded-full'
      />
    </aside>
  );
};

export default Sidebar;
