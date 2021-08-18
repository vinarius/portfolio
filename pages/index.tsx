import React, { ReactElement } from 'react';

import Navbar from '../components/navbar';
import Overlay from '../components/overlay';
import { MyProvider } from '../context/stateProvider';

export default function Home(): ReactElement {
  return (
    <MyProvider>
      <Navbar />
      <Overlay />
      <div className="flex justify-center">
        <div className="container px-5">
          <section className="mt-10">
            <h1 className="my-5 text-gray-500 text-4xl">Experience</h1>
            <div className="flex justify-between">
              <h3 className="font-bold">VoiceFoundry <a className="font-medium text-blue-600 hover:text-blue-400" target="_blank" href="https://voicefoundry.com" rel="noreferrer">https://voicefoundry.com</a></h3>
              <p>June 2020 - Current</p>
            </div>
            <p className="">AWS Cloud Engineer and Full Stack Developer</p>
            <p className="my-5">As an engineer at VoiceFoundry, my role is primarily to deliver project work, as well as provide guidance as a consultant to our clients on training & best practices for the solutions we deliver. I work to refine the process of delivering projects by building internal tools, suggest new methods of designing & building a system, as well as provide feedback to my team leads on issues. Additionally, I provide guidance to junior team members on industry best practices during code reviews. My preferred language is Node/JavaScript using TypeScript but am also proficient in Python. I prefer AWS CDK for infrastructure as code.</p>

            <p className="my-10">TODO: Add button to hide/show VoiceFoundry details</p>

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
          </section>




          <section className="mt-10">
            <h1 className="my-5 text-gray-500 text-4xl">Portfolio</h1>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero quo ea laudantium velit rem dignissimos, voluptatum voluptatem deleniti, facere atque, odit neque laboriosam? Voluptatibus veniam illum harum nam accusantium!</p>
            <p className="my-5">Unde quod, sequi explicabo ipsam odio voluptate earum repudiandae dignissimos. Blanditiis, animi! Qui fugiat placeat odit repellat accusamus sit tenetur, corporis numquam voluptatum molestias natus mollitia consectetur magnam, maxime cupiditate?</p>
            <p className="my-5">Nam ratione eaque eveniet facilis ipsum voluptates porro obcaecati alias, totam dolore minima officiis vero eum unde quidem fugit ex, esse exercitationem earum? Modi quia nisi fugit eligendi, aliquam voluptate.</p>
            <p className="my-5">Et veritatis nihil expedita cumque quia praesentium consequatur debitis cupiditate, vitae architecto eaque, quis corporis harum blanditiis, consequuntur eligendi ut quos in aliquid labore modi? Aut eum ullam officia suscipit.</p>
            <p className="my-5">Suscipit quo, nostrum, error temporibus similique praesentium repudiandae incidunt a natus ratione sed ea, illo fuga distinctio voluptatem nemo rerum illum unde? Accusantium aperiam nulla voluptate, est nemo sequi voluptatum?</p>
          </section>
          <section className="my-10">
            <h1 className="my-5 text-gray-500 text-4xl">Contact Me</h1>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero quo ea laudantium velit rem dignissimos, voluptatum voluptatem deleniti, facere atque, odit neque laboriosam? Voluptatibus veniam illum harum nam accusantium!</p>
            <p className="my-5">Unde quod, sequi explicabo ipsam odio voluptate earum repudiandae dignissimos. Blanditiis, animi! Qui fugiat placeat odit repellat accusamus sit tenetur, corporis numquam voluptatum molestias natus mollitia consectetur magnam, maxime cupiditate?</p>
            <p className="my-5">Nam ratione eaque eveniet facilis ipsum voluptates porro obcaecati alias, totam dolore minima officiis vero eum unde quidem fugit ex, esse exercitationem earum? Modi quia nisi fugit eligendi, aliquam voluptate.</p>
            <p className="my-5">Et veritatis nihil expedita cumque quia praesentium consequatur debitis cupiditate, vitae architecto eaque, quis corporis harum blanditiis, consequuntur eligendi ut quos in aliquid labore modi? Aut eum ullam officia suscipit.</p>
            <p className="my-5">Suscipit quo, nostrum, error temporibus similique praesentium repudiandae incidunt a natus ratione sed ea, illo fuga distinctio voluptatem nemo rerum illum unde? Accusantium aperiam nulla voluptate, est nemo sequi voluptatum?</p>
          </section>
        </div>
      </div>
    </MyProvider>
  );
}
