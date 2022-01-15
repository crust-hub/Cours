import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DayView from "./pages/DayView";
import Footer from "./components/Footer";
import WeekView from "./pages/WeekView";
import SuspenseCover from "./components/SuspenseCover";

const SelfInfoView = React.lazy(() => import("./pages/SelfInfoView"));
const MoreView = React.lazy(() => import("./pages/MoreView"));
const ScoreView = React.lazy(() => import("./pages/ScoreView"));
const DateSettingView = React.lazy(() => import("./pages/DateSettingView"));
const AboutUsView = React.lazy(() => import("./pages/AboutUsView"));
const UserTermView = React.lazy(() => import("./pages/UserTermView"));
const OpenSourceLicenseView = React.lazy(() => import("./pages/OpenSourceLicenseView"));
const ConcatUsView = React.lazy(() => import("./pages/ConcatUsView"));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<SuspenseCover />}>
        <Routes>
          <Route path="/table" element={<DayView />} />
          <Route path="/week" element={<WeekView />} />
          <Route exact path="/selfInfo" element={<SelfInfoView />} />
          <Route exact path="/more" element={<MoreView />} />
          <Route exact path="/suspenseCover" element={<SuspenseCover />} />
          <Route exact path="/score" element={<ScoreView />} />
          <Route exact path="/dateSetting" element={<DateSettingView />} />
          <Route exact path="/aboutUs" element={<AboutUsView />} />
          <Route exact path="/userTerm" element={<UserTermView />} />
          <Route exact path="/openSourceLiense" element={<OpenSourceLicenseView />} />
          <Route exact path="/concatUs" element={<ConcatUsView />} />
          <Route index path="*" element={<DayView />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
