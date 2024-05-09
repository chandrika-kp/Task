import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://wallpapercave.com/wp/wp3382548.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight p-2 text-white text-center">Founder</h2>
            <img src='https://cai.iiitd.ac.in/upload/usr/original/196443.jpg' alt='lab' />
            <p className="mt-6 text-lg leading-8 text-gray-300 hover:bg-black">
              <span className='text-red-300 text-2xl hover:text-red-400'>Dr. Debarka Sengupta</span> is an Associate Professor of Computational Biology and Computer Science at IIIT-Delhi.
              He is also an honorary Associate Professor at the Queensland University of Technology-Brisbane.
              Debarka carried out his doctoral and post-doctoral research in the Machine Intelligence Unit of
              the Indian Statistical Institute and Genome Institute of Singapore, respectively. His group has
              been among the first to introduce big data algorithms in the field of single-cell genomics.
              He received INSPIRE faculty Award in 2015 by the Government of India. His lab invented and
              commercialized a panel of eleven platelet genes to track the early onset of cancer. </p>
          </div>

        </div>



        <hr className='text-gray-600 mt-4' />
        <div className="flex flex-col bg-white mt-2 p-2 justify-center " style={{ height: "24rem" }}>
          <h1 className="py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800 text-center">
            Team Members
          </h1>
          <div className="flex pb-10 hide-scroll-bar mx-5 overflow-auto justify-center" style={{ height: "24rem" }}>
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">

              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src="https://static.wixstatic.com/media/7291c1_313a391bb6414b77b08a0e49ce6275f2~mv2.png/v1/fill/w_263,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-03-07%20at%2010_edited.png" alt='"Profile' />
                  <p className="text-lg text-center font-bold">Sarita Poonia</p>
                  <p className="text-sm text-center ">Student at IIIT-D</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://www.linkedin.com/in/sarita-poonia-computational-biologist/" className="mx-5" ><FaLinkedin /></a>
                    <a href="#/" className="mx-5" ><FaGithub /></a>
                    <a href="#/" className="mx-5" ><FaTwitter /></a>
                  </div>
                </div>
              </div>

              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src="https://media.licdn.com/dms/image/C5603AQFP9E0vtgwing/profile-displayphoto-shrink_800_800/0/1664208979166?e=1720656000&v=beta&t=gFc8Tqss14U99x_eRfBF5ZbtTmG2sJiWl1MEyMggLi8" alt='"Profile' />
                  <p className="text-lg text-center font-bold">Sreeram Peela</p>
                  <p className="text-sm text-center ">Postdoc Fellow at IIITD</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://www.linkedin.com/in/sreeram-peela-b53094bb/" className="mx-5" ><FaLinkedin /></a>
                    <a href="#/" className="mx-5" ><FaGithub /></a>
                    <a href="#/" className="mx-5" ><FaTwitter /></a>
                  </div>
                </div>
              </div>

              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src="https://static.wixstatic.com/media/7291c1_35d41a1fac904e25be77c38eab15d333~mv2.png/v1/fill/w_270,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-03-07%20at%2012_41_edited.png" alt='"Profile' />
                  <p className="text-lg text-center font-bold">Prashant Gupta</p>
                  <p className="text-sm text-center ">Student at IIIT-D</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="#/" className="mx-5" ><FaLinkedin /></a>
                    <a href="#/" className="mx-5" ><FaGithub /></a>
                    <a href="#/" className="mx-5" ><FaTwitter /></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About