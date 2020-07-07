import * as log from "https://deno.land/std/log/mod.ts";

async function downloadLaunchData() {
  const response = await fetch("https://api.spacexdata.com/v4/launches", {
    method: "GET",
  });

  const launchData = await response.json();
  console.log(launchData);
}

downloadLaunchData();
