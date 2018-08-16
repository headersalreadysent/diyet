import { Component } from '@angular/core';
import { StoreService } from './core/store/store.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	constructor(public store: StoreService) {
		var rep = store.repo('test');
		rep.create({ 'asd': 'a' }).save();
		rep.update({ bsd: 'csd' });
		rep.merge({ csd: 'dsd' });
	}
}
