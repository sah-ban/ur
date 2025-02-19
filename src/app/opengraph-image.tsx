import { ImageResponse } from "next/og";

export const alt = "Farcaster";
export const size = {
  width: 1200 ,
  height: 630 ,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
<div tw="flex flex-col w-full h-full bg-[#FFF5EE] text-[#8660cc] font-sans font-bold">
    <div tw="flex items-center m-auto mt-10">
            <img
              src="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/pfp.png"
              alt="Profile"
              tw="w-75 h-75 rounded-lg mr-4"
            />
    </div>
      <div tw="flex text-4xl font-extrabold m-auto text-center"><h3>Get clean url for farcaster user profile picture</h3></div>

    </div>
    ),
    {
      ...size,
    }
  );
}