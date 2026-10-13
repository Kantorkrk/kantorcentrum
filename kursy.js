const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.326, 
        sell: 4.404
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.354,
        sell: 4.396
    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.87,
        sell: 3.929
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.845,
        sell: 3.91
    },
{
        code: "USD 1$,2$ ",
        flag: "🇺🇸",
        buy: 3.94,
        sell: 4.09
    },
    {
        code: "GBP Funt brytyjski",
        flag: "🇬🇧",
        buy: 5.126,
        sell: 5.195
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.656,
        sell: 4.73
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.675, 
        sell: 2.755
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.686,
        sell: 2.754
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1762,
        sell: 0.1805
    },
    {
        code: "DKK Korona duńska",
        flag: "🇩🇰",
        buy: 0.532,
        sell: 0.572
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.333,
        sell: 0.353
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.336,
        sell: 0.364
    },
    {
        code: "HUF Forint Węgry",
        flag: "🇭🇺",
        buy: 0.01163,
        sell: 0.01224
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0241,
        sell: 0.0259
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.965, 
    sell: 1.062
},
{
    code: "ALL Lek albański",
    flag: "🇦🇱",
    buy: 0.0463,
    sell: 0.0498
},
{
    code: "AMD Dram armeński",
    flag: "🇦🇲",
    buy: 0.0086,
    sell: 0.01247
},
{
    code: "ARS Peso argentyńskie",
    flag: "🇦🇷",
    buy: 0.00214,
    sell: 0.0047
},
{
    code: "AZN Manat azerski ",
    flag: "🇦🇿",
    buy: 2.13,
    sell: 2.439
},
{
    code: "BAM Marka Bośnia",
    flag: "🇧🇦",
    buy: 2.27,
    sell: 2.424
},
{
    code: "BDT Taka Bangladesz ",
    flag: "🇧🇩",
    buy: 0.0174,
    sell: 0.034
},
{
    code: "BHD Dinar Bahrajn",
    flag: "🇧🇭",
    buy: 9.1,
    sell: 10.15
},
{
    code: "BOB Boliviano ",
    flag: "🇧🇴",
    buy: 0.147,
    sell: 0.56
},
{
    code: "BYN Rubel białoruski",
    flag: "🇧🇾",
    buy: 1.061,
    sell: 1.438
},
    {
    code: "BRL Real brazylijski",
    flag: "🇧🇷",
    buy: 0.762,
    sell: 0.868
},
{
    code: "BBD",
    flag: "🇧🇧",
    buy: 1.62,
    sell: 2.35
},
{
    code: "BND",
    flag: "🇧🇳",
    buy: 2.54,
    sell: 3.27
},
{
    code: "BWP Pula bostwańska",
    flag: "🇧🇼",
    buy: 0.23,
    sell: 0.378
},
{
    code: "CNY Juan chiński",
    flag: "🇨🇳",
    buy: 0.533,
    sell: 0.597
},
{
    code: "CLP Peso chilijskie",
    flag: "🇨🇱",
    buy: 0.00382,
    sell: 0.00446
},
{
    code: "COP Peso kolumbijskie",
    flag: "🇨🇴",
    buy: 0.0086,
    sell: 0.0129
},
{
    code: "CRC Colon kostarykański",
    flag: "🇨🇷",
    buy: 0.00685,
    sell: 0.0107
},

{
    code: "CVE Escudo Cabo Verde",
    flag: "🇲🇭",
    buy: 0.033,
    sell: 0.0496
},
{
    code: "DOP Peso dominikańskie",
    flag: "🇩🇴",
    buy: 0.0585,
    sell: 0.075
},
{
    code: "EGP Funt egipski",
    flag: "🇪🇬",
    buy: 0.073,
    sell: 0.097
},
    {
    code: "ETB Bir etiopski ",
    flag: "🇪🇹",
    buy: 0.0155,
    sell: 0.0304
},
{
    code: "FJD dolar Fidżi",
    flag: "🇫🇯",
    buy: 1.52,
    sell: 1.825
},
{
    code: "GEL Lari gruzińskie",
    flag: "🇬🇪",
    buy: 1.45,
    sell: 1.558
},
{
    code: "GTQ Quetzal gwatemalski",
    flag: "🇬🇹",
    buy: 0.32,
    sell: 0.595
},
{
    code: "HKD Dolar hongkoński",
    flag: "🇭🇰",
    buy: 0.454,
    sell: 0.509
},
{
    code: "IDR Rupia indonezyjska",
    flag: "🇮🇩",
    buy: 0.000214,
    sell: 0.000272
},
{
    code: "ILS Szekel izraelski",
    flag: "🇮🇱",
    buy: 1.102,
    sell: 1.248
},
{
    code: "INR Rupia indyjska",
    flag: "🇮🇳",
    buy: 0.0383,
    sell: 0.0436
},
{
    code: "ISK Korona islandzka",
    flag: "🇮🇸",
    buy: 0.0243,
    sell: 0.0296
},
{
    code: "IQD Dinar iracki",
    flag: "🇮🇶",
    buy: 0.00203,
    sell: 0.00326
},
{
    code: "JOD Dinar jordański",
    flag: "🇯🇴",
    buy: 4.61,
    sell: 5.45
},
{
    code: "JMD Dolar jamajski",
    flag: "🇯🇲",
    buy: 0.0155,
    sell: 0.0296
},
{
    code: "KES Szyning kenisjki ",
    flag: "🇰🇪",
    buy: 0.026,
    sell: 0.0358
},
    {
    code: "KGS Som kirgiski",
    flag: "🇰🇬",
    buy: 0.0386,
    sell: 0.0554
},
{
    code: "KRW Won koreański ",
    flag: "🇰🇷",
    buy: 0.00276,
    sell: 0.00307
},
{
    code: "KZT Tenge kazachskie ",
    flag: "🇰🇿",
    buy: 0.0078,
    sell: 0.0106
},
{
    code: "KWD Dinar kuwejcki",
    flag: "🇰🇼",
    buy: 10.30,
    sell: 12.39
},
{
    code: "LAK Kip laotański ",
    flag: "🇱🇦",
    buy: 0.00012,
    sell: 0.000261
},
{
    code: "LKR Rupia lankijska ",
    flag: "🇱🇰",
    buy: 0.0102,
    sell: 0.0153
},
{
    code: "MAD Dirham marokański",
    flag: "🇲🇦",
    buy: 0.418,
    sell: 0.465
},
{
    code: "MDL Lej mołdawski",
    flag: "🇲🇩",
    buy: 0.217,
    sell: 0.262
},
{
    code: "MKD Denar macedoński",
    flag: "🇲🇰",
    buy: 0.0742,
    sell: 0.0795
},
{
    code: "MMK Kiat birmański ",
    flag: "🇲🇲",
    buy: 0.00106,
    sell: 0.00277
},
{
    code: "MNT Tugrik mongolski ",
    flag: "🇲🇳",
    buy: 0.00082,
    sell: 0.00118
},
{
    code: "MOP Pataca makau",
    flag: "🇲🇴",
    buy: 0.355,
    sell: 0.521
},
{
    code: "MUR Rupia maurytyjska",
    flag: "🇲🇺",
    buy: 0.073,
    sell: 0.113
},
{
    code: "MVR Rupia malediwska",
    flag: "🇲🇻",
    buy: 0.191,
    sell: 0.344
},
{
    code: "MXN Peso meksykańskie",
    flag: "🇲🇽",
    buy: 0.21,
    sell: 0.239
},
{
    code: "MYR Ringgit malezyjski ",
    flag: "🇲🇾",
    buy: 0.91,
    sell: 1.02
},
    {
    code: "NAD Dolar namibijski ",
    flag: "🇳🇦",
    buy: 0.171,
    sell: 0.277
},
{
    code: "NPR Rupia nepalska ",
    flag: "🇳🇵",
    buy: 0.02,
    sell: 0.0365
},
{
    code: "NZD Dolar nowozelandzki",
    flag: "🇳🇿",
    buy: 2.164,
    sell: 2.33
},
{
    code: "OMR Rial omański",
    flag: "🇴🇲",
    buy: 9.22,
    sell: 10.15
},
{
    code: "PEN Sol peruwiański ",
    flag: "🇵🇪",
    buy: 1.046,
    sell: 1.286
},
{
    code: "PHP Peso filipińskie",
    flag: "🇵🇭",
    buy: 0.0575,
    sell: 0.0744
},
{
    code: "PYG Guarani paragwajskie ",
    flag: "🇵🇾",
    buy: 0.00041,
    sell: 0.00074
},
{
    code: "RON Lej rumuński",
    flag: "🇷🇴",
    buy: 0.813,
    sell: 0.879
},
{
    code: "RUB Rubel rosyjski",
    flag: "🇷🇺",
    buy: 0.0413,
    sell: 0.0477
},
{
    code: "RSD Dinar serbski ",
    flag: "🇷🇸",
    buy: 0.0367,
    sell: 0.0407
},
{
    code: "QAR Rial katarski ",
    flag: "🇶🇦",
    buy: 0.94,
    sell: 1.067
},
{
    code: "SAR Rial saudyjski",
    flag: "🇸🇦",
    buy: 0.945,
    sell: 1.055
},
    {
    code: "SCR Rupia seszelska ",
    flag: "🇸🇨",
    buy: 0.26,
    sell: 0.367
},
    {
    code: "SGD",
    flag: "🇸🇬",
    buy: 2.81,
    sell: 3.055
},
{
    code: "THB",
    flag: "🇹🇭",
    buy: 0.1144,
    sell: 0.1224
},
{
    code: "TJS",
    flag: "🇹🇯",
    buy: 0.27,
    sell: 0.46
},
{
    code: "TND",
    flag: "🇹🇳",
    buy: 1.185,
    sell: 1.445
},
{
    code: "TRY",
    flag: "🇹🇷",
    buy: 0.0793,
    sell: 0.0878
},
{
    code: "TTD",
    flag: "🇹🇹",
    buy: 0.22,
    sell: 0.595
},
{
    code: "TWD",
    flag: "🇹🇼",
    buy: 0.103,
    sell: 0.149
},
{
    code: "TZS",
    flag: "🇹🇿",
    buy: 0.00138,
    sell: 0.00214
},
{
    code: "VND",
    flag: "🇻🇳",
    buy: 0.000143,
    sell: 0.000176
},
{
    code: "UAH",
    flag: "🇺🇦",
    buy: 0.0804,
    sell: 0.0856
},
{
    code: "UYU",
    flag: "🇺🇾",
    buy: 0.0828,
    sell: 0.0109
},
{
    code: "UZS",
    flag: "🇺🇿",
    buy: 0.000267,
    sell: 0.000497
},
{
    code: "ZAR",
    flag: "🇿🇦",
    buy: 0.234,
    sell: 0.27
},
];
