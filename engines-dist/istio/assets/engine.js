define.alias("shared/access/service", "istio/access/service");
define.alias("shared/all-dns-records/service", "istio/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "istio/all-storage-classes/service");
define.alias("shared/all-workloads/service", "istio/all-workloads/service");
define.alias("shared/amazon/util", "istio/amazon/util");
define.alias("shared/azure-ad/service", "istio/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "istio/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "istio/calculate-position/util");
define.alias("shared/capabilities/service", "istio/capabilities/service");
define.alias("shared/catalog/service", "istio/catalog/service");
define("istio/cldrs/ar", ["exports"], function (_exports) {
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
define("istio/cldrs/de", ["exports"], function (_exports) {
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
define("istio/cldrs/en", ["exports"], function (_exports) {
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
define("istio/cldrs/es", ["exports"], function (_exports) {
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
define("istio/cldrs/fa", ["exports"], function (_exports) {
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
define("istio/cldrs/fr", ["exports"], function (_exports) {
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
define("istio/cldrs/hu", ["exports"], function (_exports) {
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
define("istio/cldrs/it", ["exports"], function (_exports) {
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
define("istio/cldrs/ja", ["exports"], function (_exports) {
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
define("istio/cldrs/ko", ["exports"], function (_exports) {
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
define("istio/cldrs/nb", ["exports"], function (_exports) {
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
define("istio/cldrs/nl", ["exports"], function (_exports) {
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
define("istio/cldrs/none", ["exports"], function (_exports) {
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
define("istio/cldrs/pt", ["exports"], function (_exports) {
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
define("istio/cldrs/readme", ["exports"], function (_exports) {
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
define("istio/cldrs/ru", ["exports"], function (_exports) {
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
define("istio/cldrs/sh", ["exports"], function (_exports) {
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
define("istio/cldrs/sv", ["exports"], function (_exports) {
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
define("istio/cldrs/tr", ["exports"], function (_exports) {
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
define("istio/cldrs/uk", ["exports"], function (_exports) {
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
define("istio/cldrs/vi", ["exports"], function (_exports) {
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
define("istio/cldrs/zh", ["exports"], function (_exports) {
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
define("istio/cluster-setting/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    router: Ember.inject.service(),
    actions: {
      cancel: function cancel() {
        Ember.get(this, 'router').transitionTo('authenticated.cluster');
      }
    }
  });

  _exports.default = _default;
});
define("istio/cluster-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var NAMESPACE_NAME = 'istio-system';
  var APP_NAME = 'cluster-istio';
  var MONITORING_APP_NAME = 'cluster-monitoring';

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    router: Ember.inject.service(),
    beforeModel: function beforeModel() {
      var cluster = window.l('route:application').modelFor('authenticated.cluster');

      if (!Ember.get(cluster, 'isReady')) {
        Ember.get(this, 'router').transitionTo('authenticated.cluster.index');
      }
    },
    model: function model() {
      var cluster = window.l('route:application').modelFor('authenticated.cluster');
      var project = Ember.get(cluster, 'systemProject');

      if (!project) {
        return {
          owner: false
        };
      }

      var apps = project.followLink('apps');
      var namespaces = cluster.followLink('namespaces');
      var storageClasses = cluster.followLink('storageClasses');
      var persistentVolumeClaims = project.followLink('persistentVolumeClaims');
      return Ember.RSVP.all([apps, namespaces, storageClasses, persistentVolumeClaims]).then(function (data) {
        var app = data[0].findBy('name', APP_NAME);
        var monitoringApp = data[0].findBy('name', MONITORING_APP_NAME);
        var namespaces = data[1] || [];
        var storageClasses = data[2] || [];
        var persistentVolumeClaims = data[3] || [];
        var namespace = namespaces.findBy('name', NAMESPACE_NAME);
        return {
          app: app,
          nsExists: !!namespace,
          cluster: cluster,
          project: project,
          storageClasses: storageClasses,
          persistentVolumeClaims: persistentVolumeClaims.filter(function (p) {
            return p.namespaceId === NAMESPACE_NAME && p.state === 'bound';
          }),
          namespace: namespace,
          owner: true,
          apps: data[0].filter(function (a) {
            return a.name === APP_NAME;
          }),
          monitoringApp: monitoringApp
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(_constants.default.SESSION.CLUSTER_ROUTE), 'authenticated.cluster.istio.cluster-setting');
    })
  });

  _exports.default = _default;
});
define("istio/cluster-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "z9TMWqO5",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"model\",\"owner\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"istio-catalog\",null,[[\"app\",\"cluster\",\"project\",\"nsExists\",\"storageClasses\",\"persistentVolumeClaims\",\"namespace\",\"apps\",\"cancel\",\"members\",\"membersPromise\",\"monitoringApp\"],[[23,[\"model\",\"app\"]],[23,[\"model\",\"cluster\"]],[23,[\"model\",\"project\"]],[23,[\"model\",\"nsExists\"]],[23,[\"model\",\"storageClasses\"]],[23,[\"model\",\"persistentVolumeClaims\"]],[23,[\"model\",\"namespace\"]],[23,[\"model\",\"apps\"]],[27,\"action\",[[22,0,[]],\"cancel\"],null],[23,[\"model\",\"members\"]],[23,[\"model\",\"membersPromise\"]],[23,[\"model\",\"monitoringApp\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"message\",\"color\"],[[27,\"t\",[\"projectIstioPage.info.noPermission\"],null],\"bg-info\"]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/cluster-setting/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "istio/cluster-templates/service");
define.alias("shared/code-mirror/service", "istio/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "istio/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "istio/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "istio/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "istio/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "istio/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "istio/components/advanced-section/component");
define.alias("shared/components/annotations-section/component", "istio/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "istio/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "istio/components/api-field/component");
define.alias("shared/components/apikey-row/component", "istio/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "istio/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "istio/components/badge-state/component");
define.alias("shared/components/banner-message/component", "istio/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "istio/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "istio/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "istio/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "istio/components/basic-dropdown/trigger");
define.alias("shared/components/btn-toggle/component", "istio/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "istio/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "istio/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "istio/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "istio/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "istio/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "istio/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "istio/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "istio/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "istio/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "istio/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "istio/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "istio/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "istio/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "istio/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "istio/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "istio/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "istio/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "istio/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "istio/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "istio/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "istio/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "istio/components/code-block/component");
define("istio/components/config-validation-list/component", ["exports", "istio/components/config-validation-list/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'severity',
    descending: false,
    name: null,
    namespaceId: null,
    resourceType: null,
    expanded: false,
    timeOutAnchor: null,
    loading: false,
    noPermission: false,
    headers: [{
      name: 'severity',
      sort: ['severity'],
      translationKey: 'validationsList.table.severity',
      width: 100
    }, {
      name: 'path',
      sort: ['path'],
      translationKey: 'validationsList.table.path'
    }, {
      name: 'message',
      sort: ['message'],
      translationKey: 'validationsList.table.message'
    }],
    init: function init() {
      this._super.apply(this, arguments);

      this.expanedDidChange();
    },
    willDestroyElement: function willDestroyElement() {
      this.clearTimeOut();

      this._super();
    },
    expanedDidChange: Ember.observer('expanded', function () {
      if (Ember.get(this, 'expanded')) {
        Ember.set(this, 'loading', true);
        this.fetch();
      } else {
        this.clearTimeOut();
      }
    }),
    fetch: function fetch() {
      var _this = this;

      var url = "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali-http:80/proxy/api/namespaces/").concat(Ember.get(this, 'namespaceId'), "/istio?validate=true");
      Ember.get(this, 'globalStore').rawRequest({
        url: url,
        method: 'GET'
      }).then(function (xhr) {
        var out = [];
        var validations = xhr.body.validations;

        if (validations) {
          var v = validations[Ember.get(_this, 'resourceType')];

          if (v) {
            var tv = v[Ember.get(_this, 'name')];

            if (tv.checks) {
              out = tv.checks;
            }
          }
        }

        Ember.setProperties(_this, {
          validations: out,
          loading: false,
          noPermission: false
        });
        var timeOutAnchor = setTimeout(function () {
          _this.fetch();
        }, 10000);
        Ember.set(_this, 'timeOutAnchor', timeOutAnchor);
      }).catch(function () {
        Ember.setProperties(_this, {
          loading: false,
          noPermission: true
        });
      });
    },
    clearTimeOut: function clearTimeOut() {
      var timeOutAnchor = Ember.get(this, 'timeOutAnchor');

      if (timeOutAnchor) {
        clearTimeout(timeOutAnchor);
        Ember.set(this, 'timeOutAnchor', timeOutAnchor);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/config-validation-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "y29xCVsb",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"row\",\"dt\"],\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expanded\",\"componentName\"],[[27,\"t\",[\"validationsList.title\"],null],[27,\"t\",[\"validationsList.detail\"],[[\"resourceType\"],[[23,[\"resourceType\"]]]]],[23,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[23,[\"expandFn\"]]],null],[23,[\"expanded\"]],\"sortable-table\"]],{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"expanded\"]],[23,[\"noPermission\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"text-center mt-20\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"validationsList.noPermission\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"expanded\"]],[27,\"not\",[[23,[\"loading\"]]],null]],null]],null,{\"statements\":[[4,\"component\",[[22,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[23,[\"sortBy\"]],false,[23,[\"descending\"]],[23,[\"headers\"]],[23,[\"validations\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"data-title\",[28,[[22,5,[\"severity\"]]]]],[9],[0,\"\\n            \"],[1,[22,4,[\"severity\"]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"td\"],[12,\"data-title\",[28,[[22,5,[\"path\"]]]]],[9],[0,\"\\n            \"],[1,[22,4,[\"path\"]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"td\"],[12,\"data-title\",[28,[[22,5,[\"message\"]]]]],[9],[0,\"\\n            \"],[1,[22,4,[\"message\"]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"validationsList.noData\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,2,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"validationsList.noMatch\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2,3,4,5]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"text-center mt-20\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/config-validation-list/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/confirm-delete/component", "istio/components/confirm-delete/component");
define("istio/components/connection-pool/component", ["exports", "istio/components/connection-pool/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.connectionPool'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initConnectionPool();
    },
    initConnectionPool: function initConnectionPool() {
      if (!Ember.get(this, 'trafficPolicy.connectionPool') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.connectionPool', {
          http: {
            http1MaxPendingRequests: 1024,
            http2MaxRequests: 1024,
            maxRequestsPerConnection: 1024,
            maxRetries: 1024
          },
          tcp: {
            maxConnections: 1024
          }
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/connection-pool/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8Is2xidO",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-http1MaxPendingRequests\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"http\",\"http1MaxPendingRequests\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"http\",\"http1MaxPendingRequests\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-http1MaxPendingRequests\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-http2MaxRequests\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"http\",\"http2MaxRequests\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"http\",\"http2MaxRequests\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-http2MaxRequests\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.http2MaxRequests.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxRequestsPerConnection\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"http\",\"maxRequestsPerConnection\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"http\",\"maxRequestsPerConnection\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxRequestsPerConnection\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxRetries\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"http\",\"maxRetries\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"http\",\"maxRetries\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxRetries\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxRetries.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-connectTimeout\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"tcp\",\"connectTimeout\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"tcp\",\"connectTimeout\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-connectTimeout\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.connectTimeout.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxConnections\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"tcp\",\"maxConnections\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"tcp\",\"maxConnections\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxConnections\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.connectionPool.maxConnections.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/connection-pool/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/container-shell/component", "istio/components/container-shell/component");
define.alias("shared/components/containers-header/component", "istio/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "istio/components/copy-button");
define.alias("shared/components/copy-inline/component", "istio/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "istio/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "istio/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "istio/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "istio/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "istio/components/cru-cluster/component");
define("istio/components/cru-destination-rule/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-destination-rule/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    subsets: Ember.computed.alias('model.subsets'),
    namespace: Ember.computed.alias('model.namespace'),
    init: function init() {
      this._super.apply(this, arguments);

      if (!Ember.get(this, 'model.trafficPolicy')) {
        Ember.set(this, 'model.trafficPolicy', {});
      }
    },
    didInsertElement: function didInsertElement() {
      if (Ember.get(this, 'isNew') && Ember.get(this, 'subsets.length') === 0) {
        this.send('addSubset');
      }
    },
    actions: {
      addSubset: function addSubset() {
        var version = this.getNewVersion();
        var subset = Ember.Object.create({
          name: version,
          labels: {
            version: version
          }
        });
        Ember.get(this, 'subsets').pushObject(subset);
      },
      removeSubset: function removeSubset(subset) {
        Ember.get(this, 'subsets').removeObject(subset);
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      }
    },
    willSave: function willSave() {
      var _this = this,
          _arguments = arguments;

      var intl = Ember.get(this, 'intl');
      Ember.set(this, 'model.namespaceId', Ember.get(this, 'namespace.id') || '__placeholder__');
      var self = this;
      var sup = this._super;
      var errors = [];
      errors.pushObjects(Ember.get(this, 'namespaceErrors') || []);
      errors.pushObjects(Ember.get(this, 'tlsErrors') || []);

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      (Ember.get(this, 'model.subsets') || []).forEach(function (subset) {
        if (!Ember.get(subset, 'name')) {
          errors.pushObject(intl.t('cruDestinationRule.subsets.name.error'));
        }

        if (Object.keys(Ember.get(subset, 'labels') || {}).length === 0) {
          errors.pushObject(intl.t('cruDestinationRule.subsets.labels.error'));
        }
      });

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpHeaderName') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.name') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.ttl') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.error'));
      }

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(function () {
        Ember.set(_this, 'model.namespaceId', Ember.get(_this, 'namespace.id'));
        return sup.apply.apply(sup, [self].concat(_toConsumableArray(_arguments)));
      }).catch(function (err) {
        Ember.set(_this, 'errors', [_errors.default.stringify(err)]);
      });
    },
    doSave: function doSave(opt) {
      var _this2 = this;

      var primaryResource = Ember.get(this, 'primaryResource');
      var clone = primaryResource.clone();

      if (Object.keys(Ember.get(clone, 'trafficPolicy') || {}).length === 0) {
        delete clone['trafficPolicy'];
      }

      if (Ember.get(clone, 'trafficPolicy.connectionPool.tcp') && Ember.get(clone, 'trafficPolicy.connectionPool.tcp.connectTimeout') === '') {
        var tcp = Ember.get(clone, 'trafficPolicy.connectionPool.tcp');
        delete tcp['connectTimeout'];
      }

      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(function (newData) {
        return _this2.mergeResult(newData);
      });
    },
    getNewVersion: function getNewVersion() {
      var name = Ember.get(this, 'subsets.lastObject.name');

      if (name) {
        var matches = name.match(/\d+$/);

        if (matches.length > 0) {
          var prefix = name.slice(0, name.length - matches[0].length);
          return "".concat(prefix).concat(parseInt(matches[0], 10) + 1);
        }
      } else {
        return 'v1';
      }

      return '';
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-destination-rule/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y1yRNqUk",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"subset\"],\"statements\":[[4,\"if\",[[23,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n      \"],[7,\"h1\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[[27,\"concat\",[\"cruDestinationRule.title.\",[23,[\"mode\"]]],null]],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n      \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n      \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"model\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.name\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[23,[\"model\",\"displayName\"]]]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"servicePage.multistat.namespace\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[23,[\"model\",\"namespaceId\"]]]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"namespaceId\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.host\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[23,[\"model\",\"host\"]]]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"host\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.created\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[[27,\"concat\",[\"cruDestinationRule.title.\",[23,[\"mode\"]]],null]],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"horizontal-form container-fluid\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"form-name-description\",null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[23,[\"model\"]],\"cruDestinationRule.name.placeholder\",false,[23,[\"isEdit\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"form-namespace\",null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[23,[\"namespace\"]],[23,[\"namespaceErrors\"]],[27,\"action\",[[22,0,[]],\"registerHook\"],null],[23,[\"isNew\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"istio-host-select\",null,[[\"namespaceId\",\"value\"],[[23,[\"namespace\",\"id\"]],[23,[\"model\",\"host\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"section\"],[11,\"class\",\"horizontal-form container-fluid mb-30\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row mt-30\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.subsets.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"subsets\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"destination-rule-subset-row\",null,[[\"editing\",\"subset\",\"subsets\",\"removeSubset\"],[[23,[\"editing\"]],[22,3,[]],[23,[\"subsets\"]],[27,\"action\",[[22,0,[]],\"removeSubset\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"p-20 text-center text-muted\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.subsets.noSubsets\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn pull-right\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.subsets.addSubsetLabel\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"addSubset\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"hr\"],[11,\"class\",\"mt-30 mb-30\"],[9],[10],[0,\"\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[4,\"if\",[[23,[\"isView\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"config-validation-list\",null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"destinationrule\",[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"model\",\"namespaceId\"]],[23,[\"model\",\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[27,\"t\",[\"cruDestinationRule.loadBalancer.label\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"load-balancer\",null,[[\"editing\",\"trafficPolicy\"],[[23,[\"editing\"]],[23,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[27,\"t\",[\"cruDestinationRule.connectionPool.label\"],null],[27,\"t\",[\"cruDestinationRule.connectionPool.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"connection-pool\",null,[[\"editing\",\"trafficPolicy\"],[[23,[\"editing\"]],[23,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[27,\"t\",[\"cruDestinationRule.outlierDetection.label\"],null],[27,\"t\",[\"cruDestinationRule.outlierDetection.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"outlier-detection\",null,[[\"editing\",\"trafficPolicy\"],[[23,[\"editing\"]],[23,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[27,\"t\",[\"cruDestinationRule.tls.label\"],null],[27,\"t\",[\"cruDestinationRule.tls.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"traffic-policy-tls\",null,[[\"editing\",\"errors\",\"trafficPolicy\"],[[23,[\"editing\"]],[23,[\"tlsErrors\"]],[23,[\"model\",\"trafficPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"isView\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"form-labels-annotations\",null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[23,[\"model\"]],[23,[\"editing\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"\\n\"],[4,\"unless\",[[23,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"form-labels-annotations\",null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[23,[\"model\",\"labels\"]],[27,\"action\",[[22,0,[]],\"setLabels\"],null],[23,[\"model\"]],[23,[\"editing\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[[23,[\"isEdit\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[23,[\"cancel\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/cru-destination-rule/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/cru-node-pools/component", "istio/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "istio/components/cru-private-registry/component");
define("istio/components/cru-virtual-service/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-virtual-service/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels", "shared/utils/util"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    httpRoutes: Ember.computed.alias('model.http'),
    namespace: Ember.computed.alias('model.namespace'),
    didInsertElement: function didInsertElement() {
      if (Ember.get(this, 'isNew') && Ember.get(this, 'httpRoutes.length') === 0) {
        this.send('addHttpRoute');
      }
    },
    actions: {
      addHttpRoute: function addHttpRoute() {
        var httpRoute = Ember.Object.create({
          route: [],
          fault: {
            abort: {},
            delay: {}
          },
          redirect: {},
          rewrite: {},
          mirror: {},
          retries: {}
        });
        Ember.get(this, 'httpRoutes').pushObject(httpRoute);
      },
      removeHttpRoute: function removeHttpRoute(httpRoute) {
        Ember.get(this, 'httpRoutes').removeObject(httpRoute);
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      },
      setHosts: function setHosts(hosts) {
        Ember.set(this, 'model.hosts', hosts);
      },
      setGateways: function setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      }
    },
    willSave: function willSave() {
      var _this = this,
          _arguments = arguments;

      var intl = Ember.get(this, 'intl');
      Ember.set(this, 'model.namespaceId', Ember.get(this, 'namespace.id') || '__placeholder__');
      var self = this;
      var sup = this._super;
      var errors = [];

      if ((Ember.get(this, 'model.hosts') || []).filter(function (h) {
        return h;
      }).length === 0) {
        errors.pushObject(intl.t('cruVirtualService.hosts.error'));
      }

      (Ember.get(this, 'model.http') || []).forEach(function (route) {
        if (Ember.get(route, 'route.length') > 0) {
          (Ember.get(route, 'route') || []).forEach(function (destination) {
            if (!Ember.get(destination, 'destination.host')) {
              errors.pushObject(intl.t('cruVirtualService.http.routes.destination.host.error'));
            }

            if (!Ember.get(destination, 'destination.subset')) {
              errors.pushObject(intl.t('cruVirtualService.http.routes.destination.subset.error'));
            }

            if (!Ember.get(destination, 'weight') && Ember.get(destination, 'weight') !== 0) {
              errors.pushObject(intl.t('cruVirtualService.http.routes.destination.weight.error'));
            }
          });

          if (Ember.get(route, 'redirect.uri') || Ember.get(route, 'redirect.authority')) {
            errors.pushObject(intl.t('cruVirtualService.http.routes.redirect.error'));
          }
        }

        if (Ember.get(route, 'match.length') > 0) {
          (Ember.get(route, 'match') || []).forEach(function (match) {
            if (Object.keys(match || {}).length === 0) {
              errors.pushObject(intl.t('cruVirtualService.http.routes.matches.error'));
            }
          });
        }
      });
      errors.pushObjects(Ember.get(this, 'namespaceErrors') || []);
      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(function () {
        Ember.set(_this, 'model.namespaceId', Ember.get(_this, 'namespace.id'));
        return sup.apply.apply(sup, [self].concat(_toConsumableArray(_arguments)));
      }).catch(function (err) {
        Ember.set(_this, 'errors', [_errors.default.stringify(err)]);
      });
    },
    doSave: function doSave(opt) {
      var _this2 = this;

      var primaryResource = Ember.get(this, 'primaryResource');
      var clone = primaryResource.clone();
      var filteredHttp = [];

      if (Ember.get(clone, 'gateways.length') === 0) {
        delete clone['gateways'];
      }

      if (Ember.get(clone, 'hosts.length') === 0) {
        delete clone['hosts'];
      }

      (Ember.get(clone, 'http') || []).forEach(function (route) {
        var filtered = (0, _util.removeEmpty)(route);
        filtered = (0, _util.removeEmpty)(filtered);
        filtered = (0, _util.removeEmpty)(filtered);
        filteredHttp.pushObject(filtered);
      });
      Ember.set(clone, 'http', filteredHttp);
      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(function (newData) {
        return _this2.mergeResult(newData);
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/cru-virtual-service/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zqdHitCk",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"route\",\"index\",\"c\",\"row\",\"c\",\"row\"],\"statements\":[[4,\"if\",[[23,[\"isView\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n      \"],[7,\"h1\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[[27,\"concat\",[\"cruVirtualService.title.\",[23,[\"mode\"]]],null]],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n      \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n      \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"model\"]],false,\"ml-10 inline-block\",\"sm\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.name\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[23,[\"model\",\"displayName\"]]]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"servicePage.multistat.namespace\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n\"],[4,\"copy-inline\",null,[[\"clipboardText\"],[[23,[\"model\",\"namespaceId\"]]]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"namespaceId\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.created\"],null],false],[0,\":\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[[27,\"concat\",[\"cruVirtualService.title.\",[23,[\"mode\"]]],null]],[[\"name\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"horizontal-form container-fluid\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"form-name-description\",null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[23,[\"model\"]],\"cruVirtualService.name.placeholder\",false,[23,[\"isEdit\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"form-namespace\",null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[23,[\"namespace\"]],[23,[\"namespaceErrors\"]],[27,\"action\",[[22,0,[]],\"registerHook\"],null],[23,[\"isNew\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"required\",\"valueLabel\",\"addActionLabel\",\"changed\",\"initialValues\",\"showProTip\",\"addButtonClass\",\"autoAddIfEmpty\",\"defaultValue\"],[[27,\"not\",[[23,[\"isView\"]]],null],true,\"cruVirtualService.hosts.label\",\"cruVirtualService.hosts.add\",[27,\"action\",[[22,0,[]],\"setHosts\"],null],[23,[\"model\",\"hosts\"]],false,\"btn bg-link icon-btn\",true,null]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,8,[\"value\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"istio-host-select\",null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[23,[\"namespace\",\"id\"]],[22,8,[\"value\"]],\"input-sm\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[7,8]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[27,\"not\",[[23,[\"isView\"]]],null],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[27,\"action\",[[22,0,[]],\"setGateways\"],null],\"btn bg-link icon-btn\",[23,[\"model\",\"gateways\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,6,[\"value\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[22,6,[\"value\"]],[27,\"t\",[\"cruVirtualService.gateways.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5,6]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"horizontal-form container-fluid mb-30\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row mt-30 mb-10\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"httpRoutes\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"virtual-service-http-route-row\",null,[[\"editing\",\"isFirst\",\"isLast\",\"route\",\"routes\",\"hosts\",\"isNew\",\"namespace\",\"removeRoute\"],[[23,[\"editing\"]],[27,\"eq\",[[22,3,[]],[23,[\"httpRoutes\",\"firstObject\"]]],null],[27,\"eq\",[[22,3,[]],[23,[\"httpRoutes\",\"lastObject\"]]],null],[22,3,[]],[23,[\"httpRoutes\"]],[23,[\"model\",\"hosts\"]],[23,[\"isNew\"]],[23,[\"namespace\"]],[27,\"action\",[[22,0,[]],\"removeHttpRoute\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3,4]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"p-20 text-center text-muted\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.noRoutes\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn pull-right\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.addRouteLabel\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"addHttpRoute\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"isView\"]]],null,{\"statements\":[[4,\"accordion-list\",null,null,{\"statements\":[[0,\"    \"],[1,[27,\"config-validation-list\",null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"virtualservice\",[22,1,[\"expandAll\"]],[22,2,[]],[23,[\"model\",\"namespaceId\"]],[23,[\"model\",\"name\"]]]]],false],[0,\"\\n\\n    \"],[1,[27,\"form-labels-annotations\",null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[23,[\"model\"]],[23,[\"editing\"]],[22,1,[\"expandAll\"]],[22,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"form-labels-annotations\",null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[23,[\"model\",\"labels\"]],[27,\"action\",[[22,0,[]],\"setLabels\"],null],[23,[\"model\"]],[23,[\"editing\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"editing\",\"save\",\"cancel\"],[[23,[\"isEdit\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[23,[\"cancel\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/cru-virtual-service/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/custom-catalog/component", "istio/components/custom-catalog/component");
define("istio/components/destination-rule-row/component", ["exports", "istio/components/destination-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yn+3Kkfc",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n  \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n    \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[23,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"state\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"name\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"project-istio.destination-rules.detail\",[23,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"host\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[1,[23,[\"model\",\"host\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"subsets\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[23,[\"model\",\"displaySubsets\"]],true]],{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displaySubsetsString\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"created\"]]]]],[11,\"class\",\"text-right pr-20\"],[9],[0,\"\\n    \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/destination-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/component", ["exports", "istio/components/destination-rule-subset-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    subset: null,
    actions: {
      removeSubset: function removeSubset(subset) {
        if (this.removeSubset) {
          this.removeSubset(subset);
        }
      },
      setLabels: function setLabels(labels) {
        Ember.set(this, 'subset.labels', labels);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zIIuWcoZ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"editing\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.subsets.removeSubsetLabel\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"removeSubset\",[23,[\"subset\"]]]],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"pb-5 acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-subsets-name\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.subsets.name.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\",\"classesForDisplay\"],[[23,[\"editing\"]],[23,[\"subset\",\"name\"]],\"text-muted form-control-static\"]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"id\",\"class\",\"type\",\"value\",\"placeholder\"],[[27,\"concat\",[[23,[\"elementId\"]],\"-input-subsets-name\"],null],\"form-control\",\"text\",[23,[\"subset\",\"name\"]],[27,\"t\",[\"cruDestinationRule.subsets.name.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n      \"],[1,[27,\"form-labels\",null,[[\"initialLabels\",\"editing\",\"setLabels\"],[[23,[\"subset\",\"labels\"]],[23,[\"editing\"]],[27,\"action\",[[22,0,[]],\"setLabels\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/destination-rule-subset-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("ember-flatpickr/components/ember-flatpickr", "istio/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "istio/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "istio/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "istio/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "istio/components/field-required/component");
define.alias("shared/components/form-auth-cloud-credential/component", "istio/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "istio/components/form-certificate-row/component");
define.alias("shared/components/form-count/component", "istio/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "istio/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "istio/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "istio/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "istio/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "istio/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "istio/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "istio/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "istio/components/form-labels-annotations/component");
define("istio/components/form-labels/component", ["exports", "shared/mixins/manage-labels", "istio/components/form-labels/template"], function (_exports, _manageLabels, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_manageLabels.default, {
    layout: _template.default,
    classNames: ['accordion-wrapper'],
    detailKey: 'formUserLabels.detail',
    // Inputs
    initialLabels: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initLabels(this.get('initialLabels'), 'user', null, this.get('readonlyLabels'));
      this.labelsChanged();
    },
    actions: {
      addUserLabel: function addUserLabel() {
        var _this = this;

        this._super();

        Ember.run.next(function () {
          if (_this.isDestroyed || _this.isDestroying) {
            return;
          }

          _this.$('INPUT.key').last()[0].focus();
        });
      }
    },
    updateLabels: function updateLabels(labels) {
      if (this.setLabels) {
        var out = {};
        labels.forEach(function (label) {
          if (label.value) {
            out[label.key] = label.value;
          }
        });
        this.setLabels(out);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/form-labels/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4II+v+6F",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"userLabelArray\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[7,\"table\"],[11,\"class\",\"table fixed no-lines mt-20\"],[9],[0,\"\\n      \"],[7,\"tr\"],[11,\"class\",\"hidden-xs hidden-sm\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"formUserLabels.key.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"width\",\"30\"],[9],[0,\"\\n           \\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"formUserLabels.value.label\"],null],false],[1,[21,\"field-required\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[0,\"\\n           \\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"userLabelArray\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[11,\"data-title\",\"key\"],[9],[0,\"\\n            \"],[1,[27,\"input-paste\",null,[[\"pasted\",\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[[27,\"action\",[[22,0,[]],\"pastedLabels\"],null],\"form-control input-sm key\",\"text\",[22,1,[\"key\"]],\"formUserLabels.key.placeholder\",[27,\"eq\",[[22,1,[\"readonly\"]],true],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"td\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"input-sm\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"formUserLabels.separator\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"td\"],[11,\"data-title\",\"label\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[\"form-control input-sm\",\"text\",[22,1,[\"value\"]],[27,\"t\",[\"formUserLabels.value.placeholder\"],null],[27,\"eq\",[[22,1,[\"readonly\"]],true],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"td\"],[11,\"class\",\"text-right\"],[9],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm\"],[12,\"disabled\",[27,\"eq\",[[22,1,[\"readonly\"]],true],null]],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-minus\"],[9],[10],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"generic.remove\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"removeLabel\",[22,1,[]]]],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"protip pt-10\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"formUserLabels.protip\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"formUserLabels.addAction\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"addUserLabel\"]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"table-labels\",null,[[\"header\",\"model\",\"search\"],[[27,\"t\",[\"formUserLabels.title\"],null],[23,[\"initialLabels\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/form-labels/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/form-match-expressions/component", "istio/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "istio/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "istio/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "istio/components/form-members/component");
define.alias("shared/components/form-name-description/component", "istio/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "istio/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "istio/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "istio/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "istio/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "istio/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "istio/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "istio/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "istio/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "istio/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "istio/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "istio/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "istio/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "istio/components/graph-area/component");
define.alias("shared/components/hook-row/component", "istio/components/hook-row/component");
define.alias("shared/components/host-pod/component", "istio/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "istio/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "istio/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "istio/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "istio/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "istio/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "istio/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "istio/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "istio/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "istio/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "istio/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "istio/components/hover-dropdown/component");
define("istio/components/http-route-destination/component", ["exports", "istio/components/http-route-destination/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    httpRouteDestinations: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initDestinations();
    },
    didInsertElement: function didInsertElement() {
      if (!Ember.get(this, 'route.type') && Ember.get(this, 'httpRouteDestinations.length') === 0) {
        this.send('addDestination');
      }
    },
    actions: {
      addDestination: function addDestination() {
        var destination = Ember.Object.create({
          destination: {
            subset: this.getNewVersion()
          },
          weight: Ember.get(this, 'httpRouteDestinations.length') === 0 ? 100 : 0
        });
        var hosts = Ember.get(this, 'hosts') || [];
        var firstHost = Ember.get(hosts, 'firstObject');

        if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
          Ember.set(destination, 'destination.host', firstHost);
        }

        Ember.get(this, 'httpRouteDestinations').pushObject(destination);
      },
      removeDestination: function removeDestination(destination) {
        Ember.get(this, 'httpRouteDestinations').removeObject(destination);
      }
    },
    hostsDidChange: Ember.observer('hosts.[]', function () {
      var hosts = Ember.get(this, 'hosts') || [];
      var firstHost = Ember.get(hosts, 'firstObject');

      if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
        (Ember.get(this, 'httpRouteDestinations') || []).forEach(function (destination) {
          Ember.set(destination, 'destination.host', firstHost);
        });
      }
    }),
    inputDidChange: Ember.observer('httpRouteDestinations.@each.{weight,portNumberOrName}', function () {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(function (destination) {
        var port = Ember.get(destination, 'portNumberOrName');

        if (port && (0, _util.isNumeric)(port)) {
          Ember.set(destination, 'destination.port', {
            number: parseInt(port, 10)
          });
        } else if (port) {
          Ember.set(destination, 'destination.port', {
            name: port
          });
        } else {
          delete destination.destination['port'];
        }
      });

      if (httpRouteDestinations.length === 2) {
        var _this$getCurrentWeigh = this.getCurrentWeights(),
            weight1 = _this$getCurrentWeigh.weight1,
            weight2 = _this$getCurrentWeigh.weight2;

        if (weight1 === Ember.get(this, 'weight1') && weight2 !== Ember.get(this, 'weight2')) {
          weight1 = 100 - weight2;
          Ember.set(httpRouteDestinations[0], 'weight', weight1);
        } else if (weight1 !== Ember.get(this, 'weight1') && weight2 === Ember.get(this, 'weight2')) {
          weight2 = 100 - weight1;
          Ember.set(httpRouteDestinations[1], 'weight', weight2);
        }

        Ember.setProperties(this, {
          weight1: weight1,
          weight2: weight2
        });
      }
    }),
    getNewVersion: function getNewVersion() {
      var name = Ember.get(this, 'httpRouteDestinations.lastObject.destination.subset');

      if (name) {
        var matches = name.match(/\d+$/);

        if (matches.length > 0) {
          var prefix = name.slice(0, name.length - matches[0].length);
          return "".concat(prefix).concat(parseInt(matches[0], 10) + 1);
        }
      } else {
        return 'v1';
      }

      return '';
    },
    getCurrentWeights: function getCurrentWeights() {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      var weight1 = 0;
      var weight2 = 0;

      if (httpRouteDestinations.length === 2) {
        var dest1 = httpRouteDestinations[0];
        var dest2 = httpRouteDestinations[1];
        weight1 = Ember.get(dest1, 'weight');
        weight2 = Ember.get(dest2, 'weight');

        if (!weight1) {
          weight1 = 0;
        }

        if (!weight2) {
          weight2 = 0;
        }

        weight1 = parseInt(weight1, 10);
        weight2 = parseInt(weight2, 10);
      }

      return {
        weight1: weight1,
        weight2: weight2
      };
    },
    initDestinations: function initDestinations() {
      var httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(function (destination) {
        var port = Ember.get(destination, 'destination.port');

        if (port) {
          Ember.set(destination, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
        }
      });

      if (httpRouteDestinations.length === 2) {
        Ember.setProperties(this, this.getCurrentWeights());
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-destination/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+7Lxo48j",
    "block": "{\"symbols\":[\"destination\"],\"statements\":[[4,\"if\",[[23,[\"httpRouteDestinations\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"table\"],[11,\"class\",\"fixed striped mt-20\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.host.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.subset.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.port.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.weight.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"httpRouteDestinations\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,1,[\"destination\",\"host\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"istio-host-select\",null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[23,[\"namespace\",\"id\"]],[22,1,[\"destination\",\"host\"]],\"input-sm\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,1,[\"destination\",\"subset\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[22,1,[\"destination\",\"subset\"]],[27,\"t\",[\"cruVirtualService.http.routes.destination.subset.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,1,[\"portNumberOrName\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[22,1,[\"portNumberOrName\"]],[27,\"t\",[\"cruVirtualService.http.routes.destination.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,1,[\"weight\"]]]],{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[1,[27,\"input-integer\",null,[[\"class\",\"min\",\"max\",\"value\",\"placeholder\"],[\"input-sm\",\"0\",\"100\",[22,1,[\"weight\"]],[27,\"t\",[\"cruVirtualService.http.routes.destination.weight.placeholder\"],null]]]],false],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n                  %\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[7,\"td\"],[11,\"class\",\"text-right\"],[9],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm\"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"icon icon-minus\"],[9],[10],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"\\n                  \"],[1,[27,\"t\",[\"generic.remove\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[3,\"action\",[[22,0,[]],\"removeDestination\",[22,1,[]]]],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.noDestinations\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn pull-left\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.destination.addDestinationLabel\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"addDestination\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/http-route-destination/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-match/component", ["exports", "istio/components/http-route-match/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var HEADERS = 'headers';
  var EXACT = 'exact';
  var PREFIX = 'prefix';
  var REGEX = 'regex';
  var AUTHORITY = 'authority';
  var METHOD = 'method';
  var URI = 'uri';
  var SCHEME = 'scheme';
  var CONDITIONS = [{
    label: 'cruVirtualService.http.routes.matches.condition.exact',
    value: EXACT
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.prefix',
    value: PREFIX
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.regex',
    value: REGEX
  }];

  function getStringMatch(condition, value) {
    var out = {};
    out[condition] = value;
    return out;
  }

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    matches: null,
    route: null,
    conditions: CONDITIONS,
    model: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initMatches();
    },
    didInsertElement: function didInsertElement() {
      if (Ember.get(this, 'matches.length') === 0) {
        this.send('addMatch');
      }
    },
    actions: {
      addMatch: function addMatch() {
        var match = Ember.Object.create({
          matchType: HEADERS,
          condition: EXACT
        });
        Ember.get(this, 'matches').pushObject(match);
      },
      removeMatch: function removeMatch(match) {
        Ember.get(this, 'matches').removeObject(match);
      },
      removeRouteMatch: function removeRouteMatch(match) {
        if (this.removeMatch) {
          this.removeMatch(match);
        }
      },
      setGateways: function setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      },
      setSourceLabels: function setSourceLabels(labels) {
        if (Object.keys(labels || {}).length > 0) {
          Ember.set(this, 'model.sourceLabels', labels);
        } else {
          var model = Ember.get(this, 'model');
          delete model['sourceLabels'];
        }
      }
    },
    portDidChange: Ember.observer('model.port', function () {
      var port = Ember.get(this, 'model.port');

      if (port === undefined || port === '') {
        delete Ember.get(this, 'model')['port'];
      }
    }),
    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      var matches = Ember.get(this, 'matches') || [];
      var model = Ember.get(this, 'model');
      var authority = false;
      var method = false;
      var uri = false;
      var scheme = false;
      matches.filterBy('value').forEach(function (match) {
        switch (match.matchType) {
          case AUTHORITY:
            Ember.set(model, AUTHORITY, getStringMatch(match.condition, match.value));
            authority = true;
            break;

          case URI:
            Ember.set(model, URI, getStringMatch(match.condition, match.value));
            uri = true;
            break;

          case SCHEME:
            Ember.set(model, SCHEME, getStringMatch(match.condition, match.value));
            scheme = true;
            break;

          case METHOD:
            Ember.set(model, METHOD, getStringMatch(match.condition, match.value));
            method = true;
            break;
        }
      });

      if (!authority) {
        delete model[AUTHORITY];
      }

      if (!method) {
        delete model[METHOD];
      }

      if (!uri) {
        delete model[URI];
      }

      if (!scheme) {
        delete model[SCHEME];
      }

      this.setHeaders();
    }),
    setHeaders: function setHeaders() {
      var model = Ember.get(this, 'model');
      var matches = Ember.get(this, 'matches') || [];
      var out = {};
      matches.filter(function (match) {
        return match.key && match.value && match.matchType === HEADERS;
      }).forEach(function (match) {
        Ember.set(out, match.key, getStringMatch(match.condition, match.value));
      });

      if (Object.keys(out).length > 0) {
        Ember.set(model, HEADERS, out);
      } else {
        delete model[HEADERS];
      }
    },
    initMatches: function initMatches() {
      var _this = this;

      var out = [];
      var model = Ember.get(this, 'model') || {};
      var authority = Ember.get(model, AUTHORITY);
      var method = Ember.get(model, METHOD);
      var uri = Ember.get(model, URI);
      var scheme = Ember.get(model, SCHEME);
      var headers = Ember.get(model, HEADERS);

      if (authority) {
        out.pushObjects(this.getMatchArray(AUTHORITY, authority));
      }

      if (method) {
        out.pushObjects(this.getMatchArray(METHOD, method));
      }

      if (uri) {
        out.pushObjects(this.getMatchArray(URI, uri));
      }

      if (scheme) {
        out.pushObjects(this.getMatchArray(SCHEME, scheme));
      }

      if (headers) {
        Object.keys(headers).forEach(function (key) {
          var array = _this.getMatchArray(HEADERS, headers[key]);

          array.forEach(function (item) {
            return Ember.set(item, 'key', key);
          });
          out.pushObjects(array);
        });
      }

      Ember.set(this, 'matches', out);
    },
    getMatchArray: function getMatchArray(type, match) {
      var out = [];

      if (!match) {
        return out;
      }

      var exact = Ember.get(match, EXACT);
      var prefix = Ember.get(match, PREFIX);
      var regex = Ember.get(match, REGEX);

      if (exact) {
        out.push({
          matchType: type,
          condition: EXACT,
          value: exact
        });
      }

      if (prefix) {
        out.push({
          matchType: type,
          condition: PREFIX,
          value: prefix
        });
      }

      if (regex) {
        out.push({
          matchType: type,
          condition: REGEX,
          value: regex
        });
      }

      return out;
    }
  });

  _exports.default = _default;
});
define("istio/components/http-route-match/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zyxwXW1c",
    "block": "{\"symbols\":[\"c\",\"row\",\"match\",\"index\"],\"statements\":[[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.removeLabel\"],null],false],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"removeRouteMatch\",[23,[\"model\"]]]],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"matches\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"table\"],[11,\"class\",\"fixed striped mt-20\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.type.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.key.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.condition.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.value.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[7,\"th\"],[11,\"width\",\"40\"],[9],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"matches\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,3,[\"matchType\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"match-type-select\",null,[[\"match\",\"matches\",\"index\"],[[22,3,[]],[23,[\"matches\"]],[22,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,3,[\"matchType\"]],\"headers\"],null]],null,{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,3,[\"key\"]]]],{\"statements\":[[0,\"                \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[22,3,[\"key\"]],[27,\"t\",[\"cruVirtualService.http.routes.matches.key.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"generic.na\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,3,[\"condition\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"new-select\",null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[23,[\"conditions\"]],true,[22,3,[\"condition\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"p-5\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,3,[\"value\"]]]],{\"statements\":[[0,\"              \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[22,3,[\"value\"]],[27,\"t\",[[27,\"concat\",[\"cruVirtualService.http.routes.matches.value.\",[22,3,[\"matchType\"]],\".\",[22,3,[\"condition\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[7,\"td\"],[11,\"class\",\"text-right\"],[9],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"btn bg-primary btn-sm\"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"icon icon-minus\"],[9],[10],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"\\n                  \"],[1,[27,\"t\",[\"generic.remove\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[3,\"action\",[[22,0,[]],\"removeMatch\",[22,3,[]]]],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.noMatches\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn pull-left\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.addMatchLabel\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"addMatch\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-port\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.port.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"port\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input-integer\",null,[[\"id\",\"min\",\"max\",\"value\",\"classNames\",\"placeholder\"],[[27,\"concat\",[[23,[\"elementId\"]],\"-input-port\"],null],0,65535,[23,[\"model\",\"port\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.matches.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[1,[27,\"form-key-value\",null,[[\"editing\",\"addActionLabel\",\"header\",\"initialMap\",\"changed\"],[[23,[\"editing\"]],\"cruVirtualService.http.routes.matches.sourceLabels.addActionLabel\",[27,\"t\",[\"cruVirtualService.http.routes.matches.sourceLabels.label\"],null],[23,[\"model\",\"sourceLabels\"]],[27,\"action\",[[22,0,[]],\"setSourceLabels\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[23,[\"editing\"]],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[27,\"action\",[[22,0,[]],\"setGateways\"],null],\"btn bg-link icon-btn\",[23,[\"model\",\"gateways\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,2,[\"value\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[22,2,[\"value\"]],[27,\"t\",[\"cruVirtualService.gateways.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"hr\"],[11,\"class\",\"mt-30\"],[9],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/http-route-match/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/huawei-user-labels/component", "istio/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "istio/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "istio/components/illiquid-model");
define.alias("shared/components/input-answer-row/component", "istio/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "istio/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "istio/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "istio/components/input-float/component");
define.alias("shared/components/input-identity/component", "istio/components/input-identity/component");
define.alias("shared/components/input-int/component", "istio/components/input-int/component");
define.alias("shared/components/input-integer/component", "istio/components/input-integer/component");
define.alias("shared/components/input-number/component", "istio/components/input-number/component");
define.alias("shared/components/input-or-display/component", "istio/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "istio/components/input-paste/component");
define.alias("shared/components/input-slider/component", "istio/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "istio/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "istio/components/input-text-file/component");
define.alias("shared/components/input-url/component", "istio/components/input-url/component");
define.alias("shared/components/input-yaml/component", "istio/components/input-yaml/component");
define("istio/components/istio-catalog/component", ["exports", "istio/components/istio-catalog/template", "shared/mixins/crud-catalog", "shared/utils/util", "shared/utils/parse-unit", "shared/mixins/reservation-check", "shared/mixins/catalog-upgrade", "semver"], function (_exports, _template, _crudCatalog, _util, _parseUnit, _reservationCheck, _catalogUpgrade, _semver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _ANSWER_TO_CONFIG;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var GATEWAY_TYPE = ['NodePort', 'LoadBalancer'];
  var PERSISTENCE_KEYS = ['existingClaim', 'size', 'storageClass'];
  var DEFAULT_HTTP2_PORT = 31380;
  var DEFAULT_HTTPS_PORT = 31390;
  var GATEWAY_ENABLED = 'gateways.enabled';
  var HTTP2_PORT = 'gateways.istio-ingressgateway.ports[0].nodePort';
  var HTTPS_PORT = 'gateways.istio-ingressgateway.ports[1].nodePort';
  var LB_IP = 'gateways.istio-ingressgateway.loadBalancerIP';
  var LB_SOURCE_RANGES = 'gateways.istio-ingressgateway.loadBalancerSourceRanges';
  var PILOT_REQUEST_CPU = 'pilot.resources.requests.cpu';
  var PILOT_REQUEST_MEM = 'pilot.resources.requests.memory';
  var PILOT_LIMIT_CPU = 'pilot.resources.limits.cpu';
  var PILOT_LIMIT_MEM = 'pilot.resources.limits.memory';
  var PILOT_NODE_SELECTOR_PREFIX = 'pilot.nodeSelector.';
  var PILOT_TOLERATION = 'pilot.tolerations';
  var MIXER_REQUEST_CPU = 'mixer.telemetry.resources.requests.cpu';
  var MIXER_REQUEST_MEM = 'mixer.telemetry.resources.requests.memory';
  var MIXER_LIMIT_CPU = 'mixer.telemetry.resources.limits.cpu';
  var MIXER_LIMIT_MEM = 'mixer.telemetry.resources.limits.memory';
  var MIXER_NODE_SELECTOR_PREFIX = 'mixer.nodeSelector.';
  var MIXER_TOLERATION = 'mixer.tolerations';
  var POLICY_REQUEST_CPU = 'mixer.policy.resources.requests.cpu';
  var POLICY_REQUEST_MEM = 'mixer.policy.resources.requests.memory';
  var POLICY_LIMIT_CPU = 'mixer.policy.resources.limits.cpu';
  var POLICY_LIMIT_MEM = 'mixer.policy.resources.limits.memory';
  var GATEWAY_REQUEST_CPU = 'gateways.istio-ingressgateway.resources.requests.cpu';
  var GATEWAY_REQUEST_MEM = 'gateways.istio-ingressgateway.resources.requests.memory';
  var GATEWAY_LIMIT_CPU = 'gateways.istio-ingressgateway.resources.limits.cpu';
  var GATEWAY_LIMIT_MEM = 'gateways.istio-ingressgateway.resources.limits.memory';
  var GATEWAY_NODE_SELECTOR_PREFIX = 'gateways.istio-ingressgateway.nodeSelector.';
  var GATEWAY_TOLERATION = 'gateways.istio-ingressgateway.tolerations';
  var TRACING_REQUEST_CPU = 'tracing.jaeger.resources.requests.cpu';
  var TRACING_REQUEST_MEM = 'tracing.jaeger.resources.requests.memory';
  var TRACING_LIMIT_CPU = 'tracing.jaeger.resources.limits.cpu';
  var TRACING_LIMIT_MEM = 'tracing.jaeger.resources.limits.memory';
  var TRACING_NODE_SELECTOR_PREFIX = 'tracing.nodeSelector.';
  var TRACING_TOLERATION = 'tracing.tolerations';
  var MEMBERS = 'global.members';
  var MEMBER_USER = 'User';
  var MEMBER_GROUP = 'Group';
  var MEMBER_SYSYTEM = 'system:authenticated';
  var ANSWER_TO_CONFIG = (_ANSWER_TO_CONFIG = {
    'tracing.enabled': 'tracingEnabled'
  }, _defineProperty(_ANSWER_TO_CONFIG, PILOT_REQUEST_CPU, 'pilotRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_REQUEST_MEM, 'pilotRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_LIMIT_MEM, 'pilotLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, PILOT_LIMIT_CPU, 'pilotLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_ENABLED, 'gatewayEnabled'), _defineProperty(_ANSWER_TO_CONFIG, 'gateways.istio-ingressgateway.type', 'gatewayType'), _defineProperty(_ANSWER_TO_CONFIG, LB_IP, 'loadBalancerIP'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_REQUEST_MEM, 'mixerTelemetryRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_LIMIT_MEM, 'mixerTelemetryLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_REQUEST_CPU, 'mixerTelemetryRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, MIXER_LIMIT_CPU, 'mixerTelemetryLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, 'pilot.traceSampling', 'traceSampling'), _defineProperty(_ANSWER_TO_CONFIG, 'mixer.policy.enabled', 'mixerPolicyEnabled'), _defineProperty(_ANSWER_TO_CONFIG, 'mtls.enabled', 'mtlsEnabled'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_REQUEST_CPU, 'tracingRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_REQUEST_MEM, 'tracingRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_LIMIT_CPU, 'tracingLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, TRACING_LIMIT_MEM, 'tracingLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_REQUEST_CPU, 'gatewayRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_REQUEST_MEM, 'gatewayRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_LIMIT_CPU, 'gatewayLimitCpu'), _defineProperty(_ANSWER_TO_CONFIG, GATEWAY_LIMIT_MEM, 'gatewayLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_REQUEST_MEM, 'mixerPolicyRequestMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_LIMIT_MEM, 'mixerPolicyLimitMemory'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_REQUEST_CPU, 'mixerPolicyRequestCpu'), _defineProperty(_ANSWER_TO_CONFIG, POLICY_LIMIT_CPU, 'mixerPolicyLimitCpu'), _ANSWER_TO_CONFIG);
  var HIDDEN_KEYS = {
    'enableCRDs': true,
    'mixer.enabled': true,
    'pilot.enabled': true,
    'security.enabled': true,
    'nodeagent.enabled': false,
    'istio_cni.enabled': false,
    'istiocoredns.enabled': false,
    'sidecarInjectorWebhook.enabled': true,
    'kiali.enabled': true,
    'galley.enabled': true,
    'certmanager.enabled': false,
    'global.rancher.domain': '',
    'global.rancher.clusterId': '',
    'global.monitoring.type': 'cluster-monitoring'
  };
  var NODE_PORT_KEYS = {
    'gateways.istio-ingressgateway.ports[0].name': 'http2',
    'gateways.istio-ingressgateway.ports[0].port': 80,
    'gateways.istio-ingressgateway.ports[1].name': 'https',
    'gateways.istio-ingressgateway.ports[1].port': 443
  };
  var WORKLOADS = ['mixerTelemetry', 'tracing', 'gateway', 'pilot', 'mixerPolicy'];
  var ISTIO_TEMPLATE = 'system-library-rancher-istio';
  var NODE_EXPORTER_CPU = 100;
  var NODE_EXPORTER_MEMORY = 30;
  var MONITORING_MIN_CPU = 650;
  var MONITORING_MIN_MEMORY = 650;
  var PROMETHEUS_DEFAULT_CPU = 750;
  var PROMETHEUS_DEFAULT_MEMORY = 750;
  var MONITORING_CLUSTER_CPU = PROMETHEUS_DEFAULT_CPU + MONITORING_MIN_CPU;
  var MONITORING_CLUSTER_MEMORY = PROMETHEUS_DEFAULT_MEMORY + MONITORING_MIN_MEMORY;
  var ISTIO_CLUSTER_CPU = 500;
  var ISTIO_CLUSTER_MEMORY = 500;

  var _default = Ember.Component.extend(_crudCatalog.default, _reservationCheck.default, _catalogUpgrade.default, {
    scope: Ember.inject.service(),
    intl: Ember.inject.service(),
    grafana: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    layout: _template.default,
    answers: null,
    appName: 'cluster-istio',
    nsName: 'istio-system',
    templateId: ISTIO_TEMPLATE,
    templateName: 'rancher-istio',
    level: Ember.computed.alias('scope.currentPageScope'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    enableClusterMonitoring: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initConfig();
      this.initWorkloads();

      if (Ember.get(this, 'enabled')) {
        this.initAnswers();
      }
    },
    actions: {
      save: function save(cb) {
        var _this = this;

        if (!Ember.get(this, 'enableClusterMonitoring')) {
          this.enableMonitoring();
        }

        Ember.set(this, 'errors', []);
        var errors = this.validate() || [];

        if (errors.length > 0) {
          Ember.set(this, 'errors', errors);
          cb();
          return;
        }

        var answers = _objectSpread({}, HIDDEN_KEYS, {
          'global.rancher.domain': window.location.host,
          'global.rancher.clusterId': Ember.get(this, 'cluster.id')
        });

        var answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
        answerKeys.map(function (key) {
          var value = Ember.get(_this, "config.".concat(ANSWER_TO_CONFIG[key]));

          if (value === undefined || value === '') {
            return;
          }

          switch (key) {
            case PILOT_REQUEST_CPU:
            case PILOT_LIMIT_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              answers[key] = "".concat(value, "m");
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              answers[key] = "".concat(value, "Mi");
              break;

            default:
              answers[key] = value;
          }
        });
        ['tracing', 'gateway', 'pilot', 'mixer'].map(function (component) {
          (Ember.get(_this, "".concat(component, "NodeSelectors")) || []).map(function (selector) {
            var key = selector.key,
                value = selector.value;

            if (key.includes('.')) {
              key = key.replace(/\./g, '\\.');
            }

            if (component === 'gateway') {
              answers["gateways.istio-ingressgateway.nodeSelector.".concat(key)] = value;
            } else {
              answers["".concat(component, ".nodeSelector.").concat(key)] = value;
            }
          });
        });

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'LoadBalancer') {
          (Ember.get(this, 'loadBalancerSourceRanges') || []).map(function (value, idx) {
            answers["".concat(LB_SOURCE_RANGES, "[").concat(idx, "]")] = value;
          });
        }

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
          (Object.keys(NODE_PORT_KEYS) || []).map(function (key) {
            answers[key] = NODE_PORT_KEYS[key];
          });
          answers[HTTP2_PORT] = Ember.get(this, 'config.http2Port');
          answers[HTTPS_PORT] = Ember.get(this, 'config.httpsPort');
        }

        var users = Ember.get(this, 'globalStore').all('user');

        if (Ember.get(this, 'allowSystemGroup')) {
          answers["".concat(MEMBERS, "[0].kind")] = MEMBER_GROUP;
          answers["".concat(MEMBERS, "[0].name")] = MEMBER_SYSYTEM;
        } else {
          (Ember.get(this, 'members') || []).map(function () {
            var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var idx = arguments.length > 1 ? arguments[1] : undefined;
            var principalType = m.principalType,
                id = m.id;
            var name = id;

            if (principalType === 'user') {
              var filtered = users.filter(function () {
                var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return u.principalIds.includes(id);
              }).get('firstObject');

              if (filtered) {
                name = Ember.get(filtered, 'id');
              } else {
                return;
              }
            }

            answers["".concat(MEMBERS, "[").concat(idx, "].kind")] = (0, _util.ucFirst)(principalType);
            answers["".concat(MEMBERS, "[").concat(idx, "].name")] = name;
          });
        }

        ['gateway', 'pilot', 'mixer', 'tracing'].map(function (component) {
          (Ember.get(_this, "".concat(component, "Tolerations")) || []).map(function (t, index) {
            Object.keys(t).map(function (key) {
              if (t[key]) {
                if (component === 'gateway') {
                  answers["gateways.istio-ingressgateway.tolerations[".concat(index, "].").concat(key)] = t[key];
                } else {
                  answers["".concat(component, ".tolerations[").concat(index, "].").concat(key)] = t[key];
                }
              }
            });
          });
        });
        this.save(cb, answers);
      },
      addAuthorizedPrincipal: function addAuthorizedPrincipal(principal) {
        if (principal) {
          var _this$members = this.members,
              members = _this$members === void 0 ? [] : _this$members,
              globalStore = this.globalStore;
          members.pushObject(globalStore.createRecord(principal));
          Ember.set(this, 'members', members);
        }
      },
      removeMember: function removeMember(member) {
        var _this$members2 = this.members,
            members = _this$members2 === void 0 ? [] : _this$members2;
        members.removeObject(member);
      },
      disable: function disable() {
        var app = this.app,
            modalService = this.modalService;
        modalService.toggleModal('modal-delete-istio', {
          escToClose: true,
          istioApp: app
        });
      }
    },
    workloadEnabledChange: Ember.observer('config.tracingEnabled', 'config.gatewayEnabled', 'config.mixerPolicyEnabled', function () {
      var _this2 = this;

      ['tracing', 'gateway'].map(function (w) {
        if (!Ember.get(_this2, "config.".concat(w, "Enabled"))) {
          Ember.set(_this2, "".concat(w, "NodeSelectors"), []);
        }
      });
      this.notifyPropertyChange('requestsCpu');
      this.notifyPropertyChange('requestsMemory');
      this.notifyPropertyChange('saveDisabled');
    }),
    gatewayTypeContent: Ember.computed(function () {
      return GATEWAY_TYPE.map(function (value) {
        return {
          label: value,
          value: value
        };
      });
    }),
    kialiUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali-http:80/proxy/");
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search");
    }),
    prometheusUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
    }),
    saveDisabled: Ember.computed('mixerTelemetryWarning', 'enabled', 'istioWarning', 'pilotWarning', 'tracingWarning', 'gatewayWarning', 'mixerPolicyWarning', 'mixerWarning', function () {
      var _this3 = this;

      return [].concat(WORKLOADS, ['mixer']).reduce(function (out, w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this3, "config.".concat(w, "Enabled"))) {
          return out || Ember.get(_this3, "".concat(w, "Warning")) || false;
        } else if (w === 'mixerTelemetry') {
          return out || Ember.get(_this3, 'mixerTelemetryWarning') || false || Ember.get(_this3, 'mixerWarning');
        } else {
          return out || Ember.get(_this3, "".concat(w, "Warning")) || false;
        }
      }, false) || Ember.get(this, 'istioWarning') || false;
    }),
    canReuse: Ember.computed('monitoringApp.externalIdInfo.version', function () {
      var version = Ember.get(this, 'monitoringApp.externalIdInfo.version');
      var cannotReuseVersion = '0.0.3';
      return _semver.default.gt(_semver.default.coerce(version), _semver.default.coerce(cannotReuseVersion));
    }),
    istioWarning: Ember.computed('insufficientCpu', 'insufficientMemory', function () {
      var insufficientCpu = this.insufficientCpu,
          insufficientMemory = this.insufficientMemory,
          intl = this.intl,
          minCpu = this.minCpu,
          minMemory = this.minMemory,
          enabled = this.enabled;
      var prefix = 'clusterIstioPage.insufficientSize.total';
      var action = enabled ? 'update' : 'enable';

      if (insufficientCpu && insufficientMemory) {
        return intl.t("".concat(prefix, ".all"), {
          minCpu: minCpu,
          minMemory: minMemory,
          action: action
        });
      } else if (insufficientCpu) {
        return intl.t("".concat(prefix, ".cpu"), {
          minCpu: minCpu,
          action: action
        });
      } else if (insufficientMemory) {
        return intl.t("".concat(prefix, ".memory"), {
          minMemory: minMemory,
          action: action
        });
      }
    }),
    enabled: Ember.computed('app.state', function () {
      return !!Ember.get(this, 'app') && Ember.get(this, 'app.state') !== 'removing';
    }),
    nsNeedMove: Ember.computed('namespace.projectId', 'project.id', function () {
      var _this$namespace = this.namespace,
          namespace = _this$namespace === void 0 ? {} : _this$namespace,
          _this$project = this.project,
          project = _this$project === void 0 ? {} : _this$project;
      return namespace.projectId !== project.id;
    }),
    requestsCpu: Ember.computed('config.mixerTelemetryRequestCpu', 'config.pilotRequestCpu', 'config.gatewayRequestCpu', 'config.tracingRequestCpu', 'config.mixerPolicyRequestCpu', function () {
      var _this4 = this;

      return WORKLOADS.filter(function (w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this4, "config.".concat(w, "Enabled"))) {
          return false;
        }

        return true;
      }).reduce(function (all, w) {
        return all + parseInt(Ember.get(_this4, "config.".concat(w, "RequestCpu")) || 0);
      }, 0);
    }),
    requestsMemory: Ember.computed('config.mixerTelemetryRequestMemory', 'config.pilotRequestMemory', 'config.gatewayRequestMemory', 'config.tracingRequestMemory', 'config.mixerPolicyRequestMemory', function () {
      var _this5 = this;

      return WORKLOADS.filter(function (w) {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(_this5, "config.".concat(w, "Enabled"))) {
          return false;
        }

        return true;
      }).reduce(function (all, w) {
        return all + parseInt(Ember.get(_this5, "config.".concat(w, "RequestMemory")) || 0);
      }, 0);
    }),
    mixerSchedulableNodes: Ember.computed('mixerNodeSelectors.[]', 'cluster.nodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', function () {
      return this.getSchedulableNodes('mixer');
    }),
    insufficientMixerCpu: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestCpu', 'config.mixerPolicyRequestCpu', 'cluster.nodes.@each.{allocatable,requested}', function () {
      var reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
      }

      return this.getComponentInsufficient('mixer', 'cpu', reservation);
    }),
    insufficientMixerMemory: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestMemory', 'config.mixerPolicyRequestMemory', 'cluster.nodes.@each.{allocatable,requested}', function () {
      var reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentInsufficient('mixer', 'memory', reservation);
    }),
    mixerWarning: Ember.computed('insufficientMixerCpu', 'insufficientMixerMemory', 'insufficientMixerTelemetryMemory', 'insufficientMixerTelemetryCpu', 'mixerNodeSelectors.[]', 'config.mixerPolicyEnabled', function () {
      if ((Ember.get(this, 'mixerNodeSelectors') || []).length === 0) {
        return;
      }

      var displayName = Ember.get(this, 'config.mixerPolicyEnabled') ? Ember.get(this, 'intl').t('clusterIstioPage.telemetryAndPolicy') : undefined;
      var componentCpu;
      var componentMemory;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        componentCpu = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
        componentMemory = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        componentCpu = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
        componentMemory = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentWarning('mixer', componentCpu, componentMemory, displayName);
    }),
    istioVersions: Ember.computed('availableVersions', 'templateLables', function () {
      var _this$availableVersio = this.availableVersions,
          availableVersions = _this$availableVersio === void 0 ? [] : _this$availableVersio,
          _this$templateLables = this.templateLables,
          templateLables = _this$templateLables === void 0 ? {} : _this$templateLables;
      return availableVersions.map(function (v) {
        var key = "rancher.istio.v".concat(v.value);
        return {
          label: "".concat(v.label, " (Istio ").concat(templateLables[key], ")"),
          value: v.value
        };
      });
    }),
    monitoringApps: Ember.computed('monitoringApp', function () {
      return [Ember.get(this, 'monitoringApp')];
    }),
    clusterLevelMinCpu: Ember.computed('cluster.enableClusterMonitoring', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_CPU;
      } else {
        var allNodes = Ember.get(this, 'cluster.nodes') || [];
        var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_CPU + MONITORING_CLUSTER_CPU + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_CPU;
      }
    }),
    clusterLevelMinMemory: Ember.computed('cluster.enableClusterMonitoring', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_MEMORY;
      } else {
        var allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
        var schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_MEMORY + MONITORING_CLUSTER_MEMORY + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_MEMORY;
      }
    }),
    canEnable: Ember.computed('cluster.isWindows', function () {
      if (Ember.get(this, 'cluster.isWindows')) {
        return false;
      } else {
        return true;
      }
    }),
    willSavePersistence: function willSavePersistence(answers, component) {
      var _this6 = this;

      PERSISTENCE_KEYS.map(function (k) {
        var key = "".concat(component, ".persistence.").concat(k);
        var useStorageClass = Ember.get(_this6, "use".concat((0, _util.ucFirst)(component), "StorageClass"));

        if (['storageClass', 'size'].includes(k) && useStorageClass) {
          answers[key] = Ember.get(_this6, key);
        }

        if (k === 'existingClaim' && !useStorageClass) {
          answers[key] = Ember.get(_this6, key);
        }
      });
    },
    validate: function validate() {
      var _this7 = this;

      var errors = [];
      ['pilot', 'mixerTelemetry'].map(function (w) {
        errors.pushObjects(_this7.validateLimitAndRequest(w));
      });

      if (Ember.get(this, 'config.gatewayEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('gateway'));
      }

      if (Ember.get(this, 'config.tracingEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('tracing'));
      }

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('mixerPolicy'));
      }

      ['traceSampling'].map(function (field) {
        if (!Ember.get(_this7, "config.".concat(field))) {
          errors.pushObject((0, _util.requiredError)("clusterIstioPage.config.".concat(field, ".label")));
        }
      });

      if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
        ['http2Port', 'httpsPort'].map(function (field) {
          if (!Ember.get(_this7, "config.".concat(field))) {
            errors.pushObject((0, _util.requiredError)("clusterIstioPage.config.".concat(field, ".label")));
          }
        });
      }

      return errors;
    },
    validatePV: function validatePV(component) {
      var intl = this.intl,
          _this$storageClasses = this.storageClasses,
          storageClasses = _this$storageClasses === void 0 ? [] : _this$storageClasses;
      var errors = [];
      var defaultStorageClasses = storageClasses.filter(function (s) {
        return s.annotations && (s.annotations['storageclass.kubernetes.io/is-default-class'] === 'true' || s.annotations['storageclass.beta.kubernetes.io/is-default-class'] === 'true');
      });

      if (Ember.get(this, "use".concat((0, _util.ucFirst)(component), "StorageClass"))) {
        if (defaultStorageClasses.length === 0 && !Ember.get(this, "".concat(component, ".persistence.storageClass"))) {
          var emptyError = intl.t('globalRegistryPage.config.storageClass.emptyError');
          errors.pushObject(emptyError);
        }

        if (!Ember.get(this, "".concat(component, ".persistence.size"))) {
          errors.pushObject(intl.t('globalRegistryPage.config.storageClass.sizeRequired', {
            component: (0, _util.ucFirst)(component)
          }));
        }
      } else if (!Ember.get(this, "".concat(component, ".persistence.existingClaim"))) {
        errors.pushObject((0, _util.requiredError)("clusterIstioPage.existingClaim.label", {
          component: (0, _util.ucFirst)(component)
        }));
      }

      return errors;
    },
    initConfig: function initConfig() {
      var config = {
        tracingEnabled: true,
        kialiEnabled: true,
        autoInject: true,
        mtlsEnabled: false,
        gatewayType: 'NodePort',
        gatewayEnabled: false,
        http2Port: DEFAULT_HTTP2_PORT,
        httpsPort: DEFAULT_HTTPS_PORT,
        mixerTelemetryRequestCpu: 1000,
        mixerTelemetryLimitCpu: 4800,
        mixerTelemetryRequestMemory: 1024,
        mixerTelemetryLimitMemory: 4096,
        traceSampling: 1,
        mixerPolicyEnabled: true,
        pilotRequestCpu: 500,
        pilotRequestMemory: 2048,
        pilotLimitCpu: 1000,
        pilotLimitMemory: 4096,
        gatewayRequestCpu: 100,
        gatewayLimitCpu: 2000,
        gatewayRequestMemory: 128,
        gatewayLimitMemory: 1024,
        tracingRequestCpu: 100,
        tracingLimitCpu: 500,
        tracingRequestMemory: 100,
        tracingLimitMemory: 1024,
        mixerPolicyRequestCpu: 1000,
        mixerPolicyLimitCpu: 4800,
        mixerPolicyRequestMemory: 1024,
        mixerPolicyLimitMemory: 4096
      };
      Ember.setProperties(this, {
        config: config,
        allowSystemGroup: false
      });
    },
    initWorkloads: function initWorkloads() {
      var _this8 = this;

      WORKLOADS.map(function (w) {
        Ember.defineProperty(_this8, "".concat(w, "SchedulableNodes"), Ember.computed("".concat(w, "NodeSelectors.[]"), 'cluster.nodes.@each.{allocatable,requested}', "config.".concat(w, "Enabled"), function () {
          return _this8.getSchedulableNodes(w);
        }));
        Ember.defineProperty(_this8, "insufficient".concat((0, _util.ucFirst)(w), "Cpu"), Ember.computed("".concat(w, "SchedulableNodes.@each.{allocatable,requested}"), "config.".concat(w, "RequestCpu"), 'cluster.nodes.@each.{allocatable,requested}', function () {
          return _this8.getComponentInsufficient(w, 'cpu');
        }));
        Ember.defineProperty(_this8, "insufficient".concat((0, _util.ucFirst)(w), "Memory"), Ember.computed("".concat(w, "SchedulableNodes.@each.{allocatable,requested}"), "config.".concat(w, "RequestMemory"), 'cluster.nodes.@each.{allocatable,requested}', function () {
          return _this8.getComponentInsufficient(w, 'memory');
        }));
        Ember.defineProperty(_this8, "".concat(w, "Warning"), Ember.computed("insufficient".concat((0, _util.ucFirst)(w), "Cpu"), "insufficient".concat((0, _util.ucFirst)(w), "Memory"), function () {
          return _this8.getComponentWarning(w);
        }));
      });
    },
    initAnswers: function initAnswers() {
      var _this9 = this;

      var customAnswers = {};
      var answers = Ember.get(this, 'app.answers') || {};
      var answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
      var mixerNodeSelector = {};
      var pilotNodeSelector = {};
      var gatewayNodeSelector = {};
      var tracingNodeSelector = {};
      var loadBalancerSourceRanges = [];
      Object.keys(answers).filter(function (key) {
        return key.startsWith(MIXER_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(MIXER_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        mixerNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(PILOT_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(PILOT_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        pilotNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(GATEWAY_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        gatewayNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith(TRACING_NODE_SELECTOR_PREFIX);
      }).map(function (k) {
        var value = answers[k] || '';
        var key = k.replace(TRACING_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        tracingNodeSelector[key] = value;
      });
      Object.keys(answers).filter(function (key) {
        return key.startsWith("".concat(LB_SOURCE_RANGES, "["));
      }).map(function (k) {
        loadBalancerSourceRanges.pushObject(answers[k]);
      });
      var pilotTolerations = [];
      var mixerTolerations = [];
      var gatewayTolerations = [];
      var tracingTolerations = [];
      var pilotTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(PILOT_TOLERATION);
      });
      var pilotTolerationIndexs = pilotTolerationKeys.map(function (k) {
        return k.replace("".concat(PILOT_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      pilotTolerationIndexs.map(function (idx) {
        pilotTolerations.pushObject({
          key: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(PILOT_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var mixerTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(MIXER_TOLERATION);
      });
      var mixerTolerationIndexs = mixerTolerationKeys.map(function (k) {
        return k.replace("".concat(MIXER_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      mixerTolerationIndexs.map(function (idx) {
        mixerTolerations.pushObject({
          key: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(MIXER_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var gatewayTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(GATEWAY_TOLERATION);
      });
      var gatewayTolerationIndexs = gatewayTolerationKeys.map(function (k) {
        return k.replace("".concat(GATEWAY_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      gatewayTolerationIndexs.map(function (idx) {
        gatewayTolerations.pushObject({
          key: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(GATEWAY_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      var tracingTolerationKeys = Object.keys(answers).filter(function (key) {
        return key.startsWith(TRACING_TOLERATION);
      });
      var tracingTolerationIndexs = tracingTolerationKeys.map(function (k) {
        return k.replace("".concat(TRACING_TOLERATION, "["), '').split('].').get('firstObject');
      }).uniq();
      tracingTolerationIndexs.map(function (idx) {
        tracingTolerations.pushObject({
          key: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].key")] || '',
          operator: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].operator")] || '',
          value: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].value")] || '',
          effect: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].effect")] || '',
          tolerationSeconds: answers["".concat(TRACING_TOLERATION, "[").concat(idx, "].tolerationSeconds")] || ''
        });
      });
      this.updateCpuMemoryPreRequest();
      Ember.setProperties(this, {
        mixerNodeSelector: mixerNodeSelector,
        pilotNodeSelector: pilotNodeSelector,
        gatewayNodeSelector: gatewayNodeSelector,
        tracingNodeSelector: tracingNodeSelector,
        loadBalancerSourceRanges: loadBalancerSourceRanges,
        'config.http2Port': answers[HTTP2_PORT] || DEFAULT_HTTP2_PORT,
        'config.httpsPort': answers[HTTPS_PORT] || DEFAULT_HTTPS_PORT,
        pilotTolerations: pilotTolerations,
        mixerTolerations: mixerTolerations,
        gatewayTolerations: gatewayTolerations,
        tracingTolerations: tracingTolerations
      });
      this.initMembers();
      Object.keys(answers).forEach(function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (key.startsWith(MIXER_NODE_SELECTOR_PREFIX) || key.startsWith("".concat(LB_SOURCE_RANGES, "[")) || key.startsWith(PILOT_NODE_SELECTOR_PREFIX) || key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX) || key.startsWith(TRACING_NODE_SELECTOR_PREFIX) || key.startsWith("".concat(MEMBERS, "[")) || key.startsWith("".concat(PILOT_TOLERATION)) || key.startsWith("".concat(MIXER_TOLERATION)) || key.startsWith("".concat(GATEWAY_TOLERATION)) || key.startsWith("".concat(TRACING_TOLERATION))) {
          return;
        }

        if (Object.keys(HIDDEN_KEYS).includes(key)) {
          return;
        }

        if (Object.keys(NODE_PORT_KEYS).includes(key) || key === HTTP2_PORT || key === HTTPS_PORT) {
          return;
        }

        if (answerKeys.includes(key)) {
          var value;

          switch (key) {
            case PILOT_REQUEST_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case PILOT_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              value = (0, _util.convertToMillis)(answers[key] || '0');
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              value = (0, _parseUnit.parseSi)(answers[key] || '0', 1024) / 1048576;
              break;

            default:
              value = answers[key];
          }

          return Ember.set(_this9, "config.".concat(ANSWER_TO_CONFIG[key]), value);
        }

        customAnswers[key] = answers[key];
        Ember.setProperties(_this9, {
          customAnswers: customAnswers
        });
      });
    },
    getEnalbedWorkloads: function getEnalbedWorkloads(answers) {
      var out = [];

      if (answers['pilot.enabled'] === 'true') {
        out.push('pilot');
      }

      if (answers['mixer.enabled'] === 'true') {
        out.push('mixer.telemetry');
      }

      if (answers['mixer.policy.enabled'] === 'true') {
        out.push('mixer.policy');
      }

      if (answers['gateways.enabled'] === 'true') {
        out.push('gateways.istio-ingressgateway');
      }

      if (answers['tracing.enabled'] === 'true') {
        out.push('tracing');
      }

      return out;
    },
    doneSaving: function doneSaving() {
      this.updateCpuMemoryPreRequest();
    },
    initMembers: function initMembers() {
      var _this10 = this;

      var _EmberGet = Ember.get(this, 'app'),
          _EmberGet$answers = _EmberGet.answers,
          answers = _EmberGet$answers === void 0 ? {} : _EmberGet$answers;

      var globalStore = this.globalStore;

      if (answers["".concat(MEMBERS, "[0].name")] === MEMBER_SYSYTEM && answers["".concat(MEMBERS, "[0].kind")] === 'Group') {
        Ember.set(this, 'allowSystemGroup', true);
      } else {
        Ember.set(this, 'allowSystemGroup', false);
        var users = globalStore.all('user');
        var keys = Object.keys(answers).filter(function () {
          var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return /^global.members\[\d\].name$/g.test(key);
        });
        var members = (keys || []).filter(function (key) {
          var kindKey = key.replace('.name', '.kind');
          var kind = answers[kindKey];
          return !(kind === MEMBER_GROUP && answers[key] === MEMBER_SYSYTEM);
        }).map(function (key) {
          var kindKey = key.replace('.name', '.kind');
          var kind = answers[kindKey];
          var id = answers[key];

          if (kind === MEMBER_USER) {
            var filtered = users.filter(function (u) {
              return (u.principalIds || []).includes("local://".concat(id));
            }).get('firstObject');

            if (filtered && filtered.principalIds) {
              var principalIds = filtered.principalIds || [];

              if (principalIds.length > 1) {
                id = principalIds.filter(function (f) {
                  return f !== "local://".concat(id);
                }).get('firstObject');
              } else {
                id = filtered.principalIds.get('firstObject');
              }
            }
          }

          return Ember.get(_this10, 'globalStore').createRecord({
            type: 'member',
            id: id
          });
        });
        var membersPromises = (members || []).map(function (m) {
          return globalStore.find('principal', m.id);
        });
        Ember.RSVP.allSettled(membersPromises).then(function (res) {
          if (_this10.isDestroyed || _this10.isDestroying) {
            return;
          }

          Ember.set(_this10, 'members', res.map(function (xhr) {
            if (xhr.state === 'fulfilled') {
              return xhr.value;
            }
          }));
        });
      }
    },
    enableMonitoring: function enableMonitoring() {
      var resource = Ember.get(this, 'cluster');
      var answers = {};
      answers['operator-init.enabled'] = 'true';
      answers['exporter-node.enabled'] = 'true';
      answers['exporter-node.ports.metrics.port'] = '9796';
      answers['exporter-kubelets.https'] = "".concat(!(Ember.get(this, 'scope.currentCluster.isGKE') || Ember.get(this, 'scope.currentCluster.isAKS')));
      answers['exporter-node.resources.limits.cpu'] = '200m';
      answers['exporter-node.resources.limits.memory'] = '200Mi';
      answers['operator.resources.limits.memory'] = '500Mi';
      answers['prometheus.retention'] = '12h';
      answers['grafana.persistence.enabled'] = 'false';
      answers['prometheus.persistence.enabled'] = 'false';
      answers['prometheus.persistence.storageClass'] = 'default';
      answers['grafana.persistence.storageClass'] = 'default';
      answers['grafana.persistence.size'] = '10Gi';
      answers['prometheus.persistence.size'] = '50Gi';
      answers['prometheus.resources.core.requests.cpu'] = '750m';
      answers['prometheus.resources.core.limits.cpu'] = '1000m';
      answers['prometheus.resources.core.requests.memory'] = '750Mi';
      answers['prometheus.resources.core.limits.memory'] = '1000Mi';
      answers['prometheus.persistent.useReleaseName'] = 'true';
      return resource.doAction('enableMonitoring', {
        answers: answers
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-catalog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "17yc1toI",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"h1\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"clusterIstioPage.header\"],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"canEnable\"]]],null,{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"ready\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[27,\"t\",[\"clusterIstioPage.enabled\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"enabled\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[27,\"t\",[\"clusterIstioPage.notReady\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[27,\"t\",[\"clusterIstioPage.disabled\"],null]]]],false],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"ready\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[1,[27,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.kiali.label\",[23,[\"kialiUrl\"]],\"kiali\"]]],false],[0,\"\\n      \"],[1,[27,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.jaeger.label\",[23,[\"jaegerUrl\"]],\"jaeger\"]]],false],[0,\"\\n      \"],[1,[27,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.grafana.label\",[23,[\"grafana\",\"istioUrl\"]],\"grafana\"]]],false],[0,\"\\n      \"],[1,[27,\"istio-component-status\",null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.prometheus.label\",[23,[\"prometheusUrl\"]],\"prometheus-icon\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row mt-10 mb-10 center\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"clusterIstioPage.version\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"latestVersion\"]],[23,[\"templateVersion\"]],[27,\"not-eq\",[[23,[\"latestVersion\"]],[23,[\"templateVersion\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"bg-warning pt-0 pb-0 pl-5 pr-5\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"monitoringPage.upgradeAvailable\"],[[\"version\"],[[23,[\"latestVersion\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[9],[0,\"\\n        \"],[1,[27,\"new-select\",null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[23,[\"istioVersions\"]],[23,[\"templateVersion\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-7\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n         \\n      \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"enableClusterMonitoring\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"checked\",\"id\",\"disabled\"],[\"checkbox\",[23,[\"enableMonitoring\"]],\"input-enable-monitoring\",true]]],false],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.enableMonitoring.label\"],null],false],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"baseClass\"],[\"tooltip-basic\",[27,\"t\",[\"clusterIstioPage.goToMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[23,[\"cluster\",\"id\"]],true]]],\"tooltip-static\",\"tooltip-base\",\"text-left\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"icon icon-help icon-blue\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.members.title\"],null],[27,\"t\",[\"clusterIstioPage.members.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],true]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"allowSystemGroup\"]],true]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"clusterIstioPage.allowSystemGroup.true\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n      \"],[7,\"label\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"allowSystemGroup\"]],false]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"clusterIstioPage.allowSystemGroup.false\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"allowSystemGroup\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"form-members-catalog-access\",null,[[\"readOnly\",\"members\",\"addAuthorizedPrincipal\",\"removeMember\",\"searchOnlyGroups\",\"includeLocal\"],[false,[23,[\"members\"]],[27,\"action\",[[22,0,[]],\"addAuthorizedPrincipal\"],null],[27,\"action\",[[22,0,[]],\"removeMember\"],null],true,false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.pilot.title\"],null],[27,\"t\",[\"clusterIstioPage.pilot.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"    \"],[1,[27,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Pilot\",[23,[\"config\",\"pilotRequestCpu\"]],[23,[\"config\",\"pilotRequestMemory\"]],[23,[\"config\",\"pilotLimitCpu\"]],[23,[\"config\",\"pilotLimitMemory\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-trace-sampling\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.config.traceSampling.label\"],null],false],[0,\"\\n          \"],[1,[21,\"field-required\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n          \"],[1,[27,\"input-float\",null,[[\"min\",\"max\",\"id\",\"value\",\"classNames\",\"placeholder\",\"precision\"],[\"0\",\"100\",\"input-trace-sampling\",[23,[\"config\",\"traceSampling\"]],\"form-control\",[27,\"t\",[\"clusterIstioPage.config.traceSampling.placeholder\"],null],2]]],false],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"units.percent\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Pilot\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"pilotNodeSelectors\"]]],null]],null],[23,[\"pilotNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n        \"],[1,[27,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[23,[\"pilotTolerations\"]],[27,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Pilot\"]]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.mixer.title\"],null],[27,\"t\",[\"clusterIstioPage.mixer.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"    \"],[1,[27,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerTelemetry\",[23,[\"config\",\"mixerTelemetryRequestCpu\"]],[23,[\"config\",\"mixerTelemetryRequestMemory\"]],[23,[\"config\",\"mixerTelemetryLimitCpu\"]],[23,[\"config\",\"mixerTelemetryLimitMemory\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-mixer-policy-enabled\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.config.mixerPolicyEnabled.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"schema/input-boolean\",null,[[\"id\",\"value\",\"classNames\"],[\"input-mixer-policy-enabled\",[23,[\"config\",\"mixerPolicyEnabled\"]],\"form-control\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"config\",\"mixerPolicyEnabled\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerPolicy\",[23,[\"config\",\"mixerPolicyRequestCpu\"]],[23,[\"config\",\"mixerPolicyRequestMemory\"]],[23,[\"config\",\"mixerPolicyLimitCpu\"]],[23,[\"config\",\"mixerPolicyLimitMemory\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Mixer\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"mixerNodeSelectors\"]]],null]],null],[23,[\"mixerNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n        \"],[1,[27,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[23,[\"mixerTolerations\"]],[27,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Mixer\"]]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.tracing.title\"],null],[27,\"t\",[\"clusterIstioPage.tracing.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.config.tracingEnabled.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"schema/input-boolean\",null,[[\"value\",\"classNames\"],[[23,[\"config\",\"tracingEnabled\"]],\"form-control\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"config\",\"tracingEnabled\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Tracing\",[23,[\"config\",\"tracingRequestCpu\"]],[23,[\"config\",\"tracingRequestMemory\"]],[23,[\"config\",\"tracingLimitCpu\"]],[23,[\"config\",\"tracingLimitMemory\"]]]]],false],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Tracing\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"tracingNodeSelectors\"]]],null]],null],[23,[\"tracingNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[1,[27,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[23,[\"tracingTolerations\"]],[27,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Tracing\"]]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.ingress.title\"],null],[27,\"t\",[\"clusterIstioPage.ingress.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"clusterIstioPage.config.gatewayEnabled.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"schema/input-boolean\",null,[[\"value\",\"classNames\"],[[23,[\"config\",\"gatewayEnabled\"]],\"form-control\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-gateway-type-select\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterIstioPage.config.gatewayType.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"new-select\",null,[[\"id\",\"class\",\"content\",\"value\"],[\"input-gateway-type-select\",\"form-control\",[23,[\"gatewayTypeContent\"]],[23,[\"config\",\"gatewayType\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"config\",\"gatewayType\"]],\"NodePort\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-http2-port\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"clusterIstioPage.config.http2Port.label\"],null],false],[0,\"\\n              \"],[1,[21,\"field-required\"],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-http2-port\",[23,[\"config\",\"http2Port\"]],\"form-control\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-https-port\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"clusterIstioPage.config.httpsPort.label\"],null],false],[0,\"\\n              \"],[1,[21,\"field-required\"],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-https-port\",[23,[\"config\",\"httpsPort\"]],\"form-control\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"config\",\"gatewayType\"]],\"LoadBalancer\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[11,\"for\",\"input-load-balancer-ip\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"clusterIstioPage.config.loadBalancerIP.label\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[1,[27,\"schema/input-string\",null,[[\"value\",\"id\",\"placeholder\"],[[23,[\"config\",\"loadBalancerIP\"]],\"input-load-balancer-ip\",[27,\"t\",[\"clusterIstioPage.config.loadBalancerIP.placeholder\"],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n            \"],[1,[27,\"form-value-array\",null,[[\"initialValues\",\"addActionLabel\",\"valueLabel\",\"valuePlaceholder\",\"changed\",\"addButtonClass\"],[[23,[\"loadBalancerSourceRanges\"]],\"editDns.loadBalancerSourceRanges.addActionLabel\",\"editDns.loadBalancerSourceRanges.value\",\"editDns.loadBalancerSourceRanges.placeholder\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"loadBalancerSourceRanges\"]]],null]],null],\"btn bg-link icon-btn\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n      \"],[1,[27,\"form-reservation\",null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"IngressGateway\",[23,[\"config\",\"gatewayRequestCpu\"]],[23,[\"config\",\"gatewayRequestMemory\"]],[23,[\"config\",\"gatewayLimitCpu\"]],[23,[\"config\",\"gatewayLimitMemory\"]]]]],false],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Gateway\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"form-key-value\",null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"gatewayNodeSelectors\"]]],null]],null],[23,[\"gatewayNodeSelector\"]],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n          \"],[1,[27,\"scheduling-toleration\",null,[[\"editing\",\"tolerate\",\"title\"],[true,[23,[\"gatewayTolerations\"]],[27,\"t\",[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[[27,\"parse-camelcase\",[\"IngressGateway\"],null]]]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"clusterIstioPage.customAnswers.title\"],null],[27,\"t\",[\"clusterIstioPage.customAnswers.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[27,\"form-key-value\",null,[[\"initialMap\",\"changed\",\"allowEmptyValue\",\"addInitialEmptyRow\",\"editing\",\"header\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[[23,[\"customAnswers\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"customAnswers\"]]],null]],null],true,true,true,[27,\"t\",[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"newContainer.environment.valuePlaceholder\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[4,\"if\",[[27,\"or\",[[23,[\"pilotWarning\"]],[23,[\"mixerTelemetryWarning\"]],[23,[\"tracingWarning\"]],[23,[\"gatewayWarning\"]],[27,\"and\",[[23,[\"mixerPolicyWarning\"]],[23,[\"config\",\"mixerPolicyEnabled\"]]],null],[23,[\"mixerWarning\"]],[23,[\"istioWarning\"]]],null]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-warning\"]],{\"statements\":[[4,\"if\",[[23,[\"istioWarning\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[1,[21,\"istioWarning\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[1,[21,\"pilotWarning\"],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[1,[21,\"mixerWarning\"],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[1,[21,\"mixerTelemetryWarning\"],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"config\",\"tracingEnabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[1,[21,\"tracingWarning\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"config\",\"gatewayEnabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[1,[21,\"gatewayWarning\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"config\",\"mixerPolicyEnabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[1,[21,\"mixerPolicyWarning\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[27,\"not\",[[23,[\"saveDisabled\"]]],null],[27,\"not\",[[23,[\"enabled\"]]],null],[23,[\"enableClusterMonitoring\"]],[27,\"not\",[[23,[\"scope\",\"currentCluster\",\"isMonitoringReady\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@icon\",\"@message\"],[\"bg-warning\",\"icon-alert\",[27,\"t\",[\"clusterIstioPage.monitoringNotDeployed\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"save-cancel\",null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"saved\",\"cancelDisabled\"],[[23,[\"saveDisabled\"]],[23,[\"enabled\"]],\"clusterIstioPage.enableActionLabel\",[27,\"action\",[[22,0,[]],\"save\"],null],[23,[\"saved\"]],true]],{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"enabled\"]],[23,[\"canEnable\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"button\"],[11,\"class\",\"btn bg-error\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"clusterIstioPage.disable\"],null],false],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"disable\"]],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"enableClusterMonitoring\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"canReuse\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-warning\",[27,\"t\",[\"clusterIstioPage.upgradeMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[23,[\"cluster\",\"id\"]],true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[23,[\"cluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[27,\"t\",[\"windowsCluster.istio\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-catalog/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/component", ["exports", "istio/components/istio-component-status/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    classNames: 'col span-3 mt-0 mb-0',
    label: null,
    logo: null,
    url: null
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CWePWc2B",
    "block": "{\"symbols\":[],\"statements\":[[4,\"banner-message\",null,[[\"color\",\"showIcon\"],[\"bg-success mt-0 mb-0\",false]],{\"statements\":[[0,\"  \"],[7,\"p\"],[11,\"class\",\"text-left\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[[23,[\"label\"]]],null],false],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"pull-right\"],[11,\"role\",\"button\"],[9],[0,\"\\n      \"],[7,\"a\"],[12,\"href\",[21,\"url\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[21,\"logo\"]],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-component-status/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/component", ["exports", "istio/components/istio-host-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    hostRequired: true,
    namespaceId: null,
    value: null,
    showLabel: true,
    hosts: null,
    init: function init() {
      this._super.apply(this, arguments);

      Ember.set(this, 'hosts', Ember.get(this, 'store').all('service'));
    },
    hostChoices: Ember.computed('hosts.@each.name', 'namespaceId', function () {
      return Ember.get(this, 'hosts').filter(function (host) {
        return Ember.get(host, 'selector.app');
      }).filterBy('namespaceId', Ember.get(this, 'namespaceId')).map(function (v) {
        var name = Ember.get(v, 'name');
        return {
          label: name,
          value: name
        };
      }).sortBy('label');
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LMCDwabA",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"showLabel\"]]],null,{\"statements\":[[0,\"  \"],[7,\"label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-form-host-select\"],null]]]],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n    \"],[1,[27,\"t\",[\"generic.host\"],null],false],[4,\"if\",[[23,[\"hostRequired\"]]],null,{\"statements\":[[1,[21,\"field-required\"],false]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[1,[27,\"searchable-select\",null,[[\"id\",\"value\",\"content\",\"inputClass\",\"allowCustom\",\"placeholder\",\"prompt\"],[[27,\"concat\",[[23,[\"elementId\"]],\"-form-host-select\"],null],[23,[\"value\"]],[23,[\"hostChoices\"]],[23,[\"inputClass\"]],true,[27,\"t\",[\"generic.istioHostPlaceholder\"],null],[27,\"t\",[\"formIstioHost.prompt\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-host-select/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/component", ["exports", "istio/components/istio-nav/template", "ui/utils/constants"], function (_exports, _template, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    grafana: Ember.inject.service(),
    features: Ember.inject.service(),
    layout: _template.default,
    showVirtualServiceUI: false,
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    init: function init() {
      this._super.apply(this, arguments);

      Ember.set(this, 'showVirtualServiceUI', Ember.get(this, 'features').isFeatureEnabled(_constants.default.FEATURES.ISTIO_VIRTUAL_SERVICE_UI));
    },
    kialiUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali-http:80/proxy/");
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search");
    }),
    grafanaUrl: Ember.computed('cluster.id', 'project.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return Ember.get(this, 'grafana.istioUrl');
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return Ember.get(this, 'grafana.istioUrl');
        } else {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus-").concat((Ember.get(this, 'project.id') || '').split(':').get('lastObject'), "/services/http:access-grafana:80/proxy/");
        }
      }
    }),
    prometheusUrl: Ember.computed('cluster.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/");
        } else {
          return "/k8s/clusters/".concat(Ember.get(this, 'cluster.id'), "/api/v1/namespaces/cattle-prometheus-").concat((Ember.get(this, 'project.id') || '').split(':').get('lastObject'), "/services/http:access-prometheus:80/proxy/");
        }
      }
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "metCgwBl",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header has-tabs clearfix p-0\"],[9],[0,\"\\n  \"],[7,\"ul\"],[11,\"class\",\"tab-nav\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"\\n      \"],[4,\"link-to\",[\"project-istio.metrics\"],null,{\"statements\":[[1,[27,\"t\",[\"istio.nav.metrics\"],null],false]],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"iconDisabled\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[9],[0,\"\\n        \"],[4,\"link-to\",[\"project-istio.graph\"],null,{\"statements\":[[1,[27,\"t\",[\"istio.nav.graph\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"showVirtualServiceUI\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[9],[0,\"\\n      \"],[4,\"link-to\",[\"project-istio.destination-rules\"],null,{\"statements\":[[1,[27,\"t\",[\"istio.nav.destinationRules.label\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n      \"],[4,\"link-to\",[\"project-istio.virtual-services\"],null,{\"statements\":[[1,[27,\"t\",[\"istio.nav.virtualServices.label\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inline-block vertical-bottom mr-20\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"iconDisabled\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"class\",\"inline-block\"],[12,\"href\",[21,\"kialiUrl\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"kiali\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"a\"],[11,\"class\",\"inline-block\"],[12,\"href\",[21,\"jaegerUrl\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"jaeger\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[23,[\"grafana\",\"istioUrl\"]],[23,[\"project\",\"enableProjectMonitoring\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"class\",\"inline-block\"],[12,\"href\",[21,\"grafanaUrl\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"grafana\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"a\"],[11,\"class\",\"inline-block\"],[12,\"href\",[21,\"prometheusUrl\"]],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"prometheus-icon\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-nav/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/component", ["exports", "istio/components/istio-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "eiSYPgEA",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n  \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n    \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[23,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"state\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"name\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"project-istio.rule-detail\",[23,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"text-small text-muted m-0\"],[9],[0,\"\\n        \"],[1,[27,\"linkify\",[[23,[\"model\",\"description\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"template\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[1,[23,[\"model\",\"catalogTemplate\",\"name\"]],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-small text-muted\"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"\\n        \"],[1,[23,[\"model\",\"externalIdInfo\",\"version\"]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"host\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[1,[23,[\"model\",\"answers\",\"host\"]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"created\"]]]]],[11,\"class\",\"text-right pr-20\"],[9],[0,\"\\n    \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"displayAnswerStrings\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"tr\"],[11,\"class\",\"sub-row\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"colspan\",\"2\"],[9],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"colspan\",\"5\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"displayAnswerStrings\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"tag-xs bg-info\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"error-sub-row\",null,[[\"fullColspan\",\"model\"],[\"7\",[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/component", ["exports", "istio/components/istio-rules-table/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'created',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      sort: ['displayName', 'id'],
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'template',
      sort: ['catalogTemplate.name', 'id'],
      searchField: 'catalogTemplate.name',
      translationKey: 'istio.table.template'
    }, {
      name: 'host',
      sort: ['answers.host', 'id'],
      searchField: 'answers.host',
      translationKey: 'istio.table.host'
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    apps: null,
    rows: Ember.computed('apps.@each.isIstio', function () {
      return (Ember.get(this, 'apps') || []).filterBy('isIstio', true);
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HCPigF9v",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[7,\"section\"],[11,\"class\",\"pl-0 pr-0\"],[9],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[23,[\"rows\"]],[23,[\"searchText\"]],[23,[\"sortBy\"]],true,[23,[\"descending\"]],\"namespaceId\",\"namespace\",\"pagination.istioRule\",[23,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"istio-rule-row\",null,[[\"model\",\"dt\"],[[22,3,[]],[22,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[22,3,[\"ref\"]],[22,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"rulesPage.noMatch\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"rulesPage.noData\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-rules-table/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/component", ["exports", "json2yaml", "shared/utils/fetch-yaml"], function (_exports, _json2yaml, _fetchYaml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var VIRTUAL_SERVICES = 'virtualservices';
  var SERVICE_ENTRIES = 'serviceentries';
  var DESTINATION_RULES = 'destinationrules';
  var GATEWAYS = 'gateways';
  var ENVOY_FILTERS = 'envoyfilters';
  var APP_ID = 'io.cattle.field/appId';
  var OPTIONS = [VIRTUAL_SERVICES, DESTINATION_RULES, GATEWAYS, SERVICE_ENTRIES, ENVOY_FILTERS];

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    options: OPTIONS,
    selectedType: VIRTUAL_SERVICES,
    rule: null,
    loading: false,
    actions: {
      select: function select(type) {
        Ember.set(this, 'selectedType', type);
      }
    },
    selectedTypeDidChange: Ember.on('init', Ember.observer('selectedType', function () {
      this.loadIstioResources(Ember.get(this, 'selectedType'));
    })),
    loadIstioResources: function loadIstioResources(type) {
      var _this = this;

      var appId = Ember.get(this, 'rule.name');
      var namespace = Ember.get(this, 'rule.namespace.id');
      var yamlLink = "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/apis/networking.istio.io/v1alpha3/namespaces/").concat(namespace, "/").concat(type);
      Ember.set(this, 'loading', true);
      return (0, _fetchYaml.default)(yamlLink, false).then(function (res) {
        var out = [];
        var data = JSON.parse(res) || {};
        (Ember.get(data, 'items') || []).forEach(function (item) {
          var labels = Ember.get(item, 'metadata.labels') || {};

          if (labels[APP_ID] === appId) {
            out.push(item);
          }
        });
        var yaml = out.length > 0 ? _json2yaml.default.stringify(out) : '';
        Ember.set(_this, 'yaml', yaml);
      }).catch(function (error) {
        Ember.get(_this, 'growl').fromError(Ember.get(error, 'message') || Ember.get(error, 'xhr.responseJSON.message'));
      }).finally(function () {
        Ember.set(_this, 'loading', false);
      });
    }
  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mlBLhQif",
    "block": "{\"symbols\":[\"option\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header has-tabs clearfix pb-0\"],[9],[0,\"\\n  \"],[7,\"ul\"],[11,\"class\",\"tab-nav\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"options\"]]],null,{\"statements\":[[0,\"      \"],[7,\"button\"],[12,\"class\",[28,[\"no-outline bg-transparent \",[27,\"if\",[[27,\"eq\",[[22,1,[]],[23,[\"selectedType\"]]],null],\"tab-selected\"],null]]]],[9],[0,\"\\n        \"],[7,\"span\"],[12,\"class\",[28,[[27,\"if\",[[27,\"not-eq\",[[22,1,[]],[23,[\"selectedType\"]]],null],\"text-gray\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[[27,\"concat\",[\"ruleDetailPage.rules.\",[22,1,[]]],null]],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[]]]],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[23,[\"yaml\"]],[23,[\"loading\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"input-yaml\",null,[[\"canChangeName\",\"value\",\"loading\",\"autoResize\",\"readOnly\",\"canUpload\",\"showUpload\",\"showDownload\",\"filename\"],[false,[23,[\"yaml\"]],[23,[\"loading\"]],false,true,false,false,false,[23,[\"filename\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"text-center text-muted\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"modalYaml.noData\"],[[\"name\"],[[23,[\"selectedType\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/istio-yaml/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("ivy-codemirror/components/ivy-codemirror", "istio/components/ivy-codemirror");
define.alias("shared/components/labels-section/component", "istio/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "istio/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "istio/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "istio/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "istio/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "istio/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "istio/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "istio/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "istio/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "istio/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "istio/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "istio/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "istio/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "istio/components/liquid-versions");
define("istio/components/load-balancer/component", ["exports", "istio/components/load-balancer/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ROUND_ROBIN = 'ROUND_ROBIN';
  var LEAST_CONN = 'LEAST_CONN';
  var RANDOM = 'RANDOM';
  var PASSTHROUGH = 'PASSTHROUGH';
  var SOURCE_IP = 'sourceIp';
  var HEADER = 'header';
  var COOKIE = 'cookie';
  var RING_SIZE = 1024;
  var LB_MODES = [{
    label: 'cruDestinationRule.loadBalancer.simple.roundRobin.label',
    value: ROUND_ROBIN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.leastConn.label',
    value: LEAST_CONN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.random.label',
    value: RANDOM
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.passthrough.label',
    value: PASSTHROUGH
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    isSimpleMode: true,
    lbModes: LB_MODES,
    consistentHashMode: SOURCE_IP,
    model: Ember.computed.alias('trafficPolicy.loadBalancer'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initLB();
    },
    isSimpleModeDidChange: Ember.observer('isSimpleMode', function () {
      var isSimpleMode = Ember.get(this, 'isSimpleMode');

      if (isSimpleMode) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      } else {
        Ember.setProperties(this, {
          'consistentHashMode': SOURCE_IP,
          'trafficPolicy.loadBalancer': {
            consistentHash: {
              useSourceIp: true,
              minimumRingSize: RING_SIZE
            }
          }
        });
      }
    }),
    consistentHashModeDidChange: Ember.observer('consistentHashMode', function () {
      var consistentHashMode = Ember.get(this, 'consistentHashMode');

      if (consistentHashMode === SOURCE_IP) {
        Ember.set(this, 'model', {
          consistentHash: {
            useSourceIp: true,
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === COOKIE) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpCookie: {
              ttl: '0s',
              name: ''
            },
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === HEADER) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpHeaderName: '',
            minimumRingSize: RING_SIZE
          }
        });
      }
    }),
    initLB: function initLB() {
      if (!Ember.get(this, 'trafficPolicy.loadBalancer')) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      }

      if (Ember.get(this, 'model.consistentHash.useSourceIp')) {
        Ember.setProperties(this, {
          consistentHashMode: SOURCE_IP,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpHeaderName')) {
        Ember.setProperties(this, {
          consistentHashMode: HEADER,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpCookie.name')) {
        Ember.setProperties(this, {
          consistentHashMode: COOKIE,
          isSimpleMode: false
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/load-balancer/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/KjpOf3L",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"radio mb-0\"],[9],[0,\"\\n  \"],[7,\"label\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"isSimpleMode\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"or\",[[23,[\"editing\"]],[27,\"eq\",[[23,[\"isSimpleMode\"]],true],null]],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.simple.label\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"isSimpleMode\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"mb-10 mt-10\"],[9],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"simple\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"new-select\",null,[[\"classNames\",\"content\",\"value\",\"localizedLabel\"],[\"form-control\",[23,[\"lbModes\"]],[23,[\"model\",\"simple\"]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"radio mb-0\"],[9],[0,\"\\n  \"],[7,\"label\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"isSimpleMode\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"or\",[[23,[\"editing\"]],[27,\"eq\",[[23,[\"isSimpleMode\"]],false],null]],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.label\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"isSimpleMode\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row box\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"consistentHashMode\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"consistentHashMode\"]],\"header\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.header.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"consistentHashMode\"]],\"cookie\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.cookie.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"consistentHashMode\"]],\"sourceIp\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.mode.sourceIp.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"consistentHashMode\"]],\"header\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpHeaderName\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"consistentHash\",\"httpHeaderName\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"consistentHash\",\"httpHeaderName\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpHeaderName\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"consistentHashMode\"]],\"cookie\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-name\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"model\",\"consistentHash\",\"httpCookie\",\"name\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"consistentHash\",\"httpCookie\",\"name\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-name\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label pt-20\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-path\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"consistentHash\",\"httpCookie\",\"path\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"consistentHash\",\"httpCookie\",\"path\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-path\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label pt-20\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-ttl\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"            \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"consistentHash\",\"httpCookie\",\"ttl\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"consistentHash\",\"httpCookie\",\"ttl\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-httpCookie-ttl\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-minimumRingSize\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"consistentHash\",\"minimumRingSize\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"consistentHash\",\"minimumRingSize\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-minimumRingSize\"],null],[27,\"t\",[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/load-balancer/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/marked-down/component", "istio/components/marked-down/component");
define("istio/components/match-type-select/component", ["exports", "istio/components/match-type-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AUTHORITY = 'authority';
  var METHOD = 'method';
  var URI = 'uri';
  var SCHEME = 'scheme';
  var HEADERS = 'headers';
  var TYPES = [{
    label: 'cruVirtualService.http.routes.matches.type.uri',
    value: URI
  }, {
    label: 'cruVirtualService.http.routes.matches.type.scheme',
    value: SCHEME
  }, {
    label: 'cruVirtualService.http.routes.matches.type.method',
    value: METHOD
  }, {
    label: 'cruVirtualService.http.routes.matches.type.authority',
    value: AUTHORITY
  }, {
    label: 'cruVirtualService.http.routes.matches.type.headers',
    value: HEADERS
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    match: null,
    matcheTypes: TYPES,
    init: function init() {
      this._super.apply(this, arguments);

      this.initMatcheTypes();
    },
    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      var _this = this;

      Ember.set(this, 'matcheTypes', TYPES.filter(function (choice) {
        return _this.notExist(choice);
      }));
    }),
    notExist: function notExist(choice) {
      var _this2 = this;

      return !(Ember.get(this, 'matches') || []).find(function (m, index) {
        return Ember.get(m, 'matchType') !== HEADERS && Ember.get(m, 'matchType') === Ember.get(choice, 'value') && index !== Ember.get(_this2, 'index');
      });
    },
    initMatcheTypes: function initMatcheTypes() {
      var _this3 = this;

      Ember.set(this, 'matcheTypes', TYPES.filter(function (choice) {
        return _this3.notExist(choice);
      }));
    }
  });

  _exports.default = _default;
});
define("istio/components/match-type-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bAIy9MC5",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"new-select\",null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[23,[\"matcheTypes\"]],true,[23,[\"match\",\"matchType\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/match-type-select/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/metrics-action/component", "istio/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "istio/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "istio/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "istio/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "istio/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "istio/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "istio/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "istio/components/modal-delete-eks-cluster/component");
define("istio/components/modal-delete-istio/component", ["exports", "ui/mixins/modal-base", "istio/components/modal-delete-istio/template"], function (_exports, _modalBase, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    settings: Ember.inject.service(),
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal'],
    onlyIstio: true,
    istioApp: Ember.computed.alias('modalService.modalOpts.istioApp'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    didRender: function didRender() {
      var _this = this;

      setTimeout(function () {
        try {
          _this.$('BUTTON')[0].focus();
        } catch (e) {}
      }, 500);
    },
    actions: {
      confirm: function confirm() {
        var _this2 = this;

        var istioApp = this.istioApp,
            onlyIstio = this.onlyIstio,
            cluster = this.cluster;
        Ember.set(this, 'saving', true);
        var disableIstio = istioApp.delete();
        var promises = [disableIstio];

        if (!onlyIstio) {
          promises.pushObject(cluster.doAction('disableMonitoring'));
        }

        Ember.RSVP.all(promises).then(function () {
          setTimeout(function () {
            window.location.href = window.location.href;
          }, 1000);
        }).catch(function (err) {
          Ember.get(_this2, 'growl').fromError(Ember.get(err, 'body.message'));
        }).finally(function () {
          Ember.set(_this2, 'saving', false);

          _this2.send('cancel');
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/modal-delete-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gF2IviER",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"modalDeleteIstio.title\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"ul\"],[11,\"class\",\"list-unstyled pl-30\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"onlyIstio\"]],true]]],false],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"modalDeleteIstio.onlyIstio.true\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"onlyIstio\"]],false]]],false],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"modalDeleteIstio.onlyIstio.false\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"save-cancel\",null,[[\"editing\",\"saving\",\"editLabel\",\"savingLabel\",\"save\",\"cancel\",\"saveColor\",\"savedColor\",\"savingColor\"],[true,[23,[\"saving\"]],\"modalDeleteIstio.disable\",\"modalDeleteIstio.disabling\",[27,\"action\",[[22,0,[]],\"confirm\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null],\"bg-error\",\"bg-error\",\"bg-error\"]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/modal-delete-istio/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/modal-edit-catalog/component", "istio/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "istio/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "istio/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "istio/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "istio/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "istio/components/modal-move-namespace/component");
define.alias("shared/components/modal-root/component", "istio/components/modal-root/component");
define.alias("shared/components/modal-shell/component", "istio/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "istio/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "istio/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "istio/components/namespace-group/component");
define.alias("shared/components/new-select/component", "istio/components/new-select/component");
define.alias("shared/components/node-ip/component", "istio/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "istio/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "istio/components/node-taints/component");
define("istio/components/outlier-detection/component", ["exports", "istio/components/outlier-detection/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.outlierDetection'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initOutlierDetection();
    },
    initOutlierDetection: function initOutlierDetection() {
      if (!Ember.get(this, 'trafficPolicy.outlierDetection') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.outlierDetection', {
          baseEjectionTime: '30s',
          consecutiveErrors: 5,
          interval: '10s',
          maxEjectionPercent: 10
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/outlier-detection/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ShiiiDgT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-baseEjectionTime\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"baseEjectionTime\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"baseEjectionTime\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-baseEjectionTime\"],null],[27,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.baseEjectionTime.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-consecutiveErrors\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"consecutiveErrors\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input-integer\",null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[23,[\"model\",\"consecutiveErrors\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-consecutiveErrors\"],null],[27,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.consecutiveErrors.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-interval\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.interval.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"interval\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"interval\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-interval\"],null],[27,\"t\",[\"cruDestinationRule.outlierDetection.interval.placeholder\"],null]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.interval.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxEjectionPercent\"],null]]]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"maxEjectionPercent\"]]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n        \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"value\",\"id\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[23,[\"model\",\"maxEjectionPercent\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-maxEjectionPercent\"],null],[27,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.placeholder\"],null]]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n          %\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"help-block\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.outlierDetection.maxEjectionPercent.help\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/outlier-detection/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "istio/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "istio/components/page-numbers");
define.alias("shared/components/page-numbers/component", "istio/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "istio/components/percent-gauge/component");
define("istio/components/port-selector/component", ["exports", "istio/components/port-selector/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    model: null,
    init: function init() {
      this._super.apply(this, arguments);

      this.initPort();
    },
    portNumberOrNameDidChange: Ember.observer('portNumberOrName', function () {
      var port = Ember.get(this, 'portNumberOrName');
      var model = Ember.get(this, 'model');

      if (port && (0, _util.isNumeric)(port)) {
        Ember.set(model, 'port', {
          number: parseInt(port, 10)
        });
      } else if (port) {
        Ember.set(model, 'port', {
          name: port
        });
      } else {
        delete model['port'];
      }
    }),
    initPort: function initPort() {
      var port = Ember.get(this, 'model.port');

      if (port) {
        Ember.set(this, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/port-selector/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5It+pAvS",
    "block": "{\"symbols\":[],\"statements\":[[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-port\"],null]]]],[9],[0,\"\\n  \"],[1,[27,\"t\",[\"cruDestinationRule.port.label\"],null],false],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"portNumberOrName\"]]]],{\"statements\":[[0,\"  \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-mirror-port\"],null],[23,[\"portNumberOrName\"]],\"form-control\",[27,\"t\",[\"cruDestinationRule.port.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/port-selector/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/pretty-json/component", "istio/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "istio/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "istio/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "istio/components/project-member-row/component");
define("istio/components/project-traffic-metrics/component", ["exports", "shared/mixins/metrics", "istio/components/project-traffic-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    scope: Ember.inject.service(),
    layout: _template.default,
    filters: {
      resourceType: 'istioproject'
    },
    projectScope: true,
    istio: true,
    projectDidChange: Ember.observer('scope.currentProject.id', function () {
      Ember.setProperties(this, {
        'state.noGraphs': true,
        graphs: [],
        single: []
      });
      this.send('query', false);
    })
  });

  _exports.default = _default;
});
define("istio/components/project-traffic-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "B/AxrHtS",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"metrics-action\",null,[[\"queryAction\",\"allowDetail\",\"state\",\"istio\"],[[27,\"action\",[[22,0,[]],\"query\"],null],false,[23,[\"state\"]],true]]],false],[0,\"\\n  \"],[1,[27,\"metrics-graph\",null,[[\"graphs\",\"loading\",\"noGraphs\"],[[23,[\"graphs\"]],[23,[\"state\",\"loading\"]],[23,[\"state\",\"noGraphs\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/project-traffic-metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/radio-button/component", "istio/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "istio/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "istio/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "istio/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "istio/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "istio/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "istio/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "istio/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "istio/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "istio/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "istio/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "istio/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "istio/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "istio/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "istio/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "istio/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "istio/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "istio/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "istio/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "istio/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "istio/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "istio/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "istio/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "istio/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "istio/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "istio/components/search-text/component");
define.alias("shared/components/searchable-select/component", "istio/components/searchable-select/component");
define.alias("shared/components/settings/danger-zone/component", "istio/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "istio/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "istio/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "istio/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "istio/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "istio/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "istio/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "istio/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "istio/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "istio/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "istio/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "istio/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "istio/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "istio/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "istio/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "istio/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "istio/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "istio/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "istio/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "istio/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "istio/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "istio/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "istio/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "istio/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "istio/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "istio/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "istio/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "istio/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "istio/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "istio/components/top-errors/component");
define("istio/components/traffic-monitoring/component", ["exports", "istio/components/traffic-monitoring/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    classNames: ['istio-graph'],
    layout: _template.default,
    namespaces: null,
    loading: false,
    intervalAnchor: null,
    willDestroyElement: function willDestroyElement() {
      this.clearInterval();

      this._super();
    },
    actions: {
      refreshGraph: function refreshGraph() {
        document.getElementById('kiali-iframe').contentWindow.location.href = this.getKialiUrl();
        this.namespaceDidChange();
      }
    },
    namespaceDidChange: Ember.observer('namespace', function () {
      var _this = this;

      this.clearInterval();
      Ember.set(this, 'loading', true);
      Ember.set(this, 'url', this.getKialiUrl());
      var intervalAnchor = setInterval(function () {
        if (Ember.$('#kiali-iframe').contents().find('#root .login-pf').length === 0 && Ember.$('#kiali-iframe').contents().find('#root .pf-c-page').length === 1) {
          Ember.set(_this, 'loading', false);

          _this.clearInterval();
        }
      }, 800);
      Ember.set(this, 'intervalAnchor', intervalAnchor);
    }),
    updateKialiGraph: Ember.on('init', Ember.observer('scope.currentProject.id', 'namespaces', function () {
      if (!Ember.get(this, 'namespace') || !(Ember.get(this, 'namespaces') || []).findBy('id', Ember.get(this, 'namespace'))) {
        Ember.set(this, 'namespace', Ember.get(this, 'namespaces.firstObject.id'));
      }
    })),
    getKialiUrl: function getKialiUrl() {
      return "/k8s/clusters/".concat(Ember.get(this, 'scope.currentCluster.id'), "/api/v1/namespaces/istio-system/services/http:kiali-http:80/proxy/console/graph/namespaces/?edges=noEdgeLabels&graphType=versionedApp&namespaces=").concat(Ember.get(this, 'namespace'), "&unusedNodes=true&injectServiceNodes=true&layout=dagre");
    },
    clearInterval: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      var intervalAnchor = Ember.get(this, 'intervalAnchor');

      if (intervalAnchor) {
        clearInterval(intervalAnchor);
        Ember.set(this, 'intervalAnchor', intervalAnchor);
      }
    })
  });

  _exports.default = _default;
});
define("istio/components/traffic-monitoring/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8+BEkBM2",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"namespaces\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row text-left mb-5\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"pull-left pl-20 pt-0 mr-10\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"inline-block\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"generic.namespace\"],null],false],[0,\":\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"new-select\",null,[[\"content\",\"classNames\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[[23,[\"namespaces\"]],\"namespace-select text-black\",[23,[\"namespace\"]],\"id\",\"displayName\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn btn-sm bg-default\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"istio.refreshGraph\"],null],false],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"refreshGraph\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row mt-20\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-spinner icon-spin icon-3x\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[11,\"id\",\"kiali-div\"],[12,\"class\",[28,[[27,\"if\",[[23,[\"loading\"]],\"loading\"],null]]]],[9],[0,\"\\n    \"],[7,\"iframe\"],[12,\"src\",[21,\"url\"]],[11,\"id\",\"kiali-iframe\"],[11,\"scrolling\",\"no\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"powered-by-kiali\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"istio.kiali\"],null],false],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"pl-5 pull-right\"],[11,\"role\",\"button\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"https://www.kiali.io/\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"nofollow noopener noreferrer\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"kiali\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"text-center text-muted\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"istio.noData\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/traffic-monitoring/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/component", ["exports", "istio/components/traffic-policy-tls/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var NONE = 'NONE';
  var ISTIO_MUTUAL = 'ISTIO_MUTUAL';
  var DISABLE = 'DISABLE';
  var SIMPLE = 'SIMPLE';
  var MUTUAL = 'MUTUAL';

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    tlsMode: NONE,
    trafficPolicy: null,
    errors: null,
    model: Ember.computed.alias('trafficPolicy.tls'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initTls();
    },
    actions: {
      setSubjectAltNames: function setSubjectAltNames(subjectAltNames) {
        Ember.set(this, 'model.subjectAltNames', subjectAltNames);
      }
    },
    tlsModeDidChange: Ember.observer('tlsMode', function () {
      var tlsMode = Ember.get(this, 'tlsMode');
      var trafficPolicy = Ember.get(this, 'trafficPolicy');

      if (tlsMode === NONE) {
        delete trafficPolicy['tls'];
      } else if (tlsMode === ISTIO_MUTUAL) {
        Ember.set(this, 'model', {
          mode: ISTIO_MUTUAL
        });
      } else if (tlsMode === DISABLE) {
        Ember.set(this, 'model', {
          mode: DISABLE
        });
      } else if (tlsMode === SIMPLE) {
        var out = {
          mode: SIMPLE
        };

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', out);
      } else if (tlsMode === MUTUAL) {
        var _out = {
          mode: MUTUAL
        };

        if (Ember.get(this, 'model.clientCertificate')) {
          Ember.set(_out, 'clientCertificate', Ember.get(this, 'model.clientCertificate'));
        }

        if (Ember.get(this, 'model.privateKey')) {
          Ember.set(_out, 'privateKey', Ember.get(this, 'model.privateKey'));
        }

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(_out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(_out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(_out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', _out);
      }
    }),
    validate: Ember.observer('tlsMode', 'model.clientCertificate', 'model.privateKey', function () {
      var errors = [];

      if (Ember.get(this, 'tlsMode') === MUTUAL) {
        if (!Ember.get(this, 'model.clientCertificate')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.clientCertificate.error'));
        }

        if (!Ember.get(this, 'model.privateKey')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.privateKey.error'));
        }
      }

      Ember.set(this, 'errors', errors);
    }),
    initTls: function initTls() {
      if (!Ember.get(this, 'model') || !Ember.get(this, 'model.mode')) {
        Ember.set(this, 'tlsMode', NONE);
      } else {
        Ember.set(this, 'tlsMode', Ember.get(this, 'model.mode'));
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "27sP46Kr",
    "block": "{\"symbols\":[\"c\",\"row\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-12\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.label\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"tlsMode\"]]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"tlsMode\"]],\"NONE\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.none.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"tlsMode\"]],\"ISTIO_MUTUAL\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.istio.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"tlsMode\"]],\"DISABLE\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.disable.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"tlsMode\"]],\"SIMPLE\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.simple.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"tlsMode\"]],\"MUTUAL\"]]],false],[0,\" \"],[1,[27,\"t\",[\"cruDestinationRule.tls.mode.mutual.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"tlsMode\"]],\"MUTUAL\"],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-clientCertificate\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.tls.clientCertificate.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"clientCertificate\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"clientCertificate\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-clientCertificate\"],null],[27,\"t\",[\"cruDestinationRule.tls.clientCertificate.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-privateKey\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.tls.privateKey.label\"],null],false],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"          \"],[1,[21,\"field-required\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"privateKey\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"privateKey\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-privateKey\"],null],[27,\"t\",[\"cruDestinationRule.tls.privateKey.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"tlsMode\"]],\"SIMPLE\"],null],[27,\"eq\",[[23,[\"tlsMode\"]],\"MUTUAL\"],null]],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-caCertificates\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.tls.caCertificates.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"caCertificates\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"caCertificates\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-caCertificates\"],null],[27,\"t\",[\"cruDestinationRule.tls.caCertificates.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-6 box\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-sni\"],null]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruDestinationRule.tls.sni.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"model\",\"sni\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[23,[\"model\",\"sni\"]],[27,\"concat\",[[23,[\"elementId\"]],\"-input-sni\"],null],[27,\"t\",[\"cruDestinationRule.tls.sni.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"tlsMode\"]],\"SIMPLE\"],null],[27,\"eq\",[[23,[\"tlsMode\"]],\"MUTUAL\"],null]],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-12 box\"],[9],[0,\"\\n\"],[4,\"form-value-array\",null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[23,[\"editing\"]],\"cruDestinationRule.tls.subjectAltNames.label\",\"cruDestinationRule.tls.subjectAltNames.add\",[27,\"action\",[[22,0,[]],\"setSubjectAltNames\"],null],\"btn bg-link icon-btn\",[23,[\"model\",\"subjectAltNames\"]],false]],{\"statements\":[[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[22,2,[\"value\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[22,2,[\"value\"]],[27,\"t\",[\"cruDestinationRule.tls.subjectAltNames.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/traffic-policy-tls/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/upgrade-btn/component", "istio/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "istio/components/used-percent-gauge/component");
define("istio/components/virtual-service-http-route-row/component", ["exports", "istio/components/virtual-service-http-route-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    route: null,
    showMatch: false,
    httpRouteDestinations: Ember.computed.alias('route.route'),
    init: function init() {
      this._super.apply(this, arguments);

      this.initRoute();
    },
    actions: {
      removeRoute: function removeRoute(route) {
        if (this.removeRoute) {
          this.removeRoute(route);
        }
      },
      moveUpRoute: function moveUpRoute(route) {
        var routes = Ember.get(this, 'routes');

        if (routes) {
          var index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index - 1, route);
        }
      },
      moveDownRoute: function moveDownRoute(route) {
        var routes = Ember.get(this, 'routes');

        if (routes) {
          var index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index + 1, route);
        }
      },
      addMatch: function addMatch() {
        var match = Ember.Object.create({});
        Ember.get(this, 'route.match').pushObject(match);
      },
      removeMatch: function removeMatch(match) {
        Ember.get(this, 'route.match').removeObject(match);

        if (Ember.get(this, 'route.match.length') === 0 && Ember.get(this, 'showMatch')) {
          Ember.set(this, 'showMatch', false);
        }
      }
    },
    showMatchDidChange: Ember.observer('showMatch', function () {
      var showMatch = Ember.get(this, 'showMatch');

      if (showMatch) {
        if (!Ember.get(this, 'route.match')) {
          Ember.set(this, 'route.match', []);
        }

        if (Ember.get(this, 'route.match.length') === 0) {
          this.send('addMatch');
        }

        var routes = Ember.get(this, 'routes');

        if (routes) {
          routes.removeObject(Ember.get(this, 'route'));
          routes.unshiftObject(Ember.get(this, 'route'));
        }
      } else {
        var route = Ember.get(this, 'route');
        delete route['match'];
      }
    }),
    initRoute: function initRoute() {
      if (Ember.get(this, 'route.match.length') > 0) {
        Ember.set(this, 'showMatch', true);
      }

      if (!Ember.get(this, 'httpRouteDestinations')) {
        Ember.set(this, 'route.route', []);
      }

      var route = Ember.get(this, 'route');

      if (!Ember.get(route, 'fault')) {
        Ember.set(route, 'fault', {
          abort: {},
          delay: {}
        });
      } else if (!Ember.get(route, 'fault.abort')) {
        Ember.set(route, 'fault.abort', {});
      } else if (!Ember.get(route, 'fault.delay')) {
        Ember.set(route, 'fault.delay', {});
      }

      if (!Ember.get(route, 'redirect')) {
        Ember.set(route, 'redirect', {});
      }

      if (!Ember.get(route, 'rewrite')) {
        Ember.set(route, 'rewrite', {});
      }

      if (!Ember.get(route, 'mirror')) {
        Ember.set(route, 'mirror', {});
      }

      if (!Ember.get(route, 'retries')) {
        Ember.set(route, 'retries', {});
      }
    }
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-http-route-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ntXYPwsf",
    "block": "{\"symbols\":[\"match\"],\"statements\":[[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"editing\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.removeRouteLabel\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"removeRoute\",[23,[\"route\"]]]],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"isFirst\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.moveUp\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"moveUpRoute\",[23,[\"route\"]]]],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"unless\",[[23,[\"isLast\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.moveDown\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],\"moveDownRoute\",[23,[\"route\"]]]],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"checkbox pt-10\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"editing\"]]],null,{\"statements\":[[0,\"      \"],[7,\"label\"],[11,\"class\",\"no-select\"],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[23,[\"showMatch\"]]]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.showMatch\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"and\",[[23,[\"editing\"]],[23,[\"showMatch\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"inline-block\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"pt-0 pb-0 btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.addLabel\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],\"addMatch\"]],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"showMatch\"]]],null,{\"statements\":[[4,\"each\",[[23,[\"route\",\"match\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"http-route-match\",null,[[\"model\",\"editing\",\"removeMatch\"],[[22,1,[]],[23,[\"editing\"]],[27,\"action\",[[22,0,[]],\"removeMatch\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row text-center mt-20 mb-20 pt-10\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.matches.noData\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"http-route-destination\",null,[[\"namespace\",\"httpRouteDestinations\",\"hosts\",\"route\",\"isNew\",\"editing\"],[[23,[\"namespace\"]],[23,[\"httpRouteDestinations\"]],[23,[\"hosts\"]],[23,[\"route\"]],[23,[\"isNew\"]],[23,[\"editing\"]]]]],false],[0,\"\\n\\n\"],[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.redirect.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-redirect-uri\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.redirect.uri.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"redirect\",\"uri\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-redirect-uri\"],null],[23,[\"route\",\"redirect\",\"uri\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.redirect.uri.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-redirect-authority\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.redirect.authority.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"redirect\",\"authority\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-redirect-authority\"],null],[23,[\"route\",\"redirect\",\"authority\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.redirect.authority.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.rewrite.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-rewrite-uri\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.rewrite.uri.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"rewrite\",\"uri\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-rewrite-uri\"],null],[23,[\"route\",\"rewrite\",\"uri\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.rewrite.uri.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-rewrite-authority\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.rewrite.authority.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"rewrite\",\"authority\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-rewrite-authority\"],null],[23,[\"route\",\"rewrite\",\"authority\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.rewrite.authority.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.timeout.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-timeout\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.timeout.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"timeout\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-timeout\"],null],[23,[\"route\",\"timeout\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.timeout.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.retries.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-retries-attempts\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.retries.attempts.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"retries\",\"attempts\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input-integer\",null,[[\"min\",\"id\",\"value\",\"classNames\",\"placeholder\"],[0,[27,\"concat\",[[23,[\"elementId\"]],\"-input-retries-attempts\"],null],[23,[\"route\",\"retries\",\"attempts\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.retries.attempts.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-retries-perTryTimeout\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.retries.perTryTimeout.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"retries\",\"perTryTimeout\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-retries-perTryTimeout\"],null],[23,[\"route\",\"retries\",\"perTryTimeout\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.retries.perTryTimeout.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-abort-httpStatus\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"fault\",\"abort\",\"httpStatus\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input-integer\",null,[[\"id\",\"value\",\"classNames\",\"placeholder\"],[[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-abort-httpStatus\"],null],[23,[\"route\",\"fault\",\"abort\",\"httpStatus\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-abort-percent\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.percent.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"fault\",\"abort\",\"percent\"]]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-abort-percent\"],null],[23,[\"route\",\"fault\",\"abort\",\"percent\"]],[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.abort.percent.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              %\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-delay-fixedDelay\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"fault\",\"delay\",\"fixedDelay\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-delay-fixedDelay\"],null],[23,[\"route\",\"fault\",\"delay\",\"fixedDelay\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-delay-percent\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.percent.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"fault\",\"delay\",\"percent\"]]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-faultInjection-delay-percent\"],null],[23,[\"route\",\"fault\",\"delay\",\"percent\"]],[27,\"t\",[\"cruVirtualService.http.routes.faultInjection.delay.percent.placeholder\"],null]]]],false],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-addon bg-default\"],[9],[0,\"\\n              %\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"hr\"],[11,\"class\",\"mt-20\"],[9],[10],[0,\"\\n\\n    \"],[7,\"label\"],[11,\"class\",\"acc-label pb-5\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"text-black\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.mirror.label\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-mirror-host\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.mirror.host.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"mirror\",\"host\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"istio-host-select\",null,[[\"namespaceId\",\"value\",\"showLabel\"],[[23,[\"namespace\",\"id\"]],[23,[\"route\",\"mirror\",\"host\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"for\",[28,[[27,\"concat\",[[23,[\"elementId\"]],\"-input-mirror-subset\"],null]]]],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"cruVirtualService.http.routes.mirror.subset.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"input-or-display\",null,[[\"editable\",\"value\"],[[23,[\"editing\"]],[23,[\"route\",\"mirror\",\"subset\"]]]],{\"statements\":[[0,\"          \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[27,\"concat\",[[23,[\"elementId\"]],\"-input-mirror-subset\"],null],[23,[\"route\",\"mirror\",\"subset\"]],\"form-control\",[27,\"t\",[\"cruVirtualService.http.routes.mirror.subset.placeholder\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-6\"],[9],[0,\"\\n        \"],[1,[27,\"port-selector\",null,[[\"editing\",\"model\"],[[23,[\"editing\"]],[23,[\"route\",\"mirror\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/virtual-service-http-route-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/component", ["exports", "istio/components/virtual-service-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9hWuEhwn",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n  \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n    \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[23,[\"model\",\"id\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"state\"]]]]],[11,\"class\",\"state\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"name\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"project-istio.virtual-services.detail\",[23,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayName\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"hosts\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[23,[\"model\",\"hosts\"]],true]],{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayHostsString\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"created\"]]]]],[11,\"class\",\"text-right pr-20\"],[9],[0,\"\\n    \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/components/virtual-service-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'istio/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "istio/cookies/service");
define.alias("shared/digital-ocean/service", "istio/digital-ocean/service");
define.alias("shared/endpoint/service", "istio/endpoint/service");
define("istio/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "istio/resolver", "istio/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'intl', 'scope', 'session', 'modal', 'store', 'catalog', 'globalStore', 'router', 'clusterStore', 'tooltip'],
      externalRoutes: ['authenticated.cluster.istio.cluster-setting']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "istio/features/service");
define.alias("shared/grafana/service", "istio/grafana/service");
define.alias("shared/growl/service", "istio/growl/service");
define.alias("ember-math-helpers/helpers/abs", "istio/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "istio/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "istio/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "istio/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "istio/helpers/and");
define.alias("shared/helpers/array-includes", "istio/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "istio/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "istio/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "istio/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "istio/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "istio/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "istio/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "istio/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "istio/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "istio/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "istio/helpers/cosh");
define.alias("shared/helpers/date-calendar", "istio/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "istio/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "istio/helpers/date-recent");
define.alias("shared/helpers/date-str", "istio/helpers/date-str");
define.alias("shared/helpers/default-str", "istio/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "istio/helpers/div");
define.alias("shared/helpers/driver-name", "istio/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "istio/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "istio/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "istio/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "istio/helpers/floor");
define.alias("ember-intl/helpers/format-date", "istio/helpers/format-date");
define.alias("ember-intl/helpers/format-html-message", "istio/helpers/format-html-message");
define.alias("shared/helpers/format-ip", "istio/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "istio/helpers/format-message");
define.alias("shared/helpers/format-mib", "istio/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "istio/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "istio/helpers/format-relative");
define.alias("shared/helpers/format-si", "istio/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "istio/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "istio/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "istio/helpers/gcd");
define.alias("shared/helpers/get-card-class", "istio/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "istio/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "istio/helpers/gte");
define.alias("shared/helpers/has-override", "istio/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "istio/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "istio/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "istio/helpers/imul");
define.alias("ember-intl/helpers/intl-get", "istio/helpers/intl-get");
define.alias("ember-truth-helpers/helpers/is-array", "istio/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "istio/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "istio/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "istio/helpers/is-equal");
define.alias("shared/helpers/join-array", "istio/helpers/join-array");
define.alias("ember-intl/helpers/l", "istio/helpers/l");
define.alias("liquid-fire/helpers/lf-lock-model", "istio/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "istio/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "istio/helpers/link-ssl-domain");
define("istio/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "istio/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "istio/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "istio/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "istio/helpers/log2");
define.alias("shared/helpers/lower-case", "istio/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "istio/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "istio/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "istio/helpers/max");
define.alias("shared/helpers/maybe-t", "istio/helpers/maybe-t");
define.alias("ember-math-helpers/helpers/min", "istio/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "istio/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "istio/helpers/mult");
define.alias("shared/helpers/nl-to-br", "istio/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "istio/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "istio/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "istio/helpers/or");
define.alias("shared/helpers/parse-camelcase", "istio/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "istio/helpers/pow");
define.alias("shared/helpers/pretty-cron", "istio/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "istio/helpers/random");
define.alias("shared/helpers/rbac-allows", "istio/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "istio/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "istio/helpers/round");
define.alias("shared/helpers/run-time", "istio/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "istio/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "istio/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "istio/helpers/sqrt");
define.alias("shared/helpers/str-replace", "istio/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "istio/helpers/sub");
define.alias("ember-intl/helpers/format-html-message", "istio/helpers/t-html");
define.alias("ember-intl/helpers/t", "istio/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "istio/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "istio/helpers/tanh");
define.alias("shared/helpers/to-json", "istio/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "istio/helpers/trunc");
define.alias("shared/helpers/uc-first", "istio/helpers/uc-first");
define.alias("shared/helpers/upper-case", "istio/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "istio/helpers/xor");
define.alias("shared/host/service", "istio/host/service");
define("istio/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DEFAULT_ROUTE = 'project-istio.metrics';
  var VALID_ROUTES = [DEFAULT_ROUTE, 'project-istio.graph', 'project-istio.rules', 'project-istio.virtual-services', 'project-istio.destination-rules'];

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    redirect: function redirect() {
      var route = Ember.get(this, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE));

      if (!VALID_ROUTES.includes(route)) {
        route = DEFAULT_ROUTE;
      }

      this.replaceWith(route);
    }
  });

  _exports.default = _default;
});
define("istio/initializers/app", ["exports"], function (_exports) {
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
define("istio/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("istio/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
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
define("istio/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define("istio/instance-initializers/ember-intl", ["exports", "ember-intl/initializer"], function (_exports, _initializer) {
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
define.alias("shared/k8s/service", "istio/k8s/service");
define.alias("shared/linode/service", "istio/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "istio/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "istio/mixins/console");
define.alias("shared/mixins/container-choices", "istio/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "istio/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "istio/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "istio/mixins/filter-state");
define.alias("shared/mixins/grafana", "istio/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "istio/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "istio/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "istio/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "istio/mixins/manage-labels");
define.alias("shared/mixins/metrics", "istio/mixins/metrics");
define.alias("shared/mixins/modal-base", "istio/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "istio/mixins/new-or-edit");
define.alias("shared/mixins/preload", "istio/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "istio/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "istio/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "istio/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "istio/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "istio/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "istio/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "istio/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "istio/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "istio/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "istio/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "istio/mixins/upgrade-component");
define.alias("shared/mixins/upload", "istio/mixins/upload");
define.alias("shared/modal/service", "istio/modal/service");
define.alias("shared/oauth/service", "istio/oauth/service");
define.alias("shared/pipeline-github/service", "istio/pipeline-github/service");
define.alias("shared/prefs/service", "istio/prefs/service");
define("istio/project-istio/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    router: Ember.inject.service(),
    currentRouteName: Ember.computed.alias('router.currentRouteName')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back: function back() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var original = this.modelFor('project-istio.destination-rules.detail').destinationRule;
      return Ember.RSVP.hash({
        destinationRule: original.clone()
      });
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MLs9vSYS",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-destination-rule\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[23,[\"model\",\"destinationRule\"]],\"edit\",[27,\"action\",[[22,0,[]],\"back\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/destination-rules/detail/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ufxSB19+",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-destination-rule\",null,[[\"model\",\"mode\"],[[23,[\"model\",\"destinationRule\"]],\"view\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/destination-rules/detail/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        destinationRule: store.find('destinationrule', params.id)
      });
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'host',
      searchField: 'host',
      translationKey: 'destinationRulePage.table.host.label',
      width: 200
    }, {
      name: 'subsets',
      searchField: 'displaySubsetsString',
      translationKey: 'destinationRulePage.table.subsets.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    model: function model(params, transition) {
      var store = Ember.get(this, 'store');
      var projectId = transition.params['authenticated.project'].project_id;
      return store.findAll('destinationrule').then(function (data) {
        return {
          data: data,
          supported: true,
          projectId: projectId
        };
      }).catch(function () {
        return {
          data: [],
          supported: false,
          projectId: projectId
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'destination-rules'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.destination-rules'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oNS/teC2",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"if\",[[23,[\"model\",\"supported\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"pl-0 pr-0\"],[9],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[23,[\"rows\"]],[23,[\"searchText\"]],[23,[\"sortBy\"]],true,[23,[\"descending\"]],true,\"namespaceId\",\"namespace\",\"pagination.destinationRules\",[23,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"destination-rule-row\",null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[22,3,[]],[23,[\"searchText\"]],[22,1,[\"subMatches\"]],[22,1,[\"fullColspan\"]],[22,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[22,3,[\"ref\"]],[22,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"destinationRulePage.noMatch\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"destinationRulePage.noData\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[27,\"t\",[\"destinationRulePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/destination-rules/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done: function done() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('destinationrule', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(function (hash) {
        var destinationRule;
        var namespaceId = params.namespaceId;
        var namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          destinationRule = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          destinationRule = store.createRecord({
            type: 'destinationrule',
            namespaceId: namespaceId,
            subsets: []
          });
        }

        hash.destinationRule = destinationRule;
        return hash;
      });
    },
    resetController: function resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Rvk2C7MC",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-destination-rule\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[23,[\"model\",\"destinationRule\"]],\"new\",[27,\"action\",[[22,0,[]],\"done\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/destination-rules/new/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/controller", ["exports"], function (_exports) {
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
define("istio/project-istio/graph/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    session: Ember.inject.service(),
    model: function model(params, transition) {
      var projectId = transition.params['authenticated.project'].project_id;
      var namespaces = Ember.get(this, 'clusterStore').findAll('namespace').then(function (data) {
        var namespaces = data.filter(function (ns) {
          if (Ember.get(ns, 'projectId') !== projectId) {
            return false;
          }

          var labels = Ember.get(ns, 'labels') || {};
          return labels['istio-injection'] === 'enabled';
        });
        return namespaces;
      });
      return Ember.RSVP.hash({
        namespaces: namespaces
      }).then(function (_ref) {
        var namespaces = _ref.namespaces;
        return {
          namespaces: namespaces
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.graph'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.graph'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "itosJbG5",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"traffic-monitoring\",null,[[\"namespaces\"],[[23,[\"model\",\"namespaces\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/graph/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/controller", ["exports"], function (_exports) {
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
define("istio/project-istio/metrics/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.metrics'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.metrics'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ThVRakGJ",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"project-traffic-metrics\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/metrics/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var GRAPH_ROUTE = 'project-istio.graph';

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    session: Ember.inject.service(),
    model: function model(params, transition) {
      var globalStore = this.globalStore;
      var projectId = transition.params['authenticated.project'].project_id;
      var project = globalStore.all('project').findBy('id', projectId);
      var clusterId = project.clusterId;
      var kiali = globalStore.rawRequest({
        url: "/k8s/clusters/".concat(clusterId, "/api/v1/namespaces/istio-system/services/http:kiali-http:80/proxy/"),
        method: 'GET'
      });
      return Ember.RSVP.hash({
        kiali: kiali
      }).then(function () {
        return {
          iconDisabled: false
        };
      }).catch(function () {
        var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var status = err.status;

        if (status === 403) {
          return {
            iconDisabled: true
          };
        } else {
          return {
            iconDisabled: false
          };
        }
      });
    },
    afterModel: function afterModel(model, transition) {
      if (model.iconDisabled && (transition.targetName || '').indexOf(GRAPH_ROUTE) > -1) {
        this.transitionTo('project-istio.metrics');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    catalog: Ember.inject.service(),
    beforeModel: function beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return store.find('app', Ember.get(params, 'rule_id'));
    },
    afterModel: function afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates([model]);
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0E4jYXYQ",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"ruleDetailPage.header\"],[[\"appName\"],[[23,[\"model\",\"displayName\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[23,[\"model\"]],false,\"ml-10 pull-right\",\"sm\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[27,\"linkify\",[[23,[\"model\",\"description\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[[23,[\"model\",\"stateColor\"]]]]],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      \"],[1,[27,\"uc-first\",[[23,[\"model\",\"transitioningMessage\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row banner bg-info basics mb-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.version\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[23,[\"model\",\"externalIdInfo\",\"version\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.namespace\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[23,[\"model\",\"namespace\",\"displayName\"]],false],[0,\" \"],[1,[27,\"copy-to-clipboard\",null,[[\"clipboardText\",\"size\"],[[23,[\"model\",\"namespace\",\"id\"]],\"small\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"vertical-middle\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label vertical-middle p-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"generic.created\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"date-calendar\",[[23,[\"model\",\"created\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"accordion-list\",null,null,{\"statements\":[[0,\"    \"],[1,[27,\"resource-condition-list\",null,[[\"resourceType\",\"conditions\",\"expandAll\",\"expandFn\",\"expandOnInit\"],[[27,\"t\",[\"generic.istioRule\"],null],[23,[\"model\",\"status\",\"conditions\"]],[22,1,[\"expandAll\"]],[22,2,[]],false]]],false],[0,\"\\n\\n\"],[4,\"accordion-list-item\",null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[27,\"t\",[\"ruleDetailPage.answers.title\"],null],[27,\"t\",[\"ruleDetailPage.answers.detail\"],null],[22,1,[\"expandAll\"]],[27,\"action\",[[22,0,[]],[22,2,[]]],null],false]],{\"statements\":[[0,\"      \"],[1,[27,\"form-key-value\",null,[[\"editing\",\"initialMap\",\"showNoneLabel\",\"keyLabel\"],[false,[23,[\"model\",\"answers\"]],[27,\"not\",[[23,[\"model\",\"valuesYaml\"]]],null],\"ruleDetailPage.answers.variable\"]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"valuesYaml\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"code-block\",null,[[\"code\",\"language\"],[[23,[\"model\",\"valuesYaml\"]],\"yaml\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[10],[0,\"\\n\\n\"],[1,[27,\"istio-yaml\",null,[[\"rule\"],[[23,[\"model\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/rule-detail/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/controller", ["exports"], function (_exports) {
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
define("istio/project-istio/rules/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    catalog: Ember.inject.service(),
    beforeModel: function beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },
    model: function model(params, transition) {
      var projectId = transition.params['authenticated.project'].project_id;
      return Ember.get(this, 'store').findAll('app').then(function (apps) {
        return {
          apps: apps,
          projectId: projectId
        };
      });
    },
    afterModel: function afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates(Ember.get(model, 'apps'));
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'project-istio.rules'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.rules'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "N3kilSr2",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"istio-rules-table\",null,[[\"apps\"],[[23,[\"model\",\"apps\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/rules/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XbhgX1Fn",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"istioEnabled\"]]],null,{\"statements\":[[4,\"istio-nav\",null,[[\"iconDisabled\"],[[23,[\"model\",\"iconDisabled\"]]]],{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"btn btn-sm bg-default mr-10\"],[12,\"disabled\",[27,\"or\",[[27,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]],[27,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]]],null]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"nav.containers.importCompose\"],null],false],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"importYaml\"]],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.rules\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-primary mr-10\"],[12,\"href\",[28,[[27,\"href-to\",[\"authenticated.project.project-catalogs\",[23,[\"scope\",\"currentProject\",\"id\"]],[27,\"query-params\",null,[[\"istio\"],[true]]]],null]]]],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"icon icon-gear icon-fw\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"nav.apps.manage\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"a\"],[11,\"class\",\"btn btn-sm bg-primary\"],[12,\"href\",[28,[[27,\"href-to\",[\"catalog-tab\",[23,[\"scope\",\"currentProject\",\"id\"]],[27,\"query-params\",null,[[\"istio\"],[true]]]],null]]]],[12,\"disabled\",[27,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"app\",\"project\",\"create\"]]]],[9],[0,\"\\n        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"rulesPage.new\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.destination-rules.index\"],null]],null,{\"statements\":[[4,\"link-to\",[\"project-istio.destination-rules.new\",[23,[\"scope\",\"currentProject\",\"id\"]]],[[\"class\",\"disabled\"],[\"btn btn-sm bg-primary\",[27,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]]]],{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"istio.nav.destinationRules.add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"currentRouteName\"]],\"authenticated.project.istio.project-istio.virtual-services.index\"],null]],null,{\"statements\":[[4,\"link-to\",[\"project-istio.virtual-services.new\",[23,[\"scope\",\"currentProject\",\"id\"]]],[[\"class\",\"disabled\"],[\"btn btn-sm bg-primary\",[27,\"rbac-prevents\",null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]]]],{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"istio.nav.virtualServices.add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"scope\",\"currentCluster\",\"isWindows\"]]],null,{\"statements\":[[0,\"    \"],[5,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[27,\"t\",[\"windowsCluster.istio\"],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"banner-message\",null,[[\"color\",\"message\"],[\"bg-info\",[27,\"t\",[[27,\"if\",[[23,[\"scope\",\"currentCluster\",\"systemProject\"]],\"projectIstioPage.info.notEnabled\",\"projectIstioPage.info.notOwner\"],null]],[[\"clusterId\",\"htmlSafe\"],[[23,[\"scope\",\"currentCluster\",\"id\"]],true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back: function back() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model() {
      var original = this.modelFor('project-istio.virtual-services.detail').virtualService;
      return Ember.RSVP.hash({
        virtualService: original.clone()
      });
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2pOHH+2h",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-virtual-service\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[23,[\"model\",\"virtualService\"]],\"edit\",[27,\"action\",[[22,0,[]],\"back\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/virtual-services/detail/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZQwON6QF",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-virtual-service\",null,[[\"model\",\"mode\"],[[23,[\"model\",\"virtualService\"]],\"view\"]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/virtual-services/detail/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        virtualService: store.find('virtualservice', params.id)
      });
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'hosts',
      searchField: 'hosts',
      translationKey: 'virtualServicePage.table.hosts.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    model: function model(params, transition) {
      var store = Ember.get(this, 'store');
      var projectId = transition.params['authenticated.project'].project_id;
      return store.findAll('virtualservice').then(function (data) {
        return {
          data: data,
          supported: true,
          projectId: projectId
        };
      }).catch(function () {
        return {
          data: [],
          supported: false,
          projectId: projectId
        };
      });
    },
    setDefaultRoute: Ember.on('activate', function () {
      var _EmberSetProperties;

      Ember.setProperties(this, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.ISTIO_ROUTE), 'virtual-services'), _defineProperty(_EmberSetProperties, "session.".concat(_constants.default.SESSION.PROJECT_ROUTE), 'authenticated.project.istio.project-istio.virtual-services'), _EmberSetProperties));
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vxsE6lmm",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[4,\"if\",[[23,[\"model\",\"supported\"]]],null,{\"statements\":[[0,\"  \"],[7,\"section\"],[11,\"class\",\"pl-0 pr-0\"],[9],[0,\"\\n\"],[4,\"sortable-table\",null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid sortable-table\",[23,[\"rows\"]],[23,[\"searchText\"]],[23,[\"sortBy\"]],true,[23,[\"descending\"]],true,\"namespaceId\",\"namespace\",\"pagination.virtualServices\",[23,[\"headers\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"virtual-service-row\",null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[22,3,[]],[23,[\"searchText\"]],[22,1,[\"subMatches\"]],[22,1,[\"fullColspan\"]],[22,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"namespace-group\",null,[[\"model\",\"fullColspan\"],[[22,3,[\"ref\"]],[22,1,[\"fullColspan\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"virtualServicePage.noMatch\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n          \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"virtualServicePage.noData\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"banner-message\",null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[27,\"t\",[\"virtualServicePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/virtual-services/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done: function done() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },
      cancel: function cancel() {
        this.send('goToPrevious');
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      var store = Ember.get(this, 'store');
      var deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('virtualservice', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(function (hash) {
        var virtualService;
        var namespaceId = params.namespaceId;
        var namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          virtualService = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          virtualService = store.createRecord({
            type: 'virtualservice',
            namespaceId: namespaceId,
            http: [],
            gateways: [],
            hosts: []
          });
        }

        hash.virtualService = virtualService;
        return hash;
      });
    },
    resetController: function resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qp7LMMDS",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"cru-virtual-service\",null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[23,[\"model\",\"virtualService\"]],\"new\",[27,\"action\",[[22,0,[]],\"done\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/project-istio/virtual-services/new/template.hbs"
    }
  });

  _exports.default = _default;
});
define("istio/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "istio/resource-actions/service");
define.alias("shared/role-template/service", "istio/role-template/service");
define.alias("shared/saml/service", "istio/saml/service");
define.alias("shared/scope/service", "istio/scope/service");
define.alias("ivy-codemirror/services/code-mirror", "istio/services/code-mirror");
define("istio/services/cookies", ["exports", "@rancher/ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "istio/services/intl");
define("istio/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "istio/session/service");
define.alias("shared/settings/service", "istio/settings/service");
define("istio/shared/tests/addon.lint-test", [], function () {
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
define("istio/shared/tests/app.lint-test", [], function () {
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
define("istio/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "istio/shibboleth-auth/service");
define.alias("shared/store-reset/service", "istio/store-reset/service");
define.alias("shared/tab-session/service", "istio/tab-session/service");
define("istio/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xv9MkwDS",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "istio/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "istio/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "istio/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "istio/transitions/default");
define.alias("liquid-fire/transitions/explode", "istio/transitions/explode");
define.alias("liquid-fire/transitions/fade", "istio/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "istio/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "istio/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "istio/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "istio/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "istio/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "istio/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "istio/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "istio/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "istio/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "istio/transitions/wait");
define.alias("shared/user-language/service", "istio/user-language/service");
define.alias("shared/user-theme/service", "istio/user-theme/service");
define.alias("shared/utils/add-view-action", "istio/utils/add-view-action");
define.alias("shared/utils/additional-routes", "istio/utils/additional-routes");
define.alias("shared/utils/azure-choices", "istio/utils/azure-choices");
define.alias("shared/utils/browser-storage", "istio/utils/browser-storage");
define.alias("shared/utils/constants", "istio/utils/constants");
define.alias("shared/utils/convert-yaml", "istio/utils/convert-yaml");
define.alias("shared/utils/debounce", "istio/utils/debounce");
define.alias("shared/utils/download-files", "istio/utils/download-files");
define.alias("shared/utils/errors", "istio/utils/errors");
define.alias("shared/utils/fetch-yaml", "istio/utils/fetch-yaml");
define("istio/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "istio/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "istio/utils/group-compound-layout");
define("istio/utils/intl/missing-message", ["exports"], function (_exports) {
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
define.alias("shared/utils/load-script", "istio/utils/load-script");
define.alias("shared/utils/multi-stats", "istio/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "istio/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "istio/utils/parse-externalid");
define.alias("shared/utils/parse-port", "istio/utils/parse-port");
define.alias("shared/utils/parse-target", "istio/utils/parse-target");
define.alias("shared/utils/parse-unit", "istio/utils/parse-unit");
define.alias("shared/utils/parse-uri", "istio/utils/parse-uri");
define.alias("shared/utils/parse-version", "istio/utils/parse-version");
define.alias("shared/utils/percent-gauge", "istio/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "istio/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "istio/utils/pipelineStep");
define.alias("shared/utils/platform", "istio/utils/platform");
define.alias("shared/utils/queue", "istio/utils/queue");
define.alias("shared/utils/rackspace-choices", "istio/utils/rackspace-choices");
define.alias("shared/utils/search-text", "istio/utils/search-text");
define.alias("shared/utils/socket", "istio/utils/socket");
define.alias("shared/utils/sort", "istio/utils/sort");
define.alias("shared/utils/traffic-renderer", "istio/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "istio/utils/used-percent-gauge");
define.alias("shared/utils/util", "istio/utils/util");//# sourceMappingURL=engine.map
