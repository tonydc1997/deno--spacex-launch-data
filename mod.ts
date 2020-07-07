async function downloadLaunchData() {
  const response = await fetch("https://api.spacexdata.com/v4/launches", {
    method: "GET",
  });

  const launchData = await response.json();
  console.log(launchData);
}

downloadLaunchData();
