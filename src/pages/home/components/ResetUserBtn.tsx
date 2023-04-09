import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux/slices/user.slice';

export default function ResetUserBtn(): JSX.Element {
  const dispatch = useDispatch();

  const dispatchActions = (): void => {
    dispatch(resetUser());
  };

  return (
    <button type="button" onClick={dispatchActions}>
      Dispatch Reset Action
    </button>
  );
}
