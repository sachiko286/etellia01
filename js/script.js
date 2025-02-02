"use strict";//コードがstrict（厳格）モードで実行

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // //ハンバーガーメニュー２
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

});

