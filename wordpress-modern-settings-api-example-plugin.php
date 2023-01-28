<?php
/**
 * Plugin URI: https://github.com/schmitzoide/wordpress-modern-settings-api-example-plugin
 * Plugin Name: WordPress Modern Settings API Example Plugin
 * Description: Enable usable of react components on the WordPress Modern Settings API feature plugin..
 * Version: 0.3.0
 * Author: Marcel Schmitz
 * Author URI: https://profiles.wordpress.org/schmitzoide/
 * Text Domain: wordpress-modern-settings-api
 * Requires PHP: 8.0
 *
 * @package WP_Modern_Settings\Plugin
 * @internal This file is only used when running as a feature plugin.
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'plugins_loaded',
	function () {
		if ( class_exists( 'WP_Modern_Settings\Settings' ) ) {
			if ( is_admin() ) {
				$settings = new WP_Modern_Settings\Settings();
				$settings->registerSettings( file_exists( plugin_dir_path( __FILE__ ) . 'build/settings.json' ) ? plugin_dir_path( __FILE__ ) . 'build/settings.json' : plugin_dir_path( __FILE__ ) . 'src/settings.json' );
			}
		}
	}
);
