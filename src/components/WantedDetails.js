import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  fetchWanted,
  getSingleWanted,
  selectAllWanted,
  selectCurrentWanted,
} from '../redux/wanted/wantedSlice';

const WantedDetails = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const wantedId = searchParams.get('id');
  const current = useSelector(selectCurrentWanted);
  const wantedData = useSelector(selectAllWanted);

  useEffect(() => {
    if (wantedData.length === 0) {
      dispatch(fetchWanted());
    } else {
      dispatch(getSingleWanted(wantedId));
    }
  }, [dispatch, wantedData, wantedId]);

  return (
    <div className="flex justify-center bg-custom-blue-normal text-white min-h-screen">
      {current !== null && (
        <div className="flex flex-col sm:w-2/3 md:w-1/2">
          <div className="flex items-center text-left justify-around bg-custom-blue-light">
            <img
              src={current.images[0].large}
              className="w-36 h-36 object-cover py-4"
              alt={current.title}
            />
            <div className="flex flex-col w-1/2">
              <span className="text-2xl font-semibold capitalize ml-4">
                {current.title.toLowerCase()}
              </span>
            </div>
          </div>
          <div className="flex w-full bg-custom-blue-dark justify-start px-2">
            <p className="text-xs font-medium text-white">BREAKDOWN</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl p-2">
            <span>Reward</span>
            <span className="w-3/5 text-right">
              $
              {(Math.ceil(current.reward_max / 10) * 10).toLocaleString(
                'en-US',
              )}
            </span>
          </div>
          {current.dates_of_birth_used
            && current.dates_of_birth_used.length > 0 && (
              <div className="flex justify-between text-lg md:text-xl p-2 bg-custom-blue-dark">
                <span>Date of Birth</span>
                {' '}
                <span className="w-3/5 text-right">
                  {current.dates_of_birth_used[0]}
                </span>
              </div>
          )}
          {/* {current.details && (
            <div className="flex text-justify text-lg md:text-xl py-2">
              {current.details}
            </div>
          )} */}
          {current.subjects && current.subjects.length > 0 && (
            <div className="flex justify-between text-lg md:text-xl p-2">
              <span>Subject</span>
              {' '}
              <span className="w-3/5 text-right">{current.subjects[0]}</span>
            </div>
          )}
          {current.description && (
            <div className="flex justify-between text-lg md:text-xl p-2 bg-custom-blue-dark">
              <span>Note</span>
              <span className="w-4/5 text-justify">{current.description}</span>
            </div>
          )}
          {current.reward_text && (
            <div className="flex justify-between text-lg md:text-xl p-2">
              <span className="text-justify">{current.reward_text}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WantedDetails;
