import ImmutablePropTypes from 'react-immutable-proptypes'
import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView (props) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader {...props} />
      <BundleViewBody {...props}/>
    </div>
  )
}
