async function downloadLaunchData() {
  const response = await fetch("https://api.spacexdata.com/v4/launches", {
    method: "GET",
  });
}
