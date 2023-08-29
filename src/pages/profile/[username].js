import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-hot-toast";

import { AuthServices } from "@/services";

import ProfileView from "@/views/ProfileView";

export default function Profile() {
  const [profileUser, setProfileUser] = useState(null);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    if (!username) return;
    AuthServices.getProfileByUsername(username)
      .then((result) => {
        setProfileUser({
          id: result?.user?.id,
          username: result?.user?.user_name,
          email: result?.user?.email,
          avatar: result?.user?.avatar,
          fullname: result?.user?.display_name,
          isMyProfile: result?.user?.myProfile,
        });
      })
      .catch(() => {
        router.replace("/");
        toast.error("User not found!");
      });
  }, [username]);

  return (
    <>
      <Head>
        <title>
          {profileUser?.fullname && (profileUser?.fullname + " |")} Profile
        </title>
      </Head>
      <ProfileView user={profileUser} />
    </>
  );
}
