import { modifyUser } from '@/redux/slices/user.slice';
import { useDispatch } from "react-redux"

export default function ModifyUserBtn() {
  const dispatch = useDispatch();

  const dispatchActions = () => {
    dispatch(modifyUser({ name: 'Wilds Rincon', id: 1 }));
  };


  return (
    <button onClick={dispatchActions}>Dispatch Modify Action</button>
  )
}