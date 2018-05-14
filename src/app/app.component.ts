import { Component, OnInit} from '@angular/core';
import { WineService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public Data;



  constructor ( private _dataservice: WineService) {}

  ngOnInit () {

    this._dataservice.getTipo()
     .subscribe(datas => {
       this.Data = datas;
       console.log(this.Data);
     });
  }

}

