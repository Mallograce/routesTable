import { NetInterface, TableRoute } from './table';

export const ROUTES_MOCK: TableRoute[] = [
	{
		uuid: '3659cbb2-ca5a-48af-a5fa-b15e40711538',
		address: '0.0.0.0',
		mask: '0',
		gateway: '193.0.174.1',
		interface: NetInterface.Ethernet
	},
	{
		uuid: '1caeb981-7c0b-48c9-9ec0-cae03cac5000',
		address: '10.1.30.0',
		mask: '24',
		gateway: '0.0.0.0',
		interface: NetInterface.Guest
	},
	{
		uuid: '37ba51a6-d8b9-4cdd-a66f-1049acb31269',
		address: '192.168.1.0',
		mask: '24',
		gateway: '0.0.0.0',
		interface: NetInterface.Home
	},
	{
		uuid: '28dcca9a-5a1a-47d9-a591-baebd4a4144e',
		address: '193.0.174.0',
		mask: '24',
		gateway: '0.0.0.0',
		interface: NetInterface.Ethernet
	},
	{
		uuid: '164287d7-cfaf-4621-9fe8-a2ea153b37a2',
		address: '193.0.175.0',
		mask: '25',
		gateway: '193.0.174.10',
		interface: NetInterface.Ethernet
	},
	{
		uuid: '23fa68d8-9642-4dd1-b72c-8fa3b575cb12',
		address: '193.0.175.22',
		mask: '32',
		gateway: '193.0.174.1',
		interface: NetInterface.Ethernet
	},
	{
		uuid: '18c135a7-899b-4251-a832-f8d9c4fb6cff',
		address: '193.0.176.25',
		mask: '32',
		gateway: '193.0.176.1',
		interface: NetInterface.Wifi
	},
	{
		uuid: 'fb2a0e87-f131-405b-99c9-ea164510c62c',
		address: '192.168.2.10',
		mask: '24',
		gateway: '193.0.172.1',
		interface: NetInterface.Ethernet
	},
	{
		uuid: 'fea11aec-ab8c-4ff9-b1ab-e424994ab13e',
		address: '192.168.2.5',
		mask: '28',
		gateway: '192.168.102.1',
		interface: NetInterface.Wifi
	},
	{
		uuid: '1f38d480-005b-41b0-b6d5-90f9265528a8',
		address: '10.0.0.0',
		mask: '24',
		gateway: '10.0.0.1',
		interface: NetInterface.Wifi
	},
]