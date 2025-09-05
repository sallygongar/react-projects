import user from "../assets/usuario.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <img alt="user" src={user} className="login-icon__user" />
      <p className="login-name">Hola,Sally</p>
    </div>
  );
};

export default Login;
