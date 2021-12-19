import styled, { useTheme } from 'styled-components';
import MenuItem from '../../molecules/MenuItem/MenuItem';
import { CloseIcon } from '../../../icons/Icons';
import { Dispatch, SetStateAction } from 'react';
import { IconType } from '../../atoms/Icon/Icon';

const menuItemsNames = {
  Dashboard: 'Dashboard',
  Upcoming: 'Upcoming',
  Explore: 'Explore',
  Profile: 'Profile',
  Settings: 'Settings',
  Logout: 'Logout'
};

interface MenuItemType {
  icon: IconType;
  text: string;
}

const menuItems: MenuItemType[] = [
  { icon: 'home', text: menuItemsNames.Dashboard },
  { icon: 'calendar', text: menuItemsNames.Upcoming },
  { icon: 'compas', text: menuItemsNames.Explore },
  { icon: 'person', text: menuItemsNames.Profile },
  { icon: 'settings', text: menuItemsNames.Settings },
  { icon: 'power', text: menuItemsNames.Logout }
];

const MenuWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : '-100%')};
  height: 100vh;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  z-index: 100;
  transition: all 0.3s ease-in;

  & > div:last-child {
    margin-top: auto;
  }

  @media ${({ theme }) => theme.breakPoints.tablet} {
    width: 15vw;
    top: 15vw;
    left: 0;
    height: calc(100vh - 15vw);
    font-size: 14px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 10px 10px 0 0;
  position: absolute;
  top: 0;
  right: 0;

  & svg {
    width: 20px;
    fill: ${({ theme }) => theme.colors.lightGray};
  }

  @media ${({ theme }) => theme.breakPoints.tablet} {
    display: none;
  }
`;

interface Props {
  isOpen: boolean;
  closeMenu: Dispatch<SetStateAction<boolean>>;
}

export const Menu: React.FC<Props> = ({ isOpen, closeMenu }) => {
  const theme = useTheme();
  return (
    <MenuWrapper open={isOpen}>
      <CloseButton onClick={() => closeMenu(false)}>
        <CloseIcon />
      </CloseButton>
      {menuItems.map(({ icon, text }) => (
        <MenuItem
          icon={icon}
          tagName="p"
          text={text}
          key={text}
          color={theme.colors.lightGray}
          active={text === menuItemsNames.Upcoming}
        />
      ))}
    </MenuWrapper>
  );
};
