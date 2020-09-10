import React from 'react';
import LoadingProfilePanel from '../Shimmer/LoadinProfilePanel'
import HashTagPanel from './HashtagPanel';
import ProfilePenel from './ProfilePenel'
import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
      <Container className="left-column">
       {isLoading? (
         <LoadingProfilePanel/>
       ):(
        <>
          <HashTagPanel/>
          <ProfilePenel/>
        </>
       )}
      </Container>
  );
}

export default LeftColumn;