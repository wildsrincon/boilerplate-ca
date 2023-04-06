import { resetUser } from '@/redux/slices/user.slice';
import { useDispatch } from "react-redux"

export default function ResetUserBtn() {
  const dispatch = useDispatch();

  const dispatchActions = () => {
    dispatch(resetUser());
  };


  return (
    <button onClick={dispatchActions}>Dispatch Reset Action</button>
  )
}