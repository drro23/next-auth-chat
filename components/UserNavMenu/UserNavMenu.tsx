import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import DropDownProfile from "../DropDownProfile";
import { useState } from "react";

export default function UserNavMenu() {
  let [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  let openDropDownMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex flex-row justify-between ml-4 items-center"
        onClick={openDropDownMenu}
      >
        <img
          src="/assets/images/portrait_placeholder.png"
          className="rounded-md"
          alt="portrait profile"
          width="40"
          height="35"
        />
        <p className="text-black dark:text-white ml-4">Xavier Neal</p>
        <ArrowDropDown
          className={`transform ${
            isMenuOpen ? "rotate-180" : "rotate-0"
          } fill-current text-black dark:text-white ml-1`}
        />
      </div>
      <DropDownProfile isOpen={isMenuOpen} />
    </div>
  );
}
