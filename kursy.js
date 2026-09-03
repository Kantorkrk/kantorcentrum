const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.277, 
        sell: 4.354
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.29 ,
        sell: 4.345
    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.69,
        sell: 3.755
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.645,
        sell: 3.745
    },
    {
        code: "GBP Funt brytyjski",
        flag: "🇬🇧",
        buy: 4.97,
        sell: 5.056
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.56,
        sell: 4.648
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.62, 
        sell: 2.697
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.621,
        sell: 2.704
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1763,
        sell: 0.181
    },
    {
        code: "DKK Korona duńska",
        flag: "🇩🇰",
        buy: 0.531,
        sell: 0.573
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.323,
        sell: 0.346
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.332,
        sell: 0.363
    },
    {
        code: "HUF Forint Węgry",
        flag: "🇭🇺",
        buy: 0.01161,
        sell: 0.01233
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0233,
        sell: 0.0249
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.963, 
    sell: 1.034
},
{
    code: "ALL Lek albański",
    flag: "🇦🇱",
    buy: 0.0462,
    sell: 0.0496
},
{
    code: "AMD Dram armeński",
    flag: "🇦🇲",
    buy: 0.0083,
    sell: 0.0121
},
{
    code: "ARS Peso argentyńskie",
    flag: "🇦🇷",
    buy: 0.0021,
    sell: 0.00485
},
{
    code: "AZN Manat azerski ",
    flag: "🇦🇿",
    buy: 2.12,
    sell: 2.435
},
{
    code: "BAM Marka Bośnia",
    flag: "🇧🇦",
    buy: 2.271,
    sell: 2.436
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
    buy: 1.061,
    sell: 1.445
},
    {
    code: "BRL Real brazylijski",
    flag: "🇧🇷",
    buy: 0.736,
    sell: 0.837
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
    buy: 0.523,
    sell: 0.585
},
{
    code: "CLP Peso chilijskie",
    flag: "🇨🇱",
    buy: 0.00382,
    sell: 0.0045
},
{
    code: "COP Peso kolumbijskie",
    flag: "🇨🇴",
    buy: 0.0083,
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
    buy: 0.0585,
    sell: 0.075
},
{
    code: "EGP Funt egipski",
    flag: "🇪🇬",
    buy: 0.072,
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
    buy: 1.432,
    sell: 1.547
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
    buy: 0.000208,
    sell: 0.000261
},
{
    code: "ILS Szekel izraelski",
    flag: "🇮🇱",
    buy: 1.101,
    sell: 1.24
},
{
    code: "INR Rupia indyjska",
    flag: "🇮🇳",
    buy: 0.038,
    sell: 0.0442
},
{
    code: "ISK Korona islandzka",
    flag: "🇮🇸",
    buy: 0.0233,
    sell: 0.0292
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
    buy: 4.52,
    sell: 5.47
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
    buy: 0.0374,
    sell: 0.0545
},
{
    code: "KRW Won koreański ",
    flag: "🇰🇷",
    buy: 0.00258,
    sell: 0.00292
},
{
    code: "KZT Tenge kazachskie ",
    flag: "🇰🇿",
    buy: 0.0077,
    sell: 0.0106
},
{
    code: "KWD Dinar kuwejcki",
    flag: "🇰🇼",
    buy: 10.50,
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
    sell: 0.0156
},
{
    code: "MAD Dirham marokański",
    flag: "🇲🇦",
    buy: 0.421,
    sell: 0.455
},
{
    code: "MDL Lej mołdawski",
    flag: "🇲🇩",
    buy: 0.217,
    sell: 0.256
},
{
    code: "MKD Denar macedoński",
    flag: "🇲🇰",
    buy: 0.0742,
    sell: 0.0799
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
    buy: 0.208,
    sell: 0.237
},
{
    code: "MYR Ringgit malezyjski ",
    flag: "🇲🇾",
    buy: 0.895,
    sell: 0.998
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
    sell: 2.34
},
{
    code: "OMR Rial omański",
    flag: "🇴🇲",
    buy: 8.82,
    sell: 9.95
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
    buy: 0.0575,
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
    buy: 0.821,
    sell: 0.888
},
{
    code: "RUB Rubel rosyjski",
    flag: "🇷🇺",
    buy: 0.041,
    sell: 0.0493
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
    buy: 0.906,
    sell: 1.063
},
{
    code: "SAR Rial saudyjski",
    flag: "🇸🇦",
    buy: 0.887,
    sell: 0.996
},
    {
    code: "SCR Rupia seszelska ",
    flag: "🇸🇨",
    buy: 0.254,
    sell: 0.367
},
    {
    code: "SGD",
    flag: "🇸🇬",
    buy: 2.741,
    sell: 2.98
},
{
    code: "THB",
    flag: "🇹🇭",
    buy: 0.1124,
    sell: 0.1209
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
    buy: 0.0788,
    sell: 0.0889
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
    buy: 0.232,
    sell: 0.263
},
];
