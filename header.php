<!DOCTYPE html>

<html <?php language_attributes(); ?> class="no-js"> <!--modernizr classes-->

<head>
	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<meta charset="<?php bloginfo( 'charset' ); ?>" />

	<title><?php wp_title();?></title>
		
	<!-- icons & favicons -->
	<!-- For iPhone 4 -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo sic_option('iphone_retina_icon')?>">
	<!-- For iPad 1-->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo sic_option('iphone_standard_icon')?>">
	<!-- For iPhone 3G, iPod Touch and Android -->
	<link rel="apple-touch-icon-precomposed" href="<?php echo sic_option('iphone_standard_icon')?>">
	<!-- For everything else -->
	<link rel="shortcut icon" href="<?php echo sic_option('favicon')?>">
			
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />

	<?php wp_head();?>

</head>


<body <?php body_class(); ?>> 

	
	<?php do_action('body_open');?>

	<div class="body_container">

	<header id="header">

		<?php do_action('header_before_inner');?>
	
		<div class="inner cf">
			
			<?php do_action('header_inner');?>
		
		<nav class="full_horizontal two_third last">
		
			<?php wp_nav_menu( array( 'container' => NULL, 'menu_id' => 'primary_nav', 'enable_bp_links' => true, 'show_home' => true ) ); ?></nav>
	
		</div><!--inner-->
	
	</header>
	<style>
.mobile_nav a.button{
	width:100%;
	display:block;
	margin-bottom:5px;
	background-color:#DF2585;
	padding:10px 0px;

}
.mobile_nav{
	margin-bottom:20px;
}
	></style>
	<div class="mobile_nav mobile-only">
	<a class="button" href="tel:305-468-9070">305-468-9070</a>
	<a class="button" href="/contact-us">Contact Us</a>
	</div>
	<?php do_action('after_header');?>

	<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>

<style>

@media screen and (min-width: 768px) {
	#content_block{	background-image:url("<?php echo $image[0];?>") !important;
}
}


@media screen and (max-width: 768px) {
body{
	color:#666;
	  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}
h1,h2,h3,h4,h5,h6{
	color:#666;
}

#content_block{
	background:transparent;
}

.page #primary_content{
	width:100% !important;
	float:none;
}
.gallery_wrap{
	float: none !important;
position: relative !important;
height: inherit !important;
width: inherit !important;
}

.page_gallery{
	position:relative !important
}
}

	</style>

	<section id="content_block" class="cf aside aside-<?php sidebar_position_class();?>">
	<div class="content_block_upper cf"></div>
	<?php do_action( 'content_block_outer' ); ?>
					
	<div class="inner cf">

	<?php do_action( 'content_block_inner' ); ?>
		
