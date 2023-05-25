import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import configureStore from 'redux-mock-store';
import mockData from '../data/mockData';
import Main from '../components/Main';

const mockStore = configureStore([]);

describe('tests for main component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch data and render them', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const store = mockStore(mockData);

    const component = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
