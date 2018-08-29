
export interface ISocialService {
  unfollowSite: (siteUrl: string) => Promise<boolean>;
  followSite: (siteUrl: string) => Promise<boolean>;
  isfollowSite: (siteUrl: string) => Promise<boolean>;
}
