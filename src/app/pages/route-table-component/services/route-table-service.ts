import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableRoute } from '../../../shared/models/table';
import { ROUTES_MOCK } from '../../../shared/models/table-mock';

@Injectable({
  providedIn: 'root'
})
export class RouteTableService {

  // Без httpClient, т.к. передаются готовые данные
  // Поэтому просто создаем поток
  getTableData(): Observable<TableRoute[]> {
    return of(ROUTES_MOCK);
  }
}
