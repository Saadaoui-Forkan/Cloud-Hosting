"use client";
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";

interface EditProfileBtnProps {
  email: string,
  username: string,
  id: number
}

const EditProfileBtn = ({email, username, id}: EditProfileBtnProps) => {
  const [profileModal, setProfileModal] = useState<boolean>(false);

  return (
    <div className="my-4">
      <button
        onClick={()=>setProfileModal(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Edit Profile
      </button>
      {profileModal && <ProfileModal setProfileModal={setProfileModal} email={email} username={username} id={id}/>}
    </div>
  );
};

export default EditProfileBtn;
