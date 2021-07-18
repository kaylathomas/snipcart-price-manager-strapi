let currencies = [
    {
      value: "usd",
      label: "United States Dollar"
    },
    {
      value: "cad",
      label: "Canadian Dollar"
    },
    {
      value: "eur",
      label: "European Pound"
    },
    {
      value: "aed",
      label: "United Arab Emirates Dirham"
    },
    {
      value: "afn",
      label: "Afghan Afghani"
    },
    {
      value: "all",
      label: "All"
    },
    {
      value: "amd",
      label: "Armenian Dram"
    },
    {
      value: "ang",
      label: "Netherlands Antillean Guilder"
    },
    {
      value: "aoa",
      label: "Angolan Kwanza"
    },
    {
      value: "ars",
      label: "Argentine Peso"
    },
    {
      value: "aud",
      label: "Australian Dollar"
    },
    {
      value: "awg",
      label: "Aruban Florin"
    },
    {
      value: "azn",
      label: "Azerbaijani Manat"
    },
    {
      value: "bam",
      label: "Bosnia and Herzegovina Convertible Mark"
    },
    {
      value: "bbd",
      label: "Barbadian Dollar"
    },
    {
      value: "bdt",
      label: "Bangladeshi Taka"
    },
    {
      value: "bgn",
      label: "Bulgarian Lev"
    },
    {
      value: "bhd",
      label: "Bahraini Dinar"
    },
    {
      value: "bif",
      label: "Burundian Franc"
    },
    {
      value: "bmd",
      label: "Bermudian Dollar"
    },
    {
      value: "bnd",
      label: "Brunei Dollar"
    },
    {
      value: "bob",
      label: "Bolivian Boliviano"
    },
    {
      value: "brl",
      label: "Brazilian Real"
    },
    {
      value: "bsd",
      label: "Bahamian Dollar"
    },
    {
      value: "btn",
      label: "Bhutanese Ngultrum"
    },
    {
      value: "bwp",
      label: "Botswana Pula"
    },
    {
      value: "byr",
      label: "Belarusian Ruble"
    },
    {
      value: "bzd",
      label: "Belize Dollar"
    },
    {
      value: "cdf",
      label: "Congolese Franc"
    },
    {
      value: "chf",
      label: "Swiss Franc"
    },
    {
      value: "clp",
      label: "Chilean Peso"
    },
    {
      value: "cny",
      label: "Chinese Yuan"
    },
    {
      value: "cop",
      label: "Colombian Peso"
    },
    {
      value: "crc",
      label: "Costa Rican Colón"
    },
    {
      value: "cup",
      label: "Cuban Peso"
    },
    {
      value: "cve",
      label: "Cape Verdean Escudo"
    },
    {
      value: "czk",
      label: "Czech Koruna"
    },
    {
      value: "djf",
      label: "Djiboutian Franc"
    },
    {
      value: "dkk",
      label: "Danish Krone"
    },
    {
      value: "dop",
      label: "Dominican Peso"
    },
    {
      value: "dzd",
      label: "Algerian Dinar"
    },
    {
      value: "egp",
      label: "Egyptian Pound"
    },
    {
      value: "ern",
      label: "Eritrean Nakfa"
    },
    {
      value: "etb",
      label: "Ethiopian Birr"
    },
    {
      value: "fjd",
      label: "Fijian Dollar"
    },
    {
      value: "fkp",
      label: "Falkland Islands Pound"
    },
    {
      value: "gbp",
      label: "British Pound Sterling"
    },
    {
      value: "gel",
      label: "Georgian Lari"
    },
    {
      value: "ghs",
      label: "Ghanaian Cedi"
    },
    {
      value: "gip",
      label: "Gibraltar Pound"
    },
    {
      value: "gmd",
      label: "Gambian Dalasi"
    },
    {
      value: "gnf",
      label: "Guinean Franc"
    },
    {
      value: "gtq",
      label: "Guatemalan Quetzal"
    },
    {
      value: "gyd",
      label: "Guyanese Dollar"
    },
    {
      value: "hkd",
      label: "Hong Kong Dollar"
    },
    {
      value: "hnl",
      label: "Honduran Lempira"
    },
    {
      value: "hrk",
      label: "Croatian Kuna"
    },
    {
      value: "htg",
      label: "Haitian Gourde"
    },
    {
      value: "huf",
      label: "Hungarian Forint"
    },
    {
      value: "idr",
      label: "Indonesian Rupiah"
    },
    {
      value: "ils",
      label: "Israeli New Shekel"
    },
    {
      value: "inr",
      label: "Indian Rupee"
    },
    {
      value: "iqd",
      label: "Iraqi Dinar"
    },
    {
      value: "irr",
      label: "Iranian Rial"
    },
    {
      value: "isk",
      label: "Icelandic Króna"
    },
    {
      value: "jmd",
      label: "Jamaican Dollar"
    },
    {
      value: "jod",
      label: "Jordanian Dinar"
    },
    {
      value: "jpy",
      label: "Japanese Yen"
    },
    {
      value: "kes",
      label: "Kenyan Shilling"
    },
    {
      value: "kgs",
      label: "Wikipedia"
    },
    {
      value: "khr",
      label: "Cambodian Riel"
    },
    {
      value: "kmf",
      label: "Kyrgyzstani Som"
    },
    {
      value: "kpw",
      label: "North Korean Won"
    },
    {
      value: "krw",
      label: "South Korean Won"
    },
    {
      value: "kwd",
      label: "Kuwaiti Dinar"
    },
    {
      value: "kyd",
      label: "Cayman Islands Dollar"
    },
    {
      value: "kzt",
      label: "Kazakhstani Tenge"
    },
    {
      value: "lak",
      label: "Lao Kip"
    },
    {
      value: "lbp",
      label: "Lebanese Pound"
    },
    {
      value: "lkr",
      label: "Sri Lankan Rupee"
    },
    {
      value: "lrd",
      label: "Liberian Dollar"
    },
    {
      value: "lsl",
      label: "Lesotho Loti"
    },
    {
      value: "ltl",
      label: "Lithuanian Litas"
    },
    {
      value: "lvl",
      label: "Latvian Lats"
    },
    {
      value: "lyd",
      label: "Libyan Dinar"
    },
    {
      value: "mad",
      label: "Moroccan Dirham"
    },
    {
      value: "mdl",
      label: "Moldovan Leu"
    },
    {
      value: "mga",
      label: "Malagasy Ariary"
    },
    {
      value: "mkd",
      label: "Macedonian Denar"
    },
    {
      value: "mmk",
      label: "Myanmar Kyat"
    },
    {
      value: "mnt",
      label: "Mongolian Tögrög"
    },
    {
      value: "mop",
      label: "Macanese Pataca"
    },
    {
      value: "mro",
      label: "Mauritanian Ouguiya"
    },
    {
      value: "mur",
      label: "Mauritian Rupee"
    },
    {
      value: "mvr",
      label: "Maldivian Rufiyaa"
    },
    {
      value: "mwk",
      label: "Malawian Kwacha"
    },
    {
      value: "mxn",
      label: "Mexican Peso"
    },
    {
      value: "myr",
      label: "Malaysian Ringgit"
    },
    {
      value: "mzn",
      label: "Mozambican Metical"
    },
    {
      value: "nad",
      label: "Namibian Dollar"
    },
    {
      value: "ngn",
      label: "Nigerian Naira"
    },
    {
      value: "nio",
      label: "Namibian Dollar"
    },
    {
      value: "nok",
      label: "Norwegian Krone"
    },
    {
      value: "npr",
      label: "Nepalese Rupee"
    },
    {
      value: "nzd",
      label: "New Zealand Dollar"
    },
    {
      value: "omr",
      label: "Omani Rial"
    },
    {
      value: "pab",
      label: "Panamanian Balboa"
    },
    {
      value: "pen",
      label: "Peruvian Sol"
    },
    {
      value: "pgk",
      label: "Papua New Guinean Kina"
    },
    {
      value: "php",
      label: "Philippine Peso"
    },
    {
      value: "pkr",
      label: "Pakistani Rupee"
    },
    {
      value: "pln",
      label: "Polish Złoty"
    },
    {
      value: "pyg",
      label: "Paraguayan Guaraní"
    },
    {
      value: "qar",
      label: "Qatari Riyal"
    },
    {
      value: "ron",
      label: "Romanian Leu"
    },
    {
      value: "rsd",
      label: "Serbian Dinar"
    },
    {
      value: "rub",
      label: "Russian Ruble"
    },
    {
      value: "rwf",
      label: "Rwandan Franc"
    },
    {
      value: "sar",
      label: "Saudi Riyal"
    },
    {
      value: "sbd",
      label: "Solomon Islands Dollar"
    },
    {
      value: "scr",
      label: "Seychellois Rupee"
    },
    {
      value: "sdg",
      label: "Sudanese Pound"
    },
    {
      value: "sek",
      label: "Swedish Krona"
    },
    {
      value: "sgd",
      label: "Singapore Dollar"
    },
    {
      value: "shp",
      label: "Saint Helena Pound"
    },
    {
      value: "sll",
      label: "Sierra Leonean Leone"
    },
    {
      value: "sos",
      label: "Somali Shilling"
    },
    {
      value: "srd",
      label: "Surinamese Dollar"
    },
    {
      value: "ssp",
      label: "South Sudanese Pound"
    },
    {
      value: "std",
      label: "São Tomé and Príncipe Dobra"
    },
    {
      value: "syp",
      label: "Syrian Pound"
    },
    {
      value: "szl",
      label: "Swazi Lilangeni"
    },
    {
      value: "thb",
      label: "Thai Baht"
    },
    {
      value: "tjs",
      label: "Wikipedia"
    },
    {
      value: "tmt",
      label: "Tajikistani Somoni"
    },
    {
      value: "tnd",
      label: "Tunisian Dinar"
    },
    {
      value: "top",
      label: "Tonga Pa’anga"
    },
    {
      value: "try",
      label: "Turkish Lira"
    },
    {
      value: "ttd",
      label: "Trinidad And Tobago Dollar"
    },
    {
      value: "twd",
      label: "New Taiwan Dollar"
    },
    {
      value: "tzs",
      label: "Tanzanian Shilling"
    },
    {
      value: "uah",
      label: "Ukrainian Hryvnia"
    },
    {
      value: "ugx",
      label: "Ugandan Shilling"
    },
    {
      value: "uyu",
      label: "Uruguayan Peso"
    },
    {
      value: "uzs",
      label: "Uzbekistani Soʻm"
    },
    {
      value: "vef",
      label: "Venezuelan Bolívar"
    },
    {
      value: "vnd",
      label: "Vietnamese Dong"
    },
    {
      value: "vuv",
      label: "Vanuatu Vatu"
    },
    {
      value: "wst",
      label: "Samoan Tālā"
    },
    {
      value: "xaf",
      label: "Central African Cfa Franc"
    },
    {
      value: "xcd",
      label: "Eastern Caribbean Dollar"
    },
    {
      value: "xof",
      label: "West African Cfa Franc"
    },
    {
      value: "xpf",
      label: "Cfp Franc"
    },
    {
      value: "yer",
      label: "Yemeni Rial"
    },
    {
      value: "zar",
      label: "South African Rand"
    },
    {
      value: "zmk",
      label: "Zambian Kwacha"
    },
    {
      value: "zwl",
      label: "Zimbabwean Dollar"
    }
  ];

  // Programatically adds the value element (region code) to the label for rendering
  currencies.forEach(currency => {
      let currentLabel = currency.label
      currency.label = `${currentLabel} | ${currency.value.toUpperCase()}`
  })
  
  export default currencies;
  