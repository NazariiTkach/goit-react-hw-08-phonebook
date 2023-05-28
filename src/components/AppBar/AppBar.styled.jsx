import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const Link = styled(NavLink)`
  border-radius: 4px;

  color: #FFF8DC;
  font-weight: 900;
  text-decoration: none;
  text-align: center;

  &.active {
    color: #FFF8DC;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
  }
`;
