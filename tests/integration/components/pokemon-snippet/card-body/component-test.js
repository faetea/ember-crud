import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-snippet/card-body', 'Integration | Component | pokemon snippet/card body', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{pokemon-snippet/card-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#pokemon-snippet/card-body}}
      template block text
    {{/pokemon-snippet/card-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
