import { Routes } from '@angular/router';
import { BoosterComponent } from '@pages/booster/booster.component';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'booster/:id',
		component: BoosterComponent,
	},
];
