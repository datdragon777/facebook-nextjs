import { FaUserFriends } from 'react-icons/fa';
import { MdGroups, MdOutlineOndemandVideo } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { FaBookmark } from 'react-icons/fa';
import ImageLinkButton from './ImageLinkButton';
import IconLinkButton from './IconLinkButton';
import ExpansionButton from './ExpansionButton';

const navList = [
  {
    icon: <FaUserFriends className='w-9 h-9' />,
    name: 'Bạn bè',
    path: '/fiends',
  },
  { icon: <MdGroups className='w-9 h-9' />, name: 'Nhóm', path: '/groups' },
  {
    icon: <RxCounterClockwiseClock className='w-9 h-9' />,
    name: 'Kỷ niệm',
    path: '/memory',
  },
  {
    icon: <FaBookmark className='w-9 h-9' />,
    name: 'Đã lưu',
    path: '/bookmarks',
  },
  {
    icon: <MdOutlineOndemandVideo className='w-9 h-9' />,
    name: 'Video',
    path: '/videos',
  },
];

const SidebarNavList = ({
  containerStyles,
  buttonStyles,
  avatarStyles,
  avatarImage,
  imgLink,
  nameUser,
}) => {
  return (
    <div className={containerStyles}>
      <ImageLinkButton
        buttonStyles={buttonStyles}
        imgStyles={avatarStyles}
        photo={avatarImage}
        nameBtn={nameUser}
        imgLink={imgLink}
      />
      {navList.map((navItem, index) => {
        return (
          <IconLinkButton
            key={index}
            buttonAvatarStyles={buttonStyles}
            iconImage={navItem.icon}
            iconName={navItem.name}
            iconPath={navItem.path}
            iconStyle={avatarStyles}
          />
        );
      })}
      <ExpansionButton buttonStyles={buttonStyles} />
    </div>
  );
};

export default SidebarNavList;
