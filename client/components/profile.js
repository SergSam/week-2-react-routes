import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Profile" />
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
          id="title"
        >
          Profile
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
          <div>{user}</div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile