const userAgent = navigator.userAgent;
const screenResolution = `${screen.width}x${screen.height}`;
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function getCanvasFingerprint() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("Hello, world!", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("Hello, world!", 4, 17);

    return canvas.toDataURL();
}

function getWebGLFingerprint() {
    const canvas = document.createElement("canvas");
    const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

function generateFingerprint() {
    const components = [
        userAgent,
        screenResolution,
        timeZone,
        getCanvasFingerprint(),
        getWebGLFingerprint()
    ];

    return components.join("|");
}

function getWebGLRenderer() {
    try {
        const canvas = document.createElement("canvas");
        const gl =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
        if (!gl) {
            return "WebGL Not Supported";
        }
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        return debugInfo
            ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
            : "Generic WebGL Renderer";
    } catch (e) {
        return "WebGL Access Error";
    }
}

async function hashFingerprint() {
    const fingerprint = generateFingerprint();
    const encoder = new TextEncoder();
    const data = encoder.encode(fingerprint);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;
}
