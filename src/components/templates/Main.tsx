import { useState } from "react";
import styled from 'styled-components';
import { Header } from "../molecules/Header/Header"
import { Menu } from "../organisms/Menu/Menu";

const ChildrenContainer = styled.div`
    @media ${({theme}) => theme.breakPoints.tablet} {
        padding-left: 15vw;
    }
`;

interface Props {
    children: React.ReactNode;
}

export const Main: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
    return(
        <>
            <Header menuOpen={setOpen}/>
            <Menu isOpen={open} closeMenu={setOpen}/>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </>
    )
};