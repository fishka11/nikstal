import { getStaticPagesContent } from "../../lib/dynamicDataFetch";
import filterFetchedData from "../../lib/filterFetchedData";
import ReactMarkdown from "react-markdown";
import styles from "../../global.module.css";
import PriceList from "../../components/PriceList";

export async function generateMetadata() {
  const data = await getStaticPagesContent();
  const metaData = await filterFetchedData(
    data.staticPages,
    "cennik-skupu-zlomu"
  );

  return {
    title: metaData?.seo?.title,
    description: metaData?.seo?.description,
    keywords: metaData?.seo?.keywords,
  };
}

// export const fetchCache = "force-no-store";

export default async function PriceListPage() {
  const data = await getStaticPagesContent();
  const content = filterFetchedData(data.staticPages, "cennik-skupu-zlomu");
  return (
    <>
      <div className="container mb-4 mt-4 max-w-screen-lg pt-2 md:mb-8 md:mt-0 md:pt-12">
        <h1 className="mb-2 text-center text-2xl font-light text-blue-900 md:text-3xl">
          {content?.title}
        </h1>
        <p className="mb-2 text-center text-xl font-light md:mb-8">
          {content?.subtitle}
        </p>
      </div>
      <PriceList />
      <div className="container max-w-screen-lg p-2 md:pb-8 md:pt-0">
        <h2 className="mb-2 text-2xl font-light text-blue-800">
          {content?.texts[0]?.subtitle}
        </h2>
        <ReactMarkdown className={styles.text}>
          {content?.texts[0]
            ? content?.texts[0]?.text?.markdown
            : content?.markdownTexts[0]?.markdownText}
        </ReactMarkdown>
      </div>
    </>
  );
}
