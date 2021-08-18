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
            <h1 className="m-5 text-gray-500 text-4xl">About Me</h1>
            <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero quo ea laudantium velit rem dignissimos, voluptatum voluptatem deleniti, facere atque, odit neque laboriosam? Voluptatibus veniam illum harum nam accusantium!</p>
            <p className="m-5">Unde quod, sequi explicabo ipsam odio voluptate earum repudiandae dignissimos. Blanditiis, animi! Qui fugiat placeat odit repellat accusamus sit tenetur, corporis numquam voluptatum molestias natus mollitia consectetur magnam, maxime cupiditate?</p>
            <p className="m-5">Nam ratione eaque eveniet facilis ipsum voluptates porro obcaecati alias, totam dolore minima officiis vero eum unde quidem fugit ex, esse exercitationem earum? Modi quia nisi fugit eligendi, aliquam voluptate.</p>
            <p className="m-5">Et veritatis nihil expedita cumque quia praesentium consequatur debitis cupiditate, vitae architecto eaque, quis corporis harum blanditiis, consequuntur eligendi ut quos in aliquid labore modi? Aut eum ullam officia suscipit.</p>
            <p className="m-5">Suscipit quo, nostrum, error temporibus similique praesentium repudiandae incidunt a natus ratione sed ea, illo fuga distinctio voluptatem nemo rerum illum unde? Accusantium aperiam nulla voluptate, est nemo sequi voluptatum?</p>
          </section>
          <section className="mt-10">
            <h1 className="m-5 text-gray-500 text-4xl">Portfolio</h1>
            <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero quo ea laudantium velit rem dignissimos, voluptatum voluptatem deleniti, facere atque, odit neque laboriosam? Voluptatibus veniam illum harum nam accusantium!</p>
            <p className="m-5">Unde quod, sequi explicabo ipsam odio voluptate earum repudiandae dignissimos. Blanditiis, animi! Qui fugiat placeat odit repellat accusamus sit tenetur, corporis numquam voluptatum molestias natus mollitia consectetur magnam, maxime cupiditate?</p>
            <p className="m-5">Nam ratione eaque eveniet facilis ipsum voluptates porro obcaecati alias, totam dolore minima officiis vero eum unde quidem fugit ex, esse exercitationem earum? Modi quia nisi fugit eligendi, aliquam voluptate.</p>
            <p className="m-5">Et veritatis nihil expedita cumque quia praesentium consequatur debitis cupiditate, vitae architecto eaque, quis corporis harum blanditiis, consequuntur eligendi ut quos in aliquid labore modi? Aut eum ullam officia suscipit.</p>
            <p className="m-5">Suscipit quo, nostrum, error temporibus similique praesentium repudiandae incidunt a natus ratione sed ea, illo fuga distinctio voluptatem nemo rerum illum unde? Accusantium aperiam nulla voluptate, est nemo sequi voluptatum?</p>
          </section>
          <section className="my-10">
            <h1 className="m-5 text-gray-500 text-4xl">Contact Me</h1>
            <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero quo ea laudantium velit rem dignissimos, voluptatum voluptatem deleniti, facere atque, odit neque laboriosam? Voluptatibus veniam illum harum nam accusantium!</p>
            <p className="m-5">Unde quod, sequi explicabo ipsam odio voluptate earum repudiandae dignissimos. Blanditiis, animi! Qui fugiat placeat odit repellat accusamus sit tenetur, corporis numquam voluptatum molestias natus mollitia consectetur magnam, maxime cupiditate?</p>
            <p className="m-5">Nam ratione eaque eveniet facilis ipsum voluptates porro obcaecati alias, totam dolore minima officiis vero eum unde quidem fugit ex, esse exercitationem earum? Modi quia nisi fugit eligendi, aliquam voluptate.</p>
            <p className="m-5">Et veritatis nihil expedita cumque quia praesentium consequatur debitis cupiditate, vitae architecto eaque, quis corporis harum blanditiis, consequuntur eligendi ut quos in aliquid labore modi? Aut eum ullam officia suscipit.</p>
            <p className="m-5">Suscipit quo, nostrum, error temporibus similique praesentium repudiandae incidunt a natus ratione sed ea, illo fuga distinctio voluptatem nemo rerum illum unde? Accusantium aperiam nulla voluptate, est nemo sequi voluptatum?</p>
          </section>
        </div>
      </div>
    </MyProvider>
  );
}
