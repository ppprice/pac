var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)chrome\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)sex8\.cc$/.test(host)) return "+vpn";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)jiaoxingqi\.cn$/.test(host)) return "+vpn";
        if (/(?:^|\.)amazon-adsystem\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)pub\.network$/.test(host)) return "+vpn";
        if (/(?:^|\.)google\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)adsfactor\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)2mdn\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)googlesyndication\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)aspnetcdn\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)addthis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)xuehuaimg\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)xuehua\.us$/.test(host)) return "+vpn";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)google\.co\.jp$/.test(host)) return "+vpn";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+vpn";
        if (/(?:^|\.)ltn\.com\.tw$/.test(host)) return "+vpn";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)youtu\.be$/.test(host)) return "+vpn";
        if (/(?:^|\.)t\.co$/.test(host)) return "+vpn";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)crazyegg\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)google\.com\.hk$/.test(host)) return "+vpn";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+vpn";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+vpn";
        if (false) return "DIRECT";
        return "DIRECT";
    },
    "+vpn": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 172.16.3.57:8090; SOCKS 172.16.3.57:8090";
    }
});
