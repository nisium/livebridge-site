/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "LiveBridge";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "One private timeline of chat, events and gifts for TikTok LIVE and YouTube Live, as docks inside OBS Studio.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://nisium.github.io";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];

/** Where the Windows installer is downloaded from. */
export const DOWNLOAD_URL =
  "https://github.com/nisium/livebridge-site/releases/latest";

/** Where early access is requested. Replace with the invite link of the Discord server. */
export const DISCORD_URL = "https://discord.gg/spDSfzBEfP";
