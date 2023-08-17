import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudentLight } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashbord",
        icon: <LuLayoutDashboard />,
        link: "l/dashboard",
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "livraisons",
        icon: <AiOutlineDeliveredProcedure />,
        link: "l/livraisons",
      },
      {
        name: "messagerie",
        icon: <MdOutlineMessage />,
        link: "l/messagerie",
      },
      {
        name: "cours",
        icon: <LiaBookSolid />,
        link: "l/cours",
      },
      {
        name: "eleves",
        icon: <PiStudentLight />,
        link: "l/eleves",
      },
      // {
      //   name: 'page5',
      //   icon: <RiContactsLine />,
      // },
    ],
  },
  ,
  {
    title: "Certification",
    links: [
      {
        name: "Certification",
        icon: <TbCertificate />,
        link:"l/certification"
      },
    ],
  },
];
export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];
export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
export const dashData = [
  {
    icon: <GiTeacher />,
    amount: "50",
    title: "Coach",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <PiStudentLight />,
    amount: "4000",
    title: "eleves",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <LiaBookSolid />,
    amount: "300",
    title: "Cours",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
  },
  {
    icon: <AiOutlineDeliveredProcedure />,
    amount: "300",
    title: "livraisons",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
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
// MAMA
export const cardDataPro = [
  {
    title: "Cours 1",
    descrip:
      "Lorem ipsum1 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/u5W2NWItytc?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 2",
    descrip:
      "Lorem ipsum2 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/Fi8fj_JY91o?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 3",
    descrip:
      "Lorem ipsum3 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/1sPjNkKGMsY?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 4",
    descrip:
      "Lorem ipsum4 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/w2knKi0ZQps?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 5",
    descrip:
      "Lorem ipsum5 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/HSWzav5yc6Y?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 6",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/ce2mpuSTz0E?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 7",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/zKgNS-m572U?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
  {
    title: "Cours 8",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/yTp_qgvM1LU?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO",
  },
];
export const cardDataMarketing = [
  {
    title: "Cours 1",
    descrip:
      "Lorem ipsum1 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/XGUs6xS1AGk?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
  {
    title: "Cours 2",
    descrip:
      "Lorem ipsum2 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/I2413qRVzPI?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
  {
    title: "Cours 3",
    descrip:
      "Lorem ipsum3 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/92da-Hhghug?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
  {
    title: "Cours 4",
    descrip:
      "Lorem ipsum4 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/8xKMwcC8dJc?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
  {
    title: "Cours 5",
    descrip:
      "Lorem ipsum5 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/IqIGJ4UR5Cs?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
  {
    title: "Cours 6",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/iERXjLLLgYI?list=PLr02B9CpDYZQFmJK_xKFzTRkVfiv0XbIg",
  },
];
export const cardDataDesign = [
  {
    title: "Cours 1",
    descrip:
      "Lorem ipsum1 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/1fb-tGQPF2E?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 2",
    descrip:
      "Lorem ipsum2 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/1fb-tGQPF2E?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 3",
    descrip:
      "Lorem ipsum3 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/Gm33vP_rWi4?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 4",
    descrip:
      "Lorem ipsum4 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/cHJXqya9rf0?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 5",
    descrip:
      "Lorem ipsum5 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/Te9950mSJ38?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 6",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/r15IKIhS6G8?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 7",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/daSTJL0_rs0?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
  {
    title: "Cours 8",
    descrip:
      "Lorem ipsum6 at FlowParserMixin.parseBlockOrModuleBlockBody at FlowParserMixin.parseBlockOrModuleBlockBody ",
    videoUrl:
      "https://www.youtube.com/embed/c604zpsyiGU?list=PLGRktKi2ZzndTAMArIm2WN-buYbumO1i-",
  },
];
// MAMA
