
import React from 'react'

export const Viewport = ({children}) => (
  <svg
    id='viewport'
    width='100%'
    height='100%'
    viewBox={[-(1440 / 2), -(960 / 2), 1440, 960].join(' ')}
    preserveAspectRatio='xMidYMid slice'
  >
    {children}
  </svg>
)
