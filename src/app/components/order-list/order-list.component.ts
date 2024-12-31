import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule, KeyValuePipe, JsonPipe } from '@angular/common';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DetailsTableComponent } from '../details-table/details-table.component';
// import { selectCurrentUserId } from '../../state/user/user.selector';
import { setUser } from '../../state/user/user.actions';
import { UserService } from '../../UserService/user.service';
import * as UserActions from '../../state/user/user.actions'
import * as UserSelectors from '../../state/user/user.selector'

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetailsTableComponent
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit  {
  @Input() orders: any;
  total:number=0
  tableCols: string[] = [
    'id',
    'name',
    'price',
  ];
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private store:Store,
    private userService:UserService,
  ) {

   }
  ngOnInit(): void {
    this.orders.map((order:any) => {
      this.total+=order.price
    })
  }

}
