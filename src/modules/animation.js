/**
 * 缓动动画
 * 使用：animate(box, { left: 200, top: 400 }, function () {
                animate(box, { opacity: 20 }, function () {
                    animate(document.documentElement||document.body, { scrollTop: 200 })
                })
            })
 */
var animate = (function () {
    var getStyleAttr = function (obj, attr) {
        if (obj.currentStyle) {//ie,opera
            return obj.currentStyle[attr]
        } else {
            return window.getComputedStyle(obj, null)[attr]
        }
    }
    function move(el, json, callback) {
        clearInterval(el.timer)
        el.timer = setInterval(function () {
            var flag = false
            var key = ''
            for (key in json) {
                if (json.hasOwnProperty(key)) {
                    var target = Math.round(json[key]);
                    var current = 0, speed = 0;
                    if (key === 'opacity') {//透明
                        if (target > 100 || target < 0) {
                            flag = true
                        }
                        current = Math.round(parseFloat(getStyleAttr(el, key)) * 100)
                    } else if ('scrollTop' === key) { // 滚动
                        current = Math.ceil(Number(el.scrollTop));
                    } else {
                        current = parseInt(getStyleAttr(el, key))
                    }
                    speed = (target - current) / 20;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
                    if (current === target) {
                        flag = true
                    }
                    if (key === 'opacity') {
                        el.style.filter = "alpha(opacity=" + current + speed + ")"
                        el.style[key] = (current + speed) / 100
                    } else if ('scrollTop' === key) {
                        el.scrollTop = current + speed;
                    } else {
                        el.style[key] = current + speed + 'px'
                    }
                }
            }
            if (flag) {
                clearInterval(el.timer)
                callback && callback()
            }
        }, 1000/60)
    }
    return move
})();

export default animate;