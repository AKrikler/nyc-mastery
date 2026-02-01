// 1. DATA CUSTOMIZATION TABLE
// Add any neighborhood slug here to change its specific Anchor and Food names.
// If a neighborhood isn't listed here, it will default to "Local Landmark" and "Local Specialty".
const neighborhoodCustomData = {
    // --- MANHATTAN ---
    "alphabet-city-manhattan": { anchor: "Tompkins Square Park", food: "7th Street Burger" },
    "battery-park-city-manhattan": { anchor: "Brookfield Place", food: "Le District" },
    "central-park-manhattan": { anchor: "Bethesda Terrace", food: "Loeb Boathouse" },
    "chelsea-manhattan": { anchor: "The High Line", food: "Chelsea Market" },
    "chinatown-manhattan": { anchor: "Columbus Park", food: "Nom Wah Tea Parlor" },
    "civic-center-manhattan": { anchor: "City Hall Park", food: "Whiskey Red's" },
    "east-harlem-manhattan": { anchor: "Graffiti Hall of Fame", food: "Patsy's Pizzeria" },
    "east-village-manhattan": { anchor: "St. Mark's Place", food: "Katz's Delicatessen" },
    "financial-district-manhattan": { anchor: "The Charging Bull", food: "Joe's Pizza" },
    "flatiron-manhattan": { anchor: "Flatiron Building", food: "Eataly" },
    "gramercy-manhattan": { anchor: "Gramercy Park", food: "Pete's Tavern" },
    "greenwich-village-manhattan": { anchor: "Washington Square Park", food: "Joe's Pizza (Village)" },
    "harlem-manhattan": { anchor: "Apollo Theater", food: "Sylvia's Soul Food" },
    "hells-kitchen-manhattan": { anchor: "Intrepid Museum", food: "Gotham West Market" },
    "inwood-manhattan": { anchor: "Inwood Hill Park", food: "ChocNYC" },
    "kips-bay-manhattan": { anchor: "Kips Bay Cinema", food: "Sarge's Delicatessen" },
    "little-italy-manhattan": { anchor: "Mulberry Street", food: "Ferrara Bakery" },
    "lower-east-side-manhattan": { anchor: "Tenement Museum", food: "Russ & Daughters" },
    "meatpacking-district-manhattan": { anchor: "Whitney Museum", food: "Old Homestead Steakhouse" },
    "midtown-manhattan": { anchor: "Empire State Building", food: "Grand Central Oyster Bar" },
    "morningside-heights-manhattan": { anchor: "Cathedral of St. John the Divine", food: "Tom's Restaurant" },
    "murray-hill-manhattan": { anchor: "Morgan Library", food: "Sons of Thunder" },
    "noho-manhattan": { anchor: "The Public Theater", food: "Levain Bakery (NoHo)" },
    "nolita-manhattan": { anchor: "Old St. Patrick's Cathedral", food: "Prince Street Pizza" },
    "roosevelt-island-manhattan": { anchor: "Four Freedoms Park", food: "Granny Annie's" },
    "soho-manhattan": { anchor: "Cast Iron District", food: "Dominique Ansel Bakery" },
    "stuyvesant-town-manhattan": { anchor: "Stuyvesant Cove Park", food: "Ess-a-Bagel" },
    "tribeca-manhattan": { anchor: "Tribeca Film Center", food: "Bubby's" },
    "upper-east-side-manhattan": { anchor: "The Metropolitan Museum of Art", food: "JG Melon" },
    "upper-west-side-manhattan": { anchor: "American Museum of Natural History", food: "Zabar's" },
    "washington-heights-manhattan": { anchor: "The Cloisters", food: "Malecon" },
    "west-village-manhattan": { anchor: "Stonewall Inn", food: "Magnolia Bakery" },
    "randals-wards-island-manhattan": { anchor: "Icahn Stadium", food: "Randall’s Island BBQ Area" },
    "mill-rock-park-manhattan": { anchor: "Mill Rock Park", food: "Picnic at the Overlook" }, // Uninhabited/Park
    "west-harlem-manhattan": { anchor: "Riverbank State Park", food: "Dinosaur Bar-B-Que" },
    "hamilton-heights-manhattan": { anchor: "City College of New York (CCNY)", food: "The Grange" },
    "carnegie-hill-manhattan": { anchor: "Cooper Hewitt Museum", food: "Sfoglia" },
    "garment-district-manhattan": { anchor: "The Needle and Button Statue", food: "Keens Steakhouse" },
    "hudson-yards-manhattan": { anchor: "The Vessel", food: "Mercado Little Spain" },
    "midtown-east-manhattan": { anchor: "United Nations Headquarters", food: "The Smith" },
    "flatiron-district-manhattan": { anchor: "Madison Square Park", food: "Shake Shack (The Original)" },
    "two-bridges-manhattan": { anchor: "Manhattan Bridge Viewpoint", food: "Golden Diner" },
    "liberty-island-manhattan": { anchor: "Statue of Liberty", food: "Liberty Island Cafe" },
    "ellis-island-manhattan": { anchor: "Ellis Island Museum", food: "Ellis Island Snack Bar" },
    "governors-island-manhattan": { anchor: "The Hills", food: "Island Oyster" },
    "hudson-square-manhattan": { anchor: "The Ear Inn", food: "Dominique Ansel Workshop" },
    "sutton-place-manhattan": { anchor: "Sutton Park Overlook", food: "Neary's" },
    "manhattanville-manhattan": { anchor: "Columbia University Manhattanville", food: "Dinosaur Bar-B-Que" },
    "marble-hill-manhattan": { anchor: "Marble Hill Metro-North Station", food: "Landmark Diner" },

    // --- BROOKLYN ---
    "bath-beach-brooklyn": { anchor: "Bensonhurst Park", food: "Tom's Coney Island" },
    "bedford-stuyvesant-brooklyn": { anchor: "Restoration Plaza", food: "Peaches HotHouse" },
    "bensonhurst-brooklyn": { anchor: "Milestone Park", food: "L&B Spumoni Gardens" },
    "bergen-beach-brooklyn": { anchor: "McGuire Fields", food: "Mary’s Coffee Shop" },
    "boerum-hill-brooklyn": { anchor: "Invisible Dog Art Center", food: "Mile End Delicatessen" },
    "borough-park-brooklyn": { anchor: "Dag Hammarskjold Park", food: "G Gottlieb" },
    "brighton-beach-brooklyn": { anchor: "Brighton Beach Boardwalk", food: "Tatiana" },
    "brooklyn-heights-manhattan": { anchor: "Brooklyn Heights Promenade", food: "Lucali" }, // GeoJSON Error: Slug is Manhattan, Place is Brooklyn
    "brownsville-brooklyn": { anchor: "Betsy Head Park", food: "Fisherman's Cove" },
    "bushwick-brooklyn": { anchor: "The Bushwick Collective", food: "Roberta's" },
    "canarsie-brooklyn": { anchor: "Canarsie Pier", food: "Original Pizza" },
    "carroll-gardens-brooklyn": { anchor: "Carroll Park", food: "Lucali" },
    "clinton-hill-brooklyn": { anchor: "Pratt Institute", food: "Otway" },
    "cobble-hill-brooklyn": { anchor: "Cobble Hill Park", food: "La Vara" },
    "columbia-street-waterfront-district-brooklyn": { anchor: "Brooklyn Greenway", food: "Popina" },
    "coney-island-brooklyn": { anchor: "The Cyclone", food: "Nathan's Famous" },
    "crown-heights-brooklyn": { anchor: "Brooklyn Museum", food: "The Islands" },
    "ditmas-park-brooklyn": { anchor: "Cortelyou Road", food: "The Farm on Adderley" },
    "downtown-brooklyn-brooklyn": { anchor: "Brooklyn Borough Hall", food: "Junior's" },
    "dumbo-brooklyn": { anchor: "Jane's Carousel", food: "Grimaldi's Pizzeria" },
    "dyker-heights-brooklyn": { anchor: "Dyker Heights Lights", food: "Lioni Italian Heroes" },
    "east-flatbush-brooklyn": { anchor: "Holy Cross Cemetery", food: "Footprints Cafe" },
    "east-new-york-brooklyn": { anchor: "Shirley Chisholm Park", food: "C&J Restaurant" },
    "flatbush-brooklyn": { anchor: "Kings Theatre", food: "Peppa's Jerk Chicken" },
    "flatlands-brooklyn": { anchor: "Wyckoff House Museum", food: "El Chavo" },
    "floyd-bennett-field-brooklyn": { anchor: "Hangar B", food: "Aviator Sports Center" },
    "fort-greene-brooklyn": { anchor: "Fort Greene Park", food: "Miss Ada" },
    "fort-hamilton-brooklyn": { anchor: "Harbor Defense Museum", food: "Lock Yard" },
    "georgetown-brooklyn": { anchor: "Lindower Park", food: "Georgetown Diner" },
    "gerritsen-beach-brooklyn": { anchor: "Gerritsen Beach Park", food: "Tamaqua Bar" },
    "gowanus-brooklyn": { anchor: "The Royal Palms", food: "Pig Beach" },
    "gravesend-brooklyn": { anchor: "Lady Moody Triangle", food: "John’s Deli" },
    "greenpoint-brooklyn": { anchor: "McCarren Park", food: "Peter Pan Donut" },
    "greenwood-brooklyn": { anchor: "Green-Wood Cemetery", food: "Baked in Brooklyn" },
    "homecrest-brooklyn": { anchor: "Kelly Park", food: "Tacos El Noa Noa" },
    "kensington-brooklyn": { anchor: "Ocean Parkway", food: "Wheated" },
    "manhattan-beach-brooklyn": { anchor: "Manhattan Beach Park", food: "Picnic at the Beach" },
    "marine-park-brooklyn": { anchor: "Marine Park Salt Marsh", food: "Michael’s of Brooklyn" },
    "midwood-brooklyn": { anchor: "Brooklyn College", food: "Di Fara Pizza" },
    "mill-basin-brooklyn": { anchor: "Mill Basin Inlet", food: "La Villa Pizzeria" },
    "navy-yard-brooklyn": { anchor: "Building 92", food: "Russ & Daughters" },
    "ocean-hill-brooklyn": { anchor: "Callahan-Kelly Park", food: "Daily Press" },
    "ocean-parkway-brooklyn": { anchor: "Bikeway Path", food: "Solly’s" },
    "park-slope-brooklyn": { anchor: "Grand Army Plaza", food: "al di la Trattoria" },
    "prospect-heights-brooklyn": { anchor: "Brooklyn Public Library", food: "Olmsted" },
    "prospect-lefferts-gardens-brooklyn": { anchor: "Prospect Park Lake", food: "Peppa's" },
    "prospect-park-brooklyn": { anchor: "The Picnic House", food: "Smorgasburg (Seasonal)" },
    "prospect-park-south-brooklyn": { anchor: "Victorian Flatbush Houses", food: "The Oxbow Tavern" },
    "red-hook-brooklyn": { anchor: "Valentine Jr. Park", food: "Hometown Bar-B-Que" },
    "sheepshead-bay-brooklyn": { anchor: "Sheepshead Bay Footbridge", food: "Roll-N-Roaster" },
    "sunset-park-brooklyn": { anchor: "Industry City", food: "Tacos Matamoros" },
    "vinegar-hill-brooklyn": { anchor: "Commandant's House", food: "Vinegar Hill House" },
    "west-jamaica-bay-islands-brooklyn": { anchor: "Jamaica Bay Wildlife Refuge", food: "Picnic in the Wild" },
    "williamsburg-brooklyn": { anchor: "Domino Park", food: "Peter Luger Steak House" },
    "windsor-terrace-brooklyn": { anchor: "Green-Wood Gate", food: "East Wind Snack Shop" },
    "wingate-brooklyn": { anchor: "Wingate Park", food: "Kingston Bake Shop" },

    // --- THE BRONX ---
    "baychester-bronx": { anchor: "Seton Falls Park", food: "Gun Hill Brewery" },
    "bedford-park-bronx": { anchor: "Lehman College", food: "Jolly Goat Coffee" },
    "belmont-bronx": { anchor: "Arthur Avenue Retail Market", food: "Enzo's of Arthur Ave" },
    "bronx-park-bronx": { anchor: "New York Botanical Garden", food: "Bronx Zoo Cafe" },
    "castle-hill-bronx": { anchor: "Castle Hill YMCA", food: "Jimmy’s Grand Cafe" },
    "city-island-bronx": { anchor: "City Island Nautical Museum", food: "Sammy's Fish Box" },
    "clason-point-bronx": { anchor: "Soundview Ferry Terminal", food: "Clason Point Ice Cream" },
    "co-op-city-bronx": { anchor: "Bay Plaza Shopping Center", food: "Dreiser Loop Deli" },
    "concourse-bronx": { anchor: "Yankee Stadium", food: "Feeding Tree" },
    "country-club-bronx": { anchor: "Pelham Bay View", food: "Villa Barone" },
    "east-tremont-bronx": { anchor: "Tremont Park", food: "180th St Grill" },
    "eastchester-bronx": { anchor: "Seton Falls Park North", food: "Gino’s Pastry" },
    "fieldston-bronx": { anchor: "Manhattan College", food: "Lloyd's Carrot Cake" },
    "fordham-bronx": { anchor: "Fordham University", food: "Pugsley's Pizza" },
    "hart-island-bronx": { anchor: "Peace Monument", food: "Waterfront Picnic Area" },
    "high-bridge-bronx": { anchor: "The High Bridge", food: "Court Deli" },
    "hunts-point-bronx": { anchor: "Barretto Point Park", food: "Hunts Point Fish Market" },
    "kingsbridge-bronx": { anchor: "Kingsbridge Armory", food: "Garden Gourmet" },
    "longwood-bronx": { anchor: "Bill Rainey Park", food: "Mexicocina" },
    "melrose-bronx": { anchor: "Bronx County Courthouse", food: "Court Deli" },
    "morris-heights-bronx": { anchor: "Roberto Clemente State Park", food: "Pizzas & Cream" },
    "morris-park-bronx": { anchor: "Albert Einstein College", food: "Patricia’s of Morris Park" },
    "mott-haven-bronx": { anchor: "The Clock Tower", food: "Charlie’s Bar & Kitchen" },
    "north-riverdale-bronx": { anchor: "College of Mount Saint Vincent", food: "Beccofino" },
    "norwood-bronx": { anchor: "Williamsbridge Oval", food: "Jerome’s" },
    "parkchester-bronx": { anchor: "Parkchester Oval Fountain", food: "Step In Restaurant" },
    "pelham-bay-bronx": { anchor: "Pelham Bay Library", food: "George’s Restaurant" },
    "pelham-bay-park-bronx": { anchor: "Orchard Beach", food: "Beach Pavilion" },
    "pelham-gardens-bronx": { anchor: "Jacobi Medical Center", food: "Sal's Pizza" },
    "port-morris-bronx": { anchor: "Port Morris Tile Firehouse", food: "Bronx Brewery" },
    "rikers-island-bronx": { anchor: "Rikers Bridge", food: "Main Commissary" },
    "riverdale-bronx": { anchor: "Wave Hill", food: "Lloyd's Carrot Cake" },
    "soundview-bronx": { anchor: "Soundview Park", food: "Lechonera La Piraña" },
    "south-bronx-bronx": { anchor: "The Hub", food: "Xochimilco" },
    "spuyten-duyvil-bronx": { anchor: "Spuyten Duyvil Shorefront Park", food: "Riverdale Diner" },
    "throggs-neck-bronx": { anchor: "Maritime College", food: "Ice House" },
    "tremont-bronx": { anchor: "Crotona Park", food: "Ferry Point" },
    "unionport-bronx": { anchor: "Haviland Playground", food: "Golden Palace" },
    "university-heights-bronx": { anchor: "Hall of Fame for Great Americans", food: "Libertad" },
    "van-cortlandt-park-bronx": { anchor: "Van Cortlandt House Museum", food: "Golf Course Clubhouse" },
    "van-nest-bronx": { anchor: "Bronx River Park", food: "Taverna di Bacco" },
    "wakefield-bronx": { anchor: "Wakefield Playground", food: "Ali's Roti Shop" },
    "west-farms-bronx": { anchor: "Bronx River Art Center", food: "Tony’s" },
    "westchester-heights-bronx": { anchor: "Owen Dolen Park", food: "The Munchies" },
    "williamsbridge-bronx": { anchor: "Gun Hill Road Station", food: "Warung" },
    "woodlawn-bronx": { anchor: "Woodlawn Cemetery", food: "Rambling House" },

    // --- QUEENS ---
    "arverne-queens": { anchor: "Arverne By The Sea", food: "Dredsurfer Grill" },
    "astoria-heights-queens": { anchor: "St. Michael's Cemetery", food: "L'Incontro" },
    "astoria-queens": { anchor: "Museum of Moving Image", food: "Taverna Kyclades" },
    "auburndale-queens": { anchor: "Cunningham Park Trail", food: "A&J Kitchen" },
    "bay-terrace-queens": { anchor: "Bay Terrace Shopping Center", food: "Ben's Kosher Deli" },
    "bayside-queens": { anchor: "Fort Totten Park", food: "Bourbon Street" },
    "belle-harbor-queens": { anchor: "Rockaway Park Walk", food: "Harbor Light" },
    "bellerose-queens": { anchor: "Queens County Farm Museum", food: "Bellerose Diner" },
    "blissville-queens": { anchor: "Greenpoint Ave Bridge", food: "The Jar" },
    "breezy-point-queens": { anchor: "Breezy Point Tip", food: "Kennedy's" },
    "briarwood-queens": { anchor: "Archbishop Molloy", food: "Gaby's Pizza" },
    "broad-channel-queens": { anchor: "Jamaica Bay Wildlife Refuge", food: "Ruffle Bar" },
    "cambria-heights-queens": { anchor: "Cambria Playground", food: "The Door" },
    "college-point-queens": { anchor: "Hermon A. MacNeil Park", food: "Cascarino’s" },
    "corona-queens": { anchor: "Lemon Ice King of Corona", food: "Tortas Neza" },
    "douglaston-little-neck-queens": { anchor: "Alley Pond Park", food: "Giardino" },
    "east-elmhurst-queens": { anchor: "Vaughan Playground", food: "Buccaneer Diner" },
    "east-jamaica-bay-islands-queens": { anchor: "Dubos Point", food: "Picnic at the Bay" },
    "elmhurst-queens": { anchor: "Queens Center Mall", food: "Chao Thai" },
    "far-rockaway-queens": { anchor: "Far Rockaway Beach", food: "Ceviche Bar" },
    "floral-park-queens": { anchor: "North Floral Park", food: "Patrizia's" },
    "flushing-meadows-corona-park-queens": { anchor: "The Unisphere", food: "Queens Night Market" },
    "flushing-queens": { anchor: "Queens Botanical Garden", food: "New World Mall" },
    "forest-hills-gardens-queens": { anchor: "Station Square", food: "Dirty Pierre's" },
    "forest-hills-queens": { anchor: "Forest Hills Stadium", food: "Eddie's Sweet Shop" },
    "fort-tilden-queens": { anchor: "Battery Road", food: "The Riis Park Beach Bazaar" },
    "fresh-meadows-queens": { anchor: "St. John's University", food: "Peking Soo" },
    "glen-oaks-queens": { anchor: "Long Island Jewish Medical", food: "Glen Oaks Diner" },
    "glendale-queens": { anchor: "The Shops at Atlas Park", food: "Zum Stammtisch" },
    "hillcrest-queens": { anchor: "Utopia Playground", food: "Pippo's Pizza" },
    "hollis-queens": { anchor: "Hollis Playground", food: "Roti Shop" },
    "holliswood-queens": { anchor: "Grand Central Pkwy Overlook", food: "Matsuya" },
    "howard-beach-queens": { anchor: "Charles Park", food: "New Park Pizza" },
    "hunters-point-queens": { anchor: "Gantry Plaza", food: "Casa Enrique" },
    "jackson-heights-queens": { anchor: "Diversity Plaza", food: "Angel Indian" },
    "jacob-riis-park-queens": { anchor: "Riis Bathhouse", food: "Riis Point" },
    "jamaica-estates-queens": { anchor: "Cunningham Park East", food: "Filippo’s" },
    "jamaica-hills-queens": { anchor: "Captain Tilly Park", food: "Sagar Chinese" },
    "jamaica-queens": { anchor: "King Manor Museum", food: "Sybil's Bakery" },
    "john-f-kennedy-international-airport-queens": { anchor: "TWA Hotel", food: "The Sun and the Moon" },
    "kew-gardens-hills-queens": { anchor: "Cedar Grove Playground", food: "Main Street Bagels" },
    "kew-gardens-queens": { anchor: "Forest Park", food: "Dani's House of Pizza" },
    "la-guardia-airport-queens": { anchor: "Terminal B Landmark", food: "Bisoux" },
    "laurelton-queens": { anchor: "Laurelton Playground", food: "The Smokehouse" },
    "malba-queens": { anchor: "Malba Drive View", food: "Whitestone Diner (Nearby)" },
    "maspeth-queens": { anchor: "Memorial Plaza", food: "O'Neill's" },
    "middle-village-queens": { anchor: "Juniper Valley Park", food: "Carlo's" },
    "murray-hill-queens": { anchor: "Murray Hill LIRR", food: "H-Mart Food Court" },
    "neponsit-queens": { anchor: "Neponsit Beach", food: "Pico" },
    "oakland-gardens-queens": { anchor: "Queensborough Community College", food: "Seol Hwa" },
    "ozone-park-queens": { anchor: "Aqueduct Racetrack", food: "Don Peppe" },
    "pomonok-queens": { anchor: "Electchester Shopping Center", food: "Gino’s" },
    "queens-village-queens": { anchor: "Belmont Park", food: "Hillside Diner" },
    "rego-park-queens": { anchor: "Rego Center", food: "Cheburechnaya" },
    "richmond-hill-queens": { anchor: "Buddy Monument", food: "Sybil's" },
    "ridgewood-queens": { anchor: "Vander Ende-Onderdonk House", food: "Rolo's" },
    "rochdale-queens": { anchor: "Baisley Pond Park", food: "Golden Krust" },
    "rockaway-beach-queens": { anchor: "90th Street Surf", food: "Tacoway Beach" },
    "rockaway-park-queens": { anchor: "116th Street Shopping", food: "Uma's" },
    "rosedale-queens": { anchor: "Brookville Park", food: "G’s Caribbean" },
    "roxbury-queens": { anchor: "Roxbury Barn", food: "The Wharf" },
    "south-ozone-park-queens": { anchor: "Rockaway Blvd", food: "Sugar's" },
    "springfield-gardens-queens": { anchor: "Baisley Park South", food: "The Door" },
    "st-albans-queens": { anchor: "St. Albans Park", food: "Island Taste" },
    "sunnyside-queens": { anchor: "Sunnyside Arch", food: "Sotto le Stelle" },
    "utopia-queens": { anchor: "Utopia Parkway", food: "Brother's Italian" },
    "whitestone-queens": { anchor: "Francis Lewis Park", food: "Cascarino's" },
    "woodhaven-queens": { anchor: "Neir's Tavern", food: "Sal's Pizza" },
    "woodside-queens": { anchor: "Sgt. Collins Park", food: "Donovan's Pub" },
};

// Data and State
const GEOJSON_URL = 'https://raw.githubusercontent.com/chriswhong/nyc-neighborhood-boundaries/main/data/nyc-neighborhood-boundaries.geojson';

let gameState = JSON.parse(localStorage.getItem('nyc_mastery_save')) || { neighborhoods: {} };
let currentNB = null;
let geoJsonLayer = null;

// Initialize Map
const map = L.map('map', { zoomControl: false }).setView([40.7128, -74.0060], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map);

// Mobile Toggle Listeners
document.getElementById('mobile-toggle').addEventListener('click', () => document.getElementById('sidebar').classList.add('active'));
document.getElementById('mobile-close').addEventListener('click', () => document.getElementById('sidebar').classList.remove('active'));

function saveGame() {
    localStorage.setItem('nyc_mastery_save', JSON.stringify(gameState));
    console.log("Progress saved to local storage.");
}

// Load Neighborhoods
fetch(GEOJSON_URL).then(res => res.json()).then(data => {
    const slugs = [...new Set(data.features.map(f => f.properties.slug))];
    
    // Filter out the SI features to handle them separately
    const siFeatures = data.features.filter(f => f.properties.borough === 'staten-island');

    // 1. Process standard neighborhoods
    const processedFeatures = slugs
        .filter(slug => !siFeatures.some(f => f.properties.slug === slug))
        .map(slug => {
            const matching = data.features.filter(f => f.properties.slug === slug);
            let union = matching[0];
            for (let i = 1; i < matching.length; i++) { union = turf.union(union, matching[i]); }
            union.properties = matching[0].properties;
            return union;
        });

    // 2. THE STATEN ISLAND MERGE
    if (siFeatures.length > 0) {
        let siUnion = siFeatures[0];
        for (let i = 1; i < siFeatures.length; i++) {
            siUnion = turf.union(siUnion, siFeatures[i]);
        }
        // Set the consolidated properties
        siUnion.properties = {
            slug: 'staten-island-megablock',
            name: 'Staten Island',
            borough: "There's never a reason to visit Staten Island twice..."
        };
        processedFeatures.push(siUnion);
    }

    geoJsonLayer = L.geoJSON({ type: "FeatureCollection", features: processedFeatures }, {
        style: (f) => getNBStyle(f.properties.slug),
        onEachFeature: (feature, layer) => {
            const slug = feature.properties.slug;
            const props = feature.properties;
            
            if (!gameState.neighborhoods[slug]) {
                const isSI = slug === 'staten-island-megablock';
                const name = isSI ? props.name : formatName(props.name);
                
                gameState.neighborhoods[slug] = { 
                    visited: false, 
                    anchor: false, 
                    food: false, 
                    name: name,
                    borough: isSI ? props.borough : formatBorough(props.borough, name),
                    // Hardcoded goals for the Staten Island Megablock
                    custom: isSI ? { 
                        anchor: "The Ferry (to leave)", 
                        food: "Denino's Pizzeria" 
                    } : (neighborhoodCustomData[slug] || { anchor: "Landmark", food: "Local Spot" })
                };
            }

            layer.on('click', (e) => {
                L.DomEvent.stopPropagation(e);
                currentNB = slug;
                showInspector(slug);
                if (window.innerWidth < 768) document.getElementById('sidebar').classList.add('active');
            });
        }
    }).addTo(map);
    updateHUD();
});

// UI Functions
function showInspector(slug) {
    const data = gameState.neighborhoods[slug];
    document.getElementById('inspector-default').classList.add('d-none');
    document.getElementById('inspector-content').classList.remove('d-none');
    document.getElementById('nb-title').innerText = data.name;
    document.getElementById('nb-borough').innerText = data.borough;
    document.getElementById('label-anchor').innerText = "🛡️ " + data.custom.anchor;
    document.getElementById('label-food').innerText = "🍽️ " + data.custom.food;

    document.querySelectorAll('.task-check').forEach(cb => cb.checked = data[cb.dataset.task]);
    updateNBBar(slug);
    updateBoroughCompletion(data.borough);
}

document.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-check') && currentNB) {
        gameState.neighborhoods[currentNB][e.target.dataset.task] = e.target.checked;
        saveGame();
        geoJsonLayer.eachLayer(layer => {
            if (layer.feature.properties.slug === currentNB) layer.setStyle(getNBStyle(currentNB));
        });
        updateNBBar(currentNB);
        updateBoroughCompletion(gameState.neighborhoods[currentNB].borough);
        updateHUD();
    }
});

function getNBStyle(slug) {
    const d = gameState.neighborhoods[slug];
    const isComplete = d && d.visited && d.anchor && d.food;
    return {
        fillOpacity: isComplete ? 0.5 : 0.1,
        fillColor: isComplete ? '#198754' : '#ccc',
        color: isComplete ? '#198754' : '#999',
        weight: isComplete ? 2 : 1
    };
}

// Data Handling
// UTF-8 Safe Base64 Export
window.exportData = async function() {
    const dataStr = btoa(encodeURIComponent(JSON.stringify(gameState)).replace(/%([0-9A-F]{2})/g,
        function(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));

    const btn = event.target; // Grabs the button you just clicked
    const originalText = btn.innerText;
    const container = document.getElementById('manual-copy-container');

    try {
        await navigator.clipboard.writeText(dataStr);
        
        // Visual feedback instead of popup
        btn.innerText = "✅ Code Copied!";
        btn.classList.replace('btn-outline-primary', 'btn-success');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('btn-success', 'btn-outline-primary');
        }, 2000);

        container.classList.add('d-none'); 
    } catch (err) {
        // Fallback for restricted browsers
        container.classList.remove('d-none');
        document.getElementById('manual-copy-area').value = dataStr;
        btn.innerText = "❌ Copy Blocked";
        setTimeout(() => { btn.innerText = originalText; }, 2000);
    }
};

// UTF-8 Safe Base64 Import
window.importData = function() {
    const code = prompt("Paste your save code:");
    if (!code || code.trim() === "") return;

    try {
        const binString = atob(code.trim());
        const decodedString = decodeURIComponent(binString.split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        const decodedData = JSON.parse(decodedString);

        if (decodedData && decodedData.neighborhoods) {
            if (confirm("Valid save found! Overwrite current progress?")) {
                gameState = decodedData;
                
                // Safety check: call saveGame if it exists
                if (typeof saveGame === "function") {
                    saveGame();
                } else {
                    localStorage.setItem('nyc_mastery_save', JSON.stringify(gameState));
                }

                setTimeout(() => {
                    location.reload();
                }, 100);
            }
        } else {
            throw new Error("Data structure invalid");
        }
    } catch (e) {
        console.error("Import Error:", e);
        alert("Error: Invalid save code. Make sure you copied the entire string.");
    }
};

window.resetGame = function() {
    if (confirm("Delete all progress?") && confirm("Final Warning: This will wipe your map. Continue?")) {
        localStorage.removeItem('nyc_mastery_save');
        location.reload();
    }
};

// Helpers
function formatName(str) {
    if (str.length > 20) return str; 
    
    if (name === "Brooklyn Heights") return "Brooklyn";
    const b = str.toLowerCase().replace('-', ' ');
    if (b === 'bronx') return 'The Bronx';
    return b.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function formatBorough(str, name) {
    if (name === "Brooklyn Heights") return "Brooklyn";
    const b = str.toLowerCase().replace('-', ' ');
    if (b === 'bronx') return 'The Bronx';
    return b.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function updateNBBar(slug) {
    const d = gameState.neighborhoods[slug];
    let pct = Math.round(([d.visited, d.anchor, d.food].filter(Boolean).length / 3) * 100);
    document.getElementById('nb-mastery-bar').style.width = pct + "%";
    document.getElementById('nb-mastery-text').innerText = pct + "%";
}
function updateBoroughCompletion(boroughName) {
    const nbs = Object.values(gameState.neighborhoods).filter(n => n.borough === boroughName);
    let earned = 0; 
    nbs.forEach(n => { 
        if(n.visited) earned++; 
        if(n.anchor) earned++; 
        if(n.food) earned++; 
    });
    
    let pct = Math.round((earned / (nbs.length * 3)) * 100) || 0;

    // FIX: If the borough name is your joke, change the display label back to "Staten Island"
    const displayLabel = (boroughName.includes("visit Staten Island twice")) 
        ? "Staten Island" 
        : boroughName;

    document.getElementById('borough-total-label').innerText = displayLabel + " Completion";
    document.getElementById('borough-total-bar').style.width = pct + "%";
    document.getElementById('borough-total-text').innerText = pct + "%";
}
function updateHUD() {
    const nbs = Object.values(gameState.neighborhoods);
    let earned = 0; nbs.forEach(n => { if(n.visited) earned++; if(n.anchor) earned++; if(n.food) earned++; });
    const score = Math.round((earned / (nbs.length * 3)) * 100) || 0;
    document.getElementById('bar-global').style.width = score + "%";
    document.getElementById('txt-global').innerText = score + "%";
}