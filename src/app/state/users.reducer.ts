import { createReducer, on } from '@ngrx/store';
import { UsersApiActions } from './users.actions';
import { User } from '../models/user.model';


export const initialState: ReadonlyArray<User> = [];


export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.userList, (_state, { users }) => users),
  on(UsersApiActions.addUser, (_state, { user }) => {
     return [..._state, user];
  }),
  on(UsersApiActions.updateUser, (_state, { user }) => {
    return _state.map((item) =>{
      if(item.id ===user.id)item=user
      return item
    }
      
    );
 }),
//  on(UsersApiActions.getUser, (_state, { user }) => 
//   _state
// ),

// on(UsersApiActions.setUser, (_state, { user }) => 
//   _state.filter((res) => res.id === user.id)
// ),
  

on(UsersApiActions.removeUser, (_state, { user }) =>
  _state.filter((res) => res.id !== user.id)
),
  
);





