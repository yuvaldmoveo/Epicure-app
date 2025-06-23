import React from "react";
import { capitalize } from 'lodash';

type RenderIconsProps = {
  icons: string[];
  media: "mobile" | "desktop";
  iconBoxClass: string;
  iconClass: string;
};

export const renderIcons = ({
  icons,
  media,
  iconBoxClass,
  iconClass,
}: RenderIconsProps) => (
  <div className={iconBoxClass}>
    {icons.map((icon) => (
      <img
        key={icon}
        src={`/src/assets/icons/Type=${capitalize(icon)}, Size=${media === "mobile" ? "Small" : "Big"}.svg`}
        alt={`${icon} icon`}
        className={iconClass}
      />
    ))}
  </div>
);
