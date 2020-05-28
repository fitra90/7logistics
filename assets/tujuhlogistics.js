'use strict';



;define("tujuhlogistics/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("tujuhlogistics/app", ["exports", "tujuhlogistics/resolver", "ember-load-initializers", "tujuhlogistics/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("tujuhlogistics/components/navbar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("tujuhlogistics/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("tujuhlogistics/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("tujuhlogistics/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("tujuhlogistics/helpers/app-version", ["exports", "tujuhlogistics/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("tujuhlogistics/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("tujuhlogistics/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("tujuhlogistics/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "tujuhlogistics/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("tujuhlogistics/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("tujuhlogistics/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("tujuhlogistics/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("tujuhlogistics/initializers/export-application-global", ["exports", "tujuhlogistics/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("tujuhlogistics/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("tujuhlogistics/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("tujuhlogistics/router", ["exports", "tujuhlogistics/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("tujuhlogistics/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("tujuhlogistics/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("tujuhlogistics/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("tujuhlogistics/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("tujuhlogistics/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("tujuhlogistics/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("tujuhlogistics/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oGX/yvi5",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tujuhlogistics/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("tujuhlogistics/templates/components/navbar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YfgifB4z",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[11,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light shadow-sm\"],[9],[0,\"\\n  \"],[7,\"a\"],[11,\"class\",\"navbar-brand\"],[11,\"href\",\"#\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"img-fluid\"],[11,\"src\",\"/images/small-logo.png\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"class\",\"navbar-toggler\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-target\",\"#myMenu\"],[11,\"aria-controls\",\"myMenu\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-label\",\"Toggle navigation\"],[11,\"type\",\"button\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"navbar-toggler-icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"myMenu\"],[11,\"class\",\"navbar-collapse collapse w-100 order-3 dual-collapse2\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"navbar-nav ml-auto\"],[9],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"nav-item nav-link\"],[11,\"href\",\"#section1\"],[9],[0,\"\\n          HOME\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"nav-item nav-link\"],[11,\"href\",\"#section2\"],[9],[0,\"\\n          SERVICE\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"nav-item nav-link\"],[11,\"href\",\"#section3\"],[9],[0,\"\\n          WORK\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"nav-item nav-link\"],[11,\"href\",\"#section4\"],[9],[0,\"\\n          CONTACT\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tujuhlogistics/templates/components/navbar.hbs"
    }
  });

  _exports.default = _default;
});
;define("tujuhlogistics/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vDYR08dq",
    "block": "{\"symbols\":[],\"statements\":[[5,\"navbar\",[],[[],[]]],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"section1\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"h1\"],[11,\"class\",\"bigetron\"],[9],[0,\"\\n          POSSIBILITY IN\\n          \"],[7,\"br\"],[9],[10],[0,\"\\n          EVERY DIRECTION\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"bigetron\"],[9],[0,\"\\n          Melayani seluruh lapisan masyarakat di Indonesia\\n          dengan menjadi tuan rumah di negeri sendiri dan\\n          menjadi pelopor berkembangnya bisnis jasa\\n          pengiriman barang dalam negeri yang berorientasi\\n          dan saling bersinergi membangun bangsa.\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"class\",\"bigetron img-fluid\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/medium-logo.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"section1-1\"],[11,\"class\",\"container-fluid panorama\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"section2\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"\\n          SERVICE\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"subtitle\"],[9],[0,\"\\n          Kami mempunyai 4 (empat) jenis service pengiriman via udara, darat & laut.\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n        \"],[7,\"center\"],[9],[0,\"\\n          \"],[7,\"h2\"],[9],[0,\"\\n            SAME DAY SERVICE (SDS)\\n          \"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"\\n            Service pengiriman yang dilaksanakan secara\\n            cepat, paket dapat diterima di alamat yang dituju\\n            pada hari yang sama sampai dengan jam 23:59\\n            waktu setempat\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"img\"],[11,\"class\",\"img-page-2\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/image-page-2-00.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-2\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"class\",\"icon-page-2\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/complete-icon-page-2-00.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[11,\"style\",\"padding-left: 5%;\"],[9],[0,\"\\n        \"],[7,\"center\"],[9],[0,\"\\n          \"],[7,\"h2\"],[9],[0,\"\\n            OVER NIGHT SERVICE (ONS)\\n          \"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"\\n            Adalah pengiriman yang dilaksanakan secara\\n            cepat dan paket akan tiba pada keesokan harinya\\n            pada alamat tujuan.\\n          \"],[10],[0,\"\\n          \"],[7,\"h2\"],[9],[0,\"\\n            REGULER SERVICE (RS)\\n          \"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"\\n            Pengiriman yang dilaksanakan secara regular\\n            dengan lead time kurang lebih 2-4 hari.\\n          \"],[10],[0,\"\\n          \"],[7,\"h2\"],[11,\"style\",\"margin-top: 10%; pading-left:5%;\"],[9],[0,\"\\n            CITY COURIER (CC)\\n          \"],[10],[0,\"\\n          \"],[7,\"p\"],[9],[0,\"\\n            Pengantaran dokumen atau parcel hanya untuk dalam kota.\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"section3\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"\\n          WORKS\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"subtitle\"],[9],[0,\"\\n          Kami bermitra dengan \"],[7,\"i\"],[9],[0,\"startup\"],[10],[0,\" dan perusahaan berskala nasional:\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"class\",\"img-page-3 float-right\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/image-page-3-00.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"margin-top: 50px;\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n        \"],[7,\"center\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"style\",\"width:150px; margin-right: 20px;\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/pp.png\"]]],[11,\"alt\",\"Distribusi material project PT. PP Persero untuk Wilayah Indonesia Timur\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[11,\"width\",\"120px\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-01.png\"]]],[11,\"alt\",\"Distribusi Mesin dan suku cadang PT Hino\"],[11,\"title\",\"Distribusi Mesin dan suku cadang PT Hino\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-02.png\"]]],[11,\"alt\",\"huawei\"],[11,\"title\",\"Distribusi perangkat Huawei\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-03.png\"]]],[11,\"alt\",\"telkom\"],[11,\"title\",\"Distribusi Modem untuk ke seluruh cabang Telkom Indonesia\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-04.png\"]]],[11,\"alt\",\"kpu\"],[11,\"title\",\"Distribusi DCT & DPC Komisi Pemilihan Umum ke seluruh area dan pelosok Indonesia\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-05.png\"]]],[11,\"alt\",\"\"],[11,\"title\",\"\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"margin-top: 50px;\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n        \"],[7,\"center\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"width\",\"120px\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/jne.png\"]]],[11,\"alt\",\"jne\"],[11,\"title\",\"Distribusi gudang ke gudang JNE\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-06.png\"]]],[11,\"alt\",\"abb-sakti-industry\"],[11,\"title\",\"Distribusi Mesin dan suku cadang PT ABB\"],[11,\"style\",\"margin-left: 10px;\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-07.png\"]]],[11,\"alt\",\"so-good\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-08.png\"]]],[11,\"alt\",\"mr.diy\"],[11,\"title\",\"Distribusi hardware & tools ke outlet MR. DIY\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/logo-page-3-09.png\"]]],[11,\"alt\",\"e-commerce\"],[11,\"title\",\"Distribusi barang E commerce ke seluruh P. Jawa dan Denpasar\"],[9],[10],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/kawasaki.png\"]]],[11,\"alt\",\"kawasaki\"],[11,\"title\",\"Distribusi Mesin dan suku cadang PT Kawasaki\"],[11,\"style\",\"width: 120px; margin-left: 20px;\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"section4\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"\\n          CONTACT\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"h5\"],[9],[0,\"\\n          \"],[7,\"b\"],[9],[0,\"\\n            \"],[7,\"i\"],[9],[0,\"\\n              HEAD OFFICE:\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n          Jl. Jambore No. 4, Harjamukti\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n          Cimanggis, Depok\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"h5\"],[9],[0,\"\\n          \"],[7,\"b\"],[9],[0,\"\\n            \"],[7,\"i\"],[9],[0,\"\\n              CONTACT:\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n          081 11 3533 77\\n        \"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n          Email: info@tujuhlogistics.com\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"target\",\"_blank\"],[11,\"href\",\"https://www.instagram.com/tujuhlogistics/\"],[9],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/icon-page-4-instagram.png\"]]],[9],[10],[10],[0,\"\\n         \\n         \\n         \\n        \"],[7,\"a\"],[11,\"target\",\"_blank\"],[11,\"href\",\"https://api.whatsapp.com/send?phone=6281337301777\"],[9],[7,\"img\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/icon-page-4-whatsapp.png\"]]],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"class\",\"float-right img-page-4\"],[12,\"src\",[30,[[23,\"rootURL\"],\"/images/image-page-4-01.png\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[11,\"style\",\"padding: 50px;\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6 social-media\"],[9],[0,\"\\n\"],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"float-right\"],[9],[0,\"\\n          © 2020 Tujuh Logistics. All rights reserved\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "tujuhlogistics/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("tujuhlogistics/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("tujuhlogistics/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("tujuhlogistics/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("tujuhlogistics/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('tujuhlogistics/config/environment', [], function() {
  var prefix = 'tujuhlogistics';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("tujuhlogistics/app")["default"].create({"name":"tujuhlogistics","version":"0.0.0+fbbbc766"});
          }
        
//# sourceMappingURL=tujuhlogistics.map
