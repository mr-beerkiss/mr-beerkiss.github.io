var portfolio = window.portfolio || (function(window, document, undefined) {
    var iFrameOverlay;
    var iFrameContainer;
    var iFrameLoader;

    var currentiFrame;

    function openiFrame(url, width, height) {
        if ( !iFrameContainer || !iFrameOverlay ) {
            iFrameOverlay = document.querySelector(".beerkiss-iframe-overlay");
            iFrameContainer = document.querySelector(".beerkiss-iframe-container");
            iFrameLoader = document.querySelector(".beerkiss-iframe-loading");
        }

        iFrameOverlay.classList.remove("hidden");
        

        if ( !url ) {
            return;
        }

        width = width || 720;
        height = height || 720;

        var iFrame = document.createElement("iframe");

        iFrame.src = url;
        iFrame.width = width;
        iFrame.height = height;
        iFrame.className = "beerkiss-iframe";
      
        iFrame.onload = function() {
            iFrameLoader.classList.add("hidden");
        };


        currentiFrame = iFrame;

        iFrameContainer.appendChild(currentiFrame);
    }

    function destroyiFrame() {
        
        iFrameContainer.removeChild(currentiFrame);

        currentiFrame = undefined;

        iFrameOverlay.classList.add("hidden");
        iFrameLoader.classList.remove("hidden");

    }

    return {
        openiFrame: openiFrame,
        destroyiFrame: destroyiFrame
    };
})(window, document);

