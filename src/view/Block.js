
import React from 'react'

export const Block = ({id, matrix}) => (
  <g transform={`matrix(${matrix.join(' ')})`}>
    <rect id={id} width='150' height='100' rx='6' ry='6' fill='#ccc' stroke='#666' strokeWidth='2' x='-75' y='-50' />
  </g>
)
