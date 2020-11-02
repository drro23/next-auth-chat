import { useState } from "react";
import EditInfoView from "../components/EditInfoView";
import DrroLogo from "../components/icons/DrroLogo";
import PersonalInfoViewer from "../components/PersonalInfoViewer";
import SwitchTheme from "../components/SwitchTheme";
import UserNavMenu from "../components/UserNavMenu";

export default function Profile() {
  let [isEditing, setEditMode] = useState<boolean>(false);

  function handleEditMode() {
      setEditMode(!isEditing);
  }

  return (
    <>
      {/** TOPBAR */}
      <div className="flex flex-row justify-between items-center p-3">
        <DrroLogo className="inline fill-current text-black dark:text-white" />
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <SwitchTheme />
          </div>
          <UserNavMenu />
        </div>
      </div>
      {/** PERSONAL VIEW / EDIT VIEW */}
      { !isEditing ? <PersonalInfoViewer toggleEditMode={handleEditMode} /> : <EditInfoView toggleEditMode={handleEditMode} />}
    </>
  );
}
