import { createContext } from "react";
import type { User } from "../../types/user";
import type { IActions } from "../../types/wheel";

interface IUser extends User, IActions {}

const UserContext = createContext<IUser | undefined>(undefined);

export default UserContext;