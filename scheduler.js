'use strict';

const CronJob = require('cron').CronJob;
const moment = require('moment');

const schedulerFactory = function() {
    return {
        start: function() {
            new CronJob('00 * * * * *', function() {
                console.log('Running Send Birthday Reminder Notifications for ' + 
                moment().format());

            }, null, true, '');
        }
    }
}

module.exports = schedulerFactory();