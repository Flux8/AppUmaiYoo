import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WineService } from '../app.service';
import { Observable, Subscription } from 'rxjs';
import { IWine } from '../jsonData';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  public Wines;

  constructor(private route: ActivatedRoute, private _dataService: WineService) {   }
  private selectedId: number;
  modalActions = new EventEmitter<string|MaterializeAction>();

 ngOnInit() {
  this.Wines = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this._dataService.getWine(params.get('id')))
  );
  }



  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

}
