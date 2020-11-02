interface IPersonalInfoViewerProps {
    toggleEditMode(): void
}

export default function PersonalInfoViewer(props: IPersonalInfoViewerProps) {
  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-2xl dark:text-white">Personal Info</h1>
        <p className="text-base dark:text-white">
          Basic info, name, photo, bio
        </p>
      </div>
      {/** CONTAINER */}
      <div className="w-full md:w-3/5 lg:w-3/4 border-solid border rounded-md border-gray-300 mt-6 mx-auto p-6">
        {/** PROFILE EDIT */}
        <div className="p-2 flex justify-between items-center">
          <div>
            <h1 className="dark:text-white text-xl">Profile</h1>
            <p className="dark:text-white text-sm">
              Some info may be visible to other people
            </p>
          </div>
          <button className="dark:text-white border rounded-md border-black dark:border-gray-300 px-8 py-2 focus:outline-none" onClick={() => props.toggleEditMode()}>
            Edit
          </button>
        </div>
        {/** PHOTO */}
        <div className="flex justify-between items-center mt-8">
          <p className="uppercase dark:text-gray-300">Photo:</p>
          <img
            src="/assets/images/portrait_placeholder.png"
            className="rounded-md"
            alt="portrait profile"
            width="40"
            height="35"
          />
        </div>
        {/** NAME */}
        <div className="flex justify-between items-center mt-6">
          <p className="uppercase dark:text-gray-300">Name:</p>
          <p className="dark:text-white truncate p-2" title="Xanthe Neal">Xanthe Neal</p>
        </div>
         {/** BIO */}
         <div className="flex justify-between items-center mt-6">
          <p className="uppercase dark:text-gray-300">Bio:</p>
          <p className="dark:text-white truncate p-2" title="I am a software developer">I am a software developer</p>
        </div>
         {/** PHONE */}
         <div className="flex justify-between items-center mt-6">
          <p className="uppercase dark:text-gray-300">Phone:</p>
          <p className="dark:text-white truncate p-2" title="0612345678">0612345678</p>
        </div>
         {/** EMAIL */}
         <div className="flex justify-between items-center mt-6">
          <p className="uppercase dark:text-gray-300">Email:</p>
          <p className="dark:text-white truncate p-2" title="xanthe.neal@gmail.com">xanthe.neal@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
