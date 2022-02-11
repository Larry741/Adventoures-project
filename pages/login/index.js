import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AuthForm from "../../components/Auth/AuthForm";

const AuthPage = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(router.route, isAuthenticated);

  return (
    <>
      <AuthForm />
    </>
  );
};

AuthPage.requireAuth = true;

export default AuthPage;
