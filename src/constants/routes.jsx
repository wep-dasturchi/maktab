import {
  AboutPage,
  ConnectionPage,
  HomePage,
  LessonsPage,
  NewsPage,
  PhotoPage,
  NotFount,
  TeachersPage
} from "../page";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: 3,
    path: "/lessons",
    element: <LessonsPage />,
  },
  {
    id: 4,
    path: "/news",
    element: <NewsPage />,
  },
  {
    id: 5,
    path: "/photo",
    element: <PhotoPage />,
  },
  {
    id: 6,
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: 7,
    path: "/connection",
    element: <ConnectionPage />,
  },

  {
    id: 8,
    path: "/teachers",
    element: <TeachersPage />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
];
