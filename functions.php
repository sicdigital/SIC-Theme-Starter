<?php
/**
 *  SIC Theme Framework
 *  This functions file is the gateway to the SIC Theme Framework, here is where you're going to decide what features of the framework you'll be usin
 *  this is also the place to create the theme options, widget areas, navigation menus, and enable/ disbale some of the default WordPress functions that
 *  are available to themes
 *
 * @author Michael Chacon
 * @version 3.0
 * @copyright April 16, 2012
 * @package default
 **/


include 'framework/framework-init.php';
include 'interface/interface-init.php';




remove_filter( 'the_content', 'wpautop' );

add_action('header_inner','header_contact');
add_action( 'content_block_outer' , 'top_slider');
add_action('body_open','responsive_nav');
add_action('sic_footer','sic_footer');

//add_action('wp_footer', 'ajax_footer');


function top_slider(){
	$slides = rwmb_meta( 'sic_plimages', 
		array(
		'type' => 'plupload_image',
		'size' => 'full'));

if($slides){
	foreach($slides as $slide){
		$content[] = '<div><img src="' . $slide[url] . '"/></div>';
	}
		$atts = array( 
		'id' => 'page_slider', 
		'animation' => 'fade',
		'controlNav' => FALSE,

	);
		
		if($content){$slider = new Slider($content, $atts);
		echo $slider->output();}

		// $content2 = 'http://www.youtube.com/watch?v=FtJcSqlHcP4';
		// $player = new SicVideo('', $content2);
		// echo $player->output();
	}
}	
			
function responsive_nav(){
	
	echo '<section class="off-canvas">';
	wp_nav_menu( array( 'container' => 'nav', 'container_class' => 'full_vertical', 'menu_id' => 'primary_nav', 'enable_bp_links' => true, 'show_home' => true ) );
	echo '</section>

	<div id="responsive-nav-overlay"></div>
		<div id="responsive-nav">
		<div class="responsive-button responsive-nav" style="float:left;">
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		</div>
			<ul class="social_links cf">
			<li><a href="http://facebook.com/yogawithapril" target="_blank" class=" facebook"></a></li>
			<li><a href="http://facebook.com/yogawithapril" target="_blank" class=" pinterest"></a></li>
			<li><a href="http://facebook.com/yogawithapril" target="_blank" class=" instagram"></a></li>
			<li><a href="http://facebook.com/yogawithapril" target="_blank" class=" vimeo"></a></li>
			<li><a href="http://twitter.com/aprilmartucci" target="_blank" class=" twitter"></a></li>
			<li><a href="http://youtube.com/aprilmartucci" target="_blank" class=" youtube"></a></li>
		</ul>
	</div>';
	
}



			
function header_contact(){
	
	
	echo '
	<div class="branding one_half">'. sic_logo() .'</div><!--branding-->
	';

}



			
function remove_dashboard_widgets() {
    // Globalize the metaboxes array, this holds all the widgets for wp-admin

    global $wp_meta_boxes;
    //remove all default dashboard apps
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
}

// Hoook into the 'wp_dashboard_setup' action to register our function

add_action('wp_dashboard_setup', 'remove_dashboard_widgets');

$i = 1;
while ( $i <= $sic_theme->settings['footer']['layout']) {

	register_sidebar( array(
	'name'          => 'Footer Area ' .  $i,
	'id'            => 'footer-' . $i,
	'description'   => '',
	'before_widget' => '<div class="widget %2$s">',
	'after_widget'  => '</div>',
	'before_title'  => '<h3 class="widget-title">',
	'after_title'   => '</h3>' 
	));
$i++;
}
