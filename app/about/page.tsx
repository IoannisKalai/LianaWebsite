import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
