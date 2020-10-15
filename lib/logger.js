/*
 * Copyright (c) 2014-2020 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({ 
      level: 'verbose'
    })
  ],
  format: winston.format.simple()
})
