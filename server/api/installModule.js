import { createCommonJS } from 'mlly'
import { resolve } from 'pathe' 

const { require } = createCommonJS(import.meta.url)
const { install, setPackageManager } = require('lmify')
setPackageManager('npm')
install('undici');
console.log("Install done!")