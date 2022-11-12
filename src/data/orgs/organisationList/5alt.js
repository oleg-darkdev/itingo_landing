import OrgClass from '../orgClass';

let org = new OrgClass();

org.bio.id = '5-alternatyw';
org.bio.category = ['Dom Sąsiedzki', 'Edukacja', 'Kultura i sztuka'];
org.bio.activities = [
	{
		link: '',
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
];
org.bio.authOnPlatform = true;

org.orgContacts.number = '+48776290877';
org.orgContacts.nameOfContact = 'Monika';
org.orgContacts.positionOfContact = 'Founder';
org.orgContacts.contactTime = '16:00 - 18:00';
org.orgContacts.briefing = {
	time: '16:00 - 20:00',
	data: 'every tuesday',
	platform: 'Zoom'
};
org.orgContacts.email = 'monika@gmail.com';
org.orgContacts.social = {
	facebook: '',
	site: false,
	linkedIn: ''
};
org.orgContacts.addres = '1 Maja 12';
org.orgContacts.index = '81-828';
org.orgContacts.town = 'Sopot';
org.orgContacts.areaOfOperation = 'Sopot';
org.orgContacts.nip = '1231231321';
org.orgContacts.krs = '32742379832234';
	
org.report.datePublic = '05.10.2022';
org.report.name = '5.ALT',
org.report.dateStart = '06.10.2022';
org.report.dateEnd = '05.02.2023';
org.report.status = 1; // 0 - no started, 1 - in process, 2 - end
org.report.trelloBoard = '';
org.report.gitHub = '';
org.report.site = '';
// org.report.workType.frontend = {
// 	create: true,
// 	update: false
// };

			

	// consulting: {
	// 	analyseConsulting: false,
	// 	hacking: false
	// },
	// security: {
	// 	analyse: false,
	// 	hacking: false,
	// 	other: false
	// },
	// seo: {
	// 	analyseConsulting: false,
	// 	write: false,
	// 	update: false
	// },

org.report = {
	size: 'small',
	name: '5.ALT',
	datePublic: '10.10.2022',
	dateStart: '12.10.2022',
	dateEnd: '12.12.2022',
	status: false,
	trelloBoard: 'https://trello.com/b/2AJf3hCu.html',
	gitHub: 'https://github.com/oleg-darkdev/5_alternative',
	site: 'https://alternatywy.herokuapp.com',
	zoom: 'https://us04web.zoom.us/j/77202985735?pwd=Y7854aXDa28E320xsyKWdp5aNwdCRw.1',
	budget: 1000,
	generalSponsor: {
			title: '',
			id: '',
			logo: '/images/workspace/our_family/sponsors_logos/general_sponsor.svg',
			link: ''
		},
	sponsors: [
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		}
	],
	partners: [
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		}
	],
	localPartners: [
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		},
		{
			title: '44 Cubes',
			id: 'as213123123213',
			logo: '/images/logo_empty_del.svg',
			link: ''
		}
	],
	workType: [
		{
			title: '1',
			tasks: ['101', '102', '103'] // '104', '105', '106', '107', '108'
		},
		{
			title: '2',
			tasks: ['201', '202', '203', '204', '205', '206'] // '104', '105', '206', '207', '208'
		},

		{
			title: '3',
			tasks: ['301', '302', '303', '304', '305', '306'] // '704', '705', '706', '707', '708'
		},
		{
			title: '4',
			tasks: ['401', '402', '403', '404'] // '704', '705', '706', '707', '708'
		},
		{
			title: '5',
			tasks: ['501', '502', '503', '504'] // '704', '705', '706', '707', '708'
		},
		{
			title: '6',
			tasks: ['601', '602', '603'] // '704', '705', '706', '707', '708'
		},
		{
			title: '7',
			tasks: ['701', '702', '703'] // '704', '705', '706', '707', '708'
		},
		{
			title: '8',
			tasks: ['801', '802', '803'] // '804', '805', '806', '807', '808'
		}
	]
};

org.benefits.bussines = [false];
org.benefits.ngo = [false];

org.readyToPay = {
	domain: false,
	hosting: false,
	volounter: false,
	other: [false]
};


export default org;