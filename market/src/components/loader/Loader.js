import { TEST_IDS } from '../../utils/testids';

export const Loader = ({ message = 'Loading...' }) => (
  <div className="w-100 text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">{message}</span>
    </div>
  </div>
);
