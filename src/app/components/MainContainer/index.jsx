'use client';

import Greeting from '@/app/components/Greeting';
import MainContainerStyled from '@/app/components/MainContainer/styles';

const MainContainer = () => (
  <MainContainerStyled>
    <Greeting />
  </MainContainerStyled>
);

export default MainContainer;
