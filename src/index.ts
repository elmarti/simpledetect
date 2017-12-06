function detect(): IBrowserInfo {
  if (!navigator) {
    return {
      name: Browsers.Unsupported,
      version: null
    } as IBrowserInfo;
  }
  const { userAgent } = navigator;

  // Returned result object.
  const result = {
    name: Browsers.Unsupported,
    version: null
  } as IBrowserInfo;
  const ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: Browsers.Unsupported, version: tem[1] || "" };
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem != null) {
      return { name: Browsers.Opera, version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: Browsers[M[0]],
    version: M[1]
  };
}
