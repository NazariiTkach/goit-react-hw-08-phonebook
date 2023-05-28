import styled from '@emotion/styled';

export const Userbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > p {
    color: #FFF8DC;
  }
`;

export const ButtonIcon = styled.button`
  padding: 5px 15px;
  border-radius: 40px;
  border: none;
  cursor: pointer;

  color: #2F4F4F;
  background-color: #FFF8DC;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    color: #FFF8DC;
    background-color: #2F4F4F;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
