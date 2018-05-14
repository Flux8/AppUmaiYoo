import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IJson, IWine, IFeature} from './jsonData';

@Injectable({ providedIn: 'root' })

export class WineService {

  constructor(private http: HttpClient) {
  }

  getTipo(): Observable<IJson> {
    return this.http.get<IJson>('http://localhost:8888/AppUmaiYoo/api/getAll');
  }
  getWine(id): Observable<IWine> {
     return this.http.get<IWine>(`http://localhost:8888/AppUmaiYoo/api/getWines/${id}`);
  }
  getFeature(): Observable<IFeature> {
    return this.http.get<IFeature>('http://localhost:8888/AppUmaiYoo/api/getFeature');
  }
}

