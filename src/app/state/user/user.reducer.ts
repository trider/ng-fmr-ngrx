import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from './user.actions';

export const initialStateUsers: ReadonlyArray<User> = [];


export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});



export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    return adapter.addOne(user, state)
  }),
  on(UserActions.setUser, (state, { user }) => {
    const val = adapter.setOne(user, state)
    alert(JSON.stringify(val))
    return val
  }),
//   on(UserActions.UserApiActions.getUser, (state, { user }) => 
//    state.filter((res:any) => res.id === user.id)
// ),

  
  on(UserActions.upsertUser, (state, { user }) => {
    return adapter.upsertOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return adapter.addMany(users, state);
  }),
  on(UserActions.upsertUsers, (state, { users }) => {
    return adapter.upsertMany(users, state);
  }),
  on(UserActions.updateUser, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(UserActions.updateUsers, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(UserActions.mapUser, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(UserActions.mapUsers, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(UserActions.deleteUser, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(UserActions.deleteUsers, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return adapter.setAll(users, state);
  }),
  on(UserActions.setUsers, (state, { users }) => {
    const val = adapter.setMany(users, state);
    alert(JSON.stringify(val))
    return val
  
  }),
  on(UserActions.selectUserId, (state, { userId }) => {
    const val =  { ...state, selectedUserId: userId };
    // alert(JSON.stringify(val))
    return val
  }),
  on(UserActions.selectUser, (state, { user }) => {
    const val =  { ...state, user:user };
    alert(JSON.stringify(val))
    return val
  }),
  on(UserActions.clearUsers, state => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  })
);


export const getSelectedUserId = (state: State) => state.selectedUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;