import { QueryClient, queryOptions, useQuery } from "@tanstack/react-query";
import { getQueryClient } from "../get-query-client";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

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

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${baseUrl}/api/project`);
  if (!response.ok) throw new Error("Currently unable to fetch projects");
  return response.json();
};
