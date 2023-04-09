import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux/slices/user.slice';

export default function ResetUserBtn() {
  const dispatch = useDispatch();

  const dispatchActions = () => {
    dispatch(resetUser());
  };

  return (
    <button type="button" onClick={dispatchActions}>
      Dispatch Reset Action
    </button>
  );
}
