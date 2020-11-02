import Link from "next/link";
import { GitHub, Facebook, Twitter } from "@material-ui/icons";
import { Icon } from "@material-ui/core";
import SignUpForm from "../components/SignUpForm";
import DrroLogo from "../components/icons/DrroLogo";
import SwitchTheme from "../components/SwitchTheme";

function SignUp() {
  return (
    <div className="bg-white dark:bg-darkBlack w-5/6 md:w-2/5 lg:w-1/3 border-solid border border-gray-300 mx-auto mt-6 rounded-xl p-8">
      <div className="flex justify-end mb-2">
        <SwitchTheme />
      </div>
      <p className="text-xl mb-4 text-center">
        <DrroLogo className="inline fill-current text-black dark:text-white" />
      </p>
      <h1 className="mb-6 text-center text-lg font-bold text-black dark:text-gray-100">
        Sign Up and chat with your friends all around the world
      </h1>
      <SignUpForm />
      <div className="mt-8">
        <p className="text-center text-gray-500 dark:text-gray-300">
          or continue with these social profile
        </p>
        <div className="flex justify-center mt-4">
          <div className="group rounded-border cursor-pointer hover:border-black dark-hover:border-white">
            <Icon className="text-gray-500 dark:text-gray-400 group-hover:text-black dark-group-hover:text-gray-100 fab fa-google" />
          </div>
          <div className="group rounded-border cursor-pointer hover:border-black dark-hover:border-white">
            <GitHub className="text-gray-500 dark:text-gray-400 group-hover:text-black dark-group-hover:text-gray-100" />
          </div>
          <div className="group rounded-border cursor-pointer  hover:border-black dark-hover:border-white">
            <Facebook className="text-gray-500 dark:text-gray-400 group-hover:text-black dark-group-hover:text-gray-100" />
          </div>
          <div className="group rounded-border cursor-pointer  hover:border-black dark-hover:border-white">
            <Twitter className="text-gray-500 dark:text-gray-400 group-hover:text-black dark-group-hover:text-gray-100" />
          </div>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-300 mt-8">
          Already a member?
          <Link href="/">
            <a className="text-blue-400 hover:text-blue-600 ml-2">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
