import styled, { css } from 'styled-components'

type BackgroundBallColor = {
  colorFrom: string
  colorTo: string
}

export const BallBackground = styled.div`
  position: absolute;
`

export const Ball = styled.div<BackgroundBallColor>`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  position: absolute;
  z-index: 100;

  &:nth-child(1) {
    left: -80px;
    top: -80px;
  }
  &:nth-child(2) {
    right: -20px;
    bottom: -80px;
  }

  ${(props) =>
    css`
      background: linear-gradient(
        to right,
        #${props.colorFrom},
        #${props.colorTo}
      );
    `}
`
