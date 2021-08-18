import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment, ReactElement, useContext } from 'react';

import { STATEACTIONS } from '../context/stateActions';
import { myContext } from '../context/stateProvider';

export default function Overlay(): ReactElement {
  const {state, dispatch} = useContext(myContext);
  const {isOverlayOpen} = state;

  return (
    <Transition.Root show={isOverlayOpen} as={Fragment}>
      <Dialog as="div" auto-reopen="true" className="fixed inset-0 overflow-hidden" onClose={()=>{dispatch({type: STATEACTIONS.closeOverlay});}}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => dispatch({type: STATEACTIONS.closeOverlay})}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="mt-3 relative flex-1 px-4 sm:px-6">

                    <section className="shadow-md rounded-md p-5 mb-5">
                      <h1 className="font-bold text-2xl mb-2">Profile</h1>
                      <div className="flex">
                        <p className="font-semibold mr-2">Name:</p>
                        <p className="font-medium text-gray-500">Mark Kraus</p>
                      </div>
                      <div className="flex">
                        <p className="font-semibold mr-2">Location:</p>
                        <p className="font-medium text-gray-500">Pennsylvania, US</p>
                      </div>
                      <div className="flex">
                        <p className="font-semibold mr-2">Email:</p>
                        <p className="font-medium text-blue-600 hover:text-blue-400"><a href="mailto:vindevccm@gmail.com">vindevccm@gmail.com</a></p>
                      </div>
                    </section>

                    <section className="shadow-md rounded-md p-5 mb-5">
                      <h1 className="font-bold text-2xl mb-2">Professional Statement</h1>
                      <div className="flex">
                        <p className="font-medium text-gray-500">Detail oriented and highly adaptable professional with experience in the commercial and public sectors developing, testing, and deploying software. Ability to leverage full stack expertise to build responsive and user-centered applications and deliver high quality impact.</p>
                      </div>
                    </section>

                    <section className="shadow-md rounded-md p-5 mb-5">
                      <h1 className="font-bold text-2xl mb-2">Skills</h1>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">AWS</p>
                        <p className="font-medium text-gray-500">CDK, CloudFormation, API Gateway, CloudFront, CloudWatch, Connect, CodeCommit, CodeBuild, CodePipeline, Cognito, DynamoDB, IAM, Kinesis, Lambda, S3</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Preferred languages</p>
                        <p className="font-medium text-gray-500">TypeScript, Python</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Client</p>
                        <p className="font-medium text-gray-500">React (preferred), Angular, D3</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Server</p>
                        <p className="font-medium text-gray-500">Node, Express</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Database</p>
                        <p className="font-medium text-gray-500">MongoDB, DynamoDB, PostgreSQL</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Version Control</p>
                        <p className="font-medium text-gray-500">Git</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Tools</p>
                        <p className="font-medium text-gray-500">WSL, Webpack, Babel, Swagger, AWS CLI, Docker, Shell Scripting</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Testing</p>
                        <p className="font-medium text-gray-500">Jest (preferred), Mocha, Chai, Sinon, Istanbul, Jasmine</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Delivery Methodologies</p>
                        <p className="font-medium text-gray-500">Agile, Waterfall</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Software</p>
                        <p className="font-medium text-gray-500">Visual Studio Code, MS Office, Github, Gitlab, Bitbucket, Jira, Confluence</p>
                      </div>
                      <div className="flex-col my-3">
                        <p className="font-semibold mr-2">Operating Systems</p>
                        <p className="font-medium text-gray-500">Windows, Ubuntu/Linux</p>
                      </div>
                    </section>

                    <section className="shadow-md rounded-md p-5 mb-5">
                      <h1 className="font-bold text-2xl mb-2">Certifications</h1>
                      <a className="flex-col cursor-pointer text-blue-600 hover:text-blue-400" target="_blank" href="https://www.credly.com/badges/951e681f-f3ab-404f-bd3a-dfd126cd267a?source=linked_in_profile" rel="noreferrer">
                        <p className="font-semibold mr-2">AWS Developer Associate:</p>
                        <p className="font-medium text-gray-500">Issued May 2021 - Expires May 2024</p>
                      </a>
                    </section>

                    <section className="shadow-md rounded-md p-5 mb-5">
                      <h1 className="font-bold text-2xl mb-4">Follow Me</h1>
                      <div className="flex justify-around">
                        {/* TODO: add tooltips */}
                        <a className="cursor-pointer" target="_blank" href="https://www.linkedin.com/in/mark-w-kraus/" rel="noreferrer">
                          <i className="fab fa-linkedin fa-4x text-blue-600 hover:text-blue-400 transition-all" />
                        </a>
                        <a className="cursor-pointer" target="_blank" href="https://github.com/vinarius" rel="noreferrer">
                          <i className="fab fa-github-square fa-4x text-blue-600 hover:text-blue-400 transition-all" />
                        </a>
                        <a className="cursor-pointer" target="_blank" href="https://www.twitch.tv/vin_dev" rel="noreferrer">
                          <i className="fab fa-twitch fa-4x text-blue-600 hover:text-blue-400 transition-all" />
                        </a>
                        <a className="cursor-pointer" download href="resume-6-2021.pdf">
                          <i className="fas fa-file-download fa-4x text-blue-600 hover:text-blue-400 transition-all" />
                        </a>
                      </div>
                    </section>

                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
