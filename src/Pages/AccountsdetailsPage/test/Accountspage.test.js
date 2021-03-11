import { html, fixture, expect } from '@open-wc/testing';

import '../AccountdetailsPage.js';

describe('AccountdetailsPage', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<account-details-page></account-details-page>`
    );
  });

  it('should not show notification when error is not present', () => {
    const error = element.isError;
    expect(error).to.exist;
    expect(error).to.be.equal(false);
  });

  it('should render the proper notifictaion', () => {
    const error = element.shadowRoot.querySelector('fe-notification');
    expect(error).to.exist;
    expect(error.classList.contains('hidden')).to.be.true;
    expect(error.hidden).to.be.false;
  });

  it('render the title in header', () => {
    const title = element.shadowRoot.querySelector('legend');
    expect(title).to.exist;
    expect(title.textContent).to.equal('Account Information:');
  });

  it('render the title in footer', () => {
    const title = element.shadowRoot.querySelector('fieldset.footer');
    expect(title).to.exist;
    expect(title.textContent).to.equal('Transfer Funds:');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
