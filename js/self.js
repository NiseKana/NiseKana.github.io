/**显示  天 小时 分 秒版本**/
! function () {
    function update() {
        var now = new Date();
        var grt = new Date("2023-01-30 22:45:00"); /** 此处是计时的起始时间 **/
        now.setTime(now.getTime() + 250);
        days = (now - grt) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length === 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length === 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length === 1) {
            snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "小破站已经度过了&nbsp" + dnum + "&nbsp天";
        document.getElementById("times").innerHTML = hnum + "&nbsp时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
    setInterval(update, 1000);
}();
/*显示 年 天 小时 分 秒版本
! function () {
    function update() {
        var now = new Date();
        var grt = new Date("2020-04-03 00:00:00"); //此处是计时的起始时间
        var nowFullyear = now.getFullYear();    //获取当前年份
        ! function Nayear () {
            if ((nowFullyear % 4 == 0 && nowFullyear % 100 != 0  ) || (nowFullyear % 400 == 0)) {  //判断闰年平年取准确的一年所含天数
                return yearDate = 366;
            }
            return yearDate = 365;
        }();
        now.setTime(now.getTime() + 250); //获取距离1970年1月1日0点0分到当前时间的总毫秒数
        tolsecond = (now - grt) / 1000;
        days = tolsecond / 60 / 60 / 24;
        idnum = Math.floor(days);
        year = (idnum / yearDate);
        ynum = Math.floor(year);
        dnum = idnum - (yearDate * ynum);
        hours = tolsecond / 60 / 60 - (24 * ynum * yearDate) - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length === 1) {
            hnum = "0" + hnum;
        }
        minutes = tolsecond / 60 - (24 * 60 * ynum * yearDate) - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length === 1) {
            mnum = "0" + mnum;
        }
        seconds = tolsecond - (24 * 60 * 60 * ynum * yearDate) - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length === 1) {
            snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "本站安全运行&nbsp" + ynum + "&nbsp年" + dnum + "&nbsp天";
        document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
    setInterval(update, 1000);
}();
*/
