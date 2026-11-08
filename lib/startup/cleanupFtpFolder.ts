/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { glob } from 'glob'
import logger from '../logger'
import path from 'path'
import * as utils from '../utils'
const fs = require('fs-extra')

const cleanupFtpFolder = () => {
  glob(path.resolve('ftp/*.pdf'), { windowsPathsNoEscape: true }).then((files: string[]) => {
    files.forEach((filename: string) => {
      fs.remove(filename)
    })
  }).catch((err: unknown) => {
    logger.warn('Error listing PDF files in /ftp folder: ' + utils.getErrorMessage(err))
  })
}

module.exports = cleanupFtpFolder
