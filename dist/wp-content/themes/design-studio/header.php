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
		$menu_list .= '<a href="'.$perm.'" class="menu__links-item'.$active.'"><span>'.$menu_item->title.'</span></a>';
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
    <style>
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background-color: #f5f5f5;
        }
        .loader.hide {
            opacity: 0;
            visibility: hidden;
            -webkit-animation: hideLoader 1s 1 ease-in-out both;
            animation: hideLoader 1s 1 ease-in-out both;
        }
        .loader__wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80px;
            transform: translate(-50%,-50%);
        }
        .loader__wrap div {
            display: inline-block;
            width: 18px;
            height: 18px;
            border-radius: 100%;
            background-color: #0c24fb;
            -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
            animation: bouncedelay 1.4s infinite ease-in-out both;
        }
        .loader__wrap div.loader__one {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }
        .loader__wrap div.loader__two {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes bouncedelay {
            0%, 80%, 100% { -webkit-transform: scale(0) }
            40% { -webkit-transform: scale(1) }
        }

        @keyframes bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0)
            }
            40% {
                transform: scale(1);
                -webkit-transform: scale(1)
            }
        }

        @-webkit-keyframes hideLoader {
            0% {
                visibility: visible;
                opacity: 1;
            }
            100% {
                visibility: hidden;
                opacity: 0;
            }
        }

        @keyframes hideLoader {
            0% {
                visibility: visible;
                opacity: 1;
            }
            100% {
                visibility: hidden;
                opacity: 0;
            }
        }

    </style>
</head>
<body>
<!-- loader -->
<div class="loader">
    <!-- loader__wrap -->
    <div class="loader__wrap">
        <div class="loader__one"></div>
        <div class="loader__two"></div>
        <div class="loader__three"></div>
    </div>
    <!-- /loader__wrap -->
</div>
<!-- /loader -->
<div class="site <?= $class; ?>">
    <header class="site__header">
        <?= $logo; ?>
        <nav class="menu">
            <span class="menu__btn"><span></span></span>
            <div class="menu__wrap">
                <div class="menu__head">
	                <?= $logo; ?>
                </div>
                <?= $menu_list; ?>
                <div class="menu__footer">
                    <div class="social">
                        <?= $social_links_list; ?>
                    </div>
                </div>
            </div>
        </nav>
        <div class="request">
            <div class="request__wrap">
                <span class="request__close"></span>
                <?= $title_form_header_string; ?>
                <div class="request__form">
	                <?= do_shortcode('[contact-form-7 id="23" title="Contact form 1"]'); ?>
                </div>
            </div>
        </div>
       <?= $title_button_header; ?>
    </header>