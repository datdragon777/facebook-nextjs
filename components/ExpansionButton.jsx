import { Button } from './ui/button';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ExpansionButton = ({ buttonStyles }) => {
  return (
    <Button className={`${buttonStyles} group`}>
      <div className='w-9 h-9 mr-3 flex justify-center items-center bg-gray-200 rounded-full group-hover:bg-gray-100'>
        <MdKeyboardArrowDown size={20} />
      </div>
      Xem thêm
    </Button>
  );
};

export default ExpansionButton;
