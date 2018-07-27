// Modules
import { NgModule } from '@angular/core';

// Modules
import { HeadertModule, TabsModule, CardModule } from '../../../cross';

// Components
import { MarketComponent } from './market.component';
import { MarketRouter } from './market.router';

@NgModule({
	declarations: [MarketComponent],
	imports: [MarketRouter, HeadertModule, TabsModule, CardModule],
})
export class MarketModule {}
