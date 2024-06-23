import React from 'react'
import { Link } from 'react-router-dom'
import Work from '../assets/work.jpg'
import NavBar from'./NavBar' ; 

export const Home = () => {
  return (

    <div className='bg-gray-900 text-gray-50 flex flex-col'>
    <NavBar />

      <div className="first h-screen flex flex-row">
        <div className="first-image flex h-screen justify-center items-center p-20 w-1/2">
            <img className='cover h-80' src={Work} alt="" />
        </div>
        <div className="first-text flex flex-col gap-5 w-1/2 h-screen justify-center items-center">
          <h1 className="text-5xl"> find your dream job</h1>
          <div className="flex flex-col p-5 items-end">
          <p className="text-sm">12k jobs</p>
          <div className="flex flex-row gap-5 justify-evenly">
          <Link to='/job_details' className='p-2 hover:bg-blue-200 bg-blue-400'>
            find your job
          </Link>
          <Link to='/login' className='p-2 hover:bg-blue-200 bg-blue-400'>sign in</Link>
          <Link to='/register' className='p-2 hover:bg-blue-200 bg-blue-400'>sign up</Link>

          </div>

          </div>

        </div>

    
      </div>
      <footer/>
      </div>
  )
}
