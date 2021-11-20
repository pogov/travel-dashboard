import { useState } from 'react';
import Card, { CardProps } from '../../molecules/Card/Card';
import styled from 'styled-components';
import Title from '../../molecules/Title/Title';
import { OvalIndicatorIcon } from '../../../icons/Icons';
import { GridItem } from '../../../../styles/grid/Grid';

interface Props {
  cards: CardProps[];
  options: string[];
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  grid-column: 3;
  grid-row: 2 / 5;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    width: 50vw;
    scroll-snap-type: x mandatory;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 1fr;
  grid-template-rows: 50px 1fr 1fr 1fr;
`;

const Indicator = styled.div<{pos: number}>`
  max-height: 100px;
  grid-column: 1;
  grid-row: 2;
  svg {
    transform: ${({pos}) => `translateY(${pos * 100}%)`};
    transition: transform .5s cubic-bezier(.57,.21,.69,1.25);
    margin-left: -3.5px;
    fill: ${({ theme }) => theme.colors.orange};
  }
`;

const TextContainer = styled.div<{ row: number, selected: boolean }>`
  grid-column: 2;
  grid-row: ${({ row }) => row};
  writing-mode: vertical-rl;
  align-self: center;
  transform: rotate(180deg);
  font-size: 14px;
  font-weight: ${({selected}) => selected ? '500' : 'normal'};
  color: ${({ theme }) => theme.colors.lightGray};

  @media ${({ theme }) => theme.breakPoints.laptop} {
    cursor: pointer;
  }
`;

const CardSlider: React.FC<Props> = ({ cards, options }) => {
  const [indicatorRow, setIndicatorRow] = useState(0);
  return (
    <CardsContainer>
      <GridItem start={2} span={4} center>
        <Title tagName="p" title="Explore" icon="compas" />
      </GridItem>
      <Indicator pos={indicatorRow}>
        <OvalIndicatorIcon />
      </Indicator>
      {options.map((option, index) => (
        <TextContainer 
          row={index + 2} 
          key={option}
          onClick={() => setIndicatorRow(index)}
          selected={indicatorRow === index}
        >
          {option}
        </TextContainer>
      ))}
      <InnerContainer>
        {cards.map((card, i) => (
          <Card key={i} imageUrl={card.imageUrl} location={card.location} price={card.price} title={card.title} />
        ))}
      </InnerContainer>
    </CardsContainer>
  );
};

export default CardSlider;
