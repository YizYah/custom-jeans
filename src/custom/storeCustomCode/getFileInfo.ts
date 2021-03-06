import {Delimiters} from 'magicalstrings'

const {regExFileText} = require('magicalstrings').constants.Regex.regExFileInfo

export function getFileInfo(fileText: string, delimiters: Delimiters) {
  let unit = ''
  let component = ''

  const regExFileInfo = new RegExp(regExFileText(delimiters), 'g')

  const fileInfoMatch = regExFileInfo.exec(fileText)

  if (fileInfoMatch) {
    unit = fileInfoMatch[1]
    component = fileInfoMatch[2]
  }

  return {
    unit,
    component,
  }
}
