// Splitting 텍스트 애니메이션 초기화
Splitting();

// 결과화면 애니메이션 초기화
commUiResultAnimation.set();
commUiResultAnimation.loading();

// ========================================
// cssAnimate 스크롤 애니메이션
// ========================================
$(document).ready(function () {
  // 페이지 로드 시 보이는 영역의 애니메이션 즉시 실행
  $(".cssAnimate").each(function () {
    var elementTop = $(this).offset().top;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if (elementTop < viewportBottom) {
      $(this).addClass("active");
    }
  });

  // 스크롤 시 애니메이션 실행
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();

    $(".cssAnimate").each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      // 요소가 화면에 보이면 active 클래스 추가
      if (scrollTop + windowHeight > elementTop + 100) {
        $(this).addClass("active");
      }
    });
  });
});
//commUiFnInput.events();
//commUiFnInput.init();

$(function () {
  //공지사항 팝업
  cookiedata = document.cookie;
  if (cookiedata.indexOf("mainPopup=ok") < 0) {
    getPopup();
  }

  async function getPopup() {
    await commUtil.getPopupCnt();
  }

  let lastScroll = 0;
  $(window).scroll(function () {
    let nowScroll = $(this).scrollTop();
    let offTop1 = $("#imgAni1").offset().top;
    let height1 = $("#imgAni1").height();
    let width1 = (nowScroll - offTop1) / 100 + 10;

    let offTop2 = $("#imgAni2").offset().top;
    let height2 = $("#imgAni2").height();
    let width2 = (nowScroll - offTop2) / 100 + 10;

    if ((width1 > 1 && width1 < 11) || (width2 > 1 && width2 < 11)) {
      $("#imgAni1")
        .children("div")
        .width((9 - width1) * 2 + "%");
      $("#imgAni2")
        .children("div")
        .width((9 - width2) * 2 + "%");
    }

    if (nowScroll > lastScroll) {
      //console.log("내려감~~~");
    } else {
      //console.log("올라감~~~");
    }

    lastScroll = nowScroll;
  });

  /* direct-info swiper */
  const directInfoSwiper = new Swiper(".direct-info .swiper-container", {
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 60,
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 2.5,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });

  /* productBanner swiper */
  const productBannerSwiper = new Swiper(".product-banner > .swiper", {
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 1,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    a11y: {
      slideLabelMessage:
        "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드",
    },
  });
  const productBannerControl = document.querySelector("#productBannerControl");
  if (productBannerControl) {
    productBannerControl.addEventListener("click", function () {
      if (this.classList.contains("is-stop")) {
        this.classList.remove("is-stop");
        this.querySelector(".sr-only").innerHTML = `자동재생 멈추기`;
        productBannerSwiper.autoplay.start();
      } else {
        this.classList.add("is-stop");
        this.querySelector(".sr-only").innerHTML = `자동재생 시작하기`;
        productBannerSwiper.autoplay.stop();
      }
    });
  }

  /* 배너 링크 분기 처리 */
  const productBannerLink = (() => {
    const elements = document.querySelectorAll(
      ".product-banner .product-banner-item-cont > a"
    );
    elements.forEach((_this) => {
      _this.addEventListener("click", (e) => {
        let linkURL;
        if (commUtil.isMobile()) {
          linkURL = _this.dataset.urlMobile;
        } else {
          linkURL = _this.dataset.urlPc;
        }
        const isLink = linkURL ? true : false;
        if (isLink) {
          e.preventDefault();
          linkURL = linkURL || _this.getAttribute("href");
          if (linkURL === "qrCode") {
            commView.goQrLk(_this.dataset.qrCode);
          } else {
            window.open(linkURL);
          }
        } else {
          return false;
        }
      });
    });
  })();
  /* //배너 링크 분기 처리 */
});
