import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule, KeyValuePipe, JsonPipe } from '@angular/common';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { selectCurrentUserId } from '../../state/user/user.selector';
import { setUser } from '../../state/user/user.actions';
import { UserService } from '../../UserService/user.service';
import * as UserActions from '../../state/user/user.actions'
import * as UserSelectors from '../../state/user/user.selector'
import { OrderListComponent } from '../order-list/order-list.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderListComponent
    // JsonPipe
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit  {
  @Input() users: any;
  @Output() userAddEvent = new EventEmitter<any>();
  @Output() userUpdateEvent = new EventEmitter<any>();
  @Output() userRemoveEvent = new EventEmitter<any>();
  
  tableCols: string[] = [
    'id',
    'email',
    'name',
  ];

  user:any=null
  user$:any = null


  title:string = "Details";

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    orders: new FormControl('')
  });
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private store:Store,
    private userService:UserService,
  ) {

   }
  ngOnInit(): void {
  }
  openModal(content:any, title:string, item:any = null) {
    this.title = title;
    this.user=null
    if(this.title === "Add User"){
      // this.item = item;
      this.userForm.patchValue({
        name: 'Jack Gold',
        email:'jackgold@gmail.com',
        userName:'jackgold',
      });
    }
    else if(this.title === "Edit User"){
      this.user = item;
      this.userForm.patchValue({
        ...item
      });
    }
    this.modalService.open(content, { size: 'sm', scrollable: true })
  }



  onSubmit(){
    this.modalService.dismissAll();
    
    if(this.title === "Add User"){
      const payload: any = {
        id:this.users.length+1,
        ...this.userForm.value,
        orders:[
          { id:1, name:'item 1', price:10 },
          { id:2, name:'item 2', price:10 },
          { id:3, name:'item 2', price:10 },
          { id:4, name:'item 2', price:10 }
        ]
        
        
      }


      this.userAddEvent.emit(payload)
    }
    else if(this.title === "Edit User"){
      this.userUpdateEvent.emit({
          id:this.user.id,
          ...this.userForm.value
        })
    }
    
   
  }

  openOrder(user:any){
 
   this.store.dispatch(UserActions.setUser({ user }))
  //  this.store.dispatch(UserActions.selectUserId({userId:user.id.toString()}))
  //  if(this.user$!==null){
    this.router.navigate(['/orders', user.id])
  //  }
   
  

  }

  deleteItem(user:any){
    this.userRemoveEvent.emit(user)
    
  }

}
