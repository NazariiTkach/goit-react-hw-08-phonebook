import styled from '@emotion/styled';

export const PhonebookSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 50px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
 border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  &:hover,
  &:focus {
    box-shadow: 1px 1px 10px 10px #696969;
  }
  flex-direction: column;
  align-items: center;
  width: 450px;
`;
