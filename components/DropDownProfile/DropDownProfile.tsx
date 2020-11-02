import { AccountCircle, Group, ExitToApp } from "@material-ui/icons";

interface IDropDownProfileProps {
  isOpen: boolean;
}

export default function DropDownProfile(props: IDropDownProfileProps) {
  return (
    <div
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
        <button className="focus:outline-none">
          <ExitToApp className="text-red-500 dark:text-red-500 mr-2" />
          <span className="text-black dark:text-white"> <span className="text-red-500 font-bold">Logout</span></span>
        </button>
      </div>
    </div>
  );
}
