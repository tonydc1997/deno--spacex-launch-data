import * as log from "https://deno.land/std/log/mod.ts";

async function downloadLaunchData() {
  log.info("Beginning download...");
  const response = await fetch("https://api.spacexdata.com/v4/launches", {
    method: "GET",
  });

  const launchData = await response.json();
  // console.log(launchData);
}

downloadLaunchData();
