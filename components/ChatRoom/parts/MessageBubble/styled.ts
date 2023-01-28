import styled, { css } from 'styled-components'

type Props = {
  fromMe: string
}

export const StyledMessageBubble = styled.p<Props>`
  padding: 0.5rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  max-width: 15rem;
  word-wrap: break-word;

  ${(props) =>
    props.fromMe
      ? css`
          justify-self: flex-end;
        `
      : css`
          justify-self: flex-start;
        `}
`
