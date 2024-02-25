import { CgMenuGridO } from 'react-icons/cg';
import { FaFacebookMessenger } from 'react-icons/fa';
import { TbBellRinging2Filled } from 'react-icons/tb';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const buttonIcons = [
  { icon: <CgMenuGridO className='w-5 h-5' /> },
  { icon: <FaFacebookMessenger className='w-5 h-5' /> },
  { icon: <TbBellRinging2Filled className='w-5 h-5' /> },
];

const MenuButton = ({buttonIconStyles, buttonAvatarStyles, avatarImage, avatarFallback }) => {
  return (
    <div className='flex'>
      <div className='flex gap-x-2'>
        {buttonIcons.map((buttonIcon, index) => {
          return (
            <Button
              key={index}
              className={buttonIconStyles}
            >
              {buttonIcon.icon}
            </Button>
          );
        })}
      </div>
      <Button className={buttonAvatarStyles}>
        <Avatar>
          <AvatarImage src={avatarImage} className='object-cover' />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </Button>
    </div>
  );
};

export default MenuButton;
