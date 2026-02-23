import React from "react";
import { useLocation } from "react-router-dom";
import {
  HiChartBar,
  HiChip,
  HiCode,
  HiDatabase,
  HiOfficeBuilding,
  HiShieldCheck,
} from "react-icons/hi";

const GlobalDecor: React.FC = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/data-analytics")) {
    return null;
  }

  return (
    <div className="global-decor" aria-hidden="true">
      <span className="global-ring ring-a"></span>
      <span className="global-ring ring-b"></span>
      <span className="global-ring ring-c"></span>
      <span className="global-ring ring-d"></span>
      <span className="global-ring ring-e"></span>
      <span className="global-ring ring-f"></span>

      <span className="global-decor-icon icon-code">
        <HiCode />
      </span>
      <span className="global-decor-icon icon-data">
        <HiDatabase />
      </span>
      <span className="global-decor-icon icon-chart">
        <HiChartBar />
      </span>
      <span className="global-decor-icon icon-enterprise">
        <HiOfficeBuilding />
      </span>
      <span className="global-decor-icon icon-security">
        <HiShieldCheck />
      </span>
      <span className="global-decor-icon icon-chip">
        <HiChip />
      </span>
    </div>
  );
};

export default GlobalDecor;
