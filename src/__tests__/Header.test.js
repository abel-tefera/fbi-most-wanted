import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('tests for header component', () => {
  test('snapshot for header', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
