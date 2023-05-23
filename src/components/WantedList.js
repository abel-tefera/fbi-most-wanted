import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWanted,
  getWantedError,
  getWantedStatus,
  selectAllWanted,
} from '../redux/wanted/wantedSlice';
import Wanted from './Wanted';

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
    <div className="container">
      <div className="flex flex-wrap justify-center items-start">
        {status === 'succeeded'
          && wantedData.map((wanted) => <Wanted wanted={wanted} />)}
      </div>
    </div>
  );
};

export default WantedList;
