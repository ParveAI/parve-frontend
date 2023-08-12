import { useRouter } from "next/router";
import ProfileView from "@/views/ProfileView";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profileUser, setProfileUser] = useState(null);
  const user = useAuth((state) => state.user);
  const router = useRouter();
  // const { username } = router.query;
  useEffect(() => {
    if (user?.length === 0) {
      // router.replace("/login");
    }
    setProfileUser(user);
  }, [user]);

  return (
    <>
      <ProfileView user={profileUser} />
    </>
  );
}
