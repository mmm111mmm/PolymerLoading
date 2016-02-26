Stupid web components loading thing
===================================

[Edit] I probably wouldn't use this now. But it'll leave it here, just minding its own business, doing no harm -- peaceful.

Displays a pulsating loading text, and then fades that out when web components have loaded.

Useful for people using shitty connections waiting for webcompontentjs and polymer to load.

Use with async on the rest of the scripts you're loading, i.e:

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <script src="polymerloading.js"></script>
        <base href="http://polygit.org/components/">
        <script src="webcomponentsjs/webcomponents-lite.js" async></script>
        <link href="polymer/polymer.html" rel="import" async>
    </head>
