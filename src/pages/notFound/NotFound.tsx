/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
