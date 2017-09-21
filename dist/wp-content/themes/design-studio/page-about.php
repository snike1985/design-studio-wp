<?php
/*
Template Name: About
*/
get_header();
$post_id = 8;

$args = array(
	'post_type'   => 'team',
	'posts_per_page' => -1,
	'orderby'     => 'menu_order',
	'fields'      => 'ids',
	'post_status' => 'publish',
	'suppress_filters' => false
);
$posts = get_posts( $args );

$team_string = '';
if ($posts) {
	$team_string = '<div class="team"><div class="team__list">';
	foreach ( $posts as $row ) {
      $team_string .= '<div class="team__item">
                        <div class="team__item-pic show">
                            <img src="'.get_the_post_thumbnail_url($row).'" alt="'.get_post_meta($row, '_wp_attachment_image_alt', true).'">
                        </div>
                        <div class="team__item-footer">
                            <strong class="team__item-name">'.get_the_title($row).'</strong>
                            <div class="team__item-proffesion">'.get_field('position', $row).'</div>
                        </div>
                    </div>';
	}
	$team_string .= '</div></div>';
}

$content = get_field('templates', $post_id);
$content_string = '';
if (!empty($content)) {
    $content_string = '<div class="about-us__content">';
	foreach ( $content as $row ) {
	    switch ($row['show_template']) {
          case '0':
	          $content_string .= $row['content'];
	          break;
          case '1':
              if($row['content'] && $row['image']) {
	              $content_string .= '<div class="about-us__content-half">
                    <div>
                        <div class="about-us__pic show">
                            <img src="'.$row['image']['url'].'" alt="'.$row['image']['alt'].'" title="'.$row['image']['title'].'">
                        </div>
                    </div>
                    <div>'.$row['content'].'</div>
                </div>';
              }
        }
	}
	$content_string .= '</div>';
}

$work = get_field('work', $post_id);
if (!empty($work)) {
    foreach ($work as $row) {
	    $work_item_category = get_the_terms($row,'work_cat');
	    $work_item_tags = '';
	    if(!empty($work_item_category)) {
          foreach ($work_item_category as $rows) {
	          $work_item_tags .= '<li>'.$rows->name.'</li>';
          }
        }
        $work_string .= '
        <a href="'.get_permalink($row).'" class="works__item show">
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
        </a>';
    }
}
?>
    <main class="site__content">
        <section class="about-us">
            <h1 class="about-us__title"><?= get_the_title($post_id); ?></h1>
            <?= $team_string.$content_string; ?>
        </section>
        <?php if($work_string) { ?>
        <section class="works">
            <strong class="works__title works__title_left"><?= get_field('title_work', $post_id); ?></strong>
            <div class="works__list"><?= $work_string; ?></div>
            <a href="<?= get_permalink(5); ?>" class="btn works__btn"><span><?= get_field('title_button_work', $post_id); ?></span></a>
        </section>
	    <?php }
	    get_template_part( '/contents/content', 'form'); ?>
    </main>
    <span class="circle circle_semi circle_mobile" style="top: 356px; right: 60vw"></span>
    <span class="circle circle_middle circle_mobile" style="top: 1356px; left: 55vw"></span>
    <span class="circle circle_big circle_desktop" style="top: 604px; left: calc(50% - 315px)"></span>
    <span class="circle circle_desktop" style="top: 1560px; left: 80vw"></span>
<?php
get_footer();