<?php
/*
Template Name: Home
*/
$post_id = 2;
$work_id = 5;

$logo = get_field('logo', $home_id);
if($logo) {
	$logo = '<div class="logo">'.$logo.'</div>';
}

$titles_hero = get_field('titles_hero', $home_id);
$titles_hero_string = '';
if(!empty($titles_hero)) {
	$titles_hero_string = '<div class="showing-text">';
	foreach ($titles_hero as $row) {
      $titles_hero_string .= '<div class="showing-text__item"><span>'.$row['title'].'</span></div>';
	}
	$titles_hero_string .= '</div>';
}

$title_button_hero = get_field('title_button_hero', $home_id);
if($title_button_hero) {
	$title_button_hero = '<a href="'.get_permalink($work_id).'" class="btn"><span>'.$title_button_hero.'</span></a>';
}

$hero_gadgets = get_field('hero_gadgets', $home_id);
$hero_gadgets_string = '';
if(!empty($hero_gadgets)) {
	$hero_gadgets_string = '<ul class="hero__gadgets">';
	foreach ($hero_gadgets as $row) {
		$hero_gadgets_string .= '<li>'.$row['title'].'</li>';
	}
	$hero_gadgets_string .= '</ul>';
}

$hero_list = get_field('hero_list', $home_id);
$hero_list_string = '';
if(!empty($hero_list)) {
	$hero_list_string = '<ul class="hero__list">';
	foreach ($hero_list as $row) {
		$hero_list_string .= '<li>'.$row['title'].'</li>';
	}
	$hero_list_string .= '</ul>';
}

$title_work = get_the_title($work_id);
if($title_work) {
	$title_work = '<strong class="works__title">'.$title_work.'</strong>';
}

$title_button_work = get_field('title_button_work', $home_id);
if($title_button_work) {
	$title_button_work = '<a href="'.get_permalink($work_id).'" class="btn"><span>'.$title_button_work.'</span></a>';
}

$work = get_field('work', $home_id);
$work_string = '';
if(!empty($work)) {
    $work_string = '<div class="works__list">';
    $counter = 0;
    foreach ($work as $row) {
	    $work_item_category = get_the_terms($row,'work_cat');
	    $work_item_tags = '';
	    $class = '';
	    if(!empty($work_item_category)) {
		    foreach ($work_item_category as $rows) {
			    $work_item_class .= ' '.$rows->slug;
			    $work_item_tags .= '<li>'.$rows->name.'</li>';
		    }
	    }
        if($counter > 1) {
            $class = ' mobile-hide';
        }
	    $work_string .= '<a href="'.get_permalink($row).'" class="works__item show'.$class.'">
    <div class="works__item-wrap">
        <span class="works__item-pic">
            <img src="'.get_the_post_thumbnail_url($row).'" alt="'.get_post_meta($row, '_wp_attachment_image_alt', true).'">
        </span>
        <div class="works__item-footer">
            <ul class="works__item-text">
            '.get_the_excerpt($row).'
            </ul>
            <ul class="works__item-data">
                '.$work_item_tags.'
            </ul>
        </div>
    </div>
</a>';
    $counter++;
    }
	$work_string .= '</div>';
}

$doing_subtitle = get_field('doing_subtitle', $home_id);
if($doing_subtitle) {
	$doing_subtitle = '<strong class="doing__subtitle">'.$doing_subtitle.'</strong>';
}

$doing_title = get_field('doing_title', $home_id);
$doing_title_string = '';
if(!empty($doing_title)) {
	$doing_title_string = '<div class="doing__head-title"><div class="showing-text">';
	foreach ($doing_title as $row) {
		$doing_title_string .= '<div class="showing-text__item"><span>'.$row['title'].'</span></div>';
	}
	$doing_title_string .= '</div></div>';
}

$doing_list = get_field('doing_list', $home_id);
$doing_list_string = '';
if(!empty($doing_list)) {
	$doing_list_string = '<div class="doing__head-list"><ul>';
	foreach ($doing_list as $row) {
		$doing_list_string .= '<li class="show">'.$row['title'].'</li>';
	}
	$doing_list_string .= '</ul></div>';
}

$doing_content_subtitle = get_field('doing_content_subtitle', $home_id);
if($doing_content_subtitle) {
	$doing_content_subtitle = '<strong class="doing__subtitle">'.$doing_content_subtitle.'</strong>';
}

$title_button_doing = get_field('title_button_doing', $home_id);
if($title_button_doing) {
	$title_button_doing = '<a href="'.get_permalink(14).'" class="btn btn_2"><span>'.$title_button_doing.'</span></a>';
}

$clients_map = get_field('clients_map', $home_id);
$clients_map_3 = get_field('clients_map_3', $home_id);
if($clients_map) {
    if($clients_map_3) {
	    $clients_map_3 = ', '.$clients_map_3['url'].' 3x';
    }
	$clients_map = '<img src="'.$clients_map['url'].'" srcset="'.$clients_map['url'].' 2x'.$clients_map_3.'" alt="'.$clients_map['alt'].'" title="'.$clients_map['title'].'">';
}

$titles_clients = get_field('titles_clients', $home_id);
$titles_clients_string = '';
if(!empty($titles_clients)) {
	$titles_clients_string = '<div class="showing-text">';
	foreach ($titles_clients as $row) {
		$titles_clients_string .= '<div class="showing-text__item"><span>'.$row['title'].'</span></div>';
	}
	$titles_clients_string .= '</div>';
}

$clients_tabs = get_field('clients_tabs', $home_id);
$clients_tabs_string = '';
if(!empty($clients_tabs)) {
	$clients_tabs_string_tab = '';
	$clients_tabs_string_content = '';
	foreach ($clients_tabs as $row) {
	    if (!$row['tab'] || !$row['content']) {
	        continue;
        }
		$clients_tabs_string_tab .= '<div class="tabs__controls-item"><span>'.$row['tab'].'</span></div>';
        $clients_tabs_string_content .= '<div class="tabs__content-item">'.$row['content'].'</div>';
	}
	if($clients_tabs_string_tab && $clients_tabs_string_content) {
        $clients_tabs_string = '<div class="tabs"><div class="tabs__controls">
                        <span class="tabs__controls-slider"></span>'.$clients_tabs_string_tab.' </div>
                    <div class="tabs__content">'.$clients_tabs_string_content.' </div></div>';
    }
}

$title_button_clients = get_field('title_button_clients', $home_id);
if($title_button_clients) {
	$title_button_clients = '<a href="'.get_permalink($work_id).'" class="btn"><span>'.$title_button_clients.'</span></a>';
}

$title_testimonials = get_field('title_testimonials', $home_id);
if($title_testimonials) {
	$title_testimonials = '<strong class="testimonials__title">'.$title_testimonials.'</strong>';
}

$testimonials = get_field('testimonials', $home_id);
$testimonials_string = '';
if(!empty($testimonials)) {
	$testimonials_string = '<div class="testimonials">'.$title_testimonials.'<div class="swiper-container"><div class="swiper-wrapper">';
	foreach ($testimonials as $row) {
		$testimonials_string .= '<div class="swiper-slide">
                        <div class="testimonials__item">
                            <span class="testimonials__ava">
                                <img src="'.$row['image']['url'].'" alt="'.$row['image']['alt'].'" title="'.$row['image']['title'].'">
                            </span>
                            '.$row['content'].'
                            <strong class="testimonials__name">'.$row['name'].'</strong>
                            <div class="testimonials__position">
                                '.$row['position'].'
                            </div>
                        </div>
                    </div>';
	}
	$testimonials_string .= '</div></div><div class="swiper-pagination"></div></div>';
}

get_header();
?>
    <main class="site__content">
        <span class="site__create-by">by Artem Gorodetsky</span>
        <section class="hero"  id="hero">
            <div class="animate-canvas">
                <span id="path1" class="animate-canvas__item path1"></span>
                <span id="path2" class="animate-canvas__item path2"></span>
                <span id="path3" class="animate-canvas__item path3"></span>
                <span id="path4" class="animate-canvas__item path4"></span>
                <span id="path5" class="animate-canvas__item path5"></span>
            </div>
            <div class="hero__description">
                <?= $logo.$titles_hero_string.$title_button_hero; ?>
            </div>
            <div class="hero__layout" data-text="<?= get_field('title_background', $post_id); ?>">
                <?= $hero_list_string.$hero_gadgets_string; ?>
            </div>
            <span class="hero__scroll-down">SCROLL DOWN</span>
        </section>
        <section class="works">
            <?= $title_work.$work_string.$title_button_work; ?>
        </section>
        <section class="doing">
            <?= $doing_subtitle; ?>
            <div class="doing__head">
                <?= $doing_title_string.$doing_list_string; ?>
            </div>
            <div class="doing__content">
                <?= $doing_content_subtitle.get_field('doing_content', $post_id).$title_button_doing; ?>
            </div>
        </section>
        <section class="clients">
            <div class="clients__content">
                <?= $titles_clients_string.$clients_tabs_string.$title_button_clients; ?>
            </div>
            <div class="clients__map">
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <span class="clients__map-point show"></span>
                <?= $clients_map; ?>
            </div>
        </section>
        <?= $testimonials_string; ?>
      <?php get_template_part( '/contents/content', 'form'); ?>
    </main>
    <span class="circle circle_little circle_mobile" style="top: 535px; left: 41vw"></span>
    <span class="circle circle_middle circle_mobile" style="top: 769px; left: 42vw"></span>
    <span class="circle circle_semi circle_mobile" style="top: 1811px; left: 58vw"></span>
    <span class="circle circle_medium circle_desktop" style="top: 678px; left: 47vw"></span>
    <span class="circle circle_desktop" style="top: 100vh; left: 70vw"></span>
    <span class="circle circle_desktop" style="top: 280vh; left: 50vw"></span>
<?php
get_footer();