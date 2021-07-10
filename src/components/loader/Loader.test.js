import { render, screen } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import { Loader } from './Loader';

describe('Loader component test', () => {
  it('should render loader with default message', () => {
    render(<Loader />);
    // const loaderMessage = screen.getByText('Loading...');
    const loaderMessage = screen.getByTestId(TEST_IDS.loader.message);
    expect(loaderMessage).toBeInTheDocument();
  });

  it('should render loader with specified message', () => {
    const mockMsg = 'mock message';
    render(<Loader message={mockMsg} />);
    const loaderMessage = screen.getByTestId(TEST_IDS.loader.message);
    expect(loaderMessage).toHaveTextContent(mockMsg);
  });
});
