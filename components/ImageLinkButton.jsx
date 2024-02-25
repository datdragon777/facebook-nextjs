import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const ImageLinkButton = ({
  buttonStyles,
  imgStyles,
  photo,
  nameBtn,
  imgLink,
}) => {
  return (
    <Link className='flex items-center w-full' href={imgLink}>
      <Button className={buttonStyles}>
        <Image
          src={photo}
          width={36}
          height={36}
          className={`${imgStyles} object-cover`}
          alt='Picture of the author'
        />
        <span className='truncate'>{nameBtn}</span>
      </Button>
    </Link>
  );
};

export default ImageLinkButton;
