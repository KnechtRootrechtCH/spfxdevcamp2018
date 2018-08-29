# SPFx-Dev-Camp-2018

Base Solution for creating a SPFx WebPart with full sample.

- Data Interface
- Mock Provider
- SPListProvider
- Shared React Component
- SPFx React WebPart

## Framework Version

- SPFx 1.5.1
- [package.json](https://stash.garaio.com/projects/SPFX/repos/spfxdevcamp2018/browse/package.json)

## Code guidlines

- [Typescriptlang - Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/blob/master/react/README.md)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Office fabric react - Coding Guidelines](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Coding-Style)
- [Office fabric react - React-Guideline](https://github.com/OfficeDev/office-ui-fabric-react/wiki/React-Guidelines)
- [Office fabric react - TypeScript-Guidelines](https://github.com/OfficeDev/office-ui-fabric-react/wiki/TypeScript-Guidelines)

## Folder structure

Webparts

```bs
/src/webparts
```

Helper Classes

```bs
/src/common
```

Shared Components

```bs
/src/shared/components
```

Shared Services Provider (ListMockService, SpListService, SpSearchService usw.)

```bs
/src/shared/services
```

## Building the code

```bash
git clone ssh://git@git-ssh.garaio.com:7999/spfx/spfxdevcamp2018.git
pnpm i
gulp build
```

## Development - local workbench

```bs
gulp serve
```

```html
https://localhost:4321/temp/workbench.html
```

## Development - online workbench

```bs
gulp serve --nobrowser
```

```html
/_layouts/15/workbench.aspx
```

## Prepare Deployment Solution

```bs
gulp clean
gulp build
gulp --ship
gulp package-solution --ship
```

## Manuel Upload Solution Deployment

- Upload the solution file "sp-fx-dev-camp-2018.sppkg" from "/sharepoint/solution" to the App Catalog.
- Go to either a modern Communication or Team Site.
- Go to "Site contents" and add new "App"
- Select "packagename" and wait for it to be installed
- Go to the front page, edit the page and add the webpart
