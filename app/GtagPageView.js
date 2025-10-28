"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GtagPageView() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    // Skip initial render since GA already sent a page_view via gtag('config', ...)
    if (first.current) {
      first.current = false;
      return;
    }
    if (!window.gtag) return;

    const search = typeof window !== "undefined" ? window.location.search : "";
    const path = pathname + (search || "");

    window.gtag("event", "page_view", {
      page_path: path,
      page_location: typeof window !== "undefined" ? window.location.href : "",
      page_title: typeof document !== "undefined" ? document.title : "",
    });
  }, [pathname]);

  return null;
}
