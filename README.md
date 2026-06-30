# GitHub Pages deep link host

This folder is a static host for Android App Links and iOS Universal Links.

Use a custom domain, for example:

```text
https://links.example.com
```

Do not rely on a project path such as `https://user.github.io/repo-name`, because Android and iOS verify files from the domain root:

```text
https://links.example.com/.well-known/assetlinks.json
https://links.example.com/.well-known/apple-app-site-association
```

## Files to update

1. Copy `CNAME.example` to `CNAME` and replace `links.example.com` with your real domain.
2. Replace `REPLACE_WITH_RELEASE_CERT_SHA256` in `.well-known/assetlinks.json`.
3. Replace `REPLACE_WITH_APP_STORE_ID` in `404.html`, `index.html`, and `invoice/index.html`.

## Android SHA-256 fingerprint

Use the release signing certificate fingerprint, not the debug certificate.

```sh
keytool -list -v -keystore /path/to/release.keystore -alias your_alias
```

Copy the `SHA256` value into `.well-known/assetlinks.json`.

## GitHub Pages setup

Recommended setup:

1. Commit this `invoice_saas_config` folder.
2. Push it to a dedicated branch or repo used for Pages.
3. In GitHub, open `Settings > Pages`.
4. Set the Pages source to this static site.
5. Configure your DNS to point your custom domain to GitHub Pages.
6. Enable `Enforce HTTPS`.

## Test URLs

After publishing, these URLs must load directly:

```text
https://YOUR_DOMAIN/.well-known/assetlinks.json
https://YOUR_DOMAIN/.well-known/apple-app-site-association
https://YOUR_DOMAIN/invoice/
https://YOUR_DOMAIN/invoice/123
```

`/invoice/123` is handled by `404.html` on GitHub Pages. This is intentional: if the app is installed, the OS opens the app before the browser fallback appears; if the app is not installed, the fallback page redirects to the store.
