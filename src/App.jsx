import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrypage from "./Desktop/Components/EntryPage";
import Signin from "./Desktop/Components/Signin";
import Signup from "./Desktop/Components/Signup";
import Category from "./Desktop/Components/Category";
import Dashboard from "./Desktop/Components/Dashboard";
import EventsPage from "./Desktop/Components/EventsPage";
import BookingPage from "./Desktop/Components/BookingPage";
import AvailabilityPage from "./Desktop/Components/AvailabilityPage";
import SettingsPage from "./Desktop/Components/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrypage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />

        {/* ✅ Allow child routes inside Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="events" element={<EventsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="availability" element={<AvailabilityPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
