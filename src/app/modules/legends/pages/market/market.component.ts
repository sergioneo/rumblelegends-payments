// Angular dependencies
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'market-component',
	styleUrls: ['./market.component.scss'],
	templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
	constructor() {}
	public ngOnInit() {
		console.log('entro');
	}
}
