# The Huts Emsworth
The Huts Emsworth website

The eleventy_build.yml isn't working, so you'll currently need to manually deploy, `npm run prod`

Here is the eleventy build


```yml
name: Eleventy Build

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '16.x'

      - run: npm ci

      - run: npm run prod

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./docs
```