import { browser, element, by } from 'protractor';

export class ExamenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('t-root h1')).getText();
  }
}
