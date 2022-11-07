import client from "./client";

const searchFilters = "&book&newest&full";

const getBooks = (book) =>
  client.searchClient.get(book + searchFilters).then((response) => {
    //   check for errors
    if (!response.ok) {
      return response;
    }
    // sort through the data and organize it so our frontend can read it.
    // We still need a filter method that removes/edits missing fields.

    // let filteredSearchResults = response.data.items.filter(({ volumeInfo }) => {
    //   return volumeInfo.averageRating > 3;
    // });

    // console.log(filteredSearchResults);

    return (results = response.data.items.map(({ volumeInfo }) => {
      return {
        id: volumeInfo.infoLink,
        title: volumeInfo.title,
        authors: volumeInfo?.authors || "No Author Details",
        description: volumeInfo.description,
        image: volumeInfo?.imageLinks?.thumbnail,
        link: volumeInfo.infoLink,
        rating: volumeInfo?.averageRating || 0,
      };
    }));
  });

export default {
  getBooks,
};
