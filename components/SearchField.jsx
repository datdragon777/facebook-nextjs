'use client';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { IoIosSearch } from 'react-icons/io';
import { Button } from './ui/button';

const SearchField = ({ containerStyles, inputStyles, inputPlaceholder, searchIconStyles }) => {
  const [isShowSearchField, setIsShowSearchField] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsShowSearchField(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {isShowSearchField ? (
        <div className={containerStyles}>
          <div className='pl-2'>
            <IoIosSearch size={16} />
          </div>
          <Input className={inputStyles} placeholder={inputPlaceholder} />
        </div>
      ) : (
        <Button className={searchIconStyles}>
          <IoIosSearch className='w-4 h-4' />
        </Button>
      )}
    </>
  );
};

export default SearchField;
