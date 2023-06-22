export default function filterFetchedData(array, param) {
  return array.filter((item) => {
    const page =
      param === ("/" || !param) ? !item.menuLink.slug : item.menuLink.slug;
    return page;
  })[0];
}
