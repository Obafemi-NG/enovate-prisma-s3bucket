import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enovate Studio | Contact",
  description:
    "Get in touch with Enovate — a global web and app development agency helping startups and small businesses bring digital ideas to life.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
