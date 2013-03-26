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
	<script type="text/javascript"> (less = less || {}).env = 'development';</script>

</head>


<body <?php body_class(); ?>> 

	
	<?php do_action('body_open');?>

	<div class="body_container">
	
	<header id="header">

		<?php do_action('header_before_inner');?>
	
		<div class="inner cf">
			
			<?php do_action('header_inner');?>
			
		</div><!--inner-->
		
		<?php wp_nav_menu( array( 'container' => 'nav', 'container_class' => 'full_horizontal cf', 'menu_id' => 'primary_nav', 'enable_bp_links' => true, 'show_home' => true ) ); ?>
	
	</header>
	
	<?php do_action('after_header');?>

	<section id="content_block" class="cf aside aside-<?php sidebar_position_class();?>">
	
	<?php do_action( 'content_block_outer' ); ?>
					
	<div class="inner cf">

	<?php do_action( 'content_block_inner' ); ?>
		
