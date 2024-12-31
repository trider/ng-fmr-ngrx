import { createAction, props, createActionGroup } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';

import { User } from '../../models/user.model';

export const UserApiActions = createActionGroup({
  source: 'User API',
  events: {
    'User List': props<{ users: ReadonlyArray<User> }>(),
    'Get User': props<{ user:User }>()
  }
});
export const loadUsers = createAction('[User/API] Load Users', props<{ users: User[] }>());
export const setUsers = createAction('[User/API] Set Users', props<{ users: User[] }>());
export const addUser = createAction('[User/API] Add User', props<{ user: User }>());
export const setUser = createAction('Set User', props<{ user: User }>());
export const selectUserId = createAction('Select User', props<{ userId: string }>());
export const selectUser = createAction('Select User', props<{ user: User }>());
export const upsertUser = createAction('[User/API] Upsert User', props<{ user: User }>());
export const addUsers = createAction('[User/API] Add Users', props<{ users: User[] }>());
export const upsertUsers = createAction('[User/API] Upsert Users', props<{ users: User[] }>());
export const updateUser = createAction('[User/API] Update User', props<{ update: Update<User> }>());
export const updateUsers = createAction('[User/API] Update Users', props<{ updates: Update<User>[] }>());
export const mapUser = createAction('[User/API] Map User', props<{ entityMap: EntityMapOne<User> }>());
export const mapUsers = createAction('[User/API] Map Users', props<{ entityMap: EntityMap<User> }>());
export const deleteUser = createAction('[User/API] Delete User', props<{ id: string }>());
export const deleteUsers = createAction('[User/API] Delete Users', props<{ ids: string[] }>());
export const deleteUsersByPredicate = createAction('[User/API] Delete Users By Predicate', props<{ predicate: Predicate<User> }>());
export const clearUsers = createAction('[User/API] Clear Users');