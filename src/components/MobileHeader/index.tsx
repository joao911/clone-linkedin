import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://avatars2.githubusercontent.com/u/49724031?s=460&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4"/>
          <SearchInput placeholder="Pesquisar"/>
          <MessageIcon/>
      </Container>
  );
}

export default MobileHeader;
