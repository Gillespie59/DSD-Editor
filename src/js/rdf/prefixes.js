export const PREFIXES = {
	rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
	rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
	owl: 'http://www.w3.org/2002/07/owl#',
	skos: 'http://www.w3.org/2004/02/skos/core#',
	xsd: 'http://www.w3.org/2001/XMLSchema#',
	dcterms: 'http://purl.org/dc/terms/',
	dc: 'http://purl.org/dc/elements/1.1/',
	qb: 'http://purl.org/linked-data/cube#',
	'sdmx-concept': 'http://purl.org/linked-data/sdmx/2009/concept#',
	'sdmx-dimension': 'http://purl.org/linked-data/sdmx/2009/dimension#',
	'sdmx-measure': 'http://purl.org/linked-data/sdmx/2009/measure#',
	'sdmx-attribute': 'http://purl.org/linked-data/sdmx/2009/attribute#',
	idim: 'http://id.insee.fr/meta/dimension/',
	iatt: 'http://id.insee.fr/meta/attribut/',
	icon: 'http://id.insee.fr/meta/concept/',
	imes: 'http://id.insee.fr/meta/mesure/',
	'icod-aq': 'http://id.insee.fr/codes/ageq65/',
	'icod-dep2012': 'http://id.insee.fr/codes/cog2012/departement/',
	'icod-sx': 'http://id.insee.fr/codes/sexe/',
	'icod-ta': 'http://id.insee.fr/codes/tactr/',
};

export const getURI = (NS, res) => `${PREFIXES[NS] || ''}${res}`;