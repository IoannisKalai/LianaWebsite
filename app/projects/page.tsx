import type { Metadata } from "next";
import { ProjectsLanding } from "@/components/ProjectsLanding";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <ProjectsLanding />;
}
