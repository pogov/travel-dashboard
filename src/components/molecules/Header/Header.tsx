import SearchBar from '../SearchBar/SearchBar';
import styled, { useTheme } from 'styled-components';
import { MenuIcon } from '../../../icons/Icons';
import Heading from '../../atoms/Heading/Heading';
import { Dispatch, SetStateAction } from 'react';


const HeaderWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  display: flex;
`;

const MenuButtonContainer = styled.div`
  background-color: ${({theme}) => theme.colors.veryDarkGray};
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({theme}) => theme.breakPoints.tablet} {
    width: 15vw;
    height: 15vw;
  }
`;

const SearchBarContainer = styled.div`
  padding: 10px;
  max-width: 80vw;
  z-index: 2;
  position: absolute;
  right: 0;
  top: 0;
`;

interface Props {
  menuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ menuOpen }) => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <MenuButtonContainer onClick={() => menuOpen(true)}>
        <MenuIcon />
      </MenuButtonContainer>
        <Heading color={theme.colors.black} margin="medium">
          Shikra.
        </Heading>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
    </HeaderWrapper>
  );
}
