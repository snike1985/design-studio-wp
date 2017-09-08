<?php
get_header();

$home_id = 2;
$post_item_category = get_the_terms($post->ID,'work_cat');
$post_item_tags = '';
if(!empty($post_item_category)) {
	$post_item_tags = '<div class="labels">';
	foreach ($post_item_category as $rows) {
		$post_item_tags .= '<span class="labels__item">'.$rows->name.'</span>';
	}
	$post_item_tags .= '</div>';
}

$templates = get_field('tempates', $post->ID);
$content = '';
if(!empty($templates)) {
    foreach ($templates as $row) {
	    $class = '';
        switch ($row['show_template']) {
          case '0' :
              if(!$row['content']) {continue;}
              $content .= '<div class="case__content bright">'.$row['content'].'</div>';
            break;
          case '2' :
	          $class = ' light';
          case '1' :
	          if(!$row['content']) {continue;}
              $content .= '<div class="case__content'.$class.'">'.$row['content'].'</div>';
            break;
          case '3' :
	          $class = ' case__pic_fullscreen';
          case '4' :
	          if(empty($row['image'])) {continue;}
              $content .= '<div class="case__pic'.$class.' show"><img src="'.$row['image']['url'].'" alt="'.$row['image']['alt'].'" title="'.$row['image']['title'].'"></div>';
            break;
          case '6' :
	          $class = ' case__slider_light';
          case '5' :
	          if(empty($row['slider'])) {continue;}
	          $slider_string = '';
	          foreach ($row['slider'] as $row2) {
                  if(empty($row2['image'])) {continue;}
	              $slider_string .= '<div class="swiper-slide" style="background-image: url('.$row2['image']['url'].')"></div>';
              }
              $content .= '<div class="case__slider'.$class.'">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                     '.$slider_string.'
                    </div>
                </div>
                <div class="case__slider-next">
                    <svg x="0px" y="0px" viewBox="0 0 29 13.9" style="enable-background:new 0 0 29 13.9;" xml:space="preserve">
                       <polygon points="29,6.9 29,6.9 22,0 20.6,1.4 25.2,6 0,6 0,8 25.1,8 20.6,12.5 22,13.9 27.9,8 28,8 28,7.9 29,7 "/>
                    </svg>
                </div>
                <div class="case__slider-prev">
                    <svg x="0px" y="0px" viewBox="0 0 29 13.9" style="enable-background:new 0 0 29 13.9;" xml:space="preserve">
                       <polygon points="29,6.9 29,6.9 22,0 20.6,1.4 25.2,6 0,6 0,8 25.1,8 20.6,12.5 22,13.9 27.9,8 28,8 28,7.9 29,7 "/>
                    </svg>
                </div>
            </div>';
            break;
        }
    }
}

$next_post_string = '<div class="case__pagination-next"></div>';
$previous_post_string = '<div class="case__pagination-prev"></div>';
$next_post = get_next_post(false, '','work_cat');
if(!empty($next_post)) {
	$next_post_string = '<a href="'.get_permalink($next_post->ID).'" class="case__pagination-next">
					<div>next project<span>'.$next_post->post_title.'</span></div>
				</a>';
}
$previous_post = get_previous_post(false, '','work_cat');
if(!empty($previous_post)) {
	$previous_post_string = '<a href="'.get_permalink($previous_post->ID).'" class="case__pagination-prev">
					<div>prev project<span>'.$previous_post->post_title.'</span></div>
				</a>';
}
$logo = get_field('logo', $home_id);
if($logo) {
	$logo = '<a href="'.get_home_url().'" class="logo">'.$logo.'</a>';
}
?>
    <main class="site__content">

        <section class="case">

            <div class="case__head">

                <h1 class="case__title"><?= $post->post_title; ?></h1>

                <?= $post_item_tags; ?>

                <div class="case__head-info">
                    <?php the_content($post->ID); ?>
                </div>

            </div>

            <?= $content.$logo; ?>

            <?php if($next_post_string || $previous_post_string){ ?>
            <nav class="case__pagination">
	            <?= $next_post_string.$previous_post_string; ?>
            </nav>
            <?php } ?>

        </section>
        <!-- /case -->

	    <?php get_template_part( '/contents/content', 'form'); ?>

    </main>

    <!-- circle -->
    <div class="circle circle_semi circle_mobile" style="top: 564px; right: 60vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_mobile" style="top: 1521px; left: 44vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_mobile" style="top: 2603px; left: 44vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_mobile" style="top: 3198px; left: 44vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_semi circle_mobile" style="top: 3572px; right: 60vw"></div>
    <!-- /circle -->

    <!-- circle -->
    <div class="circle circle_2 circle_desktop" style="top: 377px; left: 15vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_desktop" style="top: 1788px; left: 48vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_desktop" style="top: 1865px; left: 70vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_desktop" style="top: 3034px; left: 48vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_min circle_desktop" style="top: 4044px; left: 48vw"></div>
    <!-- /circle -->
    <!-- circle -->
    <div class="circle circle_2 circle_desktop" style="top: 4334px; left: 10vw"></div>
    <!-- /circle -->

<?php get_footer();