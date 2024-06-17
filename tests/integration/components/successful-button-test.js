import { module, test } from 'qunit';
import { setupRenderingTest } from 'modal-thingy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | successful-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SuccessfulButton />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SuccessfulButton>
        template block text
      </SuccessfulButton>
    `);

    assert.dom().hasText('template block text');
  });
});
