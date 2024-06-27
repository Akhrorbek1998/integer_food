import { Link } from "react-router-dom";
import foodLogo from "../assets/images/logo.svg";
import {
  HomeIcon,
  DiscountIcon,
  GraphIcon,
  MessageIcon,
  NotificationIcon,
  SettingIcon,
  LogoutIcon,
} from "../data/moc-data";
import { useState } from "react";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("/");
  return (
    <aside className="w-[104px] h-screen pt-6 pl-3 fixed top-0 left-0 bottom-0 bg-dark-bg text-xl">
      <Link className="block ml-3 mb-6">
        <img src={foodLogo} alt="food logo icon" />
      </Link>
      <ul className="flex flex-col ">
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "/" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("/")}
        >
          <Link
            className={`w-14 h-14 rounded-lg  flex p-4  ${
              activePage === "/" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to="/"
          >
            <HomeIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "discount" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("discount")}
        >
          <Link
            className={`w-14 h-14 rounded-lg flex items-center juctify-center p-4 ${
              activePage === "discount" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
          >
            <DiscountIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "graph" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("graph")}
        >
          <Link
            className={`w-14 h-14 rounded-lg flex p-4 ${
              activePage === "graph" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to="dashboard"
          >
            <GraphIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "message" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("message")}
        >
          <Link
            className={`w-14 h-14 rounded-lg flex p-4 ${
              activePage === "message" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
          >
            <MessageIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "notification" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("notification")}
        >
          <Link
            className={`w-14 h-14 rounded-lg flex p-4 ${
              activePage === "notification"
                ? "bg-[#EA7C69] shadow-btn-shadow"
                : ""
            }`}
          >
            <NotificationIcon activePage={activePage} />
          </Link>
        </li>
        <li
          className={`p-3 rounded-s-lg mb-2 ${
            activePage === "settings" ? "bg-base-bg" : ""
          }`}
          onClick={() => setActivePage("settings")}
        >
          <Link
            className={`w-14 h-14 rounded-lg flex p-4 ${
              activePage === "settings" ? "bg-[#EA7C69] shadow-btn-shadow" : ""
            }`}
            to={"settings"}
          >
            <SettingIcon activePage={activePage} />
          </Link>
        </li>
      </ul>
      <Link
        className="w-14 h-14 absolute bottom-0 left-6 rounded-lg flex p-4"
        to={"/"}
        onClick={() => setActivePage("/")}
      >
        <LogoutIcon activePage={activePage} />
      </Link>
    </aside>
  );
};

export default Sidebar;
