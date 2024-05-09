import React from 'react'
import { NavLink } from 'react-router-dom'
const links = [
  { name: 'Current Job Opportunities', href: '#jobs' },
  { name: 'Know more', href: '#more' },
  { name: 'Select', href: '#' },
  { name: 'view Job Details', href: '#' },
  { name: 'Apply', href: '#' },
  { name: 'Submit', href: '#' },
]
const stats = [
  { name: 'Funding Institutes', value: '5' },
  { name: 'Journal publications', value: '20+' },
  { name: 'Hours per week', value: '40' },
]
const Career = () => {



  return (
    <>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Join with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our lab is always looking for highly motivated colleagues to work alongside us on the computer and bench. If you love our work and are proud of your skills and passion, do not hesitate to reach out. Follow the steps below. We will periodically evaluate the candidates for various positions and revert if there's a match.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="box flex flex-row bg-slate-400 p-2 m-2 md:flex md:flex-row md:min-w-[470px] flex-col ">

        <div className="flex flex-col w-30 h-70 md:w-1/2 lg:w-1/3 p-2 m-2">
          <div className="flex flex-col">

            <div className="w-full bg-blue-200 p-4">
              <img src="https://leverageedu.com/blog/wp-content/uploads/2020/05/How-to-Choose-a-Career-Path_.jpg" alt="carrer" />
            </div>

            <div className="w-full bg-orange-300 p-4">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deleniti perspiciatis possimus autem in necessitatibus </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-70 h-70 p-2 m-2 justify-around">
          <div className="flex flex-row " id='jobs'>
            <div className="w-1/2  bg-blue-200 p-2 m-2">
              <h1 className='font-bold text-2xl'>Current Job Opportunities</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo ut sed ducimus cupiditate temporibus esse labore. Molestiae, officia accusamus.</p>
              <button className='btn' id='more'>
                <NavLink to="/joblist">Know more</NavLink>
              </button>
            </div>
            <div className="w-1/2  bg-blue-200 p-2 m-2">
              <h1 className='font-bold text-2xl'>Work Environment</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo ut sed ducimus cupiditate temporibus esse labore. Molestiae, officia accusamus.</p>
              <button className='btn'>
                <NavLink to="/#">Know more</NavLink>
              </button>

            </div>
          </div>
          {/* Second row in second div */}
          <div className="flex flex-row">
            {/* First column in second row */}
            <div className="w-1/2  bg-blue-200 p-2 m-2">
              <h1 className='font-bold text-2xl'>Location</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo ut sed ducimus cupiditate temporibus esse labore. Molestiae, officia accusamus.</p>
              <button className='btn'>
                <NavLink to="/#">Know more</NavLink>
              </button>

            </div>
            {/* Second column in second row */}
            <div className="w-1/2  bg-blue-200 p-2 m-2">
              <h1 className='font-bold text-2xl'>Info</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo ut sed ducimus cupiditate temporibus esse labore. Molestiae, officia accusamus.</p>
              <button className='btn'>
                <NavLink to="/#">Know more</NavLink>
              </button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Career