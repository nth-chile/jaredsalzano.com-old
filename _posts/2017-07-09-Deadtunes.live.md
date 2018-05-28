---
title: Deadtunes — Music Streaming App
date: 2017-07-09 16:29:00
featured_image: /assets/images/posts/Deadtunes.live/deadtunes_thumb.jpg
style: width:100%
---
{% assign slide = site.data.slide %}

{{slide['startmobile']}}

<div><img class='full-height' src='{{ site.url }}/assets/images/posts/Deadtunes.live/deadtunes_mobile.jpg'></div>

<p class='bg'>I built a web app that streams the <a href='https://archive.org/' target='_blank'>Internet Archive's</a> live Grateful Dead collection.</p>

{{slide['end']}}

{{slide['startdesktop']}}

<p>I built a web app that streams the <a href='https://archive.org/' target='_blank'>Internet Archive's</a> live Grateful Dead collection.</p>

<div><img src='{{ site.url }}/assets/images/posts/Deadtunes.live/deadtunes_thumb.jpg'></div>

{{slide['end']}}

{{slide['start']}}

I wrote a script that iterates through the items in the Archive database, extracts the relevant data and inserts it into a MongoDB database. Then, I used Express JS to build a RESTful API.

{{slide['end']}}

{{slide['start']}}

 For instance, <code style='word-break: break-all'>http://deadtunes.live/api/1975-08-13</code> returns a JSON response including relevant data about the recordings of each song the Grateful Dead played on August 13, 1975.

{{slide['end']}}

{{slide['start']}}

More features and archive additions (Bob Dylan and Bob Marley) coming soon!

<a class='link-button-2' href='http://deadtunes.live/' target='_blank'>Go check it out!</a>

{{slide['end']}}
