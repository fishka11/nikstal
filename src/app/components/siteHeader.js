import { getHeaderContent, getFirmData } from "../lib/hygraphcms";
import ContactBar from "./upperBar";
import Menu from "./mainMenu";

export default async function Header() {
  const data1 = await getHeaderContent();
  const data2 = await getFirmData();
  const pages = data1?.staticPages;
  const phone = data2?.firmsData[0]?.phone;
  const email = data2?.firmsData[0]?.email;
  return (
    <div className="fixed top-0 z-50 backdrop-blur-sm">
      <div className="">
        <ContactBar phone={phone} email={email} />
        <Menu pages={pages} />
      </div>
    </div>
  );
}
