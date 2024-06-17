import { module, test } from 'qunit';
import { setupRenderingTest } from 'modal-thingy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | a-working-button-please', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AWorkingButtonPlease />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AWorkingButtonPlease>
        template block text
      </AWorkingButtonPlease>
    `);

    assert.dom().hasText('template block text');
  });
});
