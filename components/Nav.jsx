'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MdHome,
  MdOutlineOndemandVideo,
  MdGroups,
  MdOutlineVideogameAsset,
} from 'react-icons/md';
import { Button } from './ui/button';

const links = [
  { path: '/', icon: <MdHome className='w-7 h-7' /> },
  {
    path: '/videos',
    icon: <MdOutlineOndemandVideo className='w-7 h-7' />,
  },
  { path: '/groups', icon: <MdGroups className='w-7 h-7' /> },
  {
    path: '/games',
    icon: <MdOutlineVideogameAsset className='w-7 h-7' />,
  },
];

const Nav = ({
  containerStyles,
  linkStyles,
  buttonStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={linkStyles}>
            {link.path === path && (
              <motion.span
                initial={{ y: '-200%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            <Button
              className={`${buttonStyles} ${
                link.path === path ? 'text-[#0866FF] hover:bg-transparent' : ''
              }`}
            >
              {link.icon}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
