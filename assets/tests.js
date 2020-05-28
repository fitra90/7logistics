'use strict';

define("tujuhlogistics/tests/integration/components/navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "iDkVnp2/",
        "block": "{\"symbols\":[],\"statements\":[[5,\"navbar\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "w1Yfw4CE",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"navbar\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tujuhlogistics/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navbar.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
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
});
define("tujuhlogistics/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('tujuhlogistics/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tujuhlogistics/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tujuhlogistics/templates/components/navbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'tujuhlogistics/templates/components/navbar.hbs should pass TemplateLint.\n\ntujuhlogistics/templates/components/navbar.hbs\n  3:4  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('tujuhlogistics/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'tujuhlogistics/templates/index.hbs should pass TemplateLint.\n\ntujuhlogistics/templates/index.hbs\n  149:8  error  Incorrect indentation for `<h5>` beginning at L149:C8. Expected `<h5>` to be at an indentation of 10 but was found at 8.  block-indentation\n  165:8  error  Incorrect indentation for `<h5>` beginning at L165:C8. Expected `<h5>` to be at an indentation of 10 but was found at 8.  block-indentation\n  181:69  error  Incorrect indentation for `a` beginning at L180:C8. Expected `</a>` ending at L181:C69 to be at an indentation of 8 but was found at 65.  block-indentation\n  180:76  error  Incorrect indentation for `<img>` beginning at L180:C76. Expected `<img>` to be at an indentation of 10 but was found at 76.  block-indentation\n  186:68  error  Incorrect indentation for `a` beginning at L185:C8. Expected `</a>` ending at L186:C68 to be at an indentation of 8 but was found at 64.  block-indentation\n  185:84  error  Incorrect indentation for `<img>` beginning at L185:C84. Expected `<img>` to be at an indentation of 10 but was found at 84.  block-indentation\n  180:76  error  img tags must have an alt attribute  img-alt-attributes\n  185:84  error  img tags must have an alt attribute  img-alt-attributes\n  180:8  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  185:8  error  links with target="_blank" must have rel="noopener"  link-rel-noopener\n  62:28  error  elements cannot have inline styles  no-inline-styles\n  79:14  error  elements cannot have inline styles  no-inline-styles\n  106:21  error  elements cannot have inline styles  no-inline-styles\n  109:15  error  elements cannot have inline styles  no-inline-styles\n  122:21  error  elements cannot have inline styles  no-inline-styles\n  127:60  error  elements cannot have inline styles  no-inline-styles\n  134:12  error  elements cannot have inline styles  no-inline-styles\n  192:21  error  elements cannot have inline styles  no-inline-styles\n  11:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  23:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  55:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  56:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  59:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  102:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  109:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  111:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  113:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  114:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  116:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  118:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  125:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  126:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  128:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  129:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  131:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  133:10  error  Self-closing a void element is redundant  self-closing-void-elements\n  147:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  163:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  180:76  error  Self-closing a void element is redundant  self-closing-void-elements\n  185:84  error  Self-closing a void element is redundant  self-closing-void-elements\n  189:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  198:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
});
define("tujuhlogistics/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/navbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/navbar-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("tujuhlogistics/tests/test-helper", ["tujuhlogistics/app", "tujuhlogistics/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("tujuhlogistics/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("tujuhlogistics/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('tujuhlogistics/config/environment', [], function() {
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

require('tujuhlogistics/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
