import React from "react";
import $ from "jquery";
import "./customCSS/FoodCarousel.css";

// Keyboard nav
$("html body").keydown(function (e) {
  if (e.keyCode === 37) {
    // left
    $(".active").prev().trigger("click");
  } else if (e.keyCode === 39) {
    // right
    $(".active").next().trigger("click");
  }
});
class FoodCarousel extends React.Component {
  componentDidMount() {
    const $num = $(".my-card").length;
    const $even = $num / 2;
    const $odd = ($num + 1) / 2;

    if ($num % 2 === 0) {
      $(".my-card:nth-child(" + $even + ")").addClass("active");
      $(".my-card:nth-child(" + $even + ")")
        .prev()
        .addClass("prev");
      $(".my-card:nth-child(" + $even + ")")
        .next()
        .addClass("next");
    } else {
      $(".my-card:nth-child(" + $odd + ")").addClass("active");
      $(".my-card:nth-child(" + $odd + ")")
        .prev()
        .addClass("prev");
      $(".my-card:nth-child(" + $odd + ")")
        .next()
        .addClass("next");
    }

    $(".my-card").click(function () {
      const $slide = $(".active").width();
      console.log($(".active").position().left);

      if ($(this).hasClass("next")) {
        $(".card-carousel")
          .stop(false, true)
          .animate({ left: "-=" + $slide });
      } else if ($(this).hasClass("prev")) {
        $(".card-carousel")
          .stop(false, true)
          .animate({ left: "+=" + $slide });
      }

      $(this).removeClass("prev next");
      $(this).siblings().removeClass("prev active next");

      $(this).addClass("active");
      $(this).prev().addClass("prev");
      $(this).next().addClass("next");
    });
  }

  render() {
    return (
      <div className="card-carousel">
        <div
          className="my-card"
          style={{
            backgroundImage: "url('https://unsplash.it/500/500/') ",
          }}
        ></div>
        <div
          className="my-card"
          style={{
            backgroundImage: "url('https://unsplash.it/500/500/') ",
          }}
        ></div>
        <div
          className="my-card"
          style={{
            backgroundImage: "url('https://unsplash.it/500/500/') ",
          }}
        ></div>
        <div
          className="my-card"
          style={{
            backgroundImage: "url('https://unsplash.it/500/500/') ",
          }}
        ></div>
        <div
          className="my-card"
          style={{
            backgroundImage: "url('https://unsplash.it/500/500/') ",
          }}
        ></div>
      </div>
    );
  }
}
export default FoodCarousel;
