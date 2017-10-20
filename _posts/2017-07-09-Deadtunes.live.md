---
title: Deadtunes — Music Streaming App
date: 2017-07-09 16:29:00
featured_image: /assets/images/posts/Deadtunes.live/deadtunes_thumb.jpg
style: width:100%
---
{% assign slide = site.data.slide %}

{{slide['startmobile']}}

<div><img class='full-height' src='{{ site.url }}/assets/images/posts/Deadtunes.live/deadtunes_mobile.jpg'></div>

<p class='bg'>I built a web app that streams the <a href='https://archive.org/' target='_blank'>Internet Archive's</a> live Grateful Dead archive.</p>

{{slide['end']}}

{{slide['startdesktop']}}

<div><img src='{{ site.url }}/assets/images/posts/Deadtunes.live/deadtunes_thumb.jpg'></div>

{{slide['end']}}

{{slide['start']}}

Deadtunes is a single-page application that implements an MVC pattern written in JavaScript/jQuery.

{{slide['end']}}

{{slide['start']}}

I took an unnecessary step that allowed me to learn how to build a MongoDB database and query it from server-side JavaScript. I wrote a script that iterates through the items in the Archive database, extracting the relevant data and inserting it into a MongoDB database.

{{slide['end']}}

{{slide['start']}}

Then, I used Express JS to build a RESTful API so that, for instance, `http://deadtunes.live/api/1975-08-13` returns a JSON response including relevant data about the recordings of each song the Grateful Dead played on August 13, 1975.

{{slide['end']}}

{{slide['start']}}

When the user selects a year, date or track, the client-side code looks at the URL hash and uses it to query the API and update the DOM. Voila, a SPA.

{{slide['end']}}

{{slide['start']}}

<a class='link-button-2' href='http://deadtunes.live/' target='_blank'>Go check it out!</a>

{{slide['end']}}