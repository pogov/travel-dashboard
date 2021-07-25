import { CalendarIcon, CompasIcon, HomeIcon, PersonIcon, PowerIcon, SettingsIcon } from '../../../icons/Icons';
import { Button } from './StyledComponents';

type IconType = 'calendar' | 'compas' | 'person' | 'settings' | 'power' | 'home';

interface Props {
  icon: IconType;
  active?: boolean;
}

const renderIcon = (icon: IconType) => {
  switch (icon) {
    case 'calendar':
      return <CalendarIcon />;
    case 'compas':
      return <CompasIcon />;
    case 'person':
      return <PersonIcon />;
    case 'settings':
      return <SettingsIcon />;
    case 'power':
      return <PowerIcon />;
    case 'home':
      return <HomeIcon />;
  }
};

const IconButton: React.FC<Props> = ({ icon, active }) => <Button active={active}>{renderIcon(icon)}</Button>;

export default IconButton;
