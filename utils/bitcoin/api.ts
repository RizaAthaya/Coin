export async function getData(id: number) {
  try {
    const res = await fetch(
      "https://wp.coinvestasi.com/wp-json/wp/v2/berita?tags=281"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getName(id: number) {
  try {
    const res = await fetch(
      "https://wp.coinvestasi.com/wp-json/wp/v2/tags/281"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAuthor(id: number) {
  try {
    const res = await fetch(
      `https://wp.coinvestasi.com/wp-json/wp/v2/users/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
