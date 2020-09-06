import React from 'react';
import MobileHeader from '../MobileHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import DesckTopHeader from '../DesckTopHeader';
import AddBanner from '../AddBanner'

import { Container } from './styles';

const layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader/>
      <DesckTopHeader/>
      <span>
        <AddBanner/>
      </span>
      
      <main>
       <LeftColumn/>
       <MiddleColumn/>
       <RightColumn/>
      </main>
    </Container>
  );
}

export default layout;