"use client";
import React, { useState, useEffect } from "react";

export default function SubscribeShare() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareOnLinkedIn = () => {
    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    window.open(shareUrl.toString(), "_blank", "width=600,height=600");
  };

  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
          text: "Discover key insights on how B2B marketers should approach AI without falling for the hype.",
          url: currentUrl,
        });
      } else {
        shareOnLinkedIn();
      }
    } catch (error) {
      alert("Error sharing: " + error);
    }
  };

  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");
    setLoading(true);
    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full mt-8">
      <h3 className="text-3xl font-semibold text-gray-900 mb-4">
        Subscribe
      </h3>
      <p className="text-gray-600 text-base mb-6">
        Subscribe to the very latest B2B lead gen updates — only the best bits, none of the fluff!
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100"
        >
          {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
        </button>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Share this article:</p>
          <div className="flex flex-col space-y-3">
            <button
              onClick={shareOnLinkedIn}
              className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#0A66C2] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#004182]"
            >
              Share on LinkedIn
            </button>
            <button
              onClick={shareContent}
              className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#ff8633] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#e67a2e]"
            >
              Share Article
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(currentUrl);
                alert("Link copied to clipboard!");
              }}
              className="cursor-pointer flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-gray-300"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}