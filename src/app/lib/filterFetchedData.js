export default function filterFetchedData(array, param) {
  return array.filter((item) => item.menuLink.slug === param)[0];
}
