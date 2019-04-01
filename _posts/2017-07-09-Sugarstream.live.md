---
title: Sugarstream — Music Streaming App
date: 2017-07-09 16:29:00
featured_image: /assets/images/posts/sugarstream.live/sugarstream-thumb-2.png
style: height:120%
---
{% assign slide = site.data.slide %}

{{slide['start']}}

<img src='{{ site.url }}/assets/images/posts/Sugarstream.live/sugarmegs.gif' style='width: 100%'>

As soon as a friend told me about <a href='http://sugarmegs.org' target='_blank'>http://sugarmegs.org</a>, which since the '90s has been gathering a vast collection of classic (and not-so-classic) concerts and hosting them on the <a href='https://archive.org/' target='_blank'>Internet Archive</a>, I knew what I needed to do.

{{slide['end']}}

{{slide['start']}}

<div><img src='{{ site.url }}/assets/images/posts/Sugarstream.live/deadtunes_screenshot.png' style='max-width:480px'></div>

To make the archive streamable, I recycled an old project, <a href='http://www.deadtunes.live/' target='_blank'>Deadtunes.live</a>, which streams the <a href='https://archive.org/' target='_blank'>Internet Archive</a>'s Grateful Dead collection.

{{slide['end']}}

{{slide['start']}}

<div><img src='{{ site.url }}/assets/images/posts/sugarstream.live/sugarstream_thumb.png'></div>

I scraped the links using <a href='https://pptr.dev/' target='_blank'>Puppeteer</a>, stored them in a MongoDB database, and made a RESTful API using Express.

{{slide['end']}}

{{slide['start']}}

The API is public. For instance, <code style='word-break: break-all'>http://sugarstream.live/api/david-bowie/2002</code> returns links and metadata for David Bowie concerts from 2002.

<a class='link-button-2' href='http://sugarstream.live/' target='_blank'>Go check it out!</a>

{{slide['end']}}
