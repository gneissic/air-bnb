import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import HomePage, { loader as homePageLoader } from "./pages/HomePage";
import RoomsPage, { loader as roomLoader } from "./pages/RoomsPage";
import TropicalDetailPage, {
  loader as tropicalDetailLoader,
} from "./pages/TropicalDetailPage";
import Error from "./components/error";
import RoomsDetailPage, {
  loader as roomDetailLoader,
} from "./pages/RoomsDetailPage";
import { Provider } from "react-redux";
import store from "./store";
import BookingsPage, {loader as bookingsLoader, action as homeBookingAction} from "./pages/BookingsPage";
import BooksForRooms, {loader as roomsBookingLoader, action as roomsBookingAction} from "./pages/BooksForRooms";
import TripsPage from "./pages/TripsPage";
import Messagespage from "./pages/Messagespage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: homePageLoader,
        },
        
        { path: "rooms", element: <RoomsPage />, loader: roomLoader },
        
      ],
    },
    {
      path: ":tropicalDetail",
      element: <TropicalDetailPage />,
      loader: tropicalDetailLoader,
    },
    {
      path: "rooms/:roomDetail",
      element: <RoomsDetailPage />,
      loader: roomDetailLoader,
    },
    {path: ":tropicalDetail/bookings", element: <BookingsPage/>, loader: bookingsLoader ,action: homeBookingAction},
    {path: "rooms/:roomDetail/bookings", element: <BooksForRooms/>, loader: roomsBookingLoader, action:roomsBookingAction},
    {path: "trips", element:<TripsPage/>},
    {path: "messages", element:<Messagespage/>}
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
