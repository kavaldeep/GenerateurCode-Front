import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Campaign } from "./pages/Campaigns/Campaign";
import { Campaigns } from "./pages/Campaigns/Campaigns";
import Customer from "./pages/Customers/Customer";
import Customers from "./pages/Customers/Customers";
import { Home } from "./pages/Home";
import Login from "./pages/Login/login";
import { Redemption } from "./pages/Redemptions/Redemption";
import { Redemptions } from "./pages/Redemptions/Redemptions";
import Reward from "./pages/Rewards/Reward";
import Rewards from "./pages/Rewards/Rewards";
import { Voucher } from "./pages/Vouchers/Voucher";
import { Vouchers } from "./pages/Vouchers/Vouchers";
import { isAuthenticated } from "./utils/isAuthenticated";

function App() {
  if (isAuthenticated()) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("jwt")}`;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }

  useEffect(() => {
    if (isAuthenticated()) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("jwt")}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
  }, []);

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vouchers" element={<Vouchers />} />
            <Route path="/vouchers/:code" element={<Voucher />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:id" element={<Campaign />} />
            <Route path="/customers/" element={<Customers />} />
            <Route path="/customers/:id" element={<Customer />} />
            <Route path="/rewards/" element={<Rewards />} />
            <Route path="/rewards/:id" element={<Reward />} />
            <Route path="/redemptions/" element={<Redemptions />} />
            <Route path="/redemptions/:code" element={<Redemption />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
