"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GtagPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRender = useRef(true);

  useEffect(() => {
    // GA already records the initial page view through gtag("config", ...).
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (typeof window === "undefined" || !window.gtag) {
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}