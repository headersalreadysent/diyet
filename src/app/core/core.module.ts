import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForageModule, NgForageConfig } from 'ngforage';
import { StoreService } from './store/store.service';

@NgModule({
	imports: [
		CommonModule,
		NgForageModule.forRoot(),
	],
	declarations: [
	],
	providers:[
		StoreService
	]
})
export class CoreModule {

	constructor(ngfConfig: NgForageConfig) {
		ngfConfig.configure({
			name: 'Diyet',
		});
	}
}
