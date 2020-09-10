import React from 'react';
import FeedPost from './FeedPost';
import FeedShare from './FeedShare';
import { Container } from './styles';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import LoadingFeedShare from '../Shimmer/LoadingFeedShare';

const MiddleColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
   <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
   </Container>
  );
}

export default MiddleColumn;