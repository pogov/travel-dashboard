import Search from '../../atoms/Search/Search';
import { FilterIcon } from '../../../icons/Icons';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #f86549;
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
    background-color: #f86549;
    filter: blur(28px);
    z-index: -1;
  }
`;

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBar: React.FC = () => (
  <SearchBarWrapper>
    <Search />
    <IconWrapper>
      <FilterIcon />
    </IconWrapper>
  </SearchBarWrapper>
);

export default SearchBar;
