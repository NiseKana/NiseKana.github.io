<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css">const MODE_NORMAL = 1, MODE_ENDLESS = 2, MODE_PRACTICE = 3;

(function(w) {
    function getJsonI18N() {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language
        
        const LANGUAGES = [
            { regex: /^zh\b/, lang: 'zh' },
            { regex: /^ja\b/, lang: 'ja' },
            { regex: /.*/, lang: 'en'}
        ]

        const lang = LANGUAGES.find(l => l.regex.test(navigator.language)).lang
        
        return $.ajax({
            url: `./static/i18n/${lang}.json`,
            dataType: 'json',
            method: 'GET',
            async: false,
            success: data => res = data,
            error: () => alert('找不到语言文件: ' + lang)
        }).responseJSON
    }

    const I18N = getJsonI18N()

    $('[data-i18n]').each(function() {
        const content = I18N[this.dataset.i18n];
        $(this).text(content);
    });

    $('[data-placeholder-i18n]').each(function() {
        $(this).attr('placeholder', I18N[this.dataset.placeholderI18n]);
    });

    $('html').attr('lang', I18N['lang']);

    let isDesktop = !navigator['userAgent'].match(/(ipad|iphone|ipod|android|windows phone)/i);
    let fontunit = isDesktop ? 20 : ((window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) / 320) * 10;
    document.write('<style type="text/css">' +
        'html,body {font-size:' + (fontunit < 30 ? fontunit : '30') + 'px;}' +
        (isDesktop ? '#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position: absolute;}' :
            '#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position:fixed;}@media screen and (orientation:landscape) 