<?php
get_header();

$post_item_category = get_the_terms($post->ID,'post_tag');
$post_item_tags = '';
if(!empty($post_item_category)) {
	$post_item_tags = '<ul class="article__themes">';
	foreach ($post_item_category as $rows) {
		$post_item_tags .= '<li>'.$rows->name.'</li>';
	}
	$post_item_tags .= '</ul>';
}
$post_image = get_field('post_image', $post->ID);
if($post_image) {
    $post_image = '<div class="article__pic show"><img src="'.$post_image['url'].'" alt="'.$post_image['alt'].'" title="'.$post_image['title'].'"></div>';
}
$next_post_string = '<div class="article__pagination-next"></div>';
$previous_post_string = '<div class="article__pagination-prev"></div>';
$next_post = get_next_post(true, '','post_tag');
if(!empty($next_post)) {
   $next_post_string = '<a href="'.get_permalink($next_post->ID).'" class="article__pagination-next">
					<div>next article<span>'.$next_post->post_title.'</span></div>
				</a>';
}
$previous_post = get_previous_post(true, '','post_tag');
if(!empty($previous_post)) {
	$previous_post_string = '<a href="'.get_permalink($previous_post->ID).'" class="article__pagination-prev">
					<div>prev article<span>'.$previous_post->post_title.'</span></div>
				</a>';
}
?>

	<main class="site__content">

		<!-- article -->
		<section class="article">

			<?= $post_image; ?>

			<!-- article_wrapt -->
			<div class="article__wrap">

				<!-- article__info -->
				<div class="article__info">

					<?= $post_item_tags; ?>

					<data value="<?= get_the_time('Y-m-d'); ?>"><?= get_the_time('F d, Y'); ?></data>
				</div>
				<!-- /article__info -->

				<!-- article__content -->
				<div class="article__content">

					<h1><?= get_the_title($post->ID); ?></h1>

					<?php the_content($post->ID); ?>

				</div>
				<!-- /article__content -->

			</div>
			<!-- /article__wrap -->

            <?php if($next_post_string || $previous_post_string){ ?>
			<nav class="article__pagination">
				<?= $next_post_string.$previous_post_string; ?>
			</nav>
			<?php } ?>

		</section>
		<!-- /article -->

        <?php get_template_part( '/contents/content', 'form'); ?>

	</main>
<?php get_footer();