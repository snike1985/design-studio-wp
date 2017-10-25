<?php
/*
Template Name: Landing
*/
get_header();
$post_id = get_the_ID();
/*
$work = get_field('work', $post_id);
$links = get_field('links', $post_id);
$links_title = get_field('links_title', $post_id);*/
$image = get_field('image', $post_id);
$content_2 = get_field('content_2', $post_id);
$content = get_the_content($post_id);
$help_title = get_field('help_title', $post_id);
$help = get_field('help', $post_id);

$contact_cards_title = get_field('contact_cards_title', $post_id);
$contact_cards = get_field('contact_cards', $post_id);

$outsource_title = get_field('outsource_title', $post_id);
$outsource_preface = get_field('outsource_preface', $post_id);
$outsource = get_field('outsource', $post_id);
?>

    <!-- site__content -->
    <main class="site__content">

        <?php if($content || $content_2 || !empty($image)) { ?>
        <!-- about-running -->
        <div class="about-running">

	        <?php if($content) { ?>
            <!-- about-running__preface -->
            <div class="about-running__preface">

                <?php the_content($post_id); ?>

            </div>
            <!-- /about-running__preface -->
	        <?php } ?>

            <?php if($content_2) { ?>
            <!-- about-running__content -->
            <div class="about-running__content">

                <?= $content_2; ?>

            </div>
            <!-- /about-running__content -->
            <?php } ?>

            <?php if(!empty($image)) { ?>
            <!-- about-running__preview -->
            <div class="about-running__preview">

                <!-- about-running__preview-img -->
                <div class="about-running__preview-img">
                    <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>" title="<?= $image['title']; ?>">
                </div>
                <!-- /about-running__preview-img -->

            </div>
            <!-- /about-running__preview -->
            <?php } ?>

            <span class="about-running__skip">
                    <svg viewBox="0 0 31 35">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="landing-agencies" transform="translate(-685.000000, -1758.000000)" fill="#3F4551">
                                <path d="M710.216146,1773.26023 L683.015066,1773.26023 L683.015066,1777.96867 L709.750266,1777.96867 L699.497552,1788.22138 L702.291755,1791.01558 L717.984934,1775.3224 L702.616817,1759.95429 L699.763511,1762.80759 L710.216146,1773.26023 Z" id="arrow-hover-copy" transform="translate(700.500000, 1775.484934) rotate(90.000000) translate(-700.500000, -1775.484934) "></path>
                            </g>
                        </g>
                    </svg>
                </span>

        </div>
        <!-- /about-running -->
        <?php } ?>

        <?php if(!empty($help)) { ?>
        <!-- help -->
        <div class="help">

            <?php if($help_title) { ?>
            <h2><?= $help_title; ?></h2>
            <?php } ?>

            <!-- help__swiper -->
            <div class="help__swiper swiper-container">

                <!-- swiper-wrapper -->
                <div class="swiper-wrapper">

                    <?php foreach ($help as $row) {
                        if(!$row['content']) {
                            continue;
                        }
                     ?>
                    <div class="help__item swiper-slide">

                    <?= $row['content']; ?>

                    </div>
                    <?php } ?>

                </div>
                <!-- /swiper-wrapper -->

            </div>
            <!-- /help__swiper -->

            <!-- help__control -->
            <div class="help__control">

                <div class="help__slider-prev">
                    <svg width="35px" height="31px" viewBox="0 0 35 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-637.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M26.8997883,13.9866839 L-2.84217094e-13,13.9866839 L-2.84217094e-13,17.9571312 L25.8762578,17.9571312 L15.6550927,28.1782963 L18.4626229,30.9858265 L34.0070334,15.4414161 L18.5656173,-2.62900812e-13 L15.7393608,2.82625644 L26.8997883,13.9866839 Z" id="arrow-def" transform="translate(17.003517, 15.492913) scale(-1, 1) translate(-17.003517, -15.492913) "></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="help__pagination"></div>
                <div class="help__slider-next">
                    <svg width="34px" height="31px" viewBox="0 0 34 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-717.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M106.859379,13.9751839 L80,13.9751839 L80,17.9668204 L105.876154,17.9668204 L95.6551883,28.1877866 L98.4674777,31.0000759 L113.999962,15.4675914 L98.5323708,-1.42108547e-14 L95.7082827,2.82408809 L106.859379,13.9751839 Z" id="arrow-hover"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

            </div>
            <!-- /help__control -->

            <span class="help__skip">
                    <svg viewBox="0 0 31 35">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="landing-agencies" transform="translate(-685.000000, -1758.000000)" fill="#3F4551">
                                <path d="M710.216146,1773.26023 L683.015066,1773.26023 L683.015066,1777.96867 L709.750266,1777.96867 L699.497552,1788.22138 L702.291755,1791.01558 L717.984934,1775.3224 L702.616817,1759.95429 L699.763511,1762.80759 L710.216146,1773.26023 Z" id="arrow-hover-copy" transform="translate(700.500000, 1775.484934) rotate(90.000000) translate(-700.500000, -1775.484934) "></path>
                            </g>
                        </g>
                    </svg>
                </span>

        </div>
        <!-- /help -->
        <?php } ?>

        <?php if(!empty($contact_cards)) { ?>
        <!-- contact-cards -->
        <div class="contact-cards">

            <?php if($contact_cards_title) { ?>
            <h2><?= $contact_cards_title; ?></h2>
            <?php } ?>

            <!-- contact-cards__swiper -->
            <div class="contact-cards__swiper swiper-container">

                <!-- swiper-wrapper -->
                <div class="swiper-wrapper">

                    <?php foreach ($contact_cards as $row) { ?>
                    <a href="<?= $row['link']['url']; ?>" class="contact-cards__item swiper-slide" target="<?= $row['link']['target']; ?>">

                        <?php if(!empty($row['image'])) { ?>
                        <!-- contact-cards__icon -->
                        <div class="contact-cards__icon">
                            <?= file_get_contents($row['image']['url']); ?>
                        </div>
                        <!-- /contact-cards__icon -->
                        <?php } ?>

	                    <?php if($row['title']) { ?>
                        <div class="contact-cards__info">
	                        <?= $row['title']; ?>
                        </div>
	                    <?php } ?>

	                    <?php if($row['content']) { ?>
                        <p><?= $row['content']; ?></p>
	                    <?php } ?>

                    </a>
                    <?php } ?>

                </div>
                <!-- /swiper-wrapper -->

            </div>
            <!-- /contact-cards__swiper -->

            <!-- contact-cards__control -->
            <div class="contact-cards__control">

                <div class="contact-cards__slider-prev">
                    <svg width="35px" height="31px" viewBox="0 0 35 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-637.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M26.8997883,13.9866839 L-2.84217094e-13,13.9866839 L-2.84217094e-13,17.9571312 L25.8762578,17.9571312 L15.6550927,28.1782963 L18.4626229,30.9858265 L34.0070334,15.4414161 L18.5656173,-2.62900812e-13 L15.7393608,2.82625644 L26.8997883,13.9866839 Z" id="arrow-def" transform="translate(17.003517, 15.492913) scale(-1, 1) translate(-17.003517, -15.492913) "></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="contact-cards__pagination"></div>
                <div class="contact-cards__slider-next">
                    <svg width="34px" height="31px" viewBox="0 0 34 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-717.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M106.859379,13.9751839 L80,13.9751839 L80,17.9668204 L105.876154,17.9668204 L95.6551883,28.1877866 L98.4674777,31.0000759 L113.999962,15.4675914 L98.5323708,-1.42108547e-14 L95.7082827,2.82408809 L106.859379,13.9751839 Z" id="arrow-hover"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

            </div>
            <!-- /contact-cards__control -->

        </div>
        <!-- /contact-cards -->
        <?php } ?>

        <?php if(!empty($outsource)) { ?>
        <!-- outsource -->
        <div class="outsource">

            <?php if($outsource_title) { ?>
            <h2><?= $outsource_title; ?></h2>
            <?php } ?>

            <?php if($outsource_preface) { ?>
            <!-- outsource__preface -->
            <div class="outsource__preface"><?= $outsource_preface; ?></div>
            <!-- /outsource__preface -->
            <?php } ?>

            <!-- outsource__swiper -->
            <div class="outsource__swiper swiper-container">

                <!-- swiper-wrapper -->
                <div class="swiper-wrapper">

                    <?php foreach ($outsource as $row) { ?>
                    <div class="outsource__item swiper-slide">

		                <?php if(!empty($row['image'])) { ?>
                        <div class="outsource__icon">
	                        <?= file_get_contents($row['image']['url']); ?>
                        </div>
                        <?php } ?>

	                    <?php if($row['content']) { echo $row['content']; } ?>

                    </div>
                    <?php } ?>

                </div>
                <!-- /swiper-wrapper -->

            </div>
            <!-- /outsource__swiper -->

            <!-- outsource__control -->
            <div class="outsource__control">
                <div class="outsource__slider-prev">
                    <svg width="35px" height="31px" viewBox="0 0 35 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-637.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M26.8997883,13.9866839 L-2.84217094e-13,13.9866839 L-2.84217094e-13,17.9571312 L25.8762578,17.9571312 L15.6550927,28.1782963 L18.4626229,30.9858265 L34.0070334,15.4414161 L18.5656173,-2.62900812e-13 L15.7393608,2.82625644 L26.8997883,13.9866839 Z" id="arrow-def" transform="translate(17.003517, 15.492913) scale(-1, 1) translate(-17.003517, -15.492913) "></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="outsource__pagination"></div>
                <div class="outsource__slider-next">
                    <svg width="34px" height="31px" viewBox="0 0 34 31">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-717.000000, -3118.000000)" fill="#3F4551">
                                <g transform="translate(637.000000, 3118.000000)">
                                    <path d="M106.859379,13.9751839 L80,13.9751839 L80,17.9668204 L105.876154,17.9668204 L95.6551883,28.1877866 L98.4674777,31.0000759 L113.999962,15.4675914 L98.5323708,-1.42108547e-14 L95.7082827,2.82408809 L106.859379,13.9751839 Z" id="arrow-hover"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <!-- outsource__control -->

            <span class="outsource__skip">
                    <svg viewBox="0 0 31 35">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="landing-agencies" transform="translate(-685.000000, -1758.000000)" fill="#3F4551">
                                <path d="M710.216146,1773.26023 L683.015066,1773.26023 L683.015066,1777.96867 L709.750266,1777.96867 L699.497552,1788.22138 L702.291755,1791.01558 L717.984934,1775.3224 L702.616817,1759.95429 L699.763511,1762.80759 L710.216146,1773.26023 Z" id="arrow-hover-copy" transform="translate(700.500000, 1775.484934) rotate(90.000000) translate(-700.500000, -1775.484934) "></path>
                            </g>
                        </g>
                    </svg>
                </span>

        </div>
        <!-- /outsource -->
        <?php } ?>

	    <?php get_template_part( '/contents/content', 'form-3'); ?>

    </main>
    <!-- /site__content -->

<?php
get_footer();