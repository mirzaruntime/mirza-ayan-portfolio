const configuredSiteUrl = process.env.SITE_URL;

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl)
  : undefined;
