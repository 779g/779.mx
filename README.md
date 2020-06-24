## Features 

+ This is meant to be deployed on Vercel
+ 95/100 pagespeed, SSR
+ modular scss library
+ modular component library
+ includes apollo gql client lib
+ optimizations : terser minification, postcss reduction, css minification, es6 tree shaking, 

+ Three apps in one :
  + The react spa
  + The SSR renderer (req => render to string the spa using apollo)
  + The sitemap renderer for your favourite crawler (req => render to .xml using apollo logic)


## Configure and Install

+ Decide whether you need an app with apollo or without
  + If you need an app with apollo, correct the entrypoints in webpack.client and webpack.renderer to the correct ones `client.gql.js` and `renderer.gql.js`, also correct the scripts `renderer:start` 
  + If you need an app without apollo, correct the entrypoints in webpack.client and webpack.renderer to the correct ones `client.simple.js` and `renderer.simple.js`, also correct the scripts `renderer:start` 

+ Set up the package

```
npm i
cp .env.tmp .env
```

+ Fill in the variables in .env
+ Make sure those env vars are correctly exposed in Vercel (either in Vercel.com control panel or the old way, in vercel.json)
+ Please not that as a default we propose an extreme split chunks ( each module and each component in its own file ) so we can observe more easily the bundle composition. If you wish to remove this (ot have only one bundle file) just remove the `splitChunks` directive in the optimization of the `webpack.client.prod.js` 

## Scripts

+ `npm run cds` : Run the development client in webpack dev server
+ `npm run cps` : Run the production client in webpack dev server
+ `npm run cdc` : Compile the development client
+ `npm run cpc` : Compile the production client
+ `npm run rs` : Run the uncompiled renderer in nodemon. Please note that (1) The entrypoing is an express app that serves the renderer, in contrast with serverless lambda where only the renderer is executed, we profit from the fact express shares the same api with Vercel functions through app.use() (2) This doesnt go through webpack at all, so all the webpack aliases are unavailable. This is why here we need to patch in (`ssr/patchAlias.js`) the correct aliasing. 
+ `npm run rc` : Compile the renderer using webpack.
+ `npm run ss` : Run the uncompiled sitemap in nodemon. Please note that (1) we execute an express app to server the sitemap renderer, in contast with production serverless lambda where only the renderer is executed. We profit from the fact we can pass renderers to express using app.use() that share the same API as Vercel functions
+ `npm run sc` : Compile the sitemap

## Deploy

Unfortunately this isn't as easy as just deploying to Vercel using `now`. Why ? Because the serverless functions executed in the api folder need to be already present when Vercel pulls the repo. So we cant compile them at `now-build` time.

What we can compile at `now-build` time is the static files, in the public dir. In the context off our app, this means we compile the client at Vercel build time

In short
+ `/api/renderer.js` : needs to be present on every git push, compiled with `npm run rc`
+ `/api/sitemap.js` : needs to be present on every git push, compiled with `npm run sc`
+ `/public/client.js`, `/public/staticfiles.ico` : all the files generated as the static bundle, can be generated at Vercel build time, so no need to have them beforehand

Use the command `npm run bd` to compile and and push to deploy.


