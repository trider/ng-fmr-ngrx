import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { User } from '../models/user.model'



export const selectUsersState = createFeatureSelector<ReadonlyArray<User>>('users');


export const selectUsers = createSelector(
  selectUsersState,
  (state) => state
);

export const selectUserState = createFeatureSelector<User>('user');


// export const selectUserId = createSelector(
//   selectUserState,
//   (state) => state.id
// );


// export const selectUser = createSelector(
//   selectUsers,
//   selectUserId,
//   (users, selectedUserId) => users.find((user) => user.id === selectedUserId)
// );