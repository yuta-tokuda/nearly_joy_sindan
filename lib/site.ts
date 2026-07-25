const trimTrailingSlash = (url: string) => url.replace(/\/$/, "");

export const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const SITE_NAME = "≒JOY 推し診断";
export const SITE_ALTERNATE_NAME = "ニアジョイ診断";
export const SITE_DESCRIPTION =
  "質問に答えるだけであなたにぴったりの≒JOYメンバーが分かる非公式診断サイト";
