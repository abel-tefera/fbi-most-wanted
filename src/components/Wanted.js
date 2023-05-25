import React from 'react';
import { NavLink } from 'react-router-dom';

const Wanted = ({ wanted }) => (
  <>
    <div className="w-1/2 md:w-1/5">
      <NavLink to={`wanted?id=${wanted.wanted_id}`}>
        <div
          className="h-48 text-right items-end overflow-hidden flex flex-col text-white justify-end pr-2"
          style={{
            background: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${wanted.images[0].large})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          title={wanted.title}
        >
          <p className="w-3/4 text-lg font-bold capitalize">
            {wanted.title.toLowerCase()}
          </p>
          <p>
            $
            {(Math.ceil(wanted.reward_max / 10) * 10).toLocaleString('en-US')}
          </p>
        </div>
      </NavLink>
    </div>
  </>
);

export default Wanted;
