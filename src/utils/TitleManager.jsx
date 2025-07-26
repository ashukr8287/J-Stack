import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleManager() {
  let location = useLocation();
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home | J-Stack";
    } else if (path.startsWith("/job/")) {
      document.title = "Job Details | J-Stack";
    } else if (path === "/jobs") {
      document.title = "Jobs | J-Stack";
    } else {
      document.title = "J-Stack";
    }
  }, [location]);
  return null;
}

export default TitleManager;
