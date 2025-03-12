<?php
/**
 * Plugin Name: Copy Code
 * Description: Extends the WordPress Code block to add a "Copy Code" button.
 * Version: 0.1.0
 * Author: Gaurav Tiwari
 */

defined('ABSPATH') || exit;

function copy_code_enqueue_assets() {
    wp_enqueue_style('copy-code-style', plugin_dir_url(__FILE__) . 'assets/index.css');
    wp_enqueue_script('copy-code-script', plugin_dir_url(__FILE__) . 'assets/index.js', [], false, true);
}
add_action('wp_enqueue_scripts', 'copy_code_enqueue_assets');
?>
