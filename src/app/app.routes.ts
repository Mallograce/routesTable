import { Routes } from '@angular/router';
import { RouteTableComponent } from './pages/route-table-component/route-table-component';

export const routes: Routes = [
	{ path: 'route-table', component: RouteTableComponent },
	{ path: '', redirectTo: '/route-table', pathMatch: 'full' },
	{ path: '**', loadComponent: () =>
			import('./pages/no-found-component/no-found-component')
				.then(c => c.NoFoundComponent)
	}
];
