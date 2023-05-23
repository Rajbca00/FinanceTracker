import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom';

const LoginButton = () => {
    const { logout } = useAuth0(); 

    return (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      );
};

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) {
        return (<div>Loading ...</div>);
    }

    if(!isAuthenticated){
      navigate("/");
      return <div>Loading ...</div>;
    }
    else {
      return (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <LoginButton/>
        </div>
      )
    }

}

export default Home;