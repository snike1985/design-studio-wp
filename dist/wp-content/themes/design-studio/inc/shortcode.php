<?php

function bright_function($content = '') {
	return '<div class="article__content-bright"><p>'.$content.'</p></div>';
}


function register_shortcodes(){
	add_shortcode('bright', 'bright_function');
}
function register_button( $buttons ) {
	array_push( $buttons, "|", "bright" );
	return $buttons;
}
function add_plugin( $plugin_array ) {
	$plugin_array['bright'] = get_template_directory_uri() . '/assets/js/bright-button.min.js';
	return $plugin_array;
}

function add_all() {
	add_filter( 'mce_external_plugins', 'add_plugin' );
	add_filter( 'mce_buttons', 'register_button' );
}
add_action( 'init', 'register_shortcodes');
add_action('init', 'add_all');