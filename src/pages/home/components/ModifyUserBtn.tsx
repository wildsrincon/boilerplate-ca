import { useDispatch } from 'react-redux';
import { modifyUser } from '@/redux/slices/user.slice';

export default function ModifyUserBtn() {
  const dispatch = useDispatch();

  const dispatchActions = () => {
    dispatch(modifyUser({ name: 'Wilds Rincon', id: 1 }));
  };

  return (
    <button type="button" onClick={dispatchActions}>
      Dispatch Modify Action
    </button>
  );
}
