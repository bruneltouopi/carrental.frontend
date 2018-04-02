import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Reservation from '../../shared/models/reservation.model';
import { MenuItem } from 'primeng/components/common/menuitem';
import BaseService from './base.service';
import { BaseModel } from './base.model';
import { Location } from '@angular/common';

export abstract class BaseDetailComponent<T extends BaseModel> implements OnInit {
  protected id:number;
  public item: T;
  protected itemSub: any;

  public formGroup: FormGroup;

  public items: MenuItem[];

  constructor(protected route: ActivatedRoute, protected baseService: BaseService<T>, protected formBuilder: FormBuilder, protected toastrService: ToastrService, protected location: Location) { 
    this.createForm();
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.itemSub = this.baseService.getById(this.id).subscribe(item => {
      this.item = item;
      this.createForm();
    });

    this.items = [
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete()
        }
      }
    ];
  }

  abstract createForm();

  save() {
    if(!this.formGroup.valid) {
        this.toastrService.error("Please fill in all fields.");
        return;
    }
  }

  delete() {
    this.baseService.delete(this.item.id).subscribe(del => {
        this.toastrService.success("Record has been deleted");
        this.location.back();
    });
  }

  ngOnDestroy() {
    this.itemSub.unsubscribe();
  }
}
