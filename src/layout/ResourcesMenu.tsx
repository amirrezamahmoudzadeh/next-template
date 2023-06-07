/* eslint-disable tailwindcss/classnames-order */

import React from "react"

import { useLocaleText } from "@/hooks/useLocaleText"
import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const ResourcesMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  return (
    <div
      className="absolute inset-x-8 top-full bg-white !py-0 flex justify-between pl-8 rounded-lg shadow-lg -translate-y-2 overflow-hidden h-[176px] rtl:pl-0 rtl:pr-8"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="flex justify-between flex-1 py-6 children:flex-1">
        <FooterLinksWrapper
          header={useLocaleText("بیشتر بدانید", "Learn More")}
          links={[
            { link: "/about", title: useLocaleText("درباره ما", "About Us") },
            { link: "/blog", title: useLocaleText("وبلاگ", "Blog") },
            { link: "", title: useLocaleText("مرکز پشتیبانی", "Help Center") },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header={useLocaleText("مستندات", "Documentation")}
          links={[
            {
              link: "",
              title: useLocaleText("اسناد پلتفرم", "Platform Documentation"),
            },
            { link: "", title: useLocaleText("مرجع API", "API Refrence") },
            {
              link: "",
              title: useLocaleText("افزونه مرورگر", "Browser Extension"),
            },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header={useLocaleText("کاربری Userback", "Userback Userversity")}
          links={[
            { link: "", title: useLocaleText("مرکز منابع", "Resource Hub") },
          ]}
          isInTopNav
        />
      </div>
      <div className="flex w-1/4 "></div>
    </div>
  )
}

export default ResourcesMenu
