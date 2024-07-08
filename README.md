pnpm local file dependencies repro

```bash
git clone https://github.com/iambumblehead/pnpm-local-file-dependencies-repro.git
npm install && node --test test.js # pass
pnpm install && node --test test.js # ⚠ fail
```
