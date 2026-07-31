import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I'm Sorry — 100,000 Times" },
      {
        name: "description",
        content:
          "A cute, heartfelt apology micro-site that writes 'I am Sorry' one hundred thousand times.",
      },
      { property: "og:title", content: "I'm Sorry — 100,000 Times" },
      {
        property: "og:description",
        content: "One hundred thousand little apologies, just for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The whole experience lives in a single self-contained file: /sorry.html
function Index() {
  return (
    <iframe
      src="/sorry.html"
      title="An apology, one hundred thousand times"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allow="autoplay; encrypted-media"
    />
  );
}
