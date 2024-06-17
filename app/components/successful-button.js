import AuButton from '@appuniversum/ember-appuniversum/components/au-button';

// export default class SuccessfulButton extends AuButton {
//   testFunction = () => console.log('oui?');
// }
console.log(AuButton);

export default AuButton.extend( {
  actions: {
    testfunction(){
      this.classList.toggle('isShowingBody');
    }
  }
});