import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWanted,
  getWantedError,
  getWantedStatus,
  selectAllWanted,
} from '../redux/wanted/wantedSlice';
import Wanted from './Wanted';
import fbiLogo from '../assets/fbi-logo.png';

const WantedList = () => {
  const dispatch = useDispatch();

  const wantedData = useSelector(selectAllWanted);
  const status = useSelector(getWantedStatus);
  const error = useSelector(getWantedError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWanted());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col items-center font-lato">
      <div className="w-full p-6 flex items-center text-left justify-evenly md:justify-center bg-custom-blue-normal">
        <img alt="FBI Logo" src={fbiLogo} className="w-1/2 w-48" />
        <div className="flex flex-col">
          <span className="text-6xl font-extrabold text-white md:text-8xl">FBI</span>
          <span className="text-2xl md:text-4xl text-white">Most Wanted</span>
        </div>
      </div>
      <div className="flex w-full bg-custom-blue-dark justify-start px-2">
        <p className="text-xs font-medium text-white">STATS BY REWARD</p>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full">
        {status === 'succeeded'
          && wantedData.map((wanted) => <Wanted wanted={wanted} />)}
      </div>
    </div>
  );
};

export default WantedList;
