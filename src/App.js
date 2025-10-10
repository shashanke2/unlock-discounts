import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

import SignInPage from "./SignInPage";
import MobilePage from "./MobilePage";
import VerifyPage from "./VerifyPage";
import EditProfile from "./EditProfile";
import ProviderRegistration from "./ProviderRegistration";
import NoBookings from "./NoBookings";
import BookingsPage from "./BookingsPage";
import FeedbackForm from "./FeedbackForm";
import PopupMsg from "./PopupMsg";
import ProviderDashboard from "./ProviderDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/number" element={<MobilePage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/service-registration" element={<ProviderRegistration />} />
        <Route path="/no-bookings" element={<NoBookings />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/popupmsg" element={<PopupMsg />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
      </Routes>
    </Router>
  );
}
