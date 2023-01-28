import type { FC, ReactNode } from 'react'

import { Ball, BallBackground } from './styled'

import { backgroundBallColor } from '../colors'

type Props = {
  children: NonNullable<ReactNode>
}

export const Background: FC<Props> = ({ children }) => {
  return (
    <BallBackground>
      <Ball
        colorFrom={backgroundBallColor.blue.colorFrom}
        colorTo={backgroundBallColor.blue.colorTo}
      />
      <Ball
        colorFrom={backgroundBallColor.orange.colorFrom}
        colorTo={backgroundBallColor.orange.colorTo}
      />
      {children}
    </BallBackground>
  )
}
