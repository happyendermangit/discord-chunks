function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("75196");

    function a(e) {
        let {
            width: t = 12,
            height: n = 12,
            color: a = "currentColor",
            foreground: s,
            ...r
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, l.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
                className: s,
                d: "M5.93478 9.5H3.32609C3.2396 9.5 3.15666 9.53592 3.09551 9.59985C3.03436 9.66378 3 9.75049 3 9.84091V15.9773C3 16.0677 3.03436 16.1544 3.09551 16.2183C3.15666 16.2823 3.2396 16.3182 3.32609 16.3182H5.93478C6.02127 16.3182 6.10421 16.2823 6.16536 16.2183C6.22651 16.1544 6.26087 16.0677 6.26087 15.9773V9.84091C6.26087 9.75049 6.22651 9.66378 6.16536 9.59985C6.10421 9.53592 6.02127 9.5 5.93478 9.5ZM18 9.15909C18 8.21955 17.2683 7.45455 16.3696 7.45455H12.2641C12.463 6.82114 12.7826 5.66 12.7826 4.72727C12.7826 3.24841 11.5807 2 10.8261 2C10.1485 2 9.66457 2.39818 9.6437 2.41523C9.60568 2.44738 9.57501 2.488 9.55391 2.53412C9.53281 2.58024 9.52182 2.6307 9.52174 2.68182V3.3061C9.52174 4.41859 9.28971 5.51885 8.84048 6.5366L7.64348 9.24841L7.0937 9.53545C7.03952 9.56394 6.99396 9.60756 6.96207 9.66149C6.93018 9.71541 6.91321 9.77751 6.91304 9.84091V15.9773C6.91304 16.068 6.94761 16.1545 7.00826 16.2186C7.49674 16.7286 8.59239 17 9.19565 17H15.2283C15.4778 16.9996 15.7232 16.9326 15.9412 16.8056C16.1591 16.6785 16.3425 16.4954 16.474 16.2736C16.6056 16.0519 16.6808 15.7987 16.6928 15.5381C16.7048 15.2775 16.653 15.018 16.5424 14.7841C16.8878 14.6027 17.1504 14.2856 17.2727 13.9022C17.3949 13.5188 17.3668 13.1004 17.1946 12.7386C17.4365 12.6117 17.6399 12.4169 17.7821 12.1761C17.9243 11.9354 17.9998 11.658 18 11.375C18 10.9659 17.8441 10.5834 17.5761 10.3011C17.8467 9.99296 18 9.58932 18 9.15909Z",
                fill: a
            })
        })
    }
}