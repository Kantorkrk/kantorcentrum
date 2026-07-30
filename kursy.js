const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.275,
        sell: 4.348
    },
     {
        code: "EUR >10k EURO",
        flag: "🇪🇺",
        buy: 4.302,
        sell: 4.339
    },
    {
        code: "USD Dolar od 2009",
        flag: "🇺🇸",
        buy: 3.747,
        sell: 3.811
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.726,
        sell: 3.799
    },
    {
        code: "GBP Funt brytyjski",
        flag: "🇬🇧",
        buy: 4.985,
        sell: 5.056
    },
    {
        code: "CHF Frank szwajcarski",
        flag: "🇨🇭",
        buy: 4.59,
        sell: 4.665
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.566,
        sell: 2.668
    },
    {
        code: "CAD Dolar kanadyjski",
        flag: "🇨🇦",
        buy: 2.651,
        sell: 2.708
    },
    {
        code: "CZK Korona czeska ",
        flag: "🇨🇿",
        buy: 0.1752,
        sell: 0.1797
    },
    {
        code: "DKK Korona duńska",
        flag: "🇩🇰",
        buy: 0.536,
        sell: 0.579
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.322,
        sell: 0.3488
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
        buy: 0.01181,
        sell: 0.01239
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0232,
        sell: 0.0257
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.956,
    sell: 1.027
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
    buy: 0.0082,
    sell: 0.01206
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
    sell: 2.416
},
{
    code: "BDT Taka Bangladesz ",
    flag: "🇧🇩",
    buy: 0.017,
    sell: 0.033
},
{
    code: "BHD Dinar Bahrajn",
    flag: "🇧🇭",
    buy: 9.1,
    sell: 10.2
},
{
    code: "BOB",
    flag: "🇧🇴",
    buy: 0.34,
    sell: 0.66
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
    buy: 2.51,
    sell: 3.27
},
{
    code: "BWP",
    flag: "🇧🇼",
    buy: 0.21,
    sell: 0.377
},
{
    code: "CNY Juan chiński",
    flag: "🇨🇳",
    buy: 0.522,
    sell: 0.575
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
    buy: 0.715,
    sell: 0.935
},
    {
    code: "ETB",
    flag: "🇪🇹",
    buy: 0.015,
    sell: 0.03
},
{
    code: "FJD",
    flag: "🇫🇯",
    buy: 1.52,
    sell: 1.815
},
{
    code: "GEL",
    flag: "🇬🇪",
    buy: 1.445,
    sell: 1.537
},
{
    code: "GTQ",
    flag: "🇬🇹",
    buy: 0.35,
    sell: 0.598
},
{
    code: "HKD",
    flag: "🇭🇰",
    buy: 0.443,
    sell: 0.504
},
{
    code: "IDR",
    flag: "🇮🇩",
    buy: 0.000212,
    sell: 0.000258
},
{
    code: "ILS",
    flag: "🇮🇱",
    buy: 1.106,
    sell: 1.238
},
{
    code: "INR",
    flag: "🇮🇳",
    buy: 0.0384,
    sell: 0.0442
},
{
    code: "ISK",
    flag: "🇮🇸",
    buy: 0.0246,
    sell: 0.0288
},
{
    code: "IQD",
    flag: "🇮🇶",
    buy: 0.00232,
    sell: 0.00327
},
{
    code: "JOD",
    flag: "🇯🇴",
    buy: 4.62,
    sell: 5.44
},
{
    code: "JMD",
    flag: "🇯🇲",
    buy: 0.0155,
    sell: 0.0296
},
{
    code: "KES",
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
    code: "KRW",
    flag: "🇰🇷",
    buy: 0.002533,
    sell: 0.00268
},
{
    code: "KZT",
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
    buy: 0.416,
    sell: 0.458
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
    buy: 0.0715,
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
    sell: 0.234
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
    buy: 2.13,
    sell: 2.326
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
    buy: 1.044,
    sell: 1.279
},
{
    code: "PHP",
    flag: "🇵🇭",
    buy: 0.0574,
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
    buy: 0.0438,
    sell: 0.0503
},
{
    code: "RSD",
    flag: "🇷🇸",
    buy: 0.0366,
    sell: 0.0411
},
{
    code: "QAR",
    flag: "🇶🇦",
    buy: 0.906,
    sell: 1.065
},
{
    code: "SAR",
    flag: "🇸🇦",
    buy: 0.87,
    sell: 1.0
},
    {
    code: "SCR",
    flag: "🇸🇨",
    buy: 0.252,
    sell: 0.366
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
    buy: 0.1133,
    sell: 0.121
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
    buy: 0.0823,
    sell: 0.0897
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
