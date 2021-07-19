import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
    background-color: #4a4b46;
font-family: 'Merriweather', serif`;

export const Header = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
  background-color: #4a4b46;
  font-family: 'Merriweather', serif;
  color: white;

`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;

`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #FFFFF;
  background-color: #4a4b46;
  transition: background-color 250ms ease;
  font-family: 'Merriweather', serif;
  


  &:hover {
    background-color: #050505;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
  
`;


