#!/usr/bin/env node

import * as esbuild from "esbuild";
import fs from "fs";
import path from "node:path";
import colors from "picocolors";
import cssModulesPlugin from "esbuild-css-modules-plugin";

async function build() {
  const outputDir = "./dist";
  const publicDir = "./public";
  const popupEntry = "main.jsx";
  const popupHtml = "index.html";
  const contentEntry = "main.tsx";
  const backgroundEntry = "background.ts";
  const devDir = "./node_modules/@esbuild/dev";
  const PORT = 3000;

  let isDev = false;

  if (process.argv.includes("-d")) {
    isDev = true;
  }

  const entryPoints = [path.resolve("src", "popup", popupEntry)];

  const plugins = [
    cssModulesPlugin({
      inject: false,
      filter: /\.module?\.css$/i,
      v2: true,
      bundle: true,
    }),
  ];

  if (!isDev) {
    entryPoints.push(
      path.resolve("src", "content", contentEntry),
      path.resolve("src", "background", backgroundEntry)
    );
    await esbuild.build({
      entryPoints: entryPoints,
      plugins: plugins,
      outdir: outputDir,
      bundle: true,
      minify: true,
      format: "esm",
      loader: { ".svg": "dataurl" },
      define: { "window.IS_PRODUCTION": "true" },
    });

    await fs.promises.copyFile(
      path.resolve("src", "popup", popupHtml),
      path.resolve(outputDir, "popup", popupHtml)
    );
    await fs.promises.cp(publicDir, outputDir, { recursive: true });
  } else {
    if (!fs.existsSync(devDir)) {
      fs.promises.mkdir(devDir);
    }
    const context = await esbuild.context({
      entryPoints: entryPoints,
      plugins: plugins,
      outdir: devDir,
      bundle: true,
      minify: true,
      loader: { ".svg": "dataurl" },
      define: { "window.IS_PRODUCTION": "false" },
    });

    await fs.promises.copyFile(
      path.resolve("src", "popup", popupHtml),
      path.resolve(devDir, popupHtml)
    );

    context.watch();

    await context.serve({
      servedir: devDir,
      port: PORT,
    });

    const url = `${colors.cyan("http://localhost")}:${colors.cyan(
      colors.bold(PORT)
    )}`;
    console.log(`  ${colors.green("➜")}  ${colors.bold("Local")}:   ${url}`);
  }
}

build().catch((err) => {
  console.log(err);
  process.exit(1);
});
