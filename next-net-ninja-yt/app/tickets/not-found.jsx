import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3x1">There was a problem</h2>
        <p>We could not find the details you were looking for</p>
        <p>Go back to: <Link href="/">Tickets</Link></p>
    </main>
  );
}