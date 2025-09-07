import { User } from "../model/userSlice";
import { axiosInstance } from "@/shared/api";

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const res = await axiosInstance.get<User[]>("/users", {
    params: { email, password },
  });

  const user = res.data[0];
  if (!user) throw new Error("Невірний email або пароль");
  return user;
};

