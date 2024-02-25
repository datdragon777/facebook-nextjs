import ExpansionButton from './ExpansionButton';
import ImageLinkButton from './ImageLinkButton';

const groups = [
  {
    image: '/group_1.jpg',
    name: 'Động Games',
    path: '/',
  },
  { image: '/group_2.jpg', name: 'Solo leveling', path: '/' },
  { image: '/group_3.jpg', name: 'Shadow Garden', path: '/' },
  { image: '/group_4.jpg', name: 'UltramanVN', path: '/' },
];

const GroupList = ({ buttonStyles, imgStyles }) => {
  return (
    <div className='pt-5'>
      <p className='text-[17px] text-[#65676B] font-semibold pb-2'>
        Lối tắt của bạn
      </p>

      {groups.map((group, index) => {
        return (
          <ImageLinkButton
            key={index}
            buttonStyles={buttonStyles}
            imgStyles={imgStyles}
            photo={group.image}
            nameBtn={group.name}
            imgLink={group.path}
          />
        );
      })}

      <ExpansionButton buttonStyles={buttonStyles} />
    </div>
  );
};

export default GroupList;
