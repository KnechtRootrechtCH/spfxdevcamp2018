import { ISocialService } from "./ISocialService";
import { SPHttpClient, ISPHttpClientOptions } from "@microsoft/sp-http";
import { WebPartContext, IWebPartContext } from "@microsoft/sp-webpart-base";
import { Constants } from "../../common/Constants";

export class SpSocialService implements ISocialService {
  private _context: IWebPartContext;

  constructor(context: WebPartContext) {
    this._context = context;
  }

  public async isfollowSite(siteUrl: string): Promise<boolean> {

    let url =
      this._context.pageContext.web.absoluteUrl + `${Constants.isfollowedSiteUri}'${siteUrl}'`;

      let httpClientOptions : ISPHttpClientOptions = {};

      httpClientOptions.headers = {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': '3.0'
      };

      let response = await this._context.spHttpClient.post(url, SPHttpClient.configurations.v1, httpClientOptions);

    if (!response.ok) {
      return null;
    }

    let data = await response.json();

    return data.value;
  }

  public async unfollowSite(siteUrl: string): Promise<boolean> {
    let url =
      this._context.pageContext.web.absoluteUrl +
      "/_vti_bin/homeapi.ashx/sites/followed/remove";
    let httpClientOptions: ISPHttpClientOptions = {};

    httpClientOptions.headers = {
      Accept: "application/json;odata=nometadata",
      "odata-version": "3.0"
    };

    httpClientOptions.body = JSON.stringify(siteUrl);

    let response = await this._context.spHttpClient.post(
      url,
      SPHttpClient.configurations.v1,
      httpClientOptions
    );

    if (!response.ok) {
      return false;
    }

    return true;
  }

  public async followSite(siteUrl: string): Promise<boolean> {
    let url =
      this._context.pageContext.web.absoluteUrl +
      "/_vti_bin/homeapi.ashx/sites/followed/add";
    let httpClientOptions: ISPHttpClientOptions = {};

    httpClientOptions.headers = {
      Accept: "application/json;odata=nometadata",
      "odata-version": "3.0"
    };

    httpClientOptions.body = JSON.stringify(siteUrl);

    let response = await this._context.spHttpClient.post(
      url,
      SPHttpClient.configurations.v1,
      httpClientOptions
    );

    if (!response.ok) {
      return false;
    }

    return true;
  }
}
