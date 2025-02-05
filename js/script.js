"use strict";//コードがstrict（厳格）モードで実行

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //===========================================================
  //ハンバーガーメニュー  
  //===========================================================
  $(function () {

    $(".js-hamburger").on("click", function () {
      $(this).toggleClass("is-open");//ボタンの開閉
      // $(".js-drawer").fadeToggle();//ドロワーメニュをフェードイン、フォードアウト
      $(".js-drawer").toggleClass("is-open");//ドロワーメニュをスライド
      $('body').toggleClass('header-drawer-noscroll'); // 背景スクロール固定設定、解除
      //(.header-drawer-noscroll{ overflow: hidden;}; を設定して置く）
    });

    // backgroundまたはページ内リンクをクリックで閉じる
    $(".header-drawer, .js-drawer a[href]").on("click", function () {
      closeDrawer();
    });

    // resizeイベント　ウインドウ幅が広がるとドロワーが閉じる
    $(window).on('resize', function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeDrawer();
      }
    });

    function closeDrawer() {
      $(".js-drawer").removeClass("is-open")//ドロワーメニューをフェードアウト
      $(".js-hamburger").removeClass("is-open");//ボタンからクラス名「is-open」を取る
      $('body').removeClass('header-drawer-noscroll'); // 背景スクロール固定解除
    }
  });

  //===========================================================
  //swiper  
  //===========================================================
  //サムネイル
  const constraction_swiperThumbnail = new Swiper(".js-swiper-thumbnail", {
    slidesPerView: "auto",
    scrollbar: {
      el: '.constraction-swiper-thumbnail .swiper-scrollbar',
      draggable: true,
    },
  

    breakpoints: { //画面幅による表示枚数と余白の指定
      320: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },


    }
  });

  // メイン
  const constraction_swiperMain = new Swiper(".js-swiper-main", {
    spaceBetween: 50,


    loop: true,
    // autoplay: {                         
    //     delay: 4000,  
    // },
    thumbs: {
      swiper: constraction_swiperThumbnail,
    },
  });

  // const mySwiper = new Swiper('.p-swiper__xxx', { //名前を変える
  // loop: true, //最後→最初に戻るループ再生を有効に
  // speed: 1000, //表示切り替えのスピード
  // centeredSlides: true, //中央寄せ
  // slidesPerView: 3, // 一度に表示する枚数
  // autoplay: { 
  //         delay: 3000, //何秒ごとにスライドを動かすか(1000=1秒)
  //         stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
  //         disableOnInteraction: true, //ユーザーの操作時に止める
  //         reverseDirection: false, //自動再生を逆向きにする
  // },
  // effect: "slide", //切り替えのmotion (※1)
  //  pagination: {
  //         el: ".swiper-pagination", //paginationのclass
  //         clickable: true, //クリックでの切り替えを有効に
  //         type: "progressbar" //paginationのタイプ (※2)
  //     },
  //     navigation: {
  //         prevEl: ".swiper-button-prev", //戻るボタンのclass
  //         nextEl: ".swiper-button-next" //進むボタンのclass
  //     },
  //     scrollbar: { //スクロールバーを表示したいとき
  //         el: ".swiper-scrollbar", //スクロールバーのclass
  //         hide: true, //操作時のときのみ表示
  //         draggable: true //スクロールバーを直接表示できるようにする
  //     },
  //     allowTouchMove: false, // スワイプで表示の切り替えを無効に
  //     slidesPerView: 3, // 一度に表示する枚数
  //     breakpoints: { //画面幅による表示枚数と余白の指定
  //         320: {
  //             slidesPerView: 1,
  //             spaceBetween: 10,
  //         },
  //         375: {
  //             slidesPerView: 1.2,
  //             spaceBetween: 15,
  //         },
  //         600: {
  //             slidesPerView: 1.2,
  //             spaceBetween: 15,
  //         },
  //         1025: {
  //             slidesPerView: 2,
  //             spaceBetween: 20,
  //         },
  //         1500: {
  //             slidesPerView: 3,
  //             spaceBetween: 20,
  //         },
  //     }
  // });

  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
      fadeEffect: {
          crossFade: true
      },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullet：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
});

