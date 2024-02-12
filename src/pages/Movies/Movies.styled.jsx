import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 12px;
`;

export const InputFile = styled.input`
  height: 25px;
  width: 300px;
  border-radius: 3px;
  border-color: gray;
`;

export const Button = styled.button`
  border-radius: 3px;
  background: cornflowerblue;
  color: white;
  border-color: transparent;
  width: 100px;

  &:hover,
  &:focus {
    background: blue;
  }
`;
