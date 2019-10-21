define.alias("shared/access/service", "alert/access/service");
define.alias("shared/all-dns-records/service", "alert/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "alert/all-storage-classes/service");
define.alias("shared/all-workloads/service", "alert/all-workloads/service");
define.alias("shared/amazon/util", "alert/amazon/util");
define.alias("shared/azure-ad/service", "alert/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "alert/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "alert/calculate-position/util");
define.alias("shared/capabilities/service", "alert/capabilities/service");
define.alias("shared/catalog/service", "alert/catalog/service");
define("alert/cldrs/ar", ["exports"], function (_exports) {
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
define("alert/cldrs/de", ["exports"], function (_exports) {
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
define("alert/cldrs/en", ["exports"], function (_exports) {
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
define("alert/cldrs/es", ["exports"], function (_exports) {
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
define("alert/cldrs/fa", ["exports"], function (_exports) {
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
define("alert/cldrs/fr", ["exports"], function (_exports) {
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
define("alert/cldrs/hu", ["exports"], function (_exports) {
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
define("alert/cldrs/it", ["exports"], function (_exports) {
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
define("alert/cldrs/ja", ["exports"], function (_exports) {
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
define("alert/cldrs/ko", ["exports"], function (_exports) {
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
define("alert/cldrs/nb", ["exports"], function (_exports) {
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
define("alert/cldrs/nl", ["exports"], function (_exports) {
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
define("alert/cldrs/none", ["exports"], function (_exports) {
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
define("alert/cldrs/pt", ["exports"], function (_exports) {
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
define("alert/cldrs/readme", ["exports"], function (_exports) {
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
define("alert/cldrs/ru", ["exports"], function (_exports) {
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
define("alert/cldrs/sh", ["exports"], function (_exports) {
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
define("alert/cldrs/sv", ["exports"], function (_exports) {
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
define("alert/cldrs/tr", ["exports"], function (_exports) {
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
define("alert/cldrs/uk", ["exports"], function (_exports) {
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
define("alert/cldrs/vi", ["exports"], function (_exports) {
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
define("alert/cldrs/zh", ["exports"], function (_exports) {
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
define.alias("shared/cluster-templates/service", "alert/cluster-templates/service");
define.alias("shared/code-mirror/service", "alert/code-mirror/service");
define.alias("liquid-fire/components/-lf-get-outlet-state", "alert/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "alert/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "alert/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "alert/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "alert/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "alert/components/advanced-section/component");
define("alert/components/alert-chart/component", ["exports", "alert/components/alert-chart/template", "moment", "shared/components/graph-area/component"], function (_exports, _template, _moment, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var FORMATTERS = {
    value: function value(_value) {
      if (_value < 1) {
        return Math.round(_value * 100) / 100;
      } else if (_value < 10) {
        return Math.round(_value * 10) / 10;
      } else {
        return Math.round(_value);
      }
    }
  };

  var _default = _component.default.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    tagName: 'div',
    classNames: ['graph-area'],
    model: null,
    fields: null,
    chart: null,
    minMax: null,
    formatter: 'value',
    needRefresh: false,
    series: null,
    optionChange: Ember.observer('series.[]', 'threshold', function () {
      this.draw();
    }),
    draw: function draw() {
      var chart = Ember.get(this, 'chart');

      if (!chart) {
        return;
      }

      var minMax = Ember.get(this, 'minMax');
      var setMax = true;
      var series = [];
      var fields = (Ember.get(this, 'series') || []).map(function (serie) {
        return {
          id: Ember.get(serie, 'name'),
          data: Ember.get(serie, 'points').map(function (p) {
            return [p[1], p[0]];
          })
        };
      });
      fields.forEach(function (field) {
        var serie = field.data || [];
        var data = [];
        serie.forEach(function (d) {
          if (minMax && setMax && d[1] > minMax) {
            setMax = false;
          }

          data.push(d);
        });
        series.push({
          name: field.id,
          type: 'line',
          showSymbol: false,
          data: data,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 1
              }
            }
          }
        });
      });
      var threshold = Ember.get(this, 'threshold');
      var _formatter = FORMATTERS[Ember.get(this, 'formatter')];
      var minTime;
      var maxTime;
      series.map(function (s) {
        var _s$data = s.data,
            data = _s$data === void 0 ? [] : _s$data;

        if (data.length === 0) {
          return;
        }

        var endIndex = data.length - 1;

        var _minTime = data[0] && data[0][0];

        var _maxTime = data[endIndex] && data[endIndex][0];

        if (minTime && maxTime) {
          minTime = Math.min(_minTime, minTime);
          maxTime = Math.max(_maxTime, maxTime);
        } else {
          minTime = _minTime;
          maxTime = _maxTime;
        }
      });
      var option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            axis: 'x',
            snap: true
          },
          formatter: function formatter(params) {
            var html = '';
            var _params$seriesName = params.seriesName,
                seriesName = _params$seriesName === void 0 ? '' : _params$seriesName;

            var value = _formatter(params.data[1]);

            var label = seriesName.slice(0, seriesName.indexOf('{'));
            var body = seriesName.slice(seriesName.indexOf('{') + 1, -1);
            var infos = body.split(', ').map(function () {
              var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              return i.replace('=', ': ');
            });
            html = "<div class=\"text-left\">".concat((0, _moment.default)(params[0]).format('YYYY-MM-DD HH:mm:ss'));
            html += "<br><span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:".concat(params.color, ";\"></span> ").concat(label, " : ").concat(value);
            infos.map(function (i) {
              html += "<br><span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:transparent;\"></span> ".concat(i);
            });
            html += '</div>';
            return Ember.String.htmlSafe(html);
          }
        },
        grid: {
          top: '10px',
          left: '30px',
          right: '30px',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          boundaryGap: false,
          axisPointer: {
            show: true,
            snap: true,
            triggerTooltip: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: FORMATTERS[Ember.get(this, 'formatter')]
          },
          splitArea: {
            show: true
          }
        },
        series: [].concat(series, [{
          data: [[minTime, threshold], [maxTime, threshold]],
          type: 'line',
          id: 'threshold',
          lineStyle: {
            color: '#f5222d'
          },
          symbol: 'none',
          name: 'Threshold',
          itemStyle: {
            color: '#f5222d'
          }
        }])
      };

      if (setMax && minMax) {
        option.yAxis.max = minMax;
      }

      chart.setOption(option, true);
      chart.hideLoading();
    }
  });

  _exports.default = _default;
});
define("alert/components/alert-chart/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "O6oUZyZt",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"content graph-area\"],[9],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert-chart/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert-rule/new-edit/component", ["exports", "ui/mixins/new-or-edit", "alert/mixins/alert-rule"], function (_exports, _newOrEdit, _alertRule) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_newOrEdit.default, _alertRule.default, {
    router: Ember.inject.service(),
    intl: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    showAdvanced: false,
    errors: null,
    pods: null,
    workloads: null,
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    newAlert: Ember.computed.alias('resourceMap.newAlert'),
    metrics: Ember.computed.alias('resourceMap.metrics'),
    alertGroup: Ember.computed.alias('resourceMap.alertGroup'),
    alertRule: Ember.computed.alias('resourceMap.alertRule'),
    mode: Ember.computed.alias('resourceMap.mode'),
    level: Ember.computed.alias('resourceMap.level'),
    actions: {
      save: function save(cb) {
        Ember.set(this, 'errors', null);
        var ps = Ember.get(this, 'pageScope');
        var toSaveAlert;
        var alertRule = Ember.get(this, 'alertRule');
        var alertGroup = Ember.get(this, 'alertGroup');

        if (ps === 'cluster') {
          toSaveAlert = this.beforeSaveClusterAlert(alertRule, alertGroup);
        } else {
          toSaveAlert = this.beforeSaveProjectAlert(alertRule, alertGroup);
        }

        if (Ember.get(this, 'errors') && Ember.get(this, 'errors').length > 0) {
          cb();
          return;
        }

        toSaveAlert = this.willSaveMetricRule(toSaveAlert);
        Ember.set(this, 'primaryResource', toSaveAlert);

        this._super(cb);
      },
      cancel: function cancel() {
        var ps = Ember.get(this, 'pageScope');
        var router = Ember.get(this, 'router');

        if (ps === 'cluster') {
          router.transitionTo('authenticated.cluster.alert.index');
        } else {
          router.transitionTo('authenticated.project.alert.index');
        }
      }
    },
    doneSaving: function doneSaving() {
      this.send('cancel');
    }
  });

  _exports.default = _default;
});
define("alert/components/alert-rule/new-edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dn9Xoc8G",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[27,\"if\",[[23,[\"isCreate\"]],[27,\"t\",[\"alertPage.new.addRuleHeader\"],null],[27,\"t\",[\"alertPage.new.editRuleHeader\"],null]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"monitoringEnabled\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-info mb-10 mt-10\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.monitoringDisabled\"],null],false],[0,\"\\n\"],[4,\"link-to-external\",[\"authenticated.cluster.monitoring.cluster-setting\"],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"alertPage.newOrEdit.enableMonitoring\"],null],false],[0,\"\\n        \"]],\"parameters\":[]},null],[0,\".\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.monitoringDisabled\"],null],false],[0,\"\\n\"],[4,\"link-to-external\",[\"authenticated.project.monitoring.project-setting\"],null,{\"statements\":[[0,\"          \"],[1,[27,\"t\",[\"alertPage.newOrEdit.enableMonitoring\"],null],false],[0,\"\\n        \"]],\"parameters\":[]},null],[0,\".\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"mb-10 pt-5\"],[9],[0,\"\\n      \"],[1,[27,\"alert/form-cluster-rule-row\",null,[[\"pageScope\",\"isCreate\",\"model\",\"monitoringEnabled\",\"metrics\",\"editRule\",\"alertGroup\",\"mode\",\"level\"],[[23,[\"pageScope\"]],[23,[\"isCreate\"]],[23,[\"alertRule\"]],[23,[\"monitoringEnabled\"]],[23,[\"metrics\"]],[23,[\"editRule\"]],[23,[\"alertGroup\"]],[23,[\"mode\"]],[23,[\"level\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"project\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"alert/form-project-rule-row\",null,[[\"pageScope\",\"isCreate\",\"model\",\"alertRules\",\"metrics\",\"editRule\",\"monitoringEnabled\",\"alertGroup\",\"mode\",\"level\"],[[23,[\"pageScope\"]],[23,[\"isCreate\"]],[23,[\"alertRule\"]],[23,[\"alertRules\"]],[23,[\"metrics\"]],[23,[\"editRule\"]],[23,[\"monitoringEnabled\"]],[23,[\"alertGroup\"]],[23,[\"mode\"]],[23,[\"level\"]]]]],false],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"mv-20\"],[9],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[[27,\"if\",[[23,[\"isCreate\"]],\"alertPage.create\",\"alertPage.save\"],null],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert-rule/new-edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert-select/component", ["exports", "shared/components/searchable-select/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MAX_HEIGHT = 285;

  var _default = _component.default.extend({
    intl: Ember.inject.service(),
    showMessage: false,
    editor: false,
    actions: {
      show: function show() {
        var _this = this;

        if (Ember.get(this, 'showOptions') === true) {
          return;
        }

        var toBottom = $('body').height() - $(this.$()[0]).offset().top - 60; // eslint-disable-line

        Ember.set(this, 'maxHeight', toBottom < MAX_HEIGHT ? toBottom : MAX_HEIGHT);
        Ember.run.next(function () {
          var checked = _this.$('.searchable-option .icon-check');

          var options = _this.$('.searchable-options');

          if (options.length && checked.length) {
            options.animate({
              scrollTop: "".concat(checked.parent().offset().top - options.offset().top, "px")
            });
          }
        });
        Ember.set(this, 'showOptions', true);
      },
      hide: function hide() {
        Ember.setProperties(this, {
          'value': Ember.get(this, 'filter'),
          'showOptions': false,
          '$activeTarget': null
        });
      }
    },
    observeContent: Ember.observer('content.[]', 'value', 'displayLabel', function () {
      if (!Ember.get(this, 'content')) {
        Ember.set(this, 'content', []);
      }

      Ember.set(this, 'interContent', Ember.get(this, 'content').slice(0));

      if (Ember.get(this, 'allowCustom')) {
        Ember.set(this, 'searchLabel', 'generic.searchOrCustomInput');
        var value = Ember.get(this, 'value');
        this.insertCustomValue(value, false);
      }

      if (Ember.get(this, 'displayLabel')) {
        Ember.set(this, 'filter', Ember.get(this, 'displayLabel'));
      }
    }),
    filtered: Ember.computed('filter', 'interContent.[]', function () {
      var _this2 = this;

      Ember.set(this, 'editor', false);
      var filter = (Ember.get(this, 'filter') || '').trim();
      var options = Ember.get(this, 'interContent');
      var operator;

      if (/\((.*)/ig.test(filter)) {
        operator = (/[^\((?:.*)$\)\)]+/ig.exec(filter) || [])[0];
        filter = filter.replace(operator, '');
        filter = filter.replace('(', '');
        filter = filter.replace(')', '');
        Ember.setProperties(this, {
          editor: true,
          operator: operator
        });
      }

      filter = filter.replace(/[\\\.\*\?\+\[\{\|\(\)\^\$]/g, function (match) {
        return "\\".concat(match);
      });

      if (Ember.get(this, 'allowCustom')) {
        this.insertCustomValue(filter, true);
      }

      if (Ember.get(this, 'clientSideFiltering')) {
        var filteredOptionsA = [];
        var filteredOptionsB = [];
        options.forEach(function (option) {
          var filterTerms = filter.split(/\s+/);
          var gp = Ember.get(_this2, 'optionGroupPath');
          var lp = Ember.get(_this2, 'optionLabelPath');
          var group = Ember.get(option, gp);
          var label = Ember.get(option, lp);
          var startsWithOneOfFilterTerm = false;
          var containsEveryFilterTerm = true;
          filterTerms.forEach(function (s) {
            s = s.toLowerCase();
            var startsWith = label.toLowerCase().startsWith(s) || group && group.toLowerCase().startsWith(s);

            if (startsWith) {
              startsWithOneOfFilterTerm = true;
            }

            var pattern = new RegExp(s, 'i');
            var contains = pattern.test(label) || group && group.test(s);

            if (!contains) {
              containsEveryFilterTerm = false;
            }
          });

          if (startsWithOneOfFilterTerm && containsEveryFilterTerm) {
            filteredOptionsA.push(option);
            return;
          }

          if (containsEveryFilterTerm) {
            filteredOptionsB.push(option);
            return;
          }
        });
        return filteredOptionsA.concat(filteredOptionsB);
      } else {
        return options;
      }
    }),
    optionsClass: Ember.computed('unGroupedContent.[]', 'groupedContent.[]', function () {
      var _this$unGroupedConten = this.unGroupedContent,
          unGroupedContent = _this$unGroupedConten === void 0 ? [] : _this$unGroupedConten,
          _this$groupedContent = this.groupedContent,
          groupedContent = _this$groupedContent === void 0 ? [] : _this$groupedContent;

      if (unGroupedContent.length === 0 && groupedContent.length === 0) {
        return 'no-options';
      }
    }),
    setSelect: function setSelect(item) {
      var _this3 = this;

      var gp = Ember.get(this, 'optionGroupPath');
      var vp = Ember.get(this, 'optionValuePath');

      if (Ember.get(this, 'editor')) {
        Ember.setProperties(this, {
          value: "".concat(Ember.get(this, 'operator'), "(").concat(Ember.get(item, vp), ")"),
          filter: "".concat(Ember.get(this, 'operator'), "(").concat(Ember.get(item, vp), ")")
        });
      } else {
        Ember.setProperties(this, {
          value: Ember.get(item, vp),
          filter: Ember.get(this, 'displayLabel')
        });
      }

      if (gp && Ember.get(item, gp)) {
        Ember.set(this, 'group', Ember.get(item, gp));
      }

      Ember.run.next(function () {
        var input = _this3.$('.input-search');

        if (input) {
          input.focus();
          input.blur();
        }
      });

      if (this.change) {
        this.change(item);
      }

      this.send('hide');
    },
    insertCustomValue: function insertCustomValue(value, isFilter) {
      var vp = Ember.get(this, 'optionValuePath');
      var lp = Ember.get(this, 'optionLabelPath');
      value = value || '';

      if (!isFilter) {
        var custom = {
          custom: true
        };
        custom[lp] = "".concat(value);
        custom[vp] = value;
        Ember.set(this, 'filter', value);
      } else {
        var found = Ember.get(this, 'interContent').filterBy('custom', true).get('firstObject');

        if (found) {
          var _EmberSetProperties;

          Ember.setProperties(found, (_EmberSetProperties = {}, _defineProperty(_EmberSetProperties, lp, "".concat(value)), _defineProperty(_EmberSetProperties, vp, value), _EmberSetProperties));
        }
      }
    }
  });

  _exports.default = _default;
});
define("alert/components/alert-table/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var headers = [{
    translationKey: 'generic.state',
    name: 'alertState',
    searchField: 'alertState',
    sort: ['alertState', 'name'],
    width: '120'
  }, {
    translationKey: 'generic.name',
    name: 'name',
    sort: ['name', 'id'],
    searchField: ['name', 'description', 'displayName']
  }, {
    translationKey: 'alertPage.index.table.target',
    name: 'target',
    searchField: ['nodeName', 'resourceKind', 'displayTargetType'],
    sort: ['nodeName', 'resourceKind', 'displayTargetType', 'name']
  }, {
    translationKey: 'alertPage.index.table.condition',
    name: 'displayCondition',
    sort: ['displayCondition', 'id'],
    searchField: ['displayCondition', 'name']
  }, {
    translationKey: 'alertPage.index.table.recipients',
    name: 'recipients',
    searchField: ['recipient', 'firstRecipient'],
    sort: ['displayRecipient', 'name']
  }];

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    // input
    model: null,
    sortBy: 'name',
    headers: headers,
    showNode: true,
    showStats: false,
    showInstanceState: true,
    paging: true,
    bulkActions: true,
    search: true,
    searchText: null,
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    projectId: Ember.computed.reads('scope.currentProject.id'),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    groupsWithoutAlerts: Ember.computed('clusterId', 'projectId', 'groups.@each.{clusterId,projectId}', 'filteredAlerts', 'pageScope', function () {
      var ps = Ember.get(this, 'pageScope');
      var clusterId = Ember.get(this, 'clusterId');
      var projectId = Ember.get(this, 'projectId');
      var groups = Ember.get(this, 'groups') || [];
      var alerts = Ember.get(this, 'filteredAlerts') || [];

      if (ps === 'cluster') {
        groups = groups.filterBy('clusterId', clusterId);
      } else {
        groups = groups.filterBy('projectId', projectId);
      }

      return groups.filter(function (group) {
        return !alerts.findBy('groupId', Ember.get(group, 'id'));
      }).map(function (group) {
        return {
          group: Ember.get(group, 'id')
        };
      });
    }),
    filteredNotifiers: Ember.computed('clusterId', 'notifiers.@each.{clusterId}', function () {
      var clusterId = Ember.get(this, 'clusterId');
      return Ember.get(this, 'notifiers').filterBy('clusterId', clusterId);
    }),
    filteredAlerts: Ember.computed('alerts.@each.{clusterId,projectId}', 'clusterId', 'projectId', 'pageScope', function () {
      var clusterId = Ember.get(this, 'clusterId');
      var projectId = Ember.get(this, 'projectId');
      var ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return Ember.get(this, 'alerts').filterBy('clusterId', clusterId);
      } else {
        return Ember.get(this, 'alerts').filterBy('projectId', projectId);
      }
    })
  });

  _exports.default = _default;
});
define("alert/components/alert-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ma/l5MDH",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"row\",\"dt\",\"group\"],\"statements\":[[4,\"sortable-table\",null,[[\"tableClassNames\",\"classNames\",\"bulkActions\",\"paging\",\"fullRows\",\"search\",\"sortBy\",\"suffix\",\"searchText\",\"descending\",\"headers\",\"groupByKey\",\"groupByRef\",\"body\"],[\"bordered\",\"grid sortable-table\",[23,[\"bulkActions\"]],[23,[\"paging\"]],[23,[\"fullRows\"]],[23,[\"search\"]],[23,[\"sortBy\"]],true,[23,[\"searchText\"]],[23,[\"descending\"]],[23,[\"headers\"]],\"groupId\",\"group\",[23,[\"filteredAlerts\"]]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"row\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"cluster-alert-row\",null,[[\"notifiers\",\"model\",\"dt\",\"canExpand\",\"groups\"],[[23,[\"filteredNotifiers\"]],[22,3,[]],[22,4,[]],false,[23,[\"groups\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"project\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"project-alert-row\",null,[[\"notifiers\",\"model\",\"dt\",\"canExpand\",\"groups\"],[[23,[\"filteredNotifiers\"]],[22,3,[]],[22,4,[]],false,[23,[\"groups\"]]]]],false],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"nomatch\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"alertPage.index.table.noMatch\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"norows\"],null]],null,{\"statements\":[[4,\"unless\",[[23,[\"groupsWithoutAlerts\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[12,\"colspan\",[28,[[22,1,[\"fullColspan\"]]]]],[11,\"class\",\"text-center text-muted pt-20 pb-20\"],[9],[1,[27,\"t\",[\"alertPage.index.table.noData\"],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"group\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"alert/alert-group\",null,[[\"model\",\"fullColspan\",\"groups\",\"noGroup\"],[[22,3,[]],[22,1,[\"fullColspan\"]],[23,[\"groups\"]],\"alertPage.index.table.noGroup\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[]],\"suffix\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"and\",[[23,[\"groupsWithoutAlerts\",\"length\"]],[27,\"not\",[[23,[\"searchText\",\"length\"]]],null]],null]],null,{\"statements\":[[0,\"      \"],[7,\"tbody\"],[11,\"class\",\"fixed grid group\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"groupsWithoutAlerts\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"alert/alert-group\",null,[[\"model\",\"noAlerts\",\"fullColspan\",\"groups\",\"hasOtherGroups\"],[[22,5,[]],true,[22,1,[\"fullColspan\"]],[23,[\"groups\"]],[27,\"not-eq\",[[23,[\"groupsWithoutAlerts\",\"length\"]],[23,[\"groups\",\"length\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1,2,3,4]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert-table/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/alert-group/component", ["exports", "alert/components/alert/alert-group/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    model: null,
    fullColspan: null,
    alignState: 'text-center',
    noGroup: 'namespaceGroup.none',
    groups: [],
    tagName: '',
    noAlerts: false,
    hasOtherGroups: true,
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    group: Ember.computed('model.group', function () {
      var groupId = Ember.get(this, 'model.group');
      var groups = Ember.get(this, 'groups');
      var filter = groups.filter(function (g) {
        return g.id === groupId;
      });
      return Ember.get(filter, 'firstObject');
    })
  });

  _exports.default = _default;
});
define("alert/components/alert/alert-group/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RgSbwdlE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\"],[11,\"class\",\"group-row\"],[9],[0,\"\\n  \"],[7,\"td\"],[12,\"colspan\",[27,\"if\",[[23,[\"hasOtherGroups\"]],[27,\"sub\",[[23,[\"fullColspan\"]],2],null],4],null]],[11,\"class\",\"pl-10\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"group\"]],[23,[\"group\",\"id\"]]],null]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"group\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"t\",[[23,[\"noGroup\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[7,\"p\"],[11,\"class\",\"text-small text-muted m-0\"],[9],[1,[27,\"linkify\",[[23,[\"group\",\"description\"]]],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[11,\"class\",\"text-right\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"new-rule\",[23,[\"group\",\"id\"]]],[[\"class\"],[\"btn bg-primary btn-sm mr-10\"]],{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"alertPage.index.addAlert\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"actions\"]]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"group\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"action-menu\",null,[[\"model\",\"classNames\"],[[23,[\"group\"]],\"inline-block mr-5\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"group\",\"showTransitioningMessage\"]]],null,{\"statements\":[[0,\"  \"],[7,\"tr\"],[11,\"class\",\"group-row group-row-error\"],[9],[0,\"\\n    \"],[7,\"td\"],[12,\"colspan\",[28,[[27,\"if\",[[23,[\"hasOtherGroups\"]],[23,[\"fullColspan\"]],4],null]]]],[12,\"class\",[28,[\"text-small \",[23,[\"group\",\"stateColor\"]]]]],[9],[0,\"\\n      \"],[1,[27,\"uc-first\",[[23,[\"group\",\"transitioningMessage\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"noAlerts\"]]],null,{\"statements\":[[0,\"  \"],[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n    \"],[7,\"td\"],[12,\"colspan\",[28,[[27,\"if\",[[23,[\"hasOtherGroups\"]],[23,[\"fullColspan\"]],6],null]]]],[11,\"class\",\"text-center p-20\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"text-muted\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.index.noAlerts\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/alert-group/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-advanced/component", ["exports", "alert/components/alert/form-advanced/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    advanced: false,
    classNames: ['mt-20'],
    init: function init() {
      this._super.apply(this, arguments);

      var _this$model = this.model,
          model = _this$model === void 0 ? {} : _this$model;

      if (Ember.get(model, 'inherited')) {
        Ember.setProperties(model, {
          groupIntervalSeconds: 180,
          groupWaitSeconds: 30,
          repeatIntervalSeconds: 3600
        });
      }
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-advanced/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "19zDO0NA",
    "block": "{\"symbols\":[],\"statements\":[[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"box\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"level\"]],\"rule\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.label\"],null],false],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"inherited\"]],true]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.enabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"inherited\"]],false]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"generic.disabled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[1,[27,\"alert/form-time-trigger\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-advanced/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-alert-rules/component", ["exports", "alert/components/alert/form-alert-rules/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    condictions: [],
    layout: _template.default,
    editing: true,
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    init: function init() {
      this._super.apply(this, arguments);

      var resourceKinds = Ember.get(this, 'globalStore').getById('schema', 'eventrule').optionsFor('resourceKind').sort().map(function (value) {
        return {
          label: value,
          value: value
        };
      });
      var systemServices = Ember.get(this, 'globalStore').getById('schema', 'systemservicerule').optionsFor('condition').sort().map(function (value) {
        return {
          label: value,
          value: value
        };
      });
      Ember.setProperties(this, {
        resourceKinds: resourceKinds,
        systemServices: systemServices
      });
      var alertRules = Ember.get(this, 'alertRules') || [];

      if (alertRules.length === 0) {
        this.addCondiction();
      }
    },
    actions: {
      addRule: function addRule() {
        var pageScope = Ember.get(this, 'pageScope');
        var newAlert;

        if (pageScope === 'cluster') {
          newAlert = this.getNewClusterAlert();
        } else {
          newAlert = this.getNewProjectAlert();
        }

        Ember.get(this, 'alertRules').pushObject(newAlert);
      },
      removeRule: function removeRule(rule) {
        Ember.get(this, 'alertRules').removeObject(rule);
      }
    },
    nodes: Ember.computed('clusterId', function () {
      var clusterId = Ember.get(this, 'clusterId');
      return Ember.get(this, 'globalStore').all('node').filterBy('clusterId', clusterId);
    }),
    addCondiction: function addCondiction() {
      this.send('addRule');
    },
    getNewClusterAlert: function getNewClusterAlert() {
      var gs = Ember.get(this, 'globalStore');
      var clusterId = Ember.get(this, 'scope.currentCluster.id');
      var nodeRule = gs.createRecord({
        type: 'nodeRule'
      });
      var systemServiceRule = gs.createRecord({
        type: 'systemServiceRule'
      });
      var eventRule = gs.createRecord({
        type: 'eventRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'clusterAlertRule',
        clusterId: clusterId,
        nodeRule: nodeRule,
        eventRule: eventRule,
        systemServiceRule: systemServiceRule,
        metricRule: metricRule,
        severity: 'critical',
        inherited: true,
        groupIntervalSeconds: 180,
        groupWaitSeconds: 30,
        repeatIntervalSeconds: 3600
      };
      var newAlert = gs.createRecord(opt);
      return newAlert;
    },
    getNewProjectAlert: function getNewProjectAlert() {
      var gs = Ember.get(this, 'globalStore');
      var projectId = Ember.get(this, 'scope.currentProject.id');
      var podRule = gs.createRecord({
        type: 'podRule'
      });
      var workloadRule = gs.createRecord({
        type: 'workloadRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'projectAlertRule',
        projectId: projectId,
        initialWaitSeconds: 180,
        repeatIntervalSeconds: 3600,
        targetName: '',
        inherited: true,
        groupIntervalSeconds: 180,
        groupWaitSeconds: 30,
        podRule: podRule,
        workloadRule: workloadRule,
        metricRule: metricRule
      };
      var newAlert = gs.createRecord(opt);
      return newAlert;
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-alert-rules/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2ImdrJUO",
    "block": "{\"symbols\":[\"alertRule\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.alertRule\"],null],false],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"monitoringEnabled\"]]],null,{\"statements\":[[4,\"banner-message\",null,[[\"color\"],[\"bg-info mb-10 mt-10\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.monitoringDisabled\"],null],false],[0,\" \"],[4,\"link-to-external\",[\"authenticated.cluster.monitoring.cluster-setting\"],null,{\"statements\":[[0,\" \"],[1,[27,\"t\",[\"alertPage.newOrEdit.enableMonitoring\"],null],false],[0,\" \"]],\"parameters\":[]},null],[0,\".\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.monitoringDisabled\"],null],false],[0,\" \"],[4,\"link-to-external\",[\"authenticated.project.monitoring.project-setting\"],null,{\"statements\":[[0,\" \"],[1,[27,\"t\",[\"alertPage.newOrEdit.enableMonitoring\"],null],false],[0,\" \"]],\"parameters\":[]},null],[0,\".\"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"mb-10 pt-5\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"alertRules\"]]],[[\"key\"],[\"id\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"alert/form-cluster-rule-row\",null,[[\"removeRule\",\"alertRules\",\"editing\",\"pageScope\",\"isCreate\",\"model\",\"monitoringEnabled\",\"metrics\",\"alertGroup\",\"mode\",\"level\"],[[27,\"action\",[[22,0,[]],\"removeRule\"],null],[23,[\"alertRules\"]],[23,[\"editing\"]],[23,[\"pageScope\"]],[23,[\"isCreate\"]],[22,1,[]],[23,[\"monitoringEnabled\"]],[23,[\"metrics\"]],[23,[\"alertGroup\"]],[23,[\"mode\"]],[23,[\"level\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"alert/form-project-rule-row\",null,[[\"removeRule\",\"condition\",\"alertRules\",\"editing\",\"pageScope\",\"isCreate\",\"model\",\"monitoringEnabled\",\"metrics\",\"alertGroup\",\"mode\",\"level\"],[[27,\"action\",[[22,0,[]],\"removeRule\"],null],[22,1,[]],[23,[\"alertRules\"]],[23,[\"editing\"]],[23,[\"pageScope\"]],[23,[\"isCreate\"]],[22,1,[]],[23,[\"monitoringEnabled\"]],[23,[\"metrics\"]],[23,[\"alertGroup\"]],[23,[\"mode\"]],[23,[\"level\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"p-20\"],[9],[1,[27,\"t\",[\"formIngress.noRules\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn pull-right\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[10],[0,\"\\n    \"],[7,\"span\"],[9],[1,[27,\"t\",[\"alertPage.index.addAlert\"],null],false],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"addRule\"]],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-alert-rules/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-cluster-rule-row/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    chartOption: null,
    monitoringEnabled: false,
    condition: null,
    graphLoading: null,
    graphStatus: null,
    showAdvancedSection: false,
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    init: function init() {
      this._super.apply(this, arguments);

      var resourceKinds = Ember.get(this, 'globalStore').getById('schema', 'eventrule').optionsFor('resourceKind').sort().map(function (value) {
        return {
          label: value,
          value: value
        };
      });
      var systemServices = Ember.get(this, 'globalStore').getById('schema', 'systemservicerule').optionsFor('condition').sort().map(function (value) {
        return {
          label: value,
          value: value
        };
      });
      Ember.setProperties(this, {
        resourceKinds: resourceKinds,
        systemServices: systemServices
      });
      Ember.set(this, 'chartOption', Ember.get(this, 'chartOption'));
      this.expressionChange();
    },
    actions: {
      showAdvanced: function showAdvanced() {
        Ember.set(this, 'showAdvancedSection', true);
      }
    },
    targetTypeChanged: Ember.observer('model._targetType', function () {
      var t = Ember.get(this, 'model._targetType');
      this.setEventType(t);
    }),
    expressionChange: Ember.observer('model.metricRule.expression', function () {
      var _this = this;

      if (!Ember.get(this, 'monitoringEnabled')) {
        return;
      }

      var expression = Ember.get(this, 'model.metricRule.expression');
      var globalStore = Ember.get(this, 'globalStore');
      var clusterId = Ember.get(this, 'scope.currentCluster.id');

      if (expression) {
        Ember.set(this, 'graphLoading', true);
        globalStore.rawRequest({
          url: "monitormetrics?action=querycluster",
          method: 'POST',
          data: {
            expr: expression,
            from: 'now-24h',
            interval: '300s',
            to: 'now',
            clusterId: clusterId
          }
        }).then(function (res) {
          if (res.body) {
            var body = JSON.parse(res.body);
            var _body$series = body.series,
                series = _body$series === void 0 ? [] : _body$series;
            Ember.setProperties(_this, {
              chartOption: {
                series: series
              },
              graphStatus: 'success'
            });
          } else {
            Ember.set(_this, 'graphStatus', 'noData');
          }
        }).catch(function () {
          Ember.set(_this, 'graphStatus', 'error');
        }).finally(function () {
          Ember.set(_this, 'graphLoading', false);
        });
      }
    }),
    models: Ember.computed('model', function () {
      return [Ember.get(this, 'model')];
    }),
    metricsContent: Ember.computed('metrics.[]', function () {
      var metrics = Ember.get(this, 'metrics') || [];
      return metrics.map(function (m) {
        return {
          label: m,
          value: m
        };
      });
    }),
    nodes: Ember.computed('clusterId', function () {
      var clusterId = Ember.get(this, 'clusterId');
      return Ember.get(this, 'globalStore').all('node').filterBy('clusterId', clusterId);
    }),
    isEventTarget: Ember.computed('model._targetType', function () {
      var t = Ember.get(this, 'model._targetType');
      return t === 'warningEvent' || t === 'normalEvent';
    }),
    verbStyles: Ember.computed('model._targetType', function () {
      var tt = Ember.get(this, 'model._targetType');
      var out = '';

      if (tt === 'node' || tt === 'nodeSelector') {
        out = "padding-top: 6px;";
      }

      return Ember.String.htmlSafe(out);
    }),
    canRemoveRule: Ember.computed('alertRules.[]', 'isCreate', 'editRule', function () {
      var alertRules = Ember.get(this, 'alertRules') || [];
      var isCreate = Ember.get(this, 'isCreate');
      var editRule = Ember.get(this, 'editRule');

      if (alertRules.length > 1 && isCreate && !editRule) {
        return true;
      }

      return false;
    }),
    expressionStyle: Ember.computed('monitoringEnabled', function () {
      var out = Ember.get(this, 'monitoringEnabled') ? '' : 'color: #bfbfbf;';
      return Ember.String.htmlSafe(out);
    }),
    setEventType: function setEventType(t) {
      if (t === 'warningEvent') {
        Ember.set(this, 'model.eventRule.eventType', 'Warning');
      }

      if (t === 'normalEvent') {
        Ember.set(this, 'model.eventRule.eventType', 'Normal');
      }
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-cluster-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NWNd7hKz",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"editing\"]],[27,\"gt\",[[23,[\"alertRules\",\"length\"]],1],null]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"canRemoveRule\"]]],null,{\"statements\":[[0,\"          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.removeAlert\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],[23,[\"removeRule\"]],[23,[\"model\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[2,\" 28px is the height of the button, no jumpy \"],[0,\"\\n      \"],[7,\"div\"],[11,\"style\",\"height: 28px;\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"formNameDescription.name.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[23,[\"model\",\"name\"]],[27,\"t\",[\"formNameDescription.name.placeholder\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.whenAn\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.whenA\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"systemService\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.systemService\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-9 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"placeholder\",\"readOnly\"],[[23,[\"systemServices\"]],\"form-control\",[23,[\"model\",\"systemServiceRule\",\"condition\"]],[27,\"t\",[\"alertPage.newOrEdit.systemServicePlaceholder\"],null],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"systemService\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"pr-10\"],[9],[0,\"\\n              \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"normalEvent\"]]],false],[0,\"\\n              \"],[1,[27,\"t\",[\"alertPage.newOrEdit.normal\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"warningEvent\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.warning\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-9 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"placeholder\",\"readOnly\"],[[23,[\"resourceKinds\"]],\"form-control\",[23,[\"model\",\"eventRule\",\"resourceKind\"]],[27,\"t\",[\"alertPage.newOrEdit.resourcePlaceholder\"],null],[27,\"not-eq\",[[23,[\"isEventTarget\"]],true],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"alertPage.targetTypes.event\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"node\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.node\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-9 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"optionValuePath\",\"optionLabelPath\",\"placeholder\",\"readOnly\"],[[23,[\"nodes\"]],\"form-control\",[23,[\"model\",\"nodeRule\",\"nodeId\"]],\"id\",\"displayName\",[27,\"t\",[\"alertPage.newOrEdit.nodePlaceholder\"],null],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"node\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"nodeSelector\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.nodeSelector\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-9 mt-0\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"nodeSelector\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"form-key-value\",null,[[\"addActionLabel\",\"initialMap\",\"changed\"],[\"alertPage.addSelectorLabel\",[23,[\"model\",\"nodeRule\",\"selector\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"nodeRule\",\"selector\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"style\",\"cursor:not-allowed;\"],[11,\"class\",\"btn bg-disabled icon-btn\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"span\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"alertPage.addSelectorLabel\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"noop\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-2\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[12,\"style\",[21,\"expressionStyle\"]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"model\",\"_targetType\"]],\"metric\",[27,\"not\",[[23,[\"monitoringEnabled\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-9 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"alert-select\",null,[[\"content\",\"class\",\"value\",\"readOnly\",\"placeholder\",\"allowCustom\"],[[23,[\"metricsContent\"]],\"form-control\",[23,[\"model\",\"metricRule\",\"expression\"]],[27,\"or\",[[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null],[23,[\"graphLoading\"]]],null],\"Select a metric\",true]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"noData\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"text-error text-small mt-0 mb-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.noData\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"error\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"text-error text-small mt-0 mb-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.error\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[7,\"div\"],[12,\"style\",[21,\"verbStyles\"]],[9],[0,\"\\n        \"],[1,[27,\"if\",[[23,[\"isEventTarget\"]],[27,\"t\",[\"alertPage.newOrEdit.happens\"],null],[27,\"t\",[\"alertPage.newOrEdit.is\"],null]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"alert/form-comparison-row\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n      \"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[1,[27,\"alert-chart\",null,[[\"key\",\"series\",\"loading\",\"threshold\",\"tag\"],[[23,[\"model\",\"id\"]],[23,[\"chartOption\",\"series\"]],[23,[\"graphLoading\"]],[23,[\"model\",\"metricRule\",\"thresholdValue\"]],[23,[\"model\",\"tag\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"systemService\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[\"whatever\",\"whatever\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.unhealthy\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"node\"],null],[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"nodeSelector\"],null]],null]],null,{\"statements\":[[0,\"          \"],[7,\"label\"],[11,\"class\",\"acc-label pr-20\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"nodeRule\",\"condition\"]],\"notready\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.notReady\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"acc-label pr-10\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"nodeRule\",\"condition\"]],\"cpu\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.cpuUsage\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"style\",\"display:inline-block;width:60px;\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"disabled\",\"min\",\"value\"],[\"form-contorl input-sm\",[27,\"not-eq\",[[23,[\"model\",\"nodeRule\",\"condition\"]],\"cpu\"],null],1,[23,[\"model\",\"nodeRule\",\"cpuThreshold\"]]]]],false],[0,\"\\n          \"],[10],[0,\"%\\n\\n          \"],[7,\"label\"],[11,\"class\",\"ml-20 acc-label pr-20\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"nodeRule\",\"condition\"]],\"mem\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.memUsage\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"style\",\"display:inline-block;width:60px;\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"disabled\",\"min\",\"max\",\"value\"],[\"form-contorl input-sm\",[27,\"not-eq\",[[23,[\"model\",\"nodeRule\",\"condition\"]],\"mem\"],null],1,100,[23,[\"model\",\"nodeRule\",\"memThreshold\"]]]]],false],[0,\"\\n          \"],[10],[0,\"%\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"alertPage.newOrEdit.sendA\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"critical\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.critical\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"warning\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.warning\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"info\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.info\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"mode\"]],\"new\"],null],[27,\"eq\",[[23,[\"level\"]],\"group\"],null]],null]],null,{\"statements\":[[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-10 offset-1\"],[9],[0,\"\\n            \"],[1,[27,\"alert/form-row-advanced\",null,[[\"model\",\"alertGroup\",\"level\",\"customClass\"],[[23,[\"model\"]],[23,[\"alertGroup\"]],\"rule\",\"box\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"mode\"]],\"edit\"],null],[27,\"eq\",[[23,[\"level\"]],\"group\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-10 offset-1\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"showAdvancedSection\"]]],null,{\"statements\":[[0,\"          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"inherited\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.enabled\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.disabled\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small p-0\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-edit\"],[9],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"showAdvanced\"]],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"alert/form-row-advanced\",null,[[\"model\",\"alertGroup\"],[[23,[\"model\"]],[23,[\"alertGroup\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"level\"]],\"rule\"],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"alert/form-advanced\",null,[[\"model\",\"alertGroup\",\"level\"],[[23,[\"model\"]],[23,[\"alertGroup\"]],[23,[\"level\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-cluster-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-comparison-row/component", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    comparisonObserver: Ember.on('init', Ember.observer('model.metricRule.comparison', function () {
      if (Ember.get(this, 'model.metricRule.comparison') === Ember.get(this, 'hasValue')) {
        Ember.set(this, 'model.metricRule.thresholdValue', null);
      }
    })),
    verbStyles: Ember.computed('model._targetType', function () {
      var targetType = Ember.get(this, 'model._targetType');
      var arr = ['pod', 'workload', 'workloadSelector', 'node', 'nodeSelector'];
      var out = '';

      if (arr.includes(targetType)) {
        out = "padding-top: 6px;";
      }

      return Ember.String.htmlSafe(out);
    }),
    operatorContent: Ember.computed(function () {
      var _this = this;

      return Object.values(_constants.default.ALERTING_COMPARISON).map(function (value) {
        return {
          label: Ember.get(_this, 'intl').t("alertPage.comparison.".concat(value)),
          value: value
        };
      });
    }),
    hasValue: _constants.default.ALERTING_COMPARISON.HAS_VALUE,
    durationContent: _constants.default.ALERT_DURATION
  });

  _exports.default = _default;
});
define("alert/components/alert/form-comparison-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gSorEKss",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-2 mt-5\"],[9],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"readOnly\"],[[23,[\"operatorContent\"]],\"form-control\",[23,[\"model\",\"metricRule\",\"comparison\"]],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-2 mt-5\"],[9],[0,\"\\n\"],[4,\"unless\",[[27,\"eq\",[[23,[\"model\",\"metricRule\",\"comparison\"]],[23,[\"hasValue\"]]],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"input-number\",null,[[\"class\",\"value\",\"readOnly\",\"placeholder\",\"min\"],[\"form-control\",[23,[\"model\",\"metricRule\",\"thresholdValue\"]],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null],\"e.g. 10\",0]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"style\",[21,\"verbStyles\"]],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"alertPage.newOrEdit.for\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-5\"],[9],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"readOnly\"],[[23,[\"durationContent\"]],\"form-control\",[23,[\"model\",\"metricRule\",\"duration\"]],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-comparison-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-project-rule-row/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    restartIntervalSeconds: null,
    graphStatus: null,
    projectId: Ember.computed.reads('scope.currentProject.id'),
    init: function init() {
      this._super.apply(this, arguments);

      var n = Ember.get(this, 'model.podRule.restartIntervalSeconds') / 60 || 5;
      Ember.set(this, 'restartIntervalSeconds', n);
      Ember.set(this, 'model.podRule.restartIntervalSeconds', n * 60);
      this.expressionChange();
    },
    actions: {
      showAdvanced: function showAdvanced() {
        Ember.set(this, 'showAdvancedSection', true);
      }
    },
    expressionChange: Ember.observer('model.metricRule.expression', function () {
      var _this = this;

      if (!Ember.get(this, 'monitoringEnabled')) {
        return;
      }

      var expression = Ember.get(this, 'model.metricRule.expression');
      var globalStore = Ember.get(this, 'globalStore');
      var projectId = Ember.get(this, 'scope.currentProject.id');

      if (expression) {
        Ember.set(this, 'graphLoading', true);
        globalStore.rawRequest({
          url: "monitormetrics?action=queryproject",
          method: 'POST',
          data: {
            expr: expression,
            from: 'now-24h',
            interval: '300s',
            to: 'now',
            projectId: projectId
          }
        }).then(function (res) {
          if (res.body) {
            var body = JSON.parse(res.body);
            var _body$series = body.series,
                series = _body$series === void 0 ? [] : _body$series;
            Ember.setProperties(_this, {
              chartOption: {
                series: series
              },
              graphStatus: 'success'
            });
          } else {
            Ember.set(_this, 'graphStatus', 'noData');
          }
        }).catch(function () {
          Ember.set(_this, 'graphStatus', 'error');
        }).finally(function () {
          Ember.set(_this, 'graphLoading', false);
        });
      }
    }),
    restartIntervalSecondsChanged: Ember.observer('restartIntervalSeconds', function () {
      var n = +Ember.get(this, 'restartIntervalSeconds') || 5;
      Ember.set(this, 'model.podRule.restartIntervalSeconds', n * 60);
    }),
    pods: Ember.computed('projectId', function () {
      var projectId = Ember.get(this, 'projectId');
      return Ember.get(this, 'store').all('pod').filterBy('projectId', projectId);
    }),
    workloads: Ember.computed('projectId', function () {
      var projectId = Ember.get(this, 'projectId');
      return Ember.get(this, 'store').all('workload').filterBy('projectId', projectId);
    }),
    metricsContent: Ember.computed('metrics.[]', function () {
      var metrics = Ember.get(this, 'metrics') || [];
      return metrics.map(function (m) {
        return {
          label: m,
          value: m
        };
      });
    }),
    expressionStyle: Ember.computed('monitoringEnabled', function () {
      var out = Ember.get(this, 'monitoringEnabled') ? '' : 'color: #bfbfbf;';
      return Ember.String.htmlSafe(out);
    })
  });

  _exports.default = _default;
});
define("alert/components/alert/form-project-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rGk7wqCE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"box mb-10\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[23,[\"editing\"]],[27,\"gt\",[[23,[\"alertRules\",\"length\"]],1],null]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"gt\",[[23,[\"alertRules\",\"length\"]],1],null],[23,[\"isCreate\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small vertical-middle\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.removeAlert\"],null],false],[0,\"\\n          \"],[3,\"action\",[[22,0,[]],[23,[\"removeRule\"]],[23,[\"model\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[2,\" 28px is the height of the button, no jumpy \"],[0,\"\\n      \"],[7,\"div\"],[11,\"style\",\"height: 28px;\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"t\",[\"formNameDescription.name.label\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[23,[\"model\",\"name\"]],[27,\"t\",[\"formNameDescription.name.placeholder\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"text-right pt-10\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.whenAn\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.whenA\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"pod\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.pod\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-8 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"optionValuePath\",\"optionLabelPath\",\"placeholder\",\"readOnly\"],[[23,[\"pods\"]],\"form-control\",[23,[\"model\",\"podRule\",\"podId\"]],\"id\",\"displayName\",[27,\"t\",[\"alertPage.newOrEdit.podPlaceholder\"],null],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"pod\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"workload\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.workload\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-8 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"searchable-select\",null,[[\"content\",\"class\",\"value\",\"optionValuePath\",\"optionLabelPath\",\"placeholder\",\"readOnly\"],[[23,[\"workloads\"]],\"form-control\",[23,[\"model\",\"workloadRule\",\"workloadId\"]],\"id\",\"displayName\",[27,\"t\",[\"alertPage.newOrEdit.resourcePlaceholder\"],null],[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"workload\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"_targetType\"]],\"workloadSelector\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.targetTypes.workloadSelector\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-8 mt-0\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"workloadSelector\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"form-key-value\",null,[[\"addActionLabel\",\"initialMap\",\"changed\"],[\"alertPage.addSelectorLabel\",[23,[\"model\",\"workloadRule\",\"selector\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"workloadRule\",\"selector\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"style\",\"cursor:not-allowed;\"],[11,\"class\",\"btn bg-disabled icon-btn\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"span\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"alertPage.addSelectorLabel\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"noop\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-3\"],[9],[0,\"\\n          \"],[7,\"label\"],[12,\"style\",[21,\"expressionStyle\"]],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\",\"disabled\"],[[23,[\"model\",\"_targetType\"]],\"metric\",[27,\"not\",[[23,[\"monitoringEnabled\"]]],null]]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col span-8 mt-0\"],[9],[0,\"\\n          \"],[1,[27,\"alert-select\",null,[[\"content\",\"class\",\"value\",\"readOnly\",\"placeholder\",\"allowCustom\"],[[23,[\"metricsContent\"]],\"form-control\",[23,[\"model\",\"metricRule\",\"expression\"]],[27,\"or\",[[27,\"not-eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null],[23,[\"graphLoading\"]]],null],\"Select a metric\",true]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"noData\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"text-error text-small mt-0 mb-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.noData\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"error\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"text-error text-small mt-0 mb-0\"],[9],[0,\"\\n              \"],[1,[27,\"t\",[\"alertPage.newOrEdit.expression.error\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[7,\"div\"],[12,\"style\",[21,\"verbStyles\"]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.is\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"metric\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"alert/form-comparison-row\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"graphStatus\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"hr\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[1,[27,\"alert-chart\",null,[[\"key\",\"series\",\"loading\",\"threshold\",\"tag\"],[[23,[\"model\",\"id\"]],[23,[\"chartOption\",\"series\"]],[23,[\"graphLoading\"]],[23,[\"model\",\"metricRule\",\"thresholdValue\"]],[23,[\"model\",\"tag\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"pod\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"podRule\",\"condition\"]],\"notrunning\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.notRunning\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"podRule\",\"condition\"]],\"notscheduled\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.notScheduled\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"label\"],[9],[0,\"\\n            \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"podRule\",\"condition\"]],\"restarts\"]]],false],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.restarted\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"style\",\"display:inline-block;width:80px;\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"disabled\",\"placeholder\",\"min\",\"value\"],[\"form-contorl input-sm\",[27,\"not-eq\",[[23,[\"model\",\"podRule\",\"condition\"]],\"restarts\"],null],\"3\",1,[23,[\"model\",\"podRule\",\"restartTimes\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"t\",[\"alertPage.newOrEdit.restartedTimes\"],null],false],[0,\"\\n          \"],[7,\"div\"],[11,\"style\",\"display:inline-block;width:80px;\"],[9],[0,\"\\n            \"],[1,[27,\"input-integer\",null,[[\"classNames\",\"disabled\",\"placeholder\",\"min\",\"value\"],[\"form-contorl input-sm\",[27,\"not-eq\",[[23,[\"model\",\"podRule\",\"condition\"]],\"restarts\"],null],\"5\",1,[23,[\"restartIntervalSeconds\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[1,[27,\"t\",[\"alertPage.newOrEdit.minutes\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"workload\"],null],[27,\"eq\",[[23,[\"model\",\"_targetType\"]],\"workloadSelector\"],null]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-1 mt-0\"],[9],[0,\"\\n              \"],[7,\"div\"],[12,\"style\",[21,\"verbStyles\"]],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"alertPage.newOrEdit.lessThan\"],null],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col span-6 mt-0\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[1,[27,\"input-slider\",null,[[\"value\",\"valueMin\",\"valueMax\",\"step\"],[[23,[\"model\",\"workloadRule\",\"availablePercentage\"]],0,100,1]]],false],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"input-group-addon\"],[9],[0,\"\\n                  \"],[1,[23,[\"model\",\"workloadRule\",\"availablePercentage\"]],false],[0,\"% \"],[1,[27,\"t\",[\"alertPage.newOrEdit.available\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"div\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.moreTarget\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-1 text-right\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"alertPage.newOrEdit.sendA\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"critical\"]]],false],[0,\"\\n          \"],[1,[27,\"t\",[\"alertPage.newOrEdit.critical\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"warning\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.warning\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"mr-10\"],[9],[0,\"\\n        \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"severity\"]],\"info\"]]],false],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.info\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"mode\"]],\"new\"],null],[27,\"eq\",[[23,[\"level\"]],\"group\"],null]],null]],null,{\"statements\":[[4,\"advanced-section\",null,[[\"advanced\"],[[23,[\"advanced\"]]]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col span-10 offset-1\"],[9],[0,\"\\n            \"],[1,[27,\"alert/form-row-advanced\",null,[[\"model\",\"alertGroup\",\"level\",\"customClass\"],[[23,[\"model\"]],[23,[\"alertGroup\"]],\"rule\",\"box\"]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"mode\"]],\"edit\"],null],[27,\"eq\",[[23,[\"level\"]],\"group\"],null]],null]],null,{\"statements\":[[0,\"    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col span-10 offset-1\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"showAdvancedSection\"]]],null,{\"statements\":[[0,\"          \"],[7,\"label\"],[11,\"class\",\"acc-label mt-20\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.label\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"inherited\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.enabled\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"t\",[\"generic.disabled\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[7,\"button\"],[11,\"class\",\"btn bg-transparent text-small p-0\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"icon icon-edit\"],[9],[10],[0,\"\\n            \"],[3,\"action\",[[22,0,[]],\"showAdvanced\"]],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"alert/form-row-advanced\",null,[[\"model\",\"alertGroup\"],[[23,[\"model\"]],[23,[\"alertGroup\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"level\"]],\"rule\"],null]],null,{\"statements\":[[0,\"  \"],[1,[27,\"alert/form-advanced\",null,[[\"model\",\"alertGroup\",\"level\"],[[23,[\"model\"]],[23,[\"alertGroup\"]],[23,[\"level\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-project-rule-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-recipient-item/component", ["exports"], function (_exports) {
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
    setRecipient: Ember.observer('selectedNotifier.{notifierValue,notifierType}', function () {
      var v = Ember.get(this, 'selectedNotifier.notifierValue');
      var t = Ember.get(this, 'selectedNotifier.notifierType');
      Ember.set(this, 'model.recipient', v);
      Ember.set(this, 'model.notifierType', t);
    }),
    selectedNotifier: Ember.computed('model.notifierId', 'notifiers.[]', function () {
      return Ember.get(this, 'notifiers').filterBy('id', Ember.get(this, 'model.notifierId')).get('firstObject');
    }),
    remove: function remove() {
      throw new Error('remove action is required!');
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-recipient-item/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5KwQlvd9",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label col span-1-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"if\",[[23,[\"isFirst\"]],[27,\"t\",[\"alertPage.newOrEdit.to\"],null],[27,\"t\",[\"alertPage.newOrEdit.and\"],null]],null],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-9-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"searchable-select\",null,[[\"content\",\"value\",\"optionValuePath\",\"optionLabelPath\",\"placeholder\"],[[23,[\"notifiers\"]],[23,[\"model\",\"notifierId\"]],\"id\",\"displayNameAndType\",[27,\"t\",[\"alertPage.newOrEdit.notifierPlaceholder\"],null]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col text-center text-centerpt-0 span-3-of-24\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"selectedNotifier\",\"notifierLabel\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"selectedNotifier\",\"notifierLabel\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"span\"],[11,\"class\",\"text-muted\"],[9],[0,\" \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-9-of-24\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"classNames\",\"placeholder\",\"value\",\"showSearch\"],[\"form-control\",[23,[\"recipientPlaceholder\"]],[23,[\"model\",\"recipient\"]],[23,[\"showSearch\"]]]]],false],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"help-block text-info text-small\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.recipient.helpText\"],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"col mt-0 span-1-of-24\"],[11,\"style\",\"padding-top:2px;\"],[9],[0,\"\\n    \"],[7,\"button\"],[12,\"class\",[28,[\"btn bg-link icon-btn \",[27,\"if\",[[23,[\"disableRemove\"]],\"disabled\",\"\"],null]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-minus text-small\"],[9],[10],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"remove\"]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-recipient-item/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-recipients/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    init: function init() {
      this._super.apply(this, arguments);

      var recipients = Ember.get(this, 'model.recipients');

      if (!recipients) {
        Ember.set(this, 'model.recipients', []);
        this.addNewRecipient();
      }
    },
    actions: {
      add: function add() {
        this.addNewRecipient();
      },
      remove: function remove(recipient) {
        Ember.get(this, 'model.recipients').removeObject(recipient);
      }
    },
    notifiers: Ember.computed('clusterId', function () {
      var clusterId = Ember.get(this, 'clusterId');
      return Ember.get(this, 'globalStore').all('notifier').filterBy('clusterId', clusterId);
    }),
    haveNotifiers: Ember.computed('notifiers.length', function () {
      return Ember.get(this, 'notifiers.length');
    }),
    addNewRecipient: function addNewRecipient() {
      var nue = {
        notifierType: null,
        notifierId: null,
        recipient: null
      };
      Ember.get(this, 'model.recipients').pushObject(nue);
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-recipients/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yqzMcMCc",
    "block": "{\"symbols\":[\"recipient\",\"idx\"],\"statements\":[[4,\"unless\",[[23,[\"haveNotifiers\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"banner bg-warning\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"banner-icon p-10\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-alert\"],[9],[10],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"banner-message\"],[9],[0,\"\\n      \"],[1,[27,\"t\",[\"alertPage.newOrEdit.noNotifierHelpText\"],null],false],[0,\" \"],[4,\"link-to-external\",[\"notifier\",[23,[\"clusterId\"]]],null,{\"statements\":[[0,\" \"],[1,[27,\"t\",[\"alertPage.newOrEdit.createOne\"],null],false]],\"parameters\":[]},null],[0,\".\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"section\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-1\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"recipients\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"pt-10\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.alert\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-10\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"recipients\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"alert/form-recipient-item\",null,[[\"remove\",\"isFirst\",\"notifiers\",\"model\"],[[27,\"action\",[[22,0,[]],\"remove\"],null],[27,\"eq\",[[22,2,[]],0],null],[23,[\"notifiers\"]],[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"mt-15\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"btn bg-link icon-btn p-0\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"darken\"],[9],[7,\"i\"],[11,\"class\",\"icon icon-plus text-small\"],[9],[10],[10],[0,\"\\n        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.addRecipient\"],null],false],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"add\"]],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-recipients/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-row-advanced/component", ["exports", "alert/components/alert/form-advanced/component", "alert/components/alert/form-row-advanced/template"], function (_exports, _component, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    layout: _template.default,
    advanced: false
  });

  _exports.default = _default;
});
define("alert/components/alert/form-row-advanced/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DS37CDo0",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"customClass\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.label\"],null],false],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"inherited\"]],true]]],false],[0,\"\\n      \"],[1,[27,\"t\",[\"alertPage.newOrEdit.inherited.enabled\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"radio\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"\\n      \"],[1,[27,\"radio-button\",null,[[\"selection\",\"value\"],[[23,[\"model\",\"inherited\"]],false]]],false],[0,\"\\n      \"],[1,[27,\"t\",[\"generic.disabled\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"alert/form-time-trigger\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-row-advanced/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/form-time-trigger/component", ["exports", "alert/components/alert/form-time-trigger/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default
  });

  _exports.default = _default;
});
define("alert/components/alert/form-time-trigger/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nYB2QNKF",
    "block": "{\"symbols\":[],\"statements\":[[4,\"unless\",[[23,[\"model\",\"inherited\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.groupWaitSeconds.label\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"alert/time-duration\",null,[[\"value\"],[[23,[\"model\",\"groupWaitSeconds\"]]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.groupWaitSeconds.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 offset-2 mt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.groupIntervalSeconds.label\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"alert/time-duration\",null,[[\"value\"],[[23,[\"model\",\"groupIntervalSeconds\"]]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.groupIntervalSeconds.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col span-4 mt-0\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"class\",\"acc-label\"],[9],[1,[27,\"t\",[\"alertPage.newOrEdit.repeatIntervalSeconds.label\"],null],false],[10],[0,\"\\n      \"],[1,[27,\"alert/time-duration\",null,[[\"value\"],[[23,[\"model\",\"repeatIntervalSeconds\"]]]]],false],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-info text-small mb-0\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"alertPage.newOrEdit.repeatIntervalSeconds.helpText\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/form-time-trigger/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/new-edit/component", ["exports", "ui/mixins/new-or-edit", "alert/mixins/alert-rule"], function (_exports, _newOrEdit, _alertRule) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_newOrEdit.default, _alertRule.default, {
    router: Ember.inject.service(),
    intl: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    showAdvanced: false,
    errors: null,
    pods: null,
    workloads: null,
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    newAlert: Ember.computed.alias('resourceMap.newAlert'),
    metrics: Ember.computed.alias('resourceMap.metrics'),
    alertGroup: Ember.computed.alias('resourceMap.alertGroup'),
    alertRules: Ember.computed.alias('resourceMap.alertRules'),
    mode: Ember.computed.alias('resourceMap.mode'),
    level: Ember.computed.alias('resourceMap.level'),
    actions: {
      showAdvanced: function showAdvanced() {
        this.set('showAdvanced', true);
      },
      save: function save(cb) {
        Ember.set(this, 'errors', null);
        var ps = Ember.get(this, 'pageScope');
        var toSaveAlert;
        var errors = Ember.get(this, 'errors') || [];

        if (ps === 'cluster') {
          toSaveAlert = Ember.get(this, 'alertGroup').clone();
          Ember.set(toSaveAlert, 'clusterId', Ember.get(this, 'scope.currentCluster.id'));
        } else {
          toSaveAlert = Ember.get(this, 'alertGroup').clone();
          Ember.set(toSaveAlert, 'projectId', Ember.get(this, 'scope.currentProject.id'));
        }

        Ember.set(this, 'errors', errors);

        if (Ember.get(this, 'errors') && Ember.get(this, 'errors').length > 0) {
          cb();
          return;
        }

        toSaveAlert = this.willSaveMetricRule(toSaveAlert);
        Ember.set(toSaveAlert, 'recipients', (Ember.get(toSaveAlert, 'recipients') || []).filter(function (r) {
          return !!r.notifierId;
        }));
        Ember.set(this, 'primaryResource', toSaveAlert);

        this._super(cb);
      },
      cancel: function cancel() {
        var ps = Ember.get(this, 'pageScope');
        var router = Ember.get(this, 'router');

        if (ps === 'cluster') {
          router.transitionTo('authenticated.cluster.alert.index');
        } else {
          router.transitionTo('authenticated.project.alert.index');
        }
      }
    },
    initialWaitSecondsObersver: Ember.observer('newAlert._targetType', 'newAlert.eventRule.resourceKind', function () {
      var rk = Ember.get(this, 'newAlert.eventRule.resourceKind');
      var t = Ember.get(this, 'newAlert._targetType');

      if (t === 'normalEvent' && rk === 'Pod') {
        Ember.set(this, 'newAlert.initialWaitSeconds', 1);
      }
    }),
    didSave: function didSave(group) {
      var _this = this;

      var ps = Ember.get(this, 'pageScope');
      var alertRules = Ember.get(this, 'alertRules').map(function (a) {
        var newAlert = {};

        if (ps === 'cluster') {
          newAlert = _this.beforeSaveClusterAlert(a, group);
        } else {
          newAlert = _this.beforeSaveProjectAlert(a, group);
        }

        return newAlert;
      });
      return Ember.RSVP.all(alertRules.map(function (a) {
        return a.save();
      }));
    },
    doneSaving: function doneSaving() {
      this.send('cancel');
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/new-edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zsf6H8mw",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[27,\"if\",[[23,[\"isCreate\"]],[27,\"t\",[\"alertPage.new.addHeader\"],null],[27,\"t\",[\"alertPage.new.editHeader\"],null]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-12 pt-0 mt-0\"],[9],[0,\"\\n    \"],[1,[27,\"form-name-description\",null,[[\"name\",\"nameDisabled\",\"description\",\"bothColClass\",\"colClass\"],[[23,[\"alertGroup\",\"name\"]],false,[23,[\"alertGroup\",\"description\"]],\"col span-6 mt-0\",\"col span-12 mt-0\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[9],[0,\"\\n  \"],[1,[27,\"alert/form-alert-rules\",null,[[\"pageScope\",\"isCreate\",\"alertRules\",\"metrics\",\"monitoringEnabled\",\"alertGroup\",\"mode\",\"level\"],[[23,[\"pageScope\"]],[23,[\"isCreate\"]],[23,[\"alertRules\"]],[23,[\"metrics\"]],[23,[\"monitoringEnabled\"]],[23,[\"alertGroup\"]],[23,[\"mode\"]],[23,[\"level\"]]]]],false],[0,\"\\n  \"],[7,\"hr\"],[9],[10],[0,\"\\n  \"],[1,[27,\"alert/form-recipients\",null,[[\"pageScope\",\"isCreate\",\"model\"],[[23,[\"pageScope\"]],[23,[\"isCreate\"]],[23,[\"alertGroup\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"alert/form-advanced\",null,[[\"model\"],[[23,[\"alertGroup\"]]]]],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"mt-20\"],[9],[0,\"\\n  \"],[1,[27,\"top-errors\",null,[[\"errors\"],[[23,[\"errors\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"mv-20\"],[9],[0,\"\\n  \"],[1,[27,\"save-cancel\",null,[[\"createLabel\",\"save\",\"cancel\"],[[27,\"if\",[[23,[\"isCreate\"]],\"alertPage.create\",\"alertPage.save\"],null],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/new-edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/components/alert/time-duration/component", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    init: function init() {
      this._super.apply(this, arguments);

      var value = +Ember.get(this, 'value') || 0;

      var d = _moment.default.duration(value * 1000);

      Ember.set(this, 'h', d.hours());
      Ember.set(this, 'm', d.minutes());
      Ember.set(this, 's', d.seconds());
    },
    valueChange: Ember.observer('value', function () {
      var value = Ember.get(this, 'value') || 1;

      var d = _moment.default.duration(value * 1000);

      Ember.setProperties(this, {
        h: d.hours(),
        m: d.minutes(),
        s: d.seconds()
      });
    }),
    setValue: Ember.observer('h', 'm', 's', function () {
      var h = +Ember.get(this, 'h') || 0;
      var m = +Ember.get(this, 'm') || 0;
      var s = +Ember.get(this, 's') || 0;
      Ember.set(this, 'value', h * 3600 + m * 60 + s);
    })
  });

  _exports.default = _default;
});
define("alert/components/alert/time-duration/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8FAZ3IUG",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4 m-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[11,\"id\",\"basic-addon2\"],[9],[0,\"H\"],[10],[0,\"\\n      \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"aria-describedby\",\"disabled\"],[0,60,[23,[\"h\"]],\"form-control\",\"0\",\"basic-addon2\",[23,[\"disabled\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4 m-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[11,\"id\",\"basic-addon2\"],[9],[0,\"M\"],[10],[0,\"\\n      \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"aria-describedby\",\"disabled\"],[0,60,[23,[\"m\"]],\"form-control\",\"0\",\"basic-addon2\",[23,[\"disabled\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col span-4 m-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"input-group-addon bg-default\"],[11,\"id\",\"basic-addon2\"],[9],[0,\"S\"],[10],[0,\"\\n      \"],[1,[27,\"input-integer\",null,[[\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"aria-describedby\",\"disabled\"],[0,60,[23,[\"s\"]],\"form-control\",\"0\",\"basic-addon2\",[23,[\"disabled\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/alert/time-duration/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/annotations-section/component", "alert/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "alert/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "alert/components/api-field/component");
define.alias("shared/components/apikey-row/component", "alert/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "alert/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "alert/components/badge-state/component");
define.alias("shared/components/banner-message/component", "alert/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown", "alert/components/basic-dropdown");
define.alias("ember-basic-dropdown/components/basic-dropdown/content-element", "alert/components/basic-dropdown/content-element");
define.alias("ember-basic-dropdown/components/basic-dropdown/content", "alert/components/basic-dropdown/content");
define.alias("ember-basic-dropdown/components/basic-dropdown/trigger", "alert/components/basic-dropdown/trigger");
define.alias("shared/components/btn-toggle/component", "alert/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "alert/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "alert/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "alert/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "alert/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "alert/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "alert/components/check-override-allowed/component");
define("alert/components/cluster-alert-row/component", ["exports", "ui/mixins/notifier"], function (_exports, _notifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = Ember.Component.extend(_notifier.default, {
    intl: Ember.inject.service(),
    model: null,
    tagName: '',
    subMatches: null,
    expanded: null,
    bulkActions: true,
    actions: {
      toggle: function toggle() {
        if (this.toggle) {
          this.toggle();
        }
      }
    },
    selectorList: Ember.computed('model.targetType', function () {
      var t = Ember.get(this, 'model.targetType');

      if (t === 'nodeSelector') {
        var ary = Object.entries(Ember.get(this, 'model.nodeRule.selector')).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          return "".concat(k, "=").concat(v);
        });
        return ary;
      }

      return [];
    }),
    selectorListTip: Ember.computed('selectorList', function () {
      var list = Ember.get(this, 'selectorList');
      var out = list.map(function (item) {
        return "<div class=\"p-5 text-left\"><span class=\"badge bg-default badge-sm\" style=\"border-radius:2px;\"> ".concat(item, " </span></div>");
      }).join('');
      return Ember.String.htmlSafe(out);
    }),
    alertGroup: Ember.computed('groups', function () {
      var alertGroups = Ember.get(this, 'groups');
      var groupId = Ember.get(this, 'model.groupId');
      return alertGroups.filter(function (a) {
        return groupId === a.id;
      })[0];
    })
  });

  _exports.default = _default;
});
define("alert/components/cluster-alert-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "I8Qzbqg0",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"bulkActions\"]]],null,{\"statements\":[[0,\"    \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n      \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[23,[\"model\",\"id\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"state\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"name\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"placement\",\"tagName\",\"clip\"],[\"tooltip-basic\",[23,[\"model\",\"name\"]],\"tooltip-static\",\"tooltip-base\",\"top\",\"div\",true]],{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"target\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[7,\"div\"],[9],[0,\" \"],[1,[23,[\"model\",\"displayTargetType\"]],false],[0,\" \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"nodeSelector\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"selectorList\",\"length\"]],1],null]],null,{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"badge badge-xs bg-info\"],[11,\"style\",\"color:#ecf0f1!important;border-radius:2px;\"],[9],[0,\"\\n          \"],[1,[27,\"get\",[[23,[\"selectorList\"]],\"firstObject\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"gt\",[[23,[\"selectorList\",\"length\"]],1],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\"],[\"tooltip-basic\",[23,[\"selectorListTip\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-link\"],[9],[0,\" \"],[1,[23,[\"selectorList\",\"length\"]],false],[0,\" \"],[1,[27,\"t\",[\"alertPage.items\"],null],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"node\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-muted text-small\"],[9],[0,\"\\n        \"],[1,[23,[\"model\",\"nodeName\"]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"systemService\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-muted text-small\"],[9],[0,\"\\n        \"],[1,[23,[\"model\",\"targetSystemService\",\"condition\"]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"event\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-muted text-small\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"text-capicalize\"],[9],[1,[23,[\"model\",\"resourceKind\"]],false],[10],[0,\" \"],[1,[27,\"t\",[\"alertPage.targetTypes.event\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"condition\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"metric\"],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\",\"placement\"],[\"tooltip-basic\",[23,[\"model\",\"metricRule\",\"expression\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\",\"top\"]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"displayCondition\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayCondition\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"recipients\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"alertGroup\",\"recipients\",\"length\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"alertGroup\",\"recipients\",\"length\"]],1],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"clip\"],[9],[0,\"\\n          \"],[1,[23,[\"alertGroup\",\"displayRecipient\"]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"gt\",[[23,[\"alertGroup\",\"recipients\",\"length\"]],1],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\"],[\"tooltip-basic\",[23,[\"recipientsTip\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-link\"],[9],[1,[23,[\"alertGroup\",\"displayRecipient\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"generic.actions\"],null]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/cluster-alert-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/cluster-driver/driver-aliyunkcs/component", "alert/components/cluster-driver/driver-aliyunkcs/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "alert/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "alert/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "alert/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "alert/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import/component", "alert/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "alert/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "alert/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "alert/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "alert/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "alert/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "alert/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "alert/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "alert/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "alert/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "alert/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "alert/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "alert/components/container-shell/component");
define.alias("shared/components/containers-header/component", "alert/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "alert/components/copy-button");
define.alias("shared/components/copy-inline/component", "alert/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "alert/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "alert/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "alert/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "alert/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "alert/components/cru-cluster/component");
define.alias("shared/components/cru-node-pools/component", "alert/components/cru-node-pools/component");
define.alias("shared/components/cru-private-registry/component", "alert/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "alert/components/custom-catalog/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "alert/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "alert/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "alert/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "alert/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "alert/components/field-required/component");
define.alias("shared/components/form-auth-cloud-credential/component", "alert/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "alert/components/form-certificate-row/component");
define.alias("shared/components/form-count/component", "alert/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "alert/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "alert/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "alert/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "alert/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "alert/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "alert/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "alert/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "alert/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "alert/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "alert/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "alert/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "alert/components/form-members/component");
define.alias("shared/components/form-name-description/component", "alert/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "alert/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "alert/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "alert/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "alert/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "alert/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "alert/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "alert/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "alert/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "alert/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "alert/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "alert/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "alert/components/gke-access-scope/component");
define.alias("shared/components/graph-area/component", "alert/components/graph-area/component");
define.alias("shared/components/hook-row/component", "alert/components/hook-row/component");
define.alias("shared/components/host-pod/component", "alert/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "alert/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "alert/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "alert/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "alert/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "alert/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "alert/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "alert/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "alert/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "alert/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "alert/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "alert/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "alert/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "alert/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "alert/components/illiquid-model");
define.alias("shared/components/input-answer-row/component", "alert/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "alert/components/input-answers/component");
define.alias("shared/components/input-custom-answers/component", "alert/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "alert/components/input-float/component");
define.alias("shared/components/input-identity/component", "alert/components/input-identity/component");
define.alias("shared/components/input-int/component", "alert/components/input-int/component");
define.alias("shared/components/input-integer/component", "alert/components/input-integer/component");
define.alias("shared/components/input-number/component", "alert/components/input-number/component");
define.alias("shared/components/input-or-display/component", "alert/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "alert/components/input-paste/component");
define.alias("shared/components/input-slider/component", "alert/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "alert/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "alert/components/input-text-file/component");
define.alias("shared/components/input-url/component", "alert/components/input-url/component");
define.alias("shared/components/input-yaml/component", "alert/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "alert/components/ivy-codemirror");
define.alias("shared/components/labels-section/component", "alert/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "alert/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "alert/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "alert/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "alert/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "alert/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "alert/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "alert/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "alert/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "alert/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "alert/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "alert/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "alert/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "alert/components/liquid-versions");
define.alias("shared/components/marked-down/component", "alert/components/marked-down/component");
define.alias("shared/components/metrics-action/component", "alert/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "alert/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "alert/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "alert/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "alert/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "alert/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "alert/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "alert/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "alert/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "alert/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "alert/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "alert/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "alert/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "alert/components/modal-move-namespace/component");
define.alias("shared/components/modal-root/component", "alert/components/modal-root/component");
define.alias("shared/components/modal-shell/component", "alert/components/modal-shell/component");
define.alias("shared/components/modal-yaml/component", "alert/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "alert/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "alert/components/namespace-group/component");
define.alias("shared/components/new-select/component", "alert/components/new-select/component");
define.alias("shared/components/node-ip/component", "alert/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "alert/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "alert/components/node-taints/component");
define.alias("shared/components/outside-click/component", "alert/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "alert/components/page-numbers");
define.alias("shared/components/page-numbers/component", "alert/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "alert/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "alert/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "alert/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "alert/components/progress-bar/component");
define("alert/components/project-alert-row/component", ["exports", "ui/mixins/notifier"], function (_exports, _notifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = Ember.Component.extend(_notifier.default, {
    intl: Ember.inject.service(),
    model: null,
    tagName: '',
    bulkActions: true,
    actions: {
      toggle: function toggle() {
        if (this.toggle) {
          this.toggle();
        }
      }
    },
    isRestartCondition: Ember.computed('model.targetType', 'model.podRule.condition', function () {
      var t = Ember.get(this, 'model.targetType');
      var c = Ember.get(this, 'model.podRule.condition');
      return t === 'pod' && c === 'restarts';
    }),
    selectorList: Ember.computed('model.targetType', function () {
      var t = Ember.get(this, 'model.targetType');

      if (t === 'workloadSelector') {
        var ary = Object.entries(Ember.get(this, 'model.workloadRule.selector')).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          return "".concat(k, "=").concat(v);
        });
        return ary;
      }

      return [];
    }),
    selectorListTip: Ember.computed('selectorList', function () {
      var list = Ember.get(this, 'selectorList');
      var out = list.map(function (item) {
        return "<div class=\"p-5 text-left\"><span class=\"badge bg-default badge-sm\" style=\"border-radius:2px;\"> ".concat(item, " </span></div>");
      }).join('');
      return Ember.String.htmlSafe(out);
    }),
    alertGroup: Ember.computed('groups', function () {
      var alertGroups = Ember.get(this, 'groups');
      var groupId = Ember.get(this, 'model.groupId');
      return alertGroups.filter(function (a) {
        return groupId === a.id;
      })[0];
    })
  });

  _exports.default = _default;
});
define("alert/components/project-alert-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TyNUtzHO",
    "block": "{\"symbols\":[],\"statements\":[[7,\"tr\"],[11,\"class\",\"main-row\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"bulkActions\"]]],null,{\"statements\":[[0,\"    \"],[7,\"td\"],[11,\"valign\",\"middle\"],[11,\"class\",\"row-check\"],[11,\"style\",\"padding-top: 2px;\"],[9],[0,\"\\n      \"],[1,[27,\"check-box\",null,[[\"nodeId\"],[[23,[\"model\",\"id\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"state\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[1,[27,\"badge-state\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"name\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\",\"placement\",\"clip\",\"inlineBlock\"],[\"tooltip-basic\",[23,[\"model\",\"name\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\",\"top\",true,true]],{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"target\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n    \"],[7,\"div\"],[9],[0,\" \"],[1,[23,[\"model\",\"displayTargetType\"]],false],[0,\" \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"workloadSelector\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"selectorList\",\"length\"]],1],null]],null,{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"badge badge-xs bg-info\"],[11,\"style\",\"color:#ecf0f1!important;border-radius:2px;\"],[9],[0,\"\\n          \"],[1,[27,\"get\",[[23,[\"selectorList\"]],\"firstObject\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"gt\",[[23,[\"selectorList\",\"length\"]],1],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\"],[\"tooltip-basic\",[23,[\"selectorListTip\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-link\"],[9],[0,\" \"],[1,[23,[\"selectorList\",\"length\"]],false],[0,\" \"],[1,[27,\"t\",[\"alertPage.items\"],null],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"pod\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-muted text-small\"],[9],[0,\" \"],[1,[23,[\"model\",\"podName\"]],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"workload\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"text-muted text-small\"],[9],[0,\" \"],[1,[23,[\"model\",\"workloadName\"]],false],[0,\" \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"condition\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isRestartCondition\"]]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\"],[\"tooltip-basic\",[23,[\"displayCondition\"]],\"tooltip-static\",\"tooltip-base\"]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"displayCondition\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"targetType\"]],\"metric\"],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\",\"placement\"],[\"tooltip-basic\",[23,[\"model\",\"metricRule\",\"expression\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\",\"top\"]],{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"displayCondition\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[23,[\"model\",\"displayCondition\"]],false],[0,\"\\n    \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[23,[\"dt\",\"recipients\"]]]]],[11,\"class\",\"clip\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"alertGroup\",\"recipients\",\"length\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"alertGroup\",\"recipients\",\"length\"]],1],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"clip\"],[9],[0,\"\\n          \"],[1,[23,[\"alertGroup\",\"displayRecipient\"]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"gt\",[[23,[\"alertGroup\",\"recipients\",\"length\"]],1],null]],null,{\"statements\":[[4,\"tooltip-element\",null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"tooltipFor\"],[\"tooltip-basic\",[23,[\"recipientsTip\"]],\"tooltip-static\",\"tooltip-base\",\"tooltipLink\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"text-link\"],[9],[1,[23,[\"alertGroup\",\"displayRecipient\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"t\",[\"alertPage.na\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"td\"],[12,\"data-title\",[28,[[27,\"t\",[\"generic.actions\"],null]]]],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[1,[27,\"action-menu\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/components/project-alert-row/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/components/project-member-row/component", "alert/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "alert/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "alert/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "alert/components/resource-event-list/component");
define.alias("shared/components/save-cancel/component", "alert/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "alert/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "alert/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "alert/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "alert/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "alert/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "alert/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "alert/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "alert/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "alert/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "alert/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "alert/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "alert/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "alert/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "alert/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "alert/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "alert/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "alert/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "alert/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "alert/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "alert/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "alert/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "alert/components/search-text/component");
define.alias("shared/components/searchable-select/component", "alert/components/searchable-select/component");
define.alias("shared/components/settings/danger-zone/component", "alert/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "alert/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "alert/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "alert/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "alert/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "alert/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "alert/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "alert/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "alert/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "alert/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "alert/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "alert/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "alert/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "alert/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "alert/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "alert/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "alert/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "alert/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "alert/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "alert/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "alert/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "alert/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "alert/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "alert/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "alert/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "alert/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "alert/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-toggle-override/component", "alert/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "alert/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "alert/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "alert/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "alert/components/used-percent-gauge/component");
define("alert/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'alert/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "alert/cookies/service");
define.alias("shared/digital-ocean/service", "alert/digital-ocean/service");
define("alert/edit-rule/route", ["exports", "alert/mixins/edit-or-clone"], function (_exports, _editOrClone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend(_editOrClone.default, {
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    model: function model(params) {
      var pageScope = Ember.get(this, 'pageScope');
      var ruleId = params.rule_id;
      var groupId = params.group_id;

      if (pageScope === 'cluster') {
        var cluster = window.l('route:application').modelFor('authenticated.cluster');
        var clusterId = cluster.get('id');
        return this.loadClusterResource({
          clusterId: clusterId,
          ruleId: ruleId,
          groupId: groupId
        });
      } else {
        var project = window.l('route:application').modelFor('authenticated.project').get('project');
        var projectId = project.get('id');

        var _clusterId = project.get('clusterId');

        return this.loadProjectResource({
          projectId: projectId,
          clusterId: _clusterId,
          ruleId: ruleId,
          groupId: groupId
        });
      }
    },
    isMonitoringEnabled: function isMonitoringEnabled() {
      var ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return Ember.get(this, 'scope.currentCluster.enableClusterMonitoring');
      } else {
        return Ember.get(this, 'scope.currentProject.enableProjectMonitoring');
      }
    },
    loadClusterResource: function loadClusterResource(_ref) {
      var _this = this;

      var clusterId = _ref.clusterId,
          ruleId = _ref.ruleId,
          groupId = _ref.groupId;
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          clusterId: clusterId
        }
      };
      var metrics;

      if (this.isMonitoringEnabled()) {
        metrics = globalStore.rawRequest({
          url: "monitormetrics?action=listclustermetricname&limit=-1",
          method: 'POST',
          data: {
            clusterId: clusterId
          }
        }).catch(function () {
          var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          Ember.get(_this, 'growl').fromError(Ember.get(err, 'body.message'));
        });
      }

      return Ember.RSVP.hash({
        nodes: globalStore.find('node', null, opt),
        notifiers: globalStore.findAll('notifier'),
        alertRule: globalStore.find('clusterAlertRule', ruleId),
        alertGroup: globalStore.find('clusterAlertGroup', groupId),
        metrics: metrics
      }).then(function (_ref2) {
        var nodes = _ref2.nodes,
            notifiers = _ref2.notifiers,
            alertRule = _ref2.alertRule,
            metrics = _ref2.metrics,
            alertGroup = _ref2.alertGroup;
        return {
          nodes: nodes,
          notifiers: notifiers,
          alertGroup: alertGroup,
          alertRule: _this.loadClusterRule(alertRule.clone()),
          metrics: metrics && metrics.body && metrics.body.names,
          mode: 'edit',
          level: 'rule'
        };
      });
    },
    loadProjectResource: function loadProjectResource(_ref3) {
      var _this2 = this;

      var clusterId = _ref3.clusterId,
          projectId = _ref3.projectId,
          groupId = _ref3.groupId,
          ruleId = _ref3.ruleId;
      var store = Ember.get(this, 'store');
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          projectId: projectId
        }
      };
      var metrics;

      if (this.isMonitoringEnabled()) {
        metrics = globalStore.rawRequest({
          url: "monitormetrics?action=listprojectmetricname&limit=-1",
          method: 'POST',
          data: {
            projectId: projectId
          }
        }).catch(function () {
          var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          Ember.get(_this2, 'growl').fromError(Ember.get(err, 'body.message'));
        });
      }

      return Ember.RSVP.hash({
        pods: store.find('pod', null),
        statefulsets: store.find('statefulset', null, opt),
        daemonsets: store.find('daemonset', null, opt),
        deployments: store.find('deployment', null, opt),
        notifiers: globalStore.find('notifier', null, {
          filter: {
            clusterId: clusterId
          }
        }),
        metrics: metrics,
        alertRule: globalStore.find('projectAlertRule', ruleId),
        alertGroup: globalStore.find('projectAlertGroup', groupId)
      }).then(function (_ref4) {
        var pods = _ref4.pods,
            statefulsets = _ref4.statefulsets,
            daemonsets = _ref4.daemonsets,
            deployments = _ref4.deployments,
            notifiers = _ref4.notifiers,
            metrics = _ref4.metrics,
            alertRule = _ref4.alertRule,
            alertGroup = _ref4.alertGroup;
        return {
          pods: pods,
          statefulsets: statefulsets,
          daemonsets: daemonsets,
          deployments: deployments,
          notifiers: notifiers,
          metrics: metrics && metrics.body && metrics.body.names,
          alertGroup: alertGroup,
          alertRule: _this2.loadProjectRule(alertRule.clone()),
          mode: 'edit',
          level: 'rule'
        };
      });
    }
  });

  _exports.default = _default;
});
define("alert/edit-rule/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6pxXPJTg",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"alert-rule/new-edit\",null,[[\"resourceMap\",\"isCreate\",\"editRule\"],[[23,[\"model\"]],false,true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/edit-rule/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    model: function model(params) {
      var pageScope = Ember.get(this, 'pageScope');
      var groupId = params.alert_id;

      if (pageScope === 'cluster') {
        var cluster = window.l('route:application').modelFor('authenticated.cluster');
        var clusterId = cluster.get('id');
        return this.loadClusterResource({
          clusterId: clusterId,
          groupId: groupId
        });
      } else {
        var project = window.l('route:application').modelFor('authenticated.project').get('project');
        var projectId = project.get('id');

        var _clusterId = project.get('clusterId');

        return this.loadProjectResource({
          projectId: projectId,
          clusterId: _clusterId,
          groupId: groupId
        });
      }
    },
    isMonitoringEnabled: function isMonitoringEnabled() {
      var ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return Ember.get(this, 'scope.currentCluster.enableClusterMonitoring');
      } else {
        return Ember.get(this, 'scope.currentProject.enableProjectMonitoring');
      }
    },
    getNewClusterAlert: function getNewClusterAlert(alert) {
      var gs = Ember.get(this, 'globalStore');
      var nodeRule = gs.createRecord({
        type: 'nodeRule'
      });
      var systemServiceRule = gs.createRecord({
        type: 'systemServiceRule'
      });
      var eventRule = gs.createRecord({
        type: 'eventRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var t = Ember.get(alert, 'targetType');
      var et = Ember.get(alert, 'eventRule.eventType');
      Ember.set(alert, '_targetType', t);

      switch (t) {
        case 'event':
          switch (et) {
            case 'Normal':
              Ember.set(alert, '_targetType', 'normalEvent');
              break;

            case 'Warning':
              Ember.set(alert, '_targetType', 'warningEvent');
              break;
          }

          Ember.setProperties(alert, {
            nodeRule: nodeRule,
            systemServiceRule: systemServiceRule,
            metricRule: metricRule
          });
          break;

        case 'node':
        case 'nodeSelector':
          Ember.setProperties(alert, {
            eventRule: eventRule,
            systemServiceRule: systemServiceRule,
            metricRule: metricRule
          });
          break;

        case 'systemService':
          Ember.setProperties(alert, {
            nodeRule: nodeRule,
            eventRule: eventRule,
            metricRule: metricRule
          });
          break;

        case 'metric':
          Ember.setProperties(alert, {
            nodeRule: nodeRule,
            systemServiceRule: systemServiceRule,
            eventRule: eventRule
          });
          break;
      }

      return alert;
    },
    loadClusterResource: function loadClusterResource(_ref) {
      var _this = this;

      var clusterId = _ref.clusterId,
          groupId = _ref.groupId;
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          clusterId: clusterId
        }
      };
      var metrics;

      if (this.isMonitoringEnabled()) {
        metrics = globalStore.rawRequest({
          url: "monitormetrics?action=listclustermetricname&limit=-1",
          method: 'POST',
          data: {
            clusterId: clusterId
          }
        }).catch(function () {
          var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          Ember.get(_this, 'growl').fromError(Ember.get(err, 'body.message'));
        });
      }

      return Ember.RSVP.hash({
        nodes: globalStore.find('node', null, opt),
        notifiers: globalStore.findAll('notifier'),
        alertRules: globalStore.find('clusterAlertRule'),
        alertGroup: globalStore.find('clusterAlertGroup', groupId),
        metrics: metrics
      }).then(function (_ref2) {
        var nodes = _ref2.nodes,
            notifiers = _ref2.notifiers,
            alertRules = _ref2.alertRules,
            alertGroup = _ref2.alertGroup,
            metrics = _ref2.metrics;
        return {
          nodes: nodes,
          notifiers: notifiers,
          alertRules: alertRules.filter(function (g) {
            return g.groupId === groupId;
          }).map(function (a) {
            var alert = a.clone();
            return _this.getNewClusterAlert(alert);
          }),
          alertGroup: alertGroup.clone(),
          metrics: metrics && metrics.body && metrics.body.names,
          mode: 'edit',
          level: 'group'
        };
      });
    },
    getNewProjectAlert: function getNewProjectAlert(alert) {
      var gs = Ember.get(this, 'globalStore');
      var podRule = gs.createRecord({
        type: 'podRule'
      });
      var workloadRule = gs.createRecord({
        type: 'workloadRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var t = Ember.get(alert, 'targetType');
      Ember.set(alert, '_targetType', t);

      switch (t) {
        case 'pod':
          Ember.setProperties(alert, {
            metricRule: metricRule,
            workloadRule: workloadRule
          });
          break;

        case 'workload':
        case 'workloadSelector':
          Ember.setProperties(alert, {
            podRule: podRule,
            metricRule: metricRule
          });
          break;

        case 'metric':
          Ember.setProperties(alert, {
            podRule: podRule,
            workloadRule: workloadRule
          });
          break;
      }

      return alert;
    },
    loadProjectResource: function loadProjectResource(_ref3) {
      var _this2 = this;

      var clusterId = _ref3.clusterId,
          projectId = _ref3.projectId,
          groupId = _ref3.groupId;
      var store = Ember.get(this, 'store');
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          projectId: projectId
        }
      };
      var metrics;

      if (this.isMonitoringEnabled()) {
        metrics = globalStore.rawRequest({
          url: "monitormetrics?action=listprojectmetricname&limit=-1",
          method: 'POST',
          data: {
            projectId: projectId
          }
        }).catch(function () {
          var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          Ember.get(_this2, 'growl').fromError(Ember.get(err, 'body.message'));
        });
      }

      return Ember.RSVP.hash({
        pods: store.find('pod', null),
        statefulsets: store.find('statefulset', null, opt),
        daemonsets: store.find('daemonset', null, opt),
        deployments: store.find('deployment', null, opt),
        notifiers: globalStore.find('notifier', null, {
          filter: {
            clusterId: clusterId
          }
        }),
        metrics: metrics,
        alertRules: globalStore.find('projectAlertRule'),
        alertGroup: globalStore.find('projectAlertGroup', groupId)
      }).then(function (_ref4) {
        var pods = _ref4.pods,
            statefulsets = _ref4.statefulsets,
            daemonsets = _ref4.daemonsets,
            deployments = _ref4.deployments,
            notifiers = _ref4.notifiers,
            metrics = _ref4.metrics,
            alertRules = _ref4.alertRules,
            alertGroup = _ref4.alertGroup;
        return {
          pods: pods,
          statefulsets: statefulsets,
          daemonsets: daemonsets,
          deployments: deployments,
          notifiers: notifiers,
          metrics: metrics && metrics.body && metrics.body.names,
          alertRules: alertRules.filter(function (g) {
            return g.groupId === groupId;
          }).map(function (a) {
            var alert = a.clone();
            return _this2.getNewProjectAlert(alert);
          }),
          alertGroup: alertGroup.clone(),
          mode: 'edit',
          level: 'group'
        };
      });
    }
  });

  _exports.default = _default;
});
define("alert/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0tkioQEH",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"alert/new-edit\",null,[[\"resourceMap\",\"isCreate\"],[[23,[\"model\"]],false]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/edit/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/endpoint/service", "alert/endpoint/service");
define("alert/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "alert/resolver", "alert/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'clusterStore', 'globalStore', 'resource-actions', 'intl', 'modal', 'router', 'scope', 'session', 'store', 'tooltip'],
      externalRoutes: ['notifier', 'authenticated.cluster.monitoring.cluster-setting', 'authenticated.project.monitoring.project-setting']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "alert/features/service");
define.alias("shared/grafana/service", "alert/grafana/service");
define.alias("shared/growl/service", "alert/growl/service");
define.alias("ember-math-helpers/helpers/abs", "alert/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "alert/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "alert/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "alert/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "alert/helpers/and");
define.alias("shared/helpers/array-includes", "alert/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "alert/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "alert/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "alert/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "alert/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "alert/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "alert/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "alert/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "alert/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "alert/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "alert/helpers/cosh");
define.alias("shared/helpers/date-calendar", "alert/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "alert/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "alert/helpers/date-recent");
define.alias("shared/helpers/date-str", "alert/helpers/date-str");
define.alias("shared/helpers/default-str", "alert/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "alert/helpers/div");
define.alias("shared/helpers/driver-name", "alert/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "alert/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "alert/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "alert/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "alert/helpers/floor");
define.alias("ember-intl/helpers/format-date", "alert/helpers/format-date");
define.alias("ember-intl/helpers/format-html-message", "alert/helpers/format-html-message");
define.alias("shared/helpers/format-ip", "alert/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "alert/helpers/format-message");
define.alias("shared/helpers/format-mib", "alert/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "alert/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "alert/helpers/format-relative");
define.alias("shared/helpers/format-si", "alert/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "alert/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "alert/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "alert/helpers/gcd");
define.alias("shared/helpers/get-card-class", "alert/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "alert/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "alert/helpers/gte");
define.alias("shared/helpers/has-override", "alert/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "alert/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "alert/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "alert/helpers/imul");
define.alias("ember-intl/helpers/intl-get", "alert/helpers/intl-get");
define.alias("ember-truth-helpers/helpers/is-array", "alert/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "alert/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "alert/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "alert/helpers/is-equal");
define.alias("shared/helpers/join-array", "alert/helpers/join-array");
define.alias("ember-intl/helpers/l", "alert/helpers/l");
define.alias("liquid-fire/helpers/lf-lock-model", "alert/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "alert/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "alert/helpers/link-ssl-domain");
define("alert/helpers/linkify", ["exports", "url-regex", "shared/helpers/linkify"], function (_exports, _urlRegex, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "alert/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "alert/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "alert/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "alert/helpers/log2");
define.alias("shared/helpers/lower-case", "alert/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "alert/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "alert/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "alert/helpers/max");
define.alias("shared/helpers/maybe-t", "alert/helpers/maybe-t");
define.alias("ember-math-helpers/helpers/min", "alert/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "alert/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "alert/helpers/mult");
define.alias("shared/helpers/nl-to-br", "alert/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "alert/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "alert/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "alert/helpers/or");
define.alias("shared/helpers/parse-camelcase", "alert/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "alert/helpers/pow");
define.alias("shared/helpers/pretty-cron", "alert/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "alert/helpers/random");
define.alias("shared/helpers/rbac-allows", "alert/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "alert/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "alert/helpers/round");
define.alias("shared/helpers/run-time", "alert/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "alert/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "alert/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "alert/helpers/sqrt");
define.alias("shared/helpers/str-replace", "alert/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "alert/helpers/sub");
define.alias("ember-intl/helpers/format-html-message", "alert/helpers/t-html");
define.alias("ember-intl/helpers/t", "alert/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "alert/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "alert/helpers/tanh");
define.alias("shared/helpers/to-json", "alert/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "alert/helpers/trunc");
define.alias("shared/helpers/uc-first", "alert/helpers/uc-first");
define.alias("shared/helpers/upper-case", "alert/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "alert/helpers/xor");
define.alias("shared/host/service", "alert/host/service");
define("alert/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    alerts: Ember.computed.alias('model.alerts'),
    notifiers: Ember.computed.alias('model.notifiers')
  });

  _exports.default = _default;
});
define("alert/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    scope: Ember.inject.service(),
    session: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    model: function model() {
      var pageScope = Ember.get(this, 'pageScope');

      if (pageScope === 'cluster') {
        var cluster = window.l('route:application').modelFor('authenticated.cluster');
        var clusterId = cluster.get('id');
        return this.loadClusterResource(clusterId);
      } else {
        var project = window.l('route:application').modelFor('authenticated.project').get('project');
        var projectId = project.get('id');

        var _clusterId = project.get('clusterId');

        return this.loadProjectResource({
          projectId: projectId,
          clusterId: _clusterId
        });
      }
    },
    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, "session.".concat(Ember.get(this, 'pageScope') === 'cluster' ? _constants.default.SESSION.CLUSTER_ROUTE : _constants.default.SESSION.PROJECT_ROUTE), "authenticated.".concat(Ember.get(this, 'pageScope'), ".alert"));
    }),
    loadClusterResource: function loadClusterResource(clusterId) {
      var gs = Ember.get(this, 'globalStore'); // const clusterId = this.modelFor('cluster').get('id');

      var opt = {
        filter: {
          clusterId: clusterId
        }
      };
      var notifiers = gs.find('notifier', null, opt);
      var alerts = gs.find('clusterAlertRule', null, opt).then(function () {
        return gs.all('clusterAlertRule');
      });
      var groups = gs.find('clusterAlertGroup', null, opt).then(function () {
        return gs.all('clusterAlertGroup');
      });
      return Ember.RSVP.hash({
        alerts: alerts,
        notifiers: notifiers,
        groups: groups
      });
    },
    loadProjectResource: function loadProjectResource(_ref) {
      var clusterId = _ref.clusterId,
          projectId = _ref.projectId;
      var gs = Ember.get(this, 'globalStore');
      var notifiers = gs.find('notifier', null, {
        filter: {
          clusterId: clusterId
        }
      });
      var alerts = gs.find('projectAlertRule', null, {
        filter: {
          projectId: projectId
        }
      }).then(function () {
        return gs.all('projectAlertRule');
      });
      var groups = gs.find('projectAlertGroup', null, {
        filter: {
          projectId: projectId
        }
      }).then(function () {
        return gs.all('projectAlertGroup');
      });
      return Ember.RSVP.hash({
        alerts: alerts,
        notifiers: notifiers,
        groups: groups
      });
    }
  });

  _exports.default = _default;
});
define("alert/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OLWzI1zS",
    "block": "{\"symbols\":[],\"statements\":[[7,\"section\"],[11,\"class\",\"header clearfix\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"pull-left pt-10\"],[9],[7,\"h1\"],[11,\"class\",\"text-capitalize\"],[9],[1,[27,\"if\",[[27,\"eq\",[[23,[\"pageScope\"]],\"cluster\"],null],[27,\"t\",[\"alertPage.cluster\"],null],[27,\"t\",[\"alertPage.project\"],null]],null],false],[0,\" \"],[1,[27,\"t\",[\"alertPage.alertGroups\"],null],false],[10],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right-buttons\"],[9],[0,\"\\n    \"],[4,\"link-to\",[\"new\"],[[\"classNames\"],[\"btn btn-sm bg-primary\"]],{\"statements\":[[1,[27,\"t\",[\"alertPage.index.addAlertGroup\"],null],false]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"alert-table\",null,[[\"alerts\",\"notifiers\",\"groups\"],[[23,[\"model\",\"alerts\"]],[23,[\"model\",\"notifiers\"]],[23,[\"model\",\"groups\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/index/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/initializers/app", ["exports"], function (_exports) {
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
define("alert/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("alert/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (_exports, _emberInternals, _velocityExt) {
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
define("alert/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define("alert/instance-initializers/ember-intl", ["exports", "ember-intl/initializer"], function (_exports, _initializer) {
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
define.alias("shared/k8s/service", "alert/k8s/service");
define.alias("shared/linode/service", "alert/linode/service");
define("alert/mixins/alert-rule", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    scope: Ember.inject.service(),
    intl: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    growl: Ember.inject.service(),
    clusterId: Ember.computed.reads('scope.currentCluster.id'),
    projectId: Ember.computed.reads('scope.currentProject.id'),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      var pageScope = Ember.get(this, 'pageScope');
      var globalStore = Ember.get(this, 'globalStore');
      var clusterId = Ember.get(this, 'clusterId');
      var projectId = Ember.get(this, 'projectId');
      var url = "monitormetrics?action=list".concat(pageScope, "metricname&limit=-1");
      var data = {};

      if (pageScope === 'cluster') {
        data = {
          clusterId: clusterId
        };
      } else {
        data = {
          projectId: projectId
        };
      }

      if (Ember.get(this, 'monitoringEnabled')) {
        globalStore.rawRequest({
          url: url,
          method: 'POST',
          data: data
        }).then(function () {
          var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var metrics = res && res.body && res.body.names;
          Ember.set(_this, 'metrics', metrics);
        }).catch(function () {
          var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          Ember.get(_this, 'growl').fromError(Ember.get(err, 'body.message'));
        });
      }
    },
    monitoringEnabled: Ember.computed(function () {
      var ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return Ember.get(this, 'scope.currentCluster.enableClusterMonitoring');
      } else {
        return Ember.get(this, 'scope.currentProject.enableProjectMonitoring');
      }
    }),
    beforeSaveClusterAlert: function beforeSaveClusterAlert(alertRule, group) {
      var clone = alertRule.clone();
      Ember.setProperties(clone, {
        clusterId: Ember.get(this, 'scope.currentCluster.id'),
        groupId: group.id
      });
      var t = Ember.get(alertRule, '_targetType');
      var errors = [];
      var intl = Ember.get(this, 'intl');
      var selector = Ember.get(clone, 'nodeRule.selector') || {};
      var keys = Object.keys(selector);

      switch (t) {
        case 'node':
          if (!Ember.get(clone, 'nodeRule.nodeId')) {
            errors.push(intl.t('alertPage.newOrEdit.nodeRequired'));
          }

          Ember.setProperties(clone, {
            'nodeRule.selector': null,
            systemServiceRule: null,
            eventRule: null,
            metricRule: null
          });
          break;

        case 'nodeSelector':
          if (keys.length === 0) {
            errors.push(intl.t('alertPage.newOrEdit.nodeSelectorRequired'));
          }

          Ember.setProperties(clone, {
            'nodeRule.nodeId': null,
            systemServiceRule: null,
            eventRule: null,
            metricRule: null
          });
          break;

        case 'systemService':
          Ember.setProperties(clone, {
            nodeRule: null,
            eventRule: null,
            metricRule: null
          });
          break;

        case 'warningEvent':
        case 'normalEvent':
          Ember.setProperties(clone, {
            nodeRule: null,
            systemServiceRule: null,
            metricRule: null
          });
          break;

        case 'metric':
          Ember.setProperties(clone, {
            nodeRule: null,
            systemServiceRule: null,
            eventRule: null
          });
          break;
      }

      Ember.set(this, 'errors', errors);
      return clone;
    },
    beforeSaveProjectAlert: function beforeSaveProjectAlert(alertRule, group) {
      var clone = alertRule.clone();
      var t = Ember.get(alertRule, '_targetType');
      var errors = [];
      var workloadType = Ember.get(clone, 'workloadRule.workloadType');
      var workloadSelectorType = Ember.get(clone, 'workloadRule.workloadSelectorType');
      var selector = Ember.get(clone, 'workloadRule.selector') || {};
      var keys = Object.keys(selector);
      Ember.setProperties(clone, {
        projectId: Ember.get(this, 'scope.currentProject.id'),
        groupId: group.id
      });

      switch (t) {
        case 'workload':
          Ember.setProperties(clone, {
            podRule: null,
            'workloadRule.selector': null,
            'workloadRule.type': workloadType,
            metricRule: null
          });
          break;

        case 'workloadSelector':
          if (keys.length === 0) {
            errors.push('Workload selector required');
          }

          Ember.setProperties(clone, {
            podRule: null,
            'workloadRule.workloadId': null,
            'workloadRule.type': workloadSelectorType,
            metricRule: null
          });
          break;

        case 'pod':
          Ember.setProperties(clone, {
            workloadRule: null,
            metricRule: null
          });
          break;

        case 'metric':
          Ember.setProperties(clone, {
            workloadRule: null,
            podRule: null
          });
          break;
      }

      Ember.set(this, 'errors', errors);
      return clone;
    },
    willSaveMetricRule: function willSaveMetricRule(toSaveAlert) {
      if (Ember.get(toSaveAlert, 'metricRule.comparison') === _constants.default.ALERTING_COMPARISON.HAS_VALUE) {
        delete Ember.get(toSaveAlert, 'metricRule').thresholdValue;
      }

      return toSaveAlert;
    }
  });

  _exports.default = _default;
});
define.alias("shared/mixins/cattle-transitioning-resource", "alert/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "alert/mixins/console");
define.alias("shared/mixins/container-choices", "alert/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "alert/mixins/container-spark-stats");
define("alert/mixins/edit-or-clone", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    globalStore: Ember.inject.service(),
    loadClusterRule: function loadClusterRule(model) {
      var gs = Ember.get(this, 'globalStore');
      var t = Ember.get(model, 'targetType');
      Ember.set(model, '_targetType', t);
      var nodeRule = gs.createRecord({
        type: 'nodeRule'
      });
      var systemServiceRule = gs.createRecord({
        type: 'systemServiceRule'
      });
      var eventRule = gs.createRecord({
        type: 'eventRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var et = Ember.get(model, 'eventRule.eventType') || '';

      switch (t) {
        case 'event':
          Ember.setProperties(model, {
            nodeRule: nodeRule,
            systemServiceRule: systemServiceRule,
            metricRule: metricRule,
            _targetType: "".concat(et.toLowerCase(), "Event")
          });
          break;

        case 'node':
        case 'nodeSelector':
          Ember.setProperties(model, {
            eventRule: eventRule,
            systemServiceRule: systemServiceRule,
            metricRule: metricRule
          });
          break;

        case 'systemService':
          Ember.setProperties(model, {
            nodeRule: nodeRule,
            eventRule: eventRule,
            metricRule: metricRule
          });
          break;

        case 'metric':
          Ember.setProperties(model, {
            nodeRule: nodeRule,
            systemServiceRule: systemServiceRule,
            eventRule: eventRule
          });
          break;
      }

      return model;
    },
    loadProjectRule: function loadProjectRule(model) {
      var globalStore = Ember.get(this, 'globalStore');
      var t = Ember.get(model, 'targetType');
      Ember.set(model, '_targetType', t);
      var workloadRule = globalStore.createRecord({
        type: 'workloadRule'
      });
      var podRule = globalStore.createRecord({
        type: 'podRule'
      });
      var metricRule = globalStore.createRecord({
        type: 'metricRule'
      });

      switch (t) {
        case 'pod':
          Ember.setProperties(model, {
            workloadRule: workloadRule,
            metricRule: metricRule
          });
          break;

        case 'workload':
        case 'workloadSelector':
          Ember.setProperties(model, {
            podRule: podRule,
            metricRule: metricRule
          });
          break;

        case 'metric':
          Ember.setProperties(model, {
            podRule: podRule,
            workloadRule: workloadRule
          });
          break;
      }

      return model;
    }
  });

  _exports.default = _default;
});
define.alias("shared/mixins/endpoint-ports", "alert/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "alert/mixins/filter-state");
define.alias("shared/mixins/grafana", "alert/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "alert/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "alert/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "alert/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "alert/mixins/manage-labels");
define.alias("shared/mixins/metrics", "alert/mixins/metrics");
define.alias("shared/mixins/modal-base", "alert/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "alert/mixins/new-or-edit");
define.alias("shared/mixins/preload", "alert/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "alert/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "alert/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "alert/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "alert/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "alert/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "alert/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "alert/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "alert/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "alert/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "alert/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "alert/mixins/upgrade-component");
define.alias("shared/mixins/upload", "alert/mixins/upload");
define.alias("shared/modal/service", "alert/modal/service");
define("alert/new-rule/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id']
  });

  _exports.default = _default;
});
define("alert/new-rule/route", ["exports", "alert/mixins/edit-or-clone"], function (_exports, _editOrClone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend(_editOrClone.default, {
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    model: function model(params, transition) {
      var pageScope = Ember.get(this, 'pageScope');
      var groupId = params.group_id;
      var id = params.id;

      if (pageScope === 'cluster') {
        var clusterId = transition.params['authenticated.cluster'].cluster_id;
        return this.loadClusterResource(clusterId, id, groupId);
      } else {
        var projectId = transition.params['authenticated.project'].project_id;

        var _clusterId = projectId.split(':');

        return this.loadProjectResource({
          projectId: projectId,
          clusterId: _clusterId,
          id: Ember.get(params, 'id'),
          groupId: groupId
        });
      }
    },
    resetController: function resetController(controller, isExiting
    /* , transition*/
    ) {
      if (isExiting) {
        Ember.set(controller, 'id', null);
      }
    },
    getNewClusterAlert: function getNewClusterAlert(clusterId, groupId) {
      var gs = Ember.get(this, 'globalStore');
      var nodeRule = gs.createRecord({
        type: 'nodeRule'
      });
      var systemServiceRule = gs.createRecord({
        type: 'systemServiceRule'
      });
      var eventRule = gs.createRecord({
        type: 'eventRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'clusterAlertRule',
        groupId: groupId,
        clusterId: clusterId,
        nodeRule: nodeRule,
        eventRule: eventRule,
        systemServiceRule: systemServiceRule,
        metricRule: metricRule,
        severity: 'critical'
      };
      var newAlert = gs.createRecord(opt);
      return newAlert;
    },
    loadClusterResource: function loadClusterResource(clusterId, id, groupId) {
      var _this = this;

      var globalStore = Ember.get(this, 'globalStore');
      var newAlert;

      if (id) {
        newAlert = globalStore.find('clusterAlertRule', id).then(function (alert) {
          var cloned = alert.cloneForNew();
          return _this.loadClusterRule(cloned);
        });
      } else {
        newAlert = this.getNewClusterAlert(clusterId, groupId);
      }

      var opt = {
        filter: {
          clusterId: clusterId
        }
      };
      return Ember.RSVP.hash({
        nodes: globalStore.find('node', null, opt),
        notifiers: globalStore.find('notifier', null, opt),
        alertRule: newAlert,
        alertGroup: globalStore.find('clusterAlertGroup', groupId)
      }).then(function (hash) {
        return {
          nodes: hash.nodes,
          notifiers: hash.notifiers,
          alertRule: hash.alertRule,
          alertGroup: hash.alertGroup,
          mode: 'new',
          level: 'rule'
        };
      });
    },
    getNewProjectAlert: function getNewProjectAlert(projectId, groupId) {
      var gs = Ember.get(this, 'globalStore');
      var podRule = gs.createRecord({
        type: 'podRule'
      });
      var workloadRule = gs.createRecord({
        type: 'workloadRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'projectAlertRule',
        projectId: projectId,
        initialWaitSeconds: 180,
        repeatIntervalSeconds: 3600,
        targetName: null,
        groupId: groupId,
        podRule: podRule,
        workloadRule: workloadRule,
        metricRule: metricRule
      };
      var newAlert = gs.createRecord(opt);
      return newAlert;
    },
    loadProjectResource: function loadProjectResource(_ref) {
      var _this2 = this;

      var clusterId = _ref.clusterId,
          projectId = _ref.projectId,
          id = _ref.id,
          groupId = _ref.groupId;
      var store = Ember.get(this, 'store');
      var globalStore = Ember.get(this, 'globalStore');
      var newAlert;

      if (id) {
        newAlert = globalStore.find('projectAlertRule', id).then(function (alert) {
          var cloned = alert.cloneForNew();
          return _this2.loadProjectRule(cloned);
        });
      } else {
        newAlert = this.getNewProjectAlert(projectId);
      }

      var opt = {
        filter: {
          projectId: projectId
        }
      };
      return Ember.RSVP.hash({
        pods: store.find('pod', null, opt),
        workloads: store.find('workload', null, opt),
        notifiers: globalStore.find('notifier', null, {
          filter: {
            clusterId: clusterId
          }
        }),
        alertRule: newAlert,
        alertGroup: globalStore.find('projectAlertGroup', groupId)
      }).then(function (_ref2) {
        var pods = _ref2.pods,
            workloads = _ref2.workloads,
            notifiers = _ref2.notifiers,
            alertRule = _ref2.alertRule,
            alertGroup = _ref2.alertGroup;
        return {
          pods: pods,
          workloads: workloads,
          notifiers: notifiers,
          alertRule: alertRule,
          alertGroup: alertGroup,
          mode: 'new',
          level: 'rule'
        };
      });
    }
  });

  _exports.default = _default;
});
define("alert/new-rule/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1CMP8VLk",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"alert-rule/new-edit\",null,[[\"resourceMap\",\"isCreate\"],[[23,[\"model\"]],true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/new-rule/template.hbs"
    }
  });

  _exports.default = _default;
});
define("alert/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id']
  });

  _exports.default = _default;
});
define("alert/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    model: function model(params, transition) {
      var pageScope = Ember.get(this, 'pageScope');

      if (pageScope === 'cluster') {
        var clusterId = transition.params['authenticated.cluster'].cluster_id;
        return this.loadClusterResource(clusterId);
      } else {
        var projectId = transition.params['authenticated.project'].project_id;

        var _clusterId = projectId.split(':');

        return this.loadProjectResource({
          projectId: projectId,
          clusterId: _clusterId
        });
      }
    },
    resetController: function resetController(controller, isExiting
    /* , transition*/
    ) {
      if (isExiting) {
        Ember.set(controller, 'id', null);
      }
    },
    getNewClusterAlert: function getNewClusterAlert(clusterId) {
      var gs = Ember.get(this, 'globalStore');
      var nodeRule = gs.createRecord({
        type: 'nodeRule'
      });
      var systemServiceRule = gs.createRecord({
        type: 'systemServiceRule'
      });
      var eventRule = gs.createRecord({
        type: 'eventRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'clusterAlertRule',
        clusterId: clusterId,
        nodeRule: nodeRule,
        eventRule: eventRule,
        systemServiceRule: systemServiceRule,
        metricRule: metricRule,
        severity: 'critical'
      };
      var newAlert = gs.createRecord(opt);
      return Ember.RSVP.resolve([newAlert]);
    },
    loadClusterResource: function loadClusterResource(clusterId) {
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          clusterId: clusterId
        }
      };
      return Ember.RSVP.hash({
        nodes: globalStore.find('node', null, opt),
        notifiers: globalStore.find('notifier', null, opt),
        alertRules: this.getNewClusterAlert(),
        alertGroup: globalStore.createRecord({
          type: 'clusterAlertGroup'
        })
      }).then(function (hash) {
        return {
          nodes: hash.nodes,
          notifiers: hash.notifiers,
          alertRules: hash.alertRules,
          alertGroup: hash.alertGroup,
          mode: 'new',
          level: 'group'
        };
      });
    },
    getNewProjectAlert: function getNewProjectAlert(projectId) {
      var gs = Ember.get(this, 'globalStore');
      var podRule = gs.createRecord({
        type: 'podRule'
      });
      var workloadRule = gs.createRecord({
        type: 'workloadRule'
      });
      var metricRule = gs.createRecord({
        type: 'metricRule',
        comparison: 'greater-than',
        duration: '5m',
        thresholdValue: 0
      });
      var opt = {
        type: 'projectAlertRule',
        projectId: projectId,
        initialWaitSeconds: 180,
        repeatIntervalSeconds: 3600,
        targetName: null,
        podRule: podRule,
        workloadRule: workloadRule,
        metricRule: metricRule
      };
      var newAlert = gs.createRecord(opt);
      return Ember.RSVP.resolve([newAlert]);
    },
    loadProjectResource: function loadProjectResource(_ref) {
      var clusterId = _ref.clusterId,
          projectId = _ref.projectId;
      var store = Ember.get(this, 'store');
      var globalStore = Ember.get(this, 'globalStore');
      var opt = {
        filter: {
          projectId: projectId
        }
      };
      return Ember.RSVP.hash({
        pods: store.find('pod', null, opt),
        workloads: store.find('workload', null, opt),
        notifiers: globalStore.find('notifier', null, {
          filter: {
            clusterId: clusterId
          }
        }),
        alertRules: this.getNewProjectAlert(),
        alertGroup: globalStore.createRecord({
          type: 'projectAlertGroup'
        })
      }).then(function (_ref2) {
        var pods = _ref2.pods,
            workloads = _ref2.workloads,
            notifiers = _ref2.notifiers,
            alertRules = _ref2.alertRules,
            alertGroup = _ref2.alertGroup;
        return {
          pods: pods,
          workloads: workloads,
          notifiers: notifiers,
          alertRules: alertRules,
          alertGroup: alertGroup,
          mode: 'new',
          level: 'group'
        };
      });
    }
  });

  _exports.default = _default;
});
define("alert/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "23qgoafe",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"alert/new-edit\",null,[[\"resourceMap\",\"isCreate\"],[[23,[\"model\"]],true]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/new/template.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/oauth/service", "alert/oauth/service");
define.alias("shared/pipeline-github/service", "alert/pipeline-github/service");
define.alias("shared/prefs/service", "alert/prefs/service");
define("alert/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "alert/resource-actions/service");
define.alias("shared/role-template/service", "alert/role-template/service");
define.alias("shared/saml/service", "alert/saml/service");
define.alias("shared/scope/service", "alert/scope/service");
define.alias("ivy-codemirror/services/code-mirror", "alert/services/code-mirror");
define("alert/services/cookies", ["exports", "@rancher/ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "alert/services/intl");
define("alert/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "alert/session/service");
define.alias("shared/settings/service", "alert/settings/service");
define("alert/shared/tests/addon.lint-test", [], function () {
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
define("alert/shared/tests/app.lint-test", [], function () {
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
define("alert/shared/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define.alias("shared/shibboleth-auth/service", "alert/shibboleth-auth/service");
define.alias("shared/store-reset/service", "alert/store-reset/service");
define.alias("shared/tab-session/service", "alert/tab-session/service");
define("alert/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AUe6BPBD",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "alert/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("shared/tooltip/service", "alert/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "alert/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "alert/transitions/default");
define.alias("liquid-fire/transitions/explode", "alert/transitions/explode");
define.alias("liquid-fire/transitions/fade", "alert/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "alert/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "alert/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "alert/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "alert/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "alert/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "alert/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "alert/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "alert/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "alert/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "alert/transitions/wait");
define.alias("shared/user-language/service", "alert/user-language/service");
define.alias("shared/user-theme/service", "alert/user-theme/service");
define.alias("shared/utils/add-view-action", "alert/utils/add-view-action");
define.alias("shared/utils/additional-routes", "alert/utils/additional-routes");
define.alias("shared/utils/azure-choices", "alert/utils/azure-choices");
define.alias("shared/utils/browser-storage", "alert/utils/browser-storage");
define.alias("shared/utils/constants", "alert/utils/constants");
define.alias("shared/utils/convert-yaml", "alert/utils/convert-yaml");
define.alias("shared/utils/debounce", "alert/utils/debounce");
define.alias("shared/utils/download-files", "alert/utils/download-files");
define.alias("shared/utils/errors", "alert/utils/errors");
define.alias("shared/utils/fetch-yaml", "alert/utils/fetch-yaml");
define("alert/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "alert/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "alert/utils/group-compound-layout");
define("alert/utils/intl/missing-message", ["exports"], function (_exports) {
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
define.alias("shared/utils/load-script", "alert/utils/load-script");
define.alias("shared/utils/multi-stats", "alert/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "alert/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "alert/utils/parse-externalid");
define.alias("shared/utils/parse-port", "alert/utils/parse-port");
define.alias("shared/utils/parse-target", "alert/utils/parse-target");
define.alias("shared/utils/parse-unit", "alert/utils/parse-unit");
define.alias("shared/utils/parse-uri", "alert/utils/parse-uri");
define.alias("shared/utils/parse-version", "alert/utils/parse-version");
define.alias("shared/utils/percent-gauge", "alert/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "alert/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "alert/utils/pipelineStep");
define.alias("shared/utils/platform", "alert/utils/platform");
define.alias("shared/utils/queue", "alert/utils/queue");
define.alias("shared/utils/rackspace-choices", "alert/utils/rackspace-choices");
define.alias("shared/utils/search-text", "alert/utils/search-text");
define.alias("shared/utils/socket", "alert/utils/socket");
define.alias("shared/utils/sort", "alert/utils/sort");
define.alias("shared/utils/traffic-renderer", "alert/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "alert/utils/used-percent-gauge");
define.alias("shared/utils/util", "alert/utils/util");//# sourceMappingURL=engine.map
