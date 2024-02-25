import Link from 'next/link';
import { Button } from './ui/button';

const IconLinkButton = ({
  buttonAvatarStyles,
  iconImage,
  iconName,
  iconPath,
  iconStyles,
}) => {
  return (
    <Button className={buttonAvatarStyles}>
      <Link className='flex w-full items-center' href={iconPath}>
        <div className={`${iconStyles} mr-3`}>{iconImage}</div>
        {iconName}
      </Link>
    </Button>
  );
};

export default IconLinkButton;
