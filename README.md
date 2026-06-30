# GitHub Pages deep link host

This folder is a static host for Android App Links and iOS Universal Links.

Current domain:

```text
https://astrid1919.github.io
```

This repository must be published as the user/organization Pages site, not a
project path such as `https://user.github.io/repo-name`, because Android and
iOS verify files from the domain root:

```text
https://astrid1919.github.io/.well-known/assetlinks.json
https://astrid1919.github.io/.well-known/apple-app-site-association
```

## Files to update

1. Keep `.nojekyll` committed so GitHub Pages serves `.well-known`.
2. Keep `.well-known/assetlinks.json` in sync with the Android app package and signing certificate.
3. Keep `.well-known/apple-app-site-association` in sync with the iOS Team ID and bundle ID.
4. Keep the App Store and Play Store fallback links in `404.html`, `index.html`, and `invoice/index.html`.

## Android SHA-256 fingerprint

Use the release signing certificate fingerprint, not the debug certificate.

```sh
keytool -list -v -keystore /path/to/release.keystore -alias your_alias
```

Copy the `SHA256` value into `.well-known/assetlinks.json`.

## GitHub Pages setup

Recommended setup:

1. Commit this folder to `astrid1919/astrid1919.github.io`.
2. In GitHub, open `Settings > Pages`.
3. Set the Pages source to the branch containing this static site.
4. Enable `Enforce HTTPS`.

## Test URLs

After publishing, these URLs must load directly:

```text
https://astrid1919.github.io/.well-known/assetlinks.json
https://astrid1919.github.io/.well-known/apple-app-site-association
https://astrid1919.github.io/invoice/
https://astrid1919.github.io/invoice/123
```

`/invoice/123` is handled by `404.html` on GitHub Pages. This is intentional: if the app is installed, the OS opens the app before the browser fallback appears; if the app is not installed, the fallback page redirects to the store.
