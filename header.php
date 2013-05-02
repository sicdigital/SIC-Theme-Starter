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
	
	<header id="header" class="cf">

	<nav id="left_nav" class="upper_nav cf">
		<ul>
			<li><a href="/specialty-items">Speciality Items</a>

				<ul class="drop">
					<li><a href="#">Seating</a></li>
					<li><a href="#">Furniture</a></li>
					<li><a href="#">Glassware</a></li>
					<li><a href="#">Flatware</a></li>
					<li><a href="#">Flatware</a></li>
					<li><a href="#">Flatware</a></li>
					<li><a href="#">Flatware</a></li>
				</ul>
			</li>
			<li><a href="/essential-items">Essential Items</a></li>
			<li><a href="/gallery">Gallery</a></li>
			<li><a href="/blog">Blog</a></li>

		</ul>
	</nav>

	<div id="branding" class="cf">
		<a href="/"><img src="<?php bloginfo('stylesheet_directory');?>/interface/images/pbs-logo-300x125.png"/></a>
	</div><!--branding-->


	<nav id="right_nav" class="upper_nav cf">
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	
	<form id="header_search" action="#" method="post">
		<button type="submit"></button>
		<input type="text" value="" name="EMAIL" class="text" id="" placeholder="search" required="">
	</form>
	
	</nav>

		<?php do_action('header_before_inner');?>
			

	
	</header>

	<?php do_action('after_header');?>

	<section id="content_block" class="cf">
	
	<?php do_action( 'content_block_outer' ); ?>
					

	<?php do_action( 'content_block_inner' ); ?>
		
