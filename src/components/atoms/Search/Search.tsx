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
        color: #AFAFAF;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 52px;
    width: 326px;
    border-radius: 26px;
    padding: 14px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.02);
`;

const Search: React.FC = () => (
    <InputWrapper>
        <SearchIcon />
        <StyledInput placeholder="Search" />
    </InputWrapper>
);

export default Search;