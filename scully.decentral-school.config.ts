import { ScullyConfig } from '@scullyio/scully';
// require('scully-plugin-canonical');

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
import  { getFlashPreventionPlugin }  from '@scullyio/scully-plugin-flash-prevention';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "decentral-school",
  outDir: './dist/static',
  routes: {
    '/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  },


  defaultPostRenderers : [getFlashPreventionPlugin(),'setCanonicalLinkPlugin', 'seoHrefOptimise', ],

  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  },};
