import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import About from '../pages/About/About'
import BookDetails from '../pages/BookDetails/BookDetails'
import ReadList from '../pages/ReadList/ReadList'
import Books from '../pages/Books/Books'
import Explore from '../pages/Explore/Explore'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: ()=> fetch('./books.json'),
            Component: Home
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: 'readList',
          loader: ()=> fetch('./books.json'),
          Component: ReadList
        },
        {
          path: '/bookDetails/:id',
          loader: ()=> fetch('./books.json'),
          Component: BookDetails
        },
        {
          path: '/explore',
          loader: ()=> fetch('./books.json'),
          Component: Explore
        }
    ]
  }
])