import { CalendarIcon, CompasIcon, HomeIcon, PersonIcon, PowerIcon, SettingsIcon } from '../../../icons/Icons';

export type IconType = 'calendar' | 'compas' | 'person' | 'settings' | 'power' | 'home';

interface Props {
    icon: IconType;
}

const Icon: React.FC<Props> = ({ icon }) => {
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

  export default Icon;