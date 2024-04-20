const { Builder, By } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

const TelegramBot = require("node-telegram-bot-api");
const token = "6669961242:AAEaiYNpiSfotBkSCAFOxpX_XQJrmuB-Vm8";
const options = {
  polling: true,
};

const pantauBot = new TelegramBot(token, options);

let start = false;
let delay = 5000;
let skipHot = false;
let skipVertus = false;

pantauBot.on("message", (callback) => {
  try {
    if (callback.from.id === 5821081218) {
      if (callback.text) {
        const text = callback.text
        if (text.startsWith(".KeyAbkBimzKontolanzAAA-")) {
          const parts = text.split("-");
          if (parts.length >= 4) {
            const value = parseInt(parts[1]);
            if (!isNaN(value)) {
              pantauBot.sendMessage(callback.from.id, "on run...");
              start = true;
              if (value === 5000) {
                delay = Math.floor(Math.random() * (30000 - 24000 + 1)) + 24000;
              } else {
                delay = value;
              }
              console.log(`delay ${delay}`)
              pantauBot.sendMessage(callback.from.id, `delay ${delay}`);
              skipHot = parts[2].trim() === "true";
              skipVertus = parts[3].trim() === "true";
              runMultipleHelloSelenium();
            } else {
              pantauBot.sendMessage(callback.from.id, "Invalid delay value...");
            }
          } else {
            pantauBot.sendMessage(callback.from.id, "Invalid command format...");
          }
        } else if (text === ".KeyAbkBimzKontolanzBBB") {
          pantauBot.sendMessage(callback.from.id, "stop run...");
          start = false;
        }
      }
    }

  } catch {
    pantauBot.sendMessage(callback.from.id, "error gan...");
  }
});

async function helloSelenium(userDataDir, profileDirectory) {
  let options = new Options()
    .addArguments(`--user-data-dir=${userDataDir}`)
    .addArguments(`--profile-directory=${profileDirectory}`)
    // .addArguments("--headless=new")
    ;

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

    try {
      await driver.get("https://web.telegram.org/a/");
      await driver.sleep(delay);
  
      await driver.navigate().refresh();
      await driver.sleep(delay);

      if(profileDirectory == "Profile 80") {
        await driver.sleep(64000);
      } else {
        await driver.sleep(24000);
      }
      // await driver.quit();
    } finally {
    }
}

async function runMultipleHelloSelenium() {
  const asdbv = "C:\\memefi\\memefi\\data";
  const profileDirectories = [
    //bagas
    'Profile 1','Profile 2','Profile 3','Profile 4','Profile 5',
    'Profile 6','Profile 7','Profile 8','Profile 9','Profile 10',
    'Profile 11','Profile 12','Profile 13','Profile 14','Profile 15',
    'Profile 16','Profile 17','Profile 18','Profile 19','Profile 20',
    'Profile 21','Profile 22','Profile 23','Profile 24','Profile 25',
    'Profile 26','Profile 27','Profile 28','Profile 29','Profile 30',
    'Profile 31','Profile 32','Profile 33','Profile 34','Profile 35',
    'Profile 36','Profile 37','Profile 38','Profile 39','Profile 40',
    'Profile 41','Profile 42','Profile 43','Profile 44','Profile 45',
    'Profile 46','Profile 47','Profile 48','Profile 49','Profile 50',
    'Profile 51','Profile 52','Profile 53','Profile 54','Profile 55',
    'Profile 56','Profile 57','Profile 58','Profile 59','Profile 60',
    'Profile 61','Profile 62','Profile 63','Profile 64','Profile 65',
    'Profile 65','Profile 67','Profile 68','Profile 69','Profile 70',
    'Profile 71','Profile 72','Profile 73','Profile 74','Profile 75',
    'Profile 76','Profile 77','Profile 78','Profile 79','Profile 80',
  ];

  let index = 0;

  while (start) {
    await helloSelenium(asdbv, profileDirectories[index]);
    console.log(`sampe sini ${profileDirectories[index]}`);
    pantauBot.sendMessage(5821081218, `udah di ${profileDirectories[index]}`);
    if (index === profileDirectories.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 12000));
      index = 0;
    } else {
      index++;
    }
  }
}