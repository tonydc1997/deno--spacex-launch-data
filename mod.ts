import * as log from "https://deno.land/std/log/mod.ts";

async function downloadLaunchData() {
  log.info("Beginning download...");
  const response = await fetch("https://api.spacexdata.com/v4/launches", {
    method: "GET",
  });

  if (!response.ok) {
    log.warning("Oops, there was a problem downloading the launch data");
    throw new Error("Failed to download launch data");
  }

  const launchData = await response.json();
  console.log(launchData);
}

downloadLaunchData();
