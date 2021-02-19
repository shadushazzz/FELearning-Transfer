import { html, fixture, expect } from '@open-wc/testing';

import '../fe-header.js';

describe('FeHeader', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<fe-header></fe-header>`);
    element.title = 'ING Bank';
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('ING Bank');
  });

  xit('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
