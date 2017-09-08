<?php
/*
Template Name: Contact
*/
get_header();
$post_id = 14;

$address = get_field('address', $post_id);
$address_links = get_field('address_links', $post_id);
$address_link = '';
if(!acf_is_empty($address_links)) {
	foreach ($address_links as $row) {
		$link = $row['link'];
		switch ($row['show_link']) {
			case '0':
				$address_link .= '<a href="'.$link['url'].'" target="'.$link['target'].'">'.$link['title'].'</a>';
				break;
			case '1':
				$address_link .= '<a class="contacts__address-mail" href="'.$link['url'].'" target="'.$link['target'].'">'.$link['title'].'</a>';
				break;
		}
	}
}
?>

	<main class="site__content">

		<section class="contacts">

			<div class="contacts__head">

				<h1 class="contacts__title"><?= get_the_title($post_id); ?></h1>

				<?= get_field('subtitle', $post_id); ?>

			</div>
			<?php if($address || $address_link) { ?>
			<address class="contacts__address">
				<?= $address.$address_link; ?>
			</address>
			<?php } ?>

			<p class="contacts__note"><?= get_field('subtitle_bright_block', $post_id); ?></p>

			<div class="contacts__24hours">

				<div class="contacts__24hours-wrap">
					<?= get_field('title_bright_block', $post_id); ?>
				</div>

			</div>

			<div class="contacts__form">

				<strong class="contacts__form-title"><?= get_field('title_form_contact', $post_id); ?></strong>

				<div class="request">

					<div class="request__form">
						<?= do_shortcode('[contact-form-7 id="129" title="Request contact"]'); ?>
					</div>

				</div>

			</div>

		</section>

		<?php get_template_part( '/contents/content', 'form'); ?>

	</main>

	<span class="circle circle_semi circle_mobile" style="top: 356px; right: 60vw"></span>

	<span class="circle circle_desktop" style="top: 1080px; left: 2vw"></span>

	<span class="circle circle_desktop circle_2" style="top: 434px; left: 30vw"></span>

<?php
get_footer();