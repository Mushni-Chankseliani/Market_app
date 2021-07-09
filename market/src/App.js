import { useDispatch } from 'react-redux';
import Navigation from './components/navigation';
import Routes from './Routes';
import { useEffect } from 'react';
import { autoLoginAction } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
