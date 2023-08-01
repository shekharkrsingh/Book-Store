import React from 'react'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import rohit from "../assets/rohit.jpg"
import shekhar from "../assets/shekhar.jpg"
import sparsh from "../assets/sparsh.jpg"

const About = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our Team</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Explore the developement from us.
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div
                            className="items-center text-center bg-gray-50 rounded-lg shadow sm:flex00">

                            <img
                                className=" max-w-xs m-auto rounded-lg sm:rounded-none sm:rounded-l-lg"
                                src={rohit}
                                alt="Rohit Avatar"/>

                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                                    Rohit Raj
                                </h3>
                                <span className="text-gray-500">
                                    Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500">
                                    Rohit drives the technical strategy into the product.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0 justify-center">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/rohit--raj29/"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillLinkedin/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/rohit3716"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillGithub/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="items-center text-center bg-gray-50 rounded-lg shadow sm:flex00">

                            <img
                                className=" max-w-sm m-auto rounded-lg sm:rounded-none sm:rounded-l-lg"
                                src={shekhar}
                                alt="Shekhar Avatar"/>

                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                                    Shekhar Kumar Singh
                                </h3>
                                <span className="text-gray-500">
                                    Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0 justify-center">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/shekhar-singh-kr/"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillLinkedin/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/shekharkrsingh"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillGithub/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="items-center text-center  bg-gray-50 rounded-lg shadow sm:flex00">

                            <img
                                className=" max-w-sm m-auto rounded-lg sm:rounded-none sm:rounded-l-lg"
                                src={sparsh}
                                alt="sparsh Avatar"/>

                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                                    Sparsh Jaiswal
                                </h3>
                                <span className="text-gray-500">
                                    Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500">Sparsh drives the technologies.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0 justify-center">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/sparsh1119/"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillLinkedin/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/sparsh1119"
                                            target='_blank'
                                            rel='noreferrer'
                                            className="text-gray-500 hover:text-gray-900ite">
                                            <AiFillGithub/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="items-center text-center bg-gray-50 rounded-lg shadow sm:flex00">

                  <img className=" max-w-sm m-auto rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />

              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                      Rohit Raj
                  </h3>
                  <span className="text-gray-500"> Web Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                  <ul className="flex space-x-4 sm:mt-0 justify-center">
                      <li>
                          <a href="https://www.google.com/" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900ite">
                          <AiFillLinkedin/>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.google.com/" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900ite">
                          <AiFillGithub/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>  */
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
