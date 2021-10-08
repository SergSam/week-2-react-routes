import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center">
        <div id="title">
          Main
          <div>
            <Link to="/dashboard/profile/ad0b9843-8e27-4a0e-bca9-6b4a57fd1763">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
