import React from "react";
import {
  HiBookOpen,
  HiBriefcase,
  HiCalculator,
  HiCake,
  HiChartBar,
  HiChip,
  HiCloud,
  HiFire,
  HiHeart,
  HiHome,
  HiLibrary,
  HiLockClosed,
  HiMusicNote,
  HiPencilAlt,
  HiShoppingCart,
} from "react-icons/hi";

type ProjectIconProps = {
  iconKey: string;
  className?: string;
};

const iconByKey: Record<string, React.ReactElement> = {
  cookbook: <HiFire />,
  penpad: <HiPencilAlt />,
  healthcare: <HiHeart />,
  eatery: <HiCake />,
  vault: <HiLockClosed />,
  hotel: <HiHome />,
  job: <HiBriefcase />,
  bmi: <HiCalculator />,
  library: <HiLibrary />,
  vision: <HiChip />,
  dashboard: <HiChartBar />,
  weather: <HiCloud />,
  music: <HiMusicNote />,
  listify: <HiShoppingCart />,
};

const ProjectIcon: React.FC<ProjectIconProps> = ({ iconKey, className }) => {
  return (
    <span className={`project-icon project-icon-${iconKey} ${className || ""}`}>
      {iconByKey[iconKey] || <HiBookOpen />}
    </span>
  );
};

export default ProjectIcon;
