export const isDevMode = process.env.NODE_ENV === "development";
export const siteUrl = isDevMode ? "http://localhost:3000" : "https://inqling.studio";
