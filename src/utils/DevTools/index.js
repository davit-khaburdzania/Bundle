import React from 'react'
import { createDevTools } from 'redux-devtools'

import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import SliderMonitor from 'redux-slider-monitor'


export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
  >
    <Inspector />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
)
