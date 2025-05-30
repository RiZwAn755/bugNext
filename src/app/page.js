"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Blog!</h1>
        <Link href="/frontpage" className="text-blue-600 underline text-lg">
          Go to Blog Frontpage
        </Link>
      </div>
    </>
  );
}
