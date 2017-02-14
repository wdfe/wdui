(function () {
    //配置和加载piwik，piwik api地址 //developer.piwik.org/api-reference/tracking-javascript
    var piwikConfig = {
        initialize: function() {
            this.configPiwik();//配置piwik
            this.loadPiwik();//并加载piwik
        },
        loadPiwik: function() {
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.type='text/javascript';
            g.defer=true;
            g.async=true;
            g.src= document.location.protocol === 'https:' ? 'https://analysis.koudai.com/piwik-spm.js' : 'http://static.koudai.com/analysis/piwik-spm.js';
            s.parentNode.insertBefore(g,s);
        },
        configPiwik: function() {
            window._paq = [];
            _paq.push(['setTrackerUrl', this._getServerUrl()]);
            _paq.push(['setCookieDomain', this._getCookieDomain()]);
            _paq.push(['setCustomVariable',1,"appname","vdian.com","visit"]); // Set a custom variable.,存储在_cvar
            _paq.push(['trackPageView']); // Logs a visit to this page
            _paq.push(['enableLinkTracking']); //Install link tracking on all applicable link elements
            _paq.push(['setSiteId', 1]); // Specify the website ID. Redundant: can be specified in getTracker() constructor.
        },
        _getCookie: function(name){
            var cookie_start = document.cookie.indexOf(name+"="),cookie_end = document.cookie.indexOf(";",cookie_start);
            var cookieValue = cookie_start == -1 ? "" : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
            return encodeURIComponent(cookieValue);
        },
        //获取piwik.js日志上报服务地址
        _getServerUrl: function() {
            var userID = this._getCookie("WD_b_id") || "-1";
            var sellerID = this._getCookie("WD_s_id") || this._getCookie("WD_client_userid_raw") || "-1";

            return [
                document.location.protocol + '//analysis.koudai.com/index.php?', //piwik统计的服务地址
                'userid=' + userID, //微店买家id, 没有则-1
                '&sellerid=' + sellerID //微店卖家id，没有则-1
            ].join('');
        },
        //返回主域名，以便统一piwik 在主域和子域的cookie. 注意：不包含xx.com.cn这种域名后缀有.的顶级域名
        _getCookieDomain: function() {
            return location.hostname.split('.').slice(-2).join('.'); //.com.cn这种
        }
    };
    piwikConfig.initialize();

    //统一封装全局piwik函数
    window.piwik = {
        //事件统计，des="事件描述" 或者 des="事件描述1;事件描述2"
        paq: function(des) {
            console.log(9999)
            var description = des.split(";")[0];
            var cate = des.split(";")[1] || "";
            _paq.push(['trackEvent', description, 'click', cate]);
        },
        //非正常统计，前端团队自己的上报日志方法
        report: function(errorContent) {
            this.paq('wdfe_' + errorContent);
        }
    };
})();
