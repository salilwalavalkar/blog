import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://salilwalavalkar.github.io/",
    title: "Salil Overflow",
    description: "Mind Palace",
    author: "Salil Walavalkar",
    profile: "https://github.com/salilwalavalkar",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Dublin",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/salilwalavalkar" },
    { name: "x",        url: "https://x.com/SalilWalavalkar" },
    { name: "linkedin", url: "https://www.linkedin.com/in/salilwalavalkar/" },
    { name: "mail",     url: "mailto:salil.walavalkar@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
