---
title: Plato's Search — Platform Game
date: 2017-07-09 18:31:00
featured_image: /assets/images/posts/Platos_Search/Platos_Search-thumb3.png
style: width:100%;top:0
stack_color: white
---

{% assign slide = site.data.slide %}

{{slide['start']}}

As an exercise in JavaScript and DOM manipulation, I created a platform game featuring Plato and his search for an honest man.

{{slide['end']}}

{{slide['start']}}

<div style='max-width:initial'>

<div class='platos-search__wrapper'>

<img alt='Plato&#8217s Search' class='platos-search__fake-menu' src='/assets/images/posts/Platos_Search/Platos_Search-overlay.jpg' alt='Plato&#8217s Search'>

<div class='platos-search__overlay'>

<button class='platos-search__play-btn' type='button'>Play</button>

</div>

</div>

</div>

{{slide['end']}}

{{slide['start']}}

Some features I hadn't decided to add until after I had built a working game. By keeping functionality separated, the code was easy to build upon.

{{slide['end']}}

{{slide['start']}}

Adding levels is easy:

<pre>
['               ',
 '       k       ',
 '               ',
 '      mmm      ',
 '               ',
 ' @            D',
  'mmmmmm!!!mmmmmm']
</pre>

where m = moss, k = key, D = locked door, and so on.

{{slide['end']}}

{{slide['start']}}

Along his journey, Plato meets others who give him advice. Numbered doors lead to specific levels, so that Plato's Search is an exploratory puzzle based on learning who to trust.

{{slide['end']}}

{{slide['start']}}

If you'd like to contribute, Plato would love some new level maps. <a href='https://github.com/nth-chile/platos-search' target='_blank'>Fork it on GitHub!</a>

{{slide['end']}}
