import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from './redux/store';
import './App.css';

import { Home, NotFound } from './pages';


export function App() {
  const user = useSelector((state: AppStore) => state.user);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {JSON.stringify(user)}
      </div>
    </>
  )
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
