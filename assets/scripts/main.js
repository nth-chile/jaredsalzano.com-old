$(document).ready(function () {
  //** GLOBALS **//
  var rowsSet = false;
  //each time slick is re-initialized, $('.slide.slick-active').attr('aria-describedby').slice(-2) increases by ten -_-
  var slickFix = -10;

  //** DO STUFF **//
  setTileZIndex();
  displayRandomQuote();

  //resize throttler
  (function () {
    window.addEventListener("resize", resizeThrottler, false);
    var resizeTimeout;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      var layoutShouldChange = false;
      if (
        window.matchMedia("(max-width: 479.9px)").matches &&
        layout != "mini"
      ) {
        layout = "mini";
        layoutShouldChange = true;
      } else if (
        window.matchMedia("(min-width: 480px) and (max-width: 599.9px)")
          .matches &&
        layout != "medium--1"
      ) {
        layout = "medium--1";
        layoutShouldChange = true;
      } else if (
        window.matchMedia("(min-width: 600px) and (max-width: 699.9px)")
          .matches &&
        layout != "medium--2"
      ) {
        layout = "medium--2";
        layoutShouldChange = true;
      } else if (
        window.matchMedia("(min-width: 600px) and (max-width: 799.9px)")
          .matches &&
        layout != "medium--2"
      ) {
        layout = "medium--2";
        layoutShouldChange = true;
      } else if (
        window.matchMedia("(min-width: 800px)").matches &&
        layout != "full"
      ) {
        layout = "full";
        layoutShouldChange = true;
      }

      if (layoutShouldChange) {
        if (layout == "mini") {
          if ($(".slick").length > 0) {
            //if article page
            slickFix += 10;
            doSlick();
            assignFullHeightContainerClass();
            centerFullHeightClass();
            darkDots();
          }
        } else if (layout == "medium--1" || layout == "medium--2") {
          if ($(".home-wrap").length > 0) {
            buildTinyGrid();
          } else if ($(".slick").length > 0) {
            $(".slick").slick("slickUnfilter");
            $("html").css("position", "static");
            if (!rowsSet) {
              //if these functions haven't been called
              setColumnItemHeight();
              setRowItemWidths();
            }
          }
        }

        removeLoadScreen();
        setTileZIndex();
      }
    }
  })();

  $("article.slick a").attr("target", "_blank");
  //if a 'div' comes after an 'article p', give the paragraph bottom padding
  $(".slick p").each(function (index, elt) {
    if ($(elt).next("div").length !== 0 || $(elt).next("figure").length !== 0)
      $(elt).css("padding-bottom", "130px");
  });

  //** MEDIA QUERIES (ON PAGE LOAD) **//
  if (window.matchMedia("(max-width: 479.9px)").matches) {
    var layout = "mini";
    if ($(".slick").length > 0) {
      doSlick();
      assignFullHeightContainerClass();
      centerFullHeightClass();
      slickFix += 10;
      darkDots();
    }
  } else if (
    window.matchMedia("(min-width: 480px) and (max-width: 799.9px)").matches
  ) {
    var layout = "medium";
    if ($(".home-wrap").length > 0) {
      buildTinyGrid();
    } else if ($(".slick").length > 0) {
      setRowItemWidths();
      setColumnItemHeight();
    }
  } else if (window.matchMedia("(min-width: 800px)").matches) {
    var layout = "full";
    if ($(".slick").length > 0) {
      setColumnItemHeight();
      setRowItemWidths();
    }
  }

  removeLoadScreen();

  //** FUNCTION DEFINITIONS **//
  function buildTinyGrid() {
    var $img = $(".grid__item").find("img");
    $img
      .one("load", function () {
        if (
          $(this).height() / $(this).width() <
          $(this).closest(".grid__item").height() /
            $(this).closest(".grid__item").width()
        )
          if ($(this).hasClass("stretchfix") == false)
            $(this).addClass("stretchfix");
      })
      .each(function () {
        if (this.complete) $(this).trigger("load");
      });
  }
  //on mobile 'slide' view, make article images with class of 'full-height' fill screen
  function centerFullHeightClass() {
    $(".full-height")
      .one("load", function () {
        var imgRatio =
          ($(this).height() * $(".slick").width()) /
          ($(this).width() * $(".slick").height());
        var articleRatio =
          ($(".slick").height() * $(this).width()) /
          ($(".slick").width() * $(this).height());
        if (imgRatio < articleRatio) {
          $(this).addClass("full-height--centered-x");
        } else {
          $(this).addClass("full-height--centered-y");
        }
      })
      .each(function () {
        if (this.complete) $(this).trigger("load");
      });
  }

  function assignFullHeightContainerClass() {
    $(".full-height").parent("div").addClass("full-height__container");
  }

  function darkDots(disconnect) {
    var darkSlideIndexes = [];
    $(".slick .slide").each(function (index) {
      if ($(this).find(".bg-dark").length > 0) {
        darkSlideIndexes.push(index); //< 9 ? '0' + index : index);
      }
    });
    var target = document.querySelector(".slick-track");
    var observer = new MutationObserver(function (mutations, instance) {
      var slideNumber = $(".slide.slick-active").attr("aria-describedby");
      if (
        slideNumber != undefined &&
        darkSlideIndexes.includes(slideNumber.slice(-2) - slickFix)
      ) {
        if (!$(".slick-dots").hasClass("slick-dots--dark"))
          $(".slick-dots").addClass("slick-dots--dark");
      } else {
        if ($(".slick-dots").hasClass("slick-dots--dark"))
          $(".slick-dots").removeClass("slick-dots--dark");
      }
    });
    var config = { attributes: true };
    observer.observe(target, config);
  }

  function displayRandomQuote() {
    var max = $("a.quote__quote").length;
    var index = Math.floor(Math.random() * max);
    var $p = $($("a.quote__quote")[index]);

    $p.css("display", "inline");
    $($("h4.quote__source")[index]).addClass("chosen").css("display", "block");
  }
  function doSlick() {
    $(".slick").slick({
      arrows: false,
      dots: true,
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 479.9,
          settings: "unslick",
        },
      ],
      slide: ".slide",
    });
    $(".slick").slick("slickFilter", ":not(.desktop)");
    $("html").css({
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    });
    $("body").css("overflow", "hidden");
    $(".slick-track").height($(window).height() - 56);
    $(".slick-dots").find("button").text("");

    $(".slick").on("edge", function (event, slick, direction) {
      if (direction == "left") var url = document.querySelector(".next").href;
      else if (direction == "right")
        var url = document.querySelector(".prev").href;
      window.location.href = url;
    });
  }
  function removeLoadScreen() {
    $("#loading").remove();
    $("html, body").css("overflow", "visible");
    if (document.getElementsByClassName("home-wrap").length > 0)
      $("html, body").css("height", "100%");
    else $("html, body").css("height", "auto");
  }

  //for article pages, divs in a 'div.column' are equal height
  function setColumnItemHeight() {
    $(".column")
      .children()
      .each(function () {
        $(this).outerHeight(100 / $(this).parent().children().length + "%");
      });
  }
  // So that hovered grid items overlap properly when they grow
  function setTileZIndex() {
    var $tiles = $(".grid__item");
    var coords = [];
    $tiles.each(function (index) {
      var topLeft = $(this).offset();
      var obj = {
        bottom: topLeft.top + $(this).height(),
        left: topLeft.left,
        top: topLeft.top,
        right: topLeft.left + $(this).width(),
        $this: $(this),
        z: 9999,
      };
      coords.push(obj);
    });
    coords.forEach(function (a) {
      coords.forEach(function (b) {
        if (a.bottom < b.top) b.z += 4;
        if (a.left > b.right) b.z += 1;
      });
    });

    coords.forEach(function (elt) {
      elt.$this.css("z-index", elt.z);
    });
  }

  //this function needs help! there must be a better way to size images in a '.row' so their edges are flush
  function setRowItemWidths() {
    rowsSet = true; //set global to declare that this function has been called!
    $(".row").each(function () {
      var total = 0; //the sum of image widths when they have all been set to an equal height
      var imagesInRow = $(this).find("img").length;
      $(this)
        .find("img")
        .one("load", function () {
          //give each image the same height, say 400px ... only to compare them!
          if ($(this).closest(".column").length > 0) {
            $(this).height(400 / $(this).closest(".column").children().length);
          } else $(this).height(400);
          //total the widths of images except for ones not first child of column, since those shuoldn't make the row wider
          if (
            $(this).parent().is("div:first-child") ||
            $(this).closest(".column").length == 0
          )
            total += $(this).width() + 6;
          imagesInRow--;
          if (imagesInRow == 0) {
            //after last image is loaded ...
            $(this)
              .closest(".row")
              .find("img")
              .each(function () {
                var percent = ($(this).width() / total) * 100 + "%";
                $(this).css("width", "100%");
                if ($(this).closest(".column").length > 0) {
                  $(this).closest(".column").css("width", percent);
                } else {
                  $(this).parent().css("width", percent);
                }
                $(this).css("height", "auto");
              });
          }
        })
        .each(function () {
          if (this.complete) $(this).trigger("load");
        });
    });
  }
});
