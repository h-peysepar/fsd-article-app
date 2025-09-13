import { AppDispatch, RootState } from "@/app/stores/MainStore/mainStore";
import { login, logout } from "@/entities/user";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();

  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const loginUser = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };
  const logoutUser = () => {
    dispatch(logout());
  };
  return { loginUser, logoutUser, isLoading };
};
