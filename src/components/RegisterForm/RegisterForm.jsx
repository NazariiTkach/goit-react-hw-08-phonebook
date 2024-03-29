import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormRegist, BtnHide } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegist onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <Input
          type={show ? 'text' : 'password'}
          name="password"
          placeholder="Password"
        />
        <BtnHide type="button" h="1.75rem" size="sm" onClick={handleClick}>
          {/* {show ? <OpenIcon width="18px" /> : <CloseIcon width="18px" />} */}
        </BtnHide>
      </label>
      <button type="submit">Register</button>
    </FormRegist>
  );
};
