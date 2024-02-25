import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

const FriendItem = ({ avatarFriend, avatarName, isOnline }) => {
  return (
    <Button className='w-full bg-transparent text-[#050505] justify-start p-2 h-[52px] font-semibold text-[15px] hover:bg-gray-200 truncate'>
      <div className='w-9 h-9 mr-3 relative'>
        <Avatar className='w-9 h-9'>
          <AvatarImage
            className='rounded-full w-9 h-9 aspect-square object-cover'
            src={avatarFriend}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {isOnline && (
          <div className='w-3 h-3 bg-green-500 rounded-full border-2 border-solid border-slate-50 absolute bottom-[-3px] right-0'></div>
        )}
      </div>
      <span className='truncate w-9/12 text-left'>{avatarName}</span>
    </Button>
  );
};

export default FriendItem;
