import {  Layout } from '@/styled-components'
import { CreateUserBtn, ModifyUserBtn, ResetUserBtn } from './components';
import { HomeTitle } from './styled';

export default function Home() {
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
