import { LuLayoutDashboard } from 'react-icons/lu';
import { PiStudentLight } from 'react-icons/pi';
import { LiaBookSolid } from 'react-icons/lia';
import { GiTeacher } from 'react-icons/gi';

import { AiOutlineDeliveredProcedure } from 'react-icons/ai';

import { MdOutlineMessage } from 'react-icons/md';
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
    title: 'Dashboard Elève',
    links: [
      {
        name: 'DashboardEleve',
        icon: <LuLayoutDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'livraisons',
        icon: <AiOutlineDeliveredProcedure />,
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
export const dashData = [
  {
    icon: <GiTeacher />,
    amount: '50',
    title: 'Coach',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <PiStudentLight />,
    amount: '4000',
    title: 'eleves',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

  },
  {
    icon: <LiaBookSolid />,
    amount: '300',
    title: 'Cours',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

  },
  {
    icon: <AiOutlineDeliveredProcedure />,
    amount: '300',
    title: 'livraisons',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
];
export const UserData = [
  {
    id: 1,
    year: 2016,
    userBoy: 50,
    userGirl: 20,
  },
  {
    id: 2,
    year: 2017,
    userBoy: 75,
    userGirl: 40,
  },
  {
    id: 3,
    year: 2018,
    userBoy: 65,
    userGirl: 88,
  },
  {
    id: 4,
    year: 2019,
    userBoy: 80,
    userGirl: 100,
  },
  {
    id: 5,
    year: 2020,
    userBoy: 100,
    userGirl: 200,
  },
];