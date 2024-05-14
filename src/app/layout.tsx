import "./global.scss";

import { ReactNode, Suspense } from "react";
import { TopBar } from "@/components/topBar";
import { ControlPanel } from "@/components/control-panel";
import topmenu from "@external/config/pages-config/topmenu.json";

export const metadata = {
  title: "Ming's Blog",
  description: "Hello!",
};

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <html>
      <body>
        <TopBar menuList={topmenu} />
        {children}

        <ControlPanel />
      </body>
    </html>
  );
};

export default Layout;
