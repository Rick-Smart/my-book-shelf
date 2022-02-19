import colors from "./colors";

export default [
  {
    title: "My Book Shelf",
    icon: {
      name: "book-multiple",
      backgroundColor: colors.primary,
    },
    targetScreen: "MyBookShelfScreen",
    tabName: "MyBookShelf",
  },
  {
    title: "Add Books to Shelf",
    icon: {
      name: "book-plus-multiple",
      backgroundColor: colors.secondary,
    },
    targetScreen: "AddBooksScreen",
    tabName: "AddBooks",
  },
  {
    title: "Community Library",
    icon: {
      name: "library-shelves",
      backgroundColor: colors.subTitle,
    },
    targetScreen: "CommunityLibraryScreen",
    tabName: "CommunityLibrary",
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.blue,
    },
    targetScreen: "MessagesScreen",
    tabName: "Messages",
  },
];
