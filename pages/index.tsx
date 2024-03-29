import React, { ReactElement, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home(): ReactElement {
  const [showMoreExperience, setShowMoreExperience] = useState(false);

  return (
    <div className="flex flex-col">
      <div className={`${styles['custom-hero-section']} h-screen grid grid-cols-12 ${styles['custom-border-bottom']}`}>
        <div className="col-start-5 col-span-7 sm:col-start-7 sm:col-span-5 lg:col-start-8 lg:col-span-4 flex items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="m-3 w-full text-right">Hi, my name is Mark.</p>
            <p className="m-3 w-full text-right">I like to code, drink coffee, play piano & guitar, & dream about tomorrow.</p>
          </div>
        </div>
      </div>
      <div className="px-5 md:grid md:grid-cols-12">
        <div className="md:col-start-2 md:col-span-10">
          <section
            className="mt-10"
            id="experience"
          >
            <h1 className="my-5 text-gray-500 text-4xl">Experience</h1>
            <div className="flex justify-between">
              <h3 className="font-bold">VoiceFoundry <a className="font-medium text-blue-600 hover:text-blue-400" target="_blank" href="https://voicefoundry.com" rel="noreferrer">https://voicefoundry.com</a></h3>
              <p>June 2020 - Current</p>
            </div>
            <p>AWS Cloud Engineer and Full Stack Developer</p>
            <p className="my-5">As an engineer at VoiceFoundry, my role is primarily to deliver project work, as well as provide guidance as a consultant to our clients on training & best practices for the solutions we deliver. I work to refine the process of delivering projects by building internal tools, suggest new methods of designing & building a system, as well as provide feedback to my team leads on issues. Additionally, I provide guidance to junior team members on industry best practices during code reviews. My preferred language is Node/JavaScript using TypeScript but am also proficient in Python. I prefer AWS CDK for infrastructure as code.</p>

            <button
              onClick={()=>{setShowMoreExperience(!showMoreExperience);}}
              className="bg-gray-800 text-white p-2 rounded-md"
            >
              {showMoreExperience ?
                'Less About My Experience' :
                'More About My Experience'}
            </button>

            <div
              className={!showMoreExperience ? 'hidden' : ''}
            >
              <div className="my-5">
                <p>Operate within the Agile software development methodology</p>
                <p>Manage sprint life cycle using Jira</p>
              </div>

              <div className="my-5">
                <h4 className="italic">Amazon Connect</h4>
                <ul>
                  <li className="list-inside list-disc">Setup & configure instances of Connect based on requirements</li>
                  <li className="list-inside list-disc">Integrate custom logic using lambda functions</li>
                  <li className="list-inside list-disc">Engineer contact flows based on designs</li>
                  <li className="list-inside list-disc">Custom CCP built in React</li>
                </ul>
              </div>

              <div className="my-5">
                <h4 className="italic">Admin App</h4>
                <ul>
                  <li className="list-inside list-disc">Custom off-hours & holiday messaging for contact flows</li>
                  <li className="list-inside list-disc">Support multi-language contact flows with dynamic prompts</li>
                  <li className="list-inside list-disc">Maintain & deploy infrastructure resources with AWS CDK</li>
                  <li className="list-inside list-disc">Capture prompts & hours info in an Angular UI</li>
                  <li className="list-inside list-disc">Process server logic with Python lambda functions</li>
                  <li className="list-inside list-disc">Store data in DynamoDB for retrieval from Connect</li>
                  <li className="list-inside list-disc">Encrypt resources at rest using KMS</li>
                </ul>
              </div>

              <div className="my-5">
                <h4 className="italic">Voicemail App</h4>
                <ul>
                  <li className="list-inside list-disc">Leave voicemails for a queue or individual agent</li>
                  <li className="list-inside list-disc">Maintain & deploy infrastructure resources with AWS CDK</li>
                  <li className="list-inside list-disc">Invoke Kinesis to capture audio shards in contact flow</li>
                  <li className="list-inside list-disc">Store .wav files in an S3 bucket</li>
                  <li className="list-inside list-disc">Store recording metadata in DynamoDB</li>
                  <li className="list-inside list-disc">Process server logic with Typescript (Node.js) lambda functions</li>
                  <li className="list-inside list-disc">Build UI with Angular</li>
                  <li className="list-inside list-disc">Encrypt resources at rest using KMS</li>
                  <li className="list-inside list-disc">Set time-to-live on audio recordings per client requirements</li>
                </ul>
              </div>

              <div className="my-5">
                <h4 className="italic">Storage App</h4>
                <ul>
                  <li className="list-inside list-disc">Export Connect data using Kinesis & Firehose to an S3 bucket for custom reporting & analysis</li>
                  <li className="list-inside list-disc">Maintain & deploy infrastructure resources with AWS CDK</li>
                  <li className="list-inside list-disc">Encrypt resources at rest using KMS</li>
                </ul>
              </div>

              <hr className="my-8 h-2" />

              <div className="flex justify-between">
                <h3 className="font-bold">Freelance Web Developer</h3>
                <p>May 2021 - current</p>
              </div>

              <div className="my-5">
                <h4 className="italic">Dwellics - <a className="font-medium text-blue-600 hover:text-blue-400" target="_blank" href="https://dwellics.com" rel="noreferrer">https://dwellics.com</a></h4>
                <ul>
                  <li className="list-inside list-disc">Commerical application designed to assist citizens in relocating in the U.S.</li>
                  <li className="list-inside list-disc">Step into existing code base to maintain and make suggestions on technological improvements</li>
                  <li className="list-inside list-disc">Build UI content in React</li>
                  <li className="list-inside list-disc">Implement Nextjs adding codesplitting, prerendering for SEO optimization, and prefetching</li>
                  <li className="list-inside list-disc">Deploy to AWS using Amplify</li>
                  <li className="list-inside list-disc">Store user data in Amazon Cognito</li>
                  <li className="list-inside list-disc">Build new pages based on client requirements</li>
                </ul>
              </div>

              <hr className="my-8 h-2" />

              <div className="flex justify-between">
                <h3 className="font-bold">Deloitte Consulting <a className="font-medium text-blue-600 hover:text-blue-400" target="_blank" href="https://deloitte.com" rel="noreferrer">https://deloitte.com</a></h3>
                <p>July 2017 - June 2020</p>
              </div>
              <p>Full Stack Developer</p>

              <div className="my-5">
                <h4 className="italic">Enterprise Analytics Dashboard</h4>
                <ul>
                  <li className="list-inside list-disc">Assist U.S. Department of Defense in managing military assets</li>
                  <li className="list-inside list-disc">Build UI content in React and Angular</li>
                  <li className="list-inside list-disc">Construct custom data visualizations using D3.js</li>
                  <li className="list-inside list-disc">Develop Typescript (Node.js) microservices & deploy to AWS</li>
                  <li className="list-inside list-disc">Containerize using Docker</li>
                  <li className="list-inside list-disc">Implement MongoDB as the database mechanism</li>
                  <li className="list-inside list-disc">Operate within the Agile software development methodology</li>
                  <li className="list-inside list-disc">Manage sprint life cycle using Jira</li>
                </ul>
              </div>

              <div className="my-5">
                <h4 className="italic">Pennsylvania State Benefits Web Portal - eCIS</h4>
                <ul>
                  <li className="list-inside list-disc">Maintain the web application managing state benefits for citizens of the commonwealth of Pennsylvania</li>
                  <li className="list-inside list-disc">Manage package compilations, file drops, & build deployments to INT, SAT, UAT, TFP, & PROD environments</li>
                  <li className="list-inside list-disc">Ensure environment uptime so testing is not impacted</li>
                  <li className="list-inside list-disc">Assist in E2E testing providing confidence toward daily deployments</li>
                  <li className="list-inside list-disc">Supervise builds from compilation to migration</li>
                  <li className="list-inside list-disc">Operate within the Waterfall software development methodology with six month deployment periods</li>
                </ul>
              </div>

              <button
                onClick={()=>{setShowMoreExperience(!showMoreExperience);}}
                className={`bg-gray-800 text-white p-2 rounded-md ${!showMoreExperience && 'hidden'}`}
              >
                {showMoreExperience ?
                  'Less About My Experience' :
                  'More About My Experience'}
              </button>
            </div>
          </section>
          <section
            className="mt-10"
            id="portfolio"
          >
            <h1 className="my-10 text-gray-500 text-4xl">Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
              <a
                href="https://dwellics.com"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`transition-all shadow-md border-2 w-48 h-48 rounded-lg ${styles['project']} ${styles['project-dwellics']}`}
                  id="dwellics"
                >
                </div>
              </a>
              <div
                className={`shadow-md border-2 w-48 h-48 rounded-lg ${styles['project-drum-machine']}`}
                id="drum-machine"
              ></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
