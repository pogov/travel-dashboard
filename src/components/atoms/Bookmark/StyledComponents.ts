import styled from 'styled-components';

interface BookmarkProps {
    readonly small?: boolean;
    readonly medium?: boolean;
}

export const BookmarkBackground = styled.div<BookmarkProps>`
  width: ${({small, medium}) => small ? '35px' : medium ? '55px' : '75px'};
  height: ${({small, medium}) => small ? '35px' : medium ? '55px' : '75px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6647;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 4px 0 rgba(255, 102, 71, 0.25);
  position: absolute;
  right: 10px;
  bottom: 0;
  transform: translateY(50%);
  z-index: 10;
`;
