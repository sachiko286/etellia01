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
  const construction_swiperThumbnail = new Swiper(".js-swiper-thumbnail", {
    slidesPerView: "auto",
    scrollbar: {
      el: '.construction-swiper-thumbnail .swiper-scrollbar',
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
  const construction_swiperMain = new Swiper(".js-swiper-main", {
    spaceBetween: 50,


    loop: true,
    // autoplay: {                         
    //     delay: 4000,  
    // },
    thumbs: {
      swiper: construction_swiperThumbnail,
    },
  });

    // フォーム送信ボタン非活性
    $(document).ready(function () {
      var $submitBtn = $('#js-submit');
        $('#form input, #form textarea, #form select').on('change', function () {
          // セレクトボックスの選択値を取得
          // var selectedOption = $('#form select#pref').val();
          
          if (
            $('#form #name').val() !== "" && 
            $('#form #sub').val() !== "" && 
            $('#form #phone').val() !== "" && 
            $('#form #mail').val() !== "" &&
            $('#form select#pref').val() !== "" &&  // プルダウンが未選択でない
            $('#form select#pref').val() !== "選択してください" &&  // "選択してください"以外
            $('#form textarea').val() !== "" &&
            $('#form #privacy').prop('checked') === true
          ) {
            $submitBtn.prop('disabled', false);
            $submitBtn.addClass('form-submit-active');
          } else {
            $submitBtn.prop('disabled', true);
            $submitBtn.removeClass('form-submit-active');
          }
        });
      });

});

