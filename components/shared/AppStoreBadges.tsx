import Link from "next/link";
import { siteConfig } from "@/lib/config/site.config";

export function AppStoreBadges({ className = "" }: { className?: string }) {
  const downloadUrl = siteConfig.appStores.downloadUrl;

  const badges = [
    { src: "/images/google-play-badge.svg", alt: "Get it on Google Play", label: "Get BaiHub on Google Play" },
    { src: "/images/app-store-badge.svg", alt: "Download on the App Store", label: "Download BaiHub on the App Store" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <Link
          key={badge.alt}
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={badge.label}
          className="inline-flex shrink-0 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={badge.src}
            alt={badge.alt}
            width={168}
            height={50}
            className="h-[46px] w-[142px] rounded-lg object-cover sm:h-[50px] sm:w-[168px]"
          />
        </Link>
      ))}
    </div>
  );
}
