import OrgClass from '../orgClass';

let org = new OrgClass();

org.bio.id = '5-alternatyw';
org.bio.activities = [
	{
		link: '',
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
];
org.bio.authOnPlatform = true;

org.bio.orgContacts.number = '+48776290877';
org.bio.orgContacts.nameOfContact = 'Founder';
org.bio.orgContacts.positionOfContact = 'Monika';
org.bio.orgContacts.contactTime = '16:00 - 18:00';
org.bio.orgContacts.briefing = {
	time: '16:00 - 20:00',
	data: 'every tuesday',
	platform: 'Zoom'
};
org.bio.orgContacts.email = 'monika@gmail.com';
org.bio.orgContacts.social = {
	facebook: '',
	site: false,
	linkedIn: ''
};
org.bio.orgContacts.addres = '1 Maja 12';
org.bio.orgContacts.index = '81-828';
org.bio.orgContacts.town = 'Sopot';
org.bio.orgContacts.areaOfOperation = 'Sopot';
org.bio.orgContacts.nip = '1231231321';
org.bio.orgContacts.krs = '32742379832234';
	
org.bio.report.datePublic = '05.10.2022';
org.bio.report.dateStart = '06.10.2022';
org.bio.report.dateEnd = '';
org.bio.report.status = 1; // 0 - no started, 1 - in process, 2 - end
org.bio.report.trelloBoard = '';
org.bio.report.gitHub = '';
org.bio.report.site = '';
org.bio.report.workType.frontend = {
	create: true,
	update: false
};

org.bio.report.workType.backend = {
	routing: true,
	db: false
};
org.bio.report.workType.design = {
	presentation: false,
	socialMedia: true,
	poster: true,
	visiteCard: false,
	emailTemplate: false
};
org.bio.report.workType.consulting = {
	tools: false,
	site: false,
	other: false
};
org.bio.report.workType.other = [false];
org.bio.report.workType.logos = [true];
org.bio.report.workType.images= [true];


org.bio.benefitsVolunteering.bussines = [false];
org.bio.benefitsVolunteering.ngo = [false];

org.bio.readyToPay = {
	domain: false,
	hosting: false,
	volounter: false,
	other: [false]
};


export default org;