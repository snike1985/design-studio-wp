<?php
$home_id = 2;
$contact_id = 14;

$logo = get_field('logo', $home_id);
if($logo) {
    if(is_front_page()) {
	    $logo = '<div class="logo">'.$logo.'</div>';
    } else {
	    $logo = '<a href="'.get_home_url().'" class="logo">'.$logo.'</a>';
    }
}

$menu_name = 'menu';
$locations = get_nav_menu_locations();
$menu_list = '';
if( $locations && isset($locations[ $menu_name ]) ){
	$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
	$menu_items = wp_get_nav_menu_items( $menu );
	$menu_list = '<div class="menu__links">';
	foreach ( (array) $menu_items as $key => $menu_item ){
		$perm = get_the_permalink($menu_item->object_id);
        $active = '';
        if (is_page( $menu_item->object_id )) {
          $active = ' active ';
        }
		$menu_list .= '<a href="'.$perm.'" class="menu__links-item'.$active.'">'.$menu_item->title.'</a>';
	}
	$menu_list .= '</div>';
}

$social_links = get_field('social_links', $contact_id);
$social_links_list = '';
if(!empty($social_links)) {
	foreach ( $social_links as $row ) {
		if(is_array($row['show_in'])) {
          if(!in_array('0', $row['show_in']) || empty($row['image'])) {
            continue;
          }
		}else {
          if($row['show_in'] !== '0' || empty($row['image'])) {
            continue;
          }
        }
      $social_links_list .= '<a class="social__item" href="'.$row['url'].'" target="_blank">'.file_get_contents($row['image']['url']).'</a>';
	}
}
$title_button_header = get_field('title_button_header', $home_id);
if($title_button_header) {
    $title_button_header = '<a href="#" class="btn btn_transparent request-btn"><span>'.$title_button_header.'</span></a>';
}

$title_form_header = get_field('title_form_header', $home_id);
$title_form_header_string = '';
if(!empty($title_form_header)) {
	$title_form_header_string = '<strong class="request__title">';
    foreach ($title_form_header as $row) {
        $title_form_header_string .= '<span class="request__title-item"><span>'.$row['title'].'</span></span>';
    }
	$title_form_header_string .= '</strong>';
}
$class = '';
if(is_front_page()) {
    $class= ' site_main';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
    <title>Title</title>
    <?php wp_head(); ?>
</head>
<body>

<!-- site -->
<div class="site <?= $class; ?>">

    <!-- site__header -->
    <header class="site__header">

        <?= $logo; ?>

        <!-- menu -->
        <nav class="menu">

            <span class="menu__btn"><span></span></span>

            <!-- menu__wrap -->
            <div class="menu__wrap">

                <!-- menu__head -->
                <div class="menu__head">

	                <?= $logo; ?>

                </div>
                <!-- /menu__head -->

                <?= $menu_list; ?>

                <!-- menu__footer -->
                <div class="menu__footer">

                    <!-- social -->
                    <div class="social">
                        <?= $social_links_list; ?>
                    </div>
                    <!-- /social -->

                </div>
                <!-- /menu__footer -->

            </div>
            <!-- /menu__wrap -->

        </nav>
        <!-- /menu -->

        <!-- request -->
        <div class="request">

            <!-- request__wrap -->
            <div class="request__wrap">

                <span class="request__close"></span>

                <?= $title_form_header_string; ?>

                <!-- request__form -->
                <div class="request__form">
	                <?= do_shortcode('[contact-form-7 id="23" title="Contact form 1"]'); ?>
                </div>
                <!-- /request__form -->

            </div>
            <!-- /request__wrap -->

        </div>
        <!-- /request -->

       <?= $title_button_header; ?>

    </header>
    <!-- /site__header -->