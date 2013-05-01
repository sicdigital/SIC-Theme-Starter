<?php 

/**
 * ENQUEUE FRONT END STYLES AND SCRIPTS
 *
 * Hooks in to the wordpress API at template_redirect to load up all the scripts and styles for the front-end.
 * This is the latest action in the API you can run wp_enqueue_scripts & wp_enqueue_style.
 */

$sic_sidebars = get_option('sic_theme');
$sic_sidebars = $sic_sidebars['multi_sidebar'];
$queue = array('Default');
if(is_array($sic_sidebars)){
$sic_sidebars = array_merge($queue, $sic_sidebars);
$sic_sidebars = array_combine($sic_sidebars, $sic_sidebars);
}
else{
	
	$sic_sidebars = $queue;
}

$sic_theme = new SicFramework('sic', array(
		'dev_mode' => FALSE,
		'features' => array(
						'tabs' => TRUE,
						'lightbox' =>  TRUE,
						'isotope' => FALSE),
		
		'design' => array(
			'background' => array( 
				'type' => 'css', //backstretch
				'url' => 'http://dev.framework/wp-content/uploads/2013/03/she-hulk-3.jpg'),
				'layout' => 'responsive'
			),//design
		

		'footer' => array(
			'layout' => '4',
			'display_copyright' => TRUE
		),//footer

		'pages' => array(
			'title' => TRUE,
			'layout' => 'rsidebar',
			'sidebars' => $sic_sidebars
			)//page_settings
	)
);

require_once( SIC_Settings . '/admin_options.php');

require_once( SIC_Settings . '/meta_boxes.php');

require_once( SIC_Settings . '/theme_features.php');

require_once( SIC_Settings . '/custom_post_types.php');

//add_image_size( 'post_featured', '796', '398', TRUE ); 

function my_insert_custom_image_sizes( $sizes ) {
  global $_wp_additional_image_sizes;
  if ( empty($_wp_additional_image_sizes) )
    return $sizes;

  foreach ( $_wp_additional_image_sizes as $id => $data ) {
    if ( !isset($sizes[$id]) )
      $sizes[$id] = ucfirst( str_replace( '-', ' ', $id ) );
  }

  return $sizes;
}
add_filter( 'image_size_names_choose', 'my_insert_custom_image_sizes' );

add_action( 'template_redirect', 'enqueue_scripts_styles');


function enqueue_scripts_styles(){
if(!is_admin()){
	wp_enqueue_script("jquery");
}
				
	wp_enqueue_style("master-compiled", get_bloginfo('template_directory') . "/interface/css/master.css", "", "1.0", "all");
		wp_enqueue_style("reset", get_bloginfo('template_directory') . "/framework/css/reset.css", "", "1.0", "all");

	wp_enqueue_script("functions", get_bloginfo('template_directory') . "/framework/js/functions.js", "jquery");
	wp_enqueue_script("functions-front", get_bloginfo('template_directory') . "/interface/functions.js", '','',TRUE);


	wp_enqueue_script("galleria", get_bloginfo('template_directory') . "/interface/galleria/galleria-1.2.9.min.js", 'jquery' , "1.2.9", FALSE);
	wp_enqueue_script("galleria-class-theme", get_bloginfo('template_directory') . "/interface/galleria/themes/fullscreen/galleria.fullscreen.min.js", 'galleria' , "1.2.9", FALSE);
	wp_enqueue_style("galleria-class-theme", get_bloginfo('template_directory') . "/interface/galleria/themes/fullscreen/galleria.fullscreen.css", 'galleria' , "1.2.9", FALSE);

	//wp_enqueue_script( "cufon_font",  get_bloginfo('template_directory') . "/framework/fonts/avenir.js",fasle, "1.9");

 }// ENQUEUE FRONT END STYLES AND SCRIPTS




//remove_filter( 'the_content', 'wpautop' );

//add_action('header_inner','header_contact');
add_action( 'content_block_outer' , 'top_slider');
//add_action('body_open','responsive_nav');
//add_action('sic_footer','sic_footer');

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
		'animation' => 'slide',
		'controlNav' => TRUE, 
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
	<div class="social contact_info one_half cf last">
	<div class="phone">305-741-4742</div>
	<div class="address">6948 Collins ave #207</div>
	</div>
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


