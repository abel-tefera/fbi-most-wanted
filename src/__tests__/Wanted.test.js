import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Wanted from '../components/Wanted';
import '@testing-library/jest-dom';

describe('render', () => {
  const mockStore = configureStore();

  const newState = {
    dates_of_birth_used: ['May 30, 1965'],
    reward_max: 4999999,
    images: [
      {
        large:
          'https://www.fbi.gov/wanted/terrorinfo/mrx/@@images/image/large',
      },
    ],
    reward_min: 1000000,
    reward_text:
      'The Rewards For Justice Program, United States Department of State, is offering a reward of up to $5 million for information leading directly to the capture of ...',
    subjects: ['Seeking Information - Terrorism'],
    title: 'PERSON 1',
    warning_message: 'SHOULD BE CONSIDERED ARMED AND DANGEROUS',
    wanted_id: '8afa8ac1eccbfea19b9d4d9682145b14',
    description: '',
  };

  it('should store the correct state in the store', () => {
    const wantedStore = mockStore(newState);

    wantedStore.dispatch({ type: 'GET_WANTED', payload: { result: newState } });

    expect(wantedStore.getState()).toEqual(newState);
  });

  it('should render the home page with the correct data', () => {
    const wantedStore = mockStore(newState);

    wantedStore.dispatch({ type: 'GET_WANTED', payload: { result: newState } });

    render(
      <Provider store={wantedStore}>
        <Wanted wanted={wantedStore.getState()} />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    const wanted1 = screen.getByText(/person/i);
    expect(wanted1).toBeInTheDocument();
  });
});
