import React from 'react'
import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

let DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q"
               defaultIsVisible={ false } >
    <LogMonitor expandStateRoot={ true }
                expandActionRoot={ false } />
  </DockMonitor>
)

export { DevTools }