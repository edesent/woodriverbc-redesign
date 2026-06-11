"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// The web-chat widget only belongs on the homepage. The third-party script
// injects fixed-position elements into <body> (ids prefixed `wbc-`), so rather
// than tearing those down on every navigation we flag the route on <body> and
// let CSS hide the widget everywhere except "/". (See globals.css.)
export default function ChatWidget() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.dataset.chatHidden = pathname === "/" ? "false" : "true";

    const oldGreeting = "Hi! Got a question for Pastor Jon?";
    const newGreeting = "Hello! Speak to Pastor Jon today.";

    const updateGreetingText = () => {
      const roots = [
        document.getElementById("wbc-greeting-popup"),
        document.getElementById("wbc-chat-window"),
      ].filter((element): element is HTMLElement => Boolean(element));

      roots.forEach((root) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();

        while (node) {
          if (node.textContent?.includes(oldGreeting)) {
            node.textContent = node.textContent.replace(oldGreeting, newGreeting);
          }
          node = walker.nextNode();
        }
      });
    };

    updateGreetingText();

    const observer = new MutationObserver(updateGreetingText);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <Script
      src="https://slackwebsitechat.vercel.app/widget/wbc-chat.js"
      data-api="https://slackwebsitechat.vercel.app"
      data-key="wbc_422afd7825c1a05f6d82ebf47816500fca0421f5874b4b6c"
      strategy="afterInteractive"
    />
  );
}
