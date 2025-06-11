export enum NetInterface {
	Ethernet = 'Подключение Ethernet',
	Guest = 'Гостевая сеть',
	Home = 'Домашняя сеть',
	Wifi = 'Подключение WifFi'
}

export type TableRoute = {
	uuid: string,
	address: string,
	mask: string;
	gateway: string;
	interface: NetInterface;
}

