import { createAction, createActionGroup, props } from '@ngrx/store';
import { User } from '../models/user.model';


export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'User List': props<{ users: ReadonlyArray<User> }>(),
    'Add User': props<{ user:User }>(),
    // 'Get User': props<{ user:User }>(),
    'Set User': props<{ user:User }>(),
    'Update User': props<{ user:User }>(),
    'Remove User': props<{ user:User }>(),
  },
});




