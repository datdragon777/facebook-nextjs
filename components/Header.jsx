import Logo from './Logo';
import Nav from './Nav';
import MenuButton from './MenuButton';
import SearchField from './SearchField';

const Header = () => {
  return (
    <header className='bg-white h-16 flex justify-between items-center px-4 shadow-lg sticky top-0'>
      <div className='flex'>
        <Logo />
        <div className='pl-3'>
          <SearchField
            containerStyles='flex items-center bg-[#F0F2F5] rounded-full'
            inputStyles='w-[212px] border-none outline-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0'
            inputPlaceholder='Tìm kiếm trên facebook'
            searchIconStyles='rounded-full p-0 w-10 h-10 text-black bg-gray-200 hover:bg-gray-300'
          />
        </div>
      </div>
      <Nav
        containerStyles='hidden md:w-2/4 md:flex justify-center gap-x-1.5'
        linkStyles='max-w-32 grow border-y-4 border-transparent border-solid relative'
        buttonStyles={`w-full h-14 py-0.5 bg-transparent text-gray-500 hover:bg-gray-200`}
        underlineStyles='absolute left-0 top-full h-[4px] bg-[#0866FF] w-full'
      />
      <MenuButton
        buttonIconStyles='rounded-full p-0 w-10 h-10 text-black bg-gray-200 hover:bg-gray-300'
        buttonAvatarStyles='rounded-full p-0 ml-2'
        avatarImage='/avatar.jpg'
        avatarFallback='DA'
      />
    </header>
  );
};

export default Header;
