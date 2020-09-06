import React from 'react';


import { Container,
      Wrapper,
      LinkedinIcon,
      SearchInput,
      HomeIcon,
      NotificationIcon,
      ProfileCircle,
      CaretDownIcon  } from './styles';

const DesckTopHeader: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div className="left">
                  <LinkedinIcon/>
                  <SearchInput placeholder="Pesquisar"/>
              </div>
              <div className="right">
                  <nav>
                      <button className="active">
                          <HomeIcon/>
                          <span>Início</span>
                      </button>
                      <button >
                          <NotificationIcon/>
                          <span>Notificações</span>
                      </button>
                      <button >
                          <ProfileCircle src="https://avatars2.githubusercontent.com/u/49724031?s=460&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4"/>
                          <span>Eu <CaretDownIcon/></span>
                      </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  );
}

export default DesckTopHeader;