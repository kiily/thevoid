import type { FamilyMember } from '../types';

/**
 * Complete family tree data
 * Spans 5 generations from Miguel/Maria to great-great-grandparents
 */
export const familyMembers: FamilyMember[] = [
	// Generation 0 - Current generation
	{
		id: '1',
		data: {
			gender: 'M',
			first_name: 'Miguel',
			last_name: 'Marin Vermelho',
			birthday: '1995-10-26',
			avatar: '',
			location: 'Luxembourg, Luxembourg',
		},
		rels: {
			parents: ['2', '3'],
			spouses: [],
			children: [],
		},
	},
	{
		id: '8',
		data: {
			gender: 'F',
			first_name: 'Maria',
			last_name: 'Marin Vermelho',
			birthday: '',
			avatar: '',
			location: 'Luxembourg, Luxembourg',
		},
		rels: {
			parents: ['2', '3'],
			spouses: [],
			children: [],
		},
	},

	// Generation 1 - Parents
	{
		id: '2',
		data: {
			gender: 'F',
			first_name: 'Ana Marina',
			last_name: 'Miranda Vermelho',
			birthday: '1960-04-05',
			avatar: '',
			location: 'Évora, Portugal',
		},
		rels: {
			parents: [],
			spouses: ['3'],
			children: ['1', '8'],
		},
	},
	{
		id: '3',
		data: {
			gender: 'M',
			first_name: 'José',
			last_name: 'Marin Navarro',
			birthday: '1953-08-21',
			avatar: '',
			location: 'Cartagena, Spain',
		},
		rels: {
			parents: ['4', '5'],
			spouses: ['2'],
			children: ['1', '8'],
		},
	},

	// Generation 2 - Grandparents
	{
		id: '4',
		data: {
			gender: 'F',
			first_name: 'Maria',
			last_name: 'Navarro Cervantes',
			birthday: '1919-09-28',
			avatar: '',
			location: 'Cartagena, Spain',
		},
		rels: {
			parents: ['6', '7'],
			spouses: ['5'],
			children: ['3'],
		},
	},
	{
		id: '5',
		data: {
			gender: 'M',
			first_name: 'Jose',
			last_name: 'Marin Pintado',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: [],
			spouses: ['4'],
			children: ['3'],
		},
	},

	// Generation 3 - Great-grandparents (Maria Navarro Cervantes' parents)
	{
		id: '6',
		data: {
			gender: 'F',
			first_name: 'Isabel',
			last_name: 'Cervantes Solano',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: ['10', '9'],
			spouses: ['7'],
			children: ['4'],
		},
	},
	{
		id: '7',
		data: {
			gender: 'M',
			first_name: 'Antonio',
			last_name: 'Navarro Aznar',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: ['12', '11'],
			spouses: ['6'],
			children: ['4'],
		},
	},

	// Generation 4 - Great-great-grandparents (Isabel's parents)
	{
		id: '9',
		data: {
			gender: 'F',
			first_name: 'Maria',
			last_name: 'Solano Conesa',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: [],
			spouses: ['10'],
			children: ['6'],
		},
	},
	{
		id: '10',
		data: {
			gender: 'M',
			first_name: 'Juan',
			last_name: 'Cervantes Sanchez',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: [],
			spouses: ['9'],
			children: ['6'],
		},
	},

	// Generation 4 - Great-great-grandparents (Antonio Navarro Aznar's parents)
	{
		id: '11',
		data: {
			gender: 'F',
			first_name: 'Francisca',
			last_name: 'Aznar',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: [],
			spouses: ['12'],
			children: ['7'],
		},
	},
	{
		id: '12',
		data: {
			gender: 'M',
			first_name: 'Antonio',
			last_name: 'Navarro',
			birthday: '',
			avatar: '',
			location: '',
		},
		rels: {
			parents: [],
			spouses: ['11'],
			children: ['7'],
		},
	},
];
