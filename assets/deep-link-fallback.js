(function () {
  var config = window.APP_LINK_CONFIG || {};
  var ua = window.navigator.userAgent || "";
  var androidStoreUrl = config.androidStoreUrl;
  var iosStoreUrl = config.iosStoreUrl;
  var fallbackUrl = config.fallbackUrl || "/";

  function redirect(url) {
    if (!url) {
      window.location.replace(fallbackUrl);
      return;
    }

    window.location.replace(url);
  }

  window.setTimeout(function () {
    if (/android/i.test(ua)) {
      redirect(androidStoreUrl);
      return;
    }

    if (/iphone|ipad|ipod/i.test(ua)) {
      redirect(iosStoreUrl);
      return;
    }

    redirect(fallbackUrl);
  }, 600);
})();
