'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('catbee:component', () => {
  describe('Create component with default presets', () => {
    before(() => helpers
      .run(path.join(__dirname, '../generators/component'))
      .withArguments(['test-component'])
      .toPromise()
    );

    it('creates template, controller and css file', () => {
      assert.file([
        'components/TestComponent/index.js',
        'components/TestComponent/component.css',
        'components/TestComponent/template.hbs'
      ]);
    });

    it('Template file should be empty, but controller should contain code', () => {
      assert.fileContent('components/TestComponent/component.css', '');
      assert.fileContent('components/TestComponent/template.hbs', '');
      assert.fileContent('components/TestComponent/index.js', /class TestComponent/);
      assert.fileContent('components/TestComponent/index.js', /constructor: TestComponent/);
    });
  });

  describe('Create component with default presets', () => {
    before(() => helpers
      .run(path.join(__dirname, '../generators/component'))
      .withArguments(['test'])
      .withPrompts({
        root: 'src',
        path: 'components'
      })
      .toPromise()
    );

    it('creates template, controller and css file', () => {
      assert.file([
        'src/components/Test/index.js',
        'src/components/Test/component.css',
        'src/components/Test/template.hbs'
      ]);
    });

    it('Template file should be empty, but controller should contain code', () => {
      assert.fileContent('src/components/Test/component.css', '');
      assert.fileContent('src/components/Test/template.hbs', '');
      assert.fileContent('src/components/Test/index.js', /class Test/);
      assert.fileContent('src/components/Test/index.js', /constructor: Test/);
    });
  });
});
