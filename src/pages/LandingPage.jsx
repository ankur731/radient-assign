import React, { useEffect } from "react";
import TopBar from "../components/landingPage/TopBar";
import HostingCard from "../components/landingPage/HostingCard";
import DealCards from "../components/landingPage/DealCards";
import SignupBar from "../components/landingPage/SignupBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/hosting-for-all/hostings", { replace: true });
    }
  }, []);

  return (
    <div id="about" className="w-full">
      <Navbar />
      <div className={"mx-auto max-w-screen-xl p-5 "}>
        <TopBar />
        <HostingCard />
        <DealCards />
        <SignupBar />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
