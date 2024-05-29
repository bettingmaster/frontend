import MainHeadContent from "@/components/MainContent/MainHeadContent";
import ShowGames from "@/components/ShowGames";
import Rightbar from "@/components/Rightbar";
import MainNavContent from "@/components/MainContent/MainNavContent";
import styles from "@/styles/Home.module.css";
import style from "@/components/Rightbar.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.main_content}>
        <MainNavContent />
        <MainHeadContent />
        <ShowGames />
      </section>
      <aside className={style.side_bar}>
        <Rightbar />
      </aside>
    </>
  );
}
