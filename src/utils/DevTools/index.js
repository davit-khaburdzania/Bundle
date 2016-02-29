import React from 'react'
import { createDevTools } from 'redux-devtools'

import DockMonitor from 'redux-devtools-dock-monitor'
import MultipleMonitors from 'redux-devtools-dispatch/lib/MultipleMonitors'
import Inspector from 'redux-devtools-inspector'
import LogMonitor from 'redux-devtools-log-monitor'
import Dispatcher from 'redux-devtools-dispatch'
import SliderMonitor from 'redux-slider-monitor'

import { allActions } from '../../actions'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
  >
    <Inspector />
    <MultipleMonitors>
      <LogMonitor />
      <Dispatcher actionCreators={allActions} />
    </MultipleMonitors>
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
)
