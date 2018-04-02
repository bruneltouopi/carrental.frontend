import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import BaseService from './base.service';
import { BaseModel } from './base.model';
import { Router } from '@angular/router';

export abstract class BaseCreationComponent<T extends BaseModel> implements OnInit {

    public formGroup: FormGroup;

    private postSub: any;

    constructor(protected formBuilder: FormBuilder, protected toastr: ToastrService, protected baseService: BaseService<T>) {

    }

    abstract validate(): boolean;
    abstract retrieveData(): T;

    create() {
        let data = this.retrieveData();
        this.postSub =  this.baseService.post(data).subscribe(item => {
            this.toastr.success("Item has been added!");
            this.afterCreate(item);
        });
    }

    abstract afterCreate(item :T);
    abstract ngOnInit();

    ngOnDestroy() {
        if(this.postSub !== undefined) this.postSub.unsubscribe();
        this.ngOnAfterDestroy();
    }

    abstract ngOnAfterDestroy();
}
