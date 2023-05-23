import React from 'react';
import { NavLink } from 'react-router-dom';

const Wanted = ({ wanted }) => (
  <>
    <div className="w-1/4 flex mx-6 my-3">
      <div
        className="h-48 lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${wanted.images[0].large})` }}
        title={wanted.title}
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          {/* <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {wanted.subjects[0]}
          </p> */}
          <div className="text-gray-900 font-bold text-xl mb-2 capitalize">
            {wanted.title}
          </div>
          <NavLink to={`wanted?id=${wanted.wanted_id}`}>
            <p className="px-2 text-base">More</p>
          </NavLink>
          {/* <ul>
            {wanted.wantedFor.map((r) => (
              <li>Hello</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  </>
);

export default Wanted;
