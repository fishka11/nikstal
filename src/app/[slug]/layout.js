import { getPagesContent } from "../lib/hygraphcms";
import filterFetchedData from "../lib/filterFetchedData";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await getPagesContent();

  return data.pages.map((page) => ({
    slug: page?.menuLink?.slug || "",
  }));
}

export default async function PagesLayout({ children, params }) {
  const { slug } = params;
  const data = await getPagesContent();
  const content = filterFetchedData(data.pages, slug);

  return (
    <>
      <div className="relative h-60 w-full overflow-hidden bg-slate-400 lg:h-80">
        <Image
          src={content?.header?.picture?.url}
          //   width={content?.header?.picture?.width}
          //   height={content?.header?.picture?.height}
          fill={true}
          alt={content?.title}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </div>
      {children}
    </>
  );
}
