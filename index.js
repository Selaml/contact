const {Builder,By, Key, util} =require("selenium-webdriver");
async function contact() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.iworkplc.com/contact");
    const officeNumber =    await driver.findElement(By.xpath(`//*[@id="comp-kktfmgn8"]/p/span`)).getText();
    const mobileNumber =   await  driver.findElement(By.xpath(`//*[@id="comp-ks7htvty"]/p/span`)).getText();
    const officeNumberArray = officeNumber.split(" ");
    const  mobileNumberArray =  mobileNumber.split(" ");
    const  mobileNumberArray2 =  mobileNumberArray[2].split("-");
    const officeNumberInt = parseInt(officeNumberArray[3]);
    const  mobileNumberInt = parseInt(mobileNumberArray2[1]);
    sum =officeNumberInt + mobileNumberInt;
    console.log('the sum is: '+sum);
 
}
contact();
