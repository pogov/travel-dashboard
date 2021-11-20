import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import { IconType } from '../../atoms/Icon/Icon';
import IconButton from '../../atoms/IconButton/IconButton';

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
  justify-content: space-between;
  margin: 10px auto;

  @media ${({theme}) => theme.breakPoints.tablet} {
    margin: 20px auto;
  }

  @media ${({theme}) => theme.breakPoints.laptop} {
    margin: 30px auto;
  }
`;

interface Props {
  icon: IconType;
  text: string;
  color?: string;
  tagName: any;
  active?: boolean;
}

const MenuItem: React.FC<Props> = ({ icon, text, color, tagName, active }) => (
  <MenuItemWrapper>
    <IconButton icon={icon} active={active} />
    <Heading as={tagName} color={color}>
      {text}
    </Heading>
  </MenuItemWrapper>
);

export default MenuItem;
