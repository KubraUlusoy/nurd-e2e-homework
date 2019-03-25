import { CoffeOrder } from './coffe-order.po'

describe('coffe-order', () => {

  let coffeOrder;

  beforeEach(() => {
    coffeOrder = new CoffeOrder();
  });

  it('should display page heading as Choose your best coffee ☕', () => { //pass
    coffeOrder.navigateTo();
    expect(coffeOrder.getPageTitleText()).toEqual('Choose your best coffee ☕');
  });

  it('should display Price: 10₺ after adding americano to cart', () => { //pass
    coffeOrder.navigateTo();
    coffeOrder.clickAmericanoAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 10 ₺');
  });

  it('should display Price: 15₺ after adding white to cart', () => { //pass
    coffeOrder.navigateTo();
    coffeOrder.clickWhiteAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 15 ₺');
  });

  it('should disable button if user didn\'t select a coffee yet', () => { //pass
    coffeOrder.navigateTo();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  });

  it('should display Price: 40 ₺ for coffe 2 white and 1 americano after adding to cart', () => {  //pass
    coffeOrder.navigateTo();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickAmericanoAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 40 ₺');
  });

  it('should display Price: 12 ₺ after adding 1 latte to cart', () => {  //fail
    coffeOrder.navigateTo();
    coffeOrder.clickLatteAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 12 ₺');
  });

  it('should display Price: 25 ₺ after adding  2 white and 1 americano and removing one white', () => {  //pass
    coffeOrder.navigateTo();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickAmericanoAddButton();
    coffeOrder.clickRemoveButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 25 ₺');
  });
  
  it('should display Price: 0 ₺ after adding 2 chaitea and 1 americano and removing all items in cart', () => {  //pass
    coffeOrder.navigateTo();
    coffeOrder.clickChaiteaAddButton();
    coffeOrder.clickChaiteaAddButton();
    coffeOrder.clickAmericanoAddButton();
    coffeOrder.clickRemoveButton();
    coffeOrder.clickRemoveButton();
    coffeOrder.clickRemoveButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 0 ₺');
  });

  it('should display disable button after adding 2 white and 1 americano and removing all coffees', () => {  //pass
    coffeOrder.navigateTo();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickAmericanoAddButton();
    coffeOrder.clickRemoveButton();
    coffeOrder.clickRemoveButton();
    coffeOrder.clickRemoveButton();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  });

  it(`should display Price: 41 ₺ after adding 1 white, 1 chaitea, 1 americano
   and should disable buy button after clicking buy button and accepting alert`, () => {  //pass
    coffeOrder.navigateTo();
    coffeOrder.clickWhiteAddButton();
    coffeOrder.clickChaiteaAddButton();
    coffeOrder.clickAmericanoAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 41 ₺');
    coffeOrder.clickButton('buy-button');
    coffeOrder.acceptAlert();
    expect(coffeOrder.getBuyButtonStatus()).toBe(false);
  });

  it('should display Price: 38 ₺ after adding 1 latte, 1 chaitea, 1 americano', () => {  //fail
    coffeOrder.navigateTo();
    coffeOrder.clickLatteAddButton();
    coffeOrder.clickChaiteaAddButton();
    coffeOrder.clickAmericanoAddButton();
    expect(coffeOrder.getPriceText()).toEqual('Price: 38 ₺');
  })

})
