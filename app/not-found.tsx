import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>Whoops! we can&rsquo;t find that page...</p>
      <Link href="/">Let&rsquo;s take you home</Link>
    </div>
  );
}
