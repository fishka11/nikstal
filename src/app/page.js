import CardWithIcon from "./components/CardWithIcon";
import CardWithPic from "./components/CardWithPic";
import Cover from "./components/Cover";
import { getPagesContent } from "./lib/hygraphcms";
import filterFetchedData from "./lib/filterFetchedData";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";

export async function generateMetadata() {
  const data = await getPagesContent();
  const metaData = filterFetchedData(data.pages, null);

  return {
    title: metaData?.seo?.title,
    description: metaData?.seo?.description,
    keywords: metaData?.seo?.keywords,
  };
}

export default async function Home() {
  const data = await getPagesContent();
  const content = filterFetchedData(data.pages, null);
  const bg2 = {
    backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url('${content.bgPictures[0].picture.url}')`,
  };
  return (
    <>
      <Cover slug={null} />
      <div className="bg-white pb-14 pt-4 md:pt-14">
        <div className="container max-w-screen-lg">
          <h1 className="mb-4 mt-4 text-center text-xl font-light text-blue-900 md:mb-8 md:mt-0 md:text-3xl">
            {content?.title}
          </h1>
          <ReactMarkdown className="text-center">
            {content?.texts[0]?.text?.markdown}
          </ReactMarkdown>
        </div>
        <div className="container mt-14 flex max-w-screen-2xl flex-wrap justify-center">
          {content?.cardsWithIcon.map((card) => {
            return (
              <CardWithIcon
                key={card?.id || uuidv4()}
                icon={card?.fontAwesomeIconName}
                title={card?.subtitle}
                texts={card?.texts}
              />
            );
          })}
        </div>
      </div>
      <div
        className="h-auto bg-cover bg-fixed bg-center bg-no-repeat py-20"
        style={bg2}
      >
        <div className="container max-w-screen-lg p-12">
          <h2 className="mb-6 text-center text-2xl font-light text-slate-200">
            {content?.texts[1]?.subtitle}
          </h2>
          <ReactMarkdown className="text-center text-white">
            {content?.texts[1]?.text?.markdown}
          </ReactMarkdown>
        </div>
      </div>

      <div className="bg-white pt-20">
        <div className="container flex max-w-screen-2xl flex-wrap justify-center">
          {content?.cardsWithPic.map((card) => {
            return (
              <CardWithPic
                key={card?.id || uuidv4()}
                pic={card?.picture}
                title={card?.subtitle}
                texts={card?.texts}
              />
            );
          })}
        </div>
        <div className="container max-w-screen-lg p-12">
          <ReactMarkdown className="text-center">
            {content?.texts[2]?.text?.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
