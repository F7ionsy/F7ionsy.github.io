// build time:Sun Nov 03 2019 14:16:19 GMT+0800 (GMT+08:00)
"use strict";(function(){var o="-180503";var t="asset"+o;var s=100;self.importScripts("https://cdn.jsdelivr.net/npm/sw-toolbox@3.6.0/sw-toolbox.js");self.toolbox.options.debug=false;self.toolbox.options.networkTimeoutSeconds=1;self.toolbox.router.get("/(.*)",self.toolbox.cacheFirst,{cache:{name:t,maxEntries:s}})})();
//rebuild by neat 