import { getSession } from "next-auth/client";
import AuthForm from "../components/Auth";

const AuthPage = () => {
  return <AuthForm />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        pernament: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AuthPage;
