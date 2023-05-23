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

  return <div>{current !== null && <div>{current.title}</div>}</div>;
};

export default WantedDetails;
