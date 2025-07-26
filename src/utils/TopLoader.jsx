import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

nProgress.configure({ showSpinner: false });

function TopLoader() {
  const location = useLocation();

  useEffect(() => {
    nProgress.start();
    const timeout = setTimeout(() => {
      nProgress.done();
    }, 500);

    return () => {
      clearTimeout(timeout);
      nProgress.done();
    };
  }, [location.pathname]);

  return null;
}

export default TopLoader;
