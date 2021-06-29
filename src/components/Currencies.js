const currencies = [
    {
      code: "usd",
      label: "United States Dollar"
    },
    {
      code: "cad",
      label: "Canadian Dollar"
    },
    {
      code: "eur",
      label: "European Pound"
    },
    {
      code: "aed",
      label: "United Arab Emirates Dirham"
    },
    {
      code: "afn",
      label: "Afghan Afghani"
    },
    {
      code: "all",
      label: "All"
    },
    {
      code: "amd",
      label: "Armenian Dram"
    },
    {
      code: "ang",
      label: "Netherlands Antillean Guilder"
    },
    {
      code: "aoa",
      label: "Angolan Kwanza"
    },
    {
      code: "ars",
      label: "Argentine Peso"
    },
    {
      code: "aud",
      label: "Australian Dollar"
    },
    {
      code: "awg",
      label: "Aruban Florin"
    },
    {
      code: "azn",
      label: "Azerbaijani Manat"
    },
    {
      code: "bam",
      label: "Bosnia and Herzegovina Convertible Mark"
    },
    {
      code: "bbd",
      label: "Barbadian Dollar"
    },
    {
      code: "bdt",
      label: "Bangladeshi Taka"
    },
    {
      code: "bgn",
      label: "Bulgarian Lev"
    },
    {
      code: "bhd",
      label: "Bahraini Dinar"
    },
    {
      code: "bif",
      label: "Burundian Franc"
    },
    {
      code: "bmd",
      label: "Bermudian Dollar"
    },
    {
      code: "bnd",
      label: "Brunei Dollar"
    },
    {
      code: "bob",
      label: "Bolivian Boliviano"
    },
    {
      code: "brl",
      label: "Brazilian Real"
    },
    {
      code: "bsd",
      label: "Bahamian Dollar"
    },
    {
      code: "btn",
      label: "Bhutanese Ngultrum"
    },
    {
      code: "bwp",
      label: "Botswana Pula"
    },
    {
      code: "byr",
      label: "Belarusian Ruble"
    },
    {
      code: "bzd",
      label: "Belize Dollar"
    },
    {
      code: "cdf",
      label: "Congolese Franc"
    },
    {
      code: "chf",
      label: "Swiss Franc"
    },
    {
      code: "clp",
      label: "Chilean Peso"
    },
    {
      code: "cny",
      label: "Chinese Yuan"
    },
    {
      code: "cop",
      label: "Colombian Peso"
    },
    {
      code: "crc",
      label: "Costa Rican Colón"
    },
    {
      code: "cup",
      label: "Cuban Peso"
    },
    {
      code: "cve",
      label: "Cape Verdean Escudo"
    },
    {
      code: "czk",
      label: "Czech Koruna"
    },
    {
      code: "djf",
      label: "Djiboutian Franc"
    },
    {
      code: "dkk",
      label: "Danish Krone"
    },
    {
      code: "dop",
      label: "Dominican Peso"
    },
    {
      code: "dzd",
      label: "Algerian Dinar"
    },
    {
      code: "egp",
      label: "Egyptian Pound"
    },
    {
      code: "ern",
      label: "Eritrean Nakfa"
    },
    {
      code: "etb",
      label: "Ethiopian Birr"
    },
    {
      code: "fjd",
      label: "Fijian Dollar"
    },
    {
      code: "fkp",
      label: "Falkland Islands Pound"
    },
    {
      code: "gbp",
      label: "British Pound Sterling"
    },
    {
      code: "gel",
      label: "Georgian Lari"
    },
    {
      code: "ghs",
      label: "Ghanaian Cedi"
    },
    {
      code: "gip",
      label: "Gibraltar Pound"
    },
    {
      code: "gmd",
      label: "Gambian Dalasi"
    },
    {
      code: "gnf",
      label: "Guinean Franc"
    },
    {
      code: "gtq",
      label: "Guatemalan Quetzal"
    },
    {
      code: "gyd",
      label: "Guyanese Dollar"
    },
    {
      code: "hkd",
      label: "Hong Kong Dollar"
    },
    {
      code: "hnl",
      label: "Honduran Lempira"
    },
    {
      code: "hrk",
      label: "Croatian Kuna"
    },
    {
      code: "htg",
      label: "Haitian Gourde"
    },
    {
      code: "huf",
      label: "Hungarian Forint"
    },
    {
      code: "idr",
      label: "Indonesian Rupiah"
    },
    {
      code: "ils",
      label: "Israeli New Shekel"
    },
    {
      code: "inr",
      label: "Indian Rupee"
    },
    {
      code: "iqd",
      label: "Iraqi Dinar"
    },
    {
      code: "irr",
      label: "Iranian Rial"
    },
    {
      code: "isk",
      label: "Icelandic Króna"
    },
    {
      code: "jmd",
      label: "Jamaican Dollar"
    },
    {
      code: "jod",
      label: "Jordanian Dinar"
    },
    {
      code: "jpy",
      label: "Japanese Yen"
    },
    {
      code: "kes",
      label: "Kenyan Shilling"
    },
    {
      code: "kgs",
      label: "Wikipedia"
    },
    {
      code: "khr",
      label: "Cambodian Riel"
    },
    {
      code: "kmf",
      label: "Kyrgyzstani Som"
    },
    {
      code: "kpw",
      label: "North Korean Won"
    },
    {
      code: "krw",
      label: "South Korean Won"
    },
    {
      code: "kwd",
      label: "Kuwaiti Dinar"
    },
    {
      code: "kyd",
      label: "Cayman Islands Dollar"
    },
    {
      code: "kzt",
      label: "Kazakhstani Tenge"
    },
    {
      code: "lak",
      label: "Lao Kip"
    },
    {
      code: "lbp",
      label: "Lebanese Pound"
    },
    {
      code: "lkr",
      label: "Sri Lankan Rupee"
    },
    {
      code: "lrd",
      label: "Liberian Dollar"
    },
    {
      code: "lsl",
      label: "Lesotho Loti"
    },
    {
      code: "ltl",
      label: "Lithuanian Litas"
    },
    {
      code: "lvl",
      label: "Latvian Lats"
    },
    {
      code: "lyd",
      label: "Libyan Dinar"
    },
    {
      code: "mad",
      label: "Moroccan Dirham"
    },
    {
      code: "mdl",
      label: "Moldovan Leu"
    },
    {
      code: "mga",
      label: "Malagasy Ariary"
    },
    {
      code: "mkd",
      label: "Macedonian Denar"
    },
    {
      code: "mmk",
      label: "Myanmar Kyat"
    },
    {
      code: "mnt",
      label: "Mongolian Tögrög"
    },
    {
      code: "mop",
      label: "Macanese Pataca"
    },
    {
      code: "mro",
      label: "Mauritanian Ouguiya"
    },
    {
      code: "mur",
      label: "Mauritian Rupee"
    },
    {
      code: "mvr",
      label: "Maldivian Rufiyaa"
    },
    {
      code: "mwk",
      label: "Malawian Kwacha"
    },
    {
      code: "mxn",
      label: "Mexican Peso"
    },
    {
      code: "myr",
      label: "Malaysian Ringgit"
    },
    {
      code: "mzn",
      label: "Mozambican Metical"
    },
    {
      code: "nad",
      label: "Namibian Dollar"
    },
    {
      code: "ngn",
      label: "Nigerian Naira"
    },
    {
      code: "nio",
      label: "Namibian Dollar"
    },
    {
      code: "nok",
      label: "Norwegian Krone"
    },
    {
      code: "npr",
      label: "Nepalese Rupee"
    },
    {
      code: "nzd",
      label: "New Zealand Dollar"
    },
    {
      code: "omr",
      label: "Omani Rial"
    },
    {
      code: "pab",
      label: "Panamanian Balboa"
    },
    {
      code: "pen",
      label: "Peruvian Sol"
    },
    {
      code: "pgk",
      label: "Papua New Guinean Kina"
    },
    {
      code: "php",
      label: "Philippine Peso"
    },
    {
      code: "pkr",
      label: "Pakistani Rupee"
    },
    {
      code: "pln",
      label: "Polish Złoty"
    },
    {
      code: "pyg",
      label: "Paraguayan Guaraní"
    },
    {
      code: "qar",
      label: "Qatari Riyal"
    },
    {
      code: "ron",
      label: "Romanian Leu"
    },
    {
      code: "rsd",
      label: "Serbian Dinar"
    },
    {
      code: "rub",
      label: "Russian Ruble"
    },
    {
      code: "rwf",
      label: "Rwandan Franc"
    },
    {
      code: "sar",
      label: "Saudi Riyal"
    },
    {
      code: "sbd",
      label: "Solomon Islands Dollar"
    },
    {
      code: "scr",
      label: "Seychellois Rupee"
    },
    {
      code: "sdg",
      label: "Sudanese Pound"
    },
    {
      code: "sek",
      label: "Swedish Krona"
    },
    {
      code: "sgd",
      label: "Singapore Dollar"
    },
    {
      code: "shp",
      label: "Saint Helena Pound"
    },
    {
      code: "sll",
      label: "Sierra Leonean Leone"
    },
    {
      code: "sos",
      label: "Somali Shilling"
    },
    {
      code: "srd",
      label: "Surinamese Dollar"
    },
    {
      code: "ssp",
      label: "South Sudanese Pound"
    },
    {
      code: "std",
      label: "São Tomé and Príncipe Dobra"
    },
    {
      code: "syp",
      label: "Syrian Pound"
    },
    {
      code: "szl",
      label: "Swazi Lilangeni"
    },
    {
      code: "thb",
      label: "Thai Baht"
    },
    {
      code: "tjs",
      label: "Wikipedia"
    },
    {
      code: "tmt",
      label: "Tajikistani Somoni"
    },
    {
      code: "tnd",
      label: "Tunisian Dinar"
    },
    {
      code: "top",
      label: "Tonga Pa’anga"
    },
    {
      code: "try",
      label: "Turkish Lira"
    },
    {
      code: "ttd",
      label: "Trinidad And Tobago Dollar"
    },
    {
      code: "twd",
      label: "New Taiwan Dollar"
    },
    {
      code: "tzs",
      label: "Tanzanian Shilling"
    },
    {
      code: "uah",
      label: "Ukrainian Hryvnia"
    },
    {
      code: "ugx",
      label: "Ugandan Shilling"
    },
    {
      code: "uyu",
      label: "Uruguayan Peso"
    },
    {
      code: "uzs",
      label: "Uzbekistani Soʻm"
    },
    {
      code: "vef",
      label: "Venezuelan Bolívar"
    },
    {
      code: "vnd",
      label: "Vietnamese Dong"
    },
    {
      code: "vuv",
      label: "Vanuatu Vatu"
    },
    {
      code: "wst",
      label: "Samoan Tālā"
    },
    {
      code: "xaf",
      label: "Central African Cfa Franc"
    },
    {
      code: "xcd",
      label: "Eastern Caribbean Dollar"
    },
    {
      code: "xof",
      label: "West African Cfa Franc"
    },
    {
      code: "xpf",
      label: "Cfp Franc"
    },
    {
      code: "yer",
      label: "Yemeni Rial"
    },
    {
      code: "zar",
      label: "South African Rand"
    },
    {
      code: "zmk",
      label: "Zambian Kwacha"
    },
    {
      code: "zwl",
      label: "Zimbabwean Dollar"
    }
  ];
  
  export default currencies;
  