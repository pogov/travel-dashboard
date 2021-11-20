import styled from 'styled-components';

interface ContainerProps {
  cols?: number;
  rows?: number;
  colTemp?: string;
}

interface ItemProps {
  span?: number;
  start?: number;
  hidden?: boolean;
  center?: boolean;
}

export const GridContainer = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: ${({ cols, colTemp }) => (cols ? `repeat(${cols || 1}, 1fr)` : colTemp && `${colTemp}`)};
    grid-template-rows: ${({ rows }) => `repeat(${rows || 1}, 1fr)`};
  }
`;

export const GridItem = styled.div<ItemProps>`
  grid-column-end: ${({ span }) => span && `span ${span}`};
  grid-column-start: ${({ start }) => start && `${start}`};
  overflow: ${({ hidden }) => hidden && 'hidden'};
  align-self: ${({center}) => center && 'center'};
`;
