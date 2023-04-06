import {  Layout } from '@/styled-components'
import { CreateUserBtn, ModifyUserBtn, ResetUserBtn } from './components';
import { HomeTitle } from './styled';

export const Home = () => {
  return (
    <>
      <Layout>
        <HomeTitle>Home Page</HomeTitle>
        <CreateUserBtn />
        <ModifyUserBtn />
        <ResetUserBtn />
      </Layout>
    </>
  );
}
