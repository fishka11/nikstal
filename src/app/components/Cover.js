import Image from "next/image";
import { getPagesContent } from "../lib/hygraphcms";
import filterFetchedData from "../lib/filterFetchedData";
import Link from "next/link";

export default async function Cover({ slug }) {
  const data = await getPagesContent();
  const content = filterFetchedData(data.pages, slug);
  return (
    <div className="relative overflow-clip">
      <div className="aria-hidden fixed top-0 -z-50 flex min-h-full overflow-clip before:absolute before:h-full before:w-full before:bg-black before:opacity-50">
        <Image
          src={content?.header?.picture?.url}
          width={content?.header?.picture?.width}
          height={content?.header?.picture?.height}
          alt="Obrazek tła"
          style={{ objectFit: "cover" }}
          sizes="100vw"
          className="aria-hidden min-h-full"
        />
      </div>
      <div className="container flex justify-center">
        <div className="flex max-w-screen-xl flex-col justify-center pb-20 pt-40 md:pb-28 md:pt-60">
          <div className="to-transpatent bg-opacity-40 bg-gradient-to-r from-transparent from-5% via-white/60 via-50% to-95% px-16 pt-6">
            <Image
              className="m-auto"
              src="logoNikstal.svg"
              width={350}
              height={175}
              quality={100}
              alt="logo Nikstal"
            />
            <h2 className="m-auto max-w-screen-sm pb-4 pt-8 text-center text-lg  uppercase text-white drop-shadow-2xl md:text-2xl">
              {content?.header?.slogans[0]}
            </h2>
          </div>
          <div className="container mt-10 max-w-screen-xl">
            <h2 className="text-center text-xl font-bold text-blue-200 drop-shadow-2xl md:text-2xl">
              {content?.header?.slogans[1]}
            </h2>
          </div>
          <div className="container mt-10 flex max-w-screen-md flex-row justify-center">
            <Link
              className="transform-gpu rounded bg-blue-500 px-6 py-3 text-center uppercase text-blue-100 no-underline transition-all hover:bg-blue-600 hover:text-blue-200"
              href={content.ctaButtons[0].url}
            >
              {content.ctaButtons[0].text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
