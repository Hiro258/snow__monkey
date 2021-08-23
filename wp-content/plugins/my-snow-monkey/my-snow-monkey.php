<?php
/**
 * Plugin name: My Snow Monkey
 * Description: このプラグインに、あなたの Snow Monkey 用カスタマイズコードを書いてください。
 * Version: 0.2.1
 *
 * @package my-snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * Snow Monkey 以外のテーマを利用している場合は有効化してもカスタマイズが反映されないようにする
 */
$theme = wp_get_theme( get_template() );
if ( 'snow-monkey' !== $theme->template && 'snow-monkey/resources' !== $theme->template ) {
	return;
}

/**
 * Directory url of this plugin
 *
 * @var string
 */
define( 'MY_SNOW_MONKEY_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

/**
 * Directory path of this plugin
 *
 * @var string
 */
define( 'MY_SNOW_MONKEY_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
* 外部JS・CSSの読み込み
*/
add_action('wp_enqueue_scripts', 'msm_enqueue_style_script');
function msm_enqueue_style_script()
{

/* ここにswiper.css */
wp_enqueue_style(
    'swiper_css',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css'
  );


/* css読み込み */
wp_enqueue_style(
'msm_style',
MY_SNOW_MONKEY_URL . '/styles/style.css',
[],
filemtime(MY_SNOW_MONKEY_PATH . '/styles/style.css')
);


/* ここにswiper.js */
wp_enqueue_script(
    'swiper_js',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js'
  );



/* js読み込み */
wp_enqueue_script(
'msm_scripts',
MY_SNOW_MONKEY_URL . '/scripts/main.js',
['jquery'],
filemtime(MY_SNOW_MONKEY_PATH . '/scripts/main.js'),
true
);
}

/* エディター用のCSS読み込み 
add_action(
'after_setup_theme',
function () {
add_editor_style('/../../plugins/my-snow-monkey/styles/style.css');
}
);*/

// エディター用の CSS 読み込み
// クラシックエディターとブロックエディターの両方に CSS が読み込まれます。
// ブロックエディターの場合は自動的に .editor-styles-wrapper でラップされます。
// 依存関係は指定できません。
add_action(
	'after_setup_theme',
	function() {
		add_theme_support( 'editor-styles' );
		add_editor_style( '/../../plugins/my-snow-monkey/style.css' );
	}
);

// ブロックエディター用の CSS 読み込み
// add_editor_style() とは違い、.editor-styles-wrapper ではラップされませんが、依存関係は指定できます。
add_action(
	'enqueue_block_editor_assets',
	function() {
		wp_enqueue_style(
			'my-snow-monkey',
			MY_SNOW_MONKEY_URL . '/block-editor.css',
			[ Framework\Helper::get_main_style_handle() ],
			filemtime( MY_SNOW_MONKEY_PATH . '/block-editor.css' )
		);
	}
);



/* メインコンテンツの上部にHTMLの挿入 */
add_action(
	'snow_monkey_prepend_main',
	function () {
		/* if文でフロントページのみに適応 */
		if (is_front_page()) {
?>

<div class="hero">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="hero__title">
          <h2><span>住宅のプロが提案する新しい価値と新しい住宅</span><span>あなただけの住宅を私たちは創造します</span></h2>
        </div>
        <div class="hero__btn"><a href="#"><span>会社案内</span></a></div>
        <img src="http://localhost:8888/sample_corp_1/wp-content/uploads/2021/08/main01.jpg" alt="" class="main-visual" />
      </div>
      <div class="swiper-slide">
        <div class="hero__title">
          <h2><span>住宅のプロが提案する新しい価値と新しい住宅</span><span>あなただけの住宅を私たちは創造します</span></h2>
        </div>
        <div class="hero__btn"><a href="#"><span>実績紹介</span></a></div>
        <img src="http://localhost:8888/sample_corp_1/wp-content/uploads/2021/08/main02.jpg" alt="" class="main-visual" />
      </div>
      <div class="swiper-slide">
        <div class="hero__title">
          <h2><span>住宅のプロが提案する新しい価値と新しい住宅</span><span>あなただけの住宅を私たちは創造します</span></h2>
        </div>
        <div class="hero__btn"><a href="#"><span>事業案内</span></a></div>
        <img src="http://localhost:8888/sample_corp_1/wp-content/uploads/2021/08/main03.jpg" alt="" class="main-visual" />
      </div>
    </div>
  </div>
</div>

<?php
		}
	}
);

/* 投稿の文字数トリム */
function custom_excerpt_length($length) {
  return 80;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);

add_action(
  'snow_monkey_prepend_footer',
  function () {
  ?>
<div class="info">
  <div class="info-inner c-container">
    <div class="info__logo">
      <a href="#">
        <img src="http://localhost:8888/sample_corp_1/wp-content/uploads/2021/08/logo01.png" alt="">
      </a>
    </div>
    <p class="info__text">私たちは未来を創造します。</p>
    <ul class="social-nav">
      <li class="social-nav__icon"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      <li class="social-nav__icon"><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li class="social-nav__icon"><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li class="social-nav__icon"><a href="#"><i class="fas fa-rss"></i></a></li>
    </ul>
  </div>
</div>
<?php
  }
);
