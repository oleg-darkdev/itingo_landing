import volsBenefits from '../volunteers/benefits';
import ngoBenefits from '../ngo/benefits';
import {ngo, bussines, startups, vols } from './clientTypes';


const offertsList = [
	{
		title: ['NASZE', 'WSPARCIE DLA', 'IT WOLONTARIUSZY'],
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		link: '/volunteer',
		offerList: volsBenefits,
		reverse: false,
		benefitsText: vols.listText
	},
	{
		title: ['NASZE', 'WSPARCIE DLA', 'NGO'],
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		link: '/ngo',
		offerList: ngoBenefits,
		reverse: true,
		benefitsText: ngo.listText
	},
	{
		title: ['NASZA', 'OFERTA ', 'DLA BIZNESU'],
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		link: '/business',
		offerList: volsBenefits,
		reverse: false,
		benefitsText: bussines.listText
	}
];


export default offertsList;