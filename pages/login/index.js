import { useSession } from "next-auth/react";
import AuthForm from "../../components/Auth/AuthForm";

const AuthPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <AuthForm />
    </>
  );
};

export default AuthPage;
