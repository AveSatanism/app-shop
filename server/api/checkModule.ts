import { createCommonJS } from 'mlly'
import { resolve } from 'pathe' 
// @ts-ignore
export default defineEventHandler(async () => {
    let appList = ['']
    const { require } = createCommonJS(import.meta.url)
    const playgroundUrl = resolve(process.cwd(), './platform')
    const LMIFY = require('lmify')
    const lmify = new LMIFY({
        rootDir: playgroundUrl,
        packageManager: 'npm',
        stdout: process.stdout,
        stderr: null,
    })
    try {
        appList = await lmify.checkApp
        console.log(appList)
    } catch (error) {
        setResponseStatus(500)
        return ("Check failed!")
    }
    return ("Check done!" + appList)
})