import React from 'react';
import TrendingPanel from './TredingPanel';
import LoadingTrendingPanel from '../Shimmer/LoadingTredingPanel';
import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="right-column">
    {isLoading ? (
      <LoadingTrendingPanel />
    ) : (
      <>
        <TrendingPanel />
        <TrendingPanel />
      </>
    )}
  </Container>
  );
}

export default RightColumn;