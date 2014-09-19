(function(){

    blanket.customReporter = function(coverageData) {
        top.postMessage(coverageData, 'http://127.0.0.1:9000');
    };

})();
