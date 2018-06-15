'use strict';

import { COMMON } from './constants.common';

const configProd = Object.assign(
	{},
	{
		COMMON,
		TIMEOUT: 20000,
		ENDPOINT: '',
		SERVICE: {
			ETHER_CLP_DOLAR: 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=CLP',
		},
		SERVICES_ERRORS: [
			{
				CODE: 1,
				TYPE: '',
			},
		],
	}
);

export default configProd;
