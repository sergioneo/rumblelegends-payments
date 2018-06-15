// Modules
import { NgModule } from '@angular/core';

// Providers
import { ContractsProviders, IndicatorsProvider } from './';
import { HttpClientInterceptor } from './interceptor/httpClient.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [HttpClientModule],
	providers: [
		ContractsProviders,
		IndicatorsProvider,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpClientInterceptor,
			multi: true,
		},
	],
})
export class AppModuleProviders {}
