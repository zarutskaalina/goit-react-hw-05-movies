import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Header } from './SharedLayout.styled';
import { CustomLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <CustomLink to="/">Home</CustomLink>
        </nav>
        <nav>
          <CustomLink to="/movies">Movies</CustomLink>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
