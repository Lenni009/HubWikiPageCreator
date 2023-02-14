function getSentinelData() {
	const sentinels = {
		low: [
			'Absent',
			'Few',
			'Infrequent',
			'Intermittent',
			'Irregular Patrols',
			'Isolated',
			'Limited',
			'Low',
			'Low Security',
			'Minimal',
			'Missing',
			'None',
			'None Present',
			'Not Present',
			'Remote',
			'Sparse',
			'Spread Thin',
		],
		high: [
			'Attentive',
			'Enforcing',
			'Ever-present',
			'Frequent',
			'Observant',
			'Regular Patrols',
			'Require Obedience',
			'Require Orthodoxy',
			'Unwavering',
		],
		aggressive: [
			'Aggressive',
			'Frenzied',
			'Hateful',
			'High Security',
			'Hostile Patrols',
			'Inescapable',
			'Malicious',
			'Threatening',
			'Zealous',
		]
	}
	return sentinels;
}

function getResourceData() {
	const resources = {
		'Copper': 'Cu',
		'Cadmium': 'Cd',
		'Emeril': 'Em',
		'Indium': 'In',
		'Activated Copper': 'Cu+',
		'Activated Cadmium': 'Cd+',
		'Activated Emeril': 'Em+',
		'Activated Indium': 'In+',
		'Ammonia': 'NH3',
		'Dioxite': 'CO2',
		'Paraffinium': 'Pf',
		'Phosphorus': 'P',
		'Pyrite': 'Py',
		'Uranium': 'U',
		'Silver': 'Ag',
		'Gold': 'Au',
		'Magnetised Ferrite': 'Fe++',
		'Sodium': 'Na',
		'Cobalt': 'Co',
		'Salt': 'NaCl',
		'Star Bulb': 'Sb',
		'Cactus Flesh': 'Cc',
		'Gamma Root': 'Gr',
		'Fungal Mould': 'Ml',
		'Frost Crystal': 'Fc',
		'Solanium': 'So',
		'Mordite': 'Mo',
		'Faecium': 'Fa',
		'Ancient Bones': 'Ab',
		'Salvageable Scrap': 'Sa',
		'Rusted Metal': 'Jn',
		'Basalt': 'B',
	}
	return resources;
};

function getDescriptorData() {
	const planetDescriptors = {
		Dead: {		// DEAD1, 2 ...
			suffix: [
				'Dead',
				'Empty',
				'Desolate',
				'Lifeless',
				'Forsaken',
				'Life-Incompatible',
				'Low Atmosphere',
				'Airless',
				'Abandoned',
			],
			none: [
				'Terraforming Catastrophe',
			]
		},
		Lush: {		// LUSH1, 2 ...
			suffix: [
				'Rainy',
				'Verdant',
				'Tropical',
				'Viridescent',
				'Grassy',
				'Temperate',
				'Humid',
				'Overgrown',
				'Flourishing',
				'Bountiful',
				'Paradise',		// UI_PARADISE_PLANET
			]
		},
		Exotic: {	// WIRECELLSBIOME1, CONTOURBIOME1, BONESPIREBIOME1, IRRISHELLSBIOME1, HYDROGARDENBIOME1, MSTRUCTBIOME1, BEAMSBIOME1, HEXAGONBIOME1, FRACTCUBEBIOME1, BUBBLEBIOME1, SHARDSBIOME1
			suffix: [
				'Shattered',
				'Fractured',
				'Fragmented',
				'Contoured',
				'Cabled',
				'Webbed',
				'Rattling',
				'Spined',
				'Skeletal',
				'Finned',
				'Bladed',
				'Shell-Strewn',
				'Fungal',
				'Sporal',
				'Capped',
				'Ossified',
				'Petrified',
				'Calcified',
				'Fissured',
				'Breached',
				'Hexagonal',
				'Plated',
				'Scaly',
				'Mechanical',
				'Metallic',
				'Metallurgic',
				'Bubbling',
				'Frothing',
				'Foaming',
				'Columned',
				'Sharded',
				'Pillared',
			],
			prefix: [
				'of Light',
			]
		},
		Glitch: {	// GLITCHBIOME1, 2, ...
			suffix: [
				'Crimson',
				'Malfunctioning',
				'Breached',
				'Infected',
				'[REDACTED]',
				'Glassy',
				'Thirsty',
				'Doomed',
				'Erased',
				'Temporary',
				'Corrupted',
			],
			none: [
				'Planetary Anomaly',
			]
		},
		Scorched: {	// SCORCHED1, 2 ...
			suffix: [
				'Charred',
				'Arid',
				'Scorched',
				'Hot',
				'Fiery',
				'Boiling',
				'High Temperature',
				'Torrid',
				'Incandescent',
				'Scalding',
			]
		},
		Frozen: {	// FROZEN1, 2 ...
			suffix: [
				'Frozen',
				'Icebound',
				'Arctic',
				'Glacial',
				'Sub-zero',
				'Icy',
				'Frostbound',
				'Freezing',
				'Hiemal',
				'Hyperborean',
			]
		},
		Irradiated: {	// IRRADIATED1, 2 ...
			suffix: [
				'Irradiated',
				'Radioactive',
				'Contaminated',
				'Nuclear',
				'Isotopic',
				'Decaying Nuclear',
				'Gamma-Intensive',
				'High Radio Source',
				'Supercritical',
				'High Energy',
			]
		},
		Toxic: {	// TOXIC1, 2 ...
			suffix: [
				'Toxic',
				'Poisonous',
				'Noxious',
				'Corrosive',
				'Acidic',
				'Caustic',
				'Acrid',
				'Blighted',
				'Miasmatic',
				'Rotting',
			]
		},
		Barren: {	// BARREN1, 2 ...
			suffix: [
				'Barren',
				'Desert',
				'Rocky',
				'Bleak',
				'Parched',
				'Abandoned',
				'Dusty',
				'Desolate',
				'Wind-swept',
			]
		},
		Marsh: {	// SWAMPBIOME1, 2 ...
			suffix: [
				'Marshy',
				'Swamp',
				'Tropical',
				'Foggy',
				'Misty',
				'Boggy',
				'Quagmire',
				'Hazy',
				'Cloudy',
				'Vapour',
				'Reeking',
				'Murky',
				'Damp',
			],
			none: [
				'Endless Morass',
			]
		},
		Volcanic: {	// LAVA1, 2 ...
			suffix: [
				'Lava',
				'Magma',
				'Erupting',
				'Volcanic',
				'Ash-Shrouded',
				'Ashen',
				'Tectonic',
				'Unstable',
				'Violent',
				'Molten',
				'Flame-Ruptured',
				'Basalt',
			],
			none: [
				'Imminent Core Detonation',
				'Obsidian Bead',
			]
		},
		MegaExotic: {	// REDBIOME1, GREENBIOME1, BLUEBIOME1, 2 ...
			suffix: [
				'Crimson',
				'Lost Red',
				'[REDACTED]',
				'Chromatic Fog',
				'Scarlet',
				'Blood',
				'Wine Dark',
				'Lost Green',
				'Doomed Jade',
				'Haunted Emeril',


				'Lost Blue',
				'Azure',
				'Cerulean',
				'Ultramarine',
			],
			none: [
				'Planetary Anomaly',
				'Stellar Corruption Detected',
				'Vermillion Globe',
				'Vile Anomaly',
				'Toxic Anomaly',
				'Deathly Green Anomaly',
				'Harsh Blue Globe',
				'Frozen Anomaly',
			]
		},
		Water: {	// WATERWORLD1, 2 ...
			suffix: [
				'Drowning',
				'Oceanic',
				'Tidal',
				'Waterlocked',
				'Aquatic',
				'Marine',
			],
			none: [
				'Waterworld',
				'Endless Seas',
			]
		},
		Infested: {	// INFESTED*1, 2 ...
			suffix: [
				'Infested',
				'Worm-ridden',
				'Tainted',
				'Mutated',
				'Corrupted',
			],
			none: [
				'Infested Paradise',
				'Toxic Horror',
				'Boiling Doom',
				'Radioactive Abomination',
				'Icy Abhorrence',
				'Xeno-Colony',
				'Caustic Nightmare',
				'Fiery Dreadworld',
				'Frozen Hell',
				'Infected Dustbowl',
				'The Nest',
				'Terrorsphere',
			]
		}
	}
	return planetDescriptors;
}


(() => {
	const planetDatalists = {
		weatherData: [
			'Tropical Storms',
			'Occasional Boiling Fog',
			'Superheated Mists',
			'Painful Mist',
			'Infrequent Torrents',
			'Oppressive',
			'Soggy Danger',
			'Sticky Heat',
			'Clammy Menace',
			'Hazardous Moisture',
			'Gentle Mist',
			'Humid',
			'Tropical Winds',
			'Warm Fog',
			'Temperate Murk',
			'Mild Damp',
			'Warm Dewdrops',
			'Tepid Damp',
			'Sweaty Drizzle',
			'Muggy Haze',
			'Death Fog',
			'Sultry Disaster',
			'Cataclysmic Monsoons',
			'Mists of Annihilation',
			'All-Consuming Fog',
			'Liquid Hell',
			'Storms of Desolation',
			'Melting Deluges',
			'Boiling Catastrophe',
			'Damp Misery',
			'Heated Gas Pockets',
			'Occasional Firestorms',
			'Incendiary Winds',
			'Unpredictable Conflagrations',
			'Drifting Firestorms',
			'Pillars of Flame',
			'Magma Geysers',
			'Plumes of Fire',
			'Molten Rain',
			'Tectonic Storms',
			'Smothering Ash',
			'Sulphurous Haze',
			'Ash Wisps',
			'Drifting Smog',
			'Cinderfalls',
			'Ash Plumes',
			'Choking Ash',
			'Burning Mists',
			'Sulfur Fumes',
			'Enveloping Ash',
			'Ashen Winds',
			'Frequent Firestorms',
			'Walls of Flame',
			'Clouds of Fire',
			'Ashen Destruction',
			'Magma Rain',
			'Basalt Hail',
			'Explosive Gas Eruptions',
			'Lethal Ash Storms',
			'Sulphurous Inferno',
			'Colossal Firestorms',
			'Obsidian Doom',
			'Infrequent Heat Storms',
			'Rare Firestorms',
			'Superheated Gas Pockets',
			'Wandering Hot Spots',
			'Atmospheric Heat Instabilities',
			'Direct Sunlight',
			'Heated Atmosphere',
			'Occasional Ash Storms',
			'Dangerously Hot',
			'Burning Air',
			'Parched',
			'Overly Warm',
			'Sunny',
			'Dehydrated',
			'Unending Sunlight',
			'Sweltering',
			'Extreme Heat',
			'Burning Gas Clouds',
			'Intense Heat',
			'Superheated Air',
			'Scalding Heat',
			'Inferno Winds',
			'Firestorms',
			'Combustible Dust',
			'Incendiary Dust',
			'Self-Igniting Storms',
			'Howling Blizzards',
			'Intense Cold',
			'Icy Tempests',
			'Supercooled Storms',
			'Raging Snowstorms',
			'Ice Storms',
			'Deep Freeze',
			'Roaring Ice Storms',
			'Frequent Blizzards',
			'Hazardous Whiteouts',
			'Frozen Clouds',
			'Occasional Snowfall',
			'Infrequent Blizzards',
			'Outbreaks of Frozen Rain',
			'Harsh, Icy Winds',
			'Drifting Snowstorms',
			'Migratory Blizzards',
			'Icy Blasts',
			'Wandering Frosts',
			'Powder Snow',
			'Wintry',
			'Snowy',
			'Icy',
			'Crisp',
			'Frost',
			'Freezing',
			'Permafrost',
			'Frequent Toxic Floods',
			'Toxic Superstorms',
			'Acidic Deluges',
			'Corrosive Cyclones',
			'Caustic Floods',
			'Corrosive Storms',
			'Torrential Acid',
			'Noxious Gas Storms',
			'Toxic Monsoons',
			'Bone-Stripping Acid Storms',
			'Corrosive Rainstorms',
			'Pouring Toxic Rain',
			'Occasional Acid Storms',
			'Atmospheric Corruption',
			'Poison Flurries',
			'Toxic Outbreaks',
			'Acidic Dust Pockets',
			'Passing Toxic Fronts',
			'Caustic Winds',
			'Alkaline Cloudbursts',
			'Dangerously Toxic Rain',
			'Corrosive Sleet Storms',
			'Lethal Atmosphere',
			'Infrequent Toxic Drizzle',
			'Acid Rain',
			'Toxic Clouds',
			'Poison Rain',
			'Choking Clouds',
			'Caustic Moisture',
			'Poisonous Gas',
			'Stinging Atmosphere',
			'Toxic Damp',
			'Corrosive Damp',
			'Stinging Puddles',
			'Extreme Radioactivity',
			'Irradiated Thunderstorms',
			'Planet-Wide Radiation Storms',
			'Extreme Atmospheric Decay',
			'Roaring Nuclear Wind',
			'Gamma Cyclones',
			'Contaminated Squalls',
			'Extreme Thermonuclear Fog',
			'Frequent Particle Eruptions',
			'Enormous Nuclear Storms',
			'Particulate Winds',
			'Energetic Storms',
			'Irradiated Downpours',
			'Radioactive Dust Storms',
			'Volatile Windstorms',
			'Occasional Radiation Outbursts',
			'Irradiated Storms',
			'Unstable Fog',
			'Reactive Rain',
			'Radioactive Humidity',
			'Radioactive Damp',
			'Irradiated Winds',
			'Contaminated Puddles',
			'Volatile Winds',
			'Unstable Atmosphere',
			'Gamma Dust',
			'Nuclidic Atmosphere',
			'Boiling Superstorms',
			'Intense Heatbursts',
			'Superheated Rain',
			'Boiling Monsoons',
			'Broiling Humidity',
			'Painfully Hot Rain',
			'Torrential Heat',
			'Blistering Floods',
			'Scalding Rainstorms',
			'Torrid Deluges',
			'Boiling Puddles',
			'Sweltering Damp',
			'Superheated Drizzle',
			'Dangerously Hot Fog',
			'Choking Humidity',
			'Mostly Calm',
			'Occasional Scalding Cloudbursts',
			'Usually Mild',
			'Blistering Damp',
			'Lethal Humidity Outbreaks',
			'Temperate',
			'Light Showers',
			'Mild Rain',
			'Refreshing Breeze',
			'Pleasant',
			'Balmy',
			'Mellow',
			'Beautiful',
			'Blissful',
			'Billowing Dust Storms',
			'Choking Sandstorms',
			'Hazardous Temperature Extremes',
			'Lung-Burning Night Wind',
			'Extreme Wind Blasting',
			'Planetwide Desiccation',
			'Sand Blizzards',
			'Howling Gales',
			'Dead Wastes',
			'Occasional Sandstorms',
			'Infrequent Dust Storms',
			'Intermittent Wind Blasting',
			'Parched Sands',
			'Sporadic Grit Storms',
			'Dust-Choked Winds',
			'Highly Variable Temperatures',
			'Blasted Atmosphere',
			'Freezing Night Winds',
			'Ceaseless Drought',
			'Moistureless',
			'Baked',
			'Sterile',
			'Unclouded Skies',
			'Dry Gusts',
			'Withered',
			'Icy Nights',
			'Perfectly Clear',
			'Absent',
			'No Atmosphere',
			'Utterly Still',
			'Peaceful',
			'Eerily Calm',
			'Airless',
			'Silent',
			'Inert',
			'Clear',
			'Invisible Mist',
			'Internal Rain',
			'Lost Clouds',
			'Crimson Heat',
			'Winds of Glass',
			'Thirsty Clouds',
			'Obsidian Heat',
			'Memories of Frost',
			'Haunted Frost',
			'Indetectable Burning',
			'[REDACTED]',
			'Anomalous',
			'Burning Crimson',
			'Scarlet Rain',
			'Fevered Clouds',
			'Carmine Winds',
			'Red Mist',
			'Flaming Hail',
			'Vermillion Storms',
			'Rain of Atlas',
			'Angered Clouds',
			'Blood Rain',
			'Bilious Storms',
			'Deadly Pressure Variations',
			'Harsh Toxic Wind',
			'Corrupted Blood',
			'Infinite Toxic Mist',
			'Echoes of Acid',
			'Poison Cyclones',
			'Inescapable Toxins',
			'Clouds of Haunted Green',
			'Invisible Jade Winds',
			'Frozen Mists',
			'Electric Rain',
			'Azure Storms',
			'Extreme Low Pressure',
			'All-Consuming Cold',
			'Winds from Beyond',
			'Unfathomable Storms',
			'Unimaginable Blue',
			'Ultramarine Wind',
			'Inverted Superstorms',
			'Coastal Storms'
		],
		rarity: [
			'Abundant',
			'High',
			'Ample',
			'Frequent',
			'Full',
			'Generous',
			'Average',
			'Regular',
			'Common',
			'Typical',
			'Ordinary',
			'Occasional',
			'Low',
			'Scarce',
			'Infrequent',
			'Rare',
			'Limited',
			'Sporadic',
			'None',
			'Deficient',
			'Undetected',
			'Lacking',
			'Absent',
			'Nonexistent',
			'Unusual',
			'Lost',
			'Displaced',
			'From Elsewhere',
			'Uprooted',
			'Misplaced',
			'Forfeited',
			'Between Worlds',
			'Infected',
			'Diseased',
			'Twisted',
			'Screaming',
			'Viral',
			'Invasive',
			'Bountiful',
			'Copious',
			'Rich',
			'Numerous',
			'Moderate',
			'Fair',
			'Medium',
			'Intermittent',
			'Uncommon',
			'Few',
			'Sparse',
			'Empty',
			'Not Present',
			'Devoid',
			'Barren',
		],
		terrainData: [
			'Limestone',
			'Sedimentary',
			'Crystalline',
			'Igneous',
			'Metamorphic',
			'Heavily Metallic',
			'Bombarded',
			'Mineral-Rich',
			'Oxidised',
			'Foliated',
			'Porous',
			'Impermeable',
			'Sponge-like',
			'Dense',
			'Non-porous',
			'Very thin mantle',
			'Anti-Gravitational',
			'Kinematic',
			'Animated',
			'Dynamic',
			'Superconductive',
			'Electro-magnetic',
			'Exotic',
			'Algebraic',
			'Electro-dynamic',
			'Carved by ancient rivers',
			'Riven',
			'Deep Clefts',
			'Rift Valleys',
			'Post-Glacial',
			'Deep Salt Layers',
			'Gorged',
			'Bisected',
			'Upland Valleys',
			'Mountainous',
			'Montane',
			'Tectonic Collisions',
			'Eroded Valleys',
			'Structural Valleys',
			'Sloping',
			'Rocky',
			'Towering Uplands',
			'Hilly',
			'Uneven Mineral Distribution',
			'Undulating',
			'Rolling Downs',
			'Craggy',
			'Rugged',
			'Ultra-Magnetic',
			'Anomalous',
			'Unstable',
			'Unnatural',
			'Abhorrent',
			'Aberrant',
			'Uncanny',
			'Divergent',
			'Unorthodox',
			'Irregular',
			'Heteroclite',
			'Partially Organic',
			'Recycled',
			'Multi-Dimensional',
			'Rock Spires',
			'Cratered',
			'Extensive Meteor Impacts',
			'Frequent Calderas',
			'Deep Magma Chambers',
			'Basalt Plumes',
			'Volcanic',
			'Shaped by Comets',
			'Blistered',
			'Extensive Underground Caverns',
			'Ancient Tunnels',
			'Deep Hollows',
			'Bored-Out Internals',
			'Cavernous',
			'Vaulted',
			'Lurking Voids',
			'Unnatural Crevasses',
			'Deep Chasm',
			'Sunken Fissures',
			'Shaped by Giants',
			'Sunked Colossi',
			'Meandering Faults',
			'Creeping Fissures',
			'Snaking Protrusions',
			'Lurking Capstones',
			'Buried Rifts',
			'Tectonic Skeletons',
			'Monolithic',
			'Curiously Regular',
			'Synthetic',
			'Fabricated',
			'Pillared',
			'Rocky Spires',
			'Stone Monoliths',
			'Volcanic Stacks',
			'Geometric',
			'Polygonal',
			'Mathematic',
			'Computative',
			'Latticed',
			'Artificially Structured',
			'Alarmingly Symmetric'
		]
	}

	planetDatalists.sentinels = new Array;
	const sentinels = getSentinelData();
	for (const level in sentinels) {
		planetDatalists.sentinels.push(...sentinels[level]);
	}

	const descriptors = new Set()
	const planetDescriptors = getDescriptorData();
	for (const biome in planetDescriptors) {
		for (const list in planetDescriptors[biome]) {
			planetDescriptors[biome][list].forEach(descriptor => descriptors.add(descriptor));
		}
	}

	planetDatalists.planetDescriptors = Array.from(descriptors);
	planetDatalists.resources = Object.keys(getResourceData());

	datalists(planetDatalists);
})();