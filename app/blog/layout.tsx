import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enovate Blog | Web Design, Development & Digital Innovation Insights",
  description:
    "A creative space by Enovate’s team — exploring web design, development, and the curious side of tech innovation.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
