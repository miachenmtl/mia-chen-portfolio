import AppHead from "../components/AppHead";
import LandingScreen from "../components/LandingScreen";
import InBetweenSection from "../components/InBetweenSection";
import BottomScreen from "../components/BottomScreen";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <AppHead />
      <main>
        <LandingScreen />
        <InBetweenSection />
        <BottomScreen />
      </main>
    </div>
  );
}
