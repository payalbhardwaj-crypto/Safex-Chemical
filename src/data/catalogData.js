// ─────────────────────────────────────────────────────────────────────────────
//  Safex Chemical — Full Product Catalog Data
// ─────────────────────────────────────────────────────────────────────────────

export const CATALOG_CATEGORIES = [
  {
    id: 'herbicides',
    label: 'Herbicides',
    description:
      'Selective and non-selective herbicides formulated for effective pre and post-emergent weed control. Safe on crops, tough on weeds — trusted across rabi and kharif seasons.',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    products: [
      { id: 'herb-01', name: 'Goodbye',    composition: 'Ametryne 80% WDG',               category: 'Herbicides' },
      { id: 'herb-02', name: 'Amidol',     composition: 'Tembotrione 34.4% SC',           category: 'Herbicides' },
      { id: 'herb-03', name: 'Metacide',   composition: 'Metribuzin 70% WP',              category: 'Herbicides' },
      { id: 'herb-04', name: 'Clearplex',  composition: 'Imazethapyr 10% SL',             category: 'Herbicides' },
      { id: 'herb-05', name: 'Terraclear', composition: 'Pendimethalin 38.7% CS',         category: 'Herbicides' },
      { id: 'herb-06', name: 'Quikkill',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
    ],
  },
  {
    id: 'weedicides',
    label: 'Weedicides',
    description:
      'Broad-spectrum post-emergent weedicides for total vegetation control in non-crop areas and selective management in standing crops.',
    color: 'text-lime-700',
    bgColor: 'bg-lime-50',
    borderColor: 'border-lime-200',
    products: [
      { id: 'weed-01', name: 'Grassout',   composition: 'Paraquat Dichloride 24% SL',     category: 'Weedicides' },
      { id: 'weed-02', name: 'Totalweed',  composition: 'Glyphosate 41% SL',              category: 'Weedicides' },
      { id: 'weed-03', name: 'Gramicide',  composition: 'Glufosinate Ammonium 13.5% SL', category: 'Weedicides' },
      { id: 'weed-04', name: 'Butadol',    composition: 'Butachlor 50% EC',               category: 'Weedicides' },
      { id: 'weed-05', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
    ],
  },
  {
    id: 'fungicides',
    label: 'Fungicides',
    description:
      'Systemic and contact fungicides that protect crops from fungal pathogens. Proven performance on rice, wheat, cotton, vegetables, and more.',
    color: 'text-violet-700',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    products: [
      { id: 'fung-01', name: 'Tiger GR',   composition: 'Sulphur 90% Granule',                              category: 'Fungicides' },
      { id: 'fung-02', name: 'Cymate',     composition: 'Cymoxanil 8% + Mancozeb 64% WP',                  category: 'Fungicides' },
      { id: 'fung-03', name: 'Hallabol',   composition: 'Azoxystrobin 11% + Tebuconazole 18.3% SC',        category: 'Fungicides' },
      { id: 'fung-04', name: 'Blastox',    composition: 'Tricyclazole 75% WP',                             category: 'Fungicides' },
      { id: 'fung-05', name: 'Hexacare',   composition: 'Hexaconazole 5% EC',                              category: 'Fungicides' },
      { id: 'fung-06', name: 'Funguard',   composition: 'Propiconazole 25% EC',                            category: 'Fungicides' },
      { id: 'fung-07', name: 'Copzone',    composition: 'Copper Oxychloride 50% WP',                       category: 'Fungicides' },
      { id: 'fung-08', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
    ],
  },
  {
    id: 'insecticides',
    label: 'Insecticides',
    description:
      'Advanced formulations for broad-spectrum and targeted insect control. Effective against sucking, chewing, and soil-borne pests at every crop growth stage.',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    products: [
      { id: 'insc-01', name: 'Acarifas',   composition: 'Broflanilide 300 G/L SC',                             category: 'Insecticides' },
      { id: 'insc-02', name: 'Girdle',     composition: 'Chlorantraniliprole 18.5% SC',                        category: 'Insecticides' },
      { id: 'insc-03', name: 'Fipro Ultra',composition: 'Fipronil 0.6% GR',                                    category: 'Insecticides' },
      { id: 'insc-04', name: 'Nato',       composition: 'Emamectin Benzoate 3% + Thiamethoxam 12% WG',         category: 'Insecticides' },
      { id: 'insc-05', name: 'Dabang',     composition: 'Lambda Cyhalothrin 4.9% CS',                          category: 'Insecticides' },
      { id: 'insc-06', name: 'Aphikill',   composition: 'Imidacloprid 17.8% SL',                               category: 'Insecticides' },
      { id: 'insc-07', name: 'Acepro',     composition: 'Acephate 75% SP',                                     category: 'Insecticides' },
      { id: 'insc-08', name: 'Profex',     composition: 'Profenofos 40% + Cypermethrin 4% EC',                 category: 'Insecticides' },
      { id: 'insc-09', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
    ],
  },
  {
    id: 'pgrs-bio',
    label: 'PGRs & Bio Fertilisers',
    description:
      'Plant growth regulators and biological fertilisers that enhance root activity, stimulate microbial life, and maximise yield — sustainably.',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    products: [
      { id: 'pgr-01', name: 'Bahaar',      composition: 'Organic Manure',                                  category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-02', name: 'Bahubali',    composition: 'Mycorrhiza',                                      category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-03', name: 'RootBoost',   composition: 'Phosphate Solubilizing Bacteria 10⁸ CFU/mL',     category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-04', name: 'GreenGrow',   composition: 'Trichoderma viride 1% WP',                       category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-05', name: 'Cytovit',     composition: 'Cytokinin 0.09% SL',                             category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-06', name: 'BioActiv',    composition: 'Humic Acid 98% WG',                              category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-07', name: 'SeaMax',      composition: 'Seaweed Extract 0.1% L',                         category: 'PGRs & Bio Fertilisers' },
    ],
  },
  {
    id: 'fertilisers',
    label: 'Fertilisers',
    description:
      'Balanced macro and micronutrient fertilisers for improved plant nutrition, stronger growth, and consistently higher yields across all crops.',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    products: [
      { id: 'fert-01', name: 'NPK Gold',   composition: '19:19:19 Water Soluble Fertilizer',  category: 'Fertilisers' },
      { id: 'fert-02', name: 'ZincPlus',   composition: 'Zinc Sulphate 21%',                  category: 'Fertilisers' },
      { id: 'fert-03', name: 'BoroShield', composition: 'Boron 20% SL',                       category: 'Fertilisers' },
      { id: 'fert-04', name: 'CalNit',     composition: 'Calcium Nitrate 15.5% N + 19% Ca',  category: 'Fertilisers' },
      { id: 'fert-05', name: 'FerroCure',  composition: 'Ferrous Sulphate 19% Fe',            category: 'Fertilisers' },
      { id: 'fert-06', name: 'MicroMax',   composition: 'Multi Micronutrient Zn+B+Fe+Mn',    category: 'Fertilisers' },
      { id: 'fert-07', name: 'KalMax',     composition: 'Potassium Humate 98%',               category: 'Fertilisers' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Crops
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_CROPS = [
  { id: 'rice',      name: 'Rice',      icon: '🌾' },
  { id: 'wheat',     name: 'Wheat',     icon: '🌿' },
  { id: 'cotton',    name: 'Cotton',    icon: '🌱' },
  { id: 'sugarcane', name: 'Sugarcane', icon: '🎋' },
  { id: 'potato',    name: 'Potato',    icon: '🥔' },
  { id: 'chilli',    name: 'Chilli',    icon: '🌶️' },
  { id: 'soybean',   name: 'Soybean',   icon: '🫘' },
  { id: 'mango',     name: 'Mango',     icon: '🥭' },
  { id: 'maize',     name: 'Maize',     icon: '🌽' },
  { id: 'lentil',    name: 'Lentil',    icon: '🫛' },
  { id: 'tomato',    name: 'Tomato',    icon: '🍅' },
  { id: 'onion',     name: 'Onion',     icon: '🧅' },
  { id: 'groundnut', name: 'Groundnut', icon: '🥜' },
  { id: 'mustard',   name: 'Mustard',   icon: '🌼' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Insects
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_INSECTS = [
  { id: 'ins-01', name: 'Whitefly',             scientificName: 'Aleyrodidae' },
  { id: 'ins-02', name: 'Brown Planthopper',    scientificName: 'Nilaparvata lugens' },
  { id: 'ins-03', name: 'Aphids',               scientificName: 'Aphidoidea' },
  { id: 'ins-04', name: 'Stem Borer',           scientificName: 'Chilo suppressalis' },
  { id: 'ins-05', name: 'Thrips',               scientificName: 'Thripidae' },
  { id: 'ins-06', name: 'Red Spider Mite',      scientificName: 'Tetranychus urticae' },
  { id: 'ins-07', name: 'Mealy Bug',            scientificName: 'Pseudococcidae' },
  { id: 'ins-08', name: 'Leaf Folder',          scientificName: 'Cnaphalocrocis medinalis' },
  { id: 'ins-09', name: 'Jassid',               scientificName: 'Empoasca spp.' },
  { id: 'ins-10', name: 'American Bollworm',    scientificName: 'Helicoverpa armigera' },
  { id: 'ins-11', name: 'Diamondback Moth',     scientificName: 'Plutella xylostella' },
  { id: 'ins-12', name: 'Termites',             scientificName: 'Isoptera' },
  { id: 'ins-13', name: 'Cutworm',              scientificName: 'Agrotis ipsilon' },
  { id: 'ins-14', name: 'Fruit Fly',            scientificName: 'Bactrocera dorsalis' },
  { id: 'ins-15', name: 'Scale Insect',         scientificName: 'Coccidae' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Diseases
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_DISEASES = [
  { id: 'dis-01', name: 'Blast',               type: 'Fungal disease' },
  { id: 'dis-02', name: 'Blight',              type: 'Pathogenic infection' },
  { id: 'dis-03', name: 'Powdery Mildew',      type: 'Fungal disease' },
  { id: 'dis-04', name: 'Downy Mildew',        type: 'Oomycete disease' },
  { id: 'dis-05', name: 'Leaf Rust',           type: 'Fungal disease' },
  { id: 'dis-06', name: 'Fusarium Wilt',       type: 'Fungal disease' },
  { id: 'dis-07', name: 'Bacterial Leaf Blight',type: 'Bacterial disease' },
  { id: 'dis-08', name: 'Anthracnose',         type: 'Fungal disease' },
  { id: 'dis-09', name: 'Damping Off',         type: 'Fungal disease' },
  { id: 'dis-10', name: 'Sheath Rot',          type: 'Fungal disease' },
  { id: 'dis-11', name: 'Root Rot',            type: 'Fungal disease' },
  { id: 'dis-12', name: 'Mosaic Virus',        type: 'Viral disease' },
  { id: 'dis-13', name: 'Leaf Spot',           type: 'Fungal disease' },
  { id: 'dis-14', name: 'Cercospora',          type: 'Fungal disease' },
  { id: 'dis-15', name: 'Yellow Vein Mosaic',  type: 'Viral disease' },
]
