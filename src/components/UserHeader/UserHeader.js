import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink, HeadLine } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>From {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of computer science experience</p>
          <p>Email: riya_dulepet@brown.edu</p>
          <p>Cell: 818-585-1657</p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://drive.google.com/file/d/1Nqr-DTKMrCFVE4rvDqRZY-zuTw1QSAcY/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
