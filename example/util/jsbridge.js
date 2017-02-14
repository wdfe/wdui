import cookie from './js.cookie.js'

function doOldJSBridgeMethod(param) {
        var param = {
            title: param.title,
            content: param.content,
            url: param.img,
            cmd: param.url,
            type: 326,
            src: '',
            content_ext: ''
        }
        var initAndInvoke = function () {
            initOldBridge(window.KDJSBridge);
            invokeShare(param);
        }
        if (window.KDJSBridge) {
            initAndInvoke();
        } else {
            document.addEventListener("KDJSBridgeReady", function () {
                initAndInvoke();
            })
            window.onload = function () {
                if (window.KDJSBridge) {
                    initAndInvoke();
                }
                else {
                    var iIntervalId = null;
                    var loopCount=0;
                    function loopCheck() {
                        //console.log(loopCount);
                        if (window.KDJSBridge) {
                            //alert(loopCount+' window kdjsbridge');
                            initAndInvoke();
                            clearInterval(iIntervalId);
                        }
                        loopCount++
                        if(loopCount>20){
                            clearInterval(iIntervalId);
                        }
                    }

                    iIntervalId = setInterval(loopCheck, 500);
    //                setTimeout(function(){
    //                    if(window.KDJSBridge) {
    //                        alert('timeout init')
    //                        init(window.KDJSBridge);
    //                        invokeShare(param)
    //                    }
    //                },10000);
                }
            }
        }

    }
  function initOldBridge(bridge) {
      bridge.init("kdweidian", document, location);
      window.bridge = bridge;
  }
  function invokeShare(param) {
      bridge.invoke(param, function (data1) {

          }
      );
  }
  function init(param){
      if(cookie.get('apiv') >= 760 && cookie.get('appid') == 'com.koudai.weishop'){
          //  KDJSBridge2.call('WDJSBridge', "share", {
          //     "title"    : param.title,
          //     "content"  : param.content,
          //     "url"      : param.img,
          //     "cmd"      : param.url,
          //     "src"      : '',
          //     "action_immediately": "0"
          // }, function(data){
          //     var code = data.bridgeParam && Number(data.bridgeParam.status.status_code);
          //     if (code === -5) {
          //         doOldJSBridgeMethod(param);
          //     }else if(code === 0) {
          //         callback(data.param);
          //     }
          // });
        }else{
             doOldJSBridgeMethod(param);
        }
  }
  export default {
    init: init
  }
