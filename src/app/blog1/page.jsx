export const metadata = {
  title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
  description: "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.",
  openGraph: {
    title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
    description: "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.",
    url: "https://bug-next.vercel.app/blog1",
    type: "article",
    images: [
      {
        url: "https://bug-next.vercel.app/images/blog1.jpg",
        width: 1200,
        height: 630,
        alt: "The AI Illusion Blog Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
    description: "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.",
    images: ["https://bug-next.vercel.app/images/blog1.jpg"],
  },
};

import SubscribeShare from './SubscribeShare';

export default function Blog1Page() {
  return (
    <>
      {/* ...your static blog content here (no hooks)... */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/blog1.jpg')" }}
        ></div>
        <div className="relative h-full flex flex-col justify-center items-start p-6 md:p-10 lg:p-16 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2">
            The AI Illusion: B2B Marketers Need
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Better Questions, Not More Hype
          </h2>
          <p className="text-sm md:text-base opacity-90">
            May 2, 2025 8:00:00 AM
          </p>
        </div>
      </div>
      {/* ...rest of your static blog content... */}
      <SubscribeShare />
    </>
  );
}