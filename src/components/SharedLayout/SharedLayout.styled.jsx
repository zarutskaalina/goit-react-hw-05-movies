import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: blue;
  }
`;
