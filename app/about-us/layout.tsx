import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enovate Studio | About",
  description:
    "Enovate specializes in website design, web app development, and mobile app solutions for startups, small businesses, and entrepreneurs across the globe.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
