const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.26,
        sell: 4.338
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.284,
        sell: 4.315
    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.712,
        sell: 3.753
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.675,
        sell: 3.748
    },
    {
        code: "GBP Funt brytyjski",
        flag: "🇬🇧",
        buy: 4.97,
        sell: 5.047
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.565,
        sell: 4.654
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.57,
        sell: 2.648
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.603,
        sell: 2.676
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1752,
        sell: 0.1796
    },
    {
        code: "DKK Korona duńska",
        flag: "🇩🇰",
        buy: 0.531,
        sell: 0.578
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.318,
        sell: 0.3487
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.328,
        sell: 0.362
    },
    {
        code: "HUF Forint Węgry",
        flag: "🇭🇺",
        buy: 0.01174,
        sell: 0.01237
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0233,
        sell: 0.0255
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.972, 
    sell: 1.029
},
{
    code: "ALL Lek albański",
    flag: "🇦🇱",
    buy: 0.0456,
    sell: 0.0489
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
    sell: 0.0051
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
    sell: 2.418
},
{
    code: "BDT Taka Bangladesz ",
    flag: "🇧🇩",
    buy: 0.0175,
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
    sell: 0.828
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
    buy: 0.536,
    sell: 0.574
},
{
    code: "CLP Peso chilijskie",
    flag: "🇨🇱",
    buy: 0.00381,
    sell: 0.00452
},
{
    code: "COP Peso kolumbijskie",
    flag: "🇨🇴",
    buy: 0.0085,
    sell: 0.0127
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
    buy: 0.72,
    sell: 0.92
},
    {
    code: "ETB",
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
    sell: 1.537
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
    buy: 0.000212,
    sell: 0.000258
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
    sell: 0.0287
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
    code: "KGS",
    flag: "🇰🇬",
    buy: 0.038,
    sell: 0.0544
},
{
    code: "KRW Won koreański ",
    flag: "🇰🇷",
    buy: 0.002533,
    sell: 0.00268
},
{
    code: "KZT Tenge kazachskie ",
    flag: "🇰🇿",
    buy: 0.0075,
    sell: 0.0106
},
{
    code: "KWD",
    flag: "🇰🇼",
    buy: 10.60,
    sell: 12.25
},
{
    code: "LAK",
    flag: "🇱🇦",
    buy: 0.00012,
    sell: 0.00026
},
{
    code: "LKR",
    flag: "🇱🇰",
    buy: 0.0101,
    sell: 0.0158
},
{
    code: "MAD",
    flag: "🇲🇦",
    buy: 0.414,
    sell: 0.453
},
{
    code: "MDL",
    flag: "🇲🇩",
    buy: 0.221,
    sell: 0.267
},
{
    code: "MKD",
    flag: "🇲🇰",
    buy: 0.0724,
    sell: 0.0789
},
{
    code: "MMK",
    flag: "🇲🇲",
    buy: 0.0011,
    sell: 0.0028
},
{
    code: "MNT",
    flag: "🇲🇳",
    buy: 0.00082,
    sell: 0.00118
},
{
    code: "MOP",
    flag: "🇲🇴",
    buy: 0.355,
    sell: 0.521
},
{
    code: "MUR",
    flag: "🇲🇺",
    buy: 0.072,
    sell: 0.114
},
{
    code: "MVR",
    flag: "🇲🇻",
    buy: 0.191,
    sell: 0.347
},
{
    code: "MXN",
    flag: "🇲🇽",
    buy: 0.208,
    sell: 0.23
},
{
    code: "MYR",
    flag: "🇲🇾",
    buy: 0.895,
    sell: 0.995
},
    {
    code: "NAD",
    flag: "🇳🇦",
    buy: 0.171,
    sell: 0.277
},
{
    code: "NPR",
    flag: "🇳🇵",
    buy: 0.02,
    sell: 0.0365
},
{
    code: "NZD",
    flag: "🇳🇿",
    buy: 2.155,
    sell: 2.328
},
{
    code: "OMR",
    flag: "🇴🇲",
    buy: 8.72,
    sell: 9.99
},
{
    code: "PEN",
    flag: "🇵🇪",
    buy: 1.046,
    sell: 1.279
},
{
    code: "PHP",
    flag: "🇵🇭",
    buy: 0.0573,
    sell: 0.0744
},
{
    code: "PYG",
    flag: "🇵🇾",
    buy: 0.00036,
    sell: 0.00068
},
{
    code: "RON",
    flag: "🇷🇴",
    buy: 0.832,
    sell: 0.889
},
{
    code: "RUB",
    flag: "🇷🇺",
    buy: 0.0424,
    sell: 0.0502
},
{
    code: "RSD",
    flag: "🇷🇸",
    buy: 0.0365,
    sell: 0.0411
},
{
    code: "QAR",
    flag: "🇶🇦",
    buy: 0.90,
    sell: 1.064
},
{
    code: "SAR",
    flag: "🇸🇦",
    buy: 0.88,
    sell: 0.995
},
    {
    code: "SCR",
    flag: "🇸🇨",
    buy: 0.252,
    sell: 0.367
},
    {
    code: "SGD",
    flag: "🇸🇬",
    buy: 2.73,
    sell: 2.98
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
    buy: 0.0818,
    sell: 0.0895
},
{
    code: "TTD",
    flag: "🇹🇹",
    buy: 0.17,
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
    sell: 0.000167
},
{
    code: "UAH",
    flag: "🇺🇦",
    buy: 0.0792,
    sell: 0.0845
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
    buy: 0.224,
    sell: 0.262
},
];
