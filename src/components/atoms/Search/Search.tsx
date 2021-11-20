import styled from 'styled-components';
import { SearchIcon } from '../../../icons/Icons';

const StyledInput = styled.input`
    width: 80%;
    margin-left: 10px;
    border: none;
    background: transparent;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    &::placeholder {
        color: ${({theme}) => theme.colors.lightGray};
    }
`;

const InputWrapper = styled.div<{active: boolean}>`
    align-items: center;
    height: 52px;
    width: 326px;
    border-radius: 26px;
    padding: 14px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0 24px 24px rgba(0, 0, 0, 0.02);
    display: ${({active}) => active ? "flex" : "none"};
    @media ${({theme}) => theme.breakPoints.tablet} {
      display: flex;
    }
`;

interface Props {
  active: boolean;
}

const Search: React.FC<Props> = ({ active }) => (
    <InputWrapper active={active}>
        <SearchIcon />
        <StyledInput placeholder="Search" />
    </InputWrapper>
);

export default Search;
