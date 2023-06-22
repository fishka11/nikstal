async function fetchAPI(query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.HYGRAPH_PROD_AUTH_TOKEN}`,
  };

  const res = await fetch(process.env.HYGRAPH_RO_PROJECT_API, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error(`Failed to fetch API`);
  }

  return json.data;
}

export async function getLayoutsSEO() {
  const data = await fetchAPI(
    `
query layoutsSEO {
  layoutsSEO(first: 100) {
    seo {
      id
      title
      description
      keywords
    }
    name
    id
  }
}`
  );
  return { ...data };
}

export async function getPagesContent() {
  const data = await fetchAPI(
    `
query getPagesContent {
  pages(first: 100) {
    header {
      id
      picture {
        fileName
        handle
        height
        mimeType
        id
        size
        url
        width
      }
      texts {
        subtitle
        id
        text {
          html
          markdown
          raw
          text
        }
      }
      slogans
      verticalPosition
      ctaButtons {
        url
        text
        id
      }
    }
    id
    markdownTexts {
      markdownText
      id
    }
    seo {
      title
      keywords
      id
      description
    }
    texts {
      id
      subtitle
      text {
        html
        markdown
        raw
        text
      }
    }
    title
    subtitle
    bgPictures {
      id
      picture {
        fileName
        id
        height
        handle
        mimeType
        size
        url
        width
      }
      verticalPosition
    }
    menuLink {
      display
      id
      menu
      positionInMenu
      slug
      visibleInMenu
    }
  }
}
`
  );
  return { ...data };
}

export async function getStaticPagesContent(slug) {
  const data = await fetchAPI(
    `
query getstaticPagesContent {
  staticPages(where: {menuLink: {slug: ${slug === "/" ? null : `"${slug}"`}}}) {
    ctaButtons {
      id
      text
      url
    }
    header {
      id
      picture {
        fileName
        handle
        height
        mimeType
        id
        size
        url
        width
      }
      texts {
        subtitle
        id
        text {
          html
          markdown
          raw
          text
        }
      }
      slogans
      verticalPosition
      ctaButtons {
        url
        text
        id
      }
    }
    id
    markdownTexts {
      markdownText
      id
    }
    seo {
      title
      keywords
      id
      description
    }
    texts {
      id
      subtitle
      text {
        html
        markdown
        raw
        text
      }
    }
    title
    subtitle
    bgPictures {
      id
      picture {
        fileName
        id
        height
        handle
        mimeType
        size
        url
        width
      }
      verticalPosition
    }
    cardsWithIcon {
      fontAwesomeIconName
      id
      subtitle
      texts {
        subtitle
        text {
          html
          markdown
          raw
          text
        }
      }
    }
    cardsWithPic {
      id
      subtitle
      texts {
        subtitle
        text {
          html
          markdown
          raw
          text
        }
        id
      }
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        width
        url
      }
    }
    menuLink {
      display
      id
      menu
      positionInMenu
      slug
      visibleInMenu
    }
  }
}
`
  );
  return { ...data };
}

export async function getHeaderContent() {
  const data = await fetchAPI(
    `
query headerContent {
  staticPages(first: 100) {
    id
    menuLink {
      display
      id
      menu
      positionInMenu
      slug
      visibleInMenu
    }
  }
  firmsData {
    email
    phone
  }
}
  `
  );
  return { ...data };
}

export async function getFirmData() {
  const data = await fetchAPI(
    `
query firmData {
  firmsData {
    address
    bdo
    city
    email
    id
    name
    nip
    phone
    postalCode
    regon
    web
    workingHours {
      id
      dayOfWeek
      openingHour
      closingHour
    }
  }
}
  `
  );
  return { ...data };
}

export async function getPriceList() {
  const data = await fetchAPI(
    `
query prices {
  currentPriceLists(first: 100) {
    priceList(first: 300) {
      id
      name
      price
    }
  }
}
  `
  );
  return { ...data };
}
