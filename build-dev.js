const esbuild = require('esbuild');
(async () => {
  const ctx = await esbuild.context({
    entryPoints: ['./out/App.js'],
    bundle: true,
    minify: true,
    outfile: './dist/js/App.js',
    format: "esm",
    //outdir: './dist/js/',
    logLevel: "info",
  });

  await ctx.watch();
})();
