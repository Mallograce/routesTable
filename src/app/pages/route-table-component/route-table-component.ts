import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
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
  MatTable
} from '@angular/material/table';

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
    MatRowDef
  ],
  templateUrl: './route-table-component.html',
  styleUrl: './route-table-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteTableComponent {
  private tableService = inject(RouteTableService);

  protected displayedColumns: string[] = ['address', 'gateway', 'interface'];
  protected routes: Signal<TableRoute[]> = toSignal(
    this.tableService.getTableData(), { initialValue: [] }
  )
}
