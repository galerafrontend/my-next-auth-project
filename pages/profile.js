import UserProfile from "../components/profile/UserProfile";
import { getSession } from "next-auth/client";

const ProfilePage = () => {
  return <UserProfile />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        pernament: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default ProfilePage;
