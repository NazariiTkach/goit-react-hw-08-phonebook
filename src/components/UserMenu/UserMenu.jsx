import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Userbox, ButtonIcon } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Userbox>
      <p>Welcome, {user.name}</p>
      <ButtonIcon type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </ButtonIcon>
    </Userbox>
  );
};
export default UserMenu;
