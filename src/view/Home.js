
import React from 'react'
import {connect} from 'react-redux'

import {Section} from 'view/Shared/Structural'

import {Viewport} from 'view/Viewport'
import {Block} from 'view/Block'

const mapStateToProps = state => ({
  block: state.blocks
})

const Container = ({block}) => (
  <Section>
    <Viewport>
      <Block id={block.id} matrix={block.matrix} />
    </Viewport>
  </Section>
)

export const Home = connect(mapStateToProps)(Container)
