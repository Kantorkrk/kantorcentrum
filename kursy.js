const currencies = [
    {
        code: "EU",
        flag: "🇪🇺",
        buy: 4.26,
        sell: 4.35
    },
    {
        code: "USD",
        flag: "🇺🇸",
        buy: 3.71,
        sell: 3.80
    },
    {
        code: "GBP",
        flag: "🇬🇧",
        buy: 4.97,
        sell: 5.11
    },
    {
        code: "CHF",
        flag: "🇨🇭",
        buy: 4.57,
        sell: 4.71
    },
    {
        code: "AUD",
        flag: "🇦🇺",
        buy: 2.57,
        sell: 2.65
    },
    {
        code: "CAD",
        flag: "🇨🇦",
        buy: 2.65,
        sell: 2.72
    },
    {
        code: "CZK",
        flag: "🇨🇿",
        buy: 0.16,
        sell: 0.18
    },
    {
        code: "DKK",
        flag: "🇩🇰",
        buy: 0.56,
        sell: 0.59
    },
    {
        code: "NOK",
        flag: "🇳🇴",
        buy: 0.31,
        sell: 0.353
    },
    {
        code: "SEK",
        flag: "🇸🇪",
        buy: 0.32,
        sell: 0.365
    },
    {
        code: "HUF",
        flag: "🇭🇺",
        buy: 0.010,
        sell: 0.012
    },
    {
        code: "JPY",
        flag: "🇯🇵",
        buy: 0.023,
        sell: 0.026
    },
    {
    code: "AED",
    flag: "🇦🇪",
    buy: 0.97,
    sell: 1.02
},
{
    code: "ALL",
    flag: "🇦🇱",
    buy: 0.046,
    sell: 0.0489
},
{
    code: "AMD",
    flag: "🇦🇲",
    buy: 0.0082,
    sell: 0.01206
},
{
    code: "ARS",
    flag: "🇦🇷",
    buy: 0.0021,
    sell: 0.0052
},
{
    code: "AZN",
    flag: "🇦🇿",
    buy: 2.11,
    sell: 2.425
},
{
    code: "BAM",
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
    buy: 0.53,
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
    sell: 1.51
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
    buy: 0.452,
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
    buy: 0.00251,
    sell: 0.0027
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
    sell: 0.237
},
{
    code: "MYR",
    flag: "🇲🇾",
    buy: 0.895,
    sell: 0.995
},
];
