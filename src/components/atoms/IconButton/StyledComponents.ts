import styled, {css} from 'styled-components';

export const Button = styled.button<{active?: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  & svg {
    fill: ${({theme}) => theme.colors.iconGray}
  }

  ${({active}) => (
      active && css`
        background-color: ${({theme}) => theme.colors.orange};
        position: relative;
        overflow: hidden;
        box-shadow: 0px 10px 20px rgba(88, 92, 229, 0.25);

        & svg {
            fill: #ffffff;
        }

        &::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            background-color: #FF8D76;
            height: 35px;
            width: 35px;
            top: -13px;
            right: -13px;
        }
      `
  )}
`;
