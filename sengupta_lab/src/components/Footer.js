import React from 'react'
import img from '../th.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'


const Footer = () => {
  return (
<>
<footer className="bg-white dark:bg-gray-900 mt-5">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="w-40 h-40">
              <img src={img} alt='dna'/>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our mission</h2>

                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Our mission is to harness the power of AI and molecular biology to develop robust molecular assays and technology platforms that improve detection and management of deadly diseases such as cancers.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label for="UserEmail" className="sr-only"> Email </label>

                  <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                    <button className="mt-1 w-full bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      <a href='https://www.thesenguptalab.com/research' target='_blank' rel="noreferrer">
                        Our Research
                      </a>
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Careers:</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="/career" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Current Job Opportunities
                    </a>
                  </li>

                  <li>
                    <a href="/joblist" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Job Notifications
                    </a>
                  </li>

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Delhi
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="/about" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="/about" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Review
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Contact us</p>

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      debarka@iiitd.ac.in
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      91-11-26907-446
                    </a>
                  </li>

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      A306, IIIT-Delhi, Okhla Phase 3, Delhi 110020
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900 dark:text-white">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a href="/" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Refund Policy
                    </a>
                  </li>

                </ul>
              </div>

              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <a href="https://www.linkedin.com/in/debarka-sengupta-3607517/" target="_blank" rel="noreferrer" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/chandrika-kp" target="_blank" rel="noreferrer"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">GitHub</span>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noreferrer"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/debarka.sengupta" target="_blank" rel="noreferrer"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/lab_sengupta" target="_blank" rel="noreferrer"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="mailto:debarka@iiitd.ac.in" target="_blank" rel="noreferrer"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    <span className="sr-only">EMail</span>
                    <IoIosMail />
                  </a>
                </li>


              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; 2024.The Sengupta Laboratory. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a href="/" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="/" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="/" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
</> 
 )
}

export default Footer