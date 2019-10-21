define.alias("shared/access/service", "logging/access/service");
define.alias("shared/all-dns-records/service", "logging/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "logging/all-storage-classes/service");
define.alias("shared/all-workloads/service", "logging/all-workloads/service");
define.alias("shared/amazon/util", "logging/amazon/util");
define.alias("shared/azure-ad/service", "logging/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "logging/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "logging/calculate-position/util");
define.alias("shared/capabilities/service", "logging/capabilities/service");
define.alias("shared/catalog/service", "logging/catalog/service");
define("logging/cldrs/ar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ar-SA",
    "parentLocale": "ar"
  }, {
    "locale": "ar",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n,
          n100 = t0 && s[0].slice(-2);
      if (ord) return "other";
      return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "السنة",
        "relative": {
          "0": "السنة الحالية",
          "1": "السنة التالية",
          "-1": "السنة الماضية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} سنة",
            "one": "خلال سنة واحدة",
            "two": "خلال سنتين",
            "few": "خلال {0} سنوات",
            "many": "خلال {0} سنة",
            "other": "خلال {0} سنة"
          },
          "past": {
            "zero": "قبل {0} سنة",
            "one": "قبل سنة واحدة",
            "two": "قبل سنتين",
            "few": "قبل {0} سنوات",
            "many": "قبل {0} سنة",
            "other": "قبل {0} سنة"
          }
        }
      },
      "month": {
        "displayName": "الشهر",
        "relative": {
          "0": "هذا الشهر",
          "1": "الشهر التالي",
          "-1": "الشهر الماضي"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} شهر",
            "one": "خلال شهر واحد",
            "two": "خلال شهرين",
            "few": "خلال {0} أشهر",
            "many": "خلال {0} شهرًا",
            "other": "خلال {0} شهر"
          },
          "past": {
            "zero": "قبل {0} شهر",
            "one": "قبل شهر واحد",
            "two": "قبل شهرين",
            "few": "قبل {0} أشهر",
            "many": "قبل {0} شهرًا",
            "other": "قبل {0} شهر"
          }
        }
      },
      "day": {
        "displayName": "يوم",
        "relative": {
          "0": "اليوم",
          "1": "غدًا",
          "2": "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} يوم",
            "one": "خلال يوم واحد",
            "two": "خلال يومين",
            "few": "خلال {0} أيام",
            "many": "خلال {0} يومًا",
            "other": "خلال {0} يوم"
          },
          "past": {
            "zero": "قبل {0} يوم",
            "one": "قبل يوم واحد",
            "two": "قبل يومين",
            "few": "قبل {0} أيام",
            "many": "قبل {0} يومًا",
            "other": "قبل {0} يوم"
          }
        }
      },
      "hour": {
        "displayName": "الساعات",
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ساعة",
            "one": "خلال ساعة واحدة",
            "two": "خلال ساعتين",
            "few": "خلال {0} ساعات",
            "many": "خلال {0} ساعة",
            "other": "خلال {0} ساعة"
          },
          "past": {
            "zero": "قبل {0} ساعة",
            "one": "قبل ساعة واحدة",
            "two": "قبل ساعتين",
            "few": "قبل {0} ساعات",
            "many": "قبل {0} ساعة",
            "other": "قبل {0} ساعة"
          }
        }
      },
      "minute": {
        "displayName": "الدقائق",
        "relativeTime": {
          "future": {
            "zero": "خلال {0} دقيقة",
            "one": "خلال دقيقة واحدة",
            "two": "خلال دقيقتين",
            "few": "خلال {0} دقائق",
            "many": "خلال {0} دقيقة",
            "other": "خلال {0} دقيقة"
          },
          "past": {
            "zero": "قبل {0} دقيقة",
            "one": "قبل دقيقة واحدة",
            "two": "قبل دقيقتين",
            "few": "قبل {0} دقائق",
            "many": "قبل {0} دقيقة",
            "other": "قبل {0} دقيقة"
          }
        }
      },
      "second": {
        "displayName": "الثواني",
        "relative": {
          "0": "الآن"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ثانية",
            "one": "خلال ثانية واحدة",
            "two": "خلال ثانيتين",
            "few": "خلال {0} ثوانِ",
            "many": "خلال {0} ثانية",
            "other": "خلال {0} ثانية"
          },
          "past": {
            "zero": "قبل {0} ثانية",
            "one": "قبل ثانية واحدة",
            "two": "قبل ثانيتين",
            "few": "قبل {0} ثوانِ",
            "many": "قبل {0} ثانية",
            "other": "قبل {0} ثانية"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "de-de",
    "parentLocale": "de"
  }, {
    "locale": "de",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Jahr",
        "relative": {
          "0": "dieses Jahr",
          "1": "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Jahr",
            "other": "in {0} Jahren"
          },
          "past": {
            "one": "vor {0} Jahr",
            "other": "vor {0} Jahren"
          }
        }
      },
      "month": {
        "displayName": "Monat",
        "relative": {
          "0": "diesen Monat",
          "1": "nächsten Monat",
          "-1": "letzten Monat"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Monat",
            "other": "in {0} Monaten"
          },
          "past": {
            "one": "vor {0} Monat",
            "other": "vor {0} Monaten"
          }
        }
      },
      "day": {
        "displayName": "Tag",
        "relative": {
          "0": "heute",
          "1": "morgen",
          "2": "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Tag",
            "other": "in {0} Tagen"
          },
          "past": {
            "one": "vor {0} Tag",
            "other": "vor {0} Tagen"
          }
        }
      },
      "hour": {
        "displayName": "Stunde",
        "relativeTime": {
          "future": {
            "one": "in {0} Stunde",
            "other": "in {0} Stunden"
          },
          "past": {
            "one": "vor {0} Stunde",
            "other": "vor {0} Stunden"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relativeTime": {
          "future": {
            "one": "in {0} Minute",
            "other": "in {0} Minuten"
          },
          "past": {
            "one": "vor {0} Minute",
            "other": "vor {0} Minuten"
          }
        }
      },
      "second": {
        "displayName": "Sekunde",
        "relative": {
          "0": "jetzt"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Sekunde",
            "other": "in {0} Sekunden"
          },
          "past": {
            "one": "vor {0} Sekunde",
            "other": "vor {0} Sekunden"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "en-US",
    "parentLocale": "en"
  }, {
    "locale": "en",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/es", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "es-es",
    "parentLocale": "es"
  }, {
    "locale": "es",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "año",
        "relative": {
          "0": "este año",
          "1": "el próximo año",
          "-1": "el año pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} año",
            "other": "dentro de {0} años"
          },
          "past": {
            "one": "hace {0} año",
            "other": "hace {0} años"
          }
        }
      },
      "month": {
        "displayName": "mes",
        "relative": {
          "0": "este mes",
          "1": "el próximo mes",
          "-1": "el mes pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} mes",
            "other": "dentro de {0} meses"
          },
          "past": {
            "one": "hace {0} mes",
            "other": "hace {0} meses"
          }
        }
      },
      "day": {
        "displayName": "día",
        "relative": {
          "0": "hoy",
          "1": "mañana",
          "2": "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} día",
            "other": "dentro de {0} días"
          },
          "past": {
            "one": "hace {0} día",
            "other": "hace {0} días"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relativeTime": {
          "future": {
            "one": "dentro de {0} hora",
            "other": "dentro de {0} horas"
          },
          "past": {
            "one": "hace {0} hora",
            "other": "hace {0} horas"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relativeTime": {
          "future": {
            "one": "dentro de {0} minuto",
            "other": "dentro de {0} minutos"
          },
          "past": {
            "one": "hace {0} minuto",
            "other": "hace {0} minutos"
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "ahora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} segundo",
            "other": "dentro de {0} segundos"
          },
          "past": {
            "one": "hace {0} segundo",
            "other": "hace {0} segundos"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/fa", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fa-ir",
    "parentLocale": "fa"
  }, {
    "locale": "fa",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n >= 0 && n <= 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "سال",
        "relative": {
          "0": "امسال",
          "1": "سال آینده",
          "-1": "سال گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} سال بعد",
            "other": "{0} سال بعد"
          },
          "past": {
            "one": "{0} سال پیش",
            "other": "{0} سال پیش"
          }
        }
      },
      "month": {
        "displayName": "ماه",
        "relative": {
          "0": "این ماه",
          "1": "ماه آینده",
          "-1": "ماه گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ماه بعد",
            "other": "{0} ماه بعد"
          },
          "past": {
            "one": "{0} ماه پیش",
            "other": "{0} ماه پیش"
          }
        }
      },
      "day": {
        "displayName": "روز",
        "relative": {
          "0": "امروز",
          "1": "فردا",
          "2": "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        "relativeTime": {
          "future": {
            "one": "{0} روز بعد",
            "other": "{0} روز بعد"
          },
          "past": {
            "one": "{0} روز پیش",
            "other": "{0} روز پیش"
          }
        }
      },
      "hour": {
        "displayName": "ساعت",
        "relativeTime": {
          "future": {
            "one": "{0} ساعت بعد",
            "other": "{0} ساعت بعد"
          },
          "past": {
            "one": "{0} ساعت پیش",
            "other": "{0} ساعت پیش"
          }
        }
      },
      "minute": {
        "displayName": "دقیقه",
        "relativeTime": {
          "future": {
            "one": "{0} دقیقه بعد",
            "other": "{0} دقیقه بعد"
          },
          "past": {
            "one": "{0} دقیقه پیش",
            "other": "{0} دقیقه پیش"
          }
        }
      },
      "second": {
        "displayName": "ثانیه",
        "relative": {
          "0": "اکنون"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ثانیه بعد",
            "other": "{0} ثانیه بعد"
          },
          "past": {
            "one": "{0} ثانیه پیش",
            "other": "{0} ثانیه پیش"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/fr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fr-fr",
    "parentLocale": "fr"
  }, {
    "locale": "fr",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return n >= 0 && n < 2 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "année",
        "relative": {
          "0": "cette année",
          "1": "l’année prochaine",
          "-1": "l’année dernière"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} an",
            "other": "dans {0} ans"
          },
          "past": {
            "one": "il y a {0} an",
            "other": "il y a {0} ans"
          }
        }
      },
      "month": {
        "displayName": "mois",
        "relative": {
          "0": "ce mois-ci",
          "1": "le mois prochain",
          "-1": "le mois dernier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} mois",
            "other": "dans {0} mois"
          },
          "past": {
            "one": "il y a {0} mois",
            "other": "il y a {0} mois"
          }
        }
      },
      "day": {
        "displayName": "jour",
        "relative": {
          "0": "aujourd’hui",
          "1": "demain",
          "2": "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} jour",
            "other": "dans {0} jours"
          },
          "past": {
            "one": "il y a {0} jour",
            "other": "il y a {0} jours"
          }
        }
      },
      "hour": {
        "displayName": "heure",
        "relativeTime": {
          "future": {
            "one": "dans {0} heure",
            "other": "dans {0} heures"
          },
          "past": {
            "one": "il y a {0} heure",
            "other": "il y a {0} heures"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relativeTime": {
          "future": {
            "one": "dans {0} minute",
            "other": "dans {0} minutes"
          },
          "past": {
            "one": "il y a {0} minute",
            "other": "il y a {0} minutes"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "maintenant"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} seconde",
            "other": "dans {0} secondes"
          },
          "past": {
            "one": "il y a {0} seconde",
            "other": "il y a {0} secondes"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/hu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "hu-hu",
    "parentLocale": "hu"
  }, {
    "locale": "hu",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 || n == 5 ? "one" : "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "év",
        "relative": {
          "0": "ez az év",
          "1": "következő év",
          "-1": "előző év"
        },
        "relativeTime": {
          "future": {
            "one": "{0} év múlva",
            "other": "{0} év múlva"
          },
          "past": {
            "one": "{0} évvel ezelőtt",
            "other": "{0} évvel ezelőtt"
          }
        }
      },
      "month": {
        "displayName": "hónap",
        "relative": {
          "0": "ez a hónap",
          "1": "következő hónap",
          "-1": "előző hónap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} hónap múlva",
            "other": "{0} hónap múlva"
          },
          "past": {
            "one": "{0} hónappal ezelőtt",
            "other": "{0} hónappal ezelőtt"
          }
        }
      },
      "day": {
        "displayName": "nap",
        "relative": {
          "0": "ma",
          "1": "holnap",
          "2": "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} nap múlva",
            "other": "{0} nap múlva"
          },
          "past": {
            "one": "{0} nappal ezelőtt",
            "other": "{0} nappal ezelőtt"
          }
        }
      },
      "hour": {
        "displayName": "óra",
        "relativeTime": {
          "future": {
            "one": "{0} óra múlva",
            "other": "{0} óra múlva"
          },
          "past": {
            "one": "{0} órával ezelőtt",
            "other": "{0} órával ezelőtt"
          }
        }
      },
      "minute": {
        "displayName": "perc",
        "relativeTime": {
          "future": {
            "one": "{0} perc múlva",
            "other": "{0} perc múlva"
          },
          "past": {
            "one": "{0} perccel ezelőtt",
            "other": "{0} perccel ezelőtt"
          }
        }
      },
      "second": {
        "displayName": "másodperc",
        "relative": {
          "0": "most"
        },
        "relativeTime": {
          "future": {
            "one": "{0} másodperc múlva",
            "other": "{0} másodperc múlva"
          },
          "past": {
            "one": "{0} másodperccel ezelőtt",
            "other": "{0} másodperccel ezelőtt"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/it", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "it-it",
    "parentLocale": "it"
  }, {
    "locale": "it",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? "many" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "anno",
        "relative": {
          "0": "quest’anno",
          "1": "anno prossimo",
          "-1": "anno scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} anno",
            "other": "tra {0} anni"
          },
          "past": {
            "one": "{0} anno fa",
            "other": "{0} anni fa"
          }
        }
      },
      "month": {
        "displayName": "mese",
        "relative": {
          "0": "questo mese",
          "1": "mese prossimo",
          "-1": "mese scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} mese",
            "other": "tra {0} mesi"
          },
          "past": {
            "one": "{0} mese fa",
            "other": "{0} mesi fa"
          }
        }
      },
      "day": {
        "displayName": "giorno",
        "relative": {
          "0": "oggi",
          "1": "domani",
          "2": "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} giorno",
            "other": "tra {0} giorni"
          },
          "past": {
            "one": "{0} giorno fa",
            "other": "{0} giorni fa"
          }
        }
      },
      "hour": {
        "displayName": "ora",
        "relativeTime": {
          "future": {
            "one": "tra {0} ora",
            "other": "tra {0} ore"
          },
          "past": {
            "one": "{0} ora fa",
            "other": "{0} ore fa"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relativeTime": {
          "future": {
            "one": "tra {0} minuto",
            "other": "tra {0} minuti"
          },
          "past": {
            "one": "{0} minuto fa",
            "other": "{0} minuti fa"
          }
        }
      },
      "second": {
        "displayName": "Secondo",
        "relative": {
          "0": "ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} secondo",
            "other": "tra {0} secondi"
          },
          "past": {
            "one": "{0} secondo fa",
            "other": "{0} secondi fa"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/ja", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ja-jp",
    "parentLocale": "ja"
  }, {
    "locale": "ja",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "翌年",
          "-1": "昨年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "今月",
          "1": "翌月",
          "-1": "先月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} か月後"
          },
          "past": {
            "other": "{0} か月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今日",
          "1": "明日",
          "2": "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 日後"
          },
          "past": {
            "other": "{0} 日前"
          }
        }
      },
      "hour": {
        "displayName": "時",
        "relativeTime": {
          "future": {
            "other": "{0} 時間後"
          },
          "past": {
            "other": "{0} 時間前"
          }
        }
      },
      "minute": {
        "displayName": "分",
        "relativeTime": {
          "future": {
            "other": "{0} 分後"
          },
          "past": {
            "other": "{0} 分前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "今すぐ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/ko", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ko-kr",
    "parentLocale": "ko"
  }, {
    "locale": "ko",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "년",
        "relative": {
          "0": "올해",
          "1": "내년",
          "-1": "작년"
        },
        "relativeTime": {
          "future": {
            "other": "{0}년 후"
          },
          "past": {
            "other": "{0}년 전"
          }
        }
      },
      "month": {
        "displayName": "월",
        "relative": {
          "0": "이번 달",
          "1": "다음 달",
          "-1": "지난달"
        },
        "relativeTime": {
          "future": {
            "other": "{0}개월 후"
          },
          "past": {
            "other": "{0}개월 전"
          }
        }
      },
      "day": {
        "displayName": "일",
        "relative": {
          "0": "오늘",
          "1": "내일",
          "2": "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        "relativeTime": {
          "future": {
            "other": "{0}일 후"
          },
          "past": {
            "other": "{0}일 전"
          }
        }
      },
      "hour": {
        "displayName": "시",
        "relativeTime": {
          "future": {
            "other": "{0}시간 후"
          },
          "past": {
            "other": "{0}시간 전"
          }
        }
      },
      "minute": {
        "displayName": "분",
        "relativeTime": {
          "future": {
            "other": "{0}분 후"
          },
          "past": {
            "other": "{0}분 전"
          }
        }
      },
      "second": {
        "displayName": "초",
        "relative": {
          "0": "지금"
        },
        "relativeTime": {
          "future": {
            "other": "{0}초 후"
          },
          "past": {
            "other": "{0}초 전"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/nb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nb-no",
    "parentLocale": "nb"
  }, {
    "locale": "nb",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "neste år",
          "-1": "i fjor"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "for {0} år siden",
            "other": "for {0} år siden"
          }
        }
      },
      "month": {
        "displayName": "måned",
        "relative": {
          "0": "denne måneden",
          "1": "neste måned",
          "-1": "forrige måned"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} måned",
            "other": "om {0} måneder"
          },
          "past": {
            "one": "for {0} måned siden",
            "other": "for {0} måneder siden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgen",
          "2": "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} døgn",
            "other": "om {0} døgn"
          },
          "past": {
            "one": "for {0} døgn siden",
            "other": "for {0} døgn siden"
          }
        }
      },
      "hour": {
        "displayName": "time",
        "relativeTime": {
          "future": {
            "one": "om {0} time",
            "other": "om {0} timer"
          },
          "past": {
            "one": "for {0} time siden",
            "other": "for {0} timer siden"
          }
        }
      },
      "minute": {
        "displayName": "minutt",
        "relativeTime": {
          "future": {
            "one": "om {0} minutt",
            "other": "om {0} minutter"
          },
          "past": {
            "one": "for {0} minutt siden",
            "other": "for {0} minutter siden"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nå"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "for {0} sekund siden",
            "other": "for {0} sekunder siden"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/nl", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nl-nl",
    "parentLocale": "nl"
  }, {
    "locale": "nl",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "jaar",
        "relative": {
          "0": "dit jaar",
          "1": "volgend jaar",
          "-1": "vorig jaar"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} jaar",
            "other": "over {0} jaar"
          },
          "past": {
            "one": "{0} jaar geleden",
            "other": "{0} jaar geleden"
          }
        }
      },
      "month": {
        "displayName": "maand",
        "relative": {
          "0": "deze maand",
          "1": "volgende maand",
          "-1": "vorige maand"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} maand",
            "other": "over {0} maanden"
          },
          "past": {
            "one": "{0} maand geleden",
            "other": "{0} maanden geleden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "vandaag",
          "1": "morgen",
          "2": "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} dag",
            "other": "over {0} dagen"
          },
          "past": {
            "one": "{0} dag geleden",
            "other": "{0} dagen geleden"
          }
        }
      },
      "hour": {
        "displayName": "Uur",
        "relativeTime": {
          "future": {
            "one": "over {0} uur",
            "other": "over {0} uur"
          },
          "past": {
            "one": "{0} uur geleden",
            "other": "{0} uur geleden"
          }
        }
      },
      "minute": {
        "displayName": "minuut",
        "relativeTime": {
          "future": {
            "one": "over {0} minuut",
            "other": "over {0} minuten"
          },
          "past": {
            "one": "{0} minuut geleden",
            "other": "{0} minuten geleden"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} seconde",
            "other": "over {0} seconden"
          },
          "past": {
            "one": "{0} seconde geleden",
            "other": "{0} seconden geleden"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/none", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "none",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/pt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "pt-br",
    "parentLocale": "pt"
  }, {
    "locale": "pt",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n;
      if (ord) return "other";
      return t0 && n >= 0 && n <= 2 && n != 2 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "ano",
        "relative": {
          "0": "este ano",
          "1": "próximo ano",
          "-1": "ano passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} ano",
            "other": "em {0} anos"
          },
          "past": {
            "one": "há {0} ano",
            "other": "há {0} anos"
          }
        }
      },
      "month": {
        "displayName": "mês",
        "relative": {
          "0": "este mês",
          "1": "próximo mês",
          "-1": "mês passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} mês",
            "other": "em {0} meses"
          },
          "past": {
            "one": "há {0} mês",
            "other": "há {0} meses"
          }
        }
      },
      "day": {
        "displayName": "dia",
        "relative": {
          "0": "hoje",
          "1": "amanhã",
          "2": "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} dia",
            "other": "em {0} dias"
          },
          "past": {
            "one": "há {0} dia",
            "other": "há {0} dias"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relativeTime": {
          "future": {
            "one": "em {0} hora",
            "other": "em {0} horas"
          },
          "past": {
            "one": "há {0} hora",
            "other": "há {0} horas"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relativeTime": {
          "future": {
            "one": "em {0} minuto",
            "other": "em {0} minutos"
          },
          "past": {
            "one": "há {0} minuto",
            "other": "há {0} minutos"
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "agora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} segundo",
            "other": "em {0} segundos"
          },
          "past": {
            "one": "há {0} segundo",
            "other": "há {0} segundos"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/readme", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "readme",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/ru", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ru-ru",
    "parentLocale": "ru"
  }, {
    "locale": "ru",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "год",
        "relative": {
          "0": "в этом году",
          "1": "в следующем году",
          "-1": "в прошлом году"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} год",
            "few": "через {0} года",
            "many": "через {0} лет",
            "other": "через {0} года"
          },
          "past": {
            "one": "{0} год назад",
            "few": "{0} года назад",
            "many": "{0} лет назад",
            "other": "{0} года назад"
          }
        }
      },
      "month": {
        "displayName": "месяц",
        "relative": {
          "0": "в этом месяце",
          "1": "в следующем месяце",
          "-1": "в прошлом месяце"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} месяц",
            "few": "через {0} месяца",
            "many": "через {0} месяцев",
            "other": "через {0} месяца"
          },
          "past": {
            "one": "{0} месяц назад",
            "few": "{0} месяца назад",
            "many": "{0} месяцев назад",
            "other": "{0} месяца назад"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сегодня",
          "1": "завтра",
          "2": "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дня",
            "many": "через {0} дней",
            "other": "через {0} дней"
          },
          "past": {
            "one": "{0} день назад",
            "few": "{0} дня назад",
            "many": "{0} дней назад",
            "other": "{0} дня назад"
          }
        }
      },
      "hour": {
        "displayName": "час",
        "relativeTime": {
          "future": {
            "one": "через {0} час",
            "few": "через {0} часа",
            "many": "через {0} часов",
            "other": "через {0} часа"
          },
          "past": {
            "one": "{0} час назад",
            "few": "{0} часа назад",
            "many": "{0} часов назад",
            "other": "{0} часа назад"
          }
        }
      },
      "minute": {
        "displayName": "минута",
        "relativeTime": {
          "future": {
            "one": "через {0} минуту",
            "few": "через {0} минуты",
            "many": "через {0} минут",
            "other": "через {0} минуты"
          },
          "past": {
            "one": "{0} минуту назад",
            "few": "{0} минуты назад",
            "many": "{0} минут назад",
            "other": "{0} минуты назад"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "сейчас"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунды",
            "many": "через {0} секунд",
            "other": "через {0} секунды"
          },
          "past": {
            "one": "{0} секунду назад",
            "few": "{0} секунды назад",
            "many": "{0} секунд назад",
            "other": "{0} секунды назад"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/sh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sh-hr",
    "parentLocale": "sh"
  }, {
    "locale": "sh",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          f = s[1] || "",
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2),
          f10 = f.slice(-1),
          f100 = f.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/sv", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sv-se",
    "parentLocale": "sv"
  }, {
    "locale": "sv",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? "one" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "nästa år",
          "-1": "i fjol"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "för {0} år sedan",
            "other": "för {0} år sedan"
          }
        }
      },
      "month": {
        "displayName": "månad",
        "relative": {
          "0": "denna månad",
          "1": "nästa månad",
          "-1": "förra månaden"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} månad",
            "other": "om {0} månader"
          },
          "past": {
            "one": "för {0} månad sedan",
            "other": "för {0} månader sedan"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgon",
          "2": "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} dag",
            "other": "om {0} dagar"
          },
          "past": {
            "one": "för {0} dag sedan",
            "other": "för {0} dagar sedan"
          }
        }
      },
      "hour": {
        "displayName": "timme",
        "relativeTime": {
          "future": {
            "one": "om {0} timme",
            "other": "om {0} timmar"
          },
          "past": {
            "one": "för {0} timme sedan",
            "other": "för {0} timmar sedan"
          }
        }
      },
      "minute": {
        "displayName": "minut",
        "relativeTime": {
          "future": {
            "one": "om {0} minut",
            "other": "om {0} minuter"
          },
          "past": {
            "one": "för {0} minut sedan",
            "other": "för {0} minuter sedan"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "för {0} sekund sedan",
            "other": "för {0} sekunder sedan"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/tr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "tr-tr",
    "parentLocale": "tr"
  }, {
    "locale": "tr",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Yıl",
        "relative": {
          "0": "bu yıl",
          "1": "gelecek yıl",
          "-1": "geçen yıl"
        },
        "relativeTime": {
          "future": {
            "one": "{0} yıl sonra",
            "other": "{0} yıl sonra"
          },
          "past": {
            "one": "{0} yıl önce",
            "other": "{0} yıl önce"
          }
        }
      },
      "month": {
        "displayName": "Ay",
        "relative": {
          "0": "bu ay",
          "1": "gelecek ay",
          "-1": "geçen ay"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ay sonra",
            "other": "{0} ay sonra"
          },
          "past": {
            "one": "{0} ay önce",
            "other": "{0} ay önce"
          }
        }
      },
      "day": {
        "displayName": "Gün",
        "relative": {
          "0": "bugün",
          "1": "yarın",
          "2": "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        "relativeTime": {
          "future": {
            "one": "{0} gün sonra",
            "other": "{0} gün sonra"
          },
          "past": {
            "one": "{0} gün önce",
            "other": "{0} gün önce"
          }
        }
      },
      "hour": {
        "displayName": "Saat",
        "relativeTime": {
          "future": {
            "one": "{0} saat sonra",
            "other": "{0} saat sonra"
          },
          "past": {
            "one": "{0} saat önce",
            "other": "{0} saat önce"
          }
        }
      },
      "minute": {
        "displayName": "Dakika",
        "relativeTime": {
          "future": {
            "one": "{0} dakika sonra",
            "other": "{0} dakika sonra"
          },
          "past": {
            "one": "{0} dakika önce",
            "other": "{0} dakika önce"
          }
        }
      },
      "second": {
        "displayName": "Saniye",
        "relative": {
          "0": "şimdi"
        },
        "relativeTime": {
          "future": {
            "one": "{0} saniye sonra",
            "other": "{0} saniye sonra"
          },
          "past": {
            "one": "{0} saniye önce",
            "other": "{0} saniye önce"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/uk", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "uk-ua",
    "parentLocale": "uk"
  }, {
    "locale": "uk",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2),
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return n10 == 3 && n100 != 13 ? "few" : "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "рік",
        "relative": {
          "0": "цього року",
          "1": "наступного року",
          "-1": "торік"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} рік",
            "few": "через {0} роки",
            "many": "через {0} років",
            "other": "через {0} року"
          },
          "past": {
            "one": "{0} рік тому",
            "few": "{0} роки тому",
            "many": "{0} років тому",
            "other": "{0} року тому"
          }
        }
      },
      "month": {
        "displayName": "місяць",
        "relative": {
          "0": "цього місяця",
          "1": "наступного місяця",
          "-1": "минулого місяця"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} місяць",
            "few": "через {0} місяці",
            "many": "через {0} місяців",
            "other": "через {0} місяця"
          },
          "past": {
            "one": "{0} місяць тому",
            "few": "{0} місяці тому",
            "many": "{0} місяців тому",
            "other": "{0} місяця тому"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сьогодні",
          "1": "завтра",
          "2": "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дні",
            "many": "через {0} днів",
            "other": "через {0} дня"
          },
          "past": {
            "one": "{0} день тому",
            "few": "{0} дні тому",
            "many": "{0} днів тому",
            "other": "{0} дня тому"
          }
        }
      },
      "hour": {
        "displayName": "година",
        "relativeTime": {
          "future": {
            "one": "через {0} годину",
            "few": "через {0} години",
            "many": "через {0} годин",
            "other": "через {0} години"
          },
          "past": {
            "one": "{0} годину тому",
            "few": "{0} години тому",
            "many": "{0} годин тому",
            "other": "{0} години тому"
          }
        }
      },
      "minute": {
        "displayName": "хвилина",
        "relativeTime": {
          "future": {
            "one": "через {0} хвилину",
            "few": "через {0} хвилини",
            "many": "через {0} хвилин",
            "other": "через {0} хвилини"
          },
          "past": {
            "one": "{0} хвилину тому",
            "few": "{0} хвилини тому",
            "many": "{0} хвилин тому",
            "other": "{0} хвилини тому"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "зараз"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунди",
            "many": "через {0} секунд",
            "other": "через {0} секунди"
          },
          "past": {
            "one": "{0} секунду тому",
            "few": "{0} секунди тому",
            "many": "{0} секунд тому",
            "other": "{0} секунди тому"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/vi", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "vi-vn",
    "parentLocale": "vi"
  }, {
    "locale": "vi",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Năm",
        "relative": {
          "0": "năm nay",
          "1": "năm sau",
          "-1": "năm ngoái"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} năm nữa"
          },
          "past": {
            "other": "{0} năm trước"
          }
        }
      },
      "month": {
        "displayName": "Tháng",
        "relative": {
          "0": "tháng này",
          "1": "tháng sau",
          "-1": "tháng trước"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} tháng nữa"
          },
          "past": {
            "other": "{0} tháng trước"
          }
        }
      },
      "day": {
        "displayName": "Ngày",
        "relative": {
          "0": "Hôm nay",
          "1": "Ngày mai",
          "2": "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} ngày nữa"
          },
          "past": {
            "other": "{0} ngày trước"
          }
        }
      },
      "hour": {
        "displayName": "Giờ",
        "relativeTime": {
          "future": {
            "other": "sau {0} giờ nữa"
          },
          "past": {
            "other": "{0} giờ trước"
          }
        }
      },
      "minute": {
        "displayName": "Phút",
        "relativeTime": {
          "future": {
            "other": "sau {0} phút nữa"
          },
          "past": {
            "other": "{0} phút trước"
          }
        }
      },
      "second": {
        "displayName": "Giây",
        "relative": {
          "0": "bây giờ"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giây nữa"
          },
          "past": {
            "other": "{0} giây trước"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define("logging/cldrs/zh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "zh-Hans",
    "parentLocale": "zh"
  }, {
    "locale": "zh",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0}年后"
          },
          "past": {
            "other": "{0}年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下个月",
          "-1": "上个月"
        },
        "relativeTime": {
          "future": {
            "other": "{0}个月后"
          },
          "past": {
            "other": "{0}个月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0}天后"
          },
          "past": {
            "other": "{0}天前"
          }
        }
      },
      "hour": {
        "displayName": "小时",
        "relativeTime": {
          "future": {
            "other": "{0}小时后"
          },
          "past": {
            "other": "{0}小时前"
          }
        }
      },
      "minute": {
        "displayName": "分钟",
        "relativeTime": {
          "future": {
            "other": "{0}分钟后"
          },
          "past": {
            "other": "{0}分钟前"
          }
        }
      },
      "second": {
        "displayName": "秒钟",
        "relative": {
          "0": "现在"
        },
        "relativeTime": {
          "future": {
            "other": "{0}秒钟后"
          },
          "past": {
            "other": "{0}秒钟前"
          }
        }
      }
    }
  }, {
    "locale": "zh-Hant",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "hour": {
        "displayName": "小時",
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "minute": {
        "displayName": "分鐘",
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    }
  }];
  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "logging/cluster-templates/service");
define.alias("shared/code-mirror/service", "logging/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "logging/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "logging/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "logging/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "logging/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "logging/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "logging/components/advanced-section/component");
define.alias("shared/components/annotations-section/component", "logging/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "logging/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "logging/components/api-field/component");
define.alias("shared/components/apikey-row/component", "logging/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "logging/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "logging/components/badge-state/component");
define.alias("shared/components/banner-message/component", "logging/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "logging/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "logging/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "logging/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "logging/components/basic-dropdown/trigger");
define.alias("shared/components/btn-toggle/component", "logging/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "logging/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "logging/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "logging/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "logging/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "logging/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "logging/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "logging/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "logging/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "logging/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "logging/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "logging/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "logging/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "logging/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "logging/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "logging/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "logging/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "logging/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "logging/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "logging/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "logging/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "logging/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "logging/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "logging/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "logging/components/container-shell/component");
define.alias("shared/components/containers-header/component", "logging/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "logging/components/copy-button");
define.alias("shared/components/copy-inline/component", "logging/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "logging/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "logging/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "logging/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "logging/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "logging/components/cru-cluster/component");
define.alias("shared/components/cru-node-pools/component", "logging/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "logging/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "logging/components/custom-catalog/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "logging/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "logging/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "logging/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "logging/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "logging/components/field-required/component");
define.alias("shared/components/form-auth-cloud-credential/component", "logging/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "logging/components/form-certificate-row/component");
define.alias("shared/components/form-count/component", "logging/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "logging/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "logging/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "logging/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "logging/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "logging/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "logging/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "logging/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "logging/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "logging/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "logging/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "logging/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "logging/components/form-members/component");
define.alias("shared/components/form-name-description/component", "logging/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "logging/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "logging/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "logging/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "logging/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "logging/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "logging/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "logging/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "logging/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "logging/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "logging/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "logging/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "logging/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "logging/components/graph-area/component");
define.alias("shared/components/hook-row/component", "logging/components/hook-row/component");
define.alias("shared/components/host-pod/component", "logging/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "logging/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "logging/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "logging/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "logging/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "logging/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "logging/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "logging/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "logging/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "logging/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "logging/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "logging/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "logging/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "logging/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "logging/components/illiquid-model");
define.alias("shared/components/input-answer-row/component", "logging/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "logging/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "logging/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "logging/components/input-float/component");
define.alias("shared/components/input-identity/component", "logging/components/input-identity/component");
define.alias("shared/components/input-int/component", "logging/components/input-int/component");
define.alias("shared/components/input-integer/component", "logging/components/input-integer/component");
define.alias("shared/components/input-number/component", "logging/components/input-number/component");
define.alias("shared/components/input-or-display/component", "logging/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "logging/components/input-paste/component");
define.alias("shared/components/input-slider/component", "logging/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "logging/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "logging/components/input-text-file/component");
define.alias("shared/components/input-url/component", "logging/components/input-url/component");
define.alias("shared/components/input-yaml/component", "logging/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "logging/components/ivy-codemirror");
define.alias("shared/components/labels-section/component", "logging/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "logging/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "logging/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "logging/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "logging/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "logging/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "logging/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "logging/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "logging/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "logging/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "logging/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "logging/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "logging/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "logging/components/liquid-versions");
define("logging/components/logging/code-block/component", ["exports", "logging/components/logging/code-block/template", "shared/components/code-block/component"], function (_exports, _template, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    layout: _template.default
  });

  _exports.default = _default;
});
define("logging/components/logging/code-block/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Tc57yY0W",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"highlighted\"],true],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/code-block/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-docker/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
define("logging/components/logging/form-log-docker/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aHYR8B4W",
    "block": "{\"symbols\":[],\"statements\":[[7,\"main\"],[11,\"class\",\"row mt-30\"],[9],[0,\"\\n  \"],[7,\"h2\"],[11,\"class\",\"mt-0\"],[9],[1,[27,\"t\",[\"loggingPage.dockerRootDir.header\"],null],false],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"loggingPage.dockerRootDir.label\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"className\",\"placeholder\"],[\"text\",[23,[\"model\",\"dockerRootDir\"]],\"form-control\",[27,\"t\",[\"loggingPage.dockerRootDir.placeholder\"],[[\"dir\"],[[23,[\"parentModel\",\"dockerRootDir\"]]]]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/form-log-docker/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-format/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    outputTagsChanged: Ember.observer('model.outputTags', function () {
      this.setCodeBlockHeight();
    }),
    setCodeBlockHeight: function setCodeBlockHeight() {
      var h = this.$('.additional-logging-configuration-content').height() + 12;
      this.$('.logging-format pre').height("".concat(h, "px"));
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-format/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Jhv03wsZ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"main\"],[11,\"class\",\"row mt-30\"],[9],[0,\"\\n\"],[7,\"h2\"],[11,\"class\",\"mt-0\"],[9],[1,[27,\"t\",[\"loggingPage.additional.header\"],null],false],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"col span-5\"],[9],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"additional-logging-configuration-content\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[1,[27,\"t\",[\"loggingPage.additional.fields.header\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mb-30\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[1,[27,\"t\",[\"loggingPage.additional.fields.helpText\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"form-key-value\",null,[[\"addActionLabel\",\"initialMap\",\"changed\"],[\"loggingPage.tags.addActionLabel\",[23,[\"model\",\"outputTags\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"outputTags\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"not-eq\",[[23,[\"targetType\"]],\"customTarget\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row mb-30\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"loggingPage.additional.flushInterval.label\"],null],false],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"class\",\"placeholder\",\"aria-describedby\"],[1,[23,[\"model\",\"outputFlushInterval\"]],\"form-control\",[27,\"t\",[\"loggingPage.additional.flushInterval.placeholder\"],null],\"basic-addon2\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[11,\"id\",\"basic-addon2\"],[9],[1,[27,\"t\",[\"loggingPage.additional.flushInterval.sec\"],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[1,[27,\"t\",[\"loggingPage.additional.flushInterval.helpText\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[23,[\"model\",\"includeSystemComponent\"]]]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.additional.includeSystemComponent.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"col span-7 logging-format\"],[9],[0,\"\\n    \"],[1,[27,\"logging/code-block\",null,[[\"code\",\"language\"],[[23,[\"logPreview\"]],\"json\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/form-log-format/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-sasl/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    didUpdateAttrs: function didUpdateAttrs() {
      var config = Ember.get(this, 'config') || {};
      Ember.setProperties(config, {
        saslType: Ember.get(config, 'saslType') || 'plain',
        saslScramMechanism: Ember.get(config, 'saslScramMechanism') || 'sha256'
      });
    },
    disabled: Ember.computed('config.saslUsername', 'config.saslPassword', function () {
      var config = Ember.get(this, 'config') || {};
      var saslUsername = config.saslUsername,
          saslPassword = config.saslPassword;
      return saslUsername && saslPassword ? false : true;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-sasl/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "g/wsevTM",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"mt-20 clearfix\"],[9],[0,\"\\n  \"],[7,\"h2\"],[11,\"class\",\"pt-30 inline-block\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"loggingPage.ssl.sslHeader\"],[[\"authType\"],[\"SASL\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\" \"],[1,[27,\"t\",[\"loggingPage.ssl.saslUsername.label\"],null],false],[0,\" \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"utocomplete\",\"value\",\"classNames\",\"placeholder\"],[\"text\",\"off\",[23,[\"config\",\"saslUsername\"]],\"form-control\",[27,\"t\",[\"loggingPage.ssl.saslUsername.placeholder\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\" \"],[1,[27,\"t\",[\"loggingPage.ssl.saslPassword.label\"],null],false],[0,\" \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"utocomplete\",\"type\",\"value\",\"classNames\",\"placeholder\"],[\"off\",\"password\",[23,[\"config\",\"saslPassword\"]],\"form-control\",[27,\"t\",[\"loggingPage.ssl.saslPassword.placeholder\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[1,[27,\"t\",[\"loggingPage.ssl.saslType.label\"],null],false],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[12,\"class\",[27,\"if\",[[27,\"or\",[[23,[\"disabled\"]]],null],\"text-muted\"],null]],[9],[0,\"\\n        \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"saslType\"]],\"plain\",[23,[\"disabled\"]]]]],false],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.saslType.plain\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"saslType\"]],\"scram\",[23,[\"disabled\"]]]]],false],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.saslType.scram\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"config\",\"saslType\"]],\"scram\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[1,[27,\"t\",[\"loggingPage.ssl.saslScramMechanism.label\"],null],false],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"saslScramMechanism\"]],\"sha256\",[23,[\"disabled\"]]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.saslScramMechanism.sha256\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"saslScramMechanism\"]],\"sha512\",[23,[\"disabled\"]]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.saslScramMechanism.sha512\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/form-log-sasl/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-ssl/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    disabled: null,
    sslVersionContent: [{
      label: 'SSLv23',
      value: 'SSLv23'
    }, {
      label: 'TLSv1',
      value: 'TLSv1'
    }, {
      label: 'TLSv1_1',
      value: 'TLSv1_1'
    }, {
      label: 'TLSv1_2',
      value: 'TLSv1_2'
    }],
    sslVerify: Ember.computed.alias('config.sslVerify'),
    isUdp: Ember.computed.equal('config.protocol', 'udp'),
    clipboardText: Ember.computed('clientKeyPath', 'clientCertPath', 'certificatePath', function () {
      var clientKeyPath = this.clientKeyPath,
          clientCertPath = this.clientCertPath,
          certificatePath = this.certificatePath;
      var out = '';
      var arr = [clientKeyPath, clientCertPath, certificatePath].filter(function (ca) {
        return ca;
      });
      arr.map(function (ca, index) {
        if (index === arr.length - 1) {
          out += "".concat(ca);
        } else {
          out += "".concat(ca, "\n");
        }
      });
      return out;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-ssl/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8se6ZdUu",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"mt-20 clearfix\"],[9],[0,\"\\n  \"],[7,\"h2\"],[12,\"class\",[27,\"concat\",[\"pt-30 inline-block \",[27,\"if\",[[27,\"and\",[[23,[\"disabled\"]],[27,\"not-eq\",[[23,[\"targetType\"]],\"fluentForwarder\"],null]],null],\"text-muted\"],null]],null]],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"loggingPage.ssl.sslHeader\"],[[\"authType\"],[[27,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"syslog\"],null],\"Encryption\",\"SSL\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"not-eq\",[[23,[\"targetType\"]],\"kafka\"],null],[27,\"not-eq\",[[23,[\"targetType\"]],\"fluentForwarder\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.ssl.headerHelp\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"syslog\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[12,\"class\",[27,\"concat\",[\"col span-6 pt-0 \",[27,\"if\",[[23,[\"isUdp\"]],\"text-muted\"],null]],null]],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"classNames\",\"checked\",\"disabled\"],[\"checkbox\",\"form-control\",[23,[\"config\",\"enableTls\"]],[23,[\"isUdp\"]]]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.fluentd.enableTls.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],false,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.disabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],true,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.enabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"sslVerify\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.ssl.certificate.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"not-eq\",[[23,[\"customType\"]],\"fluentd\"],null],[27,\"not-eq\",[[23,[\"targetType\"]],\"fluentForwarder\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.clientKey.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"clientKey\"]],false,\"text/plain,.pem,.pkey,.key\",60,\"newCertificate.key.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"clientKeyPath\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n            \"],[1,[21,\"clientKeyPath\"],false],[0,\"\\n            \"],[1,[27,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[23,[\"clientKeyPath\"]],[23,[\"small\"]],\"p-0\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.clientCert.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"clientCert\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"clientCertPath\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n            \"],[1,[21,\"clientCertPath\"],false],[0,\"\\n            \"],[1,[27,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[23,[\"clientCertPath\"]],[23,[\"small\"]],\"p-0\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"targetType\"]],\"splunk\"],null],[27,\"eq\",[[23,[\"targetType\"]],\"elasticsearch\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"targetType\"]],\"splunk\"],null],[27,\"eq\",[[23,[\"targetType\"]],\"elasticsearch\"],null]],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.clientKeyPass.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"className\",\"placeholder\",\"disabled\"],[\"password\",[23,[\"config\",\"clientKeyPass\"]],\"form-control\",[27,\"t\",[\"loggingPage.ssl.clientKeyPass.password.placeholder\"],null],[23,[\"disabled\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"elasticsearch\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.ssl.sslVersion.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"searchable-select\",null,[[\"classNames\",\"content\",\"value\",\"readOnly\"],[\"form-control\",[23,[\"sslVersionContent\"]],[23,[\"config\",\"sslVersion\"]],[23,[\"disabled\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],false,[23,[\"disabled\"]]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.disabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[23,[\"disabled\"]],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],true,[23,[\"disabled\"]]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.enabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"sslVerify\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.ssl.certificate.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"targetType\"]],\"kafka\"],null],[27,\"eq\",[[23,[\"targetType\"]],\"customTarget\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.certificate.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"certificatePath\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n            \"],[1,[21,\"certificatePath\"],false],[0,\"\\n            \"],[1,[27,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[23,[\"certificatePath\"]],[23,[\"small\"]],\"p-0\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"fluentForwarder\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 pt-0\"],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[23,[\"config\",\"enableTls\"]]]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.fluentd.enableTls.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.clientKey.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"clientKey\"]],false,\"text/plain,.pem,.pkey,.key\",60,\"newCertificate.key.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.clientCert.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"clientCert\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[23,[\"disabled\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.clientKeyPass.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"className\",\"placeholder\",\"disabled\"],[\"password\",[23,[\"config\",\"clientKeyPass\"]],\"form-control\",[27,\"t\",[\"loggingPage.ssl.clientKeyPass.password.placeholder\"],null],[23,[\"disabled\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6 pt-0\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],false,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.disabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"class\",[27,\"if\",[[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null],\"text-muted\"],null]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"config\",\"sslVerify\"]],true,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.ssl.verify.enabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"sslVerify\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pt-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.ssl.certificate.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input-text-file\",null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[23,[\"config\",\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[27,\"or\",[[23,[\"disabled\"]],[23,[\"isUdp\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/form-log-ssl/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/form-test/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    isCustom: Ember.computed.equal('targetType', 'customTarget')
  });

  _exports.default = _default;
});
define("logging/components/logging/form-test/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zM+Frqon",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"over-hr mt-40\"],[9],[0,\"\\n  \"],[7,\"span\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"testing\"]]],null,{\"statements\":[[0,\"      \"],[7,\"button\"],[11,\"class\",\"btn bg-info btn-disabled\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"text-white\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isCustom\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"loggingPage.testAction.running\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"loggingPage.testAction.testing\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],[23,[\"test\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"tested\"]]],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[12,\"class\",[28,[\"btn  btn-disabled \",[27,\"if\",[[23,[\"testOk\"]],\"bg-success\",\"bg-error\"],null]]]],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"text-white\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"testOk\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"isCustom\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"loggingPage.testAction.runOk\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"loggingPage.testAction.testOk\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.testAction.testFailed\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],[23,[\"test\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"btn bg-info\"],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"text-white\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isCustom\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.testAction.dryRun\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.testAction.test\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],[23,[\"test\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/form-test/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/input-logging-config/component", ["exports", "ui/utils/platform", "logging/components/logging/input-logging-config/template", "shared/mixins/throttled-resize", "ui/utils/constants"], function (_exports, _platform, _template, _throttledResize, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_throttledResize.default, {
    settings: Ember.inject.service(),
    growl: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    mode: 'text',
    label: null,
    namePlaceholder: '',
    nameRequired: false,
    name: null,
    value: null,
    placeholder: '',
    accept: 'text/*, .yml, .yaml',
    multiple: false,
    viewportMargin: Infinity,
    autoResize: false,
    resizeFooter: 130,
    minHeight: 50,
    inputName: false,
    canChangeName: true,
    canUpload: true,
    showUploadLabel: true,
    gutters: ['CodeMirror-lint-markers'],
    tagName: ['div'],
    showUpload: true,
    showDownload: true,
    deepStr: null,
    config: Ember.computed.alias('model.config'),
    init: function init() {
      this._super.apply(this, arguments);

      this.customTypeObserver();
    },
    actions: {
      click: function click() {
        this.$('INPUT[type=file]')[0].click();
      },
      updateValue: function updateValue(value) {
        var _this = this;

        Ember.run.next(function () {
          Ember.set(_this, 'value', value);
        });
      }
    },
    loadingDidChange: Ember.observer('loading', function () {
      var _this2 = this;

      if (!Ember.get(this, 'loading') && Ember.get(this, 'autoResize')) {
        Ember.run.next(function () {
          _this2.fit();
        });
      }
    }),
    customTypeObserver: Ember.observer('value', function () {
      var _this3 = this;

      Ember.run.next(function () {
        var value = Ember.get(_this3, 'value');

        var _this3$parseValue = _this3.parseValue(value),
            fileObj = _this3$parseValue.fileObj;

        var type = fileObj['@type'];
        var out = _constants.default.LOGGING_TPYE_TO_CONFIG[type];
        Ember.set(_this3, 'customType', out);
      });
    }),
    caChange: Ember.observer('clientKeyPath', 'clientCertPath', 'certificatePath', function () {
      var _this$parseValue = this.parseValue(Ember.get(this, 'value')),
          fileObj = _this$parseValue.fileObj,
          _this$parseValue$deep = _this$parseValue.deepStrs,
          deepStrs = _this$parseValue$deep === void 0 ? [] : _this$parseValue$deep;

      var deletedField = ['ca_file', 'client_cert', 'client_key', 'ssl_ca_cert', 'ssl_client_cert', 'ssl_client_cert_key', 'tls_cert_path', 'client_cert_key', 'tls_client_private_key_path', 'tls_client_cert_path'];
      deletedField.map(function (d) {
        return delete fileObj[d];
      });
      var _this$clientKeyPath = this.clientKeyPath,
          clientKeyPath = _this$clientKeyPath === void 0 ? '' : _this$clientKeyPath,
          _this$clientCertPath = this.clientCertPath,
          clientCertPath = _this$clientCertPath === void 0 ? '' : _this$clientCertPath,
          _this$certificatePath = this.certificatePath,
          certificatePath = _this$certificatePath === void 0 ? '' : _this$certificatePath;
      var body = '';
      var caArray = [clientKeyPath, clientCertPath, certificatePath].map(function () {
        var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var arr = c.split(' ');
        return {
          key: arr[0],
          value: arr[1]
        };
      });
      caArray.map(function (c) {
        if (c.value) {
          fileObj[c.key] = c.value;
        }
      });

      for (var key in fileObj) {
        body += "  ".concat(key, " ").concat(fileObj[key], "\n");
      }

      var str = '';
      deepStrs.map(function (s) {
        str += s;
      });
      var out = "<match *>\n".concat(body, "  ").concat(str, "\n</match>");
      this.send('updateValue', out);
    }),
    actualAccept: Ember.computed('accept', function () {
      if (_platform.isSafari) {
        return '';
      } else {
        return Ember.get(this, 'accept');
      }
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      var fieldsStr = Ember.get(this, 'fieldsStr');
      var template = "{\n    \"log\":    \"time=\"".concat(new Date().toString(), "\" level=info msg=\"Cluster [local] condition status unknown\"\",\n    \"stream\": \"stderr\",\n    \"tag\":    \"default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log\"\n    \"docker\": {\n        \"container_id\": \"xxx\"\n    },\n    \"kubernetes\": {\n        \"container_name\": \"cattle\",\n        \"namespace_name\": \"default\",\n        \"pod_name\":       \"cattle-6b4ccb5b9d-v57vw\",\n        \"pod_id\":         \"30c685d0-fa43-11e7-b992-00163e016dc2\",\n        \"labels\":         {\n            \"app\": \"cattle\",\n            \"pod-template-hash\": \"2607761658\"\n        },\n        \"host\":       \"47.52.113.251\",\n        \"master_url\": \"https://10.233.0.1:443/api\"\n    },\n").concat(fieldsStr, "\n  ...\n}");
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "    \"".concat(key, "\": \"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    }),
    clientKeyPath: Ember.computed('config.clientKey', 'customType', function () {
      var pageScope = Ember.get(this, 'pageScope');
      var customType = Ember.get(this, 'customType');
      var name;

      if (Ember.get(this, 'config.clientKey')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          var projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = "".concat(Ember.get(this, 'scope.currentCluster.id'), "_").concat(projectId.split(':')[1]);
        }

        var key = "client_key";

        switch (customType) {
          case 'kafka':
            key = "ssl_client_cert_key";
            break;

          case 'syslog':
            key = "client_cert_key";
            break;

          case 'fluentForwarder':
            key = "tls_client_private_key_path";
            break;
        }

        return "".concat(key, " /fluentd/etc/config/ssl/").concat(pageScope, "_").concat(name, "_client-key.pem");
      }
    }),
    clientCertPath: Ember.computed('config.clientCert', 'customType', function () {
      var pageScope = Ember.get(this, 'pageScope');
      var customType = Ember.get(this, 'customType');
      var name;

      if (Ember.get(this, 'config.clientCert')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          var projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = "".concat(Ember.get(this, 'scope.currentCluster.id'), "_").concat(projectId.split(':')[1]);
        }

        var key = "client_cert";

        switch (customType) {
          case 'kafka':
            key = "ssl_client_cert";
            break;

          case 'fluentForwarder':
            key = "tls_client_cert_path";
            break;
        }

        return "".concat(key, " /fluentd/etc/config/ssl/").concat(pageScope, "_").concat(name, "_client-cert.pem");
      }
    }),
    certificatePath: Ember.computed('config.certificate', 'customType', function () {
      var pageScope = Ember.get(this, 'pageScope');
      var customType = Ember.get(this, 'customType');
      var name;

      if (Ember.get(this, 'config.certificate')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          var projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = "".concat(Ember.get(this, 'scope.currentCluster.id'), "_").concat(projectId.split(':')[1]);
        }

        var key = "ca_file";

        switch (customType) {
          case 'kafka':
            key = "ssl_ca_cert";
            break;

          case 'fluentForwarder':
            key = "tls_cert_path";
            break;
        }

        return "".concat(key, " /fluentd/etc/config/ssl/").concat(pageScope, "_").concat(name, "_ca.pem");
      }
    }),
    onResize: function onResize() {
      if (Ember.get(this, 'autoResize')) {
        this.fit();
      }
    },
    fit: function fit() {
      if (Ember.get(this, 'autoResize')) {
        var container = this.$('.codemirror-container');

        if (!container) {
          return;
        }

        var position = container.position();

        if (!position) {
          return;
        }

        var desired = this.$(window).height() - position.top - Ember.get(this, 'resizeFooter');
        container.css('max-height', Math.max(Ember.get(this, 'minHeight'), desired));
      }
    },
    parseValue: function parseValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var fileObj = {};
      var removeMacth = value.replace(/.*<match.*>.*(\r\n|\n|\r) {2}/ig, '').replace(/(\r\n|\n|\r).*<\/match.*>/ig, '');
      var deepStrs = removeMacth.match(/<(.|\r\n|\n|\r)*<\/.*>/ig, '') || [];
      var removedDeep = removeMacth.replace(/<(.|\r\n|\n|\r)*<\/.*>/ig, '');
      var myString = removedDeep.replace(/(\r\n|\n|\r)/gm, '<br />');
      var keyAndValue = myString.split('<br />').filter(function (f) {
        return f !== '<br />';
      }).filter(function () {
        var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return !f.startsWith('#') && !f.startsWith('<');
      });
      keyAndValue.map(function () {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var arr = item.split(' ').filter(function (f) {
          return f !== '';
        });

        if (arr[0] && arr[1]) {
          Ember.set(fileObj, arr[0], arr[1]);
        }
      });
      return {
        fileObj: fileObj,
        deepStrs: deepStrs
      };
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/input-logging-config/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aT9Bnted",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-12 m-0 p-0 codemirror-container\"],[11,\"style\",\"overflow: auto;\"],[9],[0,\"\\n    \"],[1,[27,\"ivy-codemirror\",null,[[\"placeholder\",\"value\",\"valueUpdated\",\"options\"],[[23,[\"placeholder\"]],[23,[\"value\"]],[27,\"action\",[[22,0,[]],\"updateValue\"],null],[27,\"hash\",null,[[\"autofocus\",\"theme\",\"tabSize\",\"lineNumbers\",\"mode\",\"readOnly\",\"gutters\",\"lint\",\"lineWrapping\",\"viewportMargin\",\"smartIndent\"],[true,\"monokai\",2,true,\"yaml\",[27,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"modalOpts\",\"type\"]],\"review\"],null],[23,[\"readOnly\"]]],null],true,false],null],[23,[\"gutters\"]],false,true,[23,[\"viewportMargin\"]],false]]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[14,1,[\"description\"]],[0,\"\\n\"],[7,\"input\"],[12,\"accept\",[28,[[21,\"actualAccept\"]]]],[12,\"multiple\",[21,\"multiple\"]],[11,\"class\",\"hide\"],[11,\"type\",\"file\"],[9],[10],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\",\"customType\",\"clientKeyPath\",\"clientCertPath\",\"certificatePath\"],[[23,[\"config\"]],[23,[\"targetType\"]],[23,[\"customType\"]],[23,[\"clientKeyPath\"]],[23,[\"clientCertPath\"]],[23,[\"certificatePath\"]]]]],false],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\",\"targetType\"],[[23,[\"logPreview\"]],[23,[\"model\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/input-logging-config/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/new-edit/component", ["exports", "ui/mixins/new-or-edit", "shared/utils/parse-uri", "ui/utils/constants"], function (_exports, _newOrEdit, _parseUri, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var INVALID_PREFIX_CHAR = ['\\', '/', '*', '?', '"', '<', '>', '|', " ", ',', '#'];

  var _default = Ember.Component.extend(_newOrEdit.default, {
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    intl: Ember.inject.service(),
    // input
    errors: null,
    targetType: null,
    configMap: null,
    esEndpointValidate: true,
    fluentdEndpointValidate: true,
    esErrors: [],
    pasteOrUpload: false,
    testing: false,
    testOk: true,
    tested: false,
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    cluster: Ember.computed.reads('scope.currentCluster'),
    project: Ember.computed.reads('scope.currentProject'),
    clusterTargetType: Ember.computed.reads('clusterLogging.targetType'),
    isWindows: Ember.computed.alias('scope.currentCluster.isWindows'),
    actions: {
      test: function test() {
        var _this = this;

        if (Ember.get(this, 'testing') || Ember.get(this, 'tested')) {
          return Ember.RSVP.resolve();
        }

        var clone = Ember.get(this, 'model').clone();
        var ok = this.willSave();

        if (!ok) {
          return Ember.RSVP.resolve();
        }

        var data = Ember.get(this, 'model');
        var gs = Ember.get(this, 'globalStore');
        var pageScope = this.get('pageScope');
        Ember.set(this, 'testing', true);
        var url = "".concat(pageScope, "loggings?action=test");

        if (Ember.get(this, 'targetType') === 'customTarget') {
          url = "".concat(pageScope, "loggings?action=dryRun");
        }

        return gs.rawRequest({
          url: url,
          method: 'POST',
          data: data
        }).then(function () {
          Ember.setProperties(_this, {
            testOk: true,
            errors: null
          });
        }).catch(function (xhr) {
          Ember.setProperties(_this, {
            testOk: false,
            errors: [xhr.body.message || xhr.body.code]
          });
        }).finally(function () {
          Ember.setProperties(_this, {
            tested: true,
            testing: false,
            model: clone
          });
          Ember.run.next(function () {
            Ember.run.later(function () {
              Ember.set(_this, 'tested', false);
            }, 3000);
          });
        });
      },
      cancel: function cancel() {
        Ember.setProperties(this, {
          targetType: Ember.get(this, 'preTargetType'),
          pasteOrUpload: false
        });
      },
      showPaste: function showPaste() {
        Ember.setProperties(this, {
          preTargetType: Ember.get(this, 'targetType'),
          targetType: 'customTarget',
          pasteOrUpload: true
        });
      }
    },
    targetTypeChange: Ember.observer('targetType', function () {
      Ember.set(this, 'errors', []);
    }),
    pasteOrUploadChange: Ember.observer('pasteOrUpload', function () {
      var _this$parseValue = this.parseValue(Ember.get(this, 'customContent')),
          fileObj = _this$parseValue.fileObj,
          _this$parseValue$deep = _this$parseValue.deepStrs,
          deepStrs = _this$parseValue$deep === void 0 ? [] : _this$parseValue$deep;

      var preTargetType = Ember.get(this, 'preTargetType');

      if (!Ember.get(this, 'pasteOrUpload')) {
        var type = fileObj['@type'];
        var targetType = this.fileToFormType(type);
        Ember.set(this, 'targetType', targetType);
      } else {
        var _type = preTargetType;

        switch (preTargetType) {
          case 'splunk':
            _type = 'splunk_hec';
            break;

          case 'syslog':
            _type = 'remote_syslog';
            break;

          case 'kafka':
            _type = 'kafka_buffered';
            break;

          case 'fluentForwarder':
            _type = 'forward';
            break;
        }

        Ember.set(fileObj, '@type', _type);
        var body = '';
        var str = '';
        deepStrs.map(function (s) {
          str += s;
        });

        for (var key in fileObj) {
          body += "".concat(key, " ").concat(fileObj[key], "\n  ");
        }

        var out = "<match *>\n  ".concat(body).concat(str, "\n</match>");
        Ember.set(this, 'customContent', out);
      }
    }),
    headerLabel: Ember.computed('pageScope', function () {
      var ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return 'loggingPage.clusterHeader';
      } else {
        return 'loggingPage.projectHeader';
      }
    }),
    isClusterLevel: Ember.computed('pageScope', function () {
      return Ember.get(this, 'pageScope') === 'cluster';
    }),
    saveDisabled: Ember.computed('originalModel.{id,targetType}', 'targetType', 'pasteOrUpload', function () {
      return Ember.get(this, 'originalModel.targetType') === 'none' && Ember.get(this, 'targetType') === 'none' && !Ember.get(this, 'pasteOrUpload');
    }),
    pageChange: Ember.on('init', Ember.observer('originalModel.customTargetConfig.content', function () {
      this.initCustomContent();
    })),
    parseValue: function parseValue(value) {
      var fileObj = {};
      var removeMacth = value.replace(/.*<match.*>.*(\r\n|\n|\r) {2}/ig, '').replace(/(\r\n|\n|\r).*<\/match.*>/ig, '');
      var deepStrs = removeMacth.match(/<(.|\r\n|\n|\r)*<\/.*>/ig, '') || [];
      var removedDeep = removeMacth.replace(/<(.|\r\n|\n|\r)*<\/.*>/ig, '');
      var myString = removedDeep.replace(/(\r\n|\n|\r)/gm, '<br />');
      var keyAndValue = myString.split('<br />').filter(function (f) {
        return f !== '<br />';
      }).filter(function () {
        var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return !f.startsWith('#') && !f.startsWith('<');
      });
      keyAndValue.map(function () {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var arr = item.split(' ').filter(function (f) {
          return f !== '';
        });

        if (arr[0] && arr[1]) {
          Ember.set(fileObj, arr[0], arr[1]);
        }
      });
      return {
        fileObj: fileObj,
        deepStrs: deepStrs
      };
    },
    willSave: function willSave() {
      var targetType = this.targetType,
          pageScope = this.pageScope,
          model = this.model,
          intl = this.intl;
      Ember.set(model, 'clusterId', Ember.get(this, 'cluster.id'));

      if (pageScope === 'project') {
        Ember.set(model, 'projectId', Ember.get(this, 'project.id'));
      }

      Ember.setProperties(model, {
        elasticsearchConfig: null,
        splunkConfig: null,
        kafkaConfig: null,
        syslogConfig: null,
        fluentForwarderConfig: null,
        customTargetConfig: null
      });

      if (targetType === 'none') {
        return true;
      }

      var errors = Ember.set(this, 'errors', []);

      if (Ember.get(this, 'pasteOrUpload')) {
        var _this$parseValue2 = this.parseValue(Ember.get(this, 'customContent')),
            fileObj = _this$parseValue2.fileObj;

        var _targetType = fileObj['@type'];
        var types = Object.keys(_constants.default.LOGGING_TPYE_TO_CONFIG) || [];

        if (!types.includes(_targetType)) {
          errors.pushObject(intl.t('loggingPage.customTarget.type.error'));
        }

        Ember.setProperties(model, {
          customTargetConfig: {
            clientKey: Ember.get(this, 'model.customTarget.config.clientKey'),
            clientCert: Ember.get(this, 'model.customTarget.config.clientCert'),
            certificate: Ember.get(this, 'model.customTarget.config.certificate'),
            content: (Ember.get(this, 'customContent') || '').replace(/.*<match.*>.*(\r\n|\n|\r) {2}/ig, '').replace(/(\r\n|\n|\r).*<\/match.*>/ig, '')
          }
        });

        var _EmberGet = Ember.get(this, 'model.customTarget'),
            outputFlushInterval = _EmberGet.outputFlushInterval,
            outputTags = _EmberGet.outputTags,
            dockerRoot = _EmberGet.dockerRoot,
            includeSystemComponent = _EmberGet.includeSystemComponent;

        Ember.setProperties(model, {
          outputFlushInterval: outputFlushInterval,
          outputTags: outputTags,
          dockerRoot: dockerRoot,
          includeSystemComponent: includeSystemComponent
        });
      } else {
        var _EmberSetProperties;

        if (targetType === 'fluentForwarder') {
          var fluentServers = Ember.get(model, 'fluentForwarder.config.fluentServers') || [];
          var filter = fluentServers.filter(function (f) {
            return !f.endpoint;
          });

          if (filter.length > 0) {
            errors.pushObject(intl.t('loggingPage.fluentd.endpoint.required'));
          } else {
            if (!Ember.get(this, 'endpointValidate')) {
              errors.pushObject(intl.t('loggingPage.fluentd.endpoint.invalid'));
            }
          }

          filter = fluentServers.filter(function (f) {
            return !f.standby;
          });

          if (filter.length === 0) {
            errors.pushObject(intl.t('loggingPage.fluentd.standby.none'));
          }

          if (errors.length === 0) {
            var fluentConfig = Ember.get(model, 'fluentForwarder.config');
            var enableTls = fluentConfig.enableTls,
                sslVerify = fluentConfig.sslVerify;

            if (enableTls) {
              if (!sslVerify) {
                Ember.set(fluentConfig, 'certificate', null);
              }
            } else {
              Ember.setProperties(fluentConfig, {
                certificate: null,
                clientKey: null,
                clientCert: null,
                sslVerify: false,
                clientKeyPass: null
              });
            }
          }
        }

        var formatConfig = Ember.get(model, "".concat(targetType, ".config")); // In case of type is `/v3/schema/${ targetType }Config`

        Ember.set(formatConfig, 'type', "".concat(targetType, "Config"));
        Ember.setProperties(model, (_EmberSetProperties = {
          outputFlushInterval: Ember.get(model, "".concat(targetType, ".outputFlushInterval")),
          outputTags: Ember.get(model, "".concat(targetType, ".outputTags")),
          dockerRoot: Ember.get(model, "".concat(targetType, ".dockerRoot"))
        }, _defineProperty(_EmberSetProperties, "".concat(targetType, "Config"), Ember.get(this, 'globalStore').createRecord(formatConfig)), _defineProperty(_EmberSetProperties, "includeSystemComponent", Ember.get(model, "".concat(targetType, ".includeSystemComponent"))), _EmberSetProperties));

        if (targetType === 'elasticsearch') {
          var elasticsearchErrors = this.elasticsearchWillSave();
          errors.pushObjects(elasticsearchErrors);
        }

        if (targetType === 'splunk') {
          var splunkErrors = this.splunkWillSave();
          errors.pushObjects(splunkErrors);
        }

        if (targetType === 'kafka') {
          var kafkaErrors = this.kafkaWillSave();
          errors.pushObjects(kafkaErrors);
        }

        if (targetType === 'syslog') {
          var syslogErrors = this.syslogWillSave();
          errors.pushObjects(syslogErrors);
        }
      }

      if (errors.length > 0) {
        return false;
      }

      return this._super.apply(this, arguments);
    },
    formatUrl: function formatUrl(url) {
      var urlParser = (0, _parseUri.default)(url) || {};

      if (!urlParser.port) {
        if (urlParser.protocol === 'http') {
          return "".concat(urlParser.protocol, "://").concat(urlParser.host, ":80");
        }

        if (urlParser.protocol === 'https') {
          return "".concat(urlParser.protocol, "://").concat(urlParser.host, ":443");
        }
      }

      return url;
    },
    doneSaving: function doneSaving(neu) {
      if (Ember.get(this, 'targetType') !== 'customTarget') {
        Ember.set(this, 'customContent', "<match *>\n</match>");
      }

      Ember.setProperties(this, {
        model: neu.clone().patch(),
        originalModel: neu.clone()
      });
    },
    initCustomContent: function initCustomContent() {
      if (Ember.get(this, 'originalModel.targetType') === 'customTarget') {
        var _this$parseValue3 = this.parseValue(Ember.get(this, 'originalModel.customTargetConfig.content')),
            fileObj = _this$parseValue3.fileObj;

        var type = fileObj['@type'];
        var preTargetType = this.fileToFormType(type);
        Ember.setProperties(this, {
          pasteOrUpload: true,
          customContent: "<match *>\n  ".concat(Ember.get(this, 'originalModel.customTargetConfig.content'), "\n</match>"),
          preTargetType: preTargetType
        });
      } else {
        Ember.setProperties(this, {
          pasteOrUpload: false,
          customContent: Ember.get(this, 'model.customTarget.config.content')
        });
      }
    },
    kafkaWillSave: function kafkaWillSave() {
      var model = this.model,
          intl = this.intl;
      var errors = [];
      var kt;
      var brokerEndpoints = Ember.get(model, 'kafka.config.brokerEndpoints');
      var zookeeperEndpoint = Ember.get(model, 'kafka.config.zookeeperEndpoint');
      var kafkaConfig = Ember.get(model, 'kafkaConfig') || {};

      if (brokerEndpoints && brokerEndpoints.length > 0) {
        kt = 'broker';
      } else if (zookeeperEndpoint) {
        kt = 'zookeeper';
      } else {
        errors.pushObject(intl.t('loggingPage.kafka.endpoint.required'));
      }

      if (kt === 'broker') {
        if (Ember.get(kafkaConfig, 'saslUsername') && Ember.get(kafkaConfig, 'saslPassword')) {
          if (Ember.get(kafkaConfig, 'saslType') === 'plain') {
            Ember.set(kafkaConfig, 'saslScramMechanism', null);
          }
        } else {
          Ember.setProperties(kafkaConfig, {
            saslType: null,
            saslScramMechanism: null
          });
        }

        Ember.setProperties(kafkaConfig, {
          zookeeperEndpoint: null,
          brokerEndpoints: brokerEndpoints
        });
      } else if (kt === 'zookeeper') {
        Ember.setProperties(kafkaConfig, {
          zookeeperEndpoint: zookeeperEndpoint,
          brokerEndpoints: null,
          saslScramMechanism: null,
          saslPassword: null,
          saslType: null,
          saslUsername: null,
          clientKey: null,
          clientCert: null,
          certificate: null
        });
      }

      if (!Ember.get(kafkaConfig, 'topic')) {
        errors.pushObject(intl.t('loggingPage.kafka.topic.required'));
      }

      return errors;
    },
    syslogWillSave: function syslogWillSave() {
      var _this$model = this.model,
          model = _this$model === void 0 ? {} : _this$model,
          intl = this.intl;
      var errors = [];
      var config = Ember.get(model, 'syslog.config') || {};
      var endpoint = config.endpoint,
          protocol = config.protocol,
          enableTls = config.enableTls,
          sslVerify = config.sslVerify;
      var syslogConfig = Ember.get(model, 'syslogConfig') || {};

      if (!endpoint) {
        errors.pushObject(intl.t('loggingPage.syslog.endpoint.required'));
      }

      if (protocol === 'udp') {
        Ember.setProperties(syslogConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          sslVerify: false,
          enableTls: null
        });
      }

      if (protocol === 'tcp') {
        if (!enableTls) {
          Ember.setProperties(syslogConfig, {
            certificate: null,
            clientKey: null,
            clientCert: null,
            sslVerify: false
          });
        } else {
          if (!sslVerify) {
            Ember.set(syslogConfig, 'certificate', null);
          }
        }
      }

      return errors;
    },
    splunkWillSave: function splunkWillSave() {
      var _this$model2 = this.model,
          model = _this$model2 === void 0 ? {} : _this$model2,
          intl = this.intl;
      var errors = [];

      if (!Ember.get(model, 'splunk.config.endpoint')) {
        errors.pushObject(intl.t('loggingPage.splunk.endpointRequired'));
      }

      if (!Ember.get(model, 'splunk.config.token')) {
        errors.pushObject(intl.t('loggingPage.splunk.tokenRequired'));
      }

      var config = Ember.get(model, 'splunk.config') || {};
      var _config$endpoint = config.endpoint,
          endpoint = _config$endpoint === void 0 ? '' : _config$endpoint,
          sslVerify = config.sslVerify;
      var splunkConfig = Ember.get(model, 'splunkConfig') || {};

      if (endpoint.startsWith('https')) {
        if (!sslVerify) {
          Ember.set(splunkConfig, 'certificate', null);
        }
      } else {
        Ember.setProperties(splunkConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          clientKeyPass: null,
          sslVerify: false
        });
      }

      return errors;
    },
    elasticsearchWillSave: function elasticsearchWillSave() {
      var _this$model3 = this.model,
          model = _this$model3 === void 0 ? {} : _this$model3,
          intl = this.intl;
      var errors = [];
      var config = Ember.get(model, 'elasticsearch.config') || {};
      var elasticsearchConfig = Ember.get(model, 'elasticsearchConfig') || {};
      Ember.set(elasticsearchConfig, 'indexPrefix', Ember.get(elasticsearchConfig, 'indexPrefix').toLowerCase());
      var indexPrefix = Ember.get(elasticsearchConfig, 'indexPrefix');

      if (!indexPrefix) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.required'));
      }

      if (indexPrefix.startsWith('-') || indexPrefix.startsWith('_') || indexPrefix.startsWith('+')) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.startsWith'));
      }

      INVALID_PREFIX_CHAR.forEach(function (char) {
        if (indexPrefix.indexOf(char) > -1) {
          errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.invalidCharacters', {
            char: char
          }));
        }
      });
      var esErrors = Ember.get(this, 'esErrors');
      var endpoint = config.endpoint,
          sslVerify = config.sslVerify;

      if (!endpoint) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.endpoint.required'));
      } else if (esErrors) {
        errors.pushObject(intl.t(esErrors));
      }

      Ember.set(elasticsearchConfig, 'endpoint', this.formatUrl(endpoint));

      if (endpoint.startsWith('https')) {
        if (!sslVerify) {
          Ember.set(elasticsearchConfig, 'certificate', null);
        }
      } else {
        Ember.setProperties(elasticsearchConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          clientKeyPass: null,
          sslVerify: false
        });
      }

      return errors;
    },
    fileToFormType: function fileToFormType(type) {
      var formType = type;

      switch (type) {
        case 'splunk_hec':
          formType = 'splunk';
          break;

        case 'remote_syslog':
          formType = 'syslog';
          break;

        case 'kafka_buffered':
          formType = 'kafka';
          break;

        case 'forward':
          formType = 'fluentForwarder';
          break;
      }

      return formType;
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/new-edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Q1Yn6A/h",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"h1\"],[11,\"class\",\"pull-left text-capitalize\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[[23,[\"headerLabel\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"scope\",\"currentCluster\",\"isWindows\"]],[23,[\"scope\",\"currentCluster\",\"isVxlan\"]]],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[27,\"t\",[\"windowsCluster.logging.vxlanWarning\"],[[\"appName\",\"htmlSafe\"],[[23,[\"settings\",\"appName\"]],true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"banner bg-info\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"banner-icon p-20\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon icon-info\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"banner-message p-20\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isClusterLevel\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"isWindows\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"windowsCluster.logging.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"loggingPage.helpText.cluster\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[11,\"style\",\"list-style: circle;\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isWindows\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"windowsCluster.logging.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.helpText.cluster\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"li\"],[11,\"style\",\"list-style: circle;\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"clusterTargetType\"]],[27,\"not-eq\",[[23,[\"clusterTargetType\"]],\"none\"],null]],null]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.helpText.clusterTarget\"],[[\"clusterTargetType\",\"htmlSafe\"],[[23,[\"clusterTargetType\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"loggingPage.helpText.noClusterTarget\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[27,\"not-eq\",[[23,[\"targetType\"]],\"none\"],null]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header has-tabs clearfix p-0\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"tab-nav\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"customTarget\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"\\n          \"],[7,\"button\"],[12,\"class\",[27,\"concat\",[[27,\"if\",[[23,[\"testing\"]],\"btn-disabled-transparent\"],null],\" btn bg-transparent\"],null]],[12,\"disabled\",[21,\"testing\"]],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.advanced.cancel\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"cancel\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.advanced.file\"],null],false],[0,\" \"],[7,\"span\"],[11,\"class\",\"icon icon-copy\"],[9],[10],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"showPaste\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"customTarget\"],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"mt-25\"],[9],[0,\"\\n    \"],[1,[27,\"logging/input-logging-config\",null,[[\"showDownload\",\"canChangeName\",\"autoResize\",\"value\",\"model\",\"parentModel\",\"targetType\",\"pageScope\"],[false,false,true,[23,[\"customContent\"]],[23,[\"model\",\"customTarget\"]],[23,[\"model\"]],[23,[\"targetType\"]],[23,[\"pageScope\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"copy-to-clipboard\",null,[[\"tooltipText\",\"buttonText\",\"clipboardText\",\"class\"],[\"\",\"copyToClipboard.tooltip\",[23,[\"value\"]],\"with-clip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"logging/targets-nav\",null,[[\"originalModel\",\"targetType\",\"isClusterLevel\",\"pageScope\"],[[23,[\"originalModel\"]],[23,[\"targetType\"]],[23,[\"isClusterLevel\"]],[23,[\"pageScope\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"originalModel\",\"showTransitioningMessage\"]],[27,\"eq\",[[23,[\"originalModel\",\"targetType\"]],[23,[\"targetType\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[12,\"class\",[28,[\"banner \",[23,[\"originalModel\",\"stateBackground\"]]]]],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"banner-icon p-20\"],[9],[7,\"i\"],[12,\"class\",[28,[\"icon \",[23,[\"originalModel\",\"stateIcon\"]]]]],[9],[10],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"banner-message p-20\"],[9],[0,\"\\n        \"],[7,\"table\"],[9],[0,\"\\n          \"],[1,[27,\"error-sub-row\",null,[[\"fullColspan\",\"model\"],[[23,[\"fullColspan\"]],[23,[\"originalModel\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"elasticsearch\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"logging/target-elasticsearch\",null,[[\"targetType\",\"model\",\"pageScope\",\"parentModel\",\"endpointErrorText\"],[[23,[\"targetType\"]],[23,[\"model\",\"elasticsearch\"]],[23,[\"pageScope\"]],[23,[\"model\"]],[23,[\"esErrors\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"splunk\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"logging/target-splunk\",null,[[\"model\",\"parentModel\",\"targetType\"],[[23,[\"model\",\"splunk\"]],[23,[\"model\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"kafka\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"logging/target-kafka\",null,[[\"model\",\"parentModel\",\"targetType\"],[[23,[\"model\",\"kafka\"]],[23,[\"model\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"syslog\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"logging/target-syslog\",null,[[\"model\",\"parentModel\",\"targetType\"],[[23,[\"model\",\"syslog\"]],[23,[\"model\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"targetType\"]],\"fluentForwarder\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"logging/target-flentd\",null,[[\"model\",\"parentModel\",\"targetType\",\"endpointValidate\"],[[23,[\"model\",\"fluentForwarder\"]],[23,[\"model\"]],[23,[\"targetType\"]],[23,[\"endpointValidate\"]]]]],false],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[27,\"not-eq\",[[23,[\"targetType\"]],\"none\"],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"logging/form-test\",null,[[\"test\",\"testing\",\"tested\",\"testOk\",\"model\",\"targetType\"],[[27,\"action\",[[22,0,[]],\"test\"],null],[23,[\"testing\"]],[23,[\"tested\"]],[23,[\"testOk\"]],[23,[\"model\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"footer-actions\"],[9],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"cancelDisabled\",\"editing\",\"save\"],[[23,[\"saveDisabled\"]],true,true,[27,\"action\",[[22,0,[]],\"save\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/new-edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-elasticsearch/component", ["exports", "logging/mixins/target-elasticsearch", "shared/utils/parse-uri"], function (_exports, _targetElasticsearch, _parseUri) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var endpointText = {
    hostError: 'loggingPage.elasticsearch.endpointHostError',
    protocolError: 'loggingPage.elasticsearch.endpointProtocolError'
  };

  var _default = Ember.Component.extend(_targetElasticsearch.default, {
    showAdvanced: false,
    endpointError: false,
    endpointErrorText: null,
    config: Ember.computed.alias('model.config'),
    sslVerify: Ember.computed.alias('model.config.sslVerify'),
    didInsertElement: function didInsertElement() {
      this.$('#elasticsearch-endpoint').focus();
    },
    actions: {
      alertMessage: function alertMessage() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var urlParser = (0, _parseUri.default)(value) || {};
        Ember.set(this, 'endpointError', true);

        if (value.startsWith('https://') || value.startsWith('http://')) {
          if (urlParser.host) {
            Ember.setProperties(this, {
              endpointError: false,
              endpointErrorText: null
            });
          } else {
            Ember.set(this, 'endpointErrorText', endpointText.hostError);
          }
        } else {
          Ember.set(this, 'endpointErrorText', endpointText.protocolError);
        }
      }
    },
    enableSSLConfig: Ember.computed('config.endpoint', function () {
      var endpoint = Ember.get(this, 'config.endpoint') || '';

      if (endpoint.startsWith('https')) {
        return true;
      } else {
        return false;
      }
    }),
    indexFormat: Ember.computed('pageScope', function () {
      var ps = Ember.get(this, 'pageScope');
      return ps === 'cluster' ? '${clusterName}-${dateFormat}' : '${clusterName}_${projectName}-${dateFormat}';
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-elasticsearch/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DvFxmuPX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-30\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.header\"],null],false],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"box\"],[9],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"mb-30\"],[9],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.endpoint\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\",\"focus-out\"],[\"text\",[23,[\"config\",\"endpoint\"]],\"form-control\",[27,\"t\",[\"loggingPage.endpointPlaceholder\"],null],\"elasticsearch-endpoint\",[27,\"action\",[[22,0,[]],\"alertMessage\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"endpointError\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"text-error text-small\"],[9],[1,[27,\"t\",[[23,[\"endpointErrorText\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.endpointHelpText\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.xpack.header\"],null],false],[0,\" \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.xpack.headerOptional\"],null],false],[10],[10],[0,\"\\n  \"],[7,\"section\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\" \"],[1,[27,\"t\",[\"loggingPage.elasticsearch.xpack.helpText\"],null],false],[0,\" \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\" \"],[1,[27,\"t\",[\"loggingPage.elasticsearch.xpack.username\"],null],false],[0,\" \"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"utocomplete\",\"value\",\"classNames\",\"placeholder\"],[\"text\",\"off\",[23,[\"config\",\"authUsername\"]],\"form-control\",[27,\"t\",[\"loggingPage.elasticsearch.xpack.usernamePlaceholder\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\" \"],[1,[27,\"t\",[\"loggingPage.elasticsearch.xpack.password\"],null],false],[0,\" \"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"utocomplete\",\"type\",\"value\",\"classNames\",\"placeholder\"],[\"off\",\"password\",[23,[\"config\",\"authPassword\"]],\"form-control\",[27,\"t\",[\"loggingPage.elasticsearch.xpack.passwordPlaceholder\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"h4\"],[11,\"class\",\"mt-20\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.indexPatterns.header\"],null],false],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.indexPatterns.helpText\"],null],false],[10],[0,\"\\n  \"],[7,\"section\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.indexPatterns.prefix\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"className\",\"placeholder\"],[\"text\",[23,[\"config\",\"indexPrefix\"]],\"form-control\",[27,\"t\",[\"loggingPage.elasticsearch.indexPatterns.prefixPlaceholder\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"style\",\"margin-top: 34px;\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[1,[27,\"t\",[\"loggingPage.elasticsearch.indexPatterns.dateFormat\"],null],false],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"config\",\"dateFormat\"]],\"YYYY-MM-DD\"]]],false],[0,\" YYYY-MM-DD\"],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"config\",\"dateFormat\"]],\"YYYY-MM\"]]],false],[0,\" YYYY-MM\"],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"config\",\"dateFormat\"]],\"YYYY\"]]],false],[0,\" YYYY\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"loggingPage.elasticsearch.generatedIndex\"],[[\"esIndex\",\"indexFormat\",\"htmlSafe\"],[[23,[\"esIndex\"]],[23,[\"indexFormat\"]],true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\",\"disabled\"],[[23,[\"config\"]],[23,[\"targetType\"]],[27,\"not\",[[23,[\"enableSSLConfig\"]]],null]]]],false],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\"],[[23,[\"logPreview\"]],[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/target-elasticsearch/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-flentd/component", ["exports", "shared/utils/parse-uri"], function (_exports, _parseUri) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var endpointText = {
    hostError: 'loggingPage.fluentd.endpointHostError',
    portError: 'loggingPage.fluentd.endpointPortError'
  };

  var _default = Ember.Component.extend({
    store: Ember.inject.service(),
    showAdvanced: false,
    endpointErrorText: null,
    index: null,
    endpointError: false,
    config: Ember.computed.alias('model.config'),
    fluentServers: Ember.computed.alias('model.config.fluentServers'),
    init: function init() {
      this._super();

      var fluentServers = Ember.get(this, 'config.fluentServers');

      if (!fluentServers) {
        this.send('add');
      } else {
        this.convertToPlainObj();
      }
    },
    didInsertElement: function didInsertElement() {
      this.$('.fluentd-endpoint:first').focus();
    },
    didUpdateAttrs: function didUpdateAttrs() {
      this.convertToPlainObj();
    },
    actions: {
      add: function add() {
        var ary = Ember.get(this, 'fluentServers');
        var defaultFluentServers = {
          endpoint: '',
          password: '',
          sharedKey: '',
          standby: false,
          username: '',
          weight: 100,
          hostname: ''
        };

        if (!ary) {
          Ember.set(this, 'fluentServers', [defaultFluentServers]);
        } else {
          ary.pushObject(defaultFluentServers);
        }
      },
      remove: function remove(item, idx) {
        if (Ember.get(this, 'canRemove')) {
          if (idx === Ember.get(this, 'index')) {
            Ember.setProperties(this, {
              endpointError: false,
              endpointValidate: true
            });
          }

          Ember.get(this, 'fluentServers').removeObject(item);
        }
      },
      alertMessage: function alertMessage(idx) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (value.startsWith('https://') || value.startsWith('http://')) {
          Ember.setProperties(this, {
            endpointErrorText: endpointText.hostError,
            endpointError: true,
            endpointValidate: false,
            index: idx
          });
          return;
        }

        var urlParser = (0, _parseUri.default)(value) || {};

        if (!urlParser.port) {
          Ember.setProperties(this, {
            endpointErrorText: endpointText.portError,
            endpointError: true,
            endpointValidate: false,
            index: idx
          });
          return;
        }

        Ember.setProperties(this, {
          endpointError: false,
          endpointValidate: true
        });
      }
    },
    canRemove: Ember.computed('fluentServers.length', function () {
      return Ember.get(this, 'fluentServers.length') > 1;
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      var fieldsStr = Ember.get(this, 'fieldsStr');
      var template = "{\n    \"log\":    \"time=\"".concat(new Date().toString(), "\" level=info msg=\"Cluster [local] condition status unknown\"\",\n    \"stream\": \"stderr\",\n    \"tag\":    \"default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log\"\n    \"docker\": {\n        \"container_id\": \"xxx\"\n    },\n    \"kubernetes\": {\n        \"container_name\": \"cattle\",\n        \"namespace_name\": \"default\",\n        \"pod_name\":       \"cattle-6b4ccb5b9d-v57vw\",\n        \"pod_id\":         \"30c685d0-fa43-11e7-b992-00163e016dc2\",\n        \"labels\":         {\n            \"app\": \"cattle\",\n            \"pod-template-hash\": \"2607761658\"\n        },\n        \"host\":       \"47.52.113.251\",\n        \"master_url\": \"https://10.233.0.1:443/api\"\n    },\n").concat(fieldsStr, "\n  ...\n}");
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "    \"".concat(key, "\": \"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    }),
    convertToPlainObj: function convertToPlainObj() {
      var fluentServers = Ember.get(this, 'config.fluentServers') || [];
      Ember.set(this, 'fluentServers', fluentServers.map(function (f) {
        return {
          endpoint: f.endpoint,
          password: f.password,
          sharedKey: f.sharedKey,
          standby: f.standby,
          username: f.username,
          weight: f.weight,
          hostname: f.hostname
        };
      }));
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-flentd/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vaWgdieY",
    "block": "{\"symbols\":[\"item\",\"idx\"],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-30\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"loggingPage.fluentd.header\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"mb-30\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"fluentServers\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row box mb-20\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"canRemove\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.fluentd.removeFluentServers\"],null],false],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"remove\",[22,1,[]],[22,2,[]]]],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.endpoint.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,2,[]],0],null]],null,{\"statements\":[[0,\"                  \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"focus-out\"],[\"text\",[22,1,[\"endpoint\"]],\"form-control fluentd-endpoint\",[27,\"t\",[\"loggingPage.fluentd.endpoint.placeholder\"],null],[27,\"action\",[[22,0,[]],\"alertMessage\",[22,2,[]]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"endpointError\"]],[27,\"eq\",[[22,2,[]],[23,[\"index\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"span\"],[11,\"class\",\"text-error text-small\"],[9],[0,\"\\n                  \"],[1,[27,\"t\",[[23,[\"endpointErrorText\"]]],null],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.sharedKey.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"password\",[22,1,[\"sharedKey\"]],\"form-control\",[27,\"t\",[\"loggingPage.fluentd.sharedKey.placeholder\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.username.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[22,1,[\"username\"]],\"form-control\",[27,\"t\",[\"loggingPage.fluentd.username.placeholder\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.password.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"password\",[22,1,[\"password\"]],\"form-control\",[27,\"t\",[\"loggingPage.fluentd.password.placeholder\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-12 pt-0\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.hostname.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[22,1,[\"hostname\"]],\"form-control\",[27,\"t\",[\"loggingPage.fluentd.hostname.placeholder\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"loggingPage.fluentd.weight.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input-int\",null,[[\"class\",\"min\",\"value\",\"placeholder\"],[\"form-control input-sm public\",\"0\",[22,1,[\"weight\"]],[27,\"t\",[\"loggingPage.fluentd.weight.placeholder\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-12 pt-0\"],[11,\"style\",\"margin-top: 43px;\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[22,1,[\"standby\"]]]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"loggingPage.fluentd.standby.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn p-0\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.fluentd.addServer\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"add\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\",\"disabled\"],[[23,[\"config\"]],[23,[\"targetType\"]],[27,\"not\",[[23,[\"config\",\"enableTls\"]]],null]]]],false],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 pt-0\"],[11,\"style\",\"margin-top: 43px;\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[23,[\"config\",\"compress\"]]]]],false],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.fluentd.compress.label\"],null],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[11,\"style\",\"margin-left: 25px;\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.fluentd.compress.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\"],[[23,[\"logPreview\"]],[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/target-flentd/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-kafka/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    brokerType: 'zookeeper',
    brokerEndpoints: null,
    cachedBrokerEndpoints: null,
    cachedZookeeperEndpoint: null,
    showAdvanced: false,
    config: Ember.computed.alias('model.config'),
    isWindows: Ember.computed.alias('scope.currentCluster.isWindows'),
    init: function init() {
      this._super();

      var brokerEndpoints = Ember.get(this, 'config.brokerEndpoints');

      if (brokerEndpoints) {
        Ember.setProperties(this, {
          brokerType: 'broker',
          brokerEndpoints: brokerEndpoints.map(function (endpoint) {
            return {
              endpoint: endpoint
            };
          })
        });
      } else if (Ember.get(this, 'isWindows')) {
        Ember.set(this, 'brokerType', 'broker');
        this.brokerTypeChange();
      } else {
        Ember.set(this, 'brokerType', 'zookeeper');
      }

      var config = Ember.get(this, 'config');
      Ember.setProperties(config, {
        saslType: Ember.get(config, 'saslType') || 'plain',
        saslScramMechanism: Ember.get(config, 'saslScramMechanism') || 'sha256'
      });
    },
    didInsertElement: function didInsertElement() {
      this.$('#kafka-endpoint').focus();
    },
    actions: {
      add: function add() {
        var ary = Ember.get(this, 'brokerEndpoints');

        if (!ary) {
          Ember.set(this, 'brokerEndpoints', [{
            endpoint: ''
          }]);
        } else {
          ary.pushObject({
            endpoint: ''
          });
        }
      },
      remove: function remove(item) {
        if (Ember.get(this, 'canRemove')) {
          Ember.get(this, 'brokerEndpoints').removeObject(item);
        }
      }
    },
    // cache and restore
    brokerTypeChange: Ember.observer('brokerType', function () {
      var t = Ember.get(this, 'brokerType');
      var brokerEndpoints = this.brokerEndpoints,
          zookeeperEndpoint = this.zookeeperEndpoint,
          cachedZookeeperEndpoint = this.cachedZookeeperEndpoint,
          cachedBrokerEndpoints = this.cachedBrokerEndpoints;

      if (t === 'zookeeper') {
        Ember.setProperties(this, {
          cachedBrokerEndpoints: brokerEndpoints,
          'config.zookeeperEndpoint': cachedZookeeperEndpoint,
          brokerEndpoints: null
        });
      } else if (t === 'broker') {
        if (!cachedBrokerEndpoints) {
          this.send('add');
        } else {
          Ember.set(this, 'brokerEndpoints', cachedBrokerEndpoints);
        }

        Ember.setProperties(this, {
          cachedZookeeperEndpoint: zookeeperEndpoint,
          'config.zookeeperEndpoint': null
        });
      }
    }),
    setBroker: Ember.observer('brokerEndpoints.@each.endpoint', function () {
      var eps = Ember.get(this, 'brokerEndpoints');
      var nue;

      if (!eps) {
        nue = null;
      } else {
        nue = eps.filter(function (item) {
          return !!item.endpoint;
        }).map(function (item) {
          return item.endpoint;
        });
      }

      Ember.set(this, 'config.brokerEndpoints', nue);
    }),
    enableSSLConfig: Ember.computed('brokerType', 'config.brokerEndpoints.[].endpoint', function () {
      var brokerType = this.brokerType,
          _this$config = this.config,
          config = _this$config === void 0 ? {} : _this$config;

      if (brokerType === 'broker') {
        if (Ember.get(config, 'brokerEndpoints')) {
          var sslEndpoints = (Ember.get(config, 'brokerEndpoints') || []).filter(function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return e.startsWith('https');
          });
          return sslEndpoints.length > 0;
        }
      }

      return false;
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      var str = Ember.get(this, 'fieldsStr');
      return "{\n    \"log\": \"here's your log\",\n    \"stream\": \"stdout\",\n    \"tag\": \"kubernetes.var.log.containers.splunk-dep-848b7...cb4.log\"\n    \"docker\": {\n        \"container_id\": \"5f07a15a2a60ef4...\"\n    },\n    \"kubernetes\": {\n        \"container_name\": \"splunk\",\n        \"namespace_name\": \"cattle-system\",\n        \"pod_name\": \"splunk-dep-848b7cbdd-5jqd4\"\n    },\n    \"time\": 1515680329,\n".concat(str, "\n}");
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "    \"".concat(key, "\": \"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    }),
    canRemove: Ember.computed('brokerEndpoints.length', function () {
      return Ember.get(this, 'brokerEndpoints.length') > 1;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-kafka/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "s+BMCQfe",
    "block": "{\"symbols\":[\"item\",\"idx\"],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-30\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"loggingPage.kafka.header\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"pr-10\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.kafka.endpointType\"],null],false],[0,\":\\n    \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"isWindows\"]]],null,{\"statements\":[[0,\"      \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"brokerType\"]],\"zookeeper\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.kafka.zookeeper\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"brokerType\"]],\"broker\"]]],false],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.kafka.broker\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isWindows\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"windowsCluster.logging.kafka.brokerTypeHelpText\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.kafka.brokerTypeHelpText\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"mb-30\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"brokerType\"]],\"zookeeper\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.endpoint\"],null],false],[0,\"\\n        \"],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[23,[\"config\",\"zookeeperEndpoint\"]],\"form-control\",[27,\"t\",[\"loggingPage.kafka.endpoint.zookeeper.placeholder\"],null],\"kafka-endpoint\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.kafka.zookeeperHelpText\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[23,[\"brokerEndpoints\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-11\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"loggingPage.endpoint\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,2,[]],0],null]],null,{\"statements\":[[0,\"              \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[22,1,[\"endpoint\"]],\"form-control\",[27,\"t\",[\"loggingPage.kafka.endpoint.broker.placeholder\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-1\"],[11,\"style\",\"padding-top: 29px\"],[9],[0,\"\\n          \"],[7,\"button\"],[12,\"class\",[28,[\"btn bg-primary icon-btn \",[27,\"if\",[[23,[\"canRemove\"]],\"\",\"disabled\"],null]]]],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-minus\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"remove\",[22,1,[]]]],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"loggingPage.kafka.brokerHelpText\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn p-0\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"loggingPage.kafka.addEndpoint\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"add\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.kafka.topic.label\"],null],false],[0,\"\\n        \"],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"topic\"]],\"form-control\",[27,\"t\",[\"loggingPage.kafka.topicPlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.kafka.topicHelpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"brokerType\"]],\"broker\"],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\"],[[23,[\"config\"]],[23,[\"targetType\"]]]]],false],[0,\"\\n\\n  \"],[1,[27,\"logging/form-log-sasl\",null,[[\"config\"],[[23,[\"config\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\"],[[23,[\"logPreview\"]],[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/target-kafka/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-splunk/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    showAdvanced: false,
    config: Ember.computed.alias('model.config'),
    didInsertElement: function didInsertElement() {
      this.$('#splunk-endpoint').focus();
    },
    enableSSLConfig: Ember.computed('config.endpoint', function () {
      var endpoint = Ember.get(this, 'config.endpoint') || '';

      if (endpoint.startsWith('https')) {
        return true;
      } else {
        return false;
      }
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      var fieldsStr = Ember.get(this, 'fieldsStr');
      var template = "{\n    \"log\": \"time=\"".concat(new Date().toString(), "\" level=info msg=\"Cluster [local] condition status unknown\"\",\n    \"stream\": \"stderr\",\n    \"tag\": \"default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log\"\n    \"docker\": {\n        \"container_id\": \"xxx\"\n    },\n    \"kubernetes\": {\n        \"container_name\": \"cattle\",\n        \"namespace_name\": \"default\",\n        \"pod_name\": \"cattle-6b4ccb5b9d-v57vw\",\n        \"pod_id\": \"30c685d0-fa43-11e7-b992-00163e016dc2\",\n        \"labels\": {\n            \"app\": \"cattle\",\n            \"pod-template-hash\": \"2607761658\"\n        },\n        \"host\": \"47.52.113.251\",\n        \"master_url\": \"https://10.233.0.1:443/api\"\n    },\n").concat(fieldsStr, "\n  ...\n}");
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "    \"".concat(key, "\": \"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-splunk/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yQBH2Hw8",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-30\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"loggingPage.splunk.header\"],null],false],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"loggingPage.splunk.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"box\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"mb-30\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.endpoint\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[23,[\"config\",\"endpoint\"]],\"form-control\",[27,\"t\",[\"loggingPage.splunk.endpoint.placeholder\"],null],\"splunk-endpoint\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.splunk.token\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"token\"]],\"form-control\",[27,\"t\",[\"loggingPage.splunk.tokenPlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.splunk.tokenHelpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.splunk.source\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"source\"]],\"form-control\",[27,\"t\",[\"loggingPage.splunk.sourcePlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.splunk.sourceHelpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.splunk.index\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"index\"]],\"form-control\",[27,\"t\",[\"loggingPage.splunk.indexPlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.splunk.indexHelpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\",\"disabled\"],[[23,[\"config\"]],[23,[\"targetType\"]],[27,\"not\",[[23,[\"enableSSLConfig\"]]],null]]]],false],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\"],[[23,[\"logPreview\"]],[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/target-splunk/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/target-syslog/component", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SEVERITIES = [{
    value: 'emerg',
    label: 'emergency'
  }, {
    value: 'alert',
    label: 'alert'
  }, {
    value: 'crit',
    label: 'critical'
  }, {
    value: 'err',
    label: 'error'
  }, {
    value: 'warning',
    label: 'warning'
  }, {
    value: 'notice',
    label: 'notice'
  }, {
    value: 'info',
    label: 'info'
  }, {
    value: 'debug',
    label: 'debug'
  }].map(function (item) {
    return {
      value: item.value,
      label: "loggingPage.syslog.severities.".concat(item.label)
    };
  });

  var _default = Ember.Component.extend({
    showAdvanced: false,
    preSSlConfig: null,
    config: Ember.computed.alias('model.config'),
    init: function init() {
      this._super.apply(this, arguments);

      this.set('severities', SEVERITIES);
    },
    didInsertElement: function didInsertElement() {
      this.$('#syslog-endpoint').focus();
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var config = Ember.get(this, 'config');
      var preSSlConfig = Object.assign({}, config);
      Ember.set(this, 'preSSlConfig', preSSlConfig);
    },
    actions: {
      changeProtocol: function changeProtocol(protocol) {
        Ember.set(this, 'config.protocol', protocol);
      }
    },
    enableSSLConfig: Ember.computed('config.protocol', function () {
      var protocol = Ember.get(this, 'config.protocol') || '';
      var preSSlConfig = Ember.get(this, 'preSSlConfig') || {};
      var config = Ember.get(this, 'config');

      if (protocol === 'tcp') {
        if (preSSlConfig.protocol === 'tcp') {
          Ember.setProperties(config, {
            certificate: preSSlConfig.certificate,
            clientKey: preSSlConfig.clientKey,
            clientCert: preSSlConfig.clientCert,
            sslVerify: preSSlConfig.sslVerify
          });
        }

        return true;
      } else {
        if (config) {
          Ember.setProperties(config, {
            certificate: null,
            clientKey: null,
            clientCert: null,
            sslVerify: false
          });
        }

        return false;
      }
    }),
    logPreview: Ember.computed('fieldsStr', 'config.program', 'config.token', function () {
      var str = Ember.get(this, 'fieldsStr');
      var program = Ember.get(this, 'config.program') || '';
      var ts = (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss');
      var message = "\n  stream:stderr\n  docker:\n  {\n    \"container_id\"=>\"218477a1e...0371\"\n  }\n  kubernetes:\n  {\n    \"container_name\"=>\"kube-flannel\",\n    \"namespace_name\"=>\"kube-system\",\n    \"pod_name\"=>\"kube-flannel-8ztd8\"\n  }";

      if (Ember.get(this, 'config.token')) {
        var token = "\n  token:".concat(Ember.get(this, 'config.token'));
        message = token + message;
      }

      return "Timestamp = ".concat(ts, "\nHost      = 192.168.1.2\nProgram   = ").concat(program, "\nMessage   = ").concat(message, "\n").concat(str);
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "  \"".concat(key, "\"=>\"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-syslog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ro0DZRiW",
    "block": "{\"symbols\":[\"item\",\"dd\"],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-30\"],[9],[1,[27,\"t\",[\"loggingPage.syslog.header\"],null],false],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"box\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"loggingPage.endpoint\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[23,[\"config\",\"endpoint\"]],\"form-control\",[27,\"t\",[\"loggingPage.syslog.endpointPlaceholder\"],null],\"syslog-endpoint\"]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"input-group-btn bg-primary\"],[9],[0,\"\\n\"],[4,\"basic-dropdown\",null,[[\"horizontalPosition\"],[\"right\"]],{\"statements\":[[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,2,[\"trigger\"]],\"expected `dd.trigger` to be a contextual component but found a string. Did you mean `(component dd.trigger)`? ('logging/components/logging/target-syslog/template.hbs' @ L18:C15) \"],null]],[[\"class\"],[\"btn bg-default text-uppercase\"]],{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"pr-5\"],[9],[1,[23,[\"config\",\"protocol\"]],false],[10],[7,\"i\"],[11,\"class\",\"icon icon-chevron-down\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,2,[\"content\"]],\"expected `dd.content` to be a contextual component but found a string. Did you mean `(component dd.content)`? ('logging/components/logging/target-syslog/template.hbs' @ L22:C15) \"],null]],null,{\"statements\":[[0,\"              \"],[7,\"li\"],[9],[7,\"a\"],[9],[0,\"TCP\"],[3,\"action\",[[22,0,[]],\"changeProtocol\",\"tcp\"]],[10],[10],[0,\"\\n              \"],[7,\"li\"],[9],[7,\"a\"],[9],[0,\"UDP\"],[3,\"action\",[[22,0,[]],\"changeProtocol\",\"udp\"]],[10],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[1,[27,\"t\",[\"loggingPage.syslog.endpointHelpText\"],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.syslog.program\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"program\"]],\"form-control\",[27,\"t\",[\"loggingPage.syslog.programPlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[1,[27,\"t\",[\"loggingPage.syslog.programHelpText\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"\"],[9],[1,[27,\"t\",[\"loggingPage.splunk.token\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"config\",\"token\"]],\"form-control\",[27,\"t\",[\"loggingPage.splunk.tokenPlaceholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"loggingPage.syslog.tokenHelpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"mr-10\"],[9],[0,\"Log Severity:\"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"severities\"]]],null,{\"statements\":[[0,\"      \"],[7,\"label\"],[11,\"class\",\"mr-10 text-capitalize\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"config\",\"severity\"]],[22,1,[\"value\"]]]]],false],[0,\"\\n        \"],[1,[27,\"t\",[[22,1,[\"label\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[1,[27,\"t\",[\"loggingPage.syslog.severityHelpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-ssl\",null,[[\"config\",\"targetType\",\"disabled\"],[[23,[\"config\"]],[23,[\"targetType\"]],[27,\"or\",[[27,\"not\",[[23,[\"enableSSLConfig\"]]],null],[27,\"not\",[[23,[\"config\",\"enableTls\"]]],null]],null]]]],false],[0,\"\\n\\n\"],[1,[27,\"logging/form-log-format\",null,[[\"logPreview\",\"model\"],[[23,[\"logPreview\"]],[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/target-syslog/template.hbs"
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/targets-nav/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    currentTarget: Ember.computed('originalModel.targetType', function () {
      var targetType = Ember.get(this, 'originalModel.targetType');
      return targetType === 'fluentForwarder' ? 'fluentd output forward' : targetType;
    }),
    targetTypeName: Ember.computed('targetType', function () {
      var targetType = Ember.get(this, 'targetType');
      return targetType === 'fluentForwarder' ? 'fluentd output forward' : targetType;
    }),
    hasCurrentTarget: function () {
      var ol = this.get('originalModel');

      if (!ol) {
        return false;
      }

      var currentTarget = this.get('currentTarget');
      return currentTarget && currentTarget !== 'none';
    }.property('currentTarget'),
    targets: Ember.computed('isClusterLevel', 'currentTarget', function () {
      return [{
        type: 'none',
        label: 'loggingPage.targetTypes.disable',
        css: "none".concat(this.currentCss('none')),
        classNames: '',
        available: true,
        disabled: false
      }, {
        type: 'elasticsearch',
        label: 'loggingPage.targetTypes.elasticsearch',
        css: "elasticsearch".concat(this.currentCss('elasticsearch')),
        available: true,
        disabled: false
      }, {
        type: 'splunk',
        label: 'loggingPage.targetTypes.splunk',
        css: "splunk".concat(this.currentCss('splunk')),
        available: true,
        disabled: false
      }, {
        type: 'kafka',
        label: 'loggingPage.targetTypes.kafka',
        css: "kafka".concat(this.currentCss('kafka')),
        available: true,
        disabled: false
      }, {
        type: 'syslog',
        label: 'loggingPage.targetTypes.syslog',
        css: "syslog".concat(this.currentCss('syslog')),
        available: true,
        disabled: false
      }, {
        type: 'fluentForwarder',
        label: 'loggingPage.targetTypes.fluentd',
        css: "fluentd".concat(this.currentCss('fluentd output forward')),
        available: true,
        disabled: false
      }];
    }),
    currentCss: function currentCss(type) {
      return this.get('hasCurrentTarget') && type === this.get('currentTarget') ? ' current' : '';
    }
  });

  _exports.default = _default;
});
define("logging/components/logging/targets-nav/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "89p9qc7e",
    "block": "{\"symbols\":[\"target\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"row nav nav-boxes checked-current mv-30 \",[27,\"if\",[[27,\"eq\",[[23,[\"currentTarget\"]],\"embedded\"],null],\"embedded\"],null],\"  logging-targets\"]]],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"targets\"]]],null,{\"statements\":[[4,\"if\",[[22,1,[\"available\"]]],null,{\"statements\":[[4,\"link-to\",[\"logging\",[27,\"query-params\",null,[[\"targetType\"],[[22,1,[\"type\"]]]]]],[[\"alt\",\"classNames\",\"disabled\",\"href\"],[[22,1,[\"label\"]],\"col span-2 nav-box-item driver\",[22,1,[\"disabled\"]],false]],{\"statements\":[[0,\"      \"],[7,\"div\"],[12,\"class\",[28,[[22,1,[\"css\"]]]]],[9],[10],[0,\"\\n\"],[4,\"if\",[[22,1,[\"label\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[1,[27,\"t\",[[22,1,[\"label\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"text-center text-muted\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"targetTypeName\"]],\"none\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not\",[[23,[\"hasCurrentTarget\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseA\"],[[\"pageScope\"],[[23,[\"pageScope\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseB\"],[[\"pageScope\",\"currentTarget\",\"htmlSafe\"],[[23,[\"pageScope\"]],[23,[\"currentTarget\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"hasCurrentTarget\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseC\"],[[\"currentTarget\",\"htmlSafe\"],[[23,[\"currentTarget\"]],true]]],false],[0,\"\\n\"],[4,\"unless\",[[27,\"eq\",[[23,[\"currentTarget\"]],[23,[\"targetTypeName\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseD\"],[[\"targetType\",\"htmlSafe\"],[[23,[\"targetTypeName\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseE\"],[[\"targetType\",\"htmlSafe\"],[[23,[\"targetTypeName\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"loggingPage.targetNav.tips.caseF\"],[[\"targetType\",\"htmlSafe\"],[[23,[\"targetTypeName\"]],true]]],false],[0,\"\\n    \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/components/logging/targets-nav/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/marked-down/component", "logging/components/marked-down/component");
define.alias("shared/components/metrics-action/component", "logging/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "logging/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "logging/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "logging/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "logging/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "logging/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "logging/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "logging/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "logging/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "logging/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "logging/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "logging/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "logging/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "logging/components/modal-move-namespace/component");
define.alias("shared/components/modal-root/component", "logging/components/modal-root/component");
define.alias("shared/components/modal-shell/component", "logging/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "logging/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "logging/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "logging/components/namespace-group/component");
define.alias("shared/components/new-select/component", "logging/components/new-select/component");
define.alias("shared/components/node-ip/component", "logging/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "logging/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "logging/components/node-taints/component");
define.alias("shared/components/outside-click/component", "logging/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "logging/components/page-numbers");
define.alias("shared/components/page-numbers/component", "logging/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "logging/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "logging/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "logging/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "logging/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "logging/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "logging/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "logging/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "logging/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "logging/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "logging/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "logging/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "logging/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "logging/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "logging/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "logging/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "logging/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "logging/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "logging/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "logging/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "logging/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "logging/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "logging/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "logging/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "logging/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "logging/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "logging/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "logging/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "logging/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "logging/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "logging/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "logging/components/search-text/component");
define.alias("shared/components/searchable-select/component", "logging/components/searchable-select/component");
define.alias("shared/components/settings/danger-zone/component", "logging/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "logging/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "logging/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "logging/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "logging/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "logging/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "logging/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "logging/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "logging/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "logging/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "logging/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "logging/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "logging/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "logging/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "logging/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "logging/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "logging/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "logging/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "logging/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "logging/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "logging/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "logging/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "logging/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "logging/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "logging/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "logging/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "logging/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "logging/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "logging/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "logging/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "logging/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "logging/components/used-percent-gauge/component");
define("logging/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'logging/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "logging/cookies/service");
define.alias("shared/digital-ocean/service", "logging/digital-ocean/service");
define.alias("shared/endpoint/service", "logging/endpoint/service");
define("logging/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "logging/resolver", "logging/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var modulePrefix = _environment.default.modulePrefix;

  var Eng = _engine.default.extend({
    modulePrefix: modulePrefix,
    Resolver: _resolver.default,
    dependencies: {
      services: ['app', 'clusterStore', 'globalStore', 'modal', 'router', 'intl', 'resource-actions', 'scope', 'session', 'store', 'tooltip'],
      externalRoutes: []
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "logging/features/service");
define.alias("shared/grafana/service", "logging/grafana/service");
define.alias("shared/growl/service", "logging/growl/service");
define.alias("ember-math-helpers/helpers/abs", "logging/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "logging/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "logging/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "logging/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "logging/helpers/and");
define.alias("shared/helpers/array-includes", "logging/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "logging/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "logging/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "logging/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "logging/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "logging/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "logging/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "logging/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "logging/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "logging/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "logging/helpers/cosh");
define.alias("shared/helpers/date-calendar", "logging/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "logging/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "logging/helpers/date-recent");
define.alias("shared/helpers/date-str", "logging/helpers/date-str");
define.alias("shared/helpers/default-str", "logging/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "logging/helpers/div");
define.alias("shared/helpers/driver-name", "logging/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "logging/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "logging/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "logging/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "logging/helpers/floor");
define.alias("ember-intl/helpers/format-date", "logging/helpers/format-date");
define.alias("ember-intl/helpers/format-html-message", "logging/helpers/format-html-message");
define.alias("shared/helpers/format-ip", "logging/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "logging/helpers/format-message");
define.alias("shared/helpers/format-mib", "logging/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "logging/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "logging/helpers/format-relative");
define.alias("shared/helpers/format-si", "logging/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "logging/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "logging/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "logging/helpers/gcd");
define.alias("shared/helpers/get-card-class", "logging/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "logging/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "logging/helpers/gte");
define.alias("shared/helpers/has-override", "logging/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "logging/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "logging/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "logging/helpers/imul");
define.alias("ember-intl/helpers/intl-get", "logging/helpers/intl-get");
define.alias("ember-truth-helpers/helpers/is-array", "logging/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "logging/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "logging/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "logging/helpers/is-equal");
define.alias("shared/helpers/join-array", "logging/helpers/join-array");
define.alias("ember-intl/helpers/l", "logging/helpers/l");
define.alias("liquid-fire/helpers/lf-lock-model", "logging/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "logging/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "logging/helpers/link-ssl-domain");
define("logging/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkify.default;
    }
  });
});
define.alias("ember-math-helpers/helpers/log-e", "logging/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "logging/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "logging/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "logging/helpers/log2");
define.alias("shared/helpers/lower-case", "logging/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "logging/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "logging/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "logging/helpers/max");
define.alias("shared/helpers/maybe-t", "logging/helpers/maybe-t");
define.alias("ember-math-helpers/helpers/min", "logging/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "logging/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "logging/helpers/mult");
define.alias("shared/helpers/nl-to-br", "logging/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "logging/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "logging/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "logging/helpers/or");
define.alias("shared/helpers/parse-camelcase", "logging/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "logging/helpers/pow");
define.alias("shared/helpers/pretty-cron", "logging/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "logging/helpers/random");
define.alias("shared/helpers/rbac-allows", "logging/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "logging/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "logging/helpers/round");
define.alias("shared/helpers/run-time", "logging/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "logging/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "logging/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "logging/helpers/sqrt");
define.alias("shared/helpers/str-replace", "logging/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "logging/helpers/sub");
define.alias("ember-intl/helpers/format-html-message", "logging/helpers/t-html");
define.alias("ember-intl/helpers/t", "logging/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "logging/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "logging/helpers/tanh");
define.alias("shared/helpers/to-json", "logging/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "logging/helpers/trunc");
define.alias("shared/helpers/uc-first", "logging/helpers/uc-first");
define.alias("shared/helpers/upper-case", "logging/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "logging/helpers/xor");
define.alias("shared/host/service", "logging/host/service");
define("logging/initializers/app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('controller', 'app', 'service:app');
    application.inject('route', 'app', 'service:app');
    application.inject('view', 'app', 'service:app');
    application.inject('component', 'app', 'service:app');
    application.inject('model', 'app', 'service:app');
  }

  var _default = {
    name: 'app',
    initialize: initialize
  };
  _exports.default = _default;
});
define("logging/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-api-store',
    initialize: (0, _store.default)()
  };
  _exports.default = _default;
});
define("logging/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  (0, _emberInternals.initialize)();
  var _default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
  _exports.default = _default;
});
define("logging/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',
    initialize: function initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        var hrefToClickHandler = function _hrefToClickHandler(e) {
          var link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            var hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy: function willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super.apply(this, arguments);
          }
        });
      }
    }
  };
  _exports.default = _default;
});
define("logging/instance-initializers/ember-intl", ["exports", "ember-intl/initializer"], function (_exports, _initializer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "instanceInitializer", {
    enumerable: true,
    get: function get() {
      return _initializer.instanceInitializer;
    }
  });
  _exports.default = void 0;

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var _default = _initializer.default;
  _exports.default = _default;
});
define.alias("shared/k8s/service", "logging/k8s/service");
define.alias("shared/linode/service", "logging/linode/service");
define("logging/logging/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['targetType'],
    targetType: 'none'
  });

  _exports.default = _default;
});
define("logging/logging/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    session: Ember.inject.service(),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    model: function model()
    /* params, transition*/
    {
      var _this = this;

      var globalStore = this.get('globalStore');
      var pageScope = this.get('pageScope');
      var cluster = window.l('route:application').modelFor('authenticated.cluster');

      if (pageScope === 'cluster') {
        var clusterId = cluster.get('id');
        var opt = {
          filter: {
            clusterId: clusterId
          }
        };
        return globalStore.find('clusterlogging', null, opt).then(function (loggings) {
          var logging = loggings.filterBy('clusterId', clusterId).get('firstObject');

          if (!logging) {
            logging = _this.createLogging('clusterlogging');
          }

          var clone = logging.clone().patch();
          return {
            logging: clone,
            originalLogging: logging
          };
        });
      } else if (pageScope === 'project') {
        var project = window.l('route:application').modelFor('authenticated.project').get('project');
        var projectId = project.get('id');

        var _clusterId = project.get('clusterId');

        var clusterOpt = {
          filter: {
            clusterId: _clusterId
          }
        };
        var projectOpt = {
          filter: {
            projectId: projectId
          }
        };
        return Ember.RSVP.hash({
          clusterLoggings: globalStore.find('clusterlogging', null, clusterOpt),
          projectLoggings: globalStore.find('projectlogging', null, projectOpt)
        }).then(function (hash) {
          var logging = hash.projectLoggings.filterBy('projectId', projectId).get('firstObject');

          if (!logging) {
            logging = _this.createLogging('projectlogging');
          }

          var clone = logging.clone().patch();
          var clusterLogging = hash.clusterLoggings.filterBy('clusterId', _clusterId).get('firstObject');
          return {
            logging: clone,
            originalLogging: logging,
            clusterLogging: clusterLogging
          };
        });
      }
    },
    setupController: function setupController(controller, model) {
      this._super.apply(this, arguments);

      var t = Ember.get(model, 'originalLogging.targetType');
      Ember.run.next(function () {
        controller.set('targetType', t);
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(Ember.get(this, 'pageScope') === 'cluster' ? _constants.default.SESSION.CLUSTER_ROUTE : _constants.default.SESSION.PROJECT_ROUTE), "authenticated.".concat(Ember.get(this, 'pageScope'), ".logging"));
    }),
    createLogging: function createLogging(loggingType) {
      var gs = Ember.get(this, 'globalStore');
      var newLogging = gs.createRecord({
        type: loggingType,
        outputTags: {}
      });
      return newLogging;
    }
  });

  _exports.default = _default;
});
define("logging/logging/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zhSvKBXH",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"logging/new-edit\",null,[[\"model\",\"originalModel\",\"clusterLogging\",\"targetType\"],[[23,[\"model\",\"logging\"]],[23,[\"model\",\"originalLogging\"]],[23,[\"model\",\"clusterLogging\"]],[23,[\"targetType\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/logging/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/mixins/cattle-transitioning-resource", "logging/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "logging/mixins/console");
define.alias("shared/mixins/container-choices", "logging/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "logging/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "logging/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "logging/mixins/filter-state");
define.alias("shared/mixins/grafana", "logging/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "logging/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "logging/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "logging/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "logging/mixins/manage-labels");
define.alias("shared/mixins/metrics", "logging/mixins/metrics");
define.alias("shared/mixins/modal-base", "logging/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "logging/mixins/new-or-edit");
define.alias("shared/mixins/preload", "logging/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "logging/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "logging/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "logging/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "logging/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "logging/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "logging/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "logging/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "logging/mixins/subscribe");
define("logging/mixins/target-elasticsearch", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    scope: Ember.inject.service(),
    config: Ember.computed.alias('model.config'),
    project: Ember.computed.alias('scope.currentProject'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    init: function init() {
      this._super.apply(this, arguments);

      var indexPrefix = Ember.get(this, 'config.indexPrefix');

      if (!indexPrefix) {
        Ember.set(this, 'config.indexPrefix', Ember.get(this, 'defaultIndexPrefix'));
      }
    },
    defaultIndexPrefix: function () {
      var pageScope = Ember.get(this, 'pageScope');
      var prefix = Ember.get(this, 'cluster.name') || Ember.get(this, 'cluster.id');

      if (pageScope === 'cluster') {
        return prefix.toLowerCase();
      } else {
        return "".concat(prefix, "_").concat(Ember.get(this, 'project.name')).toLowerCase();
      }
    }.property('project.name', 'cluster.name'),
    logPreview: function () {
      var index = Ember.get(this, 'esIndex');
      var outputTags = Ember.get(this, 'outputTags');
      var template = "{\n  \"_index\": \"".concat(index, "\",\n  \"_id\": \"AWD68LuuhwVvf5LMJq1h\",\n  \"_source\": {\n    \"log\": \"time=\"2018-01-15T17:49:26Z\" level=info msg=\"Creating cluster event [Created container]\"\n\",\n    \"kubernetes\": {\n      \"container_name\": \"cattle\",\n      \"namespace_name\": \"default\",\n      \"pod_name\": \"cattle-6b4ccb5b9d-tzs4q\",\n      \"labels\": {\n        \"app\": \"cattle\",\n        \"pod-template-hash\": \"2607761658\"\n      },\n      \"host\": \"47.89.14.205\",\n      \"master_url\": \"https://10.233.0.1:443/api\"\n    },\n").concat(outputTags, "\n  },\n  ...\n}");
      return template;
    }.property('esIndex', 'outputTags'),
    outputTags: function () {
      var keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(function (key) {
        return "    \"".concat(key, "\": \"").concat(keyValueMap[key], "\"");
      }).join(',\n');
    }.property('model.outputTags'),
    dateFormatString: function () {
      var fmt = this.get('config.dateFormat');
      return (0, _moment.default)().format(fmt);
    }.property('config.dateFormat'),
    esIndex: function () {
      return "".concat(Ember.get(this, 'config.indexPrefix'), "-").concat(Ember.get(this, 'dateFormatString'));
    }.property('config.indexPrefix', 'dateFormatString')
  });

  _exports.default = _default;
});
define.alias("shared/mixins/throttled-resize", "logging/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "logging/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "logging/mixins/upgrade-component");
define.alias("shared/mixins/upload", "logging/mixins/upload");
define.alias("shared/modal/service", "logging/modal/service");
define.alias("shared/oauth/service", "logging/oauth/service");
define.alias("shared/pipeline-github/service", "logging/pipeline-github/service");
define.alias("shared/prefs/service", "logging/prefs/service");
define("logging/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "logging/resource-actions/service");
define.alias("shared/role-template/service", "logging/role-template/service");
define.alias("shared/saml/service", "logging/saml/service");
define.alias("shared/scope/service", "logging/scope/service");
define.alias("ivy-codemirror/services/code-mirror", "logging/services/code-mirror");
define("logging/services/cookies", ["exports", "@rancher/ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "logging/services/intl");
define("logging/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "logging/session/service");
define.alias("shared/settings/service", "logging/settings/service");
define("logging/shared/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/access/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/access/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-dns-records/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-dns-records/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-storage-classes/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-storage-classes/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/all-workloads/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/all-workloads/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/azure-ad/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/azure-ad/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/bulk-action-handler/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/bulk-action-handler/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/capabilities/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/capabilities/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/catalog/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/catalog/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/cluster-templates/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/cluster-templates/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/code-mirror/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/code-mirror/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/accordion-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/accordion-list-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/accordion-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/accordion-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/action-menu-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/action-menu-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/advanced-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/advanced-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/annotations-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/annotations-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/answer-override-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/answer-override-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/api-field/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api-field/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/authorized-endpoint/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/authorized-endpoint/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/badge-state/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/badge-state/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/banner-message/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/banner-message/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/btn-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/btn-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-index/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-index/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/catalog-persistence-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/catalog-persistence-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-computed-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-computed-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/check-override-allowed/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/check-override-allowed/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-aliyunkcs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-aliyunkcs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-amazoneks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-amazoneks/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-azureaks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-azureaks/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-googlegke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-googlegke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-huaweicce/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-huaweicce/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-import/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-import/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-driver/driver-tencenttke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-driver/driver-tencenttke/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-ribbon-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-ribbon-nav/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-override-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-override-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-question-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-question-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-revision-upgrade-notification/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-revision-upgrade-notification/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-template-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-template-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cluster-templates-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cluster-templates-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/code-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/code-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/confirm-delete/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/confirm-delete/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/container-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/container-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/containers-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/containers-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/copy-inline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/copy-inline/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/copy-to-clipboard/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/copy-to-clipboard/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cloud-provider/cloud-provider-info.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cloud-provider/cloud-provider-info.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cloud-provider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cloud-provider/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster-template-questions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster-template-questions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-node-pools/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-node-pools/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/cru-private-registry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/cru-private-registry/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/custom-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/custom-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/empty-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/empty-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/error-sub-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/error-sub-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/field-required/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/field-required/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-auth-cloud-credential/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-auth-cloud-credential/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-certificate-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-certificate-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-count/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-count/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-engine-opts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-engine-opts/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-gke-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-gke-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-global-resource-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-global-resource-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-backends/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-backends/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ingress-rule/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ingress-rule/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-key-value/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-key-value/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-labels-annotations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-labels-annotations/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-match-expressions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-match-expressions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members-catalog-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members-catalog-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members-global-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members-global-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-members/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-members/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-name-description/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-name-description/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-network-config/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-network-config/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-project-targets/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-project-targets/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-reservation/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-reservation/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-share-member/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-share-member/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ssl-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ssl-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-ssl-termination/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-ssl-termination/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-value-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-value-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/form-versions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/form-versions/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/gke-access-scope/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/gke-access-scope/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/graph-area/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/graph-area/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/graph-area/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/graph-area/theme.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/hover-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/hover-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/huawei-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/huawei-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/identity-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/identity-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-answer-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-answer-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-custom-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-custom-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-identity/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-identity/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-integer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-integer/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-number/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-number/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-or-display/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-or-display/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-paste/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-paste/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-slider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-slider/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-suggest/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-suggest/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-text-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-text-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-url/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-url/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/input-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/input-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/labels-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/labels-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/language-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/language-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/link-to-as-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/link-to-as-attrs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/link-to-cluster-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/link-to-cluster-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/marked-down/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/marked-down/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-action/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-action/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-graph/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/metrics-summary/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/metrics-summary/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-add-custom-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-add-custom-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-confirm-deactivate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-confirm-deactivate/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-confirm-yaml-switch/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-confirm-yaml-switch/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-container-stop/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-container-stop/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-delete-eks-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-delete-eks-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-edit-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-edit-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-istio-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-istio-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-move-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-move-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-root/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-root/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/modal-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/multi-container-stats/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/multi-container-stats/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/namespace-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/namespace-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/new-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/new-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-ip/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-ip/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-pool-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-pool-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/outside-click/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/outside-click/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/page-numbers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/page-numbers/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/pretty-json/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/pretty-json/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/principal-search/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/principal-search/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/progress-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/progress-bar/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/project-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/project-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/radio-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/radio-button/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/resource-condition-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/resource-condition-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/resource-event-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/resource-event-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/save-cancel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/save-cancel/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/scheduling-toleration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/scheduling-toleration/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-boolean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-boolean/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-date/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-dns-record/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-dns-record/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-enum/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-enum/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-hostname/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-hostname/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-istiohost/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-istiohost/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-masked/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-masked/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-multiline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-multiline/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-pvc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-pvc/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-relative-service/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-relative-service/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-storageclass/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-storageclass/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-string/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-string/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/schema/input-workload/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/schema/input-workload/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/search-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/search-text/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/searchable-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/searchable-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/danger-zone/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/danger-zone/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/host-registration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/host-registration/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/settings/settings-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/settings/settings-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/share-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/share-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/shortcut-key/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/shortcut-key/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/sortable-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sortable-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/sortable-thead/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/sortable-thead/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-aws-ebs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-aws-ebs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-azure-disk/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-azure-disk/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-azure-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-azure-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-cinder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-cinder/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-gce-pd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-gce-pd/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-generic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-generic/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-glusterfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-glusterfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-longhorn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-longhorn/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-portworx-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-portworx-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-quobyte/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-quobyte/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-rbd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-rbd/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-scaleio/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-scaleio/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-storageos/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-storageos/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/storage-class/provisioner-vsphere-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/storage-class/provisioner-vsphere-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/table-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/table-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/textarea-autogrow/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/textarea-autogrow/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-basic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-basic/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-element/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-element/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-expiring/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-expiring/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-toggle-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-toggle-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/tooltip-warning/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/tooltip-warning/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/top-errors/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/top-errors/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/upgrade-btn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/upgrade-btn/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/used-percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/used-percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/cookies/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/cookies/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/digital-ocean/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/digital-ocean/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/endpoint/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/endpoint/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/features/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/features/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/grafana/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/grafana/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/growl/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/growl/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/array-includes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/array-includes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-calendar.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-from-now.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-from-now.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-recent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-recent.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/date-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/date-str.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/default-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/default-str.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/driver-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/driver-name.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/format-ip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/format-ip.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/format-mib.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/format-mib.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/get-card-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/get-card-class.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/has-override.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/has-override.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/join-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/join-array.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/link-ssl-domain.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/link-ssl-domain.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/linkify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/linkify.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/lower-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/lower-case.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/maybe-t.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/maybe-t.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/nl-to-br.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/nl-to-br.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/parse-camelcase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/parse-camelcase.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/pretty-cron.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/pretty-cron.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/rbac-allows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/rbac-allows.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/rbac-prevents.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/rbac-prevents.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/run-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/run-time.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/str-replace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/str-replace.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/to-json.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/to-json.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/uc-first.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/uc-first.js should pass ESLint\n\n');
  });
  QUnit.test('addon/helpers/upper-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/upper-case.js should pass ESLint\n\n');
  });
  QUnit.test('addon/k8s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/k8s/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/linode/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/linode/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/catalog-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/catalog-app.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/catalog-upgrade.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/catalog-upgrade.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/cattle-transitioning-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/cattle-transitioning-resource.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/child-hook.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/child-hook.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/cluster-driver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/cluster-driver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/console.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/console.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/container-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/container-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/container-spark-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/container-spark-stats.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/crud-catalog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/crud-catalog.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/display-image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/display-image.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/endpoint-ports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/endpoint-ports.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/filter-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/filter-state.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/grafana.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/grafana.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/grouped-instances.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/grouped-instances.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/input-answers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/input-answers.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/intl-placeholder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/intl-placeholder.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/lazy-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/lazy-icon.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/manage-labels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/manage-labels.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/metrics.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/metrics.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/modal-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/modal-base.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/new-or-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/new-or-edit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/node-driver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/node-driver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/optionally-namespaced.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/optionally-namespaced.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/preload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/preload.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/promise-to-cb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/promise-to-cb.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/reservation-check.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/reservation-check.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/resource-usage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/resource-usage.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/safe-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/safe-style.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/sortable-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/sortable-base.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/state-counts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/state-counts.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/sticky-table-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/sticky-table-header.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/storage-class-provisioner.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/storage-class-provisioner.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/store-tweaks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/store-tweaks.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/stripped-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/stripped-name.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/subscribe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/subscribe.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/throttled-resize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/throttled-resize.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/tooltip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/tooltip.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/upgrade-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/upgrade-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/upload.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/view-new-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/view-new-edit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/volume-source.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/volume-source.js should pass ESLint\n\n');
  });
  QUnit.test('addon/modal/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/modal/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/oauth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/oauth/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/pipeline-github/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/pipeline-github/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/prefs/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/prefs/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resource-actions/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resource-actions/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/role-template/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/role-template/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/saml/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/saml/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/scope/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/scope/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/session/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/settings/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/settings/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/shibboleth-auth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/shibboleth-auth/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/store-reset/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/store-reset/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/tab-session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tab-session/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/tooltip/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tooltip/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/user-language/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/user-language/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/user-theme/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/user-theme/service.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/add-view-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/add-view-action.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/additional-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/additional-routes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/amazon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/amazon.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/azure-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/azure-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/browser-storage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/browser-storage.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/calculate-position.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/calculate-position.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/constants.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/convert-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/convert-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/debounce.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/debounce.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/download-files.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/download-files.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/errors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/errors.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/evaluate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/evaluate.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/fetch-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/fetch-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/flat-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/flat-map.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/headers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/headers.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/intl/missing-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/intl/missing-message.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/load-script.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/load-script.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/multi-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/multi-stats.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/navigation-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/navigation-tree.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-externalid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-externalid.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-label.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-port.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-port.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-target.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-target.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-unit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-unit.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-uri.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-uri.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/parse-version.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/parse-version.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/pipeline-constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/pipeline-constants.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/pipelineStep.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/pipelineStep.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/platform.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/platform.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/queue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/queue.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/rackspace-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/rackspace-choices.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/search-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/search-text.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/socket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/socket.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/sort.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/sort.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-cluster.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-cluster.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-global.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-global.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/subscribe-project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/subscribe-project.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/text-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/text-width.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/used-percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/used-percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/util.js should pass ESLint\n\n');
  });
});
define("logging/shared/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/access/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/access/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-dns-records/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-dns-records/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-storage-classes/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-storage-classes/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/all-workloads/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/all-workloads/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/amazon/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/amazon/util.js should pass ESLint\n\n');
  });
  QUnit.test('app/azure-ad/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/azure-ad/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/bulk-action-handler/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/bulk-action-handler/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/calculate-position/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/calculate-position/util.js should pass ESLint\n\n');
  });
  QUnit.test('app/capabilities/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/capabilities/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/catalog/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/catalog/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/cluster-templates/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/cluster-templates/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/code-mirror/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/code-mirror/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/accordion-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/accordion-list-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/accordion-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/accordion-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/action-menu-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/action-menu-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/advanced-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/advanced-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/annotations-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/annotations-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/answer-override-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/answer-override-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/api-field/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/api-field/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/apikey-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/apikey-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/authorized-endpoint/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/authorized-endpoint/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/badge-state/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/badge-state/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/banner-message/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/banner-message/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/btn-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/btn-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-index/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-index/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/catalog-persistence-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/catalog-persistence-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-box/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-computed-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-computed-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/check-override-allowed/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/check-override-allowed/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-aliyunkcs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-aliyunkcs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-amazoneks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-amazoneks/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-azureaks/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-azureaks/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-googlegke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-googlegke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-huaweicce/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-huaweicce/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-import/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-import/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-driver/driver-tencenttke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-driver/driver-tencenttke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-options-rke/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-options-rke/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-ribbon-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-ribbon-nav/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-override-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-override-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-question-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-question-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-revision-upgrade-notification/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-revision-upgrade-notification/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-template-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-template-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cluster-templates-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cluster-templates-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/code-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/code-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/confirm-delete/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/confirm-delete/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/container-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/container-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/containers-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/containers-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/copy-inline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copy-inline/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/copy-to-clipboard/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copy-to-clipboard/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cloud-provider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cloud-provider/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster-template-questions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster-template-questions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-node-pools/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-node-pools/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/cru-private-registry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cru-private-registry/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/custom-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/custom-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/empty-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/empty-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/error-sub-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/error-sub-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/field-required/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/field-required/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-auth-cloud-credential/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-auth-cloud-credential/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-certificate-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-certificate-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-count/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-count/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-engine-opts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-engine-opts/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-gke-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-gke-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-global-resource-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-global-resource-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-backends/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-backends/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ingress-rule/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ingress-rule/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-key-value/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-key-value/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-labels-annotations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-labels-annotations/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-match-expressions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-match-expressions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members-catalog-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members-catalog-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members-global-access/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members-global-access/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-members/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-members/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-name-description/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-name-description/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-network-config/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-network-config/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-project-targets/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-project-targets/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-reservation/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-reservation/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-share-member/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-share-member/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ssl-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ssl-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-ssl-termination/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-ssl-termination/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-value-array/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-value-array/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/form-versions/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/form-versions/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/gke-access-scope/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/gke-access-scope/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/graph-area/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/graph-area/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/hook-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hook-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-pod/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-pod/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-aliyunecs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-aliyunecs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-amazonec2/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-amazonec2/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-azure/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-azure/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-digitalocean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-digitalocean/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-exoscale/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-exoscale/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-other/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-other/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-packet/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-packet/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-rackspace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-rackspace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/host-template-vmwarevsphere/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/host-template-vmwarevsphere/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/hover-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hover-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/huawei-user-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/huawei-user-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/identity-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/identity-block/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-answer-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-answer-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-custom-answers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-custom-answers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-identity/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-identity/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-integer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-integer/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-number/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-number/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-or-display/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-or-display/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-paste/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-paste/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-slider/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-slider/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-suggest/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-suggest/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-text-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-text-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-url/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-url/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/input-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/input-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/labels-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/labels-section/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/language-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/language-dropdown/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/link-to-as-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link-to-as-attrs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/link-to-cluster-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link-to-cluster-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/marked-down/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/marked-down/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-action/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-action/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-graph/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/metrics-summary/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/metrics-summary/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-add-custom-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-add-custom-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-confirm-deactivate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-confirm-deactivate/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-confirm-yaml-switch/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-confirm-yaml-switch/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-container-stop/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-container-stop/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-delete-eks-cluster/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-delete-eks-cluster/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-cluster-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-cluster-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-driver/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-driver/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-edit-user/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-edit-user/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-istio-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-istio-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-move-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-move-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-root/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-root/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-shell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-shell/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/modal-yaml/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/modal-yaml/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/multi-container-stats/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/multi-container-stats/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/namespace-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/namespace-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/new-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-ip/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-ip/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-pool-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-pool-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/node-taints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-taints/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/outside-click/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/outside-click/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/page-numbers/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/page-numbers/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/pretty-json/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/pretty-json/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/principal-search/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/principal-search/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/progress-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/progress-bar/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/project-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/project-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/radio-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/radio-button/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/resource-condition-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/resource-condition-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/resource-event-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/resource-event-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/save-cancel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/save-cancel/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/scheduling-toleration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduling-toleration/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-boolean/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-boolean/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-date/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-dns-record/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-dns-record/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-enum/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-enum/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-float/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-float/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-hostname/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-hostname/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-int/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-int/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-istiohost/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-istiohost/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-masked/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-masked/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-multiline/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-multiline/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-pvc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-pvc/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-relative-service/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-relative-service/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-storageclass/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-storageclass/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-string/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-string/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/schema/input-workload/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/schema/input-workload/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/search-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/search-text/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/searchable-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/searchable-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/danger-zone/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/danger-zone/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/host-registration/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/host-registration/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/settings/settings-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/settings/settings-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/share-member-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/share-member-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/shortcut-key/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/shortcut-key/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/sortable-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sortable-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/sortable-thead/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sortable-thead/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-aws-ebs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-aws-ebs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-azure-disk/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-azure-disk/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-azure-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-azure-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-cinder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-cinder/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-gce-pd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-gce-pd/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-generic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-generic/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-glusterfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-glusterfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-longhorn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-longhorn/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-portworx-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-portworx-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-quobyte/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-quobyte/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-rbd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-rbd/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-scaleio/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-scaleio/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-storageos/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-storageos/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/storage-class/provisioner-vsphere-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/storage-class/provisioner-vsphere-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/table-labels/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/table-labels/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/textarea-autogrow/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/textarea-autogrow/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-action-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-action-menu/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-basic/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-basic/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-element/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-element/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-expiring/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-expiring/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-toggle-override/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-toggle-override/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/tooltip-warning/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tooltip-warning/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/top-errors/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/top-errors/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/upgrade-btn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/upgrade-btn/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/used-percent-gauge/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/used-percent-gauge/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/cookies/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/cookies/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/digital-ocean/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/digital-ocean/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/endpoint/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/endpoint/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/features/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/features/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/grafana/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/grafana/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/growl/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/growl/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/array-includes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/array-includes.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-calendar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-calendar.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-from-now.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-from-now.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-recent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-recent.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/date-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/date-str.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/default-str.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/default-str.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/driver-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/driver-name.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-ip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-ip.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-mib.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-mib.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/format-si.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/format-si.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/get-card-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/get-card-class.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/has-override.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/has-override.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/join-array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/join-array.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/link-ssl-domain.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/link-ssl-domain.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/linkify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/linkify.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/lower-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/lower-case.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/maybe-t.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/maybe-t.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/nl-to-br.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/nl-to-br.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/parse-camelcase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/parse-camelcase.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/pretty-cron.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/pretty-cron.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/rbac-allows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/rbac-allows.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/rbac-prevents.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/rbac-prevents.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/run-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/run-time.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/str-replace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/str-replace.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/t.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/t.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/to-json.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/to-json.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/uc-first.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/uc-first.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/upper-case.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/upper-case.js should pass ESLint\n\n');
  });
  QUnit.test('app/host/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/host/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/k8s/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/k8s/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/linode/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/linode/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/cattle-transitioning-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/cattle-transitioning-resource.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/console.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/console.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/container-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/container-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/container-spark-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/container-spark-stats.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/endpoint-ports.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/endpoint-ports.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/filter-state.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/filter-state.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/grafana.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/grafana.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/grouped-instances.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/grouped-instances.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/intl-placeholder.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/intl-placeholder.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/lazy-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/lazy-icon.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/manage-labels.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/manage-labels.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/metrics.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/metrics.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/modal-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/modal-base.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/new-or-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/new-or-edit.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/preload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/preload.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/promise-to-cb.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/promise-to-cb.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/safe-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/safe-style.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/sortable-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/sortable-base.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/state-counts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/state-counts.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/sticky-table-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/sticky-table-header.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/store-tweaks.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/store-tweaks.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/stripped-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/stripped-name.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/subscribe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/subscribe.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/throttled-resize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/throttled-resize.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/tooltip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/tooltip.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/upgrade-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/upgrade-component.js should pass ESLint\n\n');
  });
  QUnit.test('app/mixins/upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/mixins/upload.js should pass ESLint\n\n');
  });
  QUnit.test('app/modal/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/modal/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/oauth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/oauth/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/pipeline-github/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/pipeline-github/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/prefs/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/prefs/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/resource-actions/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/resource-actions/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/role-template/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/role-template/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/saml/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/saml/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/scope/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/scope/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/session/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/settings/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/settings/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/shibboleth-auth/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/shibboleth-auth/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/store-reset/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/store-reset/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/tab-session/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/tab-session/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/tooltip/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/tooltip/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/user-language/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/user-language/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/user-theme/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/user-theme/service.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/add-view-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/add-view-action.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/additional-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/additional-routes.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/azure-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/azure-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/browser-storage.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/browser-storage.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/constants.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/convert-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/convert-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/debounce.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/debounce.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/download-files.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/download-files.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/errors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/errors.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/fetch-yaml.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/fetch-yaml.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/flat-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/flat-map.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/group-compound-layout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/group-compound-layout.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/intl/missing-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/intl/missing-message.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/load-script.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/load-script.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/multi-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/multi-stats.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/navigation-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/navigation-tree.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-externalid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-externalid.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-port.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-port.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-target.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-target.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-unit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-unit.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-uri.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-uri.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/parse-version.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/parse-version.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/pipeline-constants.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/pipeline-constants.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/pipelineStep.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/pipelineStep.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/platform.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/platform.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/queue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/queue.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/rackspace-choices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/rackspace-choices.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/search-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/search-text.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/socket.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/socket.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/sort.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/sort.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/traffic-renderer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/traffic-renderer.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/used-percent-gauge.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/used-percent-gauge.js should pass ESLint\n\n');
  });
  QUnit.test('app/utils/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/util.js should pass ESLint\n\n');
  });
});
define("logging/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "logging/shibboleth-auth/service");
define.alias("shared/store-reset/service", "logging/store-reset/service");
define.alias("shared/tab-session/service", "logging/tab-session/service");
define("logging/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZZXYE0aa",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "logging/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "logging/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "logging/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "logging/transitions/default");
define.alias("liquid-fire/transitions/explode", "logging/transitions/explode");
define.alias("liquid-fire/transitions/fade", "logging/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "logging/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "logging/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "logging/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "logging/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "logging/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "logging/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "logging/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "logging/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "logging/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "logging/transitions/wait");
define.alias("shared/user-language/service", "logging/user-language/service");
define.alias("shared/user-theme/service", "logging/user-theme/service");
define.alias("shared/utils/add-view-action", "logging/utils/add-view-action");
define.alias("shared/utils/additional-routes", "logging/utils/additional-routes");
define.alias("shared/utils/azure-choices", "logging/utils/azure-choices");
define.alias("shared/utils/browser-storage", "logging/utils/browser-storage");
define.alias("shared/utils/constants", "logging/utils/constants");
define.alias("shared/utils/convert-yaml", "logging/utils/convert-yaml");
define.alias("shared/utils/debounce", "logging/utils/debounce");
define.alias("shared/utils/download-files", "logging/utils/download-files");
define.alias("shared/utils/errors", "logging/utils/errors");
define.alias("shared/utils/fetch-yaml", "logging/utils/fetch-yaml");
define("logging/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "logging/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "logging/utils/group-compound-layout");
define("logging/utils/intl/missing-message", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = missingMessage;

  function missingMessage(key, locales) {
    if (key) {
      locales = locales || ['unknown'];

      if (locales[0] !== 'none') {
        console.warn("Translation not found: locale='".concat(locales.join(', '), "', key='").concat(key, "'."));
      }

      return "*%".concat(key, "%*");
    } else {
      return '';
    }
  }
});
define.alias("shared/utils/load-script", "logging/utils/load-script");
define.alias("shared/utils/multi-stats", "logging/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "logging/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "logging/utils/parse-externalid");
define.alias("shared/utils/parse-port", "logging/utils/parse-port");
define.alias("shared/utils/parse-target", "logging/utils/parse-target");
define.alias("shared/utils/parse-unit", "logging/utils/parse-unit");
define.alias("shared/utils/parse-uri", "logging/utils/parse-uri");
define.alias("shared/utils/parse-version", "logging/utils/parse-version");
define.alias("shared/utils/percent-gauge", "logging/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "logging/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "logging/utils/pipelineStep");
define.alias("shared/utils/platform", "logging/utils/platform");
define.alias("shared/utils/queue", "logging/utils/queue");
define.alias("shared/utils/rackspace-choices", "logging/utils/rackspace-choices");
define.alias("shared/utils/search-text", "logging/utils/search-text");
define.alias("shared/utils/socket", "logging/utils/socket");
define.alias("shared/utils/sort", "logging/utils/sort");
define.alias("shared/utils/traffic-renderer", "logging/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "logging/utils/used-percent-gauge");
define.alias("shared/utils/util", "logging/utils/util");//# sourceMappingURL=engine.map
