import Link from 'next/link';
import Image from 'next/image';

const Logo = ({logoSize}) => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={40} height={40} priority alt='' />
    </Link>
  );
};

export default Logo;
