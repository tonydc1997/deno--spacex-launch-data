import * as log from "https://deno.land/std/log/mod.ts";

interface Launch {
  flight_number: number;
  name: string;
}

const launches = new Map<number, Launch>();

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
  for (const launch of launchData) {
    const flightData = {
      flightNumber: launch["flight_number"],
      name: launch["name"],
    };
    launches.set(flightData.flightNumber, flightData.name);

    log.info(flightData);
  }
}

await downloadLaunchData();
