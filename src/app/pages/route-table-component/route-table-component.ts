import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  viewChild
} from '@angular/core';
import { RouteTableService } from './services/route-table-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TableRoute } from '../../shared/models/table';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';

@Component({
  selector: 'app-route-table-component',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './route-table-component.html',
  styleUrl: './route-table-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteTableComponent implements AfterViewInit {
  private tableService = inject(RouteTableService);
  private routes$ = this.tableService.getTableData();
  private sort = viewChild.required<MatSort>(MatSort);

  protected displayedColumns: string[] = ['address', 'gateway', 'interface'];
  protected routes: Signal<TableRoute[]> = toSignal( this.routes$, { initialValue: [] })
  protected dataSource = new MatTableDataSource<TableRoute>(this.routes());

  ngAfterViewInit() {
    this.dataSource.sort = this.sort();
    this.dataSource.sortingDataAccessor = (row: TableRoute, column: string) => {
      switch (column) {
        case 'address':
          return this.ipv4ToNumber(row.address);
        case 'gateway':
          return this.ipv4ToNumber(row.gateway);
        default:
          return (row as any)[column];
      }
    }
  }

  /**
   * Преобразование ip в 32-битное целое число
   * для корректной сортировки
   */
  private ipv4ToNumber(ipv4: string): number {
    return ipv4.split('.')
      .reduce((acc, oct) =>
        (acc << 8) + parseInt(oct, 10), 0) >>> 0;
  }
}
