import styled from 'styled-components';
import Heading from "../../atoms/Heading/Heading";
import Icon, { IconType } from "../../atoms/Icon/Icon";

const TitleWrapper = styled.div<{iconColor?:string}>`
    display: flex;
    align-items: center;

    & svg {
        opacity: .3;
        fill: ${({iconColor, theme}) => iconColor ? iconColor : theme.colors.darkGray}
    }
`;

interface Props {
    title: string;
    icon: IconType;
    tagName: any;
    color?: string;
}

const Title: React.FC<Props> = ({ title, icon, tagName, color }) => (
    <TitleWrapper iconColor={color}>
        <Icon icon={icon} />
        <Heading as={tagName} color={color}>{title}</Heading>
    </TitleWrapper>
);

export default Title;
