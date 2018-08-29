import { ISocialService } from "./ISocialService";

export class SocialMockService implements ISocialService {

  public async isfollowSite(siteUrl: string): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });

    return promise;
  }

  public async followSite(siteUrl: string): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });

    return promise;
  }

  public async unfollowSite(siteUrl: string): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });

    return promise;
  }
}
