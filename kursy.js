const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.265, 
        sell: 4.333
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.301,
        sell: 4.323

    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.714,
        sell: 3.741
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.675,
        sell: 3.729
    },
    {
        code: "GBP Funt brytyjski",
        flag: "🇬🇧",
        buy: 4.98,
        sell: 5.045
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.565,
        sell: 4.615
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.59, 
        sell: 2.667
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.63,
        sell: 2.698
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1753,
        sell: 0.1797
    },
    {
        code: "DKK Korona duńska",
        flag: "🇩🇰",
        buy: 0.531,
        sell: 0.576
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.316,
        sell: 0.344
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.328,
        sell: 0.363
    },
    {
        code: "HUF Forint Węgry",
        flag: "🇭🇺",
        buy: 0.01172,
        sell: 0.01235
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0233,
        sell: 0.0254
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.964, 
    sell: 1.029
},
{
    code: "ALL Lek albański",
    flag: "🇦🇱",
    buy: 0.0457,
    sell: 0.0491
},
{
    code: "AMD Dram armeński",
    flag: "🇦🇲",
    buy: 0.0083,
    sell: 0.0122
},
{
    code: "ARS Peso argentyńskie",
    flag: "🇦🇷",
    buy: 0.0021,
    sell: 0.0049
},
{
    code: "AZN Manat azerski ",
    flag: "🇦🇿",
    buy: 2.11,
    sell: 2.425
},
{
    code: "BAM Marka Bośnia",
    flag: "🇧🇦",
    buy: 2.26,
    sell: 2.44
},
{
    code: "BDT Taka Bangladesz ",
    flag: "🇧🇩",
    buy: 0.0172,
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
    buy: 0.146,
    sell: 0.59
},
{
    code: "BYN Rubel białoruski",
    flag: "🇧🇾",
    buy: 1.05,
    sell: 1.445
},
    {
    code: "BRL Real brazylijski",
    flag: "🇧🇷",
    buy: 0.736,
    sell: 0.835
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
    buy: 0.21,
    sell: 0.377
},
{
    code: "CNY Juan chiński",
    flag: "🇨🇳",
    buy: 0.533,
    sell: 0.574
},
{
    code: "CLP Peso chilijskie",
    flag: "🇨🇱",
    buy: 0.00381,
    sell: 0.00453
},
{
    code: "COP Peso kolumbijskie",
    flag: "🇨🇴",
    buy: 0.0088,
    sell: 0.0129
},
{
    code: "CRC Colon kostarykański",
    flag: "🇨🇷",
    buy: 0.00683,
    sell: 0.0107
},
{
    code: "DOP Peso dominikańskie",
    flag: "🇩🇴",
    buy: 0.0575,
    sell: 0.075
},
{
    code: "EGP Funt egipski",
    flag: "🇪🇬",
    buy: 0.072,
    sell: 0.0947
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
    buy: 1.442,
    sell: 1.538
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
    buy: 0.442,
    sell: 0.504
},
{
    code: "IDR Rupia indonezyjska",
    flag: "🇮🇩",
    buy: 0.000207,
    sell: 0.000257
},
{
    code: "ILS Szekel izraelski",
    flag: "🇮🇱",
    buy: 1.102,
    sell: 1.236
},
{
    code: "INR Rupia indyjska",
    flag: "🇮🇳",
    buy: 0.0384,
    sell: 0.0442
},
{
    code: "ISK Korona islandzka",
    flag: "🇮🇸",
    buy: 0.0233,
    sell: 0.0288
},
{
    code: "IQD Dinar iracki",
    flag: "🇮🇶",
    buy: 0.00232,
    sell: 0.00327
},
{
    code: "JOD Dinar jordański",
    flag: "🇯🇴",
    buy: 4.62,
    sell: 5.44
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
    buy: 0.038,
    sell: 0.0544
},
{
    code: "KRW Won koreański ",
    flag: "🇰🇷",
    buy: 0.00254,
    sell: 0.00277
},
{
    code: "KZT Tenge kazachskie ",
    flag: "🇰🇿",
    buy: 0.0075,
    sell: 0.0106
},
{
    code: "KWD Dinar kuwejcki",
    flag: "🇰🇼",
    buy: 10.60,
    sell: 12.25
},
{
    code: "LAK Kip laotański ",
    flag: "🇱🇦",
    buy: 0.00012,
    sell: 0.00026
},
{
    code: "LKR Rupia lankijska ",
    flag: "🇱🇰",
    buy: 0.0101,
    sell: 0.0158
},
{
    code: "MAD Dirham marokański",
    flag: "🇲🇦",
    buy: 0.421,
    sell: 0.459
},
{
    code: "MDL Lej mołdawski",
    flag: "🇲🇩",
    buy: 0.221,
    sell: 0.267
},
{
    code: "MKD Denar macedoński",
    flag: "🇲🇰",
    buy: 0.0741,
    sell: 0.0793
},
{
    code: "MMK Kiat birmański ",
    flag: "🇲🇲",
    buy: 0.0011,
    sell: 0.0028
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
    buy: 0.072,
    sell: 0.114
},
{
    code: "MVR Rupia malediwska",
    flag: "🇲🇻",
    buy: 0.191,
    sell: 0.347
},
{
    code: "MXN Peso meksykańskie",
    flag: "🇲🇽",
    buy: 0.208,
    sell: 0.23
},
{
    code: "MYR Ringgit malezyjski ",
    flag: "🇲🇾",
    buy: 0.895,
    sell: 0.995
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
    buy: 2.155,
    sell: 2.334
},
{
    code: "OMR Rial omański",
    flag: "🇴🇲",
    buy: 8.73,
    sell: 9.98
},
{
    code: "PEN Sol peruwiański ",
    flag: "🇵🇪",
    buy: 1.046,
    sell: 1.279
},
{
    code: "PHP Peso filipińskie",
    flag: "🇵🇭",
    buy: 0.0573,
    sell: 0.0744
},
{
    code: "PYG Guarani paragwajskie ",
    flag: "🇵🇾",
    buy: 0.00036,
    sell: 0.00068
},
{
    code: "RON Lej rumuński",
    flag: "🇷🇴",
    buy: 0.833,
    sell: 0.889
},
{
    code: "RUB Rubel rosyjski",
    flag: "🇷🇺",
    buy: 0.0422,
    sell: 0.0495
},
{
    code: "RSD Dinar serbski ",
    flag: "🇷🇸",
    buy: 0.0366,
    sell: 0.0413
},
{
    code: "QAR Rial katarski ",
    flag: "🇶🇦",
    buy: 0.90,
    sell: 1.064
},
{
    code: "SAR Rial saudyjski",
    flag: "🇸🇦",
    buy: 0.885,
    sell: 0.995
},
    {
    code: "SCR Rupia seszelska ",
    flag: "🇸🇨",
    buy: 0.252,
    sell: 0.367
},
    {
    code: "SGD",
    flag: "🇸🇬",
    buy: 2.735,
    sell: 2.975
},
{
    code: "THB",
    flag: "🇹🇭",
    buy: 0.1118,
    sell: 0.1206
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
    buy: 0.0816,
    sell: 0.0894
},
{
    code: "TTD",
    flag: "🇹🇹",
    buy: 0.19,
    sell: 0.377
},
{
    code: "TWD",
    flag: "🇹🇼",
    buy: 0.10,
    sell: 0.151
},
{
    code: "TZS",
    flag: "🇹🇿",
    buy: 0.00138,
    sell: 0.00199
},
{
    code: "VND",
    flag: "🇻🇳",
    buy: 0.000142,
    sell: 0.000169
},
{
    code: "UAH",
    flag: "🇺🇦",
    buy: 0.0791,
    sell: 0.0843
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
    buy: 0.000261,
    sell: 0.000498
},
{
    code: "ZAR",
    flag: "🇿🇦",
    buy: 0.2312,
    sell: 0.262
},
];
