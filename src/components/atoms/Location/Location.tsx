import styled from 'styled-components';
import { LocationIcon } from '../../../icons/Icons';

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LocationLabel = styled.p`
  color: ${({theme}) => theme.colors.lightGray};
  opacity: 0.5;
  padding-left: 8px;
  margin: 0px;
`;



const Location: React.FC = ({ children }) => {
  return (
    <LocationWrapper>
      <LocationIcon />
      <LocationLabel>{children}</LocationLabel>
    </LocationWrapper>
  );
};

export default Location;
