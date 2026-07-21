const currencies = [
    {
        code: "EUR EURO",
        flag: "🇪🇺",
        buy: 4.266,
        sell: 4.355
    },
    {
        code: "USD Dolar od 2013",
        flag: "🇺🇸",
        buy: 3.733,
        sell: 3.807
    },
     {
        code: "USD old",
        flag: "🇺🇸",
        buy: 3.705,
        sell: 3.797
    },
    {
        code: "GBP Funt Brytysjki",
        flag: "🇬🇧",
        buy: 5.005,
        sell: 5.097
    },
    {
        code: "CHF Frank Szwajcarski",
        flag: "🇨🇭",
        buy: 4.622,
        sell: 4.706
    },
    {
        code: "AUD Dolar australijski ",
        flag: "🇦🇺",
        buy: 2.566,
        sell: 2.67
    },
    {
        code: "CAD Kanada",
        flag: "🇨🇦",
        buy: 2.646,
        sell: 2.709
    },
    {
        code: "CZK Korona Czeska ",
        flag: "🇨🇿",
        buy: 0.175,
        sell: 0.18
    },
    {
        code: "DKK Korona duśnka",
        flag: "🇩🇰",
        buy: 0.538,
        sell: 0.583
    },
    {
        code: "NOK Korona norweska",
        flag: "🇳🇴",
        buy: 0.312,
        sell: 0.353
    },
    {
        code: "SEK Korona szwedzka ",
        flag: "🇸🇪",
        buy: 0.32,
        sell: 0.364
    },
    {
        code: "HUF Forint Węgry",
        flag: "🇭🇺",
        buy: 0.01182,
        sell: 0.01239
    },
    {
        code: "JPY Jen japoński",
        flag: "🇯🇵",
        buy: 0.0231,
        sell: 0.0258
    },
    {
    code: "AED Dirham ZEA  ",
    flag: "🇦🇪",
    buy: 0.966,
    sell: 1.026
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
    sell: 0.0052
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
    buy: 2.24,
    sell: 2.41
},
{
    code: "BDT",
    flag: "🇧🇩",
    buy: 0.017,
    sell: 0.033
},
{
    code: "BHD",
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
    code: "BYN",
    flag: "🇧🇾",
    buy: 1.05,
    sell: 1.445
},
    {
    code: "BRL",
    flag: "🇧🇷",
    buy: 0.74,
    sell: 0.83
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
    code: "CNY",
    flag: "🇨🇳",
    buy: 0.522,
    sell: 0.575
},
{
    code: "CLP",
    flag: "🇨🇱",
    buy: 0.00381,
    sell: 0.00452
},
{
    code: "COP",
    flag: "🇨🇴",
    buy: 0.0085,
    sell: 0.0122
},
{
    code: "CRC",
    flag: "🇨🇷",
    buy: 0.00683,
    sell: 0.0107
},
{
    code: "DOP",
    flag: "🇩🇴",
    buy: 0.0575,
    sell: 0.075
},
{
    code: "EGP",
    flag: "🇪🇬",
    buy: 0.71,
    sell: 0.93
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
    buy: 1.43,
    sell: 1.515
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
    buy: 0.442,
    sell: 0.505
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
    buy: 1.12,
    sell: 1.25
},
{
    code: "INR",
    flag: "🇮🇳",
    buy: 0.0375,
    sell: 0.0445
},
{
    code: "ISK",
    flag: "🇮🇸",
    buy: 0.027,
    sell: 0.0293
},
{
    code: "IQD",
    flag: "🇮🇶",
    buy: 0.00232,
    sell: 0.00324
},
{
    code: "JOD",
    flag: "🇯🇴",
    buy: 4.65,
    sell: 5.45
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
    buy: 0.00252,
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
    buy: 0.419,
    sell: 0.458
},
{
    code: "MDL",
    flag: "🇲🇩",
    buy: 0.221,
    sell: 0.268
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
    buy: 0.071,
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
    buy: 0.207,
    sell: 0.236
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
    buy: 2.14,
    sell: 2.325
},
{
    code: "OMR",
    flag: "🇴🇲",
    buy: 8.62,
    sell: 10.1
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
    buy: 0.0575,
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
    buy: 0.0433,
    sell: 0.0505
},
{
    code: "RSD",
    flag: "🇷🇸",
    buy: 0.0366,
    sell: 0.0408
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
    buy: 0.25,
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
    buy: 0.0826,
    sell: 0.0898
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
    buy: 0.000143,
    sell: 0.000167
},
{
    code: "UAH",
    flag: "🇺🇦",
    buy: 0.0801,
    sell: 0.0849
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
    sell: 0.264
},
];
