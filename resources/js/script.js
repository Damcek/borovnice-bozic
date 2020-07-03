$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px;",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      /* Navigation scroll */
      $(function () {
        $("a[href*=#]:not([href=#])").click(function () {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              $("html,body").animate(
                {
                  scrollTop: target.offset().top,
                },
                1000
              );
              var nav = $(".js--main-nav");
              nav.slideToggle(200);
              console.log("2");

              return false;
            }
          }
        });
      });
    } else {
      /* Navigation scroll */
      $(function () {
        $("a[href*=#]:not([href=#])").click(function () {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              $("html,body").animate(
                {
                  scrollTop: target.offset().top,
                },
                1000
              );

              return false;
            }
          }
        });
      });
    }
  }

  var x = window.matchMedia("(max-width: 986px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
  });
});

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
