import Header from './Header'
import Body from './Body'

import './index.css'

export default function ResourceNavigation ({
  children,
  bundleView
}) {
  return (
    <div className='resource-navigation'>
      {children}
    </div>
  )
}

ResourceNavigation.propTypes = {
  children: React.PropTypes.element,
  bundleView: React.PropTypes.element
}

ResourceNavigation.Header = Header
ResourceNavigation.Body = Body
