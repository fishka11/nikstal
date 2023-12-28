import { NextResponse } from 'next/server';
import getData from '../../lib/fetchAPI';
import { getPriceList } from '../../lib/queries';

export async function GET(req) {
  try {
    const data = await getData(getPriceList, 'force-cache', 1);
    const products = await data.currentPriceLists[0].priceList;
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
