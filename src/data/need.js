
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiStudentLight } from 'react-icons/pi';
import { LiaBookSolid } from 'react-icons/lia';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';


import { MdOutlineMessage} from 'react-icons/md';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'dashbord',
          icon: <LuLayoutDashboard />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'livraisons',
          icon: <AiOutlineDeliveredProcedure  />,
        },
        {
          name: 'messagerie',
          icon: <MdOutlineMessage />,
        },
        {
          name: 'cours',
          icon: <LiaBookSolid />,
        },
        {
          name: 'eleves',
          icon: <PiStudentLight />,
        },
        // {
        //   name: 'page5',
        //   icon: <RiContactsLine />,
        // },
      ],
    },

  
  ];
  export const chatData = [
    {
      image:
        avatar2,
      message: 'Roman Joined the Team!',
      desc: 'Congratulate him',
      time: '9:08 AM',
    },
    {
      image:
        avatar3,
      message: 'New message received',
      desc: 'Salma sent you new message',
      time: '11:56 AM',
    },
    {
      image:
        avatar4,
      message: 'New Payment received',
      desc: 'Check your earnings',
      time: '4:39 AM',
    },
    {
      image:
        avatar,
      message: 'Jolly completed tasks',
      desc: 'Assign her new tasks',
      time: '1:12 AM',
    },
  ];
  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];
  // MAMA
  export const cardData = [
    {
      title: "Titre Cours 1",
      descrip:
        "Lorem ipsum1 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 2",
      descrip:
        "Lorem ipsum2 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 3",
      descrip:
        "Lorem ipsum3 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 4",
      descrip:
        "Lorem ipsum4 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 5",
      descrip:
        "Lorem ipsum5 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },
    {
      title: "Titre Cours 6",
      descrip:
        "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    },

  ];
   // MAMA