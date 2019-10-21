'use strict';

define("ui/tests/helpers/data-transfer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var c = Ember.Object.extend({
    getData: function getData() {
      return this.get('payload');
    },
    setData: function setData(dataType, payload) {
      this.set("data", {
        dataType: dataType,
        payload: payload
      });
    }
  });
  c.reopenClass({
    makeMockEvent: function makeMockEvent(payload) {
      var transfer = this.create({
        payload: payload
      });
      var res = {
        dataTransfer: transfer
      };
      res.originalEvent = res;

      res.originalEvent.preventDefault = function () {
        console.log('prevent default');
      };

      res.originalEvent.stopPropagation = function () {
        console.log('stop propagation');
      };

      return res;
    },
    createDomEvent: function createDomEvent(type) {
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent(type, true, true, null);
      event.dataTransfer = {
        data: {},
        setData: function setData(type, val) {
          this.data[type] = val;
        },
        getData: function getData(type) {
          return this.data[type];
        }
      };
      return event;
    }
  });
  var _default = c;
  _exports.default = _default;
});
define("ui/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define("ui/tests/helpers/drag-drop", ["exports", "ember-native-dom-helpers", "ui/tests/helpers/mock-event"], function (_exports, _emberNativeDomHelpers, _mockEvent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.drag = drag;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function dragOver(_x, _x2) {
    return _dragOver.apply(this, arguments);
  }

  function _dragOver() {
    _dragOver = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(dropSelector, moves) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              moves = moves || [[{
                clientX: 1,
                clientY: 1
              }, dropSelector]];
              return _context2.abrupt("return", moves.forEach(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(_ref) {
                  var _ref3, position, selector, event;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _ref3 = _slicedToArray(_ref, 2), position = _ref3[0], selector = _ref3[1];
                          event = new _mockEvent.default(position);
                          _context.next = 4;
                          return (0, _emberNativeDomHelpers.triggerEvent)(selector || dropSelector, 'dragover', event);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x7) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _dragOver.apply(this, arguments);
  }

  function drop(_x3, _x4, _x5) {
    return _drop.apply(this, arguments);
  }

  function _drop() {
    _drop = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(dragSelector, dragEvent, options) {
      var dropSelector, dropEndOptions, dragOverMoves, dropElement, event;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dropSelector = options.drop, dropEndOptions = options.dropEndOptions, dragOverMoves = options.dragOverMoves;
              _context3.next = 3;
              return (0, _emberNativeDomHelpers.find)(dropSelector);

            case 3:
              dropElement = _context3.sent;

              if (dropElement) {
                _context3.next = 6;
                break;
              }

              throw "There are no drop targets by the given selector: '".concat(dropSelector, "'");

            case 6:
              _context3.next = 8;
              return dragOver(dropSelector, dragOverMoves);

            case 8:
              if (!options.beforeDrop) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return options.beforeDrop.call();

            case 11:
              event = new _mockEvent.default().useDataTransferData(dragEvent);
              _context3.next = 14;
              return (0, _emberNativeDomHelpers.triggerEvent)(dropSelector, 'drop', event);

            case 14:
              _context3.next = 16;
              return (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'dragend', dropEndOptions);

            case 16:
              return _context3.abrupt("return", _context3.sent);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _drop.apply(this, arguments);
  }

  function drag(_x6) {
    return _drag.apply(this, arguments);
  }

  function _drag() {
    _drag = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(dragSelector) {
      var options,
          dragEvent,
          _args4 = arguments;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              dragEvent = new _mockEvent.default(options.dragStartOptions);
              _context4.next = 4;
              return (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'mouseover');

            case 4:
              _context4.next = 6;
              return (0, _emberNativeDomHelpers.triggerEvent)(dragSelector, 'dragstart', dragEvent);

            case 6:
              if (!options.afterDrag) {
                _context4.next = 9;
                break;
              }

              _context4.next = 9;
              return options.afterDrag.call();

            case 9:
              if (!options.drop) {
                _context4.next = 12;
                break;
              }

              _context4.next = 12;
              return drop(dragSelector, dragEvent, options);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    return _drag.apply(this, arguments);
  }
});
define("ui/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    var component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
    var emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    var action = component[actionName];
    Ember.run(function () {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("ui/tests/helpers/ember-drag-drop", ["exports", "ui/tests/helpers/data-transfer"], function (_exports, _dataTransfer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.drag = drag;

  /* global triggerEvent , andThen */
  function drop($dragHandle, dropCssPath, dragEvent) {
    var $dropTarget = Ember.$(dropCssPath);

    if ($dropTarget.length === 0) {
      throw "There are no drop targets by the given selector: '".concat(dropCssPath, "'");
    }

    Ember.run(function () {
      triggerEvent($dropTarget, 'dragover', _dataTransfer.default.makeMockEvent());
    });
    Ember.run(function () {
      triggerEvent($dropTarget, 'drop', _dataTransfer.default.makeMockEvent(dragEvent.dataTransfer.get('data.payload')));
    });
    Ember.run(function () {
      triggerEvent($dragHandle, 'dragend', _dataTransfer.default.makeMockEvent());
    });
  }

  function drag(cssPath) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var dragEvent = _dataTransfer.default.makeMockEvent();

    var $dragHandle = Ember.$(cssPath);
    Ember.run(function () {
      triggerEvent($dragHandle, 'mouseover');
    });
    Ember.run(function () {
      triggerEvent($dragHandle, 'dragstart', dragEvent);
    });
    andThen(function () {
      if (options.beforeDrop) {
        options.beforeDrop.call();
      }
    });
    andThen(function () {
      if (options.drop) {
        drop($dragHandle, options.drop, dragEvent);
      }
    });
  }
});
define("ui/tests/helpers/mock-event", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createDomEvent = createDomEvent;
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var DataTransfer =
  /*#__PURE__*/
  function () {
    function DataTransfer() {
      _classCallCheck(this, DataTransfer);

      this.data = {};
    }

    _createClass(DataTransfer, [{
      key: "setData",
      value: function setData(type, value) {
        this.data[type] = value;
        return this;
      }
    }, {
      key: "getData",
      value: function getData() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Text";
        return this.data[type];
      }
    }, {
      key: "setDragImage",
      value: function setDragImage() {}
    }]);

    return DataTransfer;
  }();

  var MockEvent =
  /*#__PURE__*/
  function () {
    function MockEvent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MockEvent);

      this.dataTransfer = new DataTransfer();
      this.dataTransfer.setData('Text', options.dataTransferData);
      this.originalEvent = this;
      this.setProperties(options);
    }

    _createClass(MockEvent, [{
      key: "useDataTransferData",
      value: function useDataTransferData(otherEvent) {
        this.dataTransfer.setData('Text', otherEvent.dataTransfer.getData());
        return this;
      }
    }, {
      key: "setProperties",
      value: function setProperties(props) {
        for (var prop in props) {
          this[prop] = props[prop];
        }

        return this;
      }
    }, {
      key: "preventDefault",
      value: function preventDefault() {}
    }, {
      key: "stopPropagation",
      value: function stopPropagation() {}
    }]);

    return MockEvent;
  }();

  _exports.default = MockEvent;

  function createDomEvent(type) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, null);
    event.dataTransfer = new DataTransfer();
    return event;
  }
});
define("ui/tests/helpers/module-for-acceptance", ["exports", "qunit", "ui/tests/helpers/start-app", "ui/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  }
});
define("ui/tests/helpers/resolver", ["exports", "ui/resolver", "ui/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("ui/tests/helpers/start-app", ["exports", "ui/app", "ui/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("ui/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/controller.js should pass ESLint\n\n');
  });
  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });
  QUnit.test('apps-tab/detail/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apps-tab/detail/controller.js should pass ESLint\n\n');
  });
  QUnit.test('apps-tab/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apps-tab/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('apps-tab/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apps-tab/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('apps-tab/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'apps-tab/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/apikeys/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/apikeys/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/apikeys/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/apikeys/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/backups/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/backups/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/backups/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/backups/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/cluster-catalogs/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/cluster-catalogs/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/cluster-catalogs/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/cluster-catalogs/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/nodes/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/nodes/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/nodes/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/nodes/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/notifier/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/notifier/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/notifier/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/notifier/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/new-ns/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/new-ns/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/new-ns/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/new-ns/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/projects/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/projects/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/security/members/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/security/members/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/security/members/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/security/members/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/security/members/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/security/members/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/security/members/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/security/members/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/security/members/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/security/members/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/classes/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/classes/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/cluster/storage/persistent-volumes/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/cluster/storage/persistent-volumes/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/dummy-dev/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/dummy-dev/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/dummy-dev/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/dummy-dev/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/prefs/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/prefs/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/prefs/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/prefs/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/certificates/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/certificates/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/config-maps/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/config-maps/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/console/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/console/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/console/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/console/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/container-log/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/container-log/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/container-log/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/container-log/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/dns/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/dns/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/help/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/help/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/help/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/help/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/hpa/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/hpa/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/ns/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/ns/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/ns/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/ns/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/project-catalogs/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/project-catalogs/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/project-catalogs/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/project-catalogs/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/registries/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/registries/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/detail/edit/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/detail/edit/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/detail/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/detail/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/secrets/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/secrets/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/security/members/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/security/members/edit/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/security/members/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/security/members/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/security/members/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/security/members/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/security/members/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/security/members/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/project/security/members/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/project/security/members/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('authenticated/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticated/route.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/controller.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/launch/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/launch/controller.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/launch/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/launch/route.js should pass ESLint\n\n');
  });
  QUnit.test('catalog-tab/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'catalog-tab/route.js should pass ESLint\n\n');
  });
  QUnit.test('components/accordion-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/accordion-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/accordion-pod/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/accordion-pod/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/apikey-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/apikey-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/authorize-user/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/authorize-user/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/basic-dropdown/content-element.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/basic-dropdown/content-element.js should pass ESLint\n\n');
  });
  QUnit.test('components/certificate-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/certificate-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/config-map-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/config-map-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container-default-limit/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-default-limit/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container-dot/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-dot/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container-logs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-logs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container-metrics/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-metrics/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-command/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-command/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-custom-metrics/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-custom-metrics/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-image/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-image/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-job-config/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-job-config/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-networking/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-networking/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-ports/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-ports/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-scale/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-scale/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-scheduling/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-scheduling/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-security/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-security/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-sources/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-sources/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-cron-job/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-cron-job/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-daemon-set/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-daemon-set/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-deployment/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-deployment/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-job/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-job/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-replica-set/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-replica-set/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-replication-controller/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-replication-controller/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade-stateful-set/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade-stateful-set/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-upgrade/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-upgrade/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-volume-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-volume-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/form-volumes/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/form-volumes/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/container/new-edit/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container/new-edit/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-dns/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-dns/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-hpa/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-hpa/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-persistent-volume-claim/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-persistent-volume-claim/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-persistent-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-persistent-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-registry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-registry/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-storage-class/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-storage-class/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-volume-claim-template/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-volume-claim-template/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/cru-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cru-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/dns-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/dns-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-access-modes/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-access-modes/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-endpoints/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-endpoints/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-env-var/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-env-var/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-healthcheck/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-healthcheck/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-key-to-path/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-key-to-path/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-node-affinity/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-node-affinity/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-node-requirement/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-node-requirement/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-node-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-node-selector/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-related-workloads/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-related-workloads/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-scoped-roles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-scoped-roles/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-service-ports/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-service-ports/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/form-sources-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/form-sources-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/hpa-metric-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hpa-metric-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/hpa-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hpa-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/identity-avatar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/identity-avatar/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/input-command/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-command/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/input-edit-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-edit-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/input-files/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-files/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/input-random-port/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-random-port/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/input-resource-quota/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-resource-quota/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-about/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-about/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-container-logs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-container-logs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-drain-node/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-drain-node/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-apikey/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-apikey/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-host/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-host/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-namespace/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-namespace/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-node-pool/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-node-pool/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-edit-setting/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-edit-setting/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-feedback/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-feedback/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-import/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-import/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-kubeconfig/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-kubeconfig/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-kubectl/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-kubectl/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-new-pvc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-new-pvc/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-new-vct/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-new-vct/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-new-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-new-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-restore-backup/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-restore-backup/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-rollback-app/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-rollback-app/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-rollback-mc-app/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-rollback-mc-app/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-rollback-service/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-rollback-service/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-rotate-certificates/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-rotate-certificates/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-shortcuts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-shortcuts/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-telemetry/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-telemetry/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/modal-wechat/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-wechat/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/namespace-app/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/namespace-app/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/namespace-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/namespace-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/namespace-quota-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/namespace-quota-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/namespace-resource-quota/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/namespace-resource-quota/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/namespace-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/namespace-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/new-catalog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-catalog/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/new-edit-ingress/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-edit-ingress/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/new-edit-project/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-edit-project/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/new-password/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-password/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/node-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/node-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/node-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/node-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/node-selector-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/node-selector-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/node-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/node-selector/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/notifier/modal-new-edit/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notifier/modal-new-edit/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/notifier/notifier-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notifier/notifier-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/notifier/notifier-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notifier/notifier-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/optionally-namespaced/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/optionally-namespaced/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/page-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-footer/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/page-header-project/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-header-project/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/page-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/persistent-volume-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/persistent-volume-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pod-dots/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pod-dots/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pod-metrics/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pod-metrics/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/pod-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pod-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/progress-bar-multi/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/progress-bar-multi/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-group/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-group/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-quota-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-quota-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-resource-quota/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-resource-quota/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/project-table/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-table/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/registry-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/registry-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/resource-quota-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/resource-quota-select/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/secret-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/secret-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/security-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/security-header/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/billing-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/billing-info/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/server-url/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/server-url/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/table-rows/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/table-rows/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/telemetry-opt/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/telemetry-opt/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/theme-toggle/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/theme-toggle/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/settings/user-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/settings/user-info/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-aws-ebs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-aws-ebs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-azure-disk/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-azure-disk/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-azure-file/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-azure-file/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-cephfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-cephfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-certificate/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-certificate/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-cinder/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-cinder/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-config-map/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-config-map/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-custom-log-path/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-custom-log-path/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-empty-dir/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-empty-dir/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-fc/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-fc/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-flex-volume-longhorn/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-flex-volume-longhorn/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-flex-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-flex-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-flocker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-flocker/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-gce-pd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-gce-pd/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-glusterfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-glusterfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-host-path/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-host-path/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-iscsi/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-iscsi/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-local/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-local/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-nfs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-nfs/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-photon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-photon/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-portworx/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-portworx/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-quobyte/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-quobyte/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-rbd/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-rbd/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-scaleio/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-scaleio/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-secret/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-secret/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-storageos/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-storageos/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/volume-source/source-vsphere-volume/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/volume-source/source-vsphere-volume/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/workload-metrics/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workload-metrics/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/workload-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/workload-row/component.js should pass ESLint\n\n');
  });
  QUnit.test('container/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'container/controller.js should pass ESLint\n\n');
  });
  QUnit.test('container/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'container/route.js should pass ESLint\n\n');
  });
  QUnit.test('containers/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'containers/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('containers/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'containers/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('containers/run/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'containers/run/controller.js should pass ESLint\n\n');
  });
  QUnit.test('containers/run/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'containers/run/route.js should pass ESLint\n\n');
  });
  QUnit.test('fail-whale/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'fail-whale/route.js should pass ESLint\n\n');
  });
  QUnit.test('formats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'formats.js should pass ESLint\n\n');
  });
  QUnit.test('ie/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ie/controller.js should pass ESLint\n\n');
  });
  QUnit.test('infrastructure-tab/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'infrastructure-tab/controller.js should pass ESLint\n\n');
  });
  QUnit.test('infrastructure-tab/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'infrastructure-tab/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('ingress/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ingress/route.js should pass ESLint\n\n');
  });
  QUnit.test('ingresses/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ingresses/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('ingresses/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ingresses/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('ingresses/run/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ingresses/run/controller.js should pass ESLint\n\n');
  });
  QUnit.test('ingresses/run/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ingresses/run/route.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/app.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/aws-sdk.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/aws-sdk.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/cluster-store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/cluster-store.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/extend-ember-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/extend-ember-input.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/extend-ember-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/extend-ember-link.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/extend-ember-route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/extend-ember-route.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/extend-jquery.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/extend-jquery.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/extend-resource.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/extend-resource.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/global-store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/global-store.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/growl.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/growl.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/inject-application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/inject-application.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/inject-router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/inject-router.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/polyfill-intl.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/polyfill-intl.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/polyfill-svg.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/polyfill-svg.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/session.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/session.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/touch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/touch.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/viewport.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/viewport.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/webhook-store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/webhook-store.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/cluster-store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/cluster-store.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/global-store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/global-store.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/intl.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/intl.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/lookup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/lookup.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/nav.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/store.js should pass ESLint\n\n');
  });
  QUnit.test('instance-initializers/theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/theme.js should pass ESLint\n\n');
  });
  QUnit.test('ll/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'll/service.js should pass ESLint\n\n');
  });
  QUnit.test('loading/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'loading/controller.js should pass ESLint\n\n');
  });
  QUnit.test('loading/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'loading/route.js should pass ESLint\n\n');
  });
  QUnit.test('logout/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'logout/route.js should pass ESLint\n\n');
  });
  QUnit.test('mixins/logging-model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/logging-model.js should pass ESLint\n\n');
  });
  QUnit.test('mixins/model-alert.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/model-alert.js should pass ESLint\n\n');
  });
  QUnit.test('mixins/notifier.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/notifier.js should pass ESLint\n\n');
  });
  QUnit.test('mixins/principal-reference.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/principal-reference.js should pass ESLint\n\n');
  });
  QUnit.test('mixins/verify-auth.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/verify-auth.js should pass ESLint\n\n');
  });
  QUnit.test('models/activedirectoryconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/activedirectoryconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/app.js should pass ESLint\n\n');
  });
  QUnit.test('models/azurekubernetesserviceconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/azurekubernetesserviceconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/catalog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/catalog.js should pass ESLint\n\n');
  });
  QUnit.test('models/catalogtemplate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/catalogtemplate.js should pass ESLint\n\n');
  });
  QUnit.test('models/certificate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/certificate.js should pass ESLint\n\n');
  });
  QUnit.test('models/cloudcredential.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cloudcredential.js should pass ESLint\n\n');
  });
  QUnit.test('models/cluster.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cluster.js should pass ESLint\n\n');
  });
  QUnit.test('models/clusteralertgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clusteralertgroup.js should pass ESLint\n\n');
  });
  QUnit.test('models/clusteralertrule.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clusteralertrule.js should pass ESLint\n\n');
  });
  QUnit.test('models/clustercatalog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clustercatalog.js should pass ESLint\n\n');
  });
  QUnit.test('models/clusterlogging.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clusterlogging.js should pass ESLint\n\n');
  });
  QUnit.test('models/clusterroletemplatebinding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clusterroletemplatebinding.js should pass ESLint\n\n');
  });
  QUnit.test('models/clustertemplate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clustertemplate.js should pass ESLint\n\n');
  });
  QUnit.test('models/clustertemplaterevision.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/clustertemplaterevision.js should pass ESLint\n\n');
  });
  QUnit.test('models/configmap.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/configmap.js should pass ESLint\n\n');
  });
  QUnit.test('models/container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/container.js should pass ESLint\n\n');
  });
  QUnit.test('models/credential.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/credential.js should pass ESLint\n\n');
  });
  QUnit.test('models/cronjob.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cronjob.js should pass ESLint\n\n');
  });
  QUnit.test('models/daemonset.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/daemonset.js should pass ESLint\n\n');
  });
  QUnit.test('models/deployment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/deployment.js should pass ESLint\n\n');
  });
  QUnit.test('models/destinationrule.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/destinationrule.js should pass ESLint\n\n');
  });
  QUnit.test('models/dockercredential.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dockercredential.js should pass ESLint\n\n');
  });
  QUnit.test('models/fluentServers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fluentServers.js should pass ESLint\n\n');
  });
  QUnit.test('models/githubconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/githubconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/globaldns.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/globaldns.js should pass ESLint\n\n');
  });
  QUnit.test('models/globaldnsprovider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/globaldnsprovider.js should pass ESLint\n\n');
  });
  QUnit.test('models/globalrole.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/globalrole.js should pass ESLint\n\n');
  });
  QUnit.test('models/globalrolebinding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/globalrolebinding.js should pass ESLint\n\n');
  });
  QUnit.test('models/googlekubernetesengineconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/googlekubernetesengineconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/googleoauthconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/googleoauthconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/horizontalpodautoscaler.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/horizontalpodautoscaler.js should pass ESLint\n\n');
  });
  QUnit.test('models/httpingresspath.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/httpingresspath.js should pass ESLint\n\n');
  });
  QUnit.test('models/image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/image.js should pass ESLint\n\n');
  });
  QUnit.test('models/ingress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/ingress.js should pass ESLint\n\n');
  });
  QUnit.test('models/job.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/job.js should pass ESLint\n\n');
  });
  QUnit.test('models/kontainerdriver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/kontainerdriver.js should pass ESLint\n\n');
  });
  QUnit.test('models/launchconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/launchconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/localauthconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/localauthconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/member.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/member.js should pass ESLint\n\n');
  });
  QUnit.test('models/mountentry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/mountentry.js should pass ESLint\n\n');
  });
  QUnit.test('models/multiclusterapp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/multiclusterapp.js should pass ESLint\n\n');
  });
  QUnit.test('models/namespace.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/namespace.js should pass ESLint\n\n');
  });
  QUnit.test('models/namespacedcertificate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/namespacedcertificate.js should pass ESLint\n\n');
  });
  QUnit.test('models/namespaceddockercredential.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/namespaceddockercredential.js should pass ESLint\n\n');
  });
  QUnit.test('models/namespacedsecret.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/namespacedsecret.js should pass ESLint\n\n');
  });
  QUnit.test('models/node.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/node.js should pass ESLint\n\n');
  });
  QUnit.test('models/nodedriver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/nodedriver.js should pass ESLint\n\n');
  });
  QUnit.test('models/nodepool.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/nodepool.js should pass ESLint\n\n');
  });
  QUnit.test('models/nodetemplate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/nodetemplate.js should pass ESLint\n\n');
  });
  QUnit.test('models/notifier.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/notifier.js should pass ESLint\n\n');
  });
  QUnit.test('models/openldapconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/openldapconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/persistentvolume.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/persistentvolume.js should pass ESLint\n\n');
  });
  QUnit.test('models/persistentvolumeclaim.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/persistentvolumeclaim.js should pass ESLint\n\n');
  });
  QUnit.test('models/pipeline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pipeline.js should pass ESLint\n\n');
  });
  QUnit.test('models/pipelineexecution.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pipelineexecution.js should pass ESLint\n\n');
  });
  QUnit.test('models/pod.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pod.js should pass ESLint\n\n');
  });
  QUnit.test('models/podsecuritypolicytemplate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/podsecuritypolicytemplate.js should pass ESLint\n\n');
  });
  QUnit.test('models/port.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/port.js should pass ESLint\n\n');
  });
  QUnit.test('models/preference.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/preference.js should pass ESLint\n\n');
  });
  QUnit.test('models/principal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/principal.js should pass ESLint\n\n');
  });
  QUnit.test('models/probe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/probe.js should pass ESLint\n\n');
  });
  QUnit.test('models/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass ESLint\n\n');
  });
  QUnit.test('models/projectalertgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/projectalertgroup.js should pass ESLint\n\n');
  });
  QUnit.test('models/projectalertrule.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/projectalertrule.js should pass ESLint\n\n');
  });
  QUnit.test('models/projectcatalog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/projectcatalog.js should pass ESLint\n\n');
  });
  QUnit.test('models/projectlogging.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/projectlogging.js should pass ESLint\n\n');
  });
  QUnit.test('models/projectroletemplatebinding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/projectroletemplatebinding.js should pass ESLint\n\n');
  });
  QUnit.test('models/publicendpoint.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/publicendpoint.js should pass ESLint\n\n');
  });
  QUnit.test('models/rancherkubernetesengineconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rancherkubernetesengineconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/replicaset.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/replicaset.js should pass ESLint\n\n');
  });
  QUnit.test('models/replicationcontroller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/replicationcontroller.js should pass ESLint\n\n');
  });
  QUnit.test('models/roletemplate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/roletemplate.js should pass ESLint\n\n');
  });
  QUnit.test('models/scalehost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/scalehost.js should pass ESLint\n\n');
  });
  QUnit.test('models/scalinggroup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/scalinggroup.js should pass ESLint\n\n');
  });
  QUnit.test('models/secondarylaunchconfig.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/secondarylaunchconfig.js should pass ESLint\n\n');
  });
  QUnit.test('models/secret.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/secret.js should pass ESLint\n\n');
  });
  QUnit.test('models/secretreference.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/secretreference.js should pass ESLint\n\n');
  });
  QUnit.test('models/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/service.js should pass ESLint\n\n');
  });
  QUnit.test('models/setting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/setting.js should pass ESLint\n\n');
  });
  QUnit.test('models/sourcecodecredential.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/sourcecodecredential.js should pass ESLint\n\n');
  });
  QUnit.test('models/statefulset.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/statefulset.js should pass ESLint\n\n');
  });
  QUnit.test('models/storageclass.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/storageclass.js should pass ESLint\n\n');
  });
  QUnit.test('models/target.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/target.js should pass ESLint\n\n');
  });
  QUnit.test('models/template.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/template.js should pass ESLint\n\n');
  });
  QUnit.test('models/templateversion.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/templateversion.js should pass ESLint\n\n');
  });
  QUnit.test('models/token.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/token.js should pass ESLint\n\n');
  });
  QUnit.test('models/typedocumentation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/typedocumentation.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });
  QUnit.test('models/virtualservice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/virtualservice.js should pass ESLint\n\n');
  });
  QUnit.test('models/volume.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/volume.js should pass ESLint\n\n');
  });
  QUnit.test('models/workload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/workload.js should pass ESLint\n\n');
  });
  QUnit.test('not-found/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'not-found/route.js should pass ESLint\n\n');
  });
  QUnit.test('pod/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/controller.js should pass ESLint\n\n');
  });
  QUnit.test('pod/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('services/app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/app.js should pass ESLint\n\n');
  });
  QUnit.test('signup/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'signup/controller.js should pass ESLint\n\n');
  });
  QUnit.test('signup/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'signup/route.js should pass ESLint\n\n');
  });
  QUnit.test('update-critical-settings/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'update-critical-settings/controller.js should pass ESLint\n\n');
  });
  QUnit.test('update-critical-settings/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'update-critical-settings/route.js should pass ESLint\n\n');
  });
  QUnit.test('update-password/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'update-password/controller.js should pass ESLint\n\n');
  });
  QUnit.test('update-password/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'update-password/route.js should pass ESLint\n\n');
  });
  QUnit.test('verify-auth-azure/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify-auth-azure/route.js should pass ESLint\n\n');
  });
  QUnit.test('verify-auth/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify-auth/route.js should pass ESLint\n\n');
  });
  QUnit.test('verify-reset-password/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify-reset-password/controller.js should pass ESLint\n\n');
  });
  QUnit.test('verify-reset-password/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify-reset-password/route.js should pass ESLint\n\n');
  });
  QUnit.test('verify/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify/controller.js should pass ESLint\n\n');
  });
  QUnit.test('verify/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'verify/route.js should pass ESLint\n\n');
  });
  QUnit.test('volumes/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'volumes/detail/route.js should pass ESLint\n\n');
  });
  QUnit.test('volumes/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'volumes/index/controller.js should pass ESLint\n\n');
  });
  QUnit.test('volumes/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'volumes/index/route.js should pass ESLint\n\n');
  });
  QUnit.test('volumes/new/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'volumes/new/controller.js should pass ESLint\n\n');
  });
  QUnit.test('volumes/new/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'volumes/new/route.js should pass ESLint\n\n');
  });
  QUnit.test('workload/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'workload/controller.js should pass ESLint\n\n');
  });
  QUnit.test('workload/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'workload/route.js should pass ESLint\n\n');
  });
});
define("ui/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ui/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/apps-tab/detail/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/apps-tab/detail/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/apps-tab/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/apps-tab/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/apikeys/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/apikeys/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/backups/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/backups/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/cluster-catalogs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/cluster-catalogs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/nodes/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/nodes/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/notifier/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/notifier/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/projects/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/projects/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/projects/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/projects/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/projects/new-ns/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/projects/new-ns/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/projects/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/projects/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/security/members/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/security/members/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/security/members/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/security/members/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/security/members/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/security/members/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/classes/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/classes/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/classes/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/classes/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/classes/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/classes/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/classes/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/classes/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/persistent-volumes/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/persistent-volumes/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/persistent-volumes/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/persistent-volumes/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/persistent-volumes/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/persistent-volumes/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/storage/persistent-volumes/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/storage/persistent-volumes/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/cluster/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/cluster/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/dummy-dev/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/dummy-dev/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/prefs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/prefs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/certificates/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/certificates/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/certificates/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/certificates/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/certificates/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/certificates/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/certificates/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/certificates/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/config-maps/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/config-maps/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/config-maps/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/config-maps/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/config-maps/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/config-maps/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/config-maps/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/config-maps/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/console/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/console/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/container-log/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/container-log/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/dns/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/dns/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/dns/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/dns/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/dns/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/dns/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/dns/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/dns/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/help/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/help/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/hpa/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/hpa/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/hpa/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/hpa/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/hpa/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/hpa/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/hpa/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/hpa/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/ns/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/ns/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/project-catalogs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/project-catalogs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/registries/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/registries/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/registries/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/registries/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/registries/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/registries/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/registries/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/registries/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/secrets/detail/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/secrets/detail/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/secrets/detail/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/secrets/detail/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/secrets/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/secrets/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/secrets/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/secrets/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/security/members/edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/security/members/edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/security/members/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/security/members/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/security/members/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/security/members/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/project/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/project/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/authenticated/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/authenticated/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/catalog-tab/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/catalog-tab/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/catalog-tab/launch/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/catalog-tab/launch/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/catalog-tab/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/catalog-tab/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/accordion-container/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/accordion-container/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/accordion-pod/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/accordion-pod/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/apikey-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/apikey-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/authorize-user/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/authorize-user/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/certificate-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/certificate-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/config-map-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/config-map-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container-default-limit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container-default-limit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container-dot/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container-dot/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container-logs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container-logs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container-metrics/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container-metrics/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container-table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container-table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-command/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-command/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-custom-metrics/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-custom-metrics/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-image/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-image/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-job-config/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-job-config/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-networking/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-networking/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-ports/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-ports/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-scale/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-scale/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-scheduling/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-scheduling/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-security/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-security/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-sources/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-sources/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-cron-job/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-cron-job/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-daemon-set/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-daemon-set/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-deployment/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-deployment/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-job/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-job/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-replica-set/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-replica-set/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-replication-controller/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-replication-controller/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade-stateful-set/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade-stateful-set/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-upgrade/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-upgrade/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-volume-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-volume-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/form-volumes/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/form-volumes/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/container/new-edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/container/new-edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-certificate/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-certificate/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-config-map/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-config-map/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-dns/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-dns/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-hpa/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-hpa/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-persistent-volume-claim/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-persistent-volume-claim/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-persistent-volume/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-persistent-volume/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-registry/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-registry/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-secret/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-secret/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-storage-class/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-storage-class/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-volume-claim-template/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-volume-claim-template/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/cru-volume/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/cru-volume/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/dns-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/dns-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-access-modes/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-access-modes/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-endpoints/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-endpoints/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-env-var/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-env-var/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-healthcheck/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-healthcheck/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-key-to-path/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-key-to-path/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-node-affinity/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-node-affinity/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-node-requirement/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-node-requirement/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-node-selector/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-node-selector/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-related-workloads/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-related-workloads/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-scoped-roles/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-scoped-roles/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-service-ports/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-service-ports/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/form-sources-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/form-sources-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/hpa-metric-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/hpa-metric-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/hpa-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/hpa-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/identity-avatar/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/identity-avatar/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/input-command/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/input-command/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/input-edit-password/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/input-edit-password/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/input-files/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/input-files/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/input-random-port/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/input-random-port/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/input-resource-quota/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/input-resource-quota/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-about/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-about/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-container-logs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-container-logs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-drain-node/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-drain-node/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-apikey/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-apikey/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-certificate/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-certificate/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-host/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-host/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-namespace/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-namespace/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-node-pool/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-node-pool/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-password/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-password/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-edit-setting/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-edit-setting/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-feedback/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-feedback/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-import/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-import/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-kubeconfig/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-kubeconfig/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-kubectl/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-kubectl/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-new-pvc/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-new-pvc/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-new-vct/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-new-vct/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-new-volume/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-new-volume/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-restore-backup/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-restore-backup/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-rollback-app/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-rollback-app/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-rollback-mc-app/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-rollback-mc-app/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-rollback-service/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-rollback-service/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-rotate-certificates/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-rotate-certificates/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-shortcuts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-shortcuts/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-telemetry/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-telemetry/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/modal-wechat/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/modal-wechat/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/namespace-app/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/namespace-app/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/namespace-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/namespace-list/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/namespace-quota-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/namespace-quota-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/namespace-resource-quota/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/namespace-resource-quota/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/namespace-table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/namespace-table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/new-catalog/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/new-catalog/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/new-edit-ingress/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/new-edit-ingress/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/new-edit-project/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/new-edit-project/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/new-password/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/new-password/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/node-group/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/node-group/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/node-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/node-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/node-selector-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/node-selector-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/node-selector/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/node-selector/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/notifier/modal-new-edit/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/notifier/modal-new-edit/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/notifier/notifier-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/notifier/notifier-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/notifier/notifier-table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/notifier/notifier-table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/optionally-namespaced/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/optionally-namespaced/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/page-footer/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/page-footer/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/page-header-project/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/page-header-project/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/page-header/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/page-header/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/persistent-volume-table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/persistent-volume-table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/pod-dots/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/pod-dots/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/pod-metrics/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/pod-metrics/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/pod-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/pod-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/progress-bar-multi/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/progress-bar-multi/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/project-group/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/project-group/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/project-quota-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/project-quota-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/project-resource-quota/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/project-resource-quota/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/project-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/project-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/project-table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/project-table/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/registry-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/registry-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/resource-quota-select/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/resource-quota-select/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/secret-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/secret-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/security-header/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/security-header/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/billing-info/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/billing-info/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/server-url/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/server-url/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/table-rows/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/table-rows/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/telemetry-opt/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/telemetry-opt/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/theme-toggle/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/theme-toggle/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/settings/user-info/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/settings/user-info/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-aws-ebs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-aws-ebs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-azure-disk/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-azure-disk/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-azure-file/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-azure-file/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-cephfs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-cephfs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-certificate/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-certificate/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-cinder/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-cinder/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-config-map/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-config-map/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-custom-log-path/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-custom-log-path/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-empty-dir/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-empty-dir/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-fc/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-fc/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-flex-volume-longhorn/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-flex-volume-longhorn/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-flex-volume/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-flex-volume/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-flocker/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-flocker/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-gce-pd/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-gce-pd/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-glusterfs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-glusterfs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-host-path/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-host-path/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-iscsi/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-iscsi/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-local/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-local/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-nfs/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-nfs/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-photon/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-photon/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-portworx/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-portworx/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-quobyte/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-quobyte/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-rbd/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-rbd/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-scaleio/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-scaleio/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-secret/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-secret/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-storageos/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-storageos/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/volume-source/source-vsphere-volume/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/volume-source/source-vsphere-volume/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/workload-metrics/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/workload-metrics/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/components/workload-row/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/workload-row/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/container/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/container/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/containers/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/containers/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/containers/run/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/containers/run/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/fail-whale/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/fail-whale/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/ie/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/ie/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/ingress/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/ingress/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/ingresses/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/ingresses/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/ingresses/run/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/ingresses/run/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/not-found/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/not-found/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/pod/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/pod/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/signup/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/signup/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/-add-cluster.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/-add-cluster.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/-ns-quota-progressbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/-ns-quota-progressbar.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-action-menu.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-action-menu.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-basic-literal.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-basic-literal.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-container-dot.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-container-dot.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-multi-lines.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-multi-lines.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-select-dot.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-select-dot.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/templates/tooltip-static.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/templates/tooltip-static.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/update-critical-settings/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/update-critical-settings/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/update-password/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/update-password/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/verify-auth-azure/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/verify-auth-azure/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/verify-auth/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/verify-auth/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/verify-reset-password/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/verify-reset-password/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/verify/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/verify/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/volumes/detail/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/volumes/detail/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/volumes/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/volumes/index/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/volumes/new/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/volumes/new/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ui/workload/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/workload/template.hbs should pass TemplateLint.\n\n');
  });
});
define("ui/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("ui/tests/test-helper", ["ui/app", "ui/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('ui/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"ui","environment":"test","exportApplicationGlobal":true,"locationType":"none","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"minifyCSS":{"enabled":false},"minifyJS":{"enabled":false},"contentSecurityPolicy":{"style-src":"'self' releases.rancher.com localhost:8000 'unsafe-inline'","font-src":"'self' releases.rancher.com","script-src":"'self' releases.rancher.com localhost:8000","object-src":"'self' releases.rancher.com","img-src":"'self' releases.rancher.com avatars.githubusercontent.com gravatar.com localhost:8000 data:","frame-src":"'self' releases.rancher.com","connect-src":"*","unsafe-eval":"'self' releases.rancher.com"},"APP":{"version":"1.0","appName":"AKE","environment":"test","baseAssets":"/","clusterToken":"%CLUSTERID%","projectToken":"%PROJECTID%","apiServer":"https://35.240.134.191","apiEndpoint":"/v3","publicApiEndpoint":"/v3-public","clusterEndpoint":"/v3/clusters/%CLUSTERID%","projectEndpoint":"/v3/projects/%PROJECTID%","proxyEndpoint":"/meta/proxy","globalSubscribeEndpoint":"/v3/subscribe","clusterSubscribeEndpoint":"/v3/clusters/%CLUSTERID%/subscribe","projectSubscribeEndpoint":"/v3/projects/%PROJECTID%/subscribe","magicEndpoint":"/r","telemetryEndpoint":"/v1-telemetry","kubernetesBase":"/k8s","kubectlEndpoint":"/r/projects/%PROJECTID%/kubectld:8091/v1-kubectl","kubernetesDashboard":"/k8s/clusters/%CLUSTERID%/api/v1/namespaces/kube-system/services/kubernetes-dashboard/proxy/","needIntlPolyfill":false,"locales":{"ar-sa":"الإنجليزية","de-de":"Deutsch","en-us":"English","es-es":"Español","fa-ir":"فارسی","fr-fr":"Française","hu-hu":"Magyar","it-it":"Italiano","ja-jp":"日本語","ko-kr":"영어","nb-no":"Norsk","nl-nl":"Nederlands","none":"None","pt-br":"Português","ru-ru":"Русский","sh-hr":"Srpskohrvatski","sv-se":"Svenska","tr-tr":"İngilizce","uk-ua":"Українська","vi-vn":"Tiếng Anh","zh-hans":"简体中文","zh-hant":"繁體中文"},"stripe":{"publishableKey":"pk_test_g925RcuVORh2KgHWfFbE80by"},"LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"rootElement":"#ember-testing","autoboot":false,"pl":"rancher","name":"ui"}}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

require('ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
