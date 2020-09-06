import React from 'react';
import HashTagPanel from './HashtagPanel';
import ProfilePenel from './ProfilePenel'
import { Container } from './styles';

const LeftColumn: React.FC = () => {
  return (
      <Container>
        <HashTagPanel/>
        <ProfilePenel/>
      </Container>
  );
}

export default LeftColumn;