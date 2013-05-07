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


	<script type="text/javascript">
    jQuery(document).ready(function () {
        jQuery("a[rel^='pbs']").prettyPhoto({
            autoplay_slideshow: false,
            show_title: true,
            default_width: 768, //I have tried playing with these values
            default_height:520, //I have tried playing with these values
            theme: 'pp_default',
            overlay_gallery: false,                  
            social_tools: false
        });
    });
</script>

</head>


<body <?php body_class(); ?>> 

	
	<?php do_action('body_open');?>

	<div class="body_container">
	
	<header id="header" class="cf">

	<nav id="left_nav" class="upper_nav cf">
		<ul>
			<?php 
			/************************************************************
			Specialty Items
			***********************************************************/?> 

			<li><a class="strong" href="/specialty">Speciality Items</a>
			
			<?php $categories = get_categories('taxonomy=type&post_type=specialty'); ?>
		
			 <ul class="drop">
			 
			 <?php foreach ($categories as $category) : 
				$specialty_query = new WP_Query("post_type=specialty&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged.'&showposts=-1');
			
	     
		        if ( $specialty_query->have_posts() ){ ?>

						<li><a href="/specialty?type=<?php echo $category->slug; ?>"><?php echo $category->name; ?></a></li>	
					
					 <?php  } ?>

			 <?php endforeach; 
			wp_reset_postdata();

			 ?>
			
	 	</ul>
		
			</li>
			

			<?php 
			/************************************************************
			Essential Items
			***********************************************************/?> 

			<li><a class="strong" href="/essentials">Essential Items</a>
				<ul class="drop">
				 <?php foreach ($categories as $category) : 

				$essentials_query = new WP_Query("post_type=essentials&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged.'&showposts=-1');
	      
		        if ( $essentials_query->have_posts() ){ ?>

						<li><a href="/essentials?type=<?php echo $category->slug; ?>"><?php echo $category->name; ?></a></li>	
					
					 <?php  } ?>

			 <?php endforeach;?>
				</ul>
			</li>
			

			<?php 
			/************************************************************
			Image Gallery
			***********************************************************/?> 
			<li><a target="_blank" href="/image-gallery">Gallery</a></li>
			


			<?php 
			/************************************************************
			Blog
			***********************************************************/?> 
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
	
	<form id="header_search" action="<?php bloginfo('home'); ?>" method="get">
		<button type="submit"></button>
		<input type="text" value="" name="s" class="text" id="" placeholder="search" required="">
	</form>
	
	</nav>

		<?php do_action('header_before_inner');?>
	
	</header>

	<?php do_action('after_header');?>

	<section id="content_block" class="cf">
	
	<?php do_action( 'content_block_outer' ); ?>
					

	<?php do_action( 'content_block_inner' ); ?>
		
