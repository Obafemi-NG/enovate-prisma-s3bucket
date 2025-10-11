import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enovate Studio | About",
  description: "This is the about section of enovate studio",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
