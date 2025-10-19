import { queryOptions } from "@tanstack/react-query";

let baseUrl;

process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
  ? (baseUrl = process.env.BASE_URL)
  : (baseUrl = "http://localhost:3000");

// const baseUrl = process.env.BASE_URL || "http://localhost:3000";

interface ProjectTag {
  tag: string;
}

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  detail: string;
  link: string;
  tag: ProjectTag[];
}

export const projectsQuery = queryOptions({
  queryKey: ["projects"],
  queryFn: async (): Promise<Project[]> => {
    const response = await fetch(`${baseUrl}/api/project`);
    if (!response.ok) throw new Error("Unable to fetch projects");
    return response.json();
  },
});
