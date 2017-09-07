<?php
$contact_id = 14;
$social_links = get_field('social_links', $contact_id);
$social_links_list = '';
if(!empty($social_links)) {
	foreach ( $social_links as $row ) {
		if(is_array($row['show_in'])) {
			if(!in_array('1', $row['show_in']) || empty($row['image'])) {
				continue;
			}
		}else {
			if($row['show_in'] !== '1' || empty($row['image'])) {
				continue;
			}
		}
		$social_links_list .= '<a class="social__item" href="'.$row['url'].'" target="_blank">'.file_get_contents($row['image']['url']).'</a>';
	}
}

$title_social = get_field('title_social', $contact_id);
if($title_social) {
	$title_social = '<strong class="be-friends__title">'.$title_social.'</strong>';
}

$title_form = get_field('title_form', $contact_id);
if($title_form) {
	$title_form = '<strong class="contact-us__title">'.$title_form.'</strong>';
}
?>
<!-- contact-us -->
<div class="contact-us">

	<?= $title_form.get_field('content_form', $contact_id); ?>

	<!-- contact-us__form -->
	<div class="contact-us__form">
		<?= do_shortcode('[contact-form-7 id="86" title="Contact"]'); ?>
	</div>
	<!-- /contact-us__form -->

</div>
<!-- /contact-us -->

<!-- be-friends -->
<div class="be-friends">

	<?= $title_social; ?>

	<!-- social -->
	<div class="social">
		<?= $social_links_list; ?>
	</div>
	<!-- /social -->

	<?php if(is_front_page()){ ?>
	<!-- be-friends__instagram -->
	<div class="be-friends__instagram">
        <?= do_shortcode('[instashow id="1"]'); ?>
	</div>
	<!-- /be-friends__instagram -->
	<?php } ?>

</div>
<!-- /be-friends -->