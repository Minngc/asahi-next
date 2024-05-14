import { AvatarWithBackground } from "@/components/avatar";
import { ReactNode } from "react";
import styles from "./page.module.scss";
import classNames from "classnames";

const HomePage = () => {
  return (
    <>
      <HomeLoading />
      <AvatarWithBackground size={140} height={120} offset={50} />
      <div className={classNames(styles.homeContainer)}>
        <div className={styles.articleList}>
          <Home />
        </div>
        <div className={classNames(styles.sideBar)}>
          <HomeSidebar />
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { ArticleCard } from "@/components/article/articleCard";
import articles from "@external/config/articles.json";

const Home = () => {
  return (
    <>
      {articles.map(({ year, month, fileName, data }) => {
        return (
          <ArticleCard
            year={year}
            month={month}
            data={data}
            key={`home_${year}_${month}_${fileName}`}
          />
        );
      })}
    </>
  );
};

import sidestyles from "./sidebar.module.scss";
import { SideBarTag } from "@/components/sideBar/sidebarTag";
import { AnimeCard } from "@/components/animeCard";
import { LogCard } from "@/components/logCard";
import { SideBarCard } from "@/components/sideBar/sidebar";
import tagList from "@external/config/tagList.json";
import log from "@external/config/pages-config/log.json";
import notice from "@external/config/pages-config/notice.json";
import { datetrans } from "@/util/func";
import { HomeLoading } from "@/components/loading";
const anime: {
  title: string;
  type: [string, string, string];
  state: string;
}[] = [];

const HomeSidebar = () => {
  return (
    <>
      <SideBarCard
        title="公告"
        sideNode={
          <div className={sidestyles.noticeDate}>{datetrans(notice.date)}</div>
        }
        className={{ cardContainer: sidestyles.noticeContainer }}
      >
        {notice.message}
      </SideBarCard>

      <SideBarCard title="标签">
        {tagList.tagsWidthClass.map(({ link, title, list }) => {
          return (
            <SideBarTag
              key={`sidebarTags_${title}`}
              link={link}
              title={title}
              tagList={list}
            />
          );
        })}
      </SideBarCard>

      {anime.length > 0 && (
        <SideBarCard title="アニメ">
          {anime.map((value) => {
            return (
              <AnimeCard key={`${value.title}_${value.state}`} {...value} />
            );
          })}
        </SideBarCard>
      )}

      <SideBarCard title="日志">
        {log.slice(0, 5).map((value) => {
          return <LogCard key={`logCard_${value.date}`} {...value} />;
        })}
      </SideBarCard>
    </>
  );
};
