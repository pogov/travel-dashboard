import styled from 'styled-components';

const marginValue = {
    "no-margin": 0,
    "small": 10,
    "medium": 14,
    "large": 20
}

type MarginType = keyof typeof marginValue;

const Heading = styled.h1<{margin?: MarginType}>`
    color: ${({color, theme}) => color ? color : theme.colors.darkGray};
    font-weight: 400;
    margin: ${({margin}) => margin ? `0 ${marginValue[margin]}px` : "0 10px"};
`;

export default Heading;
