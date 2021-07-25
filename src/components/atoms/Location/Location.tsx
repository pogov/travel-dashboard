import styled from 'styled-components';
import { LocationIcon } from '../../../icons/Icons';

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LocationLabel = styled.p`
  color: #353646;
  opacity: 0.4;
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
