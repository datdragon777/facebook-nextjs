import { FaVideo } from 'react-icons/fa6';
import { ImImages } from 'react-icons/im';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

import IconLinkButton from './IconLinkButton';
import PostDialog from './PostDialog';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import EmotionalDialog from './EmotionalDialog';

const PostCreationButton = ({ avatarAccount }) => {
  return (
    <div className='w-full rounded-lg bg-white px-4 pt-3 pb-[10px]'>
      <div className='flex items-center'>
        <Avatar className='w-9 h-9 mr-2'>
          <AvatarImage
            className='rounded-full w-9 h-9 aspect-square object-cover'
            src={avatarAccount}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <PostDialog
          dialogTriggerStyles='w-full text-left bg-[#F0F2F5] py-2 px-3 rounded-full hover:bg-[#E4E6E9]'
          dialogTriggerText='Bạn đang nghĩ gì thế?'
          dialogTriggerTextStyles='text-[#65676B] text-[17px] '
        />
      </div>
      <div className='flex mt-3 pt-2 border-t-[#E4E6EB] border-t-[1px]'>
        <IconLinkButton
          linkButtonStyles='w-1/3 flex justify-center text-gray-500 p-2 text-[15px] font-semibold bg-transparent hover:bg-[#F2F2F2]'
          iconStyles='w-6 h-6 mr-2'
          iconPath='/live-videos'
          linkStyles='w-fit flex'
          iconImage={<FaVideo size={24} />}
          iconName='Video trực tiếp'
        />
        <PostDialog
          dialogTriggerStyles='w-1/3 rounded-md text-gray-500 flex items-center justify-center p-2 hover:bg-[#F2F2F2]'
          dialogIcon={<ImImages size={24} />}
          dialogTriggerText='Ảnh/video'
          dialogTriggerTextStyles='text-[15px] font-semibold'
        />
        <EmotionalDialog
          dialogTriggerStyles='w-1/3 rounded-md text-gray-500 flex items-center justify-center p-2 hover:bg-[#F2F2F2]'
          dialogIcon={<MdOutlineEmojiEmotions size={24} />}
          dialogTriggerText='Cảm xúc/hoạt động'
          dialogTriggerTextStyles='text-[15px] font-semibold'
        />
      </div>
    </div>
  );
};

export default PostCreationButton;
