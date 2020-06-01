---
title: Sugarstream — Music Streaming App
date: 2017-07-09 16:29:00
featured_image: /assets/images/posts/Sugarstream.live/sugarstream-thumb-3.png
style: height:100%
---
{% assign slide = site.data.slide %}

{{slide['start']}}

<!-- <img src='{{ site.url }}/assets/images/posts/Sugarstream.live/sugarmegs.gif' style='width: 100%'> -->

As soon as a friend told me about <a href='http://sugarmegs.org' target='_blank'>http://sugarmegs.org</a>, which since the '90s has been gathering a vast collection of classic concerts and hosting them on the <a href='https://archive.org/' target='_blank'>Internet Archive</a>, I knew what I needed to do.

<figure>
<div><img src='{{ site.url }}/assets/images/posts/Sugarstream.live/sugarmegs.gif'></div>
<figcaption>SugarMegs Audio, a Holy Grail of bootlegged concerts</figcaption>
</figure>

{{slide['end']}}

{{slide['start']}}

To make the archive streamable, I recycled an old project, <a href='http://www.deadtunes.live/' target='_blank'>Deadtunes.live</a>, which streams the <a href='https://archive.org/' target='_blank'>Internet Archive</a>'s Grateful Dead collection.

<figure>
<div><img src='{{ site.url }}/assets/images/posts/Sugarstream.live/deadtunes_screenshot.png'></div>
<figcaption>deadtunes.live</figcaption>
</figure>
{{slide['end']}}

{{slide['start']}}

<div><img src='{{ site.url }}/assets/images/posts/Sugarstream.live/sugarstream_thumb.png'></div>

I scraped the links using <a href='https://pptr.dev/' target='_blank'>Puppeteer</a>, stored them in a MongoDB database, and made a RESTful API using Express.

<a href='http://sugarstream.live/' target='_blank'>Go check it out!</a>

{{slide['end']}}
