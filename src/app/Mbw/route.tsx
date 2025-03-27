import { ImageResponse } from "next/og";
import axios from "axios";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const fid = url.searchParams.get("fid");

  let pfpUrl = "";

  if (fid) {
    console.log(`Fetching data from API for fid: ${fid}`);
    const apiUrl = `https://api.warpcast.com/v2/user?fid=${fid}`;
    const response = await axios.get(apiUrl);

    pfpUrl = response.data?.result?.user?.pfp?.url; // Assign value to pfpUrl
    console.log(pfpUrl);
  }

  return new ImageResponse(
    (
<div tw="flex w-full h-full">
  <img
    src={pfpUrl}
    alt="Profile"
    style={{ transform: "scaleX(-1)", filter: "grayscale(100%)" }}
  />
</div>


    ),
    {
      width: 900,
      height: 900,
    }
  );
}
