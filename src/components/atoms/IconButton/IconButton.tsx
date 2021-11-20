import Icon, { IconType } from '../Icon/Icon';
import { Button } from './StyledComponents';

interface Props {
  icon: IconType;
  active?: boolean;
}

const IconButton: React.FC<Props> = ({ icon, active }) => (
  <Button active={active}>
    <Icon icon={icon} />
  </Button>
);

export default IconButton;
