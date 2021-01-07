import { useState } from "react";
import EditInfoView from "../components/EditInfoView";
import DrroLogo from "../components/icons/DrroLogo";
import PersonalInfoViewer from "../components/PersonalInfoViewer";
import SwitchTheme from "../components/SwitchTheme";
import UserNavMenu from "../components/UserNavMenu";
import nookies from "nookies";
import { firebaseAdmin } from "../config/firebaseAdmin";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid } = token;

    let dataSnapshot = await firebaseAdmin.database().ref('users/' + uid).once('value');
    console.log('snapshot: ', dataSnapshot);
    // let data = {
    //   userName: (dataSnapshot.val() && dataSnapshot.val().username) || 'Anonymous',
    //   email: (dataSnapshot.val() && dataSnapshot.val().email) || 'email@test.com',
    //   bio: (dataSnapshot.val() && dataSnapshot.val().bio) || 'Test bio',
    //   phone: (dataSnapshot.val() && dataSnapshot.val().phone) || '0612345678',
    // }

    // console.log('data: ', data);

    // return {
    //   props: {
    //     userInfo: data,
    //   }
    // }

    return {
      props: {
        userInfo: {
          userName: "Anonymous",
          email: "email@test.com",
          bio: "Test bio",
          phone: "0612345678",
        },
      },
    };
  } catch (err) {
    console.log(err);
    // ctx.res.setHeader("location", "/");
    // ctx.res.statusCode = 302;
    // ctx.res.end();
    return {
      // redirect: {
      //   permanent: false,
      //   destination: "/",
      // },
      props: {},
    };
  }
};

function Profile(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  let [isEditing, setEditMode] = useState<boolean>(false);
  console.log(props.userInfo);
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
          <UserNavMenu userName={props.userInfo.userName} />
        </div>
      </div>
      {/** PERSONAL VIEW / EDIT VIEW */}
      {!isEditing ? (
        <PersonalInfoViewer
          userInfo={props.userInfo}
          toggleEditMode={handleEditMode}
        />
      ) : (
        <EditInfoView toggleEditMode={handleEditMode} />
      )}
    </>
  );
}

export default Profile;
