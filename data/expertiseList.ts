import brandDesignGif from "../public/gifs/brand-design-gif.gif";
import webDevGif from "../public/gifs/web-dev-gif.gif";
import mobileDevGif from "../public/gifs/mobile-dev-gif.gif";
import ux from "../public/gifs/UX.gif";

export const expertiseList = [
  {
    id: "1",
    icon: "/icons/brand_identity_icon.svg",
    title: "Brand Identity Design",
    descprition: `
        We provide a wide spectrum of media design such as creation of logotype, color palette, typography, social media materials, presentations, business cards, and stationery, and all that we can pack into the brand guidelines.`,
    gif: brandDesignGif,
  },
  {
    id: "2",
    icon: "/icons/product_design_icon.svg",
    pushDown: true,
    title: "Product Design",
    descprition:
      "We guarantee the delivery of an innovative creative concept that sets a standard for UX. In order to enable seamless and exciting surfing experiences across all platforms, we integrate clean, responsive aesthetics.",
    gif: ux,
  },
  {
    id: "3",
    icon: "/icons/web_dev_icon.svg",
    title: "Web Application Development",
    descprition:
      "We have an amazing team with a depth of knowledge and experience in developing and managing complex web applications and transactional platforms.",
    gif: webDevGif,
  },
  {
    id: "4",
    icon: "/icons/mobile_dev_icon.svg",
    title: "Mobile Application Development",
    descprition:
      "We take your app idea, validate it, build it, test it, get reviews, iterate and launch your app successfully. We’d also provide a first-rate support all the way, be it IOS or Android app.",
    gif: mobileDevGif,
  },
];
