const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/team-member"
    : "/api/team-member";

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  bio: string | null;
}

export async function fetchTeam(): Promise<TeamMember[]> {
  const response = await fetch(fetchUrl);
  if (!response) {
    throw new Error("Unable to fetch team members.");
  }
  return response.json();
}
