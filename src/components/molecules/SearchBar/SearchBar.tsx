import { useState } from 'react';
import Search from '../../atoms/Search/Search';
import { FilterIcon } from '../../../icons/Icons';
import styled from 'styled-components';

const IconWrapper = styled.div`
  min-width: 52px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-left: 9px;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.orange};
    filter: blur(28px);
    z-index: -1;
  }
`;

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBar: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <SearchBarWrapper>
      <Search active={active} />
      <IconWrapper onClick={() => setActive(prev => !prev)}>
        <FilterIcon />
      </IconWrapper>
    </SearchBarWrapper>
  );
}

export default SearchBar;
