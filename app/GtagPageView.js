"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GtagPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true); // skip the initial auto page_view that GA sends

  useEffect(() => {
    // Skip the very first render; GA will send the initial page_view automatically.
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (!window.gtag) return;

    const path = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
