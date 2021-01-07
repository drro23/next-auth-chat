import { AccountCircle, Group, ExitToApp } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import AuthService from '../../services/userAuth';
interface IDropDownProfileProps {
  isOpen: boolean;
}

export default function DropDownProfile(props: IDropDownProfileProps) {
  const authService = new AuthService();
  const router = useRouter();
  const controls = useAnimation();

  const variants = {
    visible: { opacity: 1, y: 0, x: 0},
    hidden: { opacity: 0, y: 50}
  }

  useEffect(() => {
    if (props.isOpen)
      controls.start("visible");
    else
      controls.start("hidden");

  }, [props.isOpen])

  const handleLogout = () => {
    console.log("logout");
    authService.logout();
    router.push('/');
  }

  return (
    <motion.div
      initial={false}
      animate={controls}
      variants={variants}
      className={`absolute ${
        props.isOpen ? "block" : "hidden"
      } p-2 right-0 mt-2 w-auto top-auto border border-gray-300 rounded-lg bg-white dark:bg-darkBlack`}
    >
      <div className="hover:bg-gray-300 dark-hover:bg-gray-900 p-2 rounded">
        <button className="focus:outline-none">
          <AccountCircle className="dark:text-white mr-2" />
          <span className="text-black dark:text-white">My Profile</span>
        </button>
      </div>
      <div className="hover:bg-gray-300 dark-hover:bg-gray-900 p-2 rounded divide-y">
        <button className="focus:outline-none">
          <Group className="dark:text-white mr-2" />
          <span className="text-black dark:text-white">Group Chat</span>
        </button>
      </div>
      <div className="divide-y"></div>
      <div className="hover:bg-gray-300 dark-hover:bg-gray-900 p-2 rounded divide-y">
        <button className="focus:outline-none" onClick={() => handleLogout()}>
          <ExitToApp className="text-red-500 dark:text-red-500 mr-2" />
          <span className="text-black dark:text-white"> <span className="text-red-500 font-bold">Logout</span></span>
        </button>
      </div>
    </motion.div>
  );
}
