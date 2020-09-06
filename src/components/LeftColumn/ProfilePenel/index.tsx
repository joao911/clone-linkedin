import React from 'react';
import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePenel: React.FC = () => {
  return (
    <Panel>
    <Container>
      <div className="profile-cover"></div>
      <img
        src="https://avatars2.githubusercontent.com/u/49724031?s=460&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4"
        alt="Avatar"
        className="profile-picture"
      />
      <h1>João Paulo Duarte</h1>
      <h2>Desenvolvedor Web Front-End</h2>

      <div className="separator"></div>

      <div className="key-value">
        <span className="key">Quem viu seu perfil</span>
        <span className="value">1.558</span>
      </div>
      <div className="key-value">
        <span className="key">Viram sua publicação</span>
        <span className="value">388</span>
      </div>
    </Container>
  </Panel>
      
  );
}

export default ProfilePenel;