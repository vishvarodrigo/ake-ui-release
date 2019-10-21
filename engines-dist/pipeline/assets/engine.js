define.alias("shared/access/service", "pipeline/access/service");
define.alias("shared/all-dns-records/service", "pipeline/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "pipeline/all-storage-classes/service");
define.alias("shared/all-workloads/service", "pipeline/all-workloads/service");
define.alias("shared/amazon/util", "pipeline/amazon/util");
define.alias("shared/azure-ad/service", "pipeline/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "pipeline/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "pipeline/calculate-position/util");
define.alias("shared/capabilities/service", "pipeline/capabilities/service");
define.alias("shared/catalog/service", "pipeline/catalog/service");
define("pipeline/cldrs/ar", ["exports"], function (_exports) {
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
define("pipeline/cldrs/de", ["exports"], function (_exports) {
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
define("pipeline/cldrs/en", ["exports"], function (_exports) {
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
define("pipeline/cldrs/es", ["exports"], function (_exports) {
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
define("pipeline/cldrs/fa", ["exports"], function (_exports) {
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
define("pipeline/cldrs/fr", ["exports"], function (_exports) {
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
define("pipeline/cldrs/hu", ["exports"], function (_exports) {
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
define("pipeline/cldrs/it", ["exports"], function (_exports) {
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
define("pipeline/cldrs/ja", ["exports"], function (_exports) {
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
define("pipeline/cldrs/ko", ["exports"], function (_exports) {
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
define("pipeline/cldrs/nb", ["exports"], function (_exports) {
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
define("pipeline/cldrs/nl", ["exports"], function (_exports) {
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
define("pipeline/cldrs/none", ["exports"], function (_exports) {
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
define("pipeline/cldrs/pt", ["exports"], function (_exports) {
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
define("pipeline/cldrs/readme", ["exports"], function (_exports) {
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
define("pipeline/cldrs/ru", ["exports"], function (_exports) {
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
define("pipeline/cldrs/sh", ["exports"], function (_exports) {
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
define("pipeline/cldrs/sv", ["exports"], function (_exports) {
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
define("pipeline/cldrs/tr", ["exports"], function (_exports) {
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
define("pipeline/cldrs/uk", ["exports"], function (_exports) {
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
define("pipeline/cldrs/vi", ["exports"], function (_exports) {
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
define("pipeline/cldrs/zh", ["exports"], function (_exports) {
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
define.alias("shared/cluster-templates/service", "pipeline/cluster-templates/service");
define.alias("shared/code-mirror/service", "pipeline/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "pipeline/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "pipeline/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "pipeline/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "pipeline/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "pipeline/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "pipeline/components/advanced-section/component");
define.alias("shared/components/annotations-section/component", "pipeline/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "pipeline/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "pipeline/components/api-field/component");
define.alias("shared/components/apikey-row/component", "pipeline/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "pipeline/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "pipeline/components/badge-state/component");
define.alias("shared/components/banner-message/component", "pipeline/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "pipeline/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "pipeline/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "pipeline/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "pipeline/components/basic-dropdown/trigger");
define("pipeline/components/bitbucketcloud-setting/component", ["exports", "pipeline/components/github-setting/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    oauthType: 'bitbucketcloud',
    oauthHost: 'bitbucket.org',
    targetDidChange: Ember.observer('target', function () {
      this.switch('bitbucketserver');
    }),
    getOauthUrl: function getOauthUrl(clientId) {
      return "/site/oauth2/authorize?client_id=".concat(clientId, "&response_type=code");
    },
    switch: function _switch() {
      throw new Error('switch action is required!');
    }
  });

  _exports.default = _default;
});
define("pipeline/components/bitbucketcloud-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Sz7US8Mi",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.bitbucketcloud.target.header\"],null],false],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"checked\"],[[23,[\"target\"]],\"bitbucketcloud\",true]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.target.bitbucketcloud\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"target\"]],\"bitbucketserver\"]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.target.bitbucketserver\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.bitbucketcloud.setup\"],null],false],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"ol\"],[11,\"class\",\"alphalist ml-40\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.auth\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.ul.li2.text\"],null],false],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.ul.li2.ul.li1\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.bitbucketcloud.ul.li2.ul.li2\"],null],false],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"id\",\"auth-callback-url\"],[9],[0,\"\\n              \"],[1,[27,\"concat\",[[23,[\"destinationUrl\"]],\"/verify-auth\"],null],false],[0,\" \\n              \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[27,\"concat\",[[23,[\"destinationUrl\"]],\"/verify-auth\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.ul.li2.ul.li3\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.ul.li3.text\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"form\"],[11,\"autcomplete\",\"on\"],[9],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.bitbucketcloud.form.headerVariable\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.form.clientId.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"text\",\"username\",[23,[\"oauthModel\",\"clientId\"]],\"form-control\"]]],false],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[1,[27,\"t\",[\"authPage.bitbucketcloud.form.subtextVariable\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketcloud.form.clientSecret.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"password\",\"password\",[23,[\"oauthModel\",\"clientSecret\"]],\"form-control\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n      \"],[1,[27,\"save-cancel\",null,[[\"cancelDisabled\",\"savingLabel\",\"createLabel\",\"save\"],[true,\"authPage.testAuth.buttonText.post\",\"authPage.testAuth.buttonText.preVariable\",[27,\"action\",[[22,0,[]],\"authenticate\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/bitbucketcloud-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/bitbucketserver-setting/component", ["exports", "pipeline/components/github-setting/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    intl: Ember.inject.service(),
    router: Ember.inject.service(),
    settings: Ember.inject.service(),
    oauthType: 'bitbucketserver',
    oauthHost: 'bitbucket.org',
    applicationLink: null,
    consumerKey: null,
    publicKey: null,
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.setProperties(this, {
        isEnterprise: true,
        applicationLink: window.location.href
      });
      var provider = Ember.get(this, 'provider');

      if (!Ember.get(provider, 'consumerKey')) {
        Ember.set(this, 'generating', true);
        provider.doAction('generateKeys').finally(function () {
          Ember.set(_this, 'generating', false);
        });
      }
    },
    actions: {
      authenticate: function authenticate() {
        var _this2 = this;

        var hostname = Ember.get(this, 'oauthModel.hostName');
        var errors = [];

        if (!hostname) {
          errors.pushObject(Ember.get(this, 'intl').t('authPage.bitbucketserver.form.hostname.required'));
        }

        Ember.set(this, 'errors', errors);

        if (Ember.get(errors, 'length') > 0) {
          return;
        }

        Ember.set(this, 'testing', true);
        var provider = Ember.get(this, 'provider');
        var tls = Ember.get(this, 'secure');
        var redirectUrl = "".concat(Ember.get(this, 'destinationUrl'), "/verify-auth");
        provider.doAction('requestLogin', {
          hostname: hostname,
          redirectUrl: redirectUrl,
          tls: tls
        }).then(function (res) {
          var authorizeURL = Ember.get(res, 'loginUrl');
          Ember.get(_this2, 'gitService').authorizeTest(authorizeURL, function (err, code) {
            if (err) {
              _this2.send('gotError', err);

              Ember.set(_this2, 'testing', false);
            } else {
              _this2.send('gotCode', code, hostname, redirectUrl, tls);
            }
          });
        }).catch(function () {
          Ember.set(_this2, 'testing', false);
        });
      },
      gotCode: function gotCode(code, hostname, redirectUrl, tls) {
        var _this3 = this;

        var param = {
          hostname: hostname,
          oauthToken: Ember.get(code, 'oauthToken'),
          oauthVerifier: Ember.get(code, 'oauthVerifier'),
          redirectUrl: redirectUrl,
          tls: tls
        };
        Ember.get(this, 'provider').doAction('testAndApply', param).then(function () {
          Ember.get(_this3, 'router').transitionTo('authenticated.project.pipeline.repositories');
        }).finally(function () {
          Ember.set(_this3, 'testing', false);
        });
      }
    },
    targetDidChange: Ember.observer('target', function () {
      this.switch('bitbucketcloud');
    }),
    switch: function _switch() {
      throw new Error('switch action is required!');
    }
  });

  _exports.default = _default;
});
define("pipeline/components/bitbucketserver-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5ROVPqBx",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"authPage.bitbucketserver.target.header\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"target\"]],\"bitbucketcloud\"]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.bitbucketserver.target.bitbucketcloud\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"checked\"],[[23,[\"target\"]],\"bitbucketserver\",true]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.bitbucketserver.target.bitbucketserver\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"authPage.bitbucketserver.setup\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"ol\"],[11,\"class\",\"alphalist ml-40\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketserver.auth\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.text\"],null],false],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li1\"],[[\"htmlSafe\"],[true]]],false],[10],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n              \"],[1,[21,\"applicationLink\"],false],[0,\" \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[23,[\"applicationLink\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li2\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li3\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li4\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li5\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"generating\"]]],null,{\"statements\":[[0,\"              \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.loading\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"authPage.bitbucketserver.copy\"],null],false],[0,\"\\n              \"],[10],[0,\" \\n              \"],[7,\"span\"],[9],[0,\"\\n                \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[23,[\"provider\",\"consumerKey\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li6\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li7\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"generating\"]]],null,{\"statements\":[[0,\"              \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.loading\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"authPage.bitbucketserver.copy\"],null],false],[0,\"\\n              \"],[10],[0,\" \\n              \"],[7,\"span\"],[9],[0,\"\\n                \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[23,[\"provider\",\"publicKey\"]]]]],false],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.ul.li2.ul.li8\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"form\"],[11,\"autcomplete\",\"on\"],[9],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"authPage.bitbucketserver.form.headerVariable\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.form.hostname.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"oauthModel\",\"hostName\"]],\"form-control\",[27,\"t\",[\"authPage.bitbucketserver.form.hostname.placeholder\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"secure\"]]]]],false],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.bitbucketserver.form.tls.labelText\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"banner-message\",null,[[\"color\"],[\"bg-warning m-0 mb-20\"]],{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.bitbucketserver.warning\"],[[\"appName\",\"htmlSafe\"],[[23,[\"settings\",\"appName\"]],true]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n      \"],[1,[27,\"save-cancel\",null,[[\"cancelDisabled\",\"savingLabel\",\"createLabel\",\"save\"],[true,\"authPage.testAuth.buttonText.post\",\"authPage.testAuth.buttonText.preVariable\",[27,\"action\",[[22,0,[]],\"authenticate\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/bitbucketserver-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/btn-toggle/component", "pipeline/components/btn-toggle/component");
define("pipeline/components/build-detail/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    router: Ember.inject.service(),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.run.scheduleOnce('afterRender', function () {
        if (!Ember.get(_this, 'build')) {
          Ember.get(_this, 'router').transitionTo('authenticated.project.pipeline.pipelines');
        }
      });
    },
    build: Ember.computed('model.executions.@each.run', 'model.run', function () {
      var _this2 = this;

      return Ember.get(this, 'model.executions').find(function (exe) {
        return Ember.get(exe, 'pipelineId') === Ember.get(_this2, 'model.pipeline.id') && Ember.get(exe, 'run') === parseInt(Ember.get(_this2, 'model.run'), 10);
      });
    })
  });

  _exports.default = _default;
});
define("pipeline/components/build-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kzvk1TQD",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"parent\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"buildDetailPage.header\"],[[\"name\"],[[23,[\"build\",\"run\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"build\"]]]]],false],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"build\"]],false,\"ml-10 pull-right\",\"sm\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"build\",\"message\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-secondary mb-0 mt-10\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0 pr-10\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.commitMessage\"],null],false],[10],[1,[23,[\"build\",\"message\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"build\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[[23,[\"build\",\"stateColor\"]]]]],[9],[7,\"p\"],[9],[1,[27,\"uc-first\",[[23,[\"build\",\"transitioningMessage\"]]],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.pipeline\"],null],false],[10],[0,\"\\n      \"],[4,\"link-to\",[\"pipelines.detail\",[23,[\"build\",\"pipeline\",\"id\"]]],null,{\"statements\":[[1,[23,[\"build\",\"pipeline\",\"displayName\"]],false]],\"parameters\":[]},null],[0,\"  \\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.repository\"],null],false],[10],[0,\"\\n      \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"build\",\"displayRepositoryUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[23,[\"build\",\"displayRepositoryUrl\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.branch\"],null],false],[10],[0,\"\\n      \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"build\",\"branchUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[23,[\"build\",\"branch\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.commit\"],null],false],[10],[0,\"\\n      \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"build\",\"commitUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[23,[\"build\",\"shortCommit\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.triggered\"],null],false],[10],[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",[27,\"date-str\",[[23,[\"build\",\"startedTimeStamp\"]]],null],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"pl-5\"],[9],[0,\"\\n          \"],[1,[27,\"date-from-now\",[[23,[\"build\",\"startedTimeStamp\"]]],null],false],[0,\"\\n        \"],[10]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"buildDetailPage.duration\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"build\",\"duration\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"date-duration\",[[23,[\"build\",\"duration\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"buildDetailPage.stillRunning\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"build\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"accordion-list\",null,[[\"expandAll\"],[true]],{\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandOnInit\",\"expandAll\",\"expand\"],[[27,\"t\",[\"buildDetailPage.log.title\"],null],[27,\"t\",[\"buildDetailPage.log.detail\"],null],true,[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"build-log\",null,[[\"activity\"],[[23,[\"build\"]]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/build-detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/build-log/component", ["exports", "shared/utils/pipeline-constants", "pipeline/components/build-log/template"], function (_exports, _pipelineConstants, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    activity: null,
    fullscreen: false,
    logIndex: {
      stageIndex: -1,
      stepIndex: -1
    },
    init: function init() {
      this._super.apply(this, arguments);

      if (Ember.get(this, 'activity.executionState') === _pipelineConstants.default.STATES.WAITING) {
        this.showLogsActivity(-1, -1);
      } else {
        this.showLogsActivity(0, 0);
      }

      this.currentStepDidChange();
    },
    actions: {
      logKeyChanged: function logKeyChanged(stageIndex, stepIndex) {
        this.showLogsActivity(stageIndex, stepIndex);
      },
      toggleLogMode: function toggleLogMode() {
        Ember.set(this, 'fullscreen', !Ember.get(this, 'fullscreen'));
      }
    },
    currentStepDidChange: Ember.observer('activity.stages.@each.state', function () {
      var stages = Ember.get(this, 'activity.stages');
      var runningStage = stages.findIndex(function (ele) {
        return ele.state === _pipelineConstants.default.STATES.BUILDING;
      });

      if (runningStage === -1) {
        var waitingStage = stages.findIndex(function (ele) {
          return ele.state === _pipelineConstants.default.STATES.WAITING;
        });

        if (waitingStage === 0) {
          this.showLogsActivity(-1, -1);
        }

        return;
      }

      var runningStep = stages[runningStage].steps.findIndex(function (ele) {
        return ele.state === _pipelineConstants.default.STATES.BUILDING;
      });

      if (runningStep === -1) {
        return;
      }

      this.showLogsActivity(runningStage, runningStep);
    }),
    showLogsActivity: function showLogsActivity(stageIndex, stepIndex) {
      Ember.setProperties(Ember.get(this, 'logIndex'), {
        stageIndex: stageIndex,
        stepIndex: stepIndex
      });
    }
  });

  _exports.default = _default;
});
define("pipeline/components/build-log/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FmLJyU8D",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"fullscreen\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"col span-4 sticky\"],[9],[0,\"\\n      \"],[1,[27,\"build-stages\",null,[[\"stageInfo\",\"body\",\"stageIndexLog\",\"stepIndexLog\",\"logKeyChanged\",\"activity\",\"sortBy\",\"bulkActions\",\"search\",\"paging\",\"showHost\",\"showInstanceState\",\"groupByKey\",\"groupByRef\"],[[23,[\"activity\",\"pipelineConfig\",\"stages\"]],[23,[\"activity\",\"stages\"]],[23,[\"logIndex\",\"stageIndex\"]],[23,[\"logIndex\",\"stepIndex\"]],[27,\"action\",[[22,0,[]],\"logKeyChanged\"],null],[23,[\"activity\"]],[23,[\"sortBy\"]],true,true,true,true,false,[23,[\"groupBy\"]],\"stack\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[[27,\"if\",[[23,[\"fullscreen\"]],\"col span-12 pull-right\",\"col span-8 pull-right\"],null],\" inline-block\"]]],[9],[0,\"\\n    \"],[1,[27,\"log-view\",null,[[\"activity\",\"logIndex\",\"toggleLogMode\"],[[23,[\"activity\"]],[23,[\"logIndex\"]],[27,\"action\",[[22,0,[]],\"toggleLogMode\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/build-log/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/build-stage/component", ["exports", "shared/utils/pipeline-constants"], function (_exports, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.STATUS_INTL_KEY = void 0;
  var STATUS_INTL_KEY = 'accordionRow.status';
  _exports.STATUS_INTL_KEY = STATUS_INTL_KEY;

  var _default = Ember.Component.extend({
    name: null,
    title: null,
    detail: null,
    status: null,
    statusClass: null,
    activity: null,
    classNames: ['accordion'],
    expanded: false,
    expandAll: false,
    intent: null,
    actions: {
      showLogs: function showLogs(stageIndex, stepIndex) {
        if (!Ember.get(this, 'notRun')) {
          if (this.logKeyChanged) {
            this.logKeyChanged(stageIndex, stepIndex);
          }
        }
      }
    },
    index: Ember.computed('stageIndex', function () {
      return Ember.get(this, 'stageIndex') + 1;
    }),
    notRun: Ember.computed('activity.executionState', 'status', function () {
      return Ember.get(this, 'activity.executionState') === _pipelineConstants.default.STATES.FAILED && !Ember.get(this, 'status');
    }),
    waiting: Ember.computed('status', function () {
      return Ember.get(this, 'status') === _pipelineConstants.default.STATES.WAITING || !Ember.get(this, 'status');
    }),
    building: Ember.computed('status', function () {
      return Ember.get(this, 'status') === _pipelineConstants.default.STATES.BUILDING;
    }),
    expdObserver: Ember.on('init', Ember.observer('expanded', function () {
      if (Ember.get(this, 'expanded') && !Ember.get(this, 'intent')) {
        Ember.set(this, 'intent', Ember.get(this, 'componentName'));
      }
    })),
    expandAllObserver: Ember.on('init', Ember.observer('expandAll', function () {
      var ea = Ember.get(this, 'expandAll');

      if (ea) {
        Ember.set(this, 'expanded', true);
      } else {
        Ember.set(this, 'expanded', false);
      }
    }))
  });

  _exports.default = _default;
});
define("pipeline/components/build-stage/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wlDFTGnJ",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"accordion-header header-pipeline \",[27,\"if\",[[23,[\"statusClass\"]],[23,[\"statusClass\"]],\"Waiting\"],null]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"expand\"],[11,\"style\",\"padding-top: 20px;color:white !important;\"],[9],[1,[21,\"index\"],false],[3,\"action\",[[22,0,[]],\"showLogs\",[23,[\"stageIndex\"]],[23,[\"stepIndex\"]]]],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"title\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-cell\"],[9],[1,[21,\"title\"],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"notRun\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-cell\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon\"],[12,\"class\",[27,\"pipeline-status-to-icon\",[[23,[\"status\"]]],null]],[9],[10],[0,\" \\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-cell\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon\"],[12,\"class\",[27,\"pipeline-status-to-icon\",[[23,[\"status\"]]],null]],[9],[10],[0,\" \"],[1,[21,\"status\"],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[3,\"action\",[[22,0,[]],\"showLogs\",[23,[\"stageIndex\"]],[23,[\"stepIndex\"]]]],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"not\",[[23,[\"waiting\"]]],null],[27,\"not\",[[23,[\"building\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"badge-state\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-history\"],[9],[10],[0,\" \"],[1,[21,\"duration\"],false],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"showLogs\",[23,[\"stageIndex\"]],[23,[\"stepIndex\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"accordion-content content-pipeline \",[27,\"unless\",[[23,[\"expanded\"]],\"hide\"],null]]]],[9],[0,\"\\n  \"],[14,1,[[22,0,[]]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/build-stage/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/build-stages/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    prefs: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    stickyHeader: false,
    activity: null,
    sortBy: 'name',
    body: null,
    // actions: {
    //   sendAction(model, action) {
    //     return model.send(action)
    //   },
    // },
    filtered: Ember.computed('body', function () {
      return Ember.get(this, 'body');
    }),
    expandFn: function expandFn() {}
  });

  _exports.default = _default;
});
define("pipeline/components/build-stages/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hDhc7j6E",
    "block": "{\"symbols\":[\"stage\",\"stageIndex\",\"parent\",\"step\",\"stepIndex\"],\"statements\":[[4,\"each\",[[23,[\"filtered\"]]],null,{\"statements\":[[4,\"build-stage\",null,[[\"title\",\"status\",\"date\",\"duration\",\"statusClass\",\"stageIndex\",\"stepIndex\",\"activity\",\"logKeyChanged\",\"expandAll\",\"expand\",\"componentName\"],[[27,\"pipeline-stages-info\",[[23,[\"stageInfo\"]],[22,2,[]],false,\"name\"],null],[22,1,[\"state\"]],[27,\"date-str\",[[22,1,[\"started\"]]],null],[27,\"date-duration\",[[22,1,[\"ended\"]],[22,1,[\"started\"]]],null],[22,1,[\"state\"]],[22,2,[]],0,[23,[\"activity\"]],[23,[\"logKeyChanged\"]],true,[27,\"action\",[[22,0,[]],[23,[\"expandFn\"]]],null],\"pipeline-history-table\"]],{\"statements\":[[4,\"each\",[[22,1,[\"steps\"]]],null,{\"statements\":[[4,\"build-step\",null,[[\"activity\",\"step\",\"stageInfo\",\"stageIndex\",\"stepIndex\",\"stageIndexLog\",\"stepIndexLog\",\"logKeyChanged\"],[[23,[\"activity\"]],[22,4,[]],[23,[\"stageInfo\"]],[22,2,[]],[22,5,[]],[23,[\"stageIndexLog\"]],[23,[\"stepIndexLog\"]],[23,[\"logKeyChanged\"]]]],{\"statements\":[],\"parameters\":[]},null]],\"parameters\":[4,5]},null]],\"parameters\":[3]},null]],\"parameters\":[1,2]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/build-stages/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/build-step/component", ["exports", "shared/utils/pipeline-constants"], function (_exports, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    dateNow: null,
    dateInterval: null,
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.run.once(function () {
        var interval = window.setInterval(function () {
          Ember.set(_this, 'dateNow', Date.now());
        }, 1000);
        Ember.set(_this, 'dateInterval', interval);
      });
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);

      var interval = Ember.get(this, 'dateInterval');
      interval && window.clearInterval(interval);
    },
    actions: {
      showLogs: function showLogs(stageIndex, stepIndex) {
        if (!Ember.get(this, 'notRun')) {
          if (this.logKeyChanged) {
            this.logKeyChanged(stageIndex, stepIndex);
          }
        }
      }
    },
    waiting: Ember.computed('step.state', function () {
      return Ember.get(this, 'step.state') === _pipelineConstants.default.STATES.WAITING || Ember.get(this, 'step.state') === _pipelineConstants.default.STATES.SKIPPED || !Ember.get(this, 'step.state');
    }),
    building: Ember.computed('step.state', function () {
      return Ember.get(this, 'step.state') === _pipelineConstants.default.STATES.BUILDING;
    }),
    notRun: Ember.computed('activity.executionState', 'step.state', function () {
      return Ember.get(this, 'activity.executionState') === _pipelineConstants.default.STATES.FAILED && !Ember.get(this, 'step.state');
    })
  });

  _exports.default = _default;
});
define("pipeline/components/build-step/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KyfVtYL1",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"accordion-header header-pipeline item pipeline-step mb-10 \",[27,\"if\",[[23,[\"notRun\"]],\"Waiting\",[23,[\"step\",\"state\"]]],null]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"title\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-cell\"],[9],[1,[27,\"pipeline-stages-info\",[[23,[\"stageInfo\"]],[23,[\"stageIndex\"]],[23,[\"stepIndex\"]],true],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-cell\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon\"],[12,\"class\",[27,\"pipeline-status-to-icon\",[[23,[\"step\",\"state\"]]],null]],[9],[10],[0,\" \\n\"],[4,\"unless\",[[23,[\"notRun\"]]],null,{\"statements\":[[0,\"        \"],[1,[23,[\"step\",\"state\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"waiting\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"badge-state\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-history\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"step\",\"state\"]],\"Building\"],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"date-duration\",[[23,[\"dateNow\"]],[23,[\"step\",\"started\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"date-duration\",[[23,[\"step\",\"ended\"]],[23,[\"step\",\"started\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"i\"],[11,\"role\",\"button\"],[12,\"class\",[28,[\"icon icon-play eased btn text-small p-10 icon-rotate-180 \",[27,\"if\",[[27,\"eq\",[[23,[\"stageIndexLog\"]],[23,[\"stageIndex\"]]],null],[27,\"if\",[[27,\"eq\",[[23,[\"stepIndexLog\"]],[23,[\"stepIndex\"]]],null],\"\",\"hide\"],null],\"hide\"],null]]]],[11,\"style\",\"position: absolute;top: 2px;right: -32px;color: #3d3d3d !important;font-size: 20px;\"],[9],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"showLogs\",[23,[\"stageIndex\"]],[23,[\"stepIndex\"]]]],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/build-step/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/catalog-box/component", "pipeline/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "pipeline/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "pipeline/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "pipeline/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "pipeline/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "pipeline/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "pipeline/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "pipeline/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "pipeline/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "pipeline/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "pipeline/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "pipeline/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "pipeline/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "pipeline/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "pipeline/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "pipeline/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "pipeline/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "pipeline/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "pipeline/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "pipeline/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "pipeline/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "pipeline/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "pipeline/components/confirm-delete/component");
define("pipeline/components/confirm-update-config/component", ["exports", "ui/mixins/modal-base", "pipeline/components/confirm-update-config/template", "ui/utils/constants"], function (_exports, _modalBase, _template, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    modal: Ember.inject.service(),
    prefs: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal'],
    push: null,
    download: Ember.computed.alias('modalService.modalOpts.download'),
    pushToRepo: Ember.computed.alias('modalService.modalOpts.pushToRepo'),
    cancel: Ember.computed.alias('modalService.modalOpts.cancel'),
    branches: Ember.computed.alias('modalService.modalOpts.updatedBranch'),
    init: function init() {
      this._super.apply(this, arguments);

      var pushToRepo = Ember.get(this, "prefs.".concat(_constants.default.PREFS.PUSH_TO_REPO));

      if (pushToRepo === undefined) {
        pushToRepo = true;
      }

      Ember.set(this, 'push', !!pushToRepo);
    },
    actions: {
      save: function save() {
        if (Ember.get(this, 'push')) {
          this.pushToRepo();
        } else {
          this.download();
        }

        Ember.get(this, 'modal').toggleModal();
      },
      cancel: function cancel() {
        this.cancel();
        Ember.get(this, 'modal').toggleModal();
      }
    },
    pushDidChange: Ember.observer('push', function () {
      Ember.set(this, "prefs.".concat(_constants.default.PREFS.PUSH_TO_REPO), Ember.get(this, 'push'));
    })
  });

  _exports.default = _default;
});
define("pipeline/components/confirm-update-config/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5FnlP8Mo",
    "block": "{\"symbols\":[\"branch\"],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"editPipelineConfig.header\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"push\"]],true]]],false],[0,\" \"],[1,[27,\"t\",[\"editPipelineConfig.pushToReop\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"push\"]],false]]],false],[0,\" \"],[1,[27,\"t\",[\"editPipelineConfig.download\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container-header-text display-name\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"branches\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.branch\"],null],false],[0,\": \"],[1,[22,1,[]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[\"generic.confirm\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/confirm-update-config/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/container-shell/component", "pipeline/components/container-shell/component");
define.alias("shared/components/containers-header/component", "pipeline/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "pipeline/components/copy-button");
define.alias("shared/components/copy-inline/component", "pipeline/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "pipeline/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "pipeline/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "pipeline/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "pipeline/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "pipeline/components/cru-cluster/component");
define.alias("shared/components/cru-node-pools/component", "pipeline/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "pipeline/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "pipeline/components/custom-catalog/component");
define("pipeline/components/draggable-object-target", ["exports", "ember-drag-drop/components/draggable-object-target"], function (_exports, _draggableObjectTarget) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _draggableObjectTarget.default;
  _exports.default = _default;
});
define("pipeline/components/draggable-object", ["exports", "ember-drag-drop/components/draggable-object"], function (_exports, _draggableObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _draggableObject.default;
  _exports.default = _default;
});
define("pipeline/components/edit-pipeline-config/component", ["exports", "shared/utils/download-files"], function (_exports, _downloadFiles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    growl: Ember.inject.service(),
    intl: Ember.inject.service(),
    router: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    errors: null,
    selectedConfig: null,
    showAdvanced: false,
    pushConfig: true,
    when: null,
    selectedNotification: null,
    notificationEnabled: false,
    pipeline: Ember.computed.alias('model.pipelineConfig'),
    selectedBranch: Ember.computed.alias('pipeline.selectedBranch'),
    actions: {
      save: function save(success) {
        var _this = this;

        var pipeline = Ember.get(this, 'model.pipeline').clone();
        var unSyncConfigs = {};
        var updatedBranch = [];
        var key = Ember.get(this, 'selectedBranch');
        var branch = (Ember.get(this, 'pipeline.branches') || []).findBy('branch', key);
        var current;

        if (!this.validateNotification()) {
          success();
          return;
        }

        var selectedNotification = Ember.get(this, 'selectedNotification');
        Ember.set(branch, 'config.notification', selectedNotification);

        if (!Ember.get(branch, 'config') || !Ember.get(branch, 'config.stages') || Ember.get(branch, 'config.stages.length') < 2) {
          current = 'null';
        } else {
          var config = Object.assign({}, Ember.get(branch, 'config'));
          Ember.set(config, 'stages', Ember.get(config, 'stages').slice(1));
          current = JSON.stringify(config);
        }

        var originConfigs = JSON.parse(Ember.get(branch, 'rawBranches'));
        var origin = JSON.stringify(originConfigs[key]);

        if (current !== origin) {
          var _config = Object.assign({}, Ember.get(branch, 'config'));

          var stages = Ember.get(_config, 'stages').filter(function (stage) {
            return Ember.get(stage, 'steps') && Ember.get(stage, 'steps.length') && !Ember.get(stage, 'steps.firstObject.sourceCodeConfig');
          });
          var branches = Ember.get(_config, 'branch');
          Ember.set(_config, 'stages', stages);
          Ember.set(_config, 'branch', branches);

          if (Ember.get(_config, 'timeout')) {
            Ember.set(_config, 'timeout', parseInt(Ember.get(_config, 'timeout'), 10));
          }

          unSyncConfigs[key] = _config;
          updatedBranch.push(key);
        }

        Ember.set(pipeline, 'unSyncConfigs', unSyncConfigs);

        if (Ember.get(updatedBranch, 'length')) {
          Ember.get(this, 'modalService').toggleModal('confirm-update-config', {
            updatedBranch: updatedBranch,
            pushToRepo: function pushToRepo() {
              _this.submit(pipeline, success, true);
            },
            download: function download() {
              _this.download(pipeline, success);
            },
            cancel: function cancel() {
              success(false);
            }
          });
        } else {
          this.submit(pipeline, success);
        }
      },
      cancel: function cancel() {
        Ember.get(this, 'router').transitionTo('authenticated.project.pipeline.pipelines');
      },
      select: function select(branch) {
        Ember.set(this, 'selectedBranch', Ember.get(branch, 'branch'));
      },
      enableBranch: function enableBranch() {
        var branch = (Ember.get(this, 'pipeline.branches') || []).findBy('branch', Ember.get(this, 'selectedBranch'));
        Ember.set(branch, 'config', {
          stages: [{
            name: 'clone',
            steps: [{
              sourceCodeConfig: {}
            }]
          }],
          timeout: 60
        });
        this.branchDidChange();
      }
    },
    whenDidChange: Ember.observer('when', function () {
      var branches = Ember.get(this, 'when.branch');

      if (Ember.get(this, 'selectedConfig')) {
        if (!Ember.get(this, 'selectedConfig.branch') && Object.keys(branches).length === 0) {
          return;
        }

        Ember.set(this, 'selectedConfig.branch', branches);
      }
    }),
    selectedConfigDidChange: Ember.observer('selectedConfig', function () {
      var _this2 = this;

      Ember.set(this, 'showAdvanced', false);
      var branches = Ember.get(this, 'selectedConfig.branch') || {};
      var defaultNotification = {
        recipients: []
      };
      var notification = Ember.get(this, 'selectedConfig.notification');

      if (!notification) {
        notification = defaultNotification;
        Ember.set(this, 'selectedConfig.notification', notification);
      }

      if (Ember.get(this, 'selectedConfig')) {
        Ember.setProperties(this, {
          when: {
            branch: branches
          },
          selectedNotification: notification
        });
        Ember.run.next(function () {
          Ember.set(_this2, 'showAdvanced', true);
        });
      }
    }),
    branchDidChange: Ember.observer('pipeline.branches.@each.config', 'selectedBranch', function () {
      var branch = (Ember.get(this, 'pipeline.branches') || []).findBy('branch', Ember.get(this, 'selectedBranch'));

      if (!branch) {
        return;
      }

      if (!Ember.get(branch, 'config')) {
        Ember.set(branch, 'config', {});
      }

      if (!Ember.get(branch, 'config.stages')) {
        Ember.set(branch, 'config.stages', []);
      }

      Ember.set(this, 'selectedConfig', Ember.get(branch, 'config'));
    }),
    validateNotification: function validateNotification() {
      var notificationEnabled = Ember.get(this, 'notificationEnabled');

      if (!notificationEnabled) {
        return true;
      }

      var errors = [];
      var intl = Ember.get(this, 'intl');
      Ember.set(this, 'errors', []);
      var selectedNotification = Ember.get(this, 'selectedNotification');
      var _selectedNotification = selectedNotification.condition,
          condition = _selectedNotification === void 0 ? [] : _selectedNotification,
          _selectedNotification2 = selectedNotification.recipients,
          recipients = _selectedNotification2 === void 0 ? [] : _selectedNotification2;
      var recipientsError = intl.t('pipelineNotification.recipients.required');
      var conditionError = intl.t('pipelineNotification.condition.required');

      if (condition.length > 0) {
        var _recipients$ = recipients[0],
            notifier = _recipients$.notifier,
            recipient = _recipients$.recipient;

        if (!notifier || !recipient) {
          errors.pushObject(recipientsError);
        }
      }

      if (condition.length === 0) {
        var _recipients$2 = recipients[0],
            _notifier = _recipients$2.notifier,
            _recipient = _recipients$2.recipient;

        if (_notifier || _recipient) {
          errors.pushObject(conditionError);
        } else {
          errors.pushObjects([recipientsError, conditionError]);
        }
      }

      Ember.set(this, 'errors', errors);
      return errors.length === 0 ? true : false;
    },
    download: function download(pipeline, success) {
      var _this3 = this;

      var unSyncConfigs = Ember.get(pipeline, 'unSyncConfigs');
      Ember.get(this, 'store').rawRequest({
        url: "".concat(Ember.get(pipeline, 'links.yaml'), "?configs=").concat(JSON.stringify(unSyncConfigs)),
        method: 'GET'
      }).then(function (res) {
        var data = JSON.parse(res.body);
        var files = [];
        Object.keys(data).forEach(function (key) {
          files.push({
            name: "".concat(key, ".yml"),
            file: data[key]
          });
        });

        if (files.length > 1) {
          (0, _downloadFiles.generateZip)(files).then(function (zip) {
            (0, _downloadFiles.downloadFile)("rancher-pipeline.zip", zip, Ember.get(zip, 'type'));
          });
        } else {
          (0, _downloadFiles.downloadFile)(".rancher-pipeline.yml", Ember.get(files, 'firstObject.file'));
        }

        success(true);
        Ember.get(_this3, 'router').transitionTo('authenticated.project.pipeline.pipelines');
      }).catch(function () {
        success(false);
      });
    },
    submit: function submit(pipeline, success) {
      var _this4 = this;

      var pushToRepo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var unSyncConfigs = Ember.get(pipeline, 'unSyncConfigs');

      if (pushToRepo) {
        pipeline.doAction('pushconfig', {
          configs: unSyncConfigs
        }).then(function () {
          success(true);
          Ember.get(_this4, 'router').transitionTo('authenticated.project.pipeline.pipelines');
        }).catch(function () {
          success(false);
        });
      } else {
        success(true);
        Ember.get(this, 'router').transitionTo('authenticated.project.pipeline.pipelines');
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/edit-pipeline-config/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tWHknJjw",
    "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"editPipelineConfig.header\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"steps/step-scm\",null,[[\"errors\",\"pipeline\",\"pipelineId\",\"accounts\"],[[23,[\"errors\"]],[23,[\"pipeline\"]],[23,[\"model\",\"pipeline\",\"id\"]],[23,[\"model\",\"accounts\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[27,\"or\",[[23,[\"pipeline\",\"loading\"]],[23,[\"pipeline\",\"branches\",\"length\"]]],null]],null,{\"statements\":[[0,\"  \"],[7,\"hr\"],[11,\"class\",\"mt-30 mb-30\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"pipeline\",\"loading\"]]],null,{\"statements\":[[0,\"      \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"pipeline\",\"url\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row mb-20\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"generic.branch\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"searchable-select\",null,[[\"optionLabelPath\",\"optionValuePath\",\"value\",\"customLabel\",\"content\"],[\"branch\",\"branch\",[23,[\"selectedBranch\"]],true,[23,[\"pipeline\",\"branches\"]]]],{\"statements\":[[0,\"            \"],[7,\"div\"],[12,\"class\",[28,[[22,1,[\"stateColor\"]]]]],[9],[0,\"\\n              \"],[1,[22,1,[\"branch\"]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"newPipeline.steps.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"section\"],[11,\"class\",\"pipeline-container\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"selectedConfig\",\"stages\",\"length\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"pipeline-stages\",null,[[\"projectDockerCredentials\",\"pipeline\",\"selectedConfig\",\"accounts\",\"model\",\"editable\",\"editMode\",\"saved\"],[[23,[\"model\",\"projectDockerCredentials\"]],[23,[\"pipeline\"]],[23,[\"selectedConfig\"]],[23,[\"model\",\"accounts\"]],[23,[\"model\"]],true,\"new\",[23,[\"saved\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"banner bg-warning\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"banner-icon\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"icon icon-info\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"banner-message\"],[9],[0,\"\\n                \"],[7,\"p\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.noYaml\"],[[\"htmlSafe\"],[true]]],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-edit\"],[9],[10],[0,\"\\n              \"],[1,[27,\"t\",[\"newPipelineStep.stepType.enableBranch\"],null],false],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"enableBranch\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n        \"],[1,[27,\"pipeline-notifier\",null,[[\"config\",\"notificationEnabled\"],[[23,[\"selectedNotification\"]],[23,[\"notificationEnabled\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"showAdvanced\"]]],null,{\"statements\":[[4,\"advanced-section\",null,null,{\"statements\":[[0,\"          \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"branchOnly\",\"config\"],[\"pipeline\",true,[23,[\"when\"]]]]],false],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"acc-label pb-5 pt-10\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"editPipelineConfig.timeout.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"box col span-6\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"value\"],[\"form-control\",[23,[\"selectedConfig\",\"timeout\"]]]]],false],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                  \"],[1,[27,\"t\",[\"generic.minutes\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"editPipelineConfig.timeout.helpText\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[27,\"not\",[[23,[\"pipeline\",\"loading\"]]],null],[27,\"not\",[[23,[\"pipeline\",\"branches\",\"length\"]]],null]],null]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.noBranch\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"mt-30 mb-30\"],[9],[10],[0,\"\\n\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"text-center pipeline-wrap-header-button\"],[9],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"class\",\"saveDisabled\",\"createLabel\",\"save\",\"cancel\"],[\"pipeline-save-cancel\",[27,\"or\",[[23,[\"pipeline\",\"loading\"]],[27,\"not\",[[23,[\"pipeline\",\"branches\",\"length\"]]],null]],null],\"generic.done\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/edit-pipeline-config/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("ember-flatpickr/components/ember-flatpickr", "pipeline/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "pipeline/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "pipeline/components/empty-table/component");
define("pipeline/components/enable-repositories/component", ["exports", "shared/utils/pipeline-constants"], function (_exports, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var headers = [{
    translationKey: 'repositories.table.repository',
    name: 'url',
    sort: ['url']
  }, {
    width: 200
  }];

  var _default = Ember.Component.extend({
    growl: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    router: Ember.inject.service(),
    providerService: Ember.inject.service('pipeline-github'),
    repositories: null,
    headers: headers,
    errors: null,
    authorizing: false,
    loggingout: false,
    refreshing: false,
    filteredRepositories: null,
    sortBy: 'url',
    accounts: Ember.computed.alias('model.accounts'),
    pipeline: Ember.computed.alias('model.pipeline'),
    pipelines: Ember.computed.alias('model.pipelines'),
    providers: Ember.computed.alias('model.providers'),
    canConfig: Ember.computed.alias('model.canConfig'),
    init: function init() {
      this._super.apply(this, arguments);

      if (Ember.get(this, 'accountsInfo')) {
        Ember.set(this, 'repositories', Ember.get(this, 'model.repositories'));
      } else {
        this.initDemoRepo();
      }

      this.repositoriesDidChange();
    },
    actions: {
      logout: function logout() {
        var _this = this;

        Ember.set(this, 'loggingout', true);
        Ember.get(this, 'accountsInfo').doAction('logout').then(function () {
          Ember.set(_this, 'accountsInfo', null);

          _this.initDemoRepo();
        }).finally(function () {
          Ember.set(_this, 'loggingout', false);
        });
      },
      refresh: function refresh() {
        var _this2 = this;

        Ember.set(this, 'refreshing', true);
        Ember.get(this, 'accountsInfo').doAction('refreshrepos').then(function (res) {
          Ember.set(_this2, 'repositories', res.content);
        }).finally(function () {
          Ember.set(_this2, 'refreshing', false);
        });
      },
      authorize: function authorize() {
        var _this3 = this;

        var provider = Ember.get(this, 'providers.firstObject');

        if (!provider) {
          Ember.get(this, 'modalService').toggleModal('modal-pipeline-enable', {
            canConfig: Ember.get(this, 'canConfig'),
            escToClose: true
          });
          return;
        }

        Ember.set(this, 'authorizing', true);

        if (Ember.get(provider, 'type') === 'bitbucketServerProvider') {
          provider.doAction('requestLogin', {}).then(function (res) {
            var url = Ember.get(res, 'loginUrl');
            Ember.get(_this3, 'providerService').authorizeTest(url, function () {
              var code = url.slice(url.lastIndexOf('=') + 1);

              _this3.doLogin(provider, code);
            }, true);
          });
        } else {
          Ember.get(this, 'providerService').authorizeTest(provider.redirectUrl, function (err, code) {
            if (err) {
              _this3.showErrors(err);

              Ember.set(_this3, 'authorizing', false);
            } else {
              _this3.doLogin(provider, code);
            }
          });
        }
      },
      cancel: function cancel() {
        Ember.get(this, 'router').transitionTo('authenticated.project.pipeline.pipelines');
      }
    },
    repositoriesDidChange: Ember.observer('repositories', 'pipelines.[]', function () {
      var out = [];
      var pipelines = Ember.get(this, 'pipelines');
      var sourceCodeCredentialId = Ember.get(this, 'accountsInfo.id');
      Ember.get(this, 'repositories').forEach(function (repo) {
        out.push(Ember.Object.create({
          isExample: !!repo.isExample,
          url: repo.url,
          pipeline: pipelines.findBy('repositoryUrl', repo.url),
          sourceCodeCredentialId: sourceCodeCredentialId
        }));
      });
      Ember.set(this, 'filteredRepositories', out);
    }),
    principal: Ember.computed('accountsInfo', function () {
      var account = Ember.get(this, 'accountsInfo');

      if (!account) {
        return;
      }

      var profile = Object.assign({}, account);
      profile.name = profile.loginName;
      profile.username = profile.displayName;
      profile.profilePicture = profile.avatarUrl;
      profile.avatarSrc = profile.avatarUrl;
      return profile;
    }),
    accountsInfo: Ember.computed('accounts.@each.logout', function () {
      var accounts = Ember.get(this, 'accounts').filter(function (account) {
        return !account.logout;
      });

      if (Ember.get(accounts, 'length') === 0) {
        return Ember.get(this, 'pipeline.sourceCodeCredential');
      }

      var out = Ember.get(accounts, 'firstObject');
      return out ? out : null;
    }),
    doLogin: function doLogin(provider, code) {
      var _this4 = this;

      provider.doAction('login', {
        code: code
      }).then(function (user) {
        Ember.set(_this4, 'accountsInfo', user);
        user.followLink('sourceCodeRepositories').then(function (repositories) {
          Ember.set(_this4, 'repositories', repositories);
        });
        Ember.set(_this4, 'authorizing', false);
      }).catch(function (err) {
        _this4.showErrors(err);

        Ember.set(_this4, 'authorizing', false);
      });
    },
    showErrors: function showErrors(err) {
      if (err.message) {
        Ember.set(this, 'errors', ["".concat(err.message).concat(err.detail ? "(".concat(err.detail, ")") : '')]);
      } else {
        Ember.set(this, 'errors', ["Error (".concat(err.status, " - ").concat(err.code, ")")]);
      }
    },
    initDemoRepo: function initDemoRepo() {
      Ember.set(this, 'repositories', _pipelineConstants.default.DEMO_REPOSITORIES.map(function (repo) {
        return Ember.Object.create({
          url: repo.url,
          isExample: true
        });
      }));
    }
  });

  _exports.default = _default;
});
define("pipeline/components/enable-repositories/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MqUBmrzR",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"row\",\"dt\",\"sortable\",\"kind\",\"row\",\"dt\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[1,[27,\"t\",[\"repositories.header\"],null],false],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"accountsInfo\"]]],null,{\"statements\":[[4,\"sortable-table\",null,[[\"tableClassNames\",\"bulkActions\",\"rowActions\",\"leftActions\",\"paging\",\"search\",\"sortBy\",\"suffix\",\"headers\",\"body\"],[\"bordered mt-30\",false,false,true,false,true,[23,[\"sortBy\"]],true,[23,[\"headers\"]],[23,[\"filteredRepositories\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,6,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"repository-row\",null,[[\"row\"],[[22,7,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,6,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,5,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"repositories.table.noMatch\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,6,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,5,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"repositories.table.noData\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,6,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,5,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"repositories.table.noData\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,6,[]],\"left-actions\"],null]],null,{\"statements\":[[4,\"if\",[[23,[\"refreshing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-default btn-disabled\"],[11,\"href\",\"#\"],[11,\"onclick\",\"return false;\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.refresh\"],null],false],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-primary\"],[11,\"href\",\"#\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"refresh\"],null]],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.refresh\"],null],false],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-refresh\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"loggingout\"]]],null,{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-default btn-disabled\"],[11,\"href\",\"#\"],[11,\"onclick\",\"return false;\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"generic.logout\"],[[\"user\"],[[23,[\"principal\",\"name\"]]]]],false],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-primary\"],[11,\"href\",\"#\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"logout\"],null]],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"generic.logout\"],[[\"user\"],[[23,[\"principal\",\"name\"]]]]],false],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-logout\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[5,6,7,8]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"banner bg-info\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"banner-icon\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-info\"],[9],[10],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"banner-message pt-10 pb-10\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"repositories.message\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"tableClassNames\",\"groupByKey\",\"groupByRef\",\"bulkActions\",\"rowActions\",\"sortBy\",\"paging\",\"search\",\"suffix\",\"headers\",\"body\"],[\"bordered mt-30\",\"isExample\",\"isExample\",false,false,[23,[\"sortBy\"]],false,true,true,[23,[\"headers\"]],[23,[\"filteredRepositories\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"repository-row\",null,[[\"row\"],[[22,3,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[11,\"class\",\"group-row\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"pl-10\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.demoGroup\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"repositories.table.noMatch\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"repositories.table.noData\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"suffix\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tbody\"],[9],[0,\"\\n          \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"style\",\"width:100%;padding:8px 18px;\"],[12,\"disabled\",[21,\"authorizing\"]],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"btn bg-transparent btn-authorize\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"authorizing\"]]],null,{\"statements\":[[0,\"                  \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.authorize\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[7,\"i\"],[11,\"class\",\"icon icon-user\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.authorize\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              \"],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"authorize\"]],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null]],\"parameters\":[]}],[10],[0,\"\\n\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"style\",\"text-align: center\"],[11,\"class\",\"mt-20 text-center\"],[9],[0,\"\\n  \"],[7,\"button\"],[11,\"class\",\"btn bg-primary\"],[9],[1,[27,\"t\",[\"generic.done\"],null],false],[3,\"action\",[[22,0,[]],\"cancel\"]],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/enable-repositories/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/error-sub-row/component", "pipeline/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "pipeline/components/field-required/component");
define.alias("shared/components/form-auth-cloud-credential/component", "pipeline/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "pipeline/components/form-certificate-row/component");
define.alias("shared/components/form-count/component", "pipeline/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "pipeline/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "pipeline/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "pipeline/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "pipeline/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "pipeline/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "pipeline/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "pipeline/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "pipeline/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "pipeline/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "pipeline/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "pipeline/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "pipeline/components/form-members/component");
define.alias("shared/components/form-name-description/component", "pipeline/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "pipeline/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "pipeline/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "pipeline/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "pipeline/components/form-project-targets/component");
define("pipeline/components/form-recipient-item/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    disableRemove: false,
    actions: {
      remove: function remove() {
        if (!Ember.get(this, 'disableRemove')) {
          this.remove(this.model);
        }
      }
    },
    setRecipient: Ember.observer('selectedNotifier', function () {
      var v = Ember.get(this, 'selectedNotifier.notifierValue');
      Ember.set(this, 'model.recipient', v);
    }),
    selectedNotifier: Ember.computed('model.notifier', 'notifiers.[]', function () {
      return Ember.get(this, 'notifiers').filterBy('id', Ember.get(this, 'model.notifier')).get('firstObject');
    }),
    remove: function remove() {
      throw new Error('remove action is required!');
    }
  });

  _exports.default = _default;
});
define("pipeline/components/form-recipient-item/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4Y/XpUFa",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label col span-1-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"if\",[[23,[\"isFirst\"]],[27,\"t\",[\"alertPage.newOrEdit.to\"],null],[27,\"t\",[\"alertPage.newOrEdit.and\"],null]],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-9-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"content\",\"value\",\"optionValuePath\",\"optionLabelPath\",\"placeholder\"],[[23,[\"notifiers\"]],[23,[\"model\",\"notifier\"]],\"id\",\"displayNameAndType\",[27,\"t\",[\"alertPage.newOrEdit.notifierPlaceholder\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col text-center text-centerpt-0 span-3-of-24\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"selectedNotifier\",\"notifierLabel\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"selectedNotifier\",\"notifierLabel\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\" \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-9-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"classNames\",\"placeholder\",\"value\",\"showSearch\"],[\"form-control\",[23,[\"recipientPlaceholder\"]],[23,[\"model\",\"recipient\"]],[23,[\"showSearch\"]]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"help-block text-info text-small\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.recipient.helpText\"],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-1-of-24\"],[11,\"style\",\"padding-top:2px;\"],[9],[0,\"\\n    \"],[7,\"button\"],[12,\"class\",[28,[\"btn bg-link icon-btn \",[27,\"if\",[[23,[\"disableRemove\"]],\"disabled\",\"\"],null]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-minus text-small\"],[9],[10],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"remove\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/form-recipient-item/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/form-reservation/component", "pipeline/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "pipeline/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "pipeline/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "pipeline/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "pipeline/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "pipeline/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "pipeline/components/form-versions/component");
define("pipeline/components/github-setting/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var _default = Ember.Component.extend({
    router: Ember.inject.service(),
    gitService: Ember.inject.service('pipeline-github'),
    oauthType: 'github',
    oauthHost: 'github.com',
    provider: null,
    errors: null,
    useGloableConfig: true,
    githubAuthConfig: null,
    testing: false,
    secure: true,
    isEnterprise: false,
    didReceiveAttrs: function didReceiveAttrs() {
      Ember.setProperties(this, {
        homePageURL: window.location.origin,
        destinationUrl: window.location.origin
      });
    },
    actions: {
      changeOauthSource: function changeOauthSource(useGloableConfig) {
        Ember.set(this, 'useGloableConfig', useGloableConfig);
      },
      githubAuthConfigAuthenticate: function githubAuthConfigAuthenticate() {
        var githubAuthConfig = Ember.get(this, 'githubAuthConfig');
        this.send('authenticate', null, Ember.get(githubAuthConfig, 'clientId'), Ember.get(githubAuthConfig, 'hostName'), Ember.get(githubAuthConfig, 'tls'), true);
      },
      authenticate: function authenticate(cb, client, host, isTls, inheritAuth, callBack) {
        var _this = this;

        var clientId = client || Ember.get(this, 'oauthModel.clientId');
        var hostname = host || Ember.get(this, 'oauthModel.hostName') || Ember.get(this, 'oauthHost');
        var tls = isTls === undefined ? Ember.get(this, 'oauthModel.scheme') : isTls;
        var scheme = tls ? 'https://' : 'http://';
        var authorizeURL = "".concat(scheme).concat(hostname).concat(this.getOauthUrl(clientId));
        Ember.set(this, 'testing', true);
        Ember.get(this, 'gitService').authorizeTest(authorizeURL, function (err, code) {
          if (err) {
            _this.send('gotError', err);

            Ember.set(_this, 'testing', false);

            if (cb) {
              cb();
            }
          } else {
            callBack && callBack(code) || _this.send('gotCode', code, hostname, tls, inheritAuth, cb);
          }
        });
      },
      gotCode: function gotCode(code, hostname, tls, inheritAuth, cb) {
        var _this2 = this;

        var provider = Ember.get(this, 'provider');
        var oauthModel = Ember.get(this, 'oauthModel');
        var param = {
          code: code,
          clientId: oauthModel.clientId,
          clientSecret: oauthModel.clientSecret,
          redirectUrl: "".concat(Ember.get(this, 'destinationUrl'), "/verify-auth"),
          inheritAuth: !!inheritAuth,
          hostname: hostname,
          tls: tls
        };
        provider.doAction('testAndApply', param).then(function () {
          Ember.set(_this2, 'testing', false);

          if (cb) {
            cb();
          }

          Ember.get(_this2, 'router').transitionTo('authenticated.project.pipeline.repositories');
        }).catch(function (res) {
          _this2.send('gotError', res);

          Ember.set(_this2, 'testing', false);

          if (cb) {
            cb();
          }
        });
      },
      gotError: function gotError(err) {
        if (Ember.get(err, 'message')) {
          this.send('showError', Ember.get(err, 'message') + (Ember.get(err, 'detail') ? "(".concat(Ember.get(err, 'detail'), ")") : ''));
        } else if (_typeof(err) === 'object') {
          this.send('showError', "Error (".concat(Ember.get(err, 'status'), " - ").concat(Ember.get(err, 'code'), ")"));
        } else {
          this.send('showError', "Error (".concat(err, ")"));
        }

        Ember.set(this, 'testing', false);
      },
      showError: function showError(msg) {
        Ember.set(this, 'errors', [msg]);
        window.scrollY = 10000;
      }
    },
    enterpriseDidChange: Ember.observer('isEnterprise', 'oauthModel.hostName', 'secure', function () {
      if (Ember.get(this, 'oauthModel.isAuth')) {
        return;
      }

      Ember.run.once(this, 'updateEnterprise');
    }),
    getOauthUrl: function getOauthUrl(clientId) {
      return "/login/oauth/authorize?client_id=".concat(clientId, "&response_type=code&scope=repo+admin%3Arepo_hook");
    },
    updateEnterprise: function updateEnterprise() {
      if (Ember.get(this, 'isEnterprise')) {
        var hostname = Ember.get(this, 'oauthModel.hostName') || '';
        var match = hostname.match(/^http(s)?:\/\//i);

        if (match) {
          Ember.setProperties(this, {
            secure: (match[1] || '').toLowerCase() === 's',
            'oauthModel.hostName': hostname.substr(match[0].length).replace(/\/.*$/, '')
          });
        }
      } else {
        Ember.setProperties(this, {
          secure: true,
          'oauthModel.hostName': null
        });
      }

      Ember.set(this, 'oauthModel.scheme', Ember.get(this, 'secure'));
    }
  });

  _exports.default = _default;
});
define("pipeline/components/github-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tqV+X0gk",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"githubAuthConfig\",\"enabled\"]],[23,[\"useGloableConfig\"]]],null]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[9],[0,\"\\n    \"],[1,[27,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-info\",\"bg-info mb-0 mt-10\",[27,\"t\",[\"pipelinesSetting.userGlobalConfig\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"authPage.authenticated.header.text\"],null],false],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"javascript:void();\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"pipelinesSetting.customConfigChangeLabel\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"changeOauthSource\",false]],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"githubAuthConfig\",\"hostname\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.authenticated.header.enterpriseHostName\"],null],false],[0,\" \"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[1,[23,[\"githubAuthConfig\",\"hostname\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.authenticated.header.clientId.text\"],null],false],[0,\" \"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[1,[23,[\"githubAuthConfig\",\"clientId\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info\"],[9],[1,[27,\"t\",[\"pipelinesSetting.userGlobalConfig\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-primary\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"testing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"authPage.testAuth.buttonText.post\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"i\"],[11,\"class\",\"icon icon-github\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"authPage.testAuth.buttonText.preVariable\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[3,\"action\",[[22,0,[]],\"githubAuthConfigAuthenticate\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"authPage.setup\"],[[\"type\"],[\"Github\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      \"],[7,\"ol\"],[11,\"class\",\"alphalist ml-40\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"authPage.github.auth\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[1,[27,\"t\",[\"authPage.github.enterpriseAuth\"],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"authPage.github.ul.li2.text\"],null],false],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.github.ul.li2.ul.li1\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.github.ul.li2.ul.li2\"],null],false],[10],[0,\" \"],[7,\"span\"],[9],[1,[21,\"homePageURL\"],false],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\",\"htmlSafe\"],[\"small\",[23,[\"homePageURL\"]],true]]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.github.ul.li2.ul.li3\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.github.ul.li2.ul.li4\"],null],false],[10],[0,\"\\n              \"],[7,\"span\"],[11,\"id\",\"auth-callback-url\"],[9],[1,[21,\"destinationUrl\"],false],[0,\" \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[23,[\"destinationUrl\"]]]]],false],[10],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"authPage.github.ul.li3.text\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"form\"],[11,\"autcomplete\",\"on\"],[9],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.form.headerVariable\"],[[\"SCM\"],[\"Github\"]]],false],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.github.form.clientId.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"text\",\"username\",[23,[\"oauthModel\",\"clientId\"]],\"form-control\"]]],false],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[1,[27,\"t\",[\"authPage.github.form.subtextVariable\"],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.github.form.clientSecret.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"password\",\"password\",[23,[\"oauthModel\",\"clientSecret\"]],\"form-control\"]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"isEnterprise\"]]]]],false],[0,\"\\n                \"],[1,[27,\"t\",[\"authPage.form.enterprise.labelText\"],[[\"type\"],[\"github\"]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"],[4,\"liquid-if\",[[23,[\"isEnterprise\"]]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10\"],[9],[0,\"\\n                \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n                  \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"secure\"]]]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.form.isEnterprise.labelText\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"liquid-if\",[[23,[\"isEnterprise\"]]],null,{\"statements\":[[0,\"              \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"authPage.form.enterpriseHost.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n              \"],[10],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"oauthModel\",\"hostName\"]],\"form-control\",[27,\"t\",[\"authPage.form.enterpriseHost.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n        \"],[1,[27,\"save-cancel\",null,[[\"cancelDisabled\",\"savingLabel\",\"createLabel\",\"save\"],[true,\"authPage.testAuth.buttonText.post\",\"authPage.testAuth.buttonText.preVariable\",[27,\"action\",[[22,0,[]],\"authenticate\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/github-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/gitlab-setting/component", ["exports", "pipeline/components/github-setting/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    oauthType: 'gitlab',
    oauthHost: 'gitlab.com',
    getOauthUrl: function getOauthUrl(clientId) {
      return "/oauth/authorize?client_id=".concat(clientId, "&response_type=code");
    }
  });

  _exports.default = _default;
});
define("pipeline/components/gitlab-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WZPZ41B/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"authPage.setup\"],[[\"type\"],[\"GitLab\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"ol\"],[11,\"class\",\"alphalist ml-40\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.gitlab.auth\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[1,[27,\"t\",[\"authPage.gitlab.enterpriseAuth\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.gitlab.ul.li2.text\"],null],false],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.gitlab.ul.li2.ul.li1\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.gitlab.ul.li2.ul.li2\"],null],false],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"id\",\"auth-callback-url\"],[9],[0,\"\\n              \"],[1,[27,\"concat\",[[23,[\"destinationUrl\"]],\"/verify-auth\"],null],false],[0,\" \"],[1,[27,\"copy-to-clipboard\",null,[[\"size\",\"clipboardText\"],[\"small\",[27,\"concat\",[[23,[\"destinationUrl\"]],\"/verify-auth\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.gitlab.ul.li3.text\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"form\"],[11,\"autcomplete\",\"on\"],[9],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.form.headerVariable\"],[[\"SCM\"],[\"GitLab\"]]],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.gitlab.form.clientId.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"text\",\"username\",[23,[\"oauthModel\",\"clientId\"]],\"form-control\"]]],false],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[1,[27,\"t\",[\"authPage.gitlab.form.subtextVariable\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"authPage.gitlab.form.clientSecret.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"name\",\"value\",\"classNames\"],[\"password\",\"password\",[23,[\"oauthModel\",\"clientSecret\"]],\"form-control\"]]],false],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"isEnterprise\"]]]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.form.enterprise.labelText\"],[[\"type\"],[\"gitlab\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"liquid-if\",[[23,[\"isEnterprise\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n                \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"secure\"]]]]],false],[0,\" \"],[1,[27,\"t\",[\"authPage.form.isEnterprise.labelText\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"liquid-if\",[[23,[\"isEnterprise\"]]],null,{\"statements\":[[0,\"            \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"authPage.form.enterpriseHost.labelText\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[23,[\"oauthModel\",\"hostName\"]],\"form-control\",[27,\"t\",[\"authPage.form.enterpriseHost.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n      \"],[1,[27,\"save-cancel\",null,[[\"cancelDisabled\",\"savingLabel\",\"createLabel\",\"save\"],[true,\"authPage.testAuth.buttonText.post\",\"authPage.testAuth.buttonText.preVariable\",[27,\"action\",[[22,0,[]],\"authenticate\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/gitlab-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/gke-access-scope/component", "pipeline/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "pipeline/components/graph-area/component");
define.alias("shared/components/hook-row/component", "pipeline/components/hook-row/component");
define.alias("shared/components/host-pod/component", "pipeline/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "pipeline/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "pipeline/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "pipeline/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "pipeline/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "pipeline/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "pipeline/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "pipeline/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "pipeline/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "pipeline/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "pipeline/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "pipeline/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "pipeline/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "pipeline/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "pipeline/components/illiquid-model");
define.alias("shared/components/input-answer-row/component", "pipeline/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "pipeline/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "pipeline/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "pipeline/components/input-float/component");
define.alias("shared/components/input-identity/component", "pipeline/components/input-identity/component");
define.alias("shared/components/input-int/component", "pipeline/components/input-int/component");
define.alias("shared/components/input-integer/component", "pipeline/components/input-integer/component");
define.alias("shared/components/input-number/component", "pipeline/components/input-number/component");
define.alias("shared/components/input-or-display/component", "pipeline/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "pipeline/components/input-paste/component");
define("pipeline/components/input-registry/component", ["exports", "pipeline/components/input-registry/template", "shared/utils/pipeline-constants"], function (_exports, _template, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    // Inputs
    config: null,
    registries: null,
    // Internal
    invalidRegistry: false,
    registryChoices: null,
    linkToRegistry: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initRegistries();
      Ember.set(this, 'linkToRegistry', "/p/".concat(Ember.get(this, 'scope.currentProject.id'), "/registries/add"));
    },
    registriesDidChange: Ember.observer('registries.[]', function () {
      this.initRegistries();
    }),
    initRegistries: function initRegistries() {
      var out = [];
      Ember.get(this, 'registries').find(function (item) {
        Object.keys(Ember.get(item, 'registries')).forEach(function (registry) {
          if (_pipelineConstants.default.DEFAULT_REGISTRY === registry) {
            out.unshift({
              label: 'Docker Hub',
              value: registry
            });
          } else {
            out.push({
              label: registry,
              value: registry
            });
          }
        });
      });
      Ember.set(this, 'registryChoices', out);

      if (!Ember.get(this, 'config.registry') && out.length) {
        Ember.set(this, 'config.registry', Ember.get(this, 'registryChoices.firstObject.value'));
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/input-registry/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AJ/bEGdD",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10 pb-10\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"config\",\"pushRemote\"]]]]],false],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.build.pushRemote\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"config\",\"pushRemote\"]]],null,{\"statements\":[[0,\"    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"generic.registry\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"class\",\"content\",\"value\"],[\"form-control\",[23,[\"registryChoices\"]],[23,[\"config\",\"registry\"]]]]],false],[0,\"\\n\"],[4,\"unless\",[[23,[\"registryChoices\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"banner bg-warning\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"banner-icon\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-info\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"banner-message\"],[9],[0,\"\\n          \"],[7,\"p\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.build.noRegistry\"],[[\"route\",\"htmlSafe\"],[[23,[\"linkToRegistry\"]],true]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/input-registry/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/input-slider/component", "pipeline/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "pipeline/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "pipeline/components/input-text-file/component");
define.alias("shared/components/input-url/component", "pipeline/components/input-url/component");
define.alias("shared/components/input-yaml/component", "pipeline/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "pipeline/components/ivy-codemirror");
define.alias("shared/components/labels-section/component", "pipeline/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "pipeline/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "pipeline/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "pipeline/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "pipeline/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "pipeline/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "pipeline/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "pipeline/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "pipeline/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "pipeline/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "pipeline/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "pipeline/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "pipeline/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "pipeline/components/liquid-versions");
define("pipeline/components/log-view/component", ["exports", "shared/mixins/throttled-resize", "shared/utils/pipeline-constants"], function (_exports, _throttledResize, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_throttledResize.default, {
    scope: Ember.inject.service(),
    intl: Ember.inject.service(),
    logIndex: null,
    classNames: 'pipeline-log',
    status: 'connecting',
    fullscreen: false,
    socket: null,
    logHeight: 300,
    content: null,
    clean: null,
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.run.next(function () {
        _this.selectedDidChange();
      });
    },
    willDestroyElement: function willDestroyElement() {
      this.disconnect();

      this._super();
    },
    actions: {
      scrollToBottom: function scrollToBottom() {
        this.$('.anchor-bottom')[0].scrollIntoView(false);
      },
      scrollToTop: function scrollToTop() {
        this.$('.anchor-top')[0].scrollIntoView(true);
      },
      toggleLogMode: function toggleLogMode() {
        if (this.toggleLogMode) {
          this.toggleLogMode();
        }

        Ember.set(this, 'fullscreen', !Ember.get(this, 'fullscreen'));
      }
    },
    selectedDidChange: Ember.observer('logIndex.{stageIndex,stepIndex}', function () {
      this.disconnect();
      this.connect();
    }),
    getDefaultLog: function getDefaultLog() {
      var intl = Ember.get(this, 'intl');
      var stageIndex = Ember.get(this, 'logIndex.stageIndex');
      var defaultMessage = intl.t('buildDetailPage.log.waiting');
      var condition = Ember.get(this, 'activity.conditions.firstObject');

      if (condition && condition.message) {
        defaultMessage = condition.message;
      }

      if (stageIndex === -1) {
        return defaultMessage;
      }

      var stepIndex = Ember.get(this, 'logIndex.stepIndex');
      var stages = Ember.get(this, 'activity.stages');
      var step = stages[stageIndex].steps[stepIndex];

      if (step && step.state !== _pipelineConstants.default.STATES.WAITING) {
        return intl.t('buildDetailPage.log.loading');
      } else {
        return intl.t('buildDetailPage.log.waiting');
      }
    },
    connect: function connect() {
      var _this2 = this;

      var body = this.$('.log-body')[0];
      var $body = $(body); // eslint-disable-line

      $body.empty();
      body.insertAdjacentHTML('beforeend', this.getDefaultLog());
      Ember.set(this, 'clean', false);
      var stageIndex = Ember.get(this, 'logIndex.stageIndex');
      var stepIndex = Ember.get(this, 'logIndex.stepIndex');
      var activity = Ember.get(this, 'activity');

      if (!activity || stageIndex === -1 || stepIndex === -1) {
        return;
      }

      var scheme = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
      var url = "".concat(scheme).concat(window.location.host, "/v3/projects/").concat(Ember.get(this, 'scope.currentProject.id'), "/pipelineExecutions/").concat(activity.id, "/log?stage=").concat(stageIndex, "&step=").concat(stepIndex);
      var socket = new WebSocket(url);
      Ember.set(this, 'socket', socket);
      Ember.set(this, 'status', 'initializing');

      socket.onopen = function () {
        Ember.set(_this2, 'status', 'connected');
      };

      socket.onmessage = function (message) {
        if (!Ember.get(_this2, 'clean')) {
          Ember.set(_this2, 'clean', true);
          $body.empty();
        }

        var isFollow = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
        Ember.set(_this2, 'status', 'connected');
        body.insertAdjacentHTML('beforeend', message.data);

        if (isFollow) {
          Ember.run.next(function () {
            _this2.send('scrollToBottom');
          });
        }
      };

      socket.onclose = function () {
        if (_this2.isDestroyed || _this2.isDestroying) {
          return;
        }

        Ember.set(_this2, 'status', 'disconnected');
      };
    },
    disconnect: function disconnect() {
      Ember.set(this, 'status', 'closed');
      var socket = Ember.get(this, 'socket');

      if (socket) {
        socket.close();
        Ember.set(this, 'socket', null);
      }
    },
    onResize: function onResize() {
      var amount = Ember.get(this, 'activity.amount');
      this.$('.log-body').css('min-height', Math.max($(window).height() - Ember.get(this, 'logHeight')) + 'px'); // eslint-disable-line

      if (amount) {
        this.$('.log-body').css('min-height', "".concat((amount.countStep + amount.countStage) * 82, "px"));
      }
    },
    toggleLogMode: function toggleLogMode() {
      throw new Error('toggleLogMode action is required!');
    }
  });

  _exports.default = _default;
});
define("pipeline/components/log-view/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c7LG85h/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"anchor-top\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"log-actions\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"btn-group btn-group-xs p-0\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn btn-xs\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"fullscreen\"]]],null,{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-chevron-end icon-fw\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"i\"],[11,\"class\",\"icon icon-chevron-beginning icon-fw\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[3,\"action\",[[22,0,[]],\"toggleLogMode\"]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn btn-xs\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-chevron-up icon-fw\"],[9],[10],[3,\"action\",[[22,0,[]],\"scrollToTop\"]],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"style\",\"margin-left: -1px;\"],[11,\"class\",\"btn btn-xs\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-chevron-down icon-fw\"],[9],[10],[3,\"action\",[[22,0,[]],\"scrollToBottom\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"log-body\"],[11,\"style\",\"margin:0; font-size: 80%; color: whitesmoke;margin-top: -24px;\"],[9],[10],[0,\"\"],[7,\"div\"],[11,\"class\",\"anchor-bottom\"],[9],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/log-view/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/marked-down/component", "pipeline/components/marked-down/component");
define.alias("shared/components/metrics-action/component", "pipeline/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "pipeline/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "pipeline/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "pipeline/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "pipeline/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "pipeline/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "pipeline/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "pipeline/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "pipeline/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "pipeline/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "pipeline/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "pipeline/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "pipeline/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "pipeline/components/modal-move-namespace/component");
define("pipeline/components/modal-pipeline-enable/component", ["exports", "shared/mixins/modal-base", "pipeline/components/modal-pipeline-enable/template"], function (_exports, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    router: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal', 'alert'],
    canConfig: Ember.computed.alias('modalService.modalOpts.canConfig'),
    actions: {
      save: function save() {
        Ember.get(this, 'router').transitionTo('authenticated.project.pipeline.settings');
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-enable/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1751BJrR",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"enablePipeline.header\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"canConfig\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"enablePipeline.helpText\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[\"enablePipeline.configNow\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"enablePipeline.noPermission\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"generic.cancel\"],null],false],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"cancel\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-enable/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-new-stage/component", ["exports", "shared/mixins/new-or-edit", "shared/mixins/modal-base", "pipeline/components/modal-pipeline-new-stage/template"], function (_exports, _newOrEdit, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, _newOrEdit.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    classNames: ['large-modal', 'alert'],
    model: null,
    errors: [],
    editing: false,
    modalOpts: Ember.computed.alias('modalService.modalOpts'),
    primaryResource: Ember.computed.alias('originalModel'),
    init: function init() {
      this._super.apply(this, arguments);

      var stage = Ember.get(this, 'modalOpts.stage');

      if (stage) {
        Ember.setProperties(this, {
          model: stage,
          editing: true
        });
      } else {
        Ember.set(this, 'model', {
          id: null,
          name: null,
          steps: [],
          when: null
        });
      }
    },
    actions: {
      save: function save(cb) {
        if (!Ember.get(this, 'model.name') || Ember.get(this, 'model.name').trim() === '') {
          Ember.set(this, 'errors', [Ember.get(this, 'intl').t('newPipelineStage.errors.name.required')]);
          cb();
          return;
        }

        Ember.get(this, 'modalOpts').save(Ember.get(this, 'model'));
      },
      remove: function remove() {
        Ember.get(this, 'modalOpts').remove();
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-new-stage/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c6vUVRNv",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"inline-block\"],[9],[0,\"\\n    \"],[7,\"h2\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[[27,\"if\",[[23,[\"editing\"]],\"newPipelineStage.header.edit\",\"newPipelineStage.header.create\"],null]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"right-buttons pb-0 pt-0\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.remove\"],null],false],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"remove\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n    \"],[1,[27,\"form-name-description\",null,[[\"model\",\"rowClass\",\"colClass\",\"nameRequired\",\"namePlaceholder\"],[[23,[\"model\"]],\"\",\"\",true,\"newPipelineStage.name.placeholder\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"  \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"stage\",[23,[\"model\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[1,[27,\"save-cancel\",null,[[\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-new-stage/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-new-step/component", ["exports", "ui/mixins/modal-base", "pipeline/components/modal-pipeline-new-step/template", "shared/utils/pipeline-constants"], function (_exports, _modalBase, _template, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    layout: _template.default,
    classNames: ['large-modal', 'alert', 'pipeline-new-step'],
    step: null,
    editing: null,
    modalOpts: Ember.computed.alias('modalService.modalOpts'),
    init: function init() {
      this._super.apply(this, arguments);

      var step = Ember.get(this, 'modalOpts.step');

      if (step) {
        var stepType = this.getStepType(step);
        Ember.set(step, 'type', stepType);
        Ember.set(this, 'step', step);
        Ember.set(this, 'editing', true);
      } else {
        step = {};
        Ember.set(step, 'type', _pipelineConstants.default.STEP_TYPES[0].type);
        Ember.set(this, 'step', step);
      }
    },
    actions: {
      save: function save(step) {
        Ember.get(this, 'modalOpts').save(step);
        Ember.get(this, 'modalService').toggleModal();
      },
      cancel: function cancel() {
        Ember.get(this, 'modalService').toggleModal();
      },
      remove: function remove() {
        Ember.get(this, 'modalOpts').remove();
        Ember.get(this, 'modalService').toggleModal();
      }
    },
    getStepType: function getStepType(step) {
      var type = '';

      _pipelineConstants.default.STEP_TYPES.forEach(function (stepType) {
        if (Ember.get(step, stepType.name)) {
          type = stepType.type;
        }
      });

      return type;
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-new-step/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rToLKdRh",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"type\"]],\"scm\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.add\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"modal-pipeline-head\"],[9],[0,\"\\n      \"],[7,\"h2\"],[9],[1,[27,\"t\",[[27,\"if\",[[23,[\"editing\"]],\"newPipelineStep.header.edit\",\"newPipelineStep.header.create\"],null]],null],false],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-muted\"],[9],[1,[23,[\"modalOpts\",\"stageIndex\"]],false],[0,\". \"],[1,[23,[\"modalOpts\",\"stageInfo\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"generic.remove\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"remove\"]],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[10],[0,\"\\n\"],[1,[27,\"pipeline-step-form\",null,[[\"projectDockerCredentials\",\"model\",\"editing\",\"save\",\"cancel\"],[[23,[\"modalOpts\",\"projectDockerCredentials\"]],[23,[\"step\"]],[23,[\"editing\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-new-step/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-run/component", ["exports", "shared/mixins/modal-base", "pipeline/components/modal-pipeline-run/template"], function (_exports, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    router: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal', 'alert'],
    branch: null,
    branchesChoices: null,
    errors: [],
    loading: false,
    model: Ember.computed.alias('modalService.modalOpts.originalModel'),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.set(this, 'loading', true);
      Ember.get(this, 'model').followLink('branches').then(function (branches) {
        if (_this.isDestroyed || _this.isDestroying) {
          return;
        }

        Ember.set(_this, 'branchesChoices', JSON.parse(branches).map(function (b) {
          return {
            label: b,
            value: b
          };
        }).sortBy('label'));

        if (Ember.get(_this, 'branchesChoices.length')) {
          Ember.run.next(function () {
            Ember.set(_this, 'branch', Ember.get(_this, 'branchesChoices.firstObject.value'));
          });
        } else {
          Ember.set(_this, 'loading', false);
        }
      }).finally(function () {
        Ember.set(_this, 'loading', false);
      });
    },
    actions: {
      save: function save(cb) {
        var _this2 = this;

        var branch = Ember.get(this, 'branch');
        Ember.get(this, 'model').doAction('run', {
          branch: branch
        }).then(function () {
          var pipelineId = Ember.get(_this2, 'model.id');
          var nextRun = Ember.get(_this2, 'model.nextRun');

          _this2.send('cancel');

          Ember.get(_this2, 'router').transitionTo('authenticated.project.pipeline.pipelines.run', pipelineId, nextRun);
        }).finally(function () {
          cb();
        });
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-run/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "U153ZiJ2",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"runPipeline.title\"],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"  \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.loading\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"branchesChoices\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"runPipeline.branch.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"searchable-select\",null,[[\"class\",\"content\",\"value\"],[\"form-control\",[23,[\"branchesChoices\"]],[23,[\"branch\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"editing\"]],\"action.run\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"mt-20 mb-20\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"runPipeline.noBranch\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"footer-actions\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-primary\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"generic.closeModal\"],null],false],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"cancel\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-run/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-setting/component", ["exports", "shared/mixins/modal-base", "pipeline/components/modal-pipeline-setting/template"], function (_exports, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    layout: _template.default,
    classNames: ['medium-modal', 'alert'],
    errors: [],
    model: Ember.computed.alias('modalService.modalOpts.originalModel'),
    actions: {
      save: function save(cb) {
        var _this = this;

        Ember.get(this, 'model').save().then(function () {
          _this.send('cancel');
        }).finally(function () {
          cb();
        });
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UhfqGPSC",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"pipelineSetting.title\"],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n  \"],[1,[27,\"pipeline-trigger\",null,[[\"pipeline\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[1,[27,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[true,[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-yaml/component", ["exports", "shared/mixins/modal-base", "pipeline/components/modal-pipeline-yaml/template"], function (_exports, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    layout: _template.default,
    classNames: ['large-modal', 'alert'],
    branch: null,
    branchesChoices: null,
    loading: false,
    errors: null,
    config: null,
    model: Ember.computed.alias('modalService.modalOpts.originalModel'),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      Ember.set(this, 'loading', true);
      Ember.get(this, 'model').followLink('branches').then(function (res) {
        if (_this.isDestroyed || _this.isDestroying) {
          return;
        }

        var branchesChoices = JSON.parse(res).map(function (branch) {
          return {
            branch: branch
          };
        }).sortBy('branch');
        Ember.set(_this, 'branchesChoices', branchesChoices);

        if (Ember.get(_this, 'branchesChoices.length')) {
          Ember.run.next(function () {
            Ember.set(_this, 'branch', Ember.get(_this, 'branchesChoices.firstObject.branch'));
          });
        }
      });
    },
    actions: {
      save: function save(success) {
        var _this2 = this;

        Ember.get(this, 'store').request({
          data: Ember.get(this, 'config'),
          url: "".concat(Ember.get(this, 'model.links.yaml'), "?branch=").concat(Ember.get(this, 'branch')),
          method: 'PUT'
        }).then(function () {
          _this2.send('cancel');
        }).catch(function (err) {
          Ember.set(_this2, 'errors', [err.message]);
          success(false);
        });
      }
    },
    branchDidChange: Ember.observer('branch', function () {
      var _this3 = this;

      var branch = Ember.get(this, 'branch');

      if (branch) {
        Ember.set(this, 'loading', true);
        Ember.get(this, 'model').followLink('yaml', {
          filter: {
            branch: branch
          }
        }).then(function (res) {
          if (_this3.isDestroyed || _this3.isDestroying) {
            return;
          }

          Ember.set(_this3, 'config', res);
        }).finally(function () {
          return Ember.set(_this3, 'loading', false);
        });
      }
    })
  });

  _exports.default = _default;
});
define("pipeline/components/modal-pipeline-yaml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JTkJpYVA",
    "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"editYamlPipeline.title\"],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"  \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.loading\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"branchesChoices\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"editYamlPipeline.branch.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"searchable-select\",null,[[\"optionLabelPath\",\"optionValuePath\",\"value\",\"customLabel\",\"content\"],[\"branch\",\"branch\",[23,[\"branch\"]],true,[23,[\"branchesChoices\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[[22,1,[\"stateColor\"]]]]],[9],[0,\"\\n          \"],[1,[22,1,[\"branch\"]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n    \"],[1,[27,\"input-yaml\",null,[[\"showUpload\",\"showDownload\",\"canChangeName\",\"value\",\"autoResize\",\"loading\"],[false,false,false,[23,[\"config\"]],true,[23,[\"loading\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"copy-to-clipboard\",null,[[\"tooltipText\",\"buttonText\",\"clipboardText\",\"class\"],[\"\",\"copyToClipboard.tooltip\",[23,[\"config\"]],\"with-clip\"]]],false],[0,\"\\n  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[\"generic.push\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.noBranch\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"saveDisabled\",\"cancel\"],[\"generic.push\",[27,\"action\",[[22,0,[]],\"save\"],null],true,[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/modal-pipeline-yaml/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/modal-root/component", "pipeline/components/modal-root/component");
define.alias("shared/components/modal-shell/component", "pipeline/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "pipeline/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "pipeline/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "pipeline/components/namespace-group/component");
define.alias("shared/components/new-select/component", "pipeline/components/new-select/component");
define.alias("shared/components/node-ip/component", "pipeline/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "pipeline/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "pipeline/components/node-taints/component");
define("pipeline/components/object-bin", ["exports", "ember-drag-drop/components/object-bin"], function (_exports, _objectBin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _objectBin.default;
  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "pipeline/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "pipeline/components/page-numbers");
define.alias("shared/components/page-numbers/component", "pipeline/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "pipeline/components/percent-gauge/component");
define("pipeline/components/pipeline-activities/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.headers = void 0;
  var headers = [{
    name: 'run',
    sort: ['run'],
    searchField: ['run'],
    width: '80px',
    translationKey: 'pipelineDetailPage.activity.table.runNumber'
  }, {
    name: 'executionState',
    sort: ['executionState'],
    searchField: ['relevantState', 'executionState'],
    width: '120px',
    translationKey: 'pipelineDetailPage.activity.table.status'
  }, {
    name: 'branch',
    sort: ['branch'],
    searchField: ['branch'],
    width: '120px',
    translationKey: 'pipelineDetailPage.activity.table.branch'
  }, {
    name: 'message',
    sort: ['message', 'shortCommit', 'branch'],
    searchField: ['message', 'shortCommit', 'branch'],
    translationKey: 'pipelineDetailPage.activity.table.commit'
  }, {
    name: 'startedTimeStamp',
    sort: ['startedTimeStamp'],
    width: '150px',
    translationKey: 'pipelineDetailPage.activity.table.triggered'
  }];
  _exports.headers = headers;

  var _default = Ember.Component.extend({
    sortBy: 'run',
    headers: headers,
    executions: null
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-activities/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9XI7kCE4",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"sortable-table\",null,[[\"body\",\"sortBy\",\"descending\",\"headers\"],[[23,[\"executions\"]],[23,[\"sortBy\"]],true,[23,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n        \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[22,3,[\"id\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"run\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"pipelines.run\",[22,3,[\"pipelineId\"]],[22,3,[\"run\"]]],null,{\"statements\":[[0,\"          #\"],[1,[22,3,[\"run\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"executionState\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n        \"],[1,[27,\"badge-state\",null,[[\"model\"],[[22,3,[]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"branch\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"pipelines.run\",[22,3,[\"pipelineId\"]],[22,3,[\"run\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,3,[\"branch\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"commit\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-1 pt-10\"],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[28,[[22,3,[\"avatarUrl\"]]]]],[11,\"class\",\"committer-avatar\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-11\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"commit-message\"],[9],[0,\"\\n              \"],[1,[22,3,[\"message\"]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"text-small text-muted\"],[9],[0,\"\\n              \"],[7,\"a\"],[12,\"href\",[28,[[22,3,[\"commitUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[22,3,[\"shortCommit\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[22,3,[\"showTransitioning\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[12,\"class\",[28,[\"clip text-small \",[22,3,[\"stateColor\"]]]]],[9],[1,[27,\"uc-first\",[[22,3,[\"transitioningMessage\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"startedTimeStamp\"]]]]],[11,\"class\",\"clip\"],[9],[4,\"tooltip-element\",null,[[\"style\",\"inlineBlock\",\"type\",\"tooltipTemplate\",\"model\",\"tagName\",\"tooltipFor\"],[\"100%;\",true,\"tooltip-basic\",\"tooltip-static\",[27,\"date-str\",[[22,3,[\"startedTimeStamp\"]]],null],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[27,\"date-from-now\",[[22,3,[\"startedTimeStamp\"]]],null],false],[0,\"\\n          \"],[10]],\"parameters\":[]},null],[4,\"if\",[[22,3,[\"duration\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-small text-muted\"],[9],[0,\"\\n            \"],[1,[27,\"date-duration\",[[22,3,[\"duration\"]]],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n        \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\"],[[22,3,[]],true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted lacsso pt-20 pb-20\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.activity.table.noMatch\"],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted lacsso pt-20 pb-20\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.activity.table.noData\"],null],false],[10],[10],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-activities/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-codemirror/component", ["exports", "codemirror", "pipeline/components/pipeline-codemirror/template"], function (_exports, _codemirror, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    codeMirror: Ember.inject.service(),
    layout: _template.default,
    tagName: 'textarea',
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      _codemirror.default.registerHelper('hint', 'anyword', function (editor
      /* ,options*/
      ) {
        var cur = editor.getCursor();
        var end = cur.ch,
            start = end;
        var matched = Ember.get(_this, 'codeMirror').getMatchedHint(editor.getValue(), editor);
        return {
          list: matched.matchedArry,
          from: _codemirror.default.Pos(cur.line, start - matched.index),
          to: _codemirror.default.Pos(cur.line, end)
        };
      });

      this._codeMirror = Ember.get(this, 'codeMirror').fromTextArea(Ember.get(this, 'elementId'), Ember.get(this, 'element'));
      var arrows = [37, 38, 39, 40, 13];

      this._codeMirror.on('keyup', function (cm, e) {
        if (arrows.indexOf(e.keyCode) < 0) {
          _this._codeMirror.showHint({
            completeSingle: false
          });
        }
      }); // Send a "valueUpdated" action when CodeMirror triggers a "change" event.


      this.setupCodeMirrorEventHandler('change', this, this.scheduleValueUpdatedAction);
    },
    didRender: function didRender() {
      this._super.apply(this, arguments);

      this.updateCodeMirrorOptions();
      this.updateCodeMirrorValue();
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments); // Remove the editor and restore the original textarea.


      this._codeMirror.toTextArea();

      Ember.get(this, 'codeMirror').unregisterInstance(Ember.get(this, 'elementId'));
      delete this._codeMirror;
    },
    isVisibleDidChange: Ember.observer('isVisible', function () {
      if (this._wasVisible === Ember.get(this, 'isVisible')) {
        return;
      }

      Ember.run.scheduleOnce('render', this, this.toggleVisibility);
    }),
    scheduleValueUpdatedAction: function scheduleValueUpdatedAction(codeMirror, changeObj) {
      Ember.run.once(this, this.sendValueUpdatedAction, codeMirror.getValue(), codeMirror, changeObj);
    },
    setupCodeMirrorEventHandler: function setupCodeMirrorEventHandler(event, target, method) {
      var callback = Ember.run.bind(target, method);

      this._codeMirror.on(event, callback);

      this.one('willDestroyElement', this, function () {
        this._codeMirror.off(event, callback);
      });
    },
    sendValueUpdatedAction: function sendValueUpdatedAction() {
      if (this.valueUpdated) {
        this.valueUpdated.apply(this, arguments);
      }
    },
    toggleVisibility: function toggleVisibility() {
      var isVisible = Ember.get(this, 'isVisible');

      if (this._wasVisible === isVisible) {
        return;
      }

      this._wasVisible = isVisible;

      if (isVisible) {
        // Force a refresh when becoming visible, since CodeMirror won't render
        // itself onto a hidden element.
        this._codeMirror.refresh();
      }
    },
    updateCodeMirrorOption: function updateCodeMirrorOption(option, value) {
      if (this._codeMirror.getOption(option) !== value) {
        this._codeMirror.setOption(option, value);
      }
    },
    updateCodeMirrorOptions: function updateCodeMirrorOptions() {
      var options = Ember.get(this, 'options');

      if (options) {
        Object.keys(options).forEach(function (option) {
          this.updateCodeMirrorOption(option, options[option]);
        }, this);
      }
    },
    updateCodeMirrorValue: function updateCodeMirrorValue() {
      var value = Ember.get(this, 'value');

      if (value !== this._codeMirror.getValue()) {
        this._codeMirror.setValue(value || '');
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-codemirror/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y+RBtwMT",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-codemirror/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-condition/component", ["exports", "pipeline/components/pipeline-condition/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    type: null,
    branchOnly: false,
    config: null,
    include: null,
    exclude: null,
    init: function init() {
      this._super.apply(this, arguments);

      var config = Ember.get(this, 'config');
      var include = {
        branch: {},
        event: {}
      };
      var exclude = {
        branch: {},
        event: {}
      };

      if (config) {
        if (config.branch) {
          include.branch.include = Ember.get(config, 'branch.include');
          exclude.branch.exclude = Ember.get(config, 'branch.exclude');
        }

        if (config.event) {
          include.event.include = Ember.get(config, 'event.include');
          exclude.event.exclude = Ember.get(config, 'event.exclude');
        }
      }

      Ember.set(this, 'include', include);
      Ember.set(this, 'exclude', exclude);
    },
    configDidChange: Ember.observer('include', 'exclude', function () {
      var include = Ember.get(this, 'include') || {};
      var exclude = Ember.get(this, 'exclude') || {};
      var branch = Object.assign({}, include.branch, exclude.branch);
      var event = Object.assign({}, include.event, exclude.event);
      var out = {};

      if (Object.keys(branch).length) {
        out.branch = branch;
      }

      if (Object.keys(event).length) {
        out.event = event;
      }

      Ember.set(this, 'config', Object.keys(out).length ? out : null);
    })
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-condition/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UyZvmpQT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"acc-label pb-5 pt-10\"],[9],[1,[27,\"t\",[\"pipelineSelector.header\"],null],false],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n    \"],[1,[27,\"pipeline-selector\",null,[[\"branchOnly\",\"isInclude\",\"type\",\"config\"],[[23,[\"branchOnly\"]],true,[23,[\"type\"]],[23,[\"include\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n    \"],[1,[27,\"pipeline-selector\",null,[[\"branchOnly\",\"isInclude\",\"type\",\"config\"],[[23,[\"branchOnly\"]],false,[23,[\"type\"]],[23,[\"exclude\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-condition/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-detail/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    pipeline: Ember.computed.alias('model.pipeline'),
    executions: Ember.computed('model.executions.[]', function () {
      return Ember.get(this, 'model.executions').filterBy('pipelineId', Ember.get(this, 'pipeline.id'));
    })
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "leGhPIzo",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"parent\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"pipelineDetailPage.header\"],[[\"name\"],[[23,[\"pipeline\",\"displayName\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"pipeline\"]]]]],false],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"pipeline\"]],false,\"ml-10 pull-right\",\"sm\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"pipeline\",\"description\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[27,\"linkify\",[[23,[\"pipeline\",\"description\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"pipeline\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[[23,[\"pipeline\",\"stateColor\"]]]]],[9],[7,\"p\"],[9],[1,[27,\"uc-first\",[[23,[\"pipeline\",\"transitioningMessage\"]]],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics mb-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.repository\"],null],false],[10],[0,\"\\n      \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"pipeline\",\"displayRepositoryUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[23,[\"pipeline\",\"displayRepositoryUrl\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"pipelineDetailPage.lastRun\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"pipeline\",\"lastExecutionId\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",[27,\"date-str\",[[23,[\"pipeline\",\"lastStarted\"]]],null],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"          \"],[1,[27,\"date-from-now\",[[23,[\"pipeline\",\"lastStarted\"]]],null],false]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"generic.na\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[1,[27,\"t\",[\"generic.created\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"date-calendar\",[[23,[\"pipeline\",\"created\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"accordion-list\",null,[[\"expandAll\"],[true]],{\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"componentName\"],[[27,\"t\",[\"pipelineDetailPage.activity.title\"],null],[27,\"t\",[\"pipelineDetailPage.activity.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],\"sortable-table\"]],{\"statements\":[[0,\"      \"],[1,[27,\"pipeline-activities\",null,[[\"executions\"],[[23,[\"executions\"]]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[1,2]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-env-from/component", ["exports", "pipeline/components/pipeline-env-from/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    sources: null,
    namespace: null,
    init: function init() {
      this._super.apply(this, arguments);

      if (!Ember.get(this, 'sources')) {
        Ember.set(this, 'sources', []);
      }

      Ember.get(this, 'sources').forEach(function (source) {
        Ember.set(source, 'source', 'secret');

        if (source.sourceKey === undefined) {
          Ember.set(source, 'sourceKey', null);
        }
      });
      var projectId = Ember.get(this, 'scope.currentProject.id').split(':')[1];
      Ember.set(this, 'namespace', {
        id: "".concat(projectId, "-pipeline")
      });
    },
    actions: {
      addSource: function addSource() {
        var source = {
          source: 'secret',
          sourceKey: null
        };
        Ember.get(this, 'sources').addObject(source);
      },
      removeSource: function removeSource(source) {
        Ember.get(this, 'sources').removeObject(source);
      }
    },
    valueDidChange: Ember.observer('sources.@each.{sourceKey,sourceName,targetKey}', function () {
      if (this.changed) {
        this.changed(this.sources);
      }
    })
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-env-from/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YKl9AxU8",
    "block": "{\"symbols\":[\"source\"],\"statements\":[[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.task.secret\"],null],false],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"sources\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[7,\"table\"],[11,\"class\",\"table fixed no-lines small mb-10\"],[9],[0,\"\\n      \"],[7,\"thead\"],[9],[0,\"\\n        \"],[7,\"tr\"],[11,\"class\",\"hidden-sm\"],[9],[0,\"\\n          \"],[7,\"th\"],[11,\"width\",\"220\"],[9],[1,[27,\"t\",[\"fromSecret.secret.label\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n          \"],[7,\"th\"],[11,\"width\",\"10\"],[9],[10],[0,\"\\n          \"],[7,\"th\"],[9],[1,[27,\"t\",[\"fromSecret.prefixOrKey.label\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n          \"],[7,\"th\"],[11,\"width\",\"70\"],[9],[10],[0,\"\\n          \"],[7,\"th\"],[9],[1,[27,\"t\",[\"fromSecret.prefix.label\"],null],false],[10],[0,\"\\n          \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[0,\" \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"sources\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"form-sources-row\",null,[[\"source\",\"namespace\",\"secretOnly\",\"specificKeyOnly\",\"remove\"],[[22,1,[]],[23,[\"namespace\"]],true,true,[27,\"action\",[[22,0,[]],\"removeSource\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn\"],[11,\"type\",\"button\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-plus icon-small\"],[9],[10],[10],[0,\"\\n    \"],[7,\"span\"],[9],[1,[27,\"t\",[\"fromSecret.addFrom\"],null],false],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"addSource\"]],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-env-from/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-input-var-hint/component", ["exports", "shared/utils/pipelineStep"], function (_exports, _pipelineStep) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    codeMirror: Ember.inject.service(),
    hintAry: null,
    matchedArry: null,
    positionX: 0,
    positionY: 0,
    activeIndex: 0,
    startStr: '$',
    triggerInputEle: null,
    hidden: true,
    triggerClickHint: null,
    matchedIndex: -1,
    cursorPosition: -1,
    originalScrollTop: null,
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      _pipelineStep.singleton.hintAry = Ember.get(this, 'hintAry');
      this.$(document).on('keyup.hint', 'input:not(.js-disable-hint)', function (e) {
        $.fn.E_INPUT_HINT.startHint(e.target, function ()
        /* hint*/
        {});
      });
    },
    didRender: function didRender() {
      var _this = this;

      // extend Jquery
      if (window.jQuery || window.$) {
        jQuery.fn.E_INPUT_HINT = this;

        jQuery.fn.getCursorPosition = function () {
          var el = $(this).get(0); // eslint-disable-line

          var pos = 0;

          if ('selectionStart' in el) {
            pos = el.selectionStart;
          } else if ('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
          }

          return pos;
        };
      }

      var clickHiden = function clickHiden() {
        Ember.set(_this, 'hidden', true);
      };

      var scrollPosition = function scrollPosition() {
        var hd = Ember.get(_this, 'hidden');

        if (hd) {
          return;
        }

        var originalCoordinates = Ember.get(_this, 'originalCoordinates');

        _this.showHint(originalCoordinates.top - _this.$(window).scrollTop(), originalCoordinates.left);
      };

      this.$(document).on('click.hint', clickHiden).on('scroll.hint', scrollPosition);
    },
    willDestroyElement: function willDestroyElement() {
      this._super();

      this.$(document).off('click.hint');
      this.$(document).off('scroll.hint');
      this.$(document).off('keyup.hint');
      this.$(document).off('keyup.hint-return');
    },
    actions: {
      clickHint: function clickHint(val) {
        var triggerClickHint = Ember.get(this, 'triggerClickHint');

        if (triggerClickHint) {
          triggerClickHint(val);
        }

        var triggerInputEle = Ember.get(this, 'triggerInputEle');

        if (!triggerInputEle) {
          return;
        }

        var matchedIndex = Ember.get(this, 'matchedIndex');
        var cursorPosition = Ember.get(this, 'cursorPosition');
        var value = $(triggerInputEle).val(); // eslint-disable-line

        if (matchedIndex !== -1 && triggerInputEle) {
          var newVal = value.slice(0, matchedIndex).concat(val).concat(value.slice(cursorPosition, value.length));
          $(triggerInputEle).val(newVal); // eslint-disable-line

          $(triggerInputEle).trigger('change', newVal); // eslint-disable-line

          $(triggerInputEle).trigger('input', newVal); // eslint-disable-line
        }
      }
    },
    positionStyle: Ember.computed('positionX', 'positionY', function () {
      var positionX = Ember.get(this, 'positionX'),
          positionY = Ember.get(this, 'positionY');
      var out = ['position: fixed', "top: ".concat(positionY, "px"), "left: ".concat(positionX, "px"), "z-index: 9999"].join(';');
      return Ember.String.htmlSafe(out);
    }),
    hiddenClass: Ember.computed('hidden', function () {
      var hd = Ember.get(this, 'hidden');
      var out = hd ? 'hide' : '';
      return Ember.String.htmlSafe(out);
    }),
    showHint: function showHint(y, x) {
      Ember.set(this, 'positionX', x);
      Ember.set(this, 'positionY', y);
      Ember.set(this, 'hidden', false);
    },
    setTriggerInputEle: function setTriggerInputEle(ele) {
      Ember.set(this, 'triggerInputEle', ele);
    },
    getCursorCoordinates: function getCursorCoordinates(value) {
      var lines = value.split(/[\n\r]/g);
      var maxI = lines.length - 1;
      return {
        x: (lines[maxI].length - 1) * 8,
        y: (maxI + 1) * 24 + 8
      };
    },
    startHint: function startHint(ele, cb) {
      Ember.set(this, 'triggerInputEle', ele);
      var el = Ember.get(this, 'triggerInputEle');

      if (!el) {
        this.setTriggerInputEle(null);
        Ember.set(this, 'triggerClickHint', null);
        Ember.set(this, 'hidden', true);
        return false;
      }

      var $el = this.$(el);
      var value = $el.val();
      var cursorPosition = $el.getCursorPosition();
      Ember.set(this, 'cursorPosition', cursorPosition);
      var cursorValue = value.slice(0, cursorPosition);
      var matched = false;
      var hintAry = Ember.get(this, 'hintAry');

      var _$value = cursorValue.lastIndexOf('$');

      Ember.set(this, 'matchedIndex', _$value);
      _$value = cursorValue.slice(_$value, cursorValue.length);
      var matchedArry = [];

      if (_$value) {
        for (var i = 0; i < hintAry.length; i++) {
          var item = hintAry[i]; // if matched on end

          if (item.indexOf(_$value) === 0) {
            matched = true;
            matchedArry.push(item);
          }
        }

        if (matched) {
          var offset = $el.offset();
          Ember.set(this, 'matchedArry', matchedArry);
          var cursorCoordinates = this.getCursorCoordinates(cursorValue);
          var oT = this.$(window).scrollTop();
          var originalCoordinates = {
            top: offset.top + cursorCoordinates.y,
            left: offset.left + cursorCoordinates.x
          };
          Ember.set(this, 'originalCoordinates', originalCoordinates);
          this.showHint(originalCoordinates.top - oT, originalCoordinates.left);
          Ember.set(this, 'triggerClickHint', cb);
          return true;
        }
      }

      this.setTriggerInputEle(null);
      Ember.set(this, 'triggerClickHint', null);
      Ember.set(this, 'hidden', true);
      return false;
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-input-var-hint/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+vFdysZA",
    "block": "{\"symbols\":[\"hint\",\"index\"],\"statements\":[[7,\"div\"],[12,\"style\",[21,\"positionStyle\"]],[12,\"class\",[21,\"hiddenClass\"]],[9],[0,\"\\n  \"],[7,\"ul\"],[11,\"class\",\"dropdown-menu js-hint-dropdown\"],[11,\"style\",\"position: static;display:inline-block;max-height: 200px;overflow: scroll\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[9],[0,\"loading...\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[23,[\"matchedArry\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[12,\"class\",[28,[[27,\"if\",[[27,\"eq\",[[23,[\"activeIndex\"]],[22,2,[]]],null],\"active\",\"\"],null]]]],[9],[0,\" \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[1,[22,1,[]],false],[10],[0,\" \"],[3,\"action\",[[22,0,[]],\"clickHint\",[22,1,[]]]],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-input-var-hint/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-jobs-table/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.headers = void 0;
  var headers = [{
    name: 'status',
    sort: ['lastRunState'],
    searchField: ['relevantState', 'lastRunState'],
    width: '120px',
    translationKey: 'pipelinesPage.table.status'
  }, {
    name: 'displayName',
    sort: ['displayName'],
    searchField: 'displayName',
    translationKey: 'generic.name'
  }, {
    name: 'lastRunId',
    sort: ['lastStarted'],
    width: '200px',
    searchField: 'activity',
    translationKey: 'pipelinesPage.lastActivity'
  }];
  _exports.headers = headers;

  var _default = Ember.Component.extend({
    sortBy: 'name',
    headers: headers
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-jobs-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "imINhHj+",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"sortable-table\",null,[[\"tableClassNames\",\"bulkActions\",\"body\",\"sortBy\",\"fullRows\",\"search\",\"groupByKey\",\"groupByRef\",\"headers\"],[\"double-rows\",[23,[\"bulkActions\"]],[23,[\"body\"]],[23,[\"sortBy\"]],true,[23,[\"search\"]],[23,[\"groupByKey\"]],[23,[\"groupByRef\"]],[23,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"body\",\"length\"]]],null,{\"statements\":[[0,\"        \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n          \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[22,3,[\"id\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"lastRunState\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n        \"],[1,[27,\"badge-state\",null,[[\"model\"],[[22,3,[]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"repositoryUrl\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"pipelines.detail\",[22,3,[\"id\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,3,[\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"runCount\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"if\",[[22,3,[\"lastExecutionId\"]]],null,{\"statements\":[[4,\"link-to\",[\"pipelines.run\",[22,3,[\"id\"]],[22,3,[\"lastRun\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"style\",\"inlineBlock\",\"type\",\"tooltipTemplate\",\"model\",\"tagName\",\"tooltipFor\"],[\"100%;\",true,\"tooltip-basic\",\"tooltip-static\",[27,\"date-str\",[[22,3,[\"lastStarted\"]]],null],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"              \"],[1,[27,\"date-from-now\",[[22,3,[\"lastStarted\"]]],null],false]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"generic.na\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"td\"],[12,\"data-title\",[28,[[22,4,[\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n        \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\"],[[22,3,[]],true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted lacsso pt-20 pb-20\"],[9],[1,[27,\"t\",[\"pipelinesPage.table.noMatch\"],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted lacsso pt-20 pb-20\"],[9],[1,[27,\"t\",[\"pipelinesPage.table.noData\"],null],false],[10],[10],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-jobs-table/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-notifier/component", ["exports", "pipeline/components/pipeline-notifier/template", "ui/utils/constants"], function (_exports, _template, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CONDITION_CHOICES = [_constants.default.CONDITION.SUCCESS, _constants.default.CONDITION.CHANGED, _constants.default.CONDITION.FAILED];

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    config: null,
    conditionContent: CONDITION_CHOICES,
    recipients: [],
    success: false,
    changed: false,
    failed: false,
    customizeMessage: false,
    togglingNotification: null,
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      var clusterId = this.clusterId,
          config = this.config;
      Ember.get(this, 'globalStore').findAll('notifier').then(function (res) {
        Ember.set(_this, 'notifiers', res.filterBy('clusterId', clusterId));
      });

      if (config) {
        var _config$condition = config.condition,
            condition = _config$condition === void 0 ? [] : _config$condition;
        condition.map(function (c) {
          switch (c) {
            case _constants.default.CONDITION.SUCCESS:
              Ember.set(_this, 'success', true);
              break;

            case _constants.default.CONDITION.CHANGED:
              Ember.set(_this, 'changed', true);
              break;

            case _constants.default.CONDITION.FAILED:
              Ember.set(_this, 'failed', true);
              break;

            default:
              break;
          }
        });
      }

      this.conditionChange();
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var _this2 = this;

      this._super.apply(this, arguments);

      var condition = Ember.get(this, 'config.condition') || [];

      if (condition.length > 0) {
        Ember.run.next(function () {
          Ember.set(_this2, 'notificationEnabled', true);
        });
      }
    },
    actions: {
      add: function add() {
        this.addNewRecipient();
      },
      remove: function remove(recipient) {
        Ember.get(this, 'config.recipients').removeObject(recipient);
      },
      toogleMessage: function toogleMessage() {
        Ember.set(this, 'customizeMessage', true);
      },
      disableNotification: function disableNotification() {
        Ember.setProperties(this, {
          notificationEnabled: false,
          config: {},
          failed: false,
          success: false,
          changed: false
        });
      },
      enableNotification: function enableNotification() {
        if (!Ember.get(this, 'config') || !Ember.get(this, 'config.recipients')) {
          Ember.set(this, 'config', {
            recipients: []
          });
          Ember.set(this, 'success', true);
          this.addNewRecipient();
        }

        Ember.set(this, 'notificationEnabled', true);
      }
    },
    conditionChange: Ember.observer('success', 'changed', 'failed', function () {
      var arr = [Ember.get(this, 'success') ? _constants.default.CONDITION.SUCCESS : null, Ember.get(this, 'changed') ? _constants.default.CONDITION.CHANGED : null, Ember.get(this, 'failed') ? _constants.default.CONDITION.FAILED : null].filter(function (c) {
        return !!c;
      });

      if (Ember.get(this, 'config')) {
        Ember.set(this, 'config.condition', arr);
      }
    }),
    notifiers: Ember.computed('clusterId', function () {
      var clusterId = Ember.get(this, 'clusterId');
      return Ember.get(this, 'globalStore').all('notifier').filterBy('clusterId', clusterId);
    }),
    haveNotifiers: Ember.computed('notifiers.[]', function () {
      return Ember.get(this, 'notifiers').length === 0 ? false : true;
    }),
    addNewRecipient: function addNewRecipient() {
      var nue = {
        notifier: null,
        recipient: null
      };
      Ember.get(this, 'config.recipients').pushObject(nue);
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-notifier/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "e4WMGx3Z",
    "block": "{\"symbols\":[\"recipient\",\"idx\"],\"statements\":[[7,\"div\"],[11,\"class\",\"acc-label pb-5 pt-10\"],[9],[1,[27,\"t\",[\"pipelineNotification.header\"],null],false],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"mb-20 mt-20\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"notificationEnabled\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"btn-group no-inline-space\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-default\"],[9],[1,[27,\"t\",[\"generic.disable\"],null],false],[3,\"action\",[[22,0,[]],\"disableNotification\"]],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-success\"],[9],[1,[27,\"t\",[\"generic.enabled\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"btn-group no-inline-space\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-primary\"],[9],[1,[27,\"t\",[\"generic.disabled\"],null],false],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-defualt\"],[9],[1,[27,\"t\",[\"generic.enable\"],null],false],[3,\"action\",[[22,0,[]],\"enableNotification\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"notificationEnabled\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"box\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"pipelineNotification.when\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-9\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"checkbox inline-block\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"failed\"]]]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"pipelineNotification.condition.failed.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"checkbox inline-block ml-10\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"success\"]]]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"pipelineNotification.condition.success.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"checkbox inline-block ml-10\"],[9],[0,\"\\n            \"],[7,\"label\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"changed\"]]]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"pipelineNotification.condition.changed.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"haveNotifiers\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning mb-0 mt-10\"]],{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.noNotifierHelpText\"],null],false],[0,\" \"],[4,\"link-to-external\",[\"notifier\",[23,[\"clusterId\"]]],null,{\"statements\":[[0,\" \"],[1,[27,\"t\",[\"alertPage.newOrEdit.createOne\"],null],false]],\"parameters\":[]},null],[0,\".\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"config\",\"recipients\",\"length\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"style\",\"padding-top: 12px;\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"pipelineNotification.asMessage\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-9\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"config\",\"recipients\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"form-recipient-item\",null,[[\"remove\",\"isFirst\",\"notifiers\",\"model\"],[[27,\"action\",[[22,0,[]],\"remove\"],null],[27,\"eq\",[[22,2,[]],0],null],[23,[\"notifiers\"]],[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"        \"],[7,\"div\"],[11,\"class\",\"mt-15\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn p-0\"],[12,\"disabled\",[27,\"not\",[[23,[\"haveNotifiers\"]]],null]],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[10],[0,\"\\n            \"],[7,\"span\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.addRecipient\"],null],false],[10],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"add\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-notifier/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-selector-row/component", ["exports", "pipeline/components/pipeline-selector-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var typeChoices = [{
    label: 'pipelineSelector.branch',
    value: 'branch'
  }, {
    label: 'pipelineSelector.event',
    value: 'event'
  }];
  var eventChoices = [{
    label: 'pipelineSelector.pr',
    value: 'pull_request'
  }, {
    label: 'pipelineSelector.push',
    value: 'push'
  }, {
    label: 'pipelineSelector.tag',
    value: 'tag'
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    tagName: 'TR',
    rule: null,
    typeChoices: typeChoices,
    eventChoices: eventChoices,
    actions: {
      removeRule: function removeRule() {
        this.remove(this.rule);
      }
    },
    ruleKeyDidChange: Ember.observer('rule.key', function () {
      if (Ember.get(this, 'rule.key') === 'event') {
        Ember.set(this, 'rule.value', eventChoices[0].value);
      } else {
        Ember.set(this, 'rule.value', '');
      }
    }),
    remove: function remove() {
      throw new Error('remove action is required!');
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-selector-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bB24j7lN",
    "block": "{\"symbols\":[],\"statements\":[[7,\"td\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"branchOnly\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"t\",[\"generic.branch\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"new-select\",null,[[\"class\",\"content\",\"localizedLabel\",\"value\",\"style\"],[\"form-control input-sm\",[23,[\"typeChoices\"]],true,[23,[\"rule\",\"key\"]],\"display: inline-block; width: auto;\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"],[7,\"td\"],[11,\"class\",\"text-center\"],[9],[1,[27,\"t\",[\"generic.is\"],null],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"rule\",\"key\"]],\"event\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"new-select\",null,[[\"class\",\"content\",\"localizedLabel\",\"value\",\"style\"],[\"form-control input-sm\",[23,[\"eventChoices\"]],true,[23,[\"rule\",\"value\"]],\"display: inline-block; width: auto;\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control input-sm\",[23,[\"rule\",\"value\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"],[7,\"td\"],[9],[0,\" \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"input-group-btn\"],[9],[0,\"\\n  \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-minus\"],[9],[10],[3,\"action\",[[22,0,[]],\"removeRule\",[23,[\"rule\"]]]],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-selector-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-selector/component", ["exports", "pipeline/components/pipeline-selector/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function populateRule(out, type, field, value) {
    if (out[type] && out[type][field]) {
      if (out[type][field].indexOf(value) === -1) {
        out[type][field].push(value);
      }
    } else {
      if (!out[type]) {
        out[type] = {};
      }

      out[type][field] = [value];
    }
  }

  var _default = Ember.Component.extend({
    layout: _template.default,
    type: null,
    config: null,
    isInclude: null,
    ruleArray: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initRuleArray();
    },
    actions: {
      addRule: function addRule() {
        var newRule = {
          key: 'branch',
          value: ''
        };
        Ember.get(this, 'ruleArray').pushObject(newRule);
      },
      removeRule: function removeRule(rule) {
        Ember.get(this, 'ruleArray').removeObject(rule);
      }
    },
    inputChanged: Ember.observer('ruleArray.@each.{key,value}', function () {
      var _this = this;

      var ruleArray = Ember.get(this, 'ruleArray').filter(function (r) {
        return r.value && r.key;
      }) || [];
      var out = {};
      ruleArray.forEach(function (rule) {
        if (Ember.get(_this, 'isInclude')) {
          populateRule(out, rule.key, 'include', rule.value);
        } else {
          populateRule(out, rule.key, 'exclude', rule.value);
        }
      });
      Ember.set(this, 'config', out);
    }),
    initRuleArray: function initRuleArray() {
      var ruleArray = [];
      var key = Ember.get(this, 'isInclude') ? 'include' : 'exclude';
      (Ember.get(this, "config.branch.".concat(key)) || []).forEach(function (v) {
        ruleArray.push({
          key: 'branch',
          value: v
        });
      });
      (Ember.get(this, "config.event.".concat(key)) || []).forEach(function (v) {
        ruleArray.push({
          key: 'event',
          value: v
        });
      });
      Ember.set(this, 'ruleArray', ruleArray);
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-selector/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "93LOiuwN",
    "block": "{\"symbols\":[\"rule\"],\"statements\":[[7,\"div\"],[11,\"class\",\"mb-20\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[[27,\"if\",[[23,[\"isInclude\"]],\"pipelineSelector.title.include\",\"pipelineSelector.title.exclude\"],null]],[[\"type\"],[[23,[\"type\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"ruleArray\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"table\"],[11,\"class\",\"table fixed no-lines mb-20\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"branchOnly\"]]],null,{\"statements\":[[0,\"          \"],[7,\"th\"],[11,\"class\",\"acc-label\"],[11,\"width\",\"60\"],[9],[1,[27,\"t\",[\"pipelineSelector.table.type\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"th\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"pipelineSelector.table.type\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[0,\" \"],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"pipelineSelector.table.value\"],null],false],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"width\",\"10\"],[9],[0,\" \"],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"ruleArray\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"pipeline-selector-row\",null,[[\"branchOnly\",\"remove\",\"rule\"],[[23,[\"branchOnly\"]],[27,\"action\",[[22,0,[]],\"removeRule\"],null],[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[10],[0,\"\\n  \"],[7,\"span\"],[9],[1,[27,\"t\",[\"pipelineSelector.addRule\"],null],false],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"addRule\"]],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-selector/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-stages/component", ["exports", "shared/utils/pipeline-constants"], function (_exports, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    modalService: Ember.inject.service('modal'),
    model: null,
    pipeline: null,
    selectedConfig: null,
    actions: {
      addStage: function addStage() {
        var _this = this;

        Ember.get(this, 'modalService').toggleModal('modal-pipeline-new-stage', {
          save: function save(stage) {
            var stages = Ember.get(_this, 'selectedConfig.stages');
            stages.pushObject(stage);
            Ember.get(_this, 'modalService').toggleModal();
          }
        });
      },
      editStage: function editStage(index) {
        var _this2 = this;

        var stage = Ember.get(this, 'selectedConfig.stages').get(index);
        Ember.get(this, 'modalService').toggleModal('modal-pipeline-new-stage', {
          stage: Object.assign({}, stage),
          save: function save(stage) {
            Ember.get(_this2, 'selectedConfig.stages').replace(index, 1, [stage]);
            Ember.get(_this2, 'modalService').toggleModal();
          },
          remove: function remove() {
            Ember.get(_this2, 'selectedConfig.stages').replace(index, 1);
            Ember.get(_this2, 'modalService').toggleModal();
          }
        });
      }
    },
    envvars: _pipelineConstants.default.ENV_VARS
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-stages/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cdAJG6wU",
    "block": "{\"symbols\":[\"item\",\"index\"],\"statements\":[[7,\"section\"],[11,\"class\",\"pipeline-stages\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"selectedConfig\",\"stages\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"stage-wrap\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"stage-container\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,2,[]],0],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"stage-name text-capitalize clip\"],[9],[0,\"\\n            \"],[1,[27,\"index-add\",[[22,2,[]]],null],false],[0,\". \"],[1,[22,1,[\"name\"]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"arrow-down\"],[9],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"arrow-next\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"line inline-block\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"arrow-right inline-block\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"stage-name clip\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[11,\"style\",\"cursor: pointer; line-height: 2\"],[9],[3,\"action\",[[22,0,[]],\"editStage\",[22,2,[]]]],[10],[0,\"\\n            \"],[7,\"span\"],[9],[1,[27,\"index-add\",[[22,2,[]]],null],false],[0,\". \"],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"arrow-down\"],[9],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"arrow-next\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"line inline-block\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"arrow-right inline-block\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n        \"],[1,[27,\"pipeline-steps\",null,[[\"pipeline\",\"stages\",\"currentStageIndex\",\"projectDockerCredentials\",\"steps\"],[[23,[\"pipeline\"]],[23,[\"selectedConfig\",\"stages\"]],[22,2,[]],[23,[\"projectDockerCredentials\"]],[22,1,[\"steps\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[7,\"div\"],[11,\"class\",\"stage-wrap\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"new-stage-button stage-name\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon icon-plus\"],[9],[10],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStage.header.create\"],null],false],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"addStage\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"pipeline-input-var-hint\",null,[[\"hintAry\",\"loading\"],[[23,[\"envvars\"]],false]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-stages/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-step-form/component", ["exports", "pipeline/components/pipeline-step-form/template", "shared/utils/pipeline-constants"], function (_exports, _template, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    editing: null,
    type: Ember.computed.alias('model.type'),
    stepName: Ember.computed('type', function () {
      return "steps/step-".concat(Ember.get(this, 'type'));
    }),
    stepsChoices: _pipelineConstants.default.STEPS_CHOICES
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-step-form/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bs0b5G0h",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"inline-form\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.label\"],null],false],[1,[21,\"field-required\"],false],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"content\",\"localizedLabel\",\"value\"],[[23,[\"stepsChoices\"]],true,[23,[\"type\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"component\",[[23,[\"stepName\"]]],[[\"editing\",\"projectDockerCredentials\",\"initConfig\",\"save\",\"cancel\"],[[23,[\"editing\"]],[23,[\"projectDockerCredentials\"]],[23,[\"model\"]],[23,[\"save\"]],[23,[\"cancel\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-step-form/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-steps/component", ["exports", "shared/utils/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    modalService: Ember.inject.service('modal'),
    steps: null,
    pipeline: null,
    stages: null,
    currentStageIndex: null,
    actions: {
      addStep: function addStep() {
        var _this = this;

        Ember.get(this, 'modalService').toggleModal('modal-pipeline-new-step', {
          save: function save(step) {
            Ember.get(_this, 'steps').pushObject(step);
          },
          projectDockerCredentials: Ember.get(this, 'projectDockerCredentials')
        });
      },
      editStep: function editStep(index) {
        var _this2 = this;

        var step = Ember.get(this, 'steps').get(index);
        Ember.get(this, 'modalService').toggleModal('modal-pipeline-new-step', {
          save: function save(step) {
            Ember.get(_this2, 'steps').replace(index, 1, [step]);
          },
          remove: function remove() {
            Ember.get(_this2, 'steps').replace(index, 1);
          },
          step: (0, _util.deepCopy)(step),
          projectDockerCredentials: Ember.get(this, 'projectDockerCredentials')
        });
      }
    },
    isScm: Ember.computed('steps.[]', function () {
      return !!Ember.get(this, 'steps.firstObject.sourceCodeConfig');
    })
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-steps/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Hhyhe+xy",
    "block": "{\"symbols\":[\"step\",\"index\"],\"statements\":[[7,\"div\"],[11,\"class\",\"pipeline-steps\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"steps-wrap\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"steps\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"step-content\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isScm\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"step-name text-muted\"],[9],[0,\"\\n            \"],[1,[27,\"step-summary\",null,[[\"model\",\"pipeline\"],[[22,1,[]],[23,[\"pipeline\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"step-name text-muted\"],[9],[0,\"\\n            \"],[1,[27,\"step-summary\",null,[[\"model\",\"pipeline\"],[[22,1,[]],[23,[\"pipeline\"]]]]],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"editStep\",[22,2,[]]]],[10],[0,\"         \\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[4,\"unless\",[[23,[\"isScm\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"mt-10 p-0 step-button step-content text-center\"],[11,\"style\",\"margin: 0 auto;\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-plus\"],[9],[10],[0,\"\\n          \"],[1,[27,\"t\",[\"newPipelineStage.addStep\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"addStep\"]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-steps/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-trigger/component", ["exports", "pipeline/components/pipeline-trigger/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    pipeline: null
  });

  _exports.default = _default;
});
define("pipeline/components/pipeline-trigger/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KYR3a78R",
    "block": "{\"symbols\":[],\"statements\":[[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.trigger\"],null],false],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row mb-20\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"pipeline\",\"triggerWebhookPush\"]]]]],false],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStage.trigger.webhook\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"pipeline\",\"triggerWebhookPr\"]]]]],false],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStage.trigger.webhookPR\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"pipeline\",\"triggerWebhookTag\"]]]]],false],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStage.trigger.webhookTag\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/pipeline-trigger/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/pretty-json/component", "pipeline/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "pipeline/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "pipeline/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "pipeline/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "pipeline/components/radio-button/component");
define("pipeline/components/repository-row/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    growl: Ember.inject.service(),
    intl: Ember.inject.service(),
    router: Ember.inject.service(),
    tagName: 'TR',
    classNames: 'main-row',
    toggling: false,
    row: null,
    sourceCodeCredentialId: null,
    pipeline: Ember.computed.alias('model.pipelineConfig'),
    actions: {
      disable: function disable() {
        Ember.set(this, 'toggling', true);
        Ember.get(this, 'row.pipeline').send('delete');
      },
      enable: function enable() {
        var _this = this;

        Ember.set(this, 'toggling', true);
        var pipeline = Ember.get(this, 'store').createRecord({
          type: 'pipeline'
        });
        var sourceCodeCredentialId = Ember.get(this, 'row.sourceCodeCredentialId');

        if (sourceCodeCredentialId) {
          Ember.set(pipeline, 'sourceCodeCredentialId', sourceCodeCredentialId);
        }

        Ember.set(pipeline, 'repositoryUrl', Ember.get(this, 'row.url'));
        Ember.set(pipeline, 'triggerWebhookPr', false);
        Ember.set(pipeline, 'triggerWebhookPush', !!sourceCodeCredentialId);
        Ember.set(pipeline, 'triggerWebhookTag', false);
        pipeline.save().catch(function (err) {
          Ember.get(_this, 'growl').fromError(err.message);
        }).finally(function () {
          Ember.set(_this, 'toggling', false);
        });
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/repository-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cSrLakkE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"repositories.table.repository\"],null],\":\"]]],[9],[0,\"\\n  \"],[1,[23,[\"row\",\"url\"]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"td\"],[11,\"data-title\",\"actions:\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"row\",\"pipeline\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"btn-group no-inline-space\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-default\"],[12,\"disabled\",[21,\"toggling\"]],[11,\"style\",\"width: 80px;\"],[9],[4,\"if\",[[23,[\"toggling\"]]],null,{\"statements\":[[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"]],\"parameters\":[]},null],[1,[27,\"t\",[\"generic.disable\"],null],false],[3,\"action\",[[22,0,[]],\"disable\"]],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-success\"],[11,\"style\",\"cursor: not-allowed;width: 80px;\"],[9],[1,[27,\"t\",[\"generic.enabled\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"btn-group no-inline-space\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-primary\"],[11,\"style\",\"cursor: not-allowed;width: 80px;\"],[9],[1,[27,\"t\",[\"generic.disabled\"],null],false],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-link btn-sm bg-defualt\"],[12,\"disabled\",[21,\"toggling\"]],[11,\"style\",\"width: 80px;\"],[9],[4,\"if\",[[23,[\"toggling\"]]],null,{\"statements\":[[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"]],\"parameters\":[]},null],[1,[27,\"t\",[\"generic.enable\"],null],false],[3,\"action\",[[22,0,[]],\"enable\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/repository-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/resource-condition-list/component", "pipeline/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "pipeline/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "pipeline/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "pipeline/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "pipeline/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "pipeline/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "pipeline/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "pipeline/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "pipeline/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "pipeline/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "pipeline/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "pipeline/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "pipeline/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "pipeline/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "pipeline/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "pipeline/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "pipeline/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "pipeline/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "pipeline/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "pipeline/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "pipeline/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "pipeline/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "pipeline/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "pipeline/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "pipeline/components/search-text/component");
define.alias("shared/components/searchable-select/component", "pipeline/components/searchable-select/component");
define("pipeline/components/settings-git/component", ["exports", "shared/utils/util", "shared/utils/parse-unit"], function (_exports, _util, _parseUnit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    growl: Ember.inject.service(),
    intl: Ember.inject.service(),
    classNames: ['accordion-wrapper'],
    selectedOauthType: 'github',
    oauthModel: {},
    scale: null,
    confirmDisable: false,
    showCert: false,
    scaleTimer: null,
    cacerts: null,
    didReceiveAttrs: function didReceiveAttrs() {
      if (Ember.get(this, 'settings.length') === 0) {
        return;
      }

      var quota = Ember.get(this, 'settings').findBy('name', 'executor-quota');
      var cacerts = Ember.get(this, 'settings').findBy('name', 'git-cacerts');
      var cpuRequest = Ember.get(this, 'settings').findBy('name', 'executor-cpu-request');
      var cpuLimit = Ember.get(this, 'settings').findBy('name', 'executor-cpu-limit');
      var memoryRequest = Ember.get(this, 'settings').findBy('name', 'executor-memory-request');
      var memoryLimit = Ember.get(this, 'settings').findBy('name', 'executor-memory-limit');
      Ember.setProperties(this, {
        scale: quota,
        cacerts: cacerts,
        cpuRequest: (0, _util.convertToMillis)(Ember.get(cpuRequest, 'value')),
        cpuLimit: (0, _util.convertToMillis)(Ember.get(cpuLimit, 'value')),
        memoryRequest: (0, _parseUnit.parseSi)(Ember.get(memoryRequest, 'value'), 1024) / 1048576,
        memoryLimit: (0, _parseUnit.parseSi)(Ember.get(memoryLimit, 'value'), 1024) / 1048576,
        'oauthModel.clientId': '',
        'oauthModel.clientSecret': ''
      });
      var provider = Ember.get(this, 'provider');

      if (provider) {
        Ember.set(this, 'selectedOauthType', Ember.get(provider, 'name'));
      }
    },
    actions: {
      showCert: function showCert() {
        Ember.set(this, 'showCert', true);
      },
      hideCert: function hideCert() {
        Ember.set(this, 'showCert', false);
      },
      saveCert: function saveCert(cb) {
        var _this = this;

        Ember.get(this, 'cacerts').save().then(function () {
          cb(true);
        }).catch(function (err) {
          Ember.get(_this, 'growl').fromError('Error saving cacerts', err);
          cb(false);
        });
      },
      saveLimit: function saveLimit(cb) {
        var _this2 = this;

        var cpuRequest = Ember.get(this, 'settings').findBy('name', 'executor-cpu-request');
        var cpuLimit = Ember.get(this, 'settings').findBy('name', 'executor-cpu-limit');
        var memoryRequest = Ember.get(this, 'settings').findBy('name', 'executor-memory-request');
        var memoryLimit = Ember.get(this, 'settings').findBy('name', 'executor-memory-limit');
        Ember.set(cpuRequest, 'value', "".concat(Ember.get(this, 'cpuRequest'), "m"));
        Ember.set(cpuLimit, 'value', "".concat(Ember.get(this, 'cpuLimit'), "m"));
        Ember.set(memoryRequest, 'value', "".concat(Ember.get(this, 'memoryRequest'), "Mi"));
        Ember.set(memoryLimit, 'value', "".concat(Ember.get(this, 'memoryLimit'), "Mi"));
        return Ember.RSVP.all([cpuRequest.save(), cpuLimit.save(), memoryRequest.save(), memoryLimit.save()]).then(function () {
          cb(true);
        }).catch(function (err) {
          Ember.get(_this2, 'growl').fromError(Ember.get(_this2, 'intl').t('pipelinesSetting.error.limit'), err);
          cb(false);
        });
      },
      scaleDown: function scaleDown() {
        Ember.set(this, 'scale.value', parseInt(Ember.get(this, 'scale.value'), 10) - 1);
        this.saveScale();
      },
      scaleUp: function scaleUp() {
        Ember.set(this, 'scale.value', parseInt(Ember.get(this, 'scale.value'), 10) + 1);
        this.saveScale();
      },
      changeOauthType: function changeOauthType(type) {
        Ember.set(this, 'selectedOauthType', type);
        var store = Ember.get(this, 'store');
        Ember.set(this, 'oauthModel', store.createRecord({
          type: 'sourcecodecredential',
          scheme: true
        }));
      },
      disable: function disable() {
        var provider = Ember.get(this, 'provider');
        Ember.set(this, 'disabling', true);
        provider.doAction('disable').then(function () {
          window.location.reload();
        });
      },
      promptDisable: function promptDisable() {
        Ember.set(this, 'confirmDisable', true);
        Ember.run.later(this, function () {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.set(this, 'confirmDisable', false);
        }, 10000);
      }
    },
    providerComponent: Ember.computed('selectedOauthType', function () {
      return "".concat(Ember.get(this, 'selectedOauthType'), "-setting");
    }),
    provider: Ember.computed('selectedOauthType', 'providers.@each.enabled', function () {
      var enabled = Ember.get(this, 'providers').findBy('enabled', true);
      var selected = Ember.get(this, 'providers').findBy('name', Ember.get(this, 'selectedOauthType'));

      if (enabled) {
        return enabled;
      } else if (selected) {
        return selected;
      } else {
        return Ember.get(this, 'providers.firstObject');
      }
    }),
    isBitbucket: Ember.computed('selectedOauthType', function () {
      var selected = Ember.get(this, 'selectedOauthType');
      return selected === 'bitbucketcloud' || selected === 'bitbucketserver';
    }),
    isBitbucketCloud: Ember.computed('selectedOauthType', function () {
      var selected = Ember.get(this, 'selectedOauthType');
      return selected === 'bitbucketcloud';
    }),
    isGithub: Ember.computed('selectedOauthType', function () {
      var selected = Ember.get(this, 'selectedOauthType');
      return selected === 'github';
    }),
    isGitlab: Ember.computed('selectedOauthType', function () {
      var selected = Ember.get(this, 'selectedOauthType');
      return selected === 'gitlab';
    }),
    saveScale: function saveScale() {
      if (Ember.get(this, 'scaleTimer')) {
        Ember.run.cancel(Ember.get(this, 'scaleTimer'));
      }

      var timer = Ember.run.later(this, function () {
        var _this3 = this;

        Ember.get(this, 'scale').save().catch(function (err) {
          Ember.get(_this3, 'growl').fromError('Error updating executor quota', err);
        });
      }, 500);
      Ember.set(this, 'scaleTimer', timer);
    }
  });

  _exports.default = _default;
});
define("pipeline/components/settings-git/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GTkq4XOA",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"providers\",\"length\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"provider\",\"enabled\"]]],null,{\"statements\":[[0,\"    \"],[7,\"section\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row nav nav-boxes checked-active\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"alt\",\"github\"],[12,\"class\",[28,[\"col span-2 nav-box-item driver \",[27,\"if\",[[23,[\"isGithub\"]],\"active\",\"\"],null]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"auth-driver github-for-pipeline\"],[9],[10],[0,\"\\n          \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.github\"],null],false],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"changeOauthType\",\"github\"]],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"alt\",\"gitlab\"],[12,\"class\",[28,[\"col span-2 nav-box-item driver \",[27,\"if\",[[23,[\"isGitlab\"]],\"active\",\"\"],null]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"auth-driver gitlab\"],[9],[10],[0,\"\\n          \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.gitlab\"],null],false],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"changeOauthType\",\"gitlab\"]],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"alt\",\"bitbucket\"],[12,\"class\",[28,[\"col span-2 nav-box-item driver \",[27,\"if\",[[23,[\"isBitbucket\"]],\"active\",\"\"],null]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"auth-driver bitbucket\"],[9],[10],[0,\"\\n          \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.bitbucket\"],null],false],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"changeOauthType\",\"bitbucketcloud\"]],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"provider\",\"enabled\"]]],null,{\"statements\":[[0,\"    \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.header\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"section\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row nav nav-boxes checked-active\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[12,\"alt\",[21,\"selectedOauthType\"]],[11,\"class\",\"col span-2 nav-box-item driver active\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isGithub\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"auth-driver github-for-pipeline\"],[9],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.github\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"isGitlab\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"auth-driver gitlab\"],[9],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.gitlab\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"isBitbucket\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"auth-driver bitbucket\"],[9],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"generic.bitbucket\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"authPage.setting.executor.label\"],null],false],[10],[0,\"\\n      \"],[7,\"hr\"],[9],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"authPage.setting.executor.scale\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"pr-5\"],[9],[0,\"\\n          \"],[1,[23,[\"scale\",\"value\"]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"btn-group btn-group-xs p-0\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn btn-xs bg-primary\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-minus icon-fw\"],[9],[10],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"scaleDown\"]],[10],[0,\"\\n          \"],[7,\"button\"],[11,\"style\",\"margin-left: -1px;\"],[11,\"class\",\"btn btn-xs bg-primary\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-plus icon-fw\"],[9],[10],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"scaleUp\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.setting.limit.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"hr\"],[9],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"formSecurity.memoryReservation.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"memoryRequest\"]],\"form-control\",[27,\"t\",[\"formSecurity.memoryReservation.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"formSecurity.memoryLimit.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[23,[\"memoryLimit\"]],\"form-control\",[27,\"t\",[\"formSecurity.memoryReservation.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"generic.mibibyte\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"formSecurity.milliCpuReservation.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"with-input\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[23,[\"cpuRequest\"]],\"form-control\",[27,\"t\",[\"formSecurity.milliCpuReservation.placeholder\"],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"formSecurity.milliCpuReservation.unit\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"formSecurity.cpuLimit.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"with-input\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n              \"],[1,[27,\"input-integer\",null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[23,[\"cpuLimit\"]],\"form-control\",[27,\"t\",[\"formSecurity.milliCpuReservation.placeholder\"],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"formSecurity.milliCpuReservation.unit\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row ml-10 mt-10\"],[9],[0,\"\\n        \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancelDisabled\"],[\"authPage.setting.limit.saveActionLabel\",[27,\"action\",[[22,0,[]],\"saveLimit\"],null],true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.setting.cacerts.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showCert\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"schema/input-multiline\",null,[[\"value\",\"placeholder\"],[[23,[\"cacerts\",\"value\"]],[27,\"t\",[\"newCertificate.cert.placeholder\"],null]]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row ml-10 mt-10\"],[9],[0,\"\\n          \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[\"authPage.setting.cacerts.saveActionLabel\",[27,\"action\",[[22,0,[]],\"saveCert\"],null],[27,\"action\",[[22,0,[]],\"hideCert\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row ml-10 mt-10\"],[9],[0,\"\\n          \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancelDisabled\"],[\"authPage.setting.cacerts.show\",[27,\"action\",[[22,0,[]],\"showCert\"],null],true]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"section\"],[11,\"class\",\"box mt-30\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"authPage.authenticated.header.text\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"provider\",\"hostname\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[9],[0,\"\\n          \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.authenticated.header.enterpriseHostName\"],null],false],[0,\" \"],[10],[0,\"\\n          \"],[7,\"a\"],[12,\"href\",[28,[[27,\"if\",[[23,[\"provider\",\"tls\"]],\"https\",\"http\"],null],\"://\",[23,[\"provider\",\"hostname\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[1,[23,[\"provider\",\"hostname\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"isBitbucketCloud\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[9],[0,\"\\n          \"],[7,\"b\"],[9],[1,[27,\"t\",[\"authPage.authenticated.header.enterpriseHostName\"],null],false],[0,\" \"],[10],[0,\"\\n          \"],[7,\"a\"],[11,\"href\",\"https://bitbucket.org\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noreferrer\"],[9],[0,\"bitbucket.org\"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"provider\",\"clientId\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[9],[0,\"\\n          \"],[7,\"b\"],[9],[1,[27,\"t\",[[27,\"if\",[[23,[\"isBitbucket\"]],\"authPage.authenticated.header.key.text\",\"authPage.authenticated.header.clientId.text\"],null]],null],false],[0,\" \"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[1,[23,[\"provider\",\"clientId\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"row mt-30 text-center\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"confirmDisable\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"disabling\"]]],null,{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"class\",\"btn bg-disabled\"],[11,\"disabled\",\"disabled\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"generic.saving\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"class\",\"btn bg-primary\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-alert\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"pipelinesSetting.sureToDisableOAuth\"],null],false],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"disable\"]],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"button\"],[11,\"class\",\"btn bg-primary\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-umbrella\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"pipelinesSetting.disableOAuth\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"promptDisable\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"unless\",[[23,[\"provider\",\"enabled\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[23,[\"providerComponent\"]]],[[\"switch\",\"provider\",\"oauthModel\",\"githubAuthConfig\"],[[27,\"action\",[[22,0,[]],\"changeOauthType\"],null],[23,[\"provider\"]],[23,[\"oauthModel\"]],[23,[\"githubAuthConfig\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-info\",[27,\"t\",[\"pipelinesSetting.info.noPermission\"],null]]]],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/settings-git/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/settings/danger-zone/component", "pipeline/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "pipeline/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "pipeline/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "pipeline/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "pipeline/components/shortcut-key/component");
define("pipeline/components/sortable-objects", ["exports", "ember-drag-drop/components/sortable-objects"], function (_exports, _sortableObjects) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _sortableObjects.default;
  _exports.default = _default;
});
define.alias("shared/components/sortable-table/component", "pipeline/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "pipeline/components/sortable-thead/component");
define("pipeline/components/step-summary/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
define("pipeline/components/step-summary/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "upgMVKyT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"pipeline-child-limit\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"sourceCodeConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"pipeline\",\"url\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[11,\"style\",\"width: 100%;\"],[9],[1,[23,[\"pipeline\",\"url\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"applyYamlConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"model\",\"applyYamlConfig\",\"path\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.applyYaml.label\"],null],false],[0,\": \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[11,\"style\",\"width: 100%;\"],[9],[1,[23,[\"model\",\"applyYamlConfig\",\"path\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"runScriptConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"model\",\"runScriptConfig\",\"image\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.task.label\"],null],false],[0,\": \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[23,[\"model\",\"runScriptConfig\",\"image\"]],false],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-small mt-0 mb-0 clip text-italic\"],[9],[1,[23,[\"model\",\"runScriptConfig\",\"shell\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"publishCatalogConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"model\",\"publishCatalogConfig\",\"gitUrl\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.label\"],null],false],[0,\": \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[23,[\"model\",\"publishCatalogConfig\",\"catalogTemplate\"]],false],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-small mt-0 mb-0 clip text-italic\"],[9],[1,[23,[\"model\",\"publishCatalogConfig\",\"gitUrl\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"applyAppConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"model\",\"applyAppConfig\",\"catalogTemplate\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.label\"],null],false],[0,\": \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[23,[\"model\",\"applyAppConfig\",\"catalogTemplate\"]],false],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-small mt-0 mb-0 clip text-italic\"],[9],[1,[23,[\"model\",\"applyAppConfig\",\"targetNamespace\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"publishImageConfig\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"inlineBlock\",\"type\",\"tooltipTemplate\",\"baseClass\",\"model\",\"tagName\",\"tooltipFor\"],[true,\"tooltip-basic\",\"tooltip-static\",\"border\",[23,[\"model\",\"publishImageConfig\",\"tag\"]],\"span\",\"tooltip-basic\"]],{\"statements\":[[0,\"    \"],[7,\"i\"],[11,\"class\",\"icon icon-edit pull-right\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.build.label\"],null],false],[0,\": \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"mt-0 mb-0 clip\"],[9],[1,[23,[\"model\",\"publishImageConfig\",\"tag\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/step-summary/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-apply-catalog/component", ["exports", "pipeline/components/steps/step-apply-catalog/template", "pipeline/mixins/step"], function (_exports, _template, _step) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_CONFIG = {
    path: './deployment.yaml'
  };

  var _default = Ember.Component.extend(_step.default, {
    catalog: Ember.inject.service(),
    scope: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    layout: _template.default,
    config: null,
    field: 'applyAppConfig',
    defaultConfig: DEFAULT_CONFIG,
    loading: false,
    init: function init() {
      this._super.apply(this, arguments);

      this.initNamespace();
      this.initCatalog();
    },
    appDidChange: Ember.observer('config.applyAppConfig.catalogTemplate', function () {
      Ember.set(this, 'versions', null);
      var name = Ember.get(this, 'config.applyAppConfig.catalogTemplate');

      if (!name) {
        return;
      }

      var app = Ember.get(this, 'apps').findBy('id', name);
      var versions = [];

      if (app) {
        Object.keys(Ember.get(app, 'versionLinks') || {}).forEach(function (v) {
          versions.push({
            id: v,
            name: v
          });
        });
      }

      Ember.set(this, 'versions', versions);
      var version = Ember.get(this, 'config.applyAppConfig.version');

      if (version) {
        if (!versions.findBy('id', version)) {
          Ember.set(this, 'config.applyAppConfig.version', null);
        }
      } else if (Ember.get(versions, 'length')) {
        Ember.set(this, 'config.applyAppConfig.version', Ember.get(this, 'versions.lastObject.id'));
      }
    }),
    catalogDidChange: Ember.observer('selectedCatalog', function () {
      var catalog = Ember.get(this, 'selectedCatalog');
      var apps = Ember.get(this, 'allApps').filter(function (app) {
        return Ember.get(app, 'catalogId') === catalog || Ember.get(app, 'clusterCatalogId') === catalog || Ember.get(app, 'projectCatalogId') === catalog;
      });
      Ember.set(this, 'apps', apps);
      var app = Ember.get(this, 'config.applyAppConfig.catalogTemplate');

      if (!apps.findBy('id', app)) {
        Ember.set(this, 'config.applyAppConfig.catalogTemplate', null);
      }
    }),
    namespaceDidChange: Ember.observer('namespace.id', 'namespace.name', function () {
      Ember.set(this, 'config.applyAppConfig.targetNamespace', Ember.get(this, 'namespace.id') || Ember.get(this, 'namespace.name'));
    }),
    initNamespace: function initNamespace() {
      var namespaceId = Ember.get(this, 'config.applyAppConfig.targetNamespace');

      if (namespaceId) {
        Ember.set(this, 'namespace', {
          id: namespaceId
        });
      }
    },
    initCatalog: function initCatalog() {
      var _this = this;

      var catalog = Ember.get(this, 'catalog');
      Ember.set(this, 'loading', true);
      catalog.fetchUnScopedCatalogs().then(function (hash) {
        return catalog.fetchTemplates().then(function () {
          Ember.set(_this, 'allApps', catalog._allTemplates);

          _this.setCatalogs(hash);
        });
      }).finally(function () {
        Ember.set(_this, 'loading', false);
      });
    },
    setCatalogs: function setCatalogs(_ref) {
      var globalCatalogs = _ref.globalCatalogs,
          clusterCatalogs = _ref.clusterCatalogs,
          projectCatalogs = _ref.projectCatalogs;
      var clusterId = Ember.get(this, 'scope.currentCluster.id');
      var projectId = Ember.get(this, 'scope.currentProject.id');
      var catalogs = globalCatalogs.filter(function (c) {
        return Ember.get(c, 'id') !== 'system-library';
      });
      catalogs.pushObjects(projectCatalogs.filterBy('projectId', projectId));
      catalogs.pushObjects(clusterCatalogs.filterBy('clusterId', clusterId));
      Ember.set(this, 'catalogs', catalogs.map(function (obj) {
        return {
          name: obj.name || '',
          id: obj.id
        };
      }));
      var templateId = Ember.get(this, 'config.applyAppConfig.catalogTemplate');

      if (templateId) {
        var c = Ember.get(this, 'allApps').findBy('id', templateId);

        if (c) {
          this.appDidChange();
        }
      }
    },
    validate: function validate() {
      var errors = [];
      this.validateField('catalogTemplate', errors);
      this.validateField('name', errors);
      this.validateField('version', errors);
      this.validateField('targetNamespace', errors);
      return errors;
    },
    validateField: function validateField(key, errors) {
      var intl = Ember.get(this, 'intl');
      var config = Ember.get(this, 'config.applyAppConfig');

      if (!Ember.get(config, key) || Ember.get(config, key).trim() === '') {
        errors.push(intl.t('generic.required', {
          key: intl.t("newPipelineStep.stepType.applyApp.".concat(key, ".label"))
        }));
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-apply-catalog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "o0L/hfMr",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"row mt-10\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin\"],[11,\"style\",\"font-size:36px;\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-10\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.catalog.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"searchable-select\",null,[[\"class\",\"content\",\"allowCustom\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[\"form-control\",[23,[\"catalogs\"]],true,[23,[\"selectedCatalog\"]],\"id\",\"name\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.catalogTemplate.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"searchable-select\",null,[[\"class\",\"content\",\"allowCustom\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[\"form-control\",[23,[\"apps\"]],true,[23,[\"config\",\"applyAppConfig\",\"catalogTemplate\"]],\"id\",\"name\"]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.catalogTemplate.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.version.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"searchable-select\",null,[[\"class\",\"content\",\"allowCustom\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[\"form-control\",[23,[\"versions\"]],true,[23,[\"config\",\"applyAppConfig\",\"version\"]],\"id\",\"name\"]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.version.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[1,[27,\"form-namespace\",null,[[\"namespace\",\"editing\"],[[23,[\"namespace\"]],true]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.targetNamespace.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyApp.name.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"applyAppConfig\",\"name\"]],[27,\"t\",[\"newPipelineStep.stepType.applyApp.name.placeholder\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[1,[27,\"form-key-value\",null,[[\"initialMap\",\"changed\",\"header\",\"addActionLabel\"],[[23,[\"config\",\"applyAppConfig\",\"answers\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"applyAppConfig\",\"answers\"]]],null]],null],[27,\"t\",[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"    \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"step\",[23,[\"config\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"state\",\"saveDisabled\"]],[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-apply-catalog/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-apply-yaml/component", ["exports", "pipeline/components/steps/step-apply-yaml/template", "pipeline/mixins/step"], function (_exports, _template, _step) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_CONFIG = {
    path: './deployment.yaml'
  };

  var _default = Ember.Component.extend(_step.default, {
    layout: _template.default,
    config: null,
    field: 'applyYamlConfig',
    defaultConfig: DEFAULT_CONFIG,
    validate: function validate() {
      var intl = Ember.get(this, 'intl');
      var errors = [];
      var config = Ember.get(this, 'config.applyYamlConfig');

      if (!config.path || config.path.trim() === '') {
        errors.push(intl.t('newPipelineStep.stepType.applyYaml.errors.path.required'));
      }

      return errors;
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-apply-yaml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "x1TwECY5",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mt-10 mb-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.applyYaml.yaml\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"class\",\"value\"],[\"form-control\",[23,[\"config\",\"applyYamlConfig\",\"path\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-10 mb-20\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.env\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"form-key-value\",null,[[\"allowMultilineValue\",\"initialMap\",\"changed\",\"allowEmptyValue\",\"normalHeader\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[false,[23,[\"config\",\"env\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"env\"]]],null]],null],false,[27,\"t\",[\"newContainer.environment.label\"],null],\"newContainer.environment.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"e.g. bar\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row mb-20\"],[9],[0,\"\\n    \"],[1,[27,\"pipeline-env-from\",null,[[\"sources\",\"changed\"],[[23,[\"config\",\"envFrom\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"envFrom\"]]],null]],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"step\",[23,[\"config\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"state\",\"saveDisabled\"]],[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-apply-yaml/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-build/component", ["exports", "pipeline/components/steps/step-build/template", "pipeline/mixins/step"], function (_exports, _template, _step) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_CONFIG = {
    dockerfilePath: './Dockerfile',
    buildContext: '.',
    tag: '',
    pushRemote: false,
    registry: ''
  };

  var _default = Ember.Component.extend(_step.default, {
    layout: _template.default,
    config: null,
    field: 'publishImageConfig',
    defaultConfig: DEFAULT_CONFIG,
    registries: Ember.computed.alias('projectDockerCredentials'),
    validate: function validate() {
      var intl = Ember.get(this, 'intl');
      var errors = [];
      var config = Ember.get(this, 'config.publishImageConfig');

      if (!config.tag || config.tag.trim() === '') {
        errors.push(intl.t('newPipelineStep.stepType.build.errors.tag.required'));
      }

      if (!config.dockerfilePath || config.dockerfilePath.trim() === '') {
        errors.push(intl.t('newPipelineStep.stepType.build.errors.dockerfilePath.required'));
      }

      if (config.pushRemote && (!config.registry || config.registry.trim() === '')) {
        errors.push(intl.t('newPipelineStep.stepType.build.errors.registry.required'));
      }

      return errors;
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-build/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nH9aywA7",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mt-10 mb-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.build.dockerFilePath\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"class\",\"value\"],[\"form-control\",[23,[\"config\",\"publishImageConfig\",\"dockerfilePath\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"dvi\"],[11,\"class\",\"row mt-10 mb-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"generic.imageName\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishImageConfig\",\"tag\"]],[27,\"t\",[\"newPipelineStep.stepType.build.imageName.placeholder\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row mt-10 mb-10\"],[9],[0,\"\\n  \"],[1,[27,\"input-registry\",null,[[\"registries\",\"config\"],[[23,[\"registries\"]],[23,[\"config\",\"publishImageConfig\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.build.buildContext\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\"],[\"form-control\",[23,[\"config\",\"publishImageConfig\",\"buildContext\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"step\",[23,[\"config\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"state\",\"saveDisabled\"]],[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-build/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-push-catalog/component", ["exports", "pipeline/components/steps/step-push-catalog/template", "pipeline/mixins/step"], function (_exports, _template, _step) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_CONFIG = {
    gitBranch: 'master'
  };
  var HTTP = 'http://';
  var HTTPS = 'https://';
  var HTTP_MODE = 'http';
  var SSH_MODE = 'ssh';
  var USERNAME = 'USERNAME';
  var PASSWORD = 'PASSWORD';
  var DEPLOY_KEY = 'DEPLOY_KEY';

  var _default = Ember.Component.extend(_step.default, {
    scope: Ember.inject.service(),
    layout: _template.default,
    config: null,
    field: 'publishCatalogConfig',
    defaultConfig: DEFAULT_CONFIG,
    init: function init() {
      this._super.apply(this, arguments);

      this.initMode();
      this.initSecret();
    },
    initMode: function initMode() {
      var url = Ember.get(this, 'config.publishCatalogConfig.gitUrl');

      if (!url || url.startsWith(HTTP) || url.startsWith(HTTPS)) {
        Ember.set(this, 'mode', HTTP_MODE);
      } else {
        Ember.set(this, 'mode', SSH_MODE);
      }
    },
    initSecret: function initSecret() {
      var projectId = Ember.get(this, 'scope.currentProject.id').split(':')[1];
      Ember.set(this, 'namespace', {
        id: "".concat(projectId, "-pipeline")
      });
      var envFrom = Ember.get(this, 'config.envFrom');

      if (envFrom) {
        if (Ember.get(this, 'mode') === HTTP_MODE) {
          this.setSecret(USERNAME);

          if (!Ember.get(this, 'secret')) {
            this.setSecret(PASSWORD);
          }
        } else {
          this.setSecret(DEPLOY_KEY);
        }
      }
    },
    setSecret: function setSecret(key) {
      var envFrom = Ember.get(this, 'config.envFrom');
      var secret = envFrom.findBy('targetkey', key);

      if (!secret) {
        secret = envFrom.filter(function (k) {
          return !Ember.get(k, 'targetkey');
        }).findBy('sourceKey', key);
      }

      if (secret) {
        Ember.set(this, 'secret', Ember.get(secret, 'sourceName'));
      }
    },
    willSave: function willSave() {
      var envFrom = [];

      if (Ember.get(this, 'mode') === HTTP_MODE) {
        envFrom.push({
          sourceName: Ember.get(this, 'secret'),
          sourceKey: USERNAME,
          targetkey: USERNAME
        });
        envFrom.push({
          sourceName: Ember.get(this, 'secret'),
          sourceKey: PASSWORD,
          targetkey: PASSWORD
        });
      } else {
        envFrom.push({
          sourceName: Ember.get(this, 'secret'),
          sourceKey: DEPLOY_KEY,
          targetkey: DEPLOY_KEY
        });
      }

      Ember.set(this, 'config.envFrom', envFrom);
    },
    validate: function validate() {
      var intl = Ember.get(this, 'intl');
      var errors = [];
      this.validateField('path', errors);
      this.validateField('catalogTemplate', errors);
      this.validateField('version', errors);
      this.validateField('gitUrl', errors);
      this.validateField('gitBranch', errors);
      this.validateField('gitAuthor', errors);
      this.validateField('gitEmail', errors);
      var url = Ember.get(this, 'config.publishCatalogConfig.gitUrl');

      if (Ember.get(this, 'mode') === HTTP_MODE && url && !url.startsWith(HTTP) && !url.startsWith(HTTPS)) {
        errors.push(intl.t("newPipelineStep.stepType.publishCatalog.gitUrl.error", {
          key: USERNAME
        }));
      }

      if (Ember.get(this, 'secret')) {
        if (Ember.get(this, 'mode') === HTTP_MODE) {
          if (!Ember.get(this, "selectedSecret.data.".concat(USERNAME))) {
            errors.push(intl.t("newPipelineStep.stepType.publishCatalog.secret.missingKey", {
              key: USERNAME
            }));
          }

          if (!Ember.get(this, "selectedSecret.data.".concat(PASSWORD))) {
            errors.push(intl.t("newPipelineStep.stepType.publishCatalog.secret.missingKey", {
              key: PASSWORD
            }));
          }
        } else {
          if (!Ember.get(this, "selectedSecret.data.".concat(DEPLOY_KEY))) {
            errors.push(intl.t("newPipelineStep.stepType.publishCatalog.secret.missingKey", {
              key: DEPLOY_KEY
            }));
          }
        }
      } else {
        errors.push(intl.t('generic.required', {
          key: intl.t("newPipelineStep.stepType.publishCatalog.secret.label")
        }));
      }

      return errors;
    },
    validateField: function validateField(key, errors) {
      var intl = Ember.get(this, 'intl');
      var config = Ember.get(this, 'config.publishCatalogConfig');

      if (!Ember.get(config, key) || Ember.get(config, key).trim() === '') {
        errors.push(intl.t('generic.required', {
          key: intl.t("newPipelineStep.stepType.publishCatalog.".concat(key, ".label"))
        }));
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-push-catalog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BKurEu7u",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mt-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.path.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"path\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.path.placeholder\"],null]]]],false],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.path.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.catalogTemplate.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"catalogTemplate\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.catalogTemplate.placeholder\"],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.catalogTemplate.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.version.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"version\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.version.placeholder\"],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.version.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.targets.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"mr-10 hand\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"mode\"]],\"http\"]]],false],[0,\" \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.targets.http\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"hand\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"mode\"]],\"ssh\"]]],false],[0,\" \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.targets.ssh\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.secret.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"schema/input-secret\",null,[[\"namespace\",\"value\",\"valueKey\",\"selectedSecret\"],[[23,[\"namespace\"]],[23,[\"secret\"]],\"name\",[23,[\"selectedSecret\"]]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0 pt-5\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"mode\"]],\"http\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.auth.http\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.auth.ssh\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitUrl.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"gitUrl\"]],[27,\"if\",[[27,\"eq\",[[23,[\"mode\"]],\"http\"],null],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitUrl.placeholder.http\"],null],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitUrl.placeholder.ssh\"],null]],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitUrl.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitBranch.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"gitBranch\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitBranch.placeholder\"],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitBranch.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitAuthor.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"gitAuthor\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitAuthor.placeholder\"],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitAuthor.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitEmail.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[23,[\"config\",\"publishCatalogConfig\",\"gitEmail\"]],[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitEmail.placeholder\"],null]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"text-info text-small m-0\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.publishCatalog.gitEmail.helpText\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mb-20\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.env\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"form-key-value\",null,[[\"allowMultilineValue\",\"initialMap\",\"changed\",\"allowEmptyValue\",\"normalHeader\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[false,[23,[\"config\",\"env\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"env\"]]],null]],null],false,[27,\"t\",[\"newContainer.environment.label\"],null],\"newContainer.environment.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"e.g. bar\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"step\",[23,[\"config\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"state\",\"saveDisabled\"]],[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-push-catalog/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-scm/component", ["exports", "pipeline/components/steps/step-scm/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    // Inputs
    pipeline: null,
    accounts: null,
    errors: null,
    // Internal
    url: Ember.computed.alias('pipeline.url'),
    init: function init() {
      this._super.apply(this, arguments);

      if (Ember.get(this, 'url')) {
        this.urlDidChange();
      }
    },
    selectedBranchDidChange: Ember.observer('pipeline.selectedBranch', function () {
      var _this = this;

      var branch = Ember.get(this, 'pipeline.selectedBranch');

      if (branch) {
        Ember.set(this, 'pipeline.loading', true);
        Ember.get(this, 'store').request({
          url: "/v3/projects/".concat(Ember.get(this, 'scope.currentProject.id'), "/pipelines/").concat(Ember.get(this, 'pipelineId'), "/configs?branch=").concat(branch),
          method: 'GET'
        }).then(function (res) {
          var configs = JSON.parse(res);

          for (var key in configs) {
            var config = void 0;
            config = configs[key];

            if (config && config.stages) {
              config.stages.unshift({
                name: 'clone',
                steps: [{
                  sourceCodeConfig: {}
                }]
              });
            }

            var target = Ember.get(_this, 'pipeline.branches').findBy('branch', branch);
            Ember.set(target, 'config', config);
            Ember.setProperties(target, {
              config: config,
              rawBranches: res
            });
          }
        }).catch(function (err) {
          Ember.set(_this, 'serverErrors', [err.message]);

          _this.showErrors(err);
        }).finally(function () {
          Ember.set(_this, 'pipeline.loading', false);
        });
      }
    }),
    urlDidChange: Ember.observer('url', function () {
      var _this2 = this;

      if (!Ember.get(this, 'url')) {
        return;
      }

      Ember.set(this, 'pipeline.loading', true);
      var promise = Ember.get(this, 'store').request({
        url: "/v3/projects/".concat(Ember.get(this, 'scope.currentProject.id'), "/pipelines/").concat(Ember.get(this, 'pipelineId'), "/branches"),
        method: 'GET'
      });
      promise.then(function (res) {
        var branches = JSON.parse(res).map(function (branch) {
          return {
            branch: branch
          };
        }).sortBy('branch');
        Ember.set(_this2, 'pipeline.url', Ember.get(_this2, 'url'));
        Ember.set(_this2, 'pipeline.branches', branches);
        Ember.set(_this2, 'pipeline.selectedBranch', Ember.get(branches, 'firstObject.branch'));
      }).catch(function (err) {
        Ember.set(_this2, 'serverErrors', [err.message]);
        Ember.set(_this2, 'pipeline.loading', false);

        _this2.showErrors(err);
      });
    }),
    principal: Ember.computed('accountsInfo', function () {
      var account = Ember.get(this, 'accountsInfo');

      if (!account) {
        return;
      }

      var profile = Object.assign({}, account);
      profile.name = profile.loginName;
      profile.username = profile.displayName;
      profile.profilePicture = profile.avatarUrl;
      profile.avatarSrc = profile.avatarUrl;
      return profile;
    }),
    accountsInfo: Ember.computed('accounts.@each.logout', function () {
      var accounts = Ember.get(this, 'accounts').filter(function (account) {
        return !account.logout;
      });

      if (Ember.get(accounts, 'length') === 0) {
        return Ember.get(this, 'pipeline.sourceCodeCredential');
      }

      var out = Ember.get(accounts, 'firstObject');
      return out ? out : null;
    }),
    showErrors: function showErrors(err) {
      if (err.message) {
        Ember.set(this, 'errors', ["".concat(err.message).concat(err.detail ? "(".concat(err.detail, ")") : '')]);
      } else {
        Ember.set(this, 'errors', ["Error (".concat(err.status, " - ").concat(err.code, ")")]);
      }
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-scm/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tFzNSiNU",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.selectRepository\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt-10\"],[9],[1,[21,\"url\"],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"accountsInfo\"]]],null,{\"statements\":[[0,\"      \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[1,[27,\"t\",[\"newPipelineStep.stepType.scm.user\"],null],false],[10],[0,\"   \\n      \"],[1,[27,\"identity-block\",null,[[\"principal\",\"link\"],[[23,[\"principal\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-scm/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-task/component", ["exports", "pipeline/components/steps/step-task/template", "shared/utils/pipeline-constants", "pipeline/mixins/step"], function (_exports, _template, _pipelineConstants, _step) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_CONFIG = {
    shellScript: ''
  };

  var _default = Ember.Component.extend(_step.default, {
    layout: _template.default,
    config: null,
    field: 'runScriptConfig',
    defaultConfig: DEFAULT_CONFIG,
    validate: function validate() {
      var intl = Ember.get(this, 'intl');
      var errors = [];
      var config = Ember.get(this, 'config.runScriptConfig');

      if (!config.image || config.image.trim() === '') {
        errors.push(intl.t('newPipelineStep.stepType.task.errors.image.required'));
      }

      if (config.shellScript.trim() === '') {
        errors.push(intl.t('newPipelineStep.stepType.task.errors.shellScript.required'));
      }

      return errors;
    },
    imagesChoices: _pipelineConstants.default.BASE_IMAGES
  });

  _exports.default = _default;
});
define("pipeline/components/steps/step-task/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "u3GOGW5o",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row mt-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.image\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"searchable-select\",null,[[\"allowCustom\",\"content\",\"value\",\"placeholder\"],[true,[23,[\"imagesChoices\"]],[23,[\"config\",\"runScriptConfig\",\"image\"]],\"java:8\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row mb-10\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"newPipelineStep.stepType.task.shell.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"pipeline-codemirror\",null,[[\"value\",\"valueUpdated\",\"options\"],[[23,[\"config\",\"runScriptConfig\",\"shellScript\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"runScriptConfig\",\"shellScript\"]]],null]],null],[27,\"hash\",null,[[\"autofocus\",\"theme\",\"lineNumbers\",\"mode\"],[true,\"monokai\",true,\"shell\"]]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"advanced-section\",null,null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-10 mb-20\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"newPipelineStep.stepType.env\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"form-key-value\",null,[[\"allowMultilineValue\",\"initialMap\",\"changed\",\"allowEmptyValue\",\"normalHeader\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[false,[23,[\"config\",\"env\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"env\"]]],null]],null],false,[27,\"t\",[\"newContainer.environment.label\"],null],\"newContainer.environment.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"e.g. bar\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row mb-20\"],[9],[0,\"\\n    \"],[1,[27,\"pipeline-env-from\",null,[[\"sources\",\"changed\"],[[23,[\"config\",\"envFrom\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"config\",\"envFrom\"]]],null]],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"pipeline-condition\",null,[[\"type\",\"config\"],[\"step\",[23,[\"config\",\"when\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[1,[27,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"cancel\"],[[23,[\"state\",\"saveDisabled\"]],[23,[\"editing\"]],\"generic.add\",[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/components/steps/step-task/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "pipeline/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "pipeline/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "pipeline/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "pipeline/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "pipeline/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "pipeline/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "pipeline/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "pipeline/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "pipeline/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "pipeline/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "pipeline/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "pipeline/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "pipeline/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "pipeline/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "pipeline/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "pipeline/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "pipeline/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "pipeline/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "pipeline/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "pipeline/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "pipeline/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "pipeline/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "pipeline/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "pipeline/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "pipeline/components/used-percent-gauge/component");
define("pipeline/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'pipeline/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "pipeline/cookies/service");
define.alias("shared/digital-ocean/service", "pipeline/digital-ocean/service");
define.alias("shared/endpoint/service", "pipeline/endpoint/service");
define("pipeline/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "pipeline/resolver", "pipeline/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'clusterStore', 'globalStore', 'intl', 'modal', 'router', 'resource-actions', 'scope', 'session', 'store', 'tooltip'],
      externalRoutes: ['index', 'failWhale', 'authenticated', 'authenticated.cluster', 'authenticated.cluster.index', 'authenticated.cluster.projects', 'notifier', 'authenticated.project', 'authenticated.prefs', 'volumes.index', 'authenticated.project.dns.index', 'authenticated.project.hpa.index', 'ingresses.index', 'containers.index', 'authenticated.project.pipeline.pipeline', 'authenticated.project.pipeline.pipelines']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "pipeline/features/service");
define.alias("shared/grafana/service", "pipeline/grafana/service");
define.alias("shared/growl/service", "pipeline/growl/service");
define.alias("ember-math-helpers/helpers/abs", "pipeline/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "pipeline/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "pipeline/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "pipeline/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "pipeline/helpers/and");
define.alias("shared/helpers/array-includes", "pipeline/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "pipeline/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "pipeline/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "pipeline/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "pipeline/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "pipeline/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "pipeline/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "pipeline/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "pipeline/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "pipeline/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "pipeline/helpers/cosh");
define.alias("shared/helpers/date-calendar", "pipeline/helpers/date-calendar");
define("pipeline/helpers/date-duration", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dateDuration = dateDuration;
  _exports.default = void 0;

  function dateDuration(params) {
    var time = _moment.default.duration(params[0]);

    if (params.length === 2) {
      time = _moment.default.duration(new Date(params[0]) - new Date(params[1]));
    }

    var minutes = time.minutes();
    var seconds = time.seconds();
    var out = '';

    if (minutes === 1) {
      out = '1 minute';
    } else if (minutes > 1) {
      out = "".concat(minutes, " minutes");
    }

    if (seconds === 1) {
      if (out) {
        out += ', 1 second';
      } else {
        out += '1 second';
      }
    } else if (seconds > 1) {
      if (out) {
        out += ", ".concat(seconds, " seconds");
      } else {
        out += "".concat(seconds, " seconds");
      }
    }

    return out;
  }

  var _default = Ember.Helper.helper(dateDuration);

  _exports.default = _default;
});
define.alias("shared/helpers/date-from-now", "pipeline/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "pipeline/helpers/date-recent");
define.alias("shared/helpers/date-str", "pipeline/helpers/date-str");
define.alias("shared/helpers/default-str", "pipeline/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "pipeline/helpers/div");
define.alias("shared/helpers/driver-name", "pipeline/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "pipeline/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "pipeline/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "pipeline/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "pipeline/helpers/floor");
define.alias("ember-intl/helpers/format-date", "pipeline/helpers/format-date");
define.alias("ember-intl/helpers/format-html-message", "pipeline/helpers/format-html-message");
define.alias("shared/helpers/format-ip", "pipeline/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "pipeline/helpers/format-message");
define.alias("shared/helpers/format-mib", "pipeline/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "pipeline/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "pipeline/helpers/format-relative");
define.alias("shared/helpers/format-si", "pipeline/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "pipeline/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "pipeline/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "pipeline/helpers/gcd");
define.alias("shared/helpers/get-card-class", "pipeline/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "pipeline/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "pipeline/helpers/gte");
define.alias("shared/helpers/has-override", "pipeline/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "pipeline/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "pipeline/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "pipeline/helpers/imul");
define("pipeline/helpers/index-add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.indexAdd = indexAdd;
  _exports.default = void 0;

  function indexAdd(params) {
    return params[0] + 1;
  }

  var _default = Ember.Helper.helper(indexAdd);

  _exports.default = _default;
});
define.alias("ember-intl/helpers/intl-get", "pipeline/helpers/intl-get");
define.alias("ember-truth-helpers/helpers/is-array", "pipeline/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "pipeline/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "pipeline/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "pipeline/helpers/is-equal");
define.alias("shared/helpers/join-array", "pipeline/helpers/join-array");
define.alias("ember-intl/helpers/l", "pipeline/helpers/l");
define.alias("liquid-fire/helpers/lf-lock-model", "pipeline/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "pipeline/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "pipeline/helpers/link-ssl-domain");
define("pipeline/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "pipeline/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "pipeline/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "pipeline/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "pipeline/helpers/log2");
define.alias("shared/helpers/lower-case", "pipeline/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "pipeline/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "pipeline/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "pipeline/helpers/max");
define.alias("shared/helpers/maybe-t", "pipeline/helpers/maybe-t");
define.alias("ember-math-helpers/helpers/min", "pipeline/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "pipeline/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "pipeline/helpers/mult");
define.alias("shared/helpers/nl-to-br", "pipeline/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "pipeline/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "pipeline/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "pipeline/helpers/or");
define.alias("shared/helpers/parse-camelcase", "pipeline/helpers/parse-camelcase");
define("pipeline/helpers/pipeline-stages-info", ["exports", "shared/utils/pipeline-constants"], function (_exports, _pipelineConstants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function stepStypeMapper(step) {
    if (step.sourceCodeConfig) {
      return 'clone';
    }

    var found = _pipelineConstants.default.STEP_TYPES.find(function (stepType) {
      if (Ember.get(step, stepType.name)) {
        return true;
      }
    });

    return found ? found.label : '';
  }

  function stagesInfo() {
    var arg = arguments[0];

    if (arg[2] === false) {
      return arg[0][arg[1]][arg[3]];
    }

    return stepStypeMapper(arg[0][arg[1]].steps[arg[2]]);
  }

  var _default = Ember.Helper.helper(stagesInfo);

  _exports.default = _default;
});
define("pipeline/helpers/pipeline-status-to-icon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function classForStatus(status) {
    switch (status[0]) {
      case 'Success':
        return 'icon icon-check';

      case 'Building':
        return 'icon icon-circle';

      case 'Failed':
        return 'icon icon-close';

      case 'Waitting':
        return '';

      default:
        return '';
    }
  }

  var _default = Ember.Helper.helper(classForStatus);

  _exports.default = _default;
});
define.alias("ember-math-helpers/helpers/pow", "pipeline/helpers/pow");
define.alias("shared/helpers/pretty-cron", "pipeline/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "pipeline/helpers/random");
define.alias("shared/helpers/rbac-allows", "pipeline/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "pipeline/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "pipeline/helpers/round");
define.alias("shared/helpers/run-time", "pipeline/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "pipeline/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "pipeline/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "pipeline/helpers/sqrt");
define.alias("shared/helpers/str-replace", "pipeline/helpers/str-replace");
define("pipeline/helpers/sub-str", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.subStr = subStr;
  _exports.default = void 0;

  function subStr(params) {
    if (!params[0] || !params[0].substr) {
      return 'N/A';
    }

    return params[0].substr(params[1], params[2]);
  }

  var _default = Ember.Helper.helper(subStr);

  _exports.default = _default;
});
define.alias("ember-math-helpers/helpers/sub", "pipeline/helpers/sub");
define.alias("ember-intl/helpers/format-html-message", "pipeline/helpers/t-html");
define.alias("ember-intl/helpers/t", "pipeline/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "pipeline/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "pipeline/helpers/tanh");
define.alias("shared/helpers/to-json", "pipeline/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "pipeline/helpers/trunc");
define.alias("shared/helpers/uc-first", "pipeline/helpers/uc-first");
define.alias("shared/helpers/upper-case", "pipeline/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "pipeline/helpers/xor");
define.alias("shared/host/service", "pipeline/host/service");
define("pipeline/initializers/coordinator-setup", ["exports", "pipeline/models/coordinator"], function (_exports, _coordinator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: "setup coordinator",
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _coordinator.default);
      app.inject("component", "coordinator", "drag:coordinator");
    }
  };
  _exports.default = _default;
});
define("pipeline/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("pipeline/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
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
define("pipeline/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define("pipeline/instance-initializers/ember-intl", ["exports", "ember-intl/initializer"], function (_exports, _initializer) {
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
define.alias("shared/k8s/service", "pipeline/k8s/service");
define.alias("shared/linode/service", "pipeline/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "pipeline/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "pipeline/mixins/console");
define.alias("shared/mixins/container-choices", "pipeline/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "pipeline/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "pipeline/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "pipeline/mixins/filter-state");
define.alias("shared/mixins/grafana", "pipeline/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "pipeline/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "pipeline/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "pipeline/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "pipeline/mixins/manage-labels");
define.alias("shared/mixins/metrics", "pipeline/mixins/metrics");
define.alias("shared/mixins/modal-base", "pipeline/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "pipeline/mixins/new-or-edit");
define.alias("shared/mixins/preload", "pipeline/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "pipeline/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "pipeline/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "pipeline/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "pipeline/mixins/state-counts");
define("pipeline/mixins/step", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    intl: Ember.inject.service(),
    config: null,
    field: null,
    errors: null,
    defaultConfig: null,
    validate: function validate() {
      return [];
    },
    willSave: function willSave() {},
    init: function init() {
      this._super.apply(this, arguments);

      if (Ember.get(this, "initConfig.".concat(Ember.get(this, 'field')))) {
        Ember.set(this, 'config', Object.assign({}, Ember.get(this, 'initConfig')));
      } else {
        var defaultConfig = {};
        defaultConfig[Ember.get(this, 'field')] = Object.assign({}, Ember.get(this, 'defaultConfig'));
        Ember.set(this, 'config', Object.assign({}, defaultConfig));
      }
    },
    actions: {
      save: function save(cb) {
        var errors = this.validate();

        if (errors.length > 0) {
          Ember.set(this, 'errors', errors);
          cb();
          return;
        }

        this.willSave();
        var step = Ember.get(this, 'config');

        if (this.save) {
          this.save(step);
        }

        cb();
      },
      cancel: function cancel() {
        if (this.cancel) {
          this.cancel();
        }
      }
    }
  });

  _exports.default = _default;
});
define.alias("shared/mixins/sticky-table-header", "pipeline/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "pipeline/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "pipeline/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "pipeline/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "pipeline/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "pipeline/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "pipeline/mixins/upgrade-component");
define.alias("shared/mixins/upload", "pipeline/mixins/upload");
define.alias("shared/modal/service", "pipeline/modal/service");
define("pipeline/models/coordinator", ["exports", "pipeline/models/obj-hash"], function (_exports, _objHash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Object.extend(Ember.Evented, {
    objectMap: Ember.computed(function () {
      return _objHash.default.create();
    }),
    getObject: function getObject(id, ops) {
      ops = ops || {};
      var payload = this.get('objectMap').getObj(id);

      if (payload.ops.source) {
        payload.ops.source.sendAction('action', payload.obj);
      }

      if (payload.ops.target) {
        payload.ops.target.sendAction('action', payload.obj);
      }

      this.trigger("objectMoved", {
        obj: payload.obj,
        source: payload.ops.source,
        target: ops.target
      });
      return payload.obj;
    },
    setObject: function setObject(obj, ops) {
      ops = ops || {};
      return this.get('objectMap').add({
        obj: obj,
        ops: ops
      });
    }
  });

  _exports.default = _default;
});
define("pipeline/models/obj-hash", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Object.extend({
    contentLength: 0,
    length: Ember.computed.alias('contentLength'),
    init: function init() {
      this._super();

      this.content = {};
    },
    add: function add(obj) {
      var id = this.generateId();
      this.get('content')[id] = obj;
      this.incrementProperty("contentLength");
      return id;
    },
    getObj: function getObj(key) {
      var res = this.get('content')[key];

      if (!res) {
        throw "no obj for key " + key;
      }

      return res;
    },
    generateId: function generateId() {
      var num = Math.random() * 1000000000000.0;
      num = parseInt(num);
      num = "" + num;
      return num;
    },
    keys: function keys() {
      var res = [];

      for (var key in this.get('content')) {
        res.push(key);
      }

      return Ember.A(res);
    }
  });

  _exports.default = _default;
});
define.alias("shared/oauth/service", "pipeline/oauth/service");
define.alias("shared/pipeline-github/service", "pipeline/pipeline-github/service");
define("pipeline/pipelines/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        pipeline: store.find('pipeline', params.pipeline_id),
        executions: store.findAll('pipelineExecution')
      });
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RmeAaHBN",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"pipeline-detail\",null,[[\"model\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/pipelines/detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var precanStages = function precanStages() {
    return [{
      name: 'clone',
      steps: []
    }];
  };

  var _default = Ember.Route.extend({
    projectStore: Ember.inject.service('store'),
    precanStages: precanStages(),
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var projectStore = Ember.get(this, 'projectStore');
      var projectDockerCredentials = projectStore.all('dockerCredential');
      var pipelines = store.findAll('pipeline');
      return Ember.RSVP.hash({
        projectDockerCredentials: projectDockerCredentials,
        pipelines: pipelines
      }).then(function (hash) {
        var projectDockerCredentials = hash.projectDockerCredentials,
            pipelines = hash.pipelines;
        var pipeline = pipelines.findBy('id', params.pipeline_id);

        if (!Ember.get(pipeline, 'sourceCodeCredentialId')) {
          return {
            pipelineConfig: {
              selectedSource: 'github',
              name: pipeline.name,
              url: pipeline.repositoryUrl
            },
            pipeline: pipeline,
            accounts: [],
            projectDockerCredentials: projectDockerCredentials
          };
        } else {
          return {
            pipelineConfig: {
              selectedSource: Ember.get(pipeline, 'sourceCodeCredential.sourceCodeType'),
              name: pipeline.name,
              url: pipeline.repositoryUrl,
              trigger: {
                triggerWebhookPr: pipeline.triggerWebhookPr,
                triggerWebhookPush: pipeline.triggerWebhookPush,
                triggerWebhookTag: pipeline.triggerWebhookTag,
                triggerCronExpression: pipeline.triggerCronExpression,
                triggerCronTimezone: pipeline.triggerCronTimezone
              }
            },
            pipeline: pipeline,
            accounts: [Ember.get(pipeline, 'sourceCodeCredential')],
            projectDockerCredentials: projectDockerCredentials
          };
        }
      });
    },
    resetController: function resetController(controller) {
      controller.set('errors', '');
      controller.set('saved', false);
      Ember.set(this, 'precanStages', precanStages());
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fUvySPqf",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"edit-pipeline-config\",null,[[\"model\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/pipelines/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("pipeline/pipelines/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    model: function model() {
      return Ember.get(this, 'store').findAll('pipeline');
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.pipeline.pipelines');
    })
  });

  _exports.default = _default;
});
define("pipeline/pipelines/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sMhHOMsk",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"  \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[27,\"t\",[\"windowsCluster.pipelines\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"repositories\"],[[\"class\"],[\"btn btn-sm bg-primary\"]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"repositories.enable\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"nav.infra.pipelines\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"class\",\"instances\"],[9],[0,\"\\n    \"],[1,[27,\"pipeline-jobs-table\",null,[[\"body\",\"bulkActions\",\"search\",\"paging\"],[[23,[\"model\"]],true,true,true]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/pipelines/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/run/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      return Ember.RSVP.hash({
        run: params.run_id,
        pipeline: Ember.get(this, 'store').find('pipeline', params.pipeline_id),
        executions: Ember.get(this, 'store').findAll('pipelineExecution')
      });
    }
  });

  _exports.default = _default;
});
define("pipeline/pipelines/run/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4Ab7q6xv",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"build-detail\",null,[[\"model\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/pipelines/run/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/prefs/service", "pipeline/prefs/service");
define("pipeline/repositories/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var store = Ember.get(this, 'store');
      var pipelines = store.findAll('pipeline');
      var accounts = store.findAll('sourceCodeCredential');
      var providerConfig = store.findAll('sourceCodeProviderConfig');
      var providers = store.findAll('sourceCodeProvider', {
        forceReload: true
      });
      return Ember.RSVP.hash({
        accounts: accounts,
        providerConfig: providerConfig,
        pipelines: pipelines,
        providers: providers
      }).then(function (hash) {
        var accounts = hash.accounts,
            providerConfig = hash.providerConfig,
            pipelines = hash.pipelines,
            providers = hash.providers;
        var validAccounts = accounts.filter(function (account) {
          return !account.logout;
        });

        if (Ember.get(validAccounts, 'length')) {
          return Ember.get(validAccounts, 'firstObject').followLink('sourceCodeRepositories').then(function (res) {
            return {
              pipelines: pipelines,
              accounts: validAccounts,
              providers: providers,
              canConfig: providerConfig.length > 0,
              repositories: res
            };
          });
        } else {
          return {
            pipelines: pipelines,
            accounts: validAccounts,
            providers: providers,
            canConfig: providerConfig.length > 0,
            repositories: []
          };
        }
      });
    },
    resetController: function resetController(controller) {
      Ember.set(controller, 'errors', []);
    }
  });

  _exports.default = _default;
});
define("pipeline/repositories/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LhBjd1cM",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"enable-repositories\",null,[[\"model\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/repositories/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "pipeline/resource-actions/service");
define.alias("shared/role-template/service", "pipeline/role-template/service");
define.alias("shared/saml/service", "pipeline/saml/service");
define.alias("shared/scope/service", "pipeline/scope/service");
define.alias("ivy-codemirror/services/code-mirror", "pipeline/services/code-mirror");
define("pipeline/services/cookies", ["exports", "@rancher/ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define("pipeline/services/drag-coordinator", ["exports", "ember-drag-drop/services/drag-coordinator"], function (_exports, _dragCoordinator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _dragCoordinator.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "pipeline/services/intl");
define("pipeline/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "pipeline/session/service");
define("pipeline/settings/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("pipeline/settings/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var decomposeRedirectUrl = function decomposeRedirectUrl(url) {
    return {
      clientId: url.split('?')[1].split('=')[1]
    };
  };

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    session: Ember.inject.service(),
    model: function model() {
      var globalStore = Ember.get(this, 'globalStore');
      var store = Ember.get(this, 'store');
      var loginConfigs = globalStore.request({
        url: '/v3-public/authProviders'
      });
      var providers = store.findAll('sourceCodeProviderConfig');
      var settings = store.findAll('pipelineSetting');
      return Ember.RSVP.hash({
        providers: providers,
        loginConfigs: loginConfigs,
        settings: settings
      }).then(function (_ref) {
        var providers = _ref.providers,
            loginConfigs = _ref.loginConfigs,
            settings = _ref.settings;
        var decomposedGithubAuthConfig = loginConfigs.findBy('id', 'github');

        if (decomposedGithubAuthConfig) {
          var desomposed = decomposeRedirectUrl(decomposedGithubAuthConfig.redirectUrl);
          decomposedGithubAuthConfig.enabled = true;
          decomposedGithubAuthConfig.clientId = desomposed.clientId;
        }

        return {
          providers: providers,
          settings: settings,
          githubAuthConfig: decomposedGithubAuthConfig
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.pipeline.settings');
    })
  });

  _exports.default = _default;
});
define.alias("shared/settings/service", "pipeline/settings/service");
define("pipeline/settings/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UkYW5/ND",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"  \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[27,\"t\",[\"windowsCluster.pipelines\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"pt-20\"],[9],[10],[0,\"\\n  \"],[1,[27,\"settings-git\",null,[[\"providers\",\"githubAuthConfig\",\"settings\"],[[23,[\"model\",\"providers\"]],[23,[\"model\",\"githubAuthConfig\"]],[23,[\"model\",\"settings\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/settings/template.hbs"
    }
  });

  _exports.default = _default;
});
define("pipeline/shared/tests/addon.lint-test", [], function () {
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
define("pipeline/shared/tests/app.lint-test", [], function () {
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
define("pipeline/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "pipeline/shibboleth-auth/service");
define.alias("shared/store-reset/service", "pipeline/store-reset/service");
define.alias("shared/tab-session/service", "pipeline/tab-session/service");
define("pipeline/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OiLYayW1",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "pipeline/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "pipeline/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "pipeline/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "pipeline/transitions/default");
define.alias("liquid-fire/transitions/explode", "pipeline/transitions/explode");
define.alias("liquid-fire/transitions/fade", "pipeline/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "pipeline/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "pipeline/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "pipeline/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "pipeline/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "pipeline/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "pipeline/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "pipeline/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "pipeline/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "pipeline/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "pipeline/transitions/wait");
define.alias("shared/user-language/service", "pipeline/user-language/service");
define.alias("shared/user-theme/service", "pipeline/user-theme/service");
define.alias("shared/utils/add-view-action", "pipeline/utils/add-view-action");
define.alias("shared/utils/additional-routes", "pipeline/utils/additional-routes");
define.alias("shared/utils/azure-choices", "pipeline/utils/azure-choices");
define.alias("shared/utils/browser-storage", "pipeline/utils/browser-storage");
define.alias("shared/utils/constants", "pipeline/utils/constants");
define.alias("shared/utils/convert-yaml", "pipeline/utils/convert-yaml");
define.alias("shared/utils/debounce", "pipeline/utils/debounce");
define.alias("shared/utils/download-files", "pipeline/utils/download-files");
define.alias("shared/utils/errors", "pipeline/utils/errors");
define.alias("shared/utils/fetch-yaml", "pipeline/utils/fetch-yaml");
define("pipeline/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "pipeline/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "pipeline/utils/group-compound-layout");
define("pipeline/utils/intl/missing-message", ["exports"], function (_exports) {
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
define.alias("shared/utils/load-script", "pipeline/utils/load-script");
define.alias("shared/utils/multi-stats", "pipeline/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "pipeline/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "pipeline/utils/parse-externalid");
define.alias("shared/utils/parse-port", "pipeline/utils/parse-port");
define.alias("shared/utils/parse-target", "pipeline/utils/parse-target");
define.alias("shared/utils/parse-unit", "pipeline/utils/parse-unit");
define.alias("shared/utils/parse-uri", "pipeline/utils/parse-uri");
define.alias("shared/utils/parse-version", "pipeline/utils/parse-version");
define.alias("shared/utils/percent-gauge", "pipeline/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "pipeline/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "pipeline/utils/pipelineStep");
define.alias("shared/utils/platform", "pipeline/utils/platform");
define.alias("shared/utils/queue", "pipeline/utils/queue");
define.alias("shared/utils/rackspace-choices", "pipeline/utils/rackspace-choices");
define.alias("shared/utils/search-text", "pipeline/utils/search-text");
define.alias("shared/utils/socket", "pipeline/utils/socket");
define.alias("shared/utils/sort", "pipeline/utils/sort");
define.alias("shared/utils/traffic-renderer", "pipeline/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "pipeline/utils/used-percent-gauge");
define.alias("shared/utils/util", "pipeline/utils/util");//# sourceMappingURL=engine.map
