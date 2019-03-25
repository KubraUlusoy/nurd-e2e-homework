import { browser, by, element } from 'protractor';

export class CoffeOrder {
  
  navigateTo() {
    return browser.get('/');
  }

  clickButton(buttonId) {
    element(by.id(buttonId)).click();
  }

  getPriceText(){
    return element(by.css('.price')).getText();
  }

  getBuyButtonStatus(){
    return element(by.id('buy-button')).isEnabled();
  }

  getPageTitleText() {
    return element(by.id('coffe-title')).getText();
  }

  clickAmericanoAddButton(){
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[1]/div/div/button')).click();
  }

  clickWhiteAddButton(){
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[2]/div/div/button')).click();
  }

  clickChaiteaAddButton(){
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[3]/div/div/button')).click();
  }

  clickLatteAddButton(){
    return element(by.xpath('/html/body/app-root/app-coffe-order/div/div/div/div/div/div[4]/div/div/button')).click();
  }

  clickRemoveButton(){
    return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div:nth-child(1) > div > div > button')).click();
  }

  acceptAlert(){
    return browser.switchTo().alert().accept();
  }

  /**
   * 
   * @param string Given string will be returned first character uppercased.
   */
  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
  * 
  * @param string Given string will be returned first character lowercased.
  */
  jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
}
