/**
 * Family Tree Data
 * Contains all family member information for the family tree visualization
 */

interface FamilyMemberData {
	gender: 'M' | 'F';
	first_name: string;
	last_name: string;
	birthday: string;
	avatar: string;
	location: string;
}

interface FamilyMemberRels {
	parents: string[];
	spouses: string[];
	children: string[];
}

export interface FamilyMember {
	id: string;
	data: FamilyMemberData;
	rels: FamilyMemberRels;
}
