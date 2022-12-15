const usersInitialState = {
  users: [] as UserType[]
}

export const usersReducer =
  (state: UsersInitialStateType = usersInitialState, action: UsersActionsType): UsersInitialStateType => {
  switch (action.type) {
    case "users/SET-USERS":
      return {...state, users: action.users}
    case "users/FOLLOWED":
      return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u) }
    default:
      return state
  }
}

export const setUsersAC = (users: UserType[]) => {
  return {type: 'users/SET-USERS', users} as const
}

export const followedAC = (userId: string) => {
  return {type: 'users/FOLLOWED', userId} as const
}


// Types
type UsersInitialStateType = typeof usersInitialState

export type UserType = {
  id: string
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: LocationType
}

type LocationType = {
  city: string
  country: string
}

type UsersActionsType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof followedAC>