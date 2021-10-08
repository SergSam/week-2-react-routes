import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center">
        <div id="title"
        >
          Dashboard
          <div>
            <Link to="/dashboard/profile/ad0b9843-8e27-4a0e-bca9-6b4a57fd1763">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
