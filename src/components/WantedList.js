import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWanted,
  getWantedError,
  getWantedStatus,
  searchWanted,
  selectAllWanted,
  selectFiltered,
} from '../redux/wanted/wantedSlice';
import Wanted from './Wanted';
import Main from './Main';

const WantedList = () => {
  const dispatch = useDispatch();

  const wantedData = useSelector(selectAllWanted);
  const filtered = useSelector(selectFiltered);
  const status = useSelector(getWantedStatus);
  const error = useSelector(getWantedError);

  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWanted());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(searchWanted(search));
  }, [search, dispatch]);

  return (
    <div
      className="flex flex-col items-center font-lato"
      style={{ marginBottom: '18px' }}
    >
      <div className="flex flex-col">
        <div className="flex place-content-center w-full mt-4">
          <input
            className="p-2"
            placeholder="Search by name"
            onInput={(e) => setSearch(e.target.value)}
          />
        </div>
        <Main />
      </div>
      <div className="flex w-full bg-custom-blue-dark justify-start px-2">
        <p className="text-xs font-medium text-white">
          REWARDS FOR INFORMATION
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full">
        {status === 'succeeded' && filtered !== null
          ? filtered.map((wanted) => <Wanted wanted={wanted} />)
          : wantedData.map((wanted) => <Wanted wanted={wanted} />)}
      </div>
    </div>
  );
};

export default WantedList;
