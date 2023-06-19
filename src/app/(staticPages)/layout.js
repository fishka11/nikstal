import { getStaticPagesContent } from "../lib/hygraphcms";
import filterFetchedData from "../lib/filterFetchedData";
import Image from "next/image";

// export const fetchCache = "force-no-store";

export default async function PagesLayout({ children }) {
  // const { slug } = params;
  const data = await getStaticPagesContent();
  const content = await filterFetchedData(
    data.staticPages,
    "cennik-skupu-zlomu"
  );

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
