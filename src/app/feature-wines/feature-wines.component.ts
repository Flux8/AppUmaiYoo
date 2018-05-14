import { Component, OnInit } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { WineService } from '../app.service';

@Component({
  selector: 'app-feature-wines',
  templateUrl: './feature-wines.component.html',
  styleUrls: ['./feature-wines.component.css']
})
export class FeatureWinesComponent implements OnInit {

  constructor(private _dataservice: WineService) { }

  public FeatureData;

  modalActions = new EventEmitter<string|MaterializeAction>();

  ngOnInit() {
    this._dataservice.getFeature()
      .subscribe( data => {
        this.FeatureData = data;
      });
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

}
