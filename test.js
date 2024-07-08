import assert from 'node:assert'
import test from 'node:test'

test('should import local file cjs module deep', async () => {
  const esmmain1 = await import ('./src/esmmain1.js')

  assert.ok('cjsmodule' in esmmain1.default)
})
