import { useAuth } from 'hooks';
import { NavContainer } from './Navigation.styled';
import { Link } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavContainer>
  );
};

export default Navigation;
