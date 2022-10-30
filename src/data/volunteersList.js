import { faker } from '@faker-js/faker';
import Volunteer from './volunteers/volunteer';

let volunteer1 = new Volunteer(faker),
    volunteer2 = new Volunteer(faker),
    volunteer3 = new Volunteer(faker),
    volunteer4 = new Volunteer(faker),
    volunteer5 = new Volunteer(faker),
    volunteer6 = new Volunteer(faker),
    volunteer7 = new Volunteer(faker),
    volunteer8 = new Volunteer(faker),
    volunteer9 = new Volunteer(faker),
    volunteer10 = new Volunteer(faker),
    volunteer11 = new Volunteer(faker),
    volunteer12 = new Volunteer(faker),
    volunteer13 = new Volunteer(faker),
    volunteer14 = new Volunteer(faker),
    volunteer15 = new Volunteer(faker),
    volunteer16 = new Volunteer(faker),
    volunteer17 = new Volunteer(faker),
    volunteer18 = new Volunteer(faker),
    volunteer19 = new Volunteer(faker),
    volunteer20 = new Volunteer(faker),
    volunteer21 = new Volunteer(faker),
    volunteer22 = new Volunteer(faker),
    volunteer23 = new Volunteer(faker),
    volunteer24 = new Volunteer(faker),
    volunteer25 = new Volunteer(faker),
    volunteer26 = new Volunteer(faker),
    volunteer27 = new Volunteer(faker),
    volunteer28 = new Volunteer(faker),
    volunteer29 = new Volunteer(faker),
    volunteer30 = new Volunteer(faker);

const volunteersList = {
	frontEnd: [
		volunteer1,
		volunteer2,
		volunteer3,
		volunteer4,
		volunteer5,
		volunteer6,
		volunteer7,
		volunteer8
	],
	backEnd: [
		volunteer9,
		volunteer10,
		volunteer11,
		volunteer12,
		volunteer13,
		volunteer14,
    ],
    design: [
        volunteer15,
		volunteer16,
		volunteer17,
		volunteer18,
		volunteer19,
		volunteer20,
		volunteer21,
		volunteer22,
		volunteer23,
		volunteer24,
		volunteer25,
		volunteer26,
		volunteer27,
		volunteer28,
		volunteer29,
		volunteer30
    ]
};

export default volunteersList;
