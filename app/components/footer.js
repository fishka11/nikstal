import Image from "next/image";
import Link from "next/link";
import getData from '../lib/fetchAPI';
import { getPagesContent } from '../lib/queries';

export default async function Footer() {
  const data = await getData(getPagesContent);
  const menuItemsToDisplay = data.pages.filter(
    (page) =>
      page?.menuLink?.visibleInMenu && page?.menuLink?.menu.includes("SEOMenu")
  );
  const rodo = data.pages.filter((page) => page?.menuLink?.slug === "rodo")[0];
  const policy = data.pages.filter(
    (page) => page?.menuLink?.slug === "polityka-prywatnosci"
  )[0];
  return (
    <footer className="bg-slate-300 py-12">
      <div className="container max-w-screen-xl">
        <div className="mb-12 flex gap-x-10">
          <div className="lg:w-1/3">
            <Image
              src="/silesia-on-polish-map.svg"
              alt="mapa polski z zaznaczonym województwem śląskim"
              width="269"
              height="250"
            />
          </div>
          <div className="text-xs md:text-base lg:w-2/3">
            <p className="mb-3">
              Zapraszamy zainteresowanych podjęciem współpracy z naszą firmą z
              sąsiednich miast:
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-2 text-sm">
              {menuItemsToDisplay.map((link) => {
                return (
                  <div
                    key={link?.id}
                    className="rounded-md bg-slate-200 px-3 py-1 transition-colors first:border-s hover:bg-slate-100"
                  >
                    <Link
                      className="text-blue-700 transition-all hover:text-blue-800"
                      href={link?.menuLink?.slug}
                    >
                      {link?.menuLink?.display}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Link
              href={rodo?.menuLink?.slug}
              className="text-xs text-blue-700 lg:whitespace-nowrap"
            >
              {rodo?.menuLink?.display}
            </Link>
            <Link
              href={policy?.menuLink?.slug}
              className="text-xs text-blue-700 lg:whitespace-nowrap"
            >
              {policy?.menuLink?.display}
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="md: text-xs md:text-right lg:whitespace-nowrap">
              © 2023 NikStal - Marek Błaśkiewicz. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs md:text-right lg:whitespace-nowrap">
              Projekt i kodowanie: Rafał Piaśnik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
