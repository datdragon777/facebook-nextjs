import { IoIosSearch } from 'react-icons/io';
import { SlOptions } from 'react-icons/sl';

import { Button } from './ui/button';
import FriendItem from './FriendItem';

const friends = [
  {
    avatar: '/shadow.jpg',
    name: 'Shadow',
    isOnline: true,
  },
  { avatar: '/alpha.jpg', name: 'Alpha', isOnline: true },
  { avatar: '/beta.jpg', name: 'Beta', isOnline: false },
  { avatar: '/delta.jpg', name: 'Delta', isOnline: true },
  { avatar: '/gamma.jpg', name: 'Gamma', isOnline: true },
  { avatar: '/epsilon.jpg', name: 'Epsilon', isOnline: false },
  { avatar: '/zeta.jpg', name: 'Zeta', isOnline: false },
  { avatar: '/eta.jpg', name: 'Eta', isOnline: false },
  { avatar: '/nu.jpg', name: 'Nu', isOnline: true },
];

const FriendZone = () => {
  return (
    <div className='hidden md:flex flex-col h-[calc(100vh-64px)] sticky top-[64px] right-0 w-[27%] max-w-[360px] min-w-72 px-2 pt-6 overflow-x-hidden overflow-y-auto'>
      <div className='flex justify-between items-center'>
        <p className='text-[17px] text-[#65676B] font-semibold leading-none'>
          Người liên hệ
        </p>
        <div className='flex gap-x-2'>
          <Button className='p-2 h-fit text-gray-500 bg-transparent rounded-full hover:bg-gray-200'>
            <IoIosSearch size={16} />
          </Button>
          <Button className='p-2 h-fit text-gray-500 bg-transparent rounded-full hover:bg-gray-200'>
            <SlOptions size={16} />
          </Button>
        </div>
      </div>
      <div className='pt-2'>
        {friends.map((friend, index) => {
          return (
            <FriendItem
              key={index}
              avatarFriend={friend.avatar}
              avatarName={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendZone;
