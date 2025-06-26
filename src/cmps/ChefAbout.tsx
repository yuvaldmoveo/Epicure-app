import styles from "../assets/styles/cmps/ChefAbout.module.scss";
import type { Media } from "../hooks/useMedia";

interface ChefAboutProps {
  about: string;
  media: Media;
}

export const ChefAbout = ({ about, media }: ChefAboutProps) => {
  return (
    <p className={styles[`about--${media}`]}>
      {about}
    </p>
  );
};
