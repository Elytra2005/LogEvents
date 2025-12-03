const { format } = require('date-fns');
const {v4: uuid} = require('uuid');

// common core
const fsPromises = require('fs').promises;
const fs = require("fs");
const path = require('path');



const logMessage = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const LogItem = `${dateTime}\t ${uuid()}\t${message}\n`;
    console.log(LogItem);

    try {
      if(!fs.existsSync(path.join(__dirname, 'Logs'))) {
        await fsPromises.mkdir(path.join(__dirname, 'Logs'));
      }
      await fsPromises.appendFile(path.join(__dirname, "Logs", "EventLogs.txt"), LogItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logMessage;
