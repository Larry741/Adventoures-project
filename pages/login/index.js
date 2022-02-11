import AuthForm from "../../components/Auth/AuthForm";

const AuthPage = () => {

  return (
    <>
      <AuthForm />
    </>
  );
};

AuthPage.requireAuth = true;

export default AuthPage;
