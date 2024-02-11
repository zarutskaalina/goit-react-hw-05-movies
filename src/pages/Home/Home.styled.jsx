import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkList = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: blue;
  }
`;

export const TrendingMovie = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 4px;
`;

export const TitleHomePage = styled.h1`
  font-size: 35px;
  font-weight: 500;
`;
