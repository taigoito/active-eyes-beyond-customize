<?php
/*
Plugin Name: Beyond Customize
Description: This is an asset when using the theme "Beyond" for Active Eyes Detective Agency.
Version: 1.0
Requires PHP: 7.4
Author: Taigo Ito
Author URI: https://qwel.design/
License: GNU General Public License v3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */


defined( 'ABSPATH' ) || exit;


/*
 * プラグインのパス, URI
 */
define( 'BEYOND_CUSTOMIZE_DIR', WP_PLUGIN_DIR . '/beyond-customize/' );
define( 'BEYOND_CUSTOMIZE_URI', WP_PLUGIN_URL . '/beyond-customize/' );


/*
 * classのオートロード
 */
spl_autoload_register(
	function( $classname ) {
		if ( strpos( $classname, 'Beyond_Customize' ) === false ) return;
		$classname = str_replace( '\\', '/', $classname );
		$classname = str_replace( 'Beyond_Customize/', '', $classname );
		$file      = BEYOND_CUSTOMIZE_DIR . '/classes/' . $classname . '.php';
		if ( file_exists( $file ) ) {
			require $file;
		}
	}
);

class Beyond_Customize {
  use \Beyond_Customize\Shortcodes;
		
	public function __construct() {
    // CSSファイルを読み込み (エディター)
    add_action( 'enqueue_block_assets', [ $this, 'enqueue_scripts' ] );

		// CSS, JSファイルを読み込み (フロント)
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    
    // ショートコード登録
    add_action( 'init', [ $this, 'register_shortcode' ] );

	}

  public function enqueue_scripts() {
    // バージョン情報
    $version = '1.0';

		// style.css
		wp_enqueue_style(
			'beyond-custom-style',
			plugins_url( 'style.css', __FILE__ ),
			[],
      $version
		);

    // init.js (フロントエンドのみ)
    if ( !is_admin() ) {
      wp_enqueue_script(
        'beyond-custom-init',
        plugins_url( 'init.js', __FILE__ ),
        [],
        $version,
        true
      );
    }

  }

}

new Beyond_Customize();
