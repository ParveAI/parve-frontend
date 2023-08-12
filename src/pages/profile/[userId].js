import { useRouter } from "next/router";
import ProfileView from "@/views/ProfileView";
import { useEffect, useState } from "react";
import { AuthServices } from "@/services";
import { toast } from "react-hot-toast";

export default function Profile() {
  const [profileUser, setProfileUser] = useState(null);
  const router = useRouter();
  const { userId } = router.query;
  useEffect(() => {
    if (!userId) return;
    AuthServices.getProfileById(userId)
      .then((result) => {
        setProfileUser({
          id: userId,
          username: result?.user?.user?.user_metadata?.username,
          email: result?.user?.user?.email,
          avatar: result?.user?.user?.user_metadata?.avatar,
        });
      })
      .catch(() => {
        router.replace("/");
        toast.error("User not found!");
      });
  }, [userId]);

  return (
    <>
      <ProfileView user={profileUser} />
    </>
  );
}
