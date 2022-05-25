import React, {useEffect} from 'react';
import GoogleLoginButton from './../../components/GoogleLoginButton/index';
import { startGoogle } from './../../config/googleConfig';
import logo from '../../assets/DesafioSoftplan-512.png';

function Login() {

  useEffect(() => {
      startGoogle();
  }, []);
  
	return (
		<div className="container-login">
			<div className="box-login">
				<div className="center-horizontal">
          <img src={logo} alt="Logo" className="logo-login" />
					<span className="subtitle mt-20">Para acessar no sistema</span>
					<span className="subtitle mb-20">Entrar com a conta do Google</span>
					<GoogleLoginButton className="mt-20" />
				</div>
			</div>
		</div>
	);
}

export default Login;
