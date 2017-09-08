<?php
/*
Template Name: Work
*/
get_header();
$post_id = 5;

$category = get_terms(array(
	'taxonomy' => 'work_cat',
	'hide_empty' => false,
));
$category_string = '';
if(!empty($category)) {
    foreach ($category as $row) {
	    $category_string .= '<div class="works__filter-item" data-filter=".'.$row->slug.'">'.$row->name.'</div>';
    }
}

$args = array(
	'post_type'   => 'work',
	'posts_per_page' => -1,
	'orderby'     => 'menu_order',
	'fields'      => 'ids',
    'post_status' => 'publish',
	'suppress_filters' => false
);
$posts = get_posts( $args );

if ($posts) {
    foreach ($posts as $row) {
	    $work_item_category = get_the_terms($row,'work_cat');
	    $work_item_tags = '';
	    $work_item_class = '';
	    if(!empty($work_item_category)) {
          foreach ($work_item_category as $rows) {
	          $work_item_class .= ' '.$rows->slug;
	          $work_item_tags .= '<li>'.$rows->name.'</li>';
          }
        }
        $work_string .= '<a href="'.get_permalink($row).'" class="works__item show '.$work_item_class.'">
					<img src="'.get_the_post_thumbnail_url($row).'" alt="'.get_post_meta($row, '_wp_attachment_image_alt', true).'">
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

		<section class="works works_isotope">

            <strong class="works__title"><?= get_the_title($post_id); ?></strong>

			<div class="works__filter">
				<div class="works__filter-item" data-filter="*">all</div>
                <?= $category_string; ?>
			</div>

			<div class="works__list">

				<?= $work_string; ?>

			</div>

			<span class="works__scroll-down">SCROLL DOWN</span>

		</section>

		<?php get_template_part( '/contents/content', 'form'); ?>

	</main>

    <!-- circle -->
    <span class="circle circle_middle circle_mobile" style="top: 95vh; left: 41vw"></span>
    <!-- /circle -->

    <!-- circle -->
    <span class="circle circle_desktop" style="top: 50vh; left: 65vw"></span>
    <!-- /circle -->

    <!-- circle -->
    <span class="circle circle_desktop circle_min" style="top: 150vh; left: 45vw"></span>
    <!-- /circle -->
<?php
get_footer();