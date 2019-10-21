define.alias("shared/access/service", "monitoring/access/service");
define.alias("shared/all-dns-records/service", "monitoring/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "monitoring/all-storage-classes/service");
define.alias("shared/all-workloads/service", "monitoring/all-workloads/service");
define.alias("shared/amazon/util", "monitoring/amazon/util");
define.alias("shared/azure-ad/service", "monitoring/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "monitoring/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "monitoring/calculate-position/util");
define.alias("shared/capabilities/service", "monitoring/capabilities/service");
define.alias("shared/catalog/service", "monitoring/catalog/service");
define("monitoring/cldrs/ar", ["exports"], function (_exports) {
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
define("monitoring/cldrs/de", ["exports"], function (_exports) {
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
define("monitoring/cldrs/en", ["exports"], function (_exports) {
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
define("monitoring/cldrs/es", ["exports"], function (_exports) {
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
define("monitoring/cldrs/fa", ["exports"], function (_exports) {
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
define("monitoring/cldrs/fr", ["exports"], function (_exports) {
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
define("monitoring/cldrs/hu", ["exports"], function (_exports) {
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
define("monitoring/cldrs/it", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ja", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ko", ["exports"], function (_exports) {
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
define("monitoring/cldrs/nb", ["exports"], function (_exports) {
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
define("monitoring/cldrs/nl", ["exports"], function (_exports) {
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
define("monitoring/cldrs/none", ["exports"], function (_exports) {
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
define("monitoring/cldrs/pt", ["exports"], function (_exports) {
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
define("monitoring/cldrs/readme", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ru", ["exports"], function (_exports) {
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
define("monitoring/cldrs/sh", ["exports"], function (_exports) {
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
define("monitoring/cldrs/sv", ["exports"], function (_exports) {
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
define("monitoring/cldrs/tr", ["exports"], function (_exports) {
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
define("monitoring/cldrs/uk", ["exports"], function (_exports) {
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
define("monitoring/cldrs/vi", ["exports"], function (_exports) {
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
define("monitoring/cldrs/zh", ["exports"], function (_exports) {
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
define("monitoring/cluster-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    model: function model() {
      var store = Ember.get(this, 'globalStore');
      var cluster = Ember.get(this, 'scope.currentCluster');
      var project = Ember.get(cluster, 'systemProject');

      if (!project || !Ember.get(cluster, 'enableClusterMonitoring')) {
        return {
          apps: []
        };
      }

      return Ember.RSVP.hash({
        apps: store.rawRequest({
          url: "/v3/project/".concat(Ember.get(project, 'id'), "/apps"),
          method: 'GET'
        }).then(function (res) {
          var out = [];
          var apps = Ember.get(res, 'body.data') || [];
          var clusterApp = apps.findBy('name', 'cluster-monitoring');
          var operatorApp = apps.findBy('name', 'monitoring-operator');

          if (clusterApp) {
            out.push(store.createRecord(clusterApp));
          }

          if (operatorApp) {
            out.push(store.createRecord(operatorApp));
          }

          return out;
        })
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.CLUSTER_ROUTE), 'authenticated.cluster.monitoring.cluster-setting');
    })
  });

  _exports.default = _default;
});
define("monitoring/cluster-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aYqdBwFe",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"enable-monitoring\",null,[[\"apps\"],[[23,[\"model\",\"apps\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/cluster-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "monitoring/cluster-templates/service");
define.alias("shared/code-mirror/service", "monitoring/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "monitoring/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "monitoring/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "monitoring/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "monitoring/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "monitoring/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "monitoring/components/advanced-section/component");
define.alias("shared/components/annotations-section/component", "monitoring/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "monitoring/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "monitoring/components/api-field/component");
define.alias("shared/components/apikey-row/component", "monitoring/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "monitoring/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "monitoring/components/badge-state/component");
define.alias("shared/components/banner-message/component", "monitoring/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "monitoring/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "monitoring/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "monitoring/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "monitoring/components/basic-dropdown/trigger");
define.alias("shared/components/btn-toggle/component", "monitoring/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "monitoring/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "monitoring/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "monitoring/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "monitoring/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "monitoring/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "monitoring/components/check-override-allowed/component");
define("monitoring/components/cluster-basic-info/component", ["exports", "monitoring/components/cluster-basic-info/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    cluster: null
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-basic-info/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NgNS/3Zt",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"clustersPage.provider.label\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[1,[23,[\"cluster\",\"displayProvider\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"clustersPage.kubernetesVersion.label\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[1,[23,[\"cluster\",\"version\",\"gitVersion\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"cluster\",\"clusterTemplateId\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"clustersPage.rkeTemplate.label\"],null],false],[0,\":\"],[10],[0,\"\\n      \"],[7,\"span\"],[9],[1,[23,[\"cluster\",\"clusterTemplateDisplayName\"]],false],[0,\"/\"],[1,[23,[\"cluster\",\"clusterTemplateRevisionDisplayName\"]],false],[10],[0,\"\\n      \"],[1,[27,\"cluster-template-revision-upgrade-notification\",null,[[\"cluster\"],[[23,[\"cluster\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.created\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[1,[27,\"date-calendar\",[[23,[\"cluster\",\"created\"]]],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/cluster-basic-info/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard-tabs/component", ["exports", "monitoring/components/cluster-dashboard-tabs/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    grafana: Ember.inject.service(),
    layout: _template.default,
    classNames: 'row',
    largeScale: Ember.computed('scope.currentCluster.nodes.length', function () {
      return Ember.get(this, 'scope.currentCluster.nodes.length') > 10;
    })
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard-tabs/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cbxzI4aK",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[4,\"accordion-list\",null,null,{\"statements\":[[4,\"metrics-summary\",null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"title\"],[[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"scope\",\"currentCluster\",\"grafanaUrl\"]],[27,\"t\",[\"clusterDashboard.sections.cluster\"],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"cluster-metrics\",null,[[\"largeScale\"],[[23,[\"largeScale\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"isRKE\"]]],null,{\"statements\":[[4,\"metrics-summary\",null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"grafana\",\"etcdUrl\"]],\"mt-20\",[27,\"t\",[\"clusterDashboard.sections.etcd\"],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"etcd-metrics\",null,[[\"largeScale\"],[[23,[\"largeScale\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"metrics-summary\",null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"grafana\",\"k8sUrl\"]],\"mt-20\",[27,\"t\",[\"clusterDashboard.sections.k8s\"],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"k8s-metrics\",null,[[\"largeScale\"],[[23,[\"largeScale\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"metrics-summary\",null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"grafana\",\"rancherUrl\"]],\"mt-20 mb-20\",[27,\"t\",[\"clusterDashboard.sections.rancher\"],[[\"appName\"],[[23,[\"settings\",\"appName\"]]]]]]],{\"statements\":[[0,\"    \"],[1,[27,\"rancher-metrics\",null,[[\"largeScale\",\"noDataLabel\"],[[23,[\"largeScale\"]],\"clusterDashboard.noRancherComponents\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"resource-event-list\",null,[[\"resourceType\",\"clusterEvents\",\"expandAll\",\"expandFn\"],[[27,\"t\",[\"generic.cluster\"],null],true,[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/cluster-dashboard-tabs/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard/component", ["exports", "ui/utils/constants", "monitoring/components/cluster-dashboard/template", "shared/mixins/catalog-upgrade"], function (_exports, _constants, _template, _catalogUpgrade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var MONITORING_TEMPLATE = 'system-library-rancher-monitoring';

  var _default = Ember.Component.extend(_catalogUpgrade.default, {
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    grafana: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    router: Ember.inject.service(),
    layout: _template.default,
    nodes: null,
    components: null,
    showClusterTabs: true,
    templateId: MONITORING_TEMPLATE,
    monitoringEnabled: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady'),
    componentStatuses: Ember.computed.alias('scope.currentCluster.componentStatuses'),
    actions: {
      rotate: function rotate() {
        this.cluster.send('rotateCertificates');
      },
      enableMonitoring: function enableMonitoring() {
        Ember.get(this, 'router').transitionTo('authenticated.cluster.monitoring.cluster-setting');
      }
    },
    clusterDidChange: Ember.observer('scope.currentCluster.id', function () {
      var _this = this;

      Ember.set(this, 'showClusterTabs', false);
      Ember.run.next(function () {
        if (_this.isDestroyed || _this.isDestroying) {
          return;
        }

        Ember.set(_this, 'showClusterTabs', true);
      });
    }),
    setComponents: Ember.on('init', Ember.observer('componentStatuses.@each.conditions', 'nodes.@each.{state}', function () {
      Ember.setProperties(this, {
        etcdHealthy: this.isHealthy('etcd'),
        controllerHealthy: this.isHealthy('controller-manager'),
        schedulerHealthy: this.isHealthy('scheduler'),
        nodesHealthy: Ember.get(this, 'inactiveNodes.length') === 0
      });
    })),
    showDashboard: Ember.computed('scope.currentCluster.isReady', 'nodes.[]', function () {
      return Ember.get(this, 'nodes').length && Ember.get(this, 'scope.currentCluster.isReady');
    }),
    inactiveNodes: Ember.computed('nodes.@each.state', function () {
      return Ember.get(this, 'nodes').filter(function (n) {
        return _constants.default.ACTIVEISH_STATES.indexOf(Ember.get(n, 'state')) === -1;
      });
    }),
    unhealthyComponents: Ember.computed('componentStatuses.@each.conditions', function () {
      return (Ember.get(this, 'componentStatuses') || []).filter(function (s) {
        return !s.conditions.any(function (c) {
          return c.status === 'True';
        });
      });
    }),
    hideManagerAndSchedulerStatus: Ember.computed('cluster.provider', function () {
      var provider = Ember.get(this, 'cluster.provider');
      return _constants.default.GRAY_OUT_SCHEDULER_STATUS_PROVIDERS.indexOf(provider) > -1;
    }),
    isHealthy: function isHealthy(field) {
      var matching = (Ember.get(this, 'componentStatuses') || []).filter(function (s) {
        return s.name.startsWith(field);
      }); // If there's no matching component status, it's "healthy"

      if (!matching.length) {
        return true;
      }

      return matching.any(function (s) {
        return s.conditions.any(function (c) {
          return c.status === 'True';
        });
      });
    }
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tEfGPDSC",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"warning\"],\"statements\":[[4,\"if\",[[23,[\"cluster\",\"certsExpiring\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"tooltipExpire.label\"],null],false],[0,\" \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[1,[27,\"t\",[\"tooltipExpire.link\"],null],false],[3,\"action\",[[22,0,[]],\"rotate\"]],[10],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[23,[\"showDashboard\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"cluster-basic-info\",null,[[\"cluster\"],[[23,[\"cluster\"]]]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"scope\",\"currentCluster\",\"isMonitoringReady\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"monitoringEnabled\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row mt-0 mb-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"pull-right text-small text-error\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterDashboard.monitoringNotReady\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row mt-0 mb-0\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"pull-right text-small\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent p-0\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterDashboard.enableMonitoring\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"enableMonitoring\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"monitoringEnabled\"]],[27,\"eq\",[[23,[\"toUpgrade\",\"firstObject\",\"name\"]],\"cluster-monitoring\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row mt-0 mb-0\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pull-right text-small\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn bg-warning pt-0 pb-0 pl-5 pr-5\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterDashboard.upgradeAvailable\"],[[\"version\"],[[23,[\"latestVersion\"]]]]],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"enableMonitoring\"]],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n  \"],[1,[27,\"nodes-live\",null,[[\"nodes\"],[[23,[\"nodes\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row mt-0\"],[9],[0,\"\\n    \"],[1,[27,\"k8s-component-status\",null,[[\"label\",\"showUrl\",\"healthy\",\"url\"],[\"clusterDashboard.etcd\",[23,[\"scope\",\"currentCluster\",\"isRKE\"]],[23,[\"etcdHealthy\"]],[23,[\"grafana\",\"etcdUrl\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"hideManagerAndSchedulerStatus\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-3 mt-0\"],[9],[0,\"\\n\"],[4,\"banner-message\",null,[[\"icon\",\"color\"],[\"icon-alert\",\"bg-disabled mt-0\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"text-left\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterDashboard.controllerManager\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"k8s-component-status\",null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.controllerManager\",[23,[\"controllerHealthy\"]],[23,[\"grafana\",\"controllerUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"hideManagerAndSchedulerStatus\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-3 mt-0\"],[9],[0,\"\\n\"],[4,\"banner-message\",null,[[\"icon\",\"color\"],[\"icon-alert\",\"bg-disabled mt-0\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"text-left\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterDashboard.scheduler\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"k8s-component-status\",null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.scheduler\",[23,[\"schedulerHealthy\"]],[23,[\"grafana\",\"schedulerUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[1,[27,\"k8s-component-status\",null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.node\",[23,[\"nodesHealthy\"]],[23,[\"grafana\",\"nodesUrl\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"hideManagerAndSchedulerStatus\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"cluster\",\"displayWarnings\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"icon\",\"color\"],[\"icon-alert\",\"text-left bg-error mt-30\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[1,[22,3,[]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"showClusterTabs\"]],[23,[\"scope\",\"currentCluster\",\"isMonitoringReady\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"cluster-dashboard-tabs\",null,[[\"dashboards\"],[[23,[\"dashboards\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"accordion-list\",null,[[\"showExpandAll\"],[false]],{\"statements\":[[0,\"      \"],[1,[27,\"resource-event-list\",null,[[\"resourceType\",\"clusterEvents\",\"expandAll\",\"expandFn\"],[[27,\"t\",[\"generic.cluster\"],null],true,[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"text-center text-muted\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"clusterDashboard.clusterNotReady\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/cluster-dashboard/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "monitoring/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "monitoring/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "monitoring/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "monitoring/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "monitoring/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "monitoring/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "monitoring/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "monitoring/components/cluster-driver/driver-tencenttke/component");
define("monitoring/components/cluster-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/cluster-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'cluster'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NsgHJ43L",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"mt-15\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"state\"],[[27,\"action\",[[22,0,[]],\"query\"],null],[23,[\"state\"]]]]],false],[0,\"\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/cluster-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/cluster-options-rke/component", "monitoring/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "monitoring/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "monitoring/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "monitoring/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "monitoring/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "monitoring/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "monitoring/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "monitoring/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "monitoring/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "monitoring/components/container-shell/component");
define.alias("shared/components/containers-header/component", "monitoring/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "monitoring/components/copy-button");
define.alias("shared/components/copy-inline/component", "monitoring/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "monitoring/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "monitoring/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "monitoring/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "monitoring/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "monitoring/components/cru-cluster/component");
define.alias("shared/components/cru-node-pools/component", "monitoring/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "monitoring/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "monitoring/components/custom-catalog/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "monitoring/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "monitoring/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "monitoring/components/empty-table/component");
define("monitoring/components/enable-monitoring/component", ["exports", "shared/utils/util", "shared/utils/parse-unit", "shared/mixins/reservation-check", "shared/mixins/catalog-upgrade", "monitoring/components/enable-monitoring/template"], function (_exports, _util, _parseUnit, _reservationCheck, _catalogUpgrade, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var EXPOSED_OPTIONS = ['exporter-node.enabled', 'exporter-node.ports.metrics.port', 'exporter-kubelets.https', 'prometheus.retention', 'grafana.persistence.enabled', 'prometheus.persistence.enabled', 'prometheus.persistence.storageClass', 'grafana.persistence.storageClass', 'grafana.persistence.size', 'prometheus.persistence.size', 'prometheus.resources.core.requests.cpu', 'exporter-node.resources.limits.cpu', 'exporter-node.resources.limits.memory', 'prometheus.resources.core.limits.cpu', 'prometheus.resources.core.requests.memory', 'prometheus.resources.core.limits.memory', 'operator.resources.limits.memory'];
  var NODE_EXPORTER_CPU = 100;
  var NODE_EXPORTER_MEMORY = 30;
  var CLUSTER_CPU = 900;
  var CLUSTER_MEMORY = 970;
  var MONITORING_TEMPLATE = 'system-library-rancher-monitoring';
  var CLUSTER_HIDDEN_KEYS = {
    'operator-init.enabled': 'true'
  };
  var PROMETHEUS_TOLERATION = 'prometheus.tolerations';
  var SCHEDULABLE_COMPONENTS = ['prometheus', 'grafana', 'operator', 'exporter-kube-state'];

  var _default = Ember.Component.extend(_reservationCheck.default, _catalogUpgrade.default, {
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    layout: _template.default,
    templateId: MONITORING_TEMPLATE,
    answers: null,
    customAnswers: null,
    level: 'cluster',
    confirmDisable: false,
    justDeployed: false,
    enablePrometheusPersistence: false,
    enableGrafanaPersistence: false,
    enableNodeExporter: true,
    prometheusPersistenceSize: '50Gi',
    grafanaPersistenceSize: '10Gi',
    requestsCpu: '750',
    limitsCpu: '1000',
    nodeExporterLimitsCpu: '200',
    nodeExporterLimitsMemory: '200',
    operatorLimitsMemory: '500',
    requestsMemory: '750',
    limitsMemory: '1000',
    prometheusStorageClass: null,
    grafanaStorageClass: null,
    nodeSelectors: null,
    retention: 12,
    port: 9796,
    projectLevelMinCpu: 500,
    projectLevelMinMemory: 500,
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    istioEnabled: Ember.computed.alias('cluster.istioEnabled'),
    actions: {
      promptDisable: function promptDisable() {
        if (Ember.get(this, 'istioEnabled') && Ember.get(this, 'level') === 'cluster') {
          return;
        }

        Ember.set(this, 'confirmDisable', true);
        Ember.run.later(this, function () {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.set(this, 'confirmDisable', false);
        }, 10000);
      },
      enable: function enable(cb) {
        var _this = this;

        var resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');
        var answers = Ember.get(this, 'level') === 'cluster' ? _objectSpread({}, CLUSTER_HIDDEN_KEYS) : {};

        if (Ember.get(this, 'level') === 'cluster') {
          answers['exporter-node.enabled'] = "".concat(Ember.get(this, 'enableNodeExporter'));
          answers['exporter-node.ports.metrics.port'] = "".concat(Ember.get(this, 'port'));
          answers['exporter-kubelets.https'] = "".concat(!(Ember.get(this, 'scope.currentCluster.isGKE') || Ember.get(this, 'scope.currentCluster.isAKS')));
          answers['exporter-node.resources.limits.cpu'] = "".concat(Ember.get(this, 'nodeExporterLimitsCpu'), "m");
          answers['exporter-node.resources.limits.memory'] = "".concat(Ember.get(this, 'nodeExporterLimitsMemory'), "Mi");
          answers['operator.resources.limits.memory'] = "".concat(Ember.get(this, 'operatorLimitsMemory'), "Mi");
        }

        answers['prometheus.retention'] = "".concat(Ember.get(this, 'retention'), "h");
        answers['grafana.persistence.enabled'] = "".concat(Ember.get(this, 'enableGrafanaPersistence'));
        answers['prometheus.persistence.enabled'] = "".concat(Ember.get(this, 'enablePrometheusPersistence'));
        answers['prometheus.persistence.storageClass'] = "".concat(Ember.get(this, 'prometheusStorageClass') === null ? 'default' : Ember.get(this, 'prometheusStorageClass'));
        answers['grafana.persistence.storageClass'] = "".concat(Ember.get(this, 'grafanaStorageClass') === null ? 'default' : Ember.get(this, 'grafanaStorageClass'));
        answers['grafana.persistence.size'] = "".concat(Ember.get(this, 'grafanaPersistenceSize'));
        answers['prometheus.persistence.size'] = "".concat(Ember.get(this, 'prometheusPersistenceSize'));
        answers['prometheus.resources.core.requests.cpu'] = "".concat(Ember.get(this, 'requestsCpu'), "m");
        answers['prometheus.resources.core.limits.cpu'] = "".concat(Ember.get(this, 'limitsCpu'), "m");
        answers['prometheus.resources.core.requests.memory'] = "".concat(Ember.get(this, 'requestsMemory'), "Mi");
        answers['prometheus.resources.core.limits.memory'] = "".concat(Ember.get(this, 'limitsMemory'), "Mi");

        if (!Ember.get(this, 'enabled') || Ember.get(this, 'useReleaseName')) {
          answers['prometheus.persistent.useReleaseName'] = 'true';
        }

        Object.keys(answers).filter(function (key) {
          return SCHEDULABLE_COMPONENTS.find(function (c) {
            return key.startsWith("".concat(c, ".nodeSelectors["));
          });
        }).forEach(function (key) {
          delete answers[key];
        });
        (Ember.get(this, 'nodeSelectors') || []).forEach(function (selector, index) {
          var s = Ember.get(selector, 'key');
          var v = Ember.get(selector, 'value');

          if (v && v.startsWith('"') && v.endsWith('"')) {
            s += "=\"".concat(Ember.get(selector, 'value'), "\"");
          } else if (v) {
            s += "=\"".concat(Ember.get(selector, 'value'), "\"");
          }

          SCHEDULABLE_COMPONENTS.forEach(function (c) {
            answers["".concat(c, ".nodeSelectors[").concat(index, "]")] = s;
          });
        });
        Object.keys(answers).filter(function (key) {
          return SCHEDULABLE_COMPONENTS.find(function (c) {
            return key.startsWith("".concat(c, ".tolerations["));
          });
        }).forEach(function (key) {
          delete answers[key];
        });
        SCHEDULABLE_COMPONENTS.map(function (component) {
          (Ember.get(_this, "prometheusTolerations") || []).map(function (t, index) {
            Object.keys(t).map(function (key) {
              if (t[key]) {
                answers["".concat(component, ".tolerations[").concat(index, "].").concat(key)] = t[key].toString();
              }
            });
          });
        });
        var action = Ember.get(this, 'enabled') ? 'editMonitoring' : 'enableMonitoring';
        var customAnswers = Ember.get(this, 'customAnswers') || {};
        Object.keys(customAnswers).forEach(function (key) {
          answers[key] = customAnswers[key];
        });
        var params = {
          answers: answers
        };

        if (!Ember.get(this, 'enabled') && Ember.get(this, 'templateVersion')) {
          params['version'] = Ember.get(this, 'templateVersion');
        }

        resource.doAction(action, params).then(function () {
          if (_this.isDestroyed || _this.isDestroying) {
            return;
          }

          Ember.set(_this, 'justDeployed', true);

          if (action === 'editMonitoring') {
            _this.send('upgrade');
          }

          cb(true);

          _this.fetchSettings();
        }).catch(function () {
          cb(false);
        });
      },
      disable: function disable() {
        var _this2 = this;

        var resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');
        resource.doAction('disableMonitoring').then(function () {
          if (_this2.isDestroyed || _this2.isDestroying) {
            return;
          }

          Ember.setProperties(_this2, {
            app: null,
            answers: null,
            customAnswers: null
          });
        });
      }
    },
    enabled: Ember.computed('cluster.enableClusterMonitoring', 'project.enableProjectMonitoring', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.enableClusterMonitoring') : Ember.get(this, 'project.enableProjectMonitoring');
    }),
    canDisableMonitor: Ember.computed('cluster.canDisableMonitor', 'project.canDisableMonitor', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.canDisableMonitor') : Ember.get(this, 'project.canDisableMonitor');
    }),
    canSaveMonitor: Ember.computed('cluster.canSaveMonitor', 'project.canSaveMonitor', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.canSaveMonitor') : Ember.get(this, 'project.canSaveMonitor');
    }),
    clusterLevelMinCpu: Ember.computed('cluster.enableClusterMonitoring', 'project.enableProjectMonitoring', 'level', function () {
      var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
      return CLUSTER_CPU + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_CPU;
    }),
    clusterLevelMinMemory: Ember.computed('cluster.enableClusterMonitoring', 'project.enableProjectMonitoring', 'level', function () {
      var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
      return CLUSTER_MEMORY + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_MEMORY;
    }),
    saveDisabled: Ember.computed('canSaveMonitor', 'insufficientPrometheusMemory', 'insufficientPrometheusCpu', 'insufficient', 'enabled', function () {
      return !Ember.get(this, 'canSaveMonitor') || Ember.get(this, 'insufficient') || Ember.get(this, 'insufficientPrometheusCpu') || Ember.get(this, 'insufficientPrometheusMemory');
    }),
    insufficientPrometheusCpu: Ember.computed('schedulableNodes.@each.{allocatable,requested}', 'requestsCpu', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];

      if (Ember.get(allNodes, 'length') === 0) {
        return false;
      }

      var maxLeftCpu = 0;
      Ember.get(this, 'schedulableNodes').forEach(function (node) {
        var left = (0, _util.convertToMillis)(Ember.get(node, 'allocatable.cpu')) - (0, _util.convertToMillis)(Ember.get(node, 'requested.cpu') || '0');

        if (left > maxLeftCpu) {
          maxLeftCpu = left;
        }
      });
      return !Ember.get(this, 'enabled') && maxLeftCpu <= Ember.get(this, 'prometheusRequestCpu');
    }),
    prometheusRequestCpu: Ember.computed('requestsCpu', function () {
      return parseInt(Ember.get(this, 'requestsCpu'), 10) + NODE_EXPORTER_CPU + 200;
    }),
    prometheusRequestMemory: Ember.computed('requestsMemory', function () {
      return parseInt(Ember.get(this, 'requestsMemory'), 10) + NODE_EXPORTER_MEMORY + 200;
    }),
    insufficientPrometheusMemory: Ember.computed('schedulableNodes.@each.{allocatable,requested}', 'requestsMemory', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];

      if (Ember.get(allNodes, 'length') === 0) {
        return false;
      }

      var maxLeftMemory = 0;
      Ember.get(this, 'schedulableNodes').forEach(function (node) {
        var left = (0, _parseUnit.parseSi)(Ember.get(node, 'allocatable.memory'), 1024) / 1048576 - (0, _parseUnit.parseSi)(Ember.get(node, 'requested.memory') || '0', 1024) / 1048576;

        if (left > maxLeftMemory) {
          maxLeftMemory = left;
        }
      });
      return !Ember.get(this, 'enabled') && maxLeftMemory <= Ember.get(this, 'prometheusRequestMemory');
    }),
    schedulableNodes: Ember.computed('nodeSelectors', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      var _this3 = this;

      var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      var out = allNodes.filterBy('isUnschedulable', false).filterBy('osInfo', 'linux').filter(function (node) {
        return (Ember.get(_this3, 'nodeSelectors') || []).every(function (selector) {
          var labelValue = (Ember.get(node, 'labels') || {})[Ember.get(selector, 'key')];

          if (Ember.get(selector, 'value') === '') {
            return labelValue !== undefined;
          } else {
            return Ember.get(selector, 'value') === labelValue;
          }
        });
      });
      return out;
    }),
    initSettings: Ember.on('init', Ember.observer('scope.currentProject.id', 'scope.currentCluster.id', function () {
      if (Ember.get(this, 'enabled')) {
        this.fetchSettings();
      }
    })),
    fetchSettings: function fetchSettings() {
      var _this4 = this;

      var resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');

      if (!resource) {
        return;
      }

      Ember.set(this, 'loading', true);
      resource.waitForAction('viewMonitoring').then(function () {
        if (_this4.isDestroyed || _this4.isDestroying) {
          return;
        }

        resource.doAction('viewMonitoring').then(function (res) {
          if (_this4.isDestroyed || _this4.isDestroying) {
            return;
          }

          var body = Ember.get(res, 'answers');
          var answers = {};
          var customAnswers = {};
          Object.keys(body || {}).forEach(function (key) {
            if (EXPOSED_OPTIONS.indexOf(key) > -1 || SCHEDULABLE_COMPONENTS.find(function (c) {
              return key.startsWith("".concat(c, ".nodeSelectors["));
            }) || SCHEDULABLE_COMPONENTS.find(function (c) {
              return key.startsWith("".concat(c, ".tolerations["));
            })) {
              answers[key] = body[key];
            } else if (!Object.keys(CLUSTER_HIDDEN_KEYS).includes(key)) {
              customAnswers[key] = body[key];
            }
          });
          Ember.set(_this4, 'answers', answers);
          Ember.set(_this4, 'customAnswers', customAnswers);

          _this4.updateConfig(answers);

          Ember.set(_this4, 'loading', false);
        }).catch(function () {
          Ember.set(_this4, 'loading', false);
        });
      });
    },
    updateConfig: function updateConfig(answers) {
      if (answers['prometheus.persistent.useReleaseName']) {
        Ember.set(this, 'useReleaseName', answers['prometheus.persistent.useReleaseName']);
      } else {
        Ember.set(this, 'useReleaseName', null);
      }

      if (answers['prometheus.resources.core.requests.cpu']) {
        var requestsCpu = (0, _util.convertToMillis)(answers['prometheus.resources.core.requests.cpu']);
        Ember.setProperties(this, {
          requestsCpu: requestsCpu,
          preRequestsCpu: requestsCpu
        });
      }

      if (answers['prometheus.resources.core.limits.cpu']) {
        Ember.set(this, 'limitsCpu', (0, _util.convertToMillis)(answers['prometheus.resources.core.limits.cpu']));
      }

      if (answers['exporter-node.resources.limits.cpu']) {
        Ember.set(this, 'nodeExporterLimitsCpu', (0, _util.convertToMillis)(answers['exporter-node.resources.limits.cpu']));
      }

      if (answers['prometheus.resources.core.requests.memory']) {
        var requestsMemory = (0, _parseUnit.parseSi)(answers['prometheus.resources.core.requests.memory'], 1024) / 1048576;
        Ember.setProperties(this, {
          requestsMemory: requestsMemory,
          preRequestsMemory: requestsMemory
        });
      }

      if (answers['prometheus.resources.core.limits.memory']) {
        Ember.set(this, 'limitsMemory', (0, _parseUnit.parseSi)(answers['prometheus.resources.core.limits.memory'], 1024) / 1048576);
      }

      if (answers['exporter-node.resources.limits.memory']) {
        Ember.set(this, 'nodeExporterLimitsMemory', (0, _parseUnit.parseSi)(answers['exporter-node.resources.limits.memory'], 1024) / 1048576);
      } else {
        Ember.set(this, 'nodeExporterLimitsMemory', '50');
      }

      if (answers['operator.resources.limits.memory']) {
        Ember.set(this, 'operatorLimitsMemory', (0, _parseUnit.parseSi)(answers['operator.resources.limits.memory'], 1024) / 1048576);
      } else {
        Ember.set(this, 'operatorLimitsMemory', '100');
      }

      if (answers['prometheus.retention']) {
        Ember.set(this, 'retention', answers['prometheus.retention'].substr(0, answers['prometheus.retention'].length - 1));
      }

      if (answers['grafana.persistence.enabled']) {
        Ember.set(this, 'enableGrafanaPersistence', answers['grafana.persistence.enabled'] === 'true');
      }

      if (answers['prometheus.persistence.enabled']) {
        Ember.set(this, 'enablePrometheusPersistence', answers['prometheus.persistence.enabled'] === 'true');
      }

      if (answers['prometheus.persistence.storageClass']) {
        Ember.set(this, 'prometheusStorageClass', answers['prometheus.persistence.storageClass'] === 'default' ? null : answers['prometheus.persistence.storageClass']);
      }

      if (answers['grafana.persistence.storageClass']) {
        Ember.set(this, 'grafanaStorageClass', answers['grafana.persistence.storageClass'] === 'default' ? null : answers['grafana.persistence.storageClass']);
      }

      if (answers['grafana.persistence.size']) {
        Ember.set(this, 'grafanaPersistenceSize', answers['grafana.persistence.size']);
      }

      if (answers['prometheus.persistence.size']) {
        Ember.set(this, 'prometheusPersistenceSize', answers['prometheus.persistence.size']);
      }

      if (Ember.get(this, 'level') === 'cluster') {
        if (answers['exporter-node.enabled']) {
          Ember.set(this, 'enableNodeExporter', answers['exporter-node.enabled'] === 'true');
        }

        if (answers['exporter-node.ports.metrics.port']) {
          Ember.set(this, 'port', answers['exporter-node.ports.metrics.port']);
        }
      }

      var nodeSelectorsStr = '';
      Object.keys(answers).filter(function (key) {
        return key.startsWith('prometheus.nodeSelectors[');
      }).forEach(function (key) {
        var value = answers[key];

        if (value) {
          var index = value.indexOf('=');

          if (index > -1) {
            var keyStr = value.slice(index + 1);

            if (keyStr && keyStr.startsWith('"') && keyStr.endsWith('"')) {
              keyStr = keyStr.slice(1, keyStr.length - 1);
            }

            value = "".concat(value.slice(0, index), "=").concat(keyStr);
          }
        }

        nodeSelectorsStr += "".concat(value, ",");
      });
      Ember.set(this, 'nodeSelectorsStr', nodeSelectorsStr);
      var prometheusTolerations = [];
      var prometheusTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(PROMETHEUS_TOLERATION);
      });
      var prometheusTolerationIndexs = prometheusTolerationKeys.map(function (k) {
        return k.replace("".concat(PROMETHEUS_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      prometheusTolerationIndexs.map(function (idx) {
        prometheusTolerations.pushObject({
          key: answers["".concat(PROMETHEUS_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(PROMETHEUS_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(PROMETHEUS_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(PROMETHEUS_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(PROMETHEUS_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      Ember.set(this, 'prometheusTolerations', prometheusTolerations);
    }
  });

  _exports.default = _default;
});
define("monitoring/components/enable-monitoring/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4qruI60E",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"canSaveMonitor\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[[27,\"concat\",[\"monitoringPage.\",[23,[\"level\"]],\".title\"],null]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"settings\",\"isRancher\"]]],null,{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"monitoringPage.resourceLimitsHelp\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"scope\",\"currentProject\",\"enableProjectMonitoring\"]],[27,\"not\",[[23,[\"scope\",\"currentCluster\",\"enableClusterMonitoring\"]]],null]],null]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"monitoringPage.clusterNotEnabled\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"banner-message\",null,[[\"color\"],[\"bg-info\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"enabled\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[[27,\"concat\",[\"monitoringPage.toUpdate.\",[23,[\"level\"]]],null]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[[27,\"concat\",[\"monitoringPage.\",[23,[\"level\"]],\".disabled\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.version\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"latestVersion\"]],[23,[\"templateVersion\"]],[27,\"not-eq\",[[23,[\"latestVersion\"]],[23,[\"templateVersion\"]]],null]],null]],null,{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"bg-warning pt-0 pb-0 pl-5 pr-5\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"monitoringPage.upgradeAvailable\"],[[\"version\"],[[23,[\"latestVersion\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[1,[27,\"new-select\",null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[23,[\"availableVersions\"]],[23,[\"templateVersion\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"hr\"],[11,\"class\",\"mt-15 mb-15\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.retention.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\"],[0,[23,[\"retention\"]]]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[1,[27,\"t\",[\"generic.hours\"],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"level\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.nodeexporter.enable\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-boolean\",null,[[\"value\"],[[23,[\"enableNodeExporter\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.enablePersistence.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"schema/input-boolean\",null,[[\"value\"],[[23,[\"enablePrometheusPersistence\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.grafana.enablePersistence.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"schema/input-boolean\",null,[[\"value\"],[[23,[\"enableGrafanaPersistence\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"enablePrometheusPersistence\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.size.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-string\",null,[[\"value\",\"placeholder\"],[[23,[\"prometheusPersistenceSize\"]],[27,\"t\",[\"monitoringPage.config.prometheus.size.placeholder\"],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.storageClass.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-storageclass\",null,[[\"value\"],[[23,[\"prometheusStorageClass\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"enableGrafanaPersistence\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.grafana.size.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-string\",null,[[\"value\",\"placeholder\"],[[23,[\"grafanaPersistenceSize\"]],[27,\"t\",[\"monitoringPage.config.grafana.size.placeholder\"],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.grafana.storageClass.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-storageclass\",null,[[\"value\"],[[23,[\"grafanaStorageClass\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.cpuLimit.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[23,[\"limitsCpu\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.prometheus.cpuLimit.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.cpuLimit.unit\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.cpuRequest.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[23,[\"requestsCpu\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.prometheus.cpuRequest.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.cpuRequest.unit\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.memoryLimit.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"limitsMemory\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.prometheus.memoryLimit.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.config.prometheus.memoryRequest.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"requestsMemory\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.prometheus.memoryRequest.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"level\"]],\"cluster\"],null],[23,[\"enableNodeExporter\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.nodeexporter.cpuLimit.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[23,[\"nodeExporterLimitsCpu\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.nodeexporter.cpuLimit.placeholder\"],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"monitoringPage.config.nodeexporter.cpuLimit.unit\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.nodeexporter.memoryLimit.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"nodeExporterLimitsMemory\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.nodeexporter.memoryLimit.placeholder\"],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"level\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"enableNodeExporter\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"monitoringPage.config.nodeexporter.label\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"value\"],[1,65535,[23,[\"port\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.config.operator.memoryLimit.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"operatorLimitsMemory\"]],\"form-control\",[27,\"t\",[\"monitoringPage.config.operator.memoryLimit.placeholder\"],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.nodeSelector.helpText\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"form-key-value\",null,[[\"changedArray\",\"initialStr\",\"allowEmptyValue\",\"addActionLabel\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"nodeSelectors\"]]],null]],null],[23,[\"nodeSelectorsStr\"]],true,\"monitoringPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[1,[27,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[23,[\"prometheusTolerations\"]],[27,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Prometheus\"]]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"form-key-value\",null,[[\"initialMap\",\"changed\",\"allowEmptyValue\",\"addInitialEmptyRow\",\"editing\",\"header\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[[23,[\"customAnswers\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"customAnswers\"]]],null]],null],true,true,true,[27,\"t\",[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"newContainer.environment.valuePlaceholder\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[23,[\"insufficientPrometheusMemory\"]],[23,[\"insufficientPrometheusCpu\"]],[23,[\"insufficient\"]]],null]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"insufficientMemory\"]],[23,[\"insufficientCpu\"]]],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.total.all\"],[[\"cpu\",\"memory\"],[[23,[\"minCpu\"]],[23,[\"minMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"insufficientMemory\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.total.memory\"],[[\"memory\"],[[23,[\"minMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"insufficientCpu\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.total.cpu\"],[[\"cpu\"],[[23,[\"minCpu\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"insufficientPrometheusCpu\"]],[23,[\"insufficientPrometheusMemory\"]],[23,[\"nodeSelectors\",\"length\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.selectors.all\"],[[\"cpu\",\"memory\"],[[23,[\"prometheusRequestCpu\"]],[23,[\"prometheusRequestMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"insufficientPrometheusCpu\"]],[23,[\"insufficientPrometheusMemory\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.prometheus.all\"],[[\"cpu\",\"memory\"],[[23,[\"prometheusRequestCpu\"]],[23,[\"prometheusRequestMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"insufficientPrometheusCpu\"]],[23,[\"nodeSelectors\",\"length\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.selectors.cpu\"],[[\"cpu\"],[[23,[\"prometheusRequestCpu\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"insufficientPrometheusCpu\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.prometheus.cpu\"],[[\"cpu\"],[[23,[\"prometheusRequestCpu\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"insufficientPrometheusMemory\"]],[23,[\"nodeSelectors\",\"length\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.selectors.memory\"],[[\"memory\"],[[23,[\"prometheusRequestMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"insufficientPrometheusMemory\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"monitoringPage.insufficientSize.prometheus.memory\"],[[\"memory\"],[[23,[\"prometheusRequestMemory\"]]]]],false],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n\"],[4,\"save-cancel\",null,[[\"saveDisabled\",\"cancelDisabled\",\"editing\",\"createLabel\",\"save\"],[[23,[\"saveDisabled\"]],true,[23,[\"enabled\"]],\"monitoringPage.enableActionLabel\",\"enable\"]],{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"canDisableMonitor\"]]],null]],null,{\"statements\":[[4,\"if\",[[23,[\"confirmDisable\"]]],null,{\"statements\":[[0,\"          \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-alert\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"monitoringPage.confirmDisable\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"disable\"]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"istioEnabled\"]],[27,\"eq\",[[23,[\"level\"]],\"cluster\"],null]],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"inlineBlock\",\"placement\"],[\"tooltip-basic\",[27,\"t\",[\"monitoringPage.errors.disableIstioFirst\"],null],\"tooltip-static\",\"tooltip-base\",true,\"top\"]],{\"statements\":[[0,\"              \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"monitoringPage.disable\"],null],false],[0,\"\\n              \"],[3,\"action\",[[22,0,[]],\"promptDisable\"]],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"monitoringPage.disable\"],null],false],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"promptDisable\"]],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"level\"]],\"project\"],null],[23,[\"scope\",\"currentProject\",\"isSystemProject\"]]],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[27,\"t\",[\"monitoringPage.systemProject\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[27,\"t\",[\"monitoringPage.noPermission\"],[[\"level\"],[[23,[\"level\"]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/enable-monitoring/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/error-sub-row/component", "monitoring/components/error-sub-row/component");
define("monitoring/components/etcd-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/etcd-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'etcd'
    },
    singleStatsDidChange: Ember.observer('single.[]', function () {
      var leaderChange = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-leader-change');

      if (leaderChange) {
        Ember.set(this, 'leaderChange', Ember.get(leaderChange, 'series.firstObject.points.firstObject.firstObject'));
      }

      var hasLeader = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-server-leader-sum');

      if (hasLeader) {
        Ember.set(this, 'hasLeader', Ember.get(hasLeader, 'series.firstObject.points.firstObject.firstObject') === 1);
      }

      var failedProposals = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-server-failed-proposal');

      if (failedProposals) {
        Ember.set(this, 'failedProposals', Ember.get(failedProposals, 'series.firstObject.points.firstObject.firstObject'));
      }
    })
  });

  _exports.default = _default;
});
define("monitoring/components/etcd-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "h9Bxv20o",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"state\"],[[27,\"action\",[[22,0,[]],\"query\"],null],[23,[\"state\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"single\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-12 pl-20\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"etcd.hasLeader.label\"],null],false],[0,\":\\n            \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"hasLeader\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.yes\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.no\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"etcd.leaderChange.label\"],null],false],[0,\":\\n            \"],[10],[0,\"\\n            \"],[1,[21,\"leaderChange\"],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"etcd.failedProposals.label\"],null],false],[0,\":\\n            \"],[10],[0,\"\\n            \"],[1,[21,\"failedProposals\"],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/etcd-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/field-required/component", "monitoring/components/field-required/component");
define.alias("shared/components/form-auth-cloud-credential/component", "monitoring/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "monitoring/components/form-certificate-row/component");
define.alias("shared/components/form-count/component", "monitoring/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "monitoring/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "monitoring/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "monitoring/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "monitoring/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "monitoring/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "monitoring/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "monitoring/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "monitoring/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "monitoring/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "monitoring/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "monitoring/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "monitoring/components/form-members/component");
define.alias("shared/components/form-name-description/component", "monitoring/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "monitoring/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "monitoring/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "monitoring/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "monitoring/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "monitoring/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "monitoring/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "monitoring/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "monitoring/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "monitoring/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "monitoring/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "monitoring/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "monitoring/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "monitoring/components/graph-area/component");
define.alias("shared/components/hook-row/component", "monitoring/components/hook-row/component");
define.alias("shared/components/host-pod/component", "monitoring/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "monitoring/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "monitoring/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "monitoring/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "monitoring/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "monitoring/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "monitoring/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "monitoring/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "monitoring/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "monitoring/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "monitoring/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "monitoring/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "monitoring/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "monitoring/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "monitoring/components/illiquid-model");
define("monitoring/components/ingress-response-list/component", ["exports", "monitoring/components/ingress-response-list/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    data: null,
    sortBy: 'time',
    descending: true,
    labelArray: null,
    headers: [{
      name: 'host',
      sort: ['host'],
      translationKey: 'ingressResponse.host'
    }, {
      name: 'path',
      sort: ['path', 'host'],
      translationKey: 'ingressResponse.path'
    }, {
      name: 'time',
      sort: ['time', 'path', 'host'],
      translationKey: 'ingressResponse.responseTime'
    }]
  });

  _exports.default = _default;
});
define("monitoring/components/ingress-response-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qTJ1YC7B",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"inst\"],\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\",\"componentName\"],[[27,\"t\",[\"ingressResponse.title\"],null],[27,\"t\",[\"ingressResponse.detail\"],null],[23,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[23,[\"expandFn\"]]],null],true,\"sortable-table\"]],{\"statements\":[[4,\"component\",[[22,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[23,[\"sortBy\"]],false,[23,[\"descending\"]],[23,[\"headers\"]],[23,[\"data\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"row\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"ingressResponse.host\"],null],\":\"]]],[11,\"class\",\"force-wrap\"],[9],[1,[22,4,[\"host\"]],false],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"ingressResponse.path\"],null],\":\"]]],[11,\"class\",\"force-wrap\"],[9],[1,[22,4,[\"path\"]],false],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"ingressResponse.responseTime\"],null],\":\"]]],[11,\"class\",\"force-wrap\"],[9],[1,[22,4,[\"time\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"norows\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"ingressResponse.noData\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"ingressResponse.noMatch\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2,3,4]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/ingress-response-list/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/input-answer-row/component", "monitoring/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "monitoring/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "monitoring/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "monitoring/components/input-float/component");
define.alias("shared/components/input-identity/component", "monitoring/components/input-identity/component");
define.alias("shared/components/input-int/component", "monitoring/components/input-int/component");
define.alias("shared/components/input-integer/component", "monitoring/components/input-integer/component");
define.alias("shared/components/input-number/component", "monitoring/components/input-number/component");
define.alias("shared/components/input-or-display/component", "monitoring/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "monitoring/components/input-paste/component");
define.alias("shared/components/input-slider/component", "monitoring/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "monitoring/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "monitoring/components/input-text-file/component");
define.alias("shared/components/input-url/component", "monitoring/components/input-url/component");
define.alias("shared/components/input-yaml/component", "monitoring/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "monitoring/components/ivy-codemirror");
define("monitoring/components/k8s-component-status/component", ["exports", "monitoring/components/k8s-component-status/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    classNames: 'col span-3 mt-0',
    showUrl: true,
    label: null,
    healthy: null,
    url: null
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-component-status/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yBBkm/ot",
    "block": "{\"symbols\":[],\"statements\":[[4,\"banner-message\",null,[[\"icon\",\"color\"],[[27,\"if\",[[23,[\"healthy\"]],\"icon-check\",\"icon-alert\"],null],[27,\"if\",[[23,[\"healthy\"]],\"bg-success mt-0\",\"bg-error mt-0\"],null]]],{\"statements\":[[0,\"  \"],[7,\"p\"],[11,\"class\",\"text-left\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[[23,[\"label\"]]],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"showUrl\"]],[23,[\"url\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n        \"],[7,\"a\"],[12,\"href\",[21,\"url\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"grafana\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/k8s-component-status/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/k8s-metrics/template", "shared/utils/util"], function (_exports, _metrics, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      displayResourceType: 'kube-component'
    },
    singleStatsDidChange: Ember.observer('single.[]', function () {
      var responseSeconds = (Ember.get(this, 'single') || []).findBy('graph.title', 'ingresscontroller-upstream-response-seconds');

      if (responseSeconds) {
        Ember.set(this, 'responseSeconds', (Ember.get(responseSeconds, 'series') || []).sortBy('series.firstObject.points.firstObject.firstObject').map(function (serie) {
          var name = Ember.get(serie, 'name') || '';
          var tokens = name.substring(24, Ember.get(name, 'length') - 1).split(' ');
          var host;
          var path;

          if (Ember.get(tokens, 'length') === 2) {
            host = tokens[0].substring(7, Ember.get(tokens[0], 'length'));
            path = tokens[1].substring(5, Ember.get(tokens[1], 'length'));
          }

          return {
            host: host,
            path: path,
            time: (0, _util.formatSecond)(Ember.get(serie, 'points.firstObject.firstObject'))
          };
        }));
      }
    })
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dkDJ1tqW",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"state\"],[[27,\"action\",[[22,0,[]],\"query\"],null],[23,[\"state\"]]]]],false],[0,\"\\n\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"single\",\"length\"]]],null,{\"statements\":[[4,\"accordion-list\",null,null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"mt-20 text-left\"],[9],[0,\"\\n        \"],[1,[27,\"ingress-response-list\",null,[[\"expandAll\",\"expandFn\",\"data\"],[[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"responseSeconds\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/k8s-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/labels-section/component", "monitoring/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "monitoring/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "monitoring/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "monitoring/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "monitoring/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "monitoring/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "monitoring/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "monitoring/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "monitoring/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "monitoring/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "monitoring/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "monitoring/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "monitoring/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "monitoring/components/liquid-versions");
define.alias("shared/components/marked-down/component", "monitoring/components/marked-down/component");
define.alias("shared/components/metrics-action/component", "monitoring/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "monitoring/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "monitoring/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "monitoring/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "monitoring/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "monitoring/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "monitoring/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "monitoring/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "monitoring/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "monitoring/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "monitoring/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "monitoring/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "monitoring/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "monitoring/components/modal-move-namespace/component");
define.alias("shared/components/modal-root/component", "monitoring/components/modal-root/component");
define.alias("shared/components/modal-shell/component", "monitoring/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "monitoring/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "monitoring/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "monitoring/components/namespace-group/component");
define.alias("shared/components/new-select/component", "monitoring/components/new-select/component");
define("monitoring/components/node-conditions/component", ["exports", "monitoring/components/node-conditions/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var FALSE = 'False';
  var TRUE = 'True';

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    conditionsSource: null,
    conditions: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.setConditions();
    },
    updateConditions: Ember.observer('conditionsSource.@each.{status,reason,message}', function () {
      this.setConditions();
    }),
    setConditions: function setConditions() {
      var conditions = Ember.get(this, 'conditionsSource');
      var outOfDisk = conditions.find(function (c) {
        return c.type === 'OutOfDisk';
      });
      var diskPressure = conditions.find(function (c) {
        return c.type === 'DiskPressure';
      });
      var memoryPressure = conditions.find(function (c) {
        return c.type === 'MemoryPressure';
      });
      var ready = conditions.find(function (c) {
        return c.type === 'Ready';
      });
      this.set('conditions', [{
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.diskSpace'),
        healthy: !outOfDisk || Ember.get(outOfDisk, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.diskPressure'),
        healthy: !diskPressure || Ember.get(diskPressure, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.memoryPressure'),
        healthy: !memoryPressure || Ember.get(memoryPressure, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.ready'),
        healthy: ready && Ember.get(ready, 'status') === TRUE
      }]);
    }
  });

  _exports.default = _default;
});
define("monitoring/components/node-conditions/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4BPUjF/B",
    "block": "{\"symbols\":[\"c\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"conditions\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n      \"],[1,[27,\"banner-message\",null,[[\"color\",\"icon\",\"message\"],[[27,\"if\",[[22,1,[\"healthy\"]],\"bg-success\",\"bg-error\"],null],[27,\"if\",[[22,1,[\"healthy\"]],\"icon-check\",\"icon-alert\"],null],[22,1,[\"name\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/node-conditions/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/components/node-dashboard/component", ["exports", "monitoring/components/node-dashboard/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    model: null,
    monitoringEnabled: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady')
  });

  _exports.default = _default;
});
define("monitoring/components/node-dashboard/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AjmaRKhE",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"hostsPage.hostPage.ipAddress\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inline-block\"],[9],[1,[27,\"node-ip\",null,[[\"model\",\"textMuted\"],[[23,[\"model\",\"node\"]],false]]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"hostsPage.hostPage.dockerVersion\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[1,[23,[\"model\",\"node\",\"info\",\"os\",\"dockerVersion\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.created\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"node\",\"created\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"hostsPage.hostPage.kubeletVersion\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[1,[23,[\"model\",\"node\",\"info\",\"kubernetes\",\"kubeletVersion\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"hostsPage.hostPage.kubeProxyVersion\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[1,[23,[\"model\",\"node\",\"info\",\"kubernetes\",\"kubeProxyVersion\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"hostsPage.hostPage.operatingSystem\"],null],false],[0,\":\"],[10],[0,\"\\n    \"],[1,[23,[\"model\",\"node\",\"osBlurb\"]],false],[0,\" \"],[7,\"span\"],[11,\"class\",\"text-small text-muted\"],[9],[1,[23,[\"model\",\"node\",\"info\",\"os\",\"kernelVersion\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"nodes-live\",null,[[\"nodes\"],[[23,[\"model\",\"nodes\"]]]]],false],[0,\"\\n\\n\"],[1,[27,\"node-conditions\",null,[[\"conditionsSource\"],[[23,[\"model\",\"node\",\"conditions\"]]]]],false],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"isMonitoringReady\"]]],null,{\"statements\":[[4,\"metrics-summary\",null,[[\"classNames\",\"expandAll\",\"expandFn\",\"grafanaUrl\",\"title\"],[\"mb-20\",[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"model\",\"node\",\"grafanaUrl\"]],[27,\"t\",[\"clusterDashboard.sections.node\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"node-metrics\",null,[[\"resourceId\"],[[23,[\"model\",\"node\",\"id\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[1,[27,\"resource-condition-list\",null,[[\"resourceType\",\"conditions\",\"expandAll\",\"expandFn\"],[[27,\"t\",[\"generic.node\"],null],[23,[\"model\",\"node\",\"conditions\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n      \"],[1,[27,\"system-info-section\",null,[[\"node\",\"expandAll\",\"expandFn\"],[[23,[\"model\",\"node\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n      \"],[1,[27,\"labels-section\",null,[[\"model\",\"showKind\",\"expandAll\",\"expandFn\"],[[23,[\"model\",\"node\"]],false,[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n      \"],[1,[27,\"annotations-section\",null,[[\"model\",\"expandAll\",\"expandFn\"],[[23,[\"model\",\"node\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n      \"],[1,[27,\"taints-section\",null,[[\"taints\",\"expandAll\",\"expandFn\"],[[23,[\"model\",\"node\",\"taints\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/node-dashboard/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/node-ip/component", "monitoring/components/node-ip/component");
define("monitoring/components/node-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/node-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'node'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/node-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GQtUoOtM",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"state\"],[[27,\"action\",[[22,0,[]],\"query\"],null],[23,[\"state\"]]]]],false],[0,\"\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/node-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/node-pool-row/component", "monitoring/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "monitoring/components/node-taints/component");
define("monitoring/components/nodes-live/component", ["exports", "monitoring/components/nodes-live/template", "shared/mixins/metrics", "monitoring/components/nodes-reservation/component", "shared/utils/parse-unit"], function (_exports, _template, _metrics, _component, _parseUnit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CPU_GRAPH_TITLE = 'cluster-cpu-usage';
  var MOMORY_GRAPH_TITLE = 'cluster-memory-usage';

  var _default = _component.default.extend(_metrics.default, {
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    nodes: null,
    filters: {
      resourceType: 'cluster'
    },
    isGotMetrics: false,
    cluster: Ember.computed.reads('scope.currentCluster'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady'),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.run.next(function () {
        Ember.setProperties(Ember.get(_this, 'state'), {
          from: 'now-5s',
          interval: '5s',
          isCustom: false,
          loading: false,
          noGraphs: false,
          to: 'now'
        });

        _this.fetchMetrics();
      });
    },
    isMonitoringReadyChange: Ember.observer('isMonitoringReady', function () {
      if (Ember.get(this, 'isMonitoringReady')) {
        this.fetchMetrics();
      } else {
        Ember.set(this, 'isGotMetrics', false);
      }
    }),
    graphChange: Ember.observer('graphs.[]', function () {
      var _this$graphs = this.graphs,
          graphs = _this$graphs === void 0 ? [] : _this$graphs;
      var filtered = graphs.filter(function (o) {
        return o.graph.title === CPU_GRAPH_TITLE || o.graph.title === MOMORY_GRAPH_TITLE;
      });

      if (filtered.length === 2) {
        Ember.set(this, 'isGotMetrics', true);
      } else {
        Ember.set(this, 'isGotMetrics', false);
      }
    }),
    cpuTotalPercentOb: Ember.observer('cpuUsedTotal', 'cpuReservation.subtitle', function () {
      var _this2 = this;

      Ember.run.next(function () {
        var reservation = _this2.getTotal(_this2.getNodes('cpu'));

        var used = Ember.get(_this2, 'cpuUsedTotal');

        if (used === 0 || used === undefined) {
          Ember.set(_this2, 'cpuTotalPercent', 100);
        } else {
          if (reservation > used) {
            Ember.set(_this2, 'cpuTotalPercent', 100);
          } else {
            Ember.set(_this2, 'cpuTotalPercent', Math.round(reservation / used * 100) || 100);
          }
        }
      });
    }),
    memoryTotalPercentOb: Ember.observer('memoryUsedTotal', 'memoryTotalPercent.subtitle', function () {
      var _this3 = this;

      Ember.run.next(function () {
        var reservation = _this3.getTotal(_this3.getNodes('memory'));

        var used = Ember.get(_this3, 'memoryUsedTotal');

        if (used === 0 || used === undefined) {
          Ember.set(_this3, 'memoryTotalPercent', 100);
        } else {
          if (reservation > used) {
            Ember.set(_this3, 'memoryTotalPercent', 100);
          } else {
            Ember.set(_this3, 'memoryTotalPercent', Math.round(reservation / used * 100) || 100);
          }
        }
      });
    }),
    clusterChange: Ember.observer('scope.currentCluster.id', function () {
      this.fetchMetrics();
    }),
    cpuLive: Ember.computed('graphs.[]', function () {
      if (!Ember.get(this, 'graphs')) {
        return;
      }

      var cpuGraph = Ember.get(this, 'graphs').filter(function (g) {
        return g.graph.title === CPU_GRAPH_TITLE;
      })[0];

      if (!cpuGraph || cpuGraph === undefined) {
        return;
      }

      var _cpuGraph$series = cpuGraph.series,
          series = _cpuGraph$series === void 0 ? [] : _cpuGraph$series;
      var _this$nodes = this.nodes,
          nodes = _this$nodes === void 0 ? [] : _this$nodes;
      var out = 0;
      var filtered = series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      });
      filtered.map(function (s) {
        return out += s.points[1] && s.points[1][0] || 0;
      });
      return Math.round(out / filtered.length * 100);
    }),
    cpuTicks: Ember.computed('graphs.[]', 'nodes.[]', function () {
      if (!Ember.get(this, 'graphs') || !Ember.get(this, 'showTicks')) {
        return;
      }

      var cpuGraph = Ember.get(this, 'graphs').filter(function (g) {
        return g.graph.title === CPU_GRAPH_TITLE;
      })[0];

      if (!cpuGraph || cpuGraph === undefined) {
        return;
      }

      var _cpuGraph$series2 = cpuGraph.series,
          series = _cpuGraph$series2 === void 0 ? [] : _cpuGraph$series2;
      var _this$nodes2 = this.nodes,
          nodes = _this$nodes2 === void 0 ? [] : _this$nodes2;
      return series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      }).map(function (s) {
        return {
          value: Math.round((s.points[1] && s.points[1][0] || 0) * 100),
          label: s.name
        };
      });
    }),
    memoryTicks: Ember.computed('graphs.[]', function () {
      if (!Ember.get(this, 'graphs') || !Ember.get(this, 'showTicks')) {
        return;
      }

      var memoryGraph = Ember.get(this, 'graphs').filter(function (g) {
        return g.graph.title === MOMORY_GRAPH_TITLE;
      })[0];

      if (!memoryGraph || memoryGraph === undefined) {
        return;
      }

      var _memoryGraph$series = memoryGraph.series,
          series = _memoryGraph$series === void 0 ? [] : _memoryGraph$series;
      var _this$nodes3 = this.nodes,
          nodes = _this$nodes3 === void 0 ? [] : _this$nodes3;
      return series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      }).map(function (s) {
        return {
          value: Math.round((s.points[1] && s.points[1][0] || 0) * 100),
          label: s.name
        };
      });
    }),
    memoryLive: Ember.computed('graphs.[]', function () {
      if (!Ember.get(this, 'graphs')) {
        return;
      }

      var memoryGraph = Ember.get(this, 'graphs').filter(function (g) {
        return g.graph.title === MOMORY_GRAPH_TITLE;
      })[0];

      if (!memoryGraph || memoryGraph === undefined) {
        return;
      }

      var _memoryGraph$series2 = memoryGraph.series,
          series = _memoryGraph$series2 === void 0 ? [] : _memoryGraph$series2;
      var _this$nodes4 = this.nodes,
          nodes = _this$nodes4 === void 0 ? [] : _this$nodes4;
      var out = 0;
      var filtered = series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      });
      filtered.map(function (s) {
        return out += s.points[1] && s.points[1][0] || 0;
      });
      return Math.round(out / filtered.length * 100);
    }),
    cpuLiveTitle: Ember.computed('nodeCapcity', 'graphs.[]', 'cluster.capacity', 'intl.locale', function () {
      var cpuLive = this.cpuLive,
          _this$nodes5 = this.nodes,
          nodes = _this$nodes5 === void 0 ? [] : _this$nodes5;

      if (!cpuLive) {
        return 'loading';
      }

      var _this$nodeCapcity = this.nodeCapcity,
          nodeCapcity = _this$nodeCapcity === void 0 ? {} : _this$nodeCapcity,
          _this$graphs2 = this.graphs,
          graphs = _this$graphs2 === void 0 ? [] : _this$graphs2;
      var cpuGraph = graphs.filter(function (g) {
        return g.graph.title === CPU_GRAPH_TITLE;
      })[0];

      if (!cpuGraph || cpuGraph === undefined) {
        return;
      }

      var _cpuGraph$series3 = cpuGraph.series,
          series = _cpuGraph$series3 === void 0 ? [] : _cpuGraph$series3;
      var used = 0;
      var total = 0;
      series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      }).map(function (s) {
        var capacity = nodeCapcity[s.name];

        if (!capacity) {
          return;
        }

        used += parseInt(capacity.cpu) * (s.points[1] && s.points[1][0] || 0);
        total += parseInt(capacity.cpu);
      });
      total = (0, _parseUnit.formatSi)(total, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1);
      Ember.set(this, 'cpuUsedTotal', (0, _parseUnit.parseSi)(total));
      return Ember.get(this, 'intl').t('clusterDashboard.liveTitle', {
        total: total,
        used: (0, _parseUnit.formatSi)(used, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1).replace(/\s.*$/, '')
      });
    }),
    meomoryLiveTitle: Ember.computed('nodes.@each.{memory}', 'memoryLive', 'intl.locale', function () {
      var memoryLive = this.memoryLive,
          _this$nodes6 = this.nodes,
          nodes = _this$nodes6 === void 0 ? [] : _this$nodes6;

      if (!memoryLive) {
        return 'loading';
      }

      var _this$nodeCapcity2 = this.nodeCapcity,
          nodeCapcity = _this$nodeCapcity2 === void 0 ? {} : _this$nodeCapcity2,
          _this$graphs3 = this.graphs,
          graphs = _this$graphs3 === void 0 ? [] : _this$graphs3;
      var graph = graphs.filter(function (g) {
        return g.graph.title === MOMORY_GRAPH_TITLE;
      })[0];

      if (!graph || graph === undefined) {
        return;
      }

      var _graph$series = graph.series,
          series = _graph$series === void 0 ? [] : _graph$series;
      var used = 0;
      var total = 0;
      series.filter(function (s) {
        return nodes.filter(function (n) {
          return n.nodeName === s.name;
        }).length > 0;
      }).map(function (s) {
        var capacity = nodeCapcity[s.name];

        if (!capacity) {
          return;
        }

        used += (0, _parseUnit.parseSi)(capacity.memory) * (s.points[1] && s.points[1][0] || 0);
        total += (0, _parseUnit.parseSi)(capacity.memory);
      });
      Ember.set(this, 'memoryUsedTotal', total);
      return Ember.get(this, 'intl').t('clusterDashboard.liveTitle', {
        total: (0, _parseUnit.formatSi)(total, 1024, 'iB', 'B', 0, (0, _parseUnit.exponentNeeded)(total), 1),
        used: (0, _parseUnit.formatSi)(used, 1024, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1).replace(/\s.*$/, '')
      });
    }),
    nodeCapcity: Ember.computed('nodes.@each.{capacity}', function () {
      var _this$nodes7 = this.nodes,
          nodes = _this$nodes7 === void 0 ? [] : _this$nodes7;
      var out = {};
      nodes.map(function (n) {
        out[n.nodeName] = n.capacity;
      });
      return out;
    }),
    fetchMetrics: function fetchMetrics() {
      if (Ember.get(this, 'isMonitoringReady')) {
        this.send('query');
      }
    },
    updateData: function updateData(out) {
      var _this4 = this;

      var single = [];
      var graphs = [];
      out.map(function (item) {
        if ((Ember.get(item, 'series') || []).find(function (serie) {
          return Ember.get(serie, 'points.length') > 1;
        })) {
          graphs.push(item);
        }
      });
      Ember.setProperties(this, {
        'state.noGraphs': Ember.get(graphs, 'length') === 0,
        graphs: graphs,
        single: single
      });
      var timeOutAnchor = setTimeout(function () {
        _this4.fetchMetrics();
      }, 30 * 1000);
      Ember.set(this, 'timeOutAnchor', timeOutAnchor);
    },
    getTotal: function getTotal(nodes) {
      var total = 0;
      nodes.map(function (node) {
        total += node.total;
      });
      return total;
    }
  });

  _exports.default = _default;
});
define("monitoring/components/nodes-live/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rjyR/P+t",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row percent-gauge-container\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"isMonitoringReady\"]],[23,[\"isGotMetrics\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"used-percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"liveTitle\",\"live\",\"liveTicks\",\"maxValue\"],[[23,[\"cpuReservation\",\"percent\"]],[27,\"t\",[\"clusterDashboard.cpu\"],null],[23,[\"cpuReservation\",\"subtitle\"]],[23,[\"cpuReservation\",\"ticks\"]],[23,[\"cpuLiveTitle\"]],[23,[\"cpuLive\"]],[23,[\"cpuTicks\"]],[23,[\"cpuTotalPercent\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"used-percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"liveTitle\",\"live\",\"liveTicks\",\"maxValue\"],[[23,[\"memoryReservation\",\"percent\"]],[27,\"t\",[\"clusterDashboard.memory\"],null],[23,[\"memoryReservation\",\"subtitle\"]],[23,[\"memoryReservation\",\"ticks\"]],[23,[\"meomoryLiveTitle\"]],[23,[\"memoryLive\"]],[23,[\"memoryTicks\"]],[23,[\"memoryTotalPercent\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"mode\"],[[23,[\"podUsage\",\"percent\"]],[27,\"t\",[\"clusterDashboard.pods\"],null],[23,[\"podUsage\",\"subtitle\"]],[23,[\"podUsage\",\"ticks\"]],\"monitoring\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[23,[\"cpuReservation\",\"percent\"]],[27,\"t\",[\"clusterDashboard.cpu\"],null],[23,[\"cpuReservation\",\"subtitle\"]],[23,[\"cpuReservation\",\"ticks\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[23,[\"memoryReservation\",\"percent\"]],[27,\"t\",[\"clusterDashboard.memory\"],null],[23,[\"memoryReservation\",\"subtitle\"]],[23,[\"memoryReservation\",\"ticks\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0 mb-0\"],[9],[0,\"\\n      \"],[1,[27,\"percent-gauge\",null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[23,[\"podUsage\",\"percent\"]],[27,\"t\",[\"clusterDashboard.pods\"],null],[23,[\"podUsage\",\"subtitle\"]],[23,[\"podUsage\",\"ticks\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/nodes-live/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/components/nodes-reservation/component", ["exports", "shared/utils/parse-unit"], function (_exports, _parseUnit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    nodes: null,
    showTicks: false,
    cpuReservation: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('cpu', function (u, t) {
        return (0, _parseUnit.formatSi)(u, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1).replace(/\s.*$/, '');
      }, function (t) {
        return (0, _parseUnit.formatSi)(t, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1);
      }, 'reserved');
    }),
    memoryReservation: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('memory', function (u, t) {
        return (0, _parseUnit.formatSi)(u, 1024, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1).replace(/\s.*$/, '');
      }, function (t) {
        return (0, _parseUnit.formatSi)(t, 1024, 'iB', 'B', 0, (0, _parseUnit.exponentNeeded)(t), 1);
      }, 'reserved');
    }),
    podUsage: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('pods', function (u, t) {
        return (0, _parseUnit.formatSi)(u, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(Math.max(u, t)), 1).replace(/\s.*$/, '');
      }, function (t, u) {
        return (0, _parseUnit.formatSi)(t, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(Math.max(u, t)), 1);
      }, 'used');
    }),
    getGauge: function getGauge(field, usedFormatCb, totalFormatCb, keyword) {
      var nodes = this.getNodes(field);
      var value = this.getValue(nodes);
      return {
        percent: value.percent,
        value: value.current,
        subtitle: this.getSubtitle(nodes, totalFormatCb, usedFormatCb, keyword),
        ticks: Ember.get(this, 'showTicks') ? this.getTicks(nodes) : []
      };
    },
    getTicks: function getTicks(nodes) {
      var filtered = [];

      if (nodes.length > 0) {
        var min = nodes[0].value;
        var max = nodes[nodes.length - 1].value;
        filtered = nodes.filter(function (node) {
          return node.value === min || node.value === max;
        });
      }

      var ticks = [];
      filtered.forEach(function (node) {
        var found = ticks.find(function (tick) {
          return tick.value === Math.round(node.value);
        });

        if (found) {
          found.labels.push(node.node.nodeName || node.node.requestedHostname);
        } else {
          ticks.push({
            value: Math.round(node.value),
            labels: [node.node.nodeName || node.node.requestedHostname]
          });
        }
      });
      return ticks;
    },
    getNodes: function getNodes(field) {
      return (this.get('nodes') || []).map(function (node) {
        var tValue = node.allocatable && node.allocatable[field] ? node.allocatable[field] : '0';
        var uValue = node.requested && node.requested[field] ? node.requested[field] : '0';
        var total = (0, _parseUnit.parseSi)(tValue);
        var used = (0, _parseUnit.parseSi)(uValue);

        if (isNaN(total) || isNaN(used)) {
          used = 0;
          total = 0;
        }

        var value = 0;

        if (total > 0) {
          value = used * 100 / total;
        }

        return {
          node: node,
          used: used,
          total: total,
          value: value
        };
      }).sortBy('value');
    },
    getValue: function getValue(nodes) {
      var used = 0;
      var total = 0;
      nodes.forEach(function (node) {
        total += node.total;
        used += node.used;
      });
      var value = Math.round(used * 100 / total);
      return {
        percent: isNaN(value) ? 0 : value,
        current: used
      };
    },
    getSubtitle: function getSubtitle(nodes, totalCb, usedCb, keyword) {
      var used = 0;
      var total = 0;
      nodes.forEach(function (node) {
        total += node.total;
        used += node.used;
      });
      return this.get('intl').t("clusterDashboard.subtitle.".concat(keyword), {
        used: usedCb ? (usedCb(used, total) || '').trim() : used,
        total: totalCb ? (totalCb(total, used) || '').trim() : total
      });
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "monitoring/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "monitoring/components/page-numbers");
define.alias("shared/components/page-numbers/component", "monitoring/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "monitoring/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "monitoring/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "monitoring/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "monitoring/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "monitoring/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "monitoring/components/radio-button/component");
define("monitoring/components/rancher-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/rancher-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      displayResourceType: 'rancher-component'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/rancher-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DQ64GD41",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"state\"],[[27,\"action\",[[22,0,[]],\"query\"],null],[23,[\"state\"]]]]],false],[0,\"\\n\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\",\"noDataLabel\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]],\"clusterDashboard.noRancherComponents\"]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/rancher-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/resource-condition-list/component", "monitoring/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "monitoring/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "monitoring/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "monitoring/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "monitoring/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "monitoring/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "monitoring/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "monitoring/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "monitoring/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "monitoring/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "monitoring/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "monitoring/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "monitoring/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "monitoring/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "monitoring/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "monitoring/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "monitoring/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "monitoring/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "monitoring/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "monitoring/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "monitoring/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "monitoring/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "monitoring/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "monitoring/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "monitoring/components/search-text/component");
define.alias("shared/components/searchable-select/component", "monitoring/components/searchable-select/component");
define.alias("shared/components/settings/danger-zone/component", "monitoring/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "monitoring/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "monitoring/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "monitoring/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "monitoring/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "monitoring/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "monitoring/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "monitoring/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "monitoring/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "monitoring/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "monitoring/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "monitoring/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "monitoring/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "monitoring/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "monitoring/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "monitoring/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "monitoring/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "monitoring/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "monitoring/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "monitoring/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "monitoring/components/storage-class/provisioner-vsphere-volume/component");
define("monitoring/components/system-info-section/component", ["exports", "monitoring/components/system-info-section/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    node: null,
    sortBy: 'key',
    descending: false,
    labelArray: null,
    headers: [{
      name: 'key',
      sort: ['key'],
      translationKey: 'systemInfoSection.key'
    }, {
      name: 'value',
      sort: ['value', 'key'],
      translationKey: 'systemInfoSection.value'
    }],
    didReceiveAttrs: function didReceiveAttrs() {
      var labelArray = this.getSystemInfoArray();
      Ember.set(this, 'labelArray', labelArray);
    },
    annotationsObserver: Ember.observer('node', function () {
      var labelArray = this.getSystemInfoArray();
      Ember.set(this, 'labelArray', labelArray);
    }),
    getSystemInfoArray: function getSystemInfoArray() {
      var array = [];
      var node = Ember.get(this, 'node');
      var info = Ember.get(node, 'info');
      var kubernetes = Ember.get(info, 'kubernetes');
      var os = Ember.get(info, 'os');
      var arch = (Ember.get(node, 'labels') || {})['beta.kubernetes.io/arch'];
      var osType = (Ember.get(node, 'labels') || {})['beta.kubernetes.io/os'];

      if (kubernetes) {
        array.push({
          key: 'systemInfoSection.kubeProxyVersion',
          value: Ember.get(kubernetes, 'kubeProxyVersion')
        });
        array.push({
          key: 'systemInfoSection.kubeletVersion',
          value: Ember.get(kubernetes, 'kubeletVersion')
        });
      }

      if (os) {
        array.push({
          key: 'systemInfoSection.dockerVersion',
          value: Ember.get(os, 'dockerVersion')
        });
        array.push({
          key: 'systemInfoSection.kernelVersion',
          value: Ember.get(os, 'kernelVersion')
        });
        array.push({
          key: 'systemInfoSection.operatingSystem',
          value: Ember.get(os, 'operatingSystem')
        });
      }

      if (arch) {
        array.push({
          key: 'systemInfoSection.arch',
          value: arch
        });
      }

      if (osType) {
        array.push({
          key: 'systemInfoSection.osType',
          value: osType
        });
      }

      return array;
    }
  });

  _exports.default = _default;
});
define("monitoring/components/system-info-section/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "s2yN7993",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"label\"],\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"statusClass\",\"expandAll\",\"expand\",\"componentName\"],[[27,\"t\",[\"systemInfoSection.title\"],null],[27,\"t\",[\"systemInfoSection.detail\"],null],[27,\"if\",[[23,[\"labelArray\",\"length\"]],\"bg-success\",\"text-muted\"],null],[23,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[23,[\"expandFn\"]]],null],\"sortable-table\"]],{\"statements\":[[4,\"component\",[[22,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[23,[\"sortBy\"]],false,[23,[\"descending\"]],[23,[\"headers\"]],[23,[\"labelArray\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"row\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"systemInfoSection.key\"],null],\":\"]]],[11,\"class\",\"force-wrap\"],[9],[1,[27,\"t\",[[22,4,[\"key\"]]],null],false],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"systemInfoSection.value\"],null],\":\"]]],[11,\"class\",\"force-wrap\"],[9],[1,[27,\"pretty-json\",null,[[\"value\"],[[22,4,[\"value\"]]]]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"norows\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"systemInfoSection.noData\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"systemInfoSection.noMatch\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2,3,4]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/system-info-section/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/table-labels/component", "monitoring/components/table-labels/component");
define("monitoring/components/taints-section/component", ["exports", "shared/mixins/manage-labels", "monitoring/components/taints-section/template"], function (_exports, _manageLabels, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_manageLabels.default, {
    layout: _template.default,
    sortBy: 'key',
    descending: false,
    headers: [{
      name: 'key',
      sort: ['key'],
      translationKey: 'taintsSection.key',
      width: 200
    }, {
      name: 'value',
      sort: ['value'],
      translationKey: 'taintsSection.value',
      width: 200
    }, {
      name: 'effect',
      sort: ['effect'],
      translationKey: 'taintsSection.effect',
      width: 200
    }]
  });

  _exports.default = _default;
});
define("monitoring/components/taints-section/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AYPEuKe6",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"row\"],\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"componentName\"],[[27,\"t\",[\"taintsSection.title\"],null],[27,\"t\",[\"taintsSection.detail\"],[[\"resourceType\"],[[23,[\"resourceType\"]]]]],[23,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[23,[\"expandFn\"]]],null],\"sortable-table\"]],{\"statements\":[[4,\"component\",[[22,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[23,[\"sortBy\"]],false,[23,[\"descending\"]],[23,[\"headers\"]],[23,[\"taints\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"row\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"annotationsSection.key\"],null]]]],[9],[1,[22,4,[\"key\"]],false],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"annotationsSection.value\"],null]]]],[9],[1,[22,4,[\"value\"]],false],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"annotationsSection.effect\"],null]]]],[9],[1,[22,4,[\"effect\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"norows\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"taintsSection.noData\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"taintsSection.noMatch\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2,3,4]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/components/taints-section/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/textarea-autogrow/component", "monitoring/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "monitoring/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "monitoring/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "monitoring/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "monitoring/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "monitoring/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "monitoring/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "monitoring/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "monitoring/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "monitoring/components/used-percent-gauge/component");
define("monitoring/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'monitoring/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "monitoring/cookies/service");
define.alias("shared/digital-ocean/service", "monitoring/digital-ocean/service");
define.alias("shared/endpoint/service", "monitoring/endpoint/service");
define("monitoring/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "monitoring/resolver", "monitoring/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'grafana', 'intl', 'scope', 'store', 'session', 'modal', 'globalStore', 'router', 'k8s', 'clusterStore', 'tooltip'],
      externalRoutes: []
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "monitoring/features/service");
define.alias("shared/grafana/service", "monitoring/grafana/service");
define.alias("shared/growl/service", "monitoring/growl/service");
define.alias("ember-math-helpers/helpers/abs", "monitoring/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "monitoring/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "monitoring/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "monitoring/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "monitoring/helpers/and");
define.alias("shared/helpers/array-includes", "monitoring/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "monitoring/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "monitoring/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "monitoring/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "monitoring/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "monitoring/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "monitoring/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "monitoring/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "monitoring/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "monitoring/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "monitoring/helpers/cosh");
define.alias("shared/helpers/date-calendar", "monitoring/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "monitoring/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "monitoring/helpers/date-recent");
define.alias("shared/helpers/date-str", "monitoring/helpers/date-str");
define.alias("shared/helpers/default-str", "monitoring/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "monitoring/helpers/div");
define.alias("shared/helpers/driver-name", "monitoring/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "monitoring/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "monitoring/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "monitoring/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "monitoring/helpers/floor");
define.alias("ember-intl/helpers/format-date", "monitoring/helpers/format-date");
define.alias("ember-intl/helpers/format-html-message", "monitoring/helpers/format-html-message");
define.alias("shared/helpers/format-ip", "monitoring/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "monitoring/helpers/format-message");
define.alias("shared/helpers/format-mib", "monitoring/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "monitoring/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "monitoring/helpers/format-relative");
define.alias("shared/helpers/format-si", "monitoring/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "monitoring/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "monitoring/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "monitoring/helpers/gcd");
define.alias("shared/helpers/get-card-class", "monitoring/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "monitoring/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "monitoring/helpers/gte");
define.alias("shared/helpers/has-override", "monitoring/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "monitoring/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "monitoring/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "monitoring/helpers/imul");
define.alias("ember-intl/helpers/intl-get", "monitoring/helpers/intl-get");
define.alias("ember-truth-helpers/helpers/is-array", "monitoring/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "monitoring/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "monitoring/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "monitoring/helpers/is-equal");
define.alias("shared/helpers/join-array", "monitoring/helpers/join-array");
define.alias("ember-intl/helpers/l", "monitoring/helpers/l");
define.alias("liquid-fire/helpers/lf-lock-model", "monitoring/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "monitoring/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "monitoring/helpers/link-ssl-domain");
define("monitoring/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "monitoring/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "monitoring/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "monitoring/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "monitoring/helpers/log2");
define.alias("shared/helpers/lower-case", "monitoring/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "monitoring/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "monitoring/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "monitoring/helpers/max");
define.alias("shared/helpers/maybe-t", "monitoring/helpers/maybe-t");
define.alias("ember-math-helpers/helpers/min", "monitoring/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "monitoring/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "monitoring/helpers/mult");
define.alias("shared/helpers/nl-to-br", "monitoring/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "monitoring/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "monitoring/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "monitoring/helpers/or");
define.alias("shared/helpers/parse-camelcase", "monitoring/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "monitoring/helpers/pow");
define.alias("shared/helpers/pretty-cron", "monitoring/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "monitoring/helpers/random");
define.alias("shared/helpers/rbac-allows", "monitoring/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "monitoring/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "monitoring/helpers/round");
define.alias("shared/helpers/run-time", "monitoring/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "monitoring/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "monitoring/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "monitoring/helpers/sqrt");
define.alias("shared/helpers/str-replace", "monitoring/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "monitoring/helpers/sub");
define.alias("ember-intl/helpers/format-html-message", "monitoring/helpers/t-html");
define.alias("ember-intl/helpers/t", "monitoring/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "monitoring/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "monitoring/helpers/tanh");
define.alias("shared/helpers/to-json", "monitoring/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "monitoring/helpers/trunc");
define.alias("shared/helpers/uc-first", "monitoring/helpers/uc-first");
define.alias("shared/helpers/upper-case", "monitoring/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "monitoring/helpers/xor");
define.alias("shared/host/service", "monitoring/host/service");
define("monitoring/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    modalService: Ember.inject.service('modal'),
    scope: Ember.inject.service(),
    k8s: Ember.inject.service(),
    cluster: Ember.computed.alias('scope.currentCluster'),
    actions: {
      kubectl: function kubectl() {
        this.get('modalService').toggleModal('modal-kubectl', {});
      },
      kubeconfig: function kubeconfig() {
        this.get('modalService').toggleModal('modal-kubeconfig', {
          escToClose: true
        });
      }
    },
    currentClusterNodes: Ember.computed('model.nodes.@each.{capacity,allocatable,state,isUnschedulable}', function () {
      var clusterId = Ember.get(this, 'scope.currentCluster.id');
      return Ember.get(this, 'model.nodes').filter(function (n) {
        return n.clusterId === clusterId && !n.isUnschedulable;
      });
    })
  });

  _exports.default = _default;
});
define("monitoring/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    session: Ember.inject.service(),
    model: function model() {
      var store = Ember.get(this, 'globalStore');
      var cluster = Ember.get(this, 'scope.currentCluster');
      var project = Ember.get(cluster, 'systemProject');
      var fetchApps = [];

      if (project && Ember.get(cluster, 'enableClusterMonitoring')) {
        fetchApps = store.rawRequest({
          url: "/v3/project/".concat(Ember.get(project, 'id'), "/apps"),
          method: 'GET'
        }).then(function (res) {
          var out = [];
          var apps = Ember.get(res, 'body.data') || [];
          var clusterApp = apps.findBy('name', 'cluster-monitoring');
          var operatorApp = apps.findBy('name', 'monitoring-operator');

          if (clusterApp) {
            out.push(store.createRecord(clusterApp));
          }

          if (operatorApp) {
            out.push(store.createRecord(operatorApp));
          }

          return out;
        });
      }

      return Ember.RSVP.hash({
        apps: fetchApps,
        nodes: Ember.get(this, 'globalStore').findAll('node')
      });
    },
    afterModel: function afterModel() {
      return Ember.RSVP.hash(Ember.get(this, 'globalStore').findAll('clusterTemplateRevision'), Ember.get(this, 'globalStore').findAll('clusterTemplate'));
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.CLUSTER_ROUTE), 'authenticated.cluster.monitoring.index');
    })
  });

  _exports.default = _default;
});
define("monitoring/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TDjjfoXe",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"h1\"],[11,\"class\",\"pull-left\"],[9],[1,[27,\"t\",[\"clusterDashboard.title\"],null],false],[0,\": \"],[1,[23,[\"cluster\",\"displayName\"]],false],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm icon-btn ml-10\"],[12,\"disabled\",[27,\"not\",[[23,[\"cluster\",\"isReady\"]]],null]],[12,\"onClick\",[27,\"action\",[[22,0,[]],\"kubectl\"],[[\"allowedKeys\"],[\"meta\"]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-terminal\"],[9],[10],[10],[0,\"\\n      \"],[7,\"span\"],[9],[1,[27,\"t\",[\"k8sPage.shell.button\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm icon-btn ml-10\"],[12,\"disabled\",[27,\"not\",[[23,[\"cluster\",\"isReady\"]]],null]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-file\"],[9],[10],[10],[0,\"\\n      \"],[7,\"span\"],[9],[1,[27,\"t\",[\"k8sPage.configFile.button\"],null],false],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"kubeconfig\"]],[10],[0,\"\\n\\n    \"],[1,[27,\"action-menu\",null,[[\"size\",\"classNames\",\"model\"],[\"sm\",\"pull-right\",[23,[\"cluster\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"cluster\",\"description\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mb-30\"],[9],[0,\"\\n    \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[27,\"linkify\",[[23,[\"cluster\",\"description\"]]],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"cluster-dashboard\",null,[[\"apps\",\"cluster\",\"nodes\"],[[23,[\"model\",\"apps\"]],[23,[\"cluster\"]],[23,[\"currentClusterNodes\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("monitoring/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
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
define("monitoring/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define("monitoring/instance-initializers/ember-intl", ["exports", "ember-intl/initializer"], function (_exports, _initializer) {
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
define.alias("shared/k8s/service", "monitoring/k8s/service");
define.alias("shared/linode/service", "monitoring/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "monitoring/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "monitoring/mixins/console");
define.alias("shared/mixins/container-choices", "monitoring/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "monitoring/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "monitoring/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "monitoring/mixins/filter-state");
define.alias("shared/mixins/grafana", "monitoring/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "monitoring/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "monitoring/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "monitoring/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "monitoring/mixins/manage-labels");
define.alias("shared/mixins/metrics", "monitoring/mixins/metrics");
define.alias("shared/mixins/modal-base", "monitoring/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "monitoring/mixins/new-or-edit");
define.alias("shared/mixins/preload", "monitoring/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "monitoring/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "monitoring/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "monitoring/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "monitoring/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "monitoring/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "monitoring/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "monitoring/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "monitoring/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "monitoring/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "monitoring/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "monitoring/mixins/upgrade-component");
define.alias("shared/mixins/upload", "monitoring/mixins/upload");
define.alias("shared/modal/service", "monitoring/modal/service");
define("monitoring/node-detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    model: function model(params) {
      return Ember.get(this, 'globalStore').find('node', params.node_id).then(function (node) {
        return {
          node: node,
          nodes: [node]
        };
      });
    }
  });

  _exports.default = _default;
});
define("monitoring/node-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hBnEw2ET",
    "block": "{\"symbols\":[\"role\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"hostsPage.hostPage.header.title\"],[[\"name\"],[[23,[\"model\",\"node\",\"displayName\"]]]]],false],[1,[27,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\"],[[23,[\"model\",\"node\",\"displayName\"]],\"small\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"node\",\"displayRoles\"]]],null,{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"badge badge-xs vertical-middle bg-info\"],[9],[0,\"\\n        \"],[1,[22,1,[]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\",\"node\"]]]]],false],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"model\",\"node\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"node\",\"description\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[27,\"linkify\",[[23,[\"model\",\"node\",\"description\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[27,\"node-dashboard\",null,[[\"model\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/node-detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/oauth/service", "monitoring/oauth/service");
define.alias("shared/pipeline-github/service", "monitoring/pipeline-github/service");
define.alias("shared/prefs/service", "monitoring/prefs/service");
define("monitoring/project-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    model: function model() {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        apps: store.find('app', null, {
          forceReload: true
        }).then(function (apps) {
          var out = [];
          var projectApp = apps.findBy('name', 'project-monitoring');

          if (projectApp) {
            out.push(projectApp);
          }

          return out;
        })
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.monitoring.project-setting');
    })
  });

  _exports.default = _default;
});
define("monitoring/project-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+it4276o",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"enable-monitoring\",null,[[\"apps\",\"level\"],[[23,[\"model\",\"apps\"]],\"project\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/project-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define("monitoring/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "monitoring/resource-actions/service");
define.alias("shared/role-template/service", "monitoring/role-template/service");
define.alias("shared/saml/service", "monitoring/saml/service");
define.alias("shared/scope/service", "monitoring/scope/service");
define.alias("ivy-codemirror/services/code-mirror", "monitoring/services/code-mirror");
define("monitoring/services/cookies", ["exports", "@rancher/ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "monitoring/services/intl");
define("monitoring/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "monitoring/session/service");
define.alias("shared/settings/service", "monitoring/settings/service");
define("monitoring/shared/tests/addon.lint-test", [], function () {
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
define("monitoring/shared/tests/app.lint-test", [], function () {
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
define("monitoring/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "monitoring/shibboleth-auth/service");
define.alias("shared/store-reset/service", "monitoring/store-reset/service");
define.alias("shared/tab-session/service", "monitoring/tab-session/service");
define("monitoring/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HcJW27aw",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "monitoring/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "monitoring/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "monitoring/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "monitoring/transitions/default");
define.alias("liquid-fire/transitions/explode", "monitoring/transitions/explode");
define.alias("liquid-fire/transitions/fade", "monitoring/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "monitoring/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "monitoring/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "monitoring/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "monitoring/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "monitoring/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "monitoring/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "monitoring/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "monitoring/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "monitoring/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "monitoring/transitions/wait");
define.alias("shared/user-language/service", "monitoring/user-language/service");
define.alias("shared/user-theme/service", "monitoring/user-theme/service");
define.alias("shared/utils/add-view-action", "monitoring/utils/add-view-action");
define.alias("shared/utils/additional-routes", "monitoring/utils/additional-routes");
define.alias("shared/utils/azure-choices", "monitoring/utils/azure-choices");
define.alias("shared/utils/browser-storage", "monitoring/utils/browser-storage");
define.alias("shared/utils/constants", "monitoring/utils/constants");
define.alias("shared/utils/convert-yaml", "monitoring/utils/convert-yaml");
define.alias("shared/utils/debounce", "monitoring/utils/debounce");
define.alias("shared/utils/download-files", "monitoring/utils/download-files");
define.alias("shared/utils/errors", "monitoring/utils/errors");
define.alias("shared/utils/fetch-yaml", "monitoring/utils/fetch-yaml");
define("monitoring/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "monitoring/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "monitoring/utils/group-compound-layout");
define("monitoring/utils/intl/missing-message", ["exports"], function (_exports) {
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
define.alias("shared/utils/load-script", "monitoring/utils/load-script");
define.alias("shared/utils/multi-stats", "monitoring/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "monitoring/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "monitoring/utils/parse-externalid");
define.alias("shared/utils/parse-port", "monitoring/utils/parse-port");
define.alias("shared/utils/parse-target", "monitoring/utils/parse-target");
define.alias("shared/utils/parse-unit", "monitoring/utils/parse-unit");
define.alias("shared/utils/parse-uri", "monitoring/utils/parse-uri");
define.alias("shared/utils/parse-version", "monitoring/utils/parse-version");
define.alias("shared/utils/percent-gauge", "monitoring/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "monitoring/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "monitoring/utils/pipelineStep");
define.alias("shared/utils/platform", "monitoring/utils/platform");
define.alias("shared/utils/queue", "monitoring/utils/queue");
define.alias("shared/utils/rackspace-choices", "monitoring/utils/rackspace-choices");
define.alias("shared/utils/search-text", "monitoring/utils/search-text");
define.alias("shared/utils/socket", "monitoring/utils/socket");
define.alias("shared/utils/sort", "monitoring/utils/sort");
define.alias("shared/utils/traffic-renderer", "monitoring/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "monitoring/utils/used-percent-gauge");
define.alias("shared/utils/util", "monitoring/utils/util");//# sourceMappingURL=engine.map
