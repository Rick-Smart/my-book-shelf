import client from "./client";

const getBooks = (book) =>
  client.searchClient.get(book).then((response) => {
    //   check for errors
    if (!response.ok) {
      return response;
    }
    // const filteredData = response.data.items.filter(
    //   ({ volumeInfo }) =>
    //     volumeInfo.imageLinks.thumbnail !== !volumeInfo.imageLinks.thumbnail
    // );
    // console.log(filteredData);
    // sort through the data and organize it so our frontend can read it.
    return (results = response.data.items.map(({ volumeInfo }) => {
      return {
        id: volumeInfo.infoLink,
        title: volumeInfo.title,
        authors: volumeInfo.authors,
        description: volumeInfo.description,
        image: volumeInfo?.imageLinks?.thumbnail,
        link: volumeInfo.infoLink,
        rating: volumeInfo?.averageRating,
      };
    }));
  });

export default {
  getBooks,
};
