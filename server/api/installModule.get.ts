import { createCommonJS } from 'mlly'
import { resolve } from 'pathe' 
// @ts-ignore
export default defineEventHandler(async (event) => {
    const { require } = createCommonJS(import.meta.url)
    const playgroundUrl = resolve(process.cwd(), './platform')
    const LMIFY = require('lmify')
    const lmify = new LMIFY({
        rootDir: playgroundUrl,
        packageManager: 'npm',
        stdout: null,
        stderr: null,
    })
    try {
        const query = await getQuery(event)
        await lmify.install(query.moduleName)
    } catch (error) {
        setResponseStatus(500)
        return ("Install failed!")
    }
    return ("Install done!")
})