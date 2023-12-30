function getRating(driver:any) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
  }
  
  function moreThanFiveLateDeliveries(driver:any) {
    return driver.numberOfLateDeliveries > 5;
  }