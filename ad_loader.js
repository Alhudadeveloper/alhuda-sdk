(function () {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");
    const format = (urlParams.get("format") || "banner").toLowerCase();
    const sdkUrl = "/sdk/alhuda-mobile-sdk.min.js";

    if (!key) {
      document.body.innerHTML = '<p style="color: red; padding: 1em;">❌ API key missing in URL</p>';
      return;
    }

    const script = document.createElement("script");
    script.src = sdkUrl;
    script.defer = true;
    script.setAttribute("data-key", key);
    script.setAttribute("data-format", format);

    const containers = [];
    if (format === "banner" || format === "both") {
      containers.push("banner-container");
    }
    if (format === "box" || format === "both") {
      containers.push("box-container");
    }
    script.setAttribute("data-container", containers.join(","));

    document.body.appendChild(script);
  } catch (e) {
    console.error("❌ Ad loading failed:", e);
    document.body.innerHTML = '<p style="color: red; padding: 1em;">❌ Failed to load ad. Please try again.</p>';
  }
})();
