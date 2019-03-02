---
title: Sugarstream — Music Streaming App
date: 2017-07-09 16:29:00
featured_image: /assets/images/posts/sugarstream.live/sugarstream_thumb.png
style: height:100%
---
{% assign slide = site.data.slide %}

{{slide['start']}}

<div><img src='{{ site.url }}/assets/images/posts/sugarstream.live/sugarstream_thumb.png'></div>

{{slide['end']}}

{{slide['start']}}

With Sugarstream, listen to thousands of classic concerts from 1940&ndash;present.

{{slide['end']}}

{{slide['start']}}

The content is delivered from <a href='https://archive.org/' target='_blank'>Internet Archive</a> and collected by <a href='http://sugarmegs.org/' target='_blank'>SugarMegs</a>. I scraped the links using <a href='https://pptr.dev/' target='_blank'>Puppeteer</a>, stored them in a MongoDB database, and made a RESTful API using Express.

{{slide['end']}}

{{slide['start']}}

For instance, <code style='word-break: break-all'>http://sugarstream.live/api/david-bowie/2002</code> returns links and metadata for David Bowie concerts from 2002.

<a class='link-button-2' href='http://sugarstream.live/' target='_blank'>Go check it out!</a>

{{slide['end']}}
