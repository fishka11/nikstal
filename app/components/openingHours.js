import getData from '../lib/fetchAPI';
import { getFirmData } from '../lib/queries';
import { daysOfWeekPl } from "../lib/variables";
import { v4 as uuidv4 } from "uuid";

export default async function OpeningHours() {
  const data = await getData(getFirmData);
  const firmData = await data.firmsData[0]

  const daysOfWeekToShortPl = (day) => {
    if (day) {
      const pl = daysOfWeekPl.find(
        (item) => item.en.toLowerCase() === day.toLowerCase()
      );
      return pl.shortPl;
    }
  };

  const workingHours =
    firmData &&
    firmData.workingHours.length &&
    firmData.workingHours.map((item) => {
      const day = item.day && {
        id: item.id || uuidv4(),
        day: item.day && daysOfWeekToShortPl(item.day),
        hours: `${item.openingHour} - ${item.closingHour}`,
        closed: item.closed,
      };
      if (day) {
        return day;
      }
    });

  return (
    <div className="mb-8">
      <div className="container mb-4 mt-8 flex max-w-screen-xl flex-col items-center">
        <h2 className="text-2xl font-light text-blue-800">Godziny otwarcia</h2>
      </div>
      <div className="container mb-14 flex max-w-screen-xl flex-col items-center">
        {workingHours.length &&
          workingHours.map((item) => {
            return (
              item && (
                <p className="text-xl font-light" key={item?.id}>
                  {item?.day}:{" "}
                  <span className="font-bold">
                    {item.closed ? "Zamknięte" : item?.hours}
                  </span>
                </p>
              )
            );
          })}
      </div>
    </div>
  );
}
