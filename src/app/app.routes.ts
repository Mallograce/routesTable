import { Routes } from '@angular/router';
import { RouteTableComponent } from './pages/route-table-component/route-table-component';

export const routes: Routes = [
	{ path: '', component: RouteTableComponent },
	{ path: '**', loadComponent: () =>
			import('./pages/no-found-component/no-found-component')
				.then(c => c.NoFoundComponent)
	}
];
