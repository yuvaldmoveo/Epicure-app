import React from "react";
import { capitalize } from "lodash";

type RenderIconsProps = {
  icon: string | string[]; 
  media?: "mobile" | "desktop"; 
  iconBoxClass?: string;
  iconClass: string;
};

export const renderIcons = ({
  icon,
  media,
  iconBoxClass,
  iconClass,
}: RenderIconsProps) => {
  const iconsArray = Array.isArray(icon) ? icon : [icon];

  const rendered = iconsArray.map((iconItem) => {
    const fileName = media
      ? `${capitalize(iconItem)}-${media}.svg`
      : `${capitalize(iconItem)}.svg`;

    const path = `/src/assets/icons/${fileName}`;

    return (
      <img
        key={iconItem}
        src={path}
        alt={`${iconItem} icon`}
        className={iconClass}
      />
    );
  });

  return iconBoxClass ? (
    <div className={iconBoxClass}>{rendered}</div>
  ) : (
    <>{rendered}</>
  );
};
