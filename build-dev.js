const esbuild = require('esbuild');
(async () => {
  const ctx = await esbuild.context({
    entryPoints: ['./out/App.js'],
    bundle: true,
    minify: true,
    outfile: './docs/js/App.js',
    format: "esm",
    treeShaking: true,
    logLevel: "info",
  });

  await ctx.watch();
})();
