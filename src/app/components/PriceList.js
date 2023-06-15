import { getPriceList } from "../lib/hygraphcms";

export const revalidate = 60;

export default async function PriceList() {
  const data = await getPriceList();
  const products = data.priceLists;

  return (
    <div className="container mb-8 max-w-screen-lg">
      <table className="w-full table-fixed border-collapse rounded-t-lg">
        <thead>
          <tr className="font-bold text-white">
            <td className="rounded-tl-lg border-r border-slate-200 bg-blue-500 px-4 py-2 text-right">
              Produkt
            </td>
            <td className="rounded-tr-lg border-slate-200  bg-blue-500 px-4 py-2">
              Cena
            </td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id} className="even:bg-slate-100">
                <td className="border-y border-r border-slate-200 px-4 py-2 text-right font-light">
                  {product.productName}
                </td>
                <td className="border-y border-slate-200 px-4 py-2 font-bold">
                  {product.price}{" "}
                  <span className="text-sm font-light">zł/kg</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
