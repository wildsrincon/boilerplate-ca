/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Layout } from '../../styled-components/layout.styled';
import { CreateUserBtn, ModifyUserBtn, ResetUserBtn } from './components';
import { HomeTitle } from './styled';

export function Home() {
  return (
    <Layout>
      <HomeTitle>Home Page</HomeTitle>
      <CreateUserBtn />
      <ModifyUserBtn />
      <ResetUserBtn />
    </Layout>
  );
}
