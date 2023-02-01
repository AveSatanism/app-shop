import { createCommonJS } from 'mlly'
import { resolve } from 'pathe' 

export default defineEventHandler(async (event) => {
    const { require } = createCommonJS(import.meta.url)
    const playgroundUrl = resolve(process.cwd(), './playground')
    const LMIFY = require('lmify')
    const lmify = new LMIFY({
        rootDir: playgroundUrl,
        packageManager: 'npm',
        stdout: null,
        stderr: null,
    })
    try {
        await lmify.install('undici')
    } catch (error) {
        setResponseStatus(500)
        return ("Install failed!")
    }
    return ("Install done!")
})