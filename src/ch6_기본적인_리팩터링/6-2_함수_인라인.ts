function getRating(driver:any){
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1
  }