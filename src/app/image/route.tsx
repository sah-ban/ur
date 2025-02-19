import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const text = url.searchParams.get("t");

  const tokenBannerImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/base-season.png";
  const tokenImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/pfp.png";
  const tokenChainsImage="https://raw.githubusercontent.com/base-org/brand-kit/refs/heads/main/logo/symbol/Base_Symbol_Blue.png";
  const dexImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/dex-screener-logo.png";
  


  return new ImageResponse(
    (
<div tw="flex flex-col w-full h-full bg-[#8a63d2] text-white font-sans border-8 border-gray-300 p-6 justify-center rounded-xl items-center">
  
<div  tw="text-9xl font-extrabold">{text}</div>
<div tw="absolute bottom-10 right-12 rounded-lg border-2 border-white p-2 font-bold">Bot By cashlessman.eth</div>
  <img
    src='https://i.imgur.com/I2rEbPF.png'
    alt="Overlay"
    tw="absolute top-10 left-10 w-15 h-15 rounded-lg border-4 border-white"
  />



</div>
    ),
    {
      width: 800,
      height: 600,
    }
  );
}
//  <div className="border-2 border-gray-300 p-6 w-80 h-48 flex items-center justify-center">
{/* Center Text */}
{/* <span className="text-lg font-semibold">Centered Text</span> */}

{/* Top Right Image */}
{/* <img */}
  // src="https://image-url-one.vercel.app/pfp?fid=1"
  // alt="Top Right"
  // className="absolute top-2 right-2 w-10 h-10"
// />

{/* Bottom Left Text */}
{/* <span className="absolute bottom-2 left-2 text-sm text-gray-600"> */}
  // Bottom Left Text
// </span>
// </div> */}