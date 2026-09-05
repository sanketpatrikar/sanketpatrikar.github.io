import { HeadContent, Scripts, createRootRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { NotFound } from "@/components/NotFound";
import { SiteNavigation } from "@/components/SiteNavigation";
import { reloadOnPreloadErrorScript } from "@/lib/preload-recovery";
import { getSeoMeta } from "@/lib/seo";
import { themeScript } from "@/lib/theme";

import appCss from "../styles.css?url";

const showSiteNavigation = true;
const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
      {
        href: "/favicon.svg",
        rel: "icon",
        type: "image/svg+xml",
      },
      // To help RSS readers find your feed
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Posts by Sanket Patrikar",
        href: "https://sanketpatrikar.com/feed.xml",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      ...getSeoMeta({ type: "profile" }),
    ],
  }),

  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return (
    <div key={pathname} className={isInitialRender.current ? undefined : "page-enter"}>
      {children}
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta id="theme-color" name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
        {umamiWebsiteId ? (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={umamiWebsiteId}
            data-domains="sanketpatrikar.com,www.sanketpatrikar.com"
            data-do-not-track="true"
            data-exclude-search="true"
          />
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html: reloadOnPreloadErrorScript,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="mx-auto min-h-screen w-full max-w-5xl lg:border-x lg:border-[var(--border)]">
          {showSiteNavigation ? <SiteNavigation /> : null}
          <div className="site-content">
            <RouteTransition>{children}</RouteTransition>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

