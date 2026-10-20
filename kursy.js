const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.32, 
        sell: 4.387
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.34,
        sell: 4.378
    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.866,
        sell: 3.917
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.846,
        sell: 3.899
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
        buy: 5.136,
        sell: 5.198
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.665,
        sell: 4.738
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.66, 
        sell: 2.738
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.706,
        sell: 2.777
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1762,
        sell: 0.1804
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
        buy: 0.338,
        sell: 0.355
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.337,
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
        sell: 0.02596
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.97, 
    sell: 1.06
},
{
    code: "ALL Lek albański",
    flag: "🇦🇱",
    buy: 0.0463,
    sell: 0.0497
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
    sell: 0.00456
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
    buy: 2.265,
    sell: 2.418
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
    buy: 1.066,
    sell: 1.436
},
    {
    code: "BRL Real brazylijski",
    flag: "🇧🇷",
    buy: 0.765,
    sell: 0.864
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
    buy: 0.536,
    sell: 0.599
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
    sell: 0.0749
},
{
    code: "EGP Funt egipski",
    flag: "🇪🇬",
    buy: 0.073,
    sell: 0.0965
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
    buy: 1.48,
    sell: 1.564
},
{
    code: "GTQ Quetzal gwatemalski",
    flag: "🇬🇹",
    buy: 0.36,
    sell: 0.595
},
{
    code: "HKD Dolar hongkoński",
    flag: "🇭🇰",
    buy: 0.456, 
    sell: 0.509
},
{
    code: "IDR Rupia indonezyjska",
    flag: "🇮🇩",
    buy: 0.000217,
    sell: 0.000272
},
{
    code: "ILS Szekel izraelski",
    flag: "🇮🇱",
    buy: 1.102,
    sell: 1.256
},
{
    code: "INR Rupia indyjska",
    flag: "🇮🇳",
    buy: 0.0388,
    sell: 0.0432
},
{
    code: "ISK Korona islandzka",
    flag: "🇮🇸",
    buy: 0.0243,
    sell: 0.0297
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
    buy: 4.84,
    sell: 5.46
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
    buy: 0.00278,
    sell: 0.00305
},
{
    code: "KZT Tenge kazachskie ",
    flag: "🇰🇿",
    buy: 0.00803,
    sell: 0.0107
},
{
    code: "KWD Dinar kuwejcki",
    flag: "🇰🇼",
    buy: 10.35,
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
    sell: 0.0147
},
{
    code: "MAD Dirham marokański",
    flag: "🇲🇦",
    buy: 0.418,
    sell: 0.45
},
{
    code: "MDL Lej mołdawski",
    flag: "🇲🇩",
    buy: 0.216,
    sell: 0.259
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
    buy: 0.075,
    sell: 0.112
},
{
    code: "MVR Rupia malediwska",
    flag: "🇲🇻",
    buy: 0.19,
    sell: 0.334
},
{
    code: "MXN Peso meksykańskie",
    flag: "🇲🇽",
    buy: 0.21,
    sell: 0.238
},
{
    code: "MYR Ringgit malezyjski ",
    flag: "🇲🇾",
    buy: 0.93,
    sell: 1.08
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
    buy: 2.16,
    sell: 2.326
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
    sell: 0.0743
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
    buy: 0.104,
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
    buy: 0.000144,
    sell: 0.000177
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
    buy: 0.057,
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
