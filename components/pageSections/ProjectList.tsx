"use client";

import { fetchProjects } from "@/lib/tanstackQuery/queries/projectsQuery";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Folder from "../Folder";

const ProjectList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  if (isLoading) return <p> Projects is loading... </p>;
  if (error) return <p> Error loading projects... </p>;
  return (
    <section className=" mx-auto grid w-fit gap-x-24 gap-y-28 grid-cols-[1fr_1fr] mt-21  place-content-center ">
      {data?.map((project) => {
        return (
          <Folder
            key={project.id}
            id={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            link={project.link}
            detail={project.detail}
            tag={project.tag}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
