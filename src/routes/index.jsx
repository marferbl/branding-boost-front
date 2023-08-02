import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/start/register-page";
import LoginPage from "../pages/start/login-page";
import PrivateRoute from "./privateRoute";
import Dashboard from "../components/dashboard/dashboard";
import { ProfilePage } from "../pages/profile/profile";
import LandingPage from "../pages/landing/landing";
import PricingPage from "../pages/pricing/pricing-page";
import BlogPage from "../pages/blog/blog-page";
import Article_1 from "../pages/blog/article1";
import Article_2 from "../pages/blog/article2";
import Article_3 from "../pages/blog/article3";
import Article_4 from "../pages/blog/article4";

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/pricing"} element={<PricingPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/blog/seo-posicionamiento-google"} element={<Article_1 />} />
        <Route path={"/blog/marketing-leads"} element={<Article_2 />} />
        <Route path={"/blog/tendencias-redes-sociales"} element={<Article_3 />} />
        <Route path={"/blog/email-marketing-digital"} element={<Article_4 />} />
        <Route path={"/newRouteHidden"} element={<App />} />
        <Route path={"private"} element={<PrivateRoute />}>
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"profile"} element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
