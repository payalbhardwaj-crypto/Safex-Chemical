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
      { id: 'herb-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1731924815/k6op4vs1cwahhhbzmqlj.jpg',                   name: 'Rice Cover',    composition: 'FENOXAPROP-P-ETHYL 6.7% W/W EC',   category: 'Herbicides' },
      { id: 'herb-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1732079794/rva3fp32rrr3oe5xbyxr.jpg',                   name: 'Java Super',     composition: 'QUIZALOFOP ETHYL 10% EC',   category: 'Herbicides' },
      { id: 'herb-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1685439521/ezlvpjlxgaod72rmhbxi.jpg',                   name: 'Goodbye',   composition: 'AMETRUNE 80% WDG',       category: 'Herbicides' },
      { id: 'herb-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1685525827/luhfcthr0f0ignq2xbq3.jpg',                   name: 'Amidol',  composition: 'Imazethapyr 10% SL',             category: 'Herbicides' }, 
      { id: 'herb-05', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/1.png',  name: 'Futura Gold', composition: 'Pendimethalin 38.7% CS',         category: 'Herbicides' },
      { id: 'herb-06', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690355400/ntq0tfmvkz9zxsy71mpl.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-07', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/4.png',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-08', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690355616/dtioy49geklppaplr3te.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-09', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690355980/bwgiaqja8ol1vkunz8c1.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-10', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690356085/q8fvojxjjonzpkgtonxg.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-11', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690356227/peglusqlkx6lngcqecyh.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-12', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690356333/k39mzr3mslwl3bsxmmlb.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
      { id: 'herb-13', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690356564/cyulq0td4byrttgenqeh.jpg',                   name: 'Magic 71',   composition: 'Topramezone 33.6% SC',           category: 'Herbicides' },
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
      { id: 'weed-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1732082501/j5nbv0nup9wzpnw7gafm.jpg', name: 'Grassout',   composition: 'Paraquat Dichloride 24% SL',     category: 'Weedicides' },
      { id: 'weed-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690356734/ikma2mprf5d4zz9crt6d.jpg', name: 'Totalweed',  composition: 'Glyphosate 41% SL',              category: 'Weedicides' },
      { id: 'weed-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/12.png', name: 'Gramicide',  composition: 'Glufosinate Ammonium 13.5% SL', category: 'Weedicides' },
      { id: 'weed-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/13.png', name: 'Butadol',    composition: 'Butachlor 50% EC',               category: 'Weedicides' },
      { id: 'weed-05', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756199608/abes/aug2025/ahmka1vsvxxjdxsdpoxw.jpg', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
      { id: 'weed-06', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/15.png', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
      { id: 'weed-07', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/16.png', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
      { id: 'weed-08', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/17.png', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
      { id: 'weed-09', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756199797/abes/aug2025/jxolbrouidcd27u3hedi.jpg', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
      { id: 'weed-10', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/19.png', name: 'Fluzap',     composition: 'Fluazifop-P-butyl 13.4% EC',    category: 'Weedicides' },
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
      { id: 'fung-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1732084973/wjbivrcuxmymgg6weuse.jpg', name: 'Tiger GR',   composition: 'Sulphur 90% Granule',                              category: 'Fungicides' },
      { id: 'fung-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689919040/xmzh0yc9p6t7wuhjj4j7.jpg', name: 'Cymate',     composition: 'Cymoxanil 8% + Mancozeb 64% WP',                  category: 'Fungicides' },
      { id: 'fung-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690262860/wjorlss3ljh1enghlmhm.jpg', name: 'Hallabol',   composition: 'Azoxystrobin 11% + Tebuconazole 18.3% SC',        category: 'Fungicides' },
      { id: 'fung-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690362975/zswvbkwyhbpuokgaf4gr.jpg', name: 'Blastox',    composition: 'Tricyclazole 75% WP',                             category: 'Fungicides' },
      { id: 'fung-05', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690363264/ghpnx1lmymdkgvfamqr7.jpg', name: 'Hexacare',   composition: 'Hexaconazole 5% EC',                              category: 'Fungicides' },
      { id: 'fung-06', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756203148/abes/aug2025/rp09gpbacn7bpkxvojcs.jpg', name: 'Funguard',   composition: 'Propiconazole 25% EC',                            category: 'Fungicides' },
      { id: 'fung-07', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690439516/bnnmtk43v4yhcz44sdfw.jpg', name: 'Copzone',    composition: 'Copper Oxychloride 50% WP',                       category: 'Fungicides' },
      { id: 'fung-08', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690363467/n9s2wh5qsrycx6harjoj.jpg', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
      { id: 'fung-09', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690438511/leyvlfv5cv1k6t91jjfw.jpg', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
      { id: 'fung-10', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756204090/abes/aug2025/gdwl827hbuphwywnivme.jpg', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
      { id: 'fung-11', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/29.png', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
      { id: 'fung-12', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756205034/abes/aug2025/tgux9bbzv4q2qrnjgglb.jpg', name: 'Mancure',    composition: 'Mancozeb 75% WP',                                 category: 'Fungicides' },
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
      { id: 'insc-01', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756205834/abes/aug2025/hjsevqwe1ewntmaqfqij.jpg', name: 'Acarifas',   composition: 'Broflanilide 300 G/L SC',                             category: 'Insecticides' },
      { id: 'insc-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1731479481/ar6lvjloexytytrxckdk.jpg', name: 'Girdle',     composition: 'Chlorantraniliprole 18.5% SC',                        category: 'Insecticides' },
      { id: 'insc-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1731921826/iyo6pbnslakxtmfynpwv.jpg', name: 'Fipro Ultra',composition: 'Fipronil 0.6% GR',                                    category: 'Insecticides' },
      { id: 'insc-04', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1755597633/abes/aug2025/wgpack59jkwcx7laqo0n.jpg', name: 'Nato',       composition: 'Emamectin Benzoate 3% + Thiamethoxam 12% WG',         category: 'Insecticides' },
      { id: 'insc-05', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1685530597/ln1rl8wajwgtqynnjdqj.jpg', name: 'Dabang',     composition: 'Lambda Cyhalothrin 4.9% CS',                          category: 'Insecticides' },
      { id: 'insc-06', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689857297/ykd2lhwid6ve2ee1bb7l.jpg', name: 'Aphikill',   composition: 'Imidacloprid 17.8% SL',                               category: 'Insecticides' },
      { id: 'insc-07', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689847714/emuzfnidotghaeevsikr.jpg', name: 'Acepro',     composition: 'Acephate 75% SP',                                     category: 'Insecticides' },
      { id: 'insc-08', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689851106/wh8etdsvnx4u37za04de.jpg', name: 'Profex',     composition: 'Profenofos 40% + Cypermethrin 4% EC',                 category: 'Insecticides' },
      { id: 'insc-09', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689855687/gd4z1ad0dhuxpwec485i.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-10', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689927354/yumabf3ndhwybxszrgju.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-11', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/31.png', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-12', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756208106/abes/aug2025/ljkngipjuwhsuvmvt4dd.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-13', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364181/awjy1nj4euioupkct3wn.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-14', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/34.png', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-15', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364364/jrtyl34h6arnwhnopnkg.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-16', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364506/ss8ugfp6h8y8jx5epx8l.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-17', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364623/j2iyk2weakg9mxgvrdzt.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-18', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/38.png', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-19', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364802/mjhwjatmsd1krvfb0zhr.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-20', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690364943/scy6hibv1o2sijiv1lsk.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-21', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690365172/tbejqbbmigcw4nwc1yul.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-22', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/42.png', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-23', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756272379/abes/aug2025/mmbv5rcgughozxbaijap.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-24', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756272545/abes/aug2025/pz54gso6ti1pni7er77z.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-25', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/45.png', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
      { id: 'insc-26', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1690365488/y0pvdmjcldxqfsnmbkfu.jpg', name: 'Chlorotuff', composition: 'Chlorpyrifos 20% EC',                                 category: 'Insecticides' },
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
      { id: 'pgr-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/47.png', name: 'Bahaar',      composition: 'Organic Manure',                                  category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/48.png', name: 'Bahubali',    composition: 'Mycorrhiza',                                      category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-03', img: 'https://res.cloudinary.com/ddrxiwoep/image/upload/v1756272843/abes/aug2025/rxvolb2efjvbfws3idrz.jpg', name: 'RootBoost',   composition: 'Phosphate Solubilizing Bacteria 10⁸ CFU/mL',     category: 'PGRs & Bio Fertilisers' },
      { id: 'pgr-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/50.png', name: 'GreenGrow',   composition: 'Trichoderma viride 1% WP',                       category: 'PGRs & Bio Fertilisers' },                                     
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
      { id: 'fert-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1684413335/m74wmt42ctcekfqammwm.jpg', name: 'NPK Gold',   composition: '19:19:19 Water Soluble Fertilizer',  category: 'Fertilisers' },
      { id: 'fert-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1689767387/nipvlufta3rpuxzxbfjn.jpg', name: 'ZincPlus',   composition: 'Zinc Sulphate 21%',                  category: 'Fertilisers' },
      { id: 'fert-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/v1684472675/hycymgw734a2fuv3ylju.jpg', name: 'BoroShield', composition: 'Boron 20% SL',                       category: 'Fertilisers' },
      { id: 'fert-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/51.png', name: 'CalNit',     composition: 'Calcium Nitrate 15.5% N + 19% Ca',  category: 'Fertilisers' },
      { id: 'fert-05', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/54.png', name: 'FerroCure',  composition: 'Ferrous Sulphate 19% Fe',            category: 'Fertilisers' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Crops
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_CROPS = [
  { id: 'rice',      name: 'Rice',      img: 'https://images.unsplash.com/photo-1536054636466-d53999b4d727?w=300&q=80' },
  { id: 'wheat',     name: 'Wheat',     img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80' },
  { id: 'cotton',    name: 'Cotton',    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&q=80' },
  { id: 'sugarcane', name: 'Sugarcane', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&q=80' },
  { id: 'potato',    name: 'Potato',    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&q=80' },
  { id: 'chilli',    name: 'Chilli',    img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=300&q=80' },
  { id: 'soybean',   name: 'Soybean',   img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=300&q=80' },
  { id: 'mango',     name: 'Mango',     img: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=300&q=80' },
  { id: 'maize',     name: 'Maize',     img: 'https://images.unsplash.com/photo-1601593768799-76e3928b2bb5?w=300&q=80' },
  { id: 'lentil',    name: 'Lentil',    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&q=80' },
  { id: 'tomato',    name: 'Tomato',    img: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300&q=80' },
  { id: 'onion',     name: 'Onion',     img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300&q=80' },
  { id: 'groundnut', name: 'Groundnut', img: 'https://images.unsplash.com/photo-1567892737950-30c4db47e5df?w=300&q=80' },
  { id: 'mustard',   name: 'Mustard',   img: 'https://images.unsplash.com/photo-1631128551776-e8282e3f3de6?w=300&q=80' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Insects
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_INSECTS = [
  { id: 'ins-01', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/56.jpg', name: 'Whitefly',             scientificName: 'Aleyrodidae' },
  { id: 'ins-02', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/57.jpg', name: 'Brown Planthopper',    scientificName: 'Nilaparvata lugens' },
  { id: 'ins-03', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/58.jpg', name: 'Aphids',               scientificName: 'Aphidoidea' },
  { id: 'ins-04', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/59.jpg', name: 'Stem Borer',           scientificName: 'Chilo suppressalis' },
  { id: 'ins-05', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/60.jpg', name: 'Thrips',               scientificName: 'Thripidae' },
  { id: 'ins-06', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/61.jpg', name: 'Red Spider Mite',      scientificName: 'Tetranychus urticae' },
  { id: 'ins-07', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/62.jpg', name: 'Mealy Bug',            scientificName: 'Pseudococcidae' },
  { id: 'ins-08', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/63.jpg', name: 'Leaf Folder',          scientificName: 'Cnaphalocrocis medinalis' },
  { id: 'ins-09', img: 'https://res.cloudinary.com/simplifiidevops/image/upload/f_auto,q_auto/v1607796855/safexwebsite/products/64.jpg', name: 'Jassid',               scientificName: 'Empoasca spp.' },
  { id: 'ins-10', img: '', name: 'American Bollworm',    scientificName: 'Helicoverpa armigera' },
  { id: 'ins-11', img: '', name: 'Diamondback Moth',     scientificName: 'Plutella xylostella' },
  { id: 'ins-12', img: '', name: 'Termites',             scientificName: 'Isoptera' },
  { id: 'ins-13', img: '', name: 'Cutworm',              scientificName: 'Agrotis ipsilon' },
  { id: 'ins-14', img: '', name: 'Fruit Fly',            scientificName: 'Bactrocera dorsalis' },
  { id: 'ins-15', img: '', name: 'Scale Insect',         scientificName: 'Coccidae' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Diseases
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_DISEASES = [
  { id: 'dis-01', img: '', name: 'Blast',               type: 'Fungal disease' },
  { id: 'dis-02', img: '', name: 'Blight',              type: 'Pathogenic infection' },
  { id: 'dis-03', img: '', name: 'Powdery Mildew',      type: 'Fungal disease' },
  { id: 'dis-04', img: '', name: 'Downy Mildew',        type: 'Oomycete disease' },
  { id: 'dis-05', img: '', name: 'Leaf Rust',           type: 'Fungal disease' },
  { id: 'dis-06', img: '', name: 'Fusarium Wilt',       type: 'Fungal disease' },
  { id: 'dis-07', img: '', name: 'Bacterial Leaf Blight',type: 'Bacterial disease' },
  { id: 'dis-08', img: '', name: 'Anthracnose',         type: 'Fungal disease' },
  { id: 'dis-09', img: '', name: 'Damping Off',         type: 'Fungal disease' },
  { id: 'dis-10', img: '', name: 'Sheath Rot',          type: 'Fungal disease' },
  { id: 'dis-11', img: '', name: 'Root Rot',            type: 'Fungal disease' },
  { id: 'dis-12', img: '', name: 'Mosaic Virus',        type: 'Viral disease' },
  { id: 'dis-13', img: '', name: 'Leaf Spot',           type: 'Fungal disease' },
  { id: 'dis-14', img: '', name: 'Cercospora',          type: 'Fungal disease' },
  { id: 'dis-15', img: '', name: 'Yellow Vein Mosaic',  type: 'Viral disease' },
]
