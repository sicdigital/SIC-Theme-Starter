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
			'layout' => '0',
			'display_copyright' => TRUE
		),//footer

		'pages' => array(
			'title' => TRUE,
			'layout' => 'full',
			'sidebars' => $sic_sidebars
			),//page_settings
			
			'blog' => array('title' => TRUE,
							'layout' => 'rsidebar')
	)
);

require_once( SIC_Settings . '/admin_options.php');

require_once( SIC_Settings . '/meta_boxes.php');

require_once( SIC_Settings . '/theme_features.php');

require_once( SIC_Settings . '/custom_post_types.php');

add_image_size( 'post_featured', '796', '398', TRUE ); 

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

	wp_enqueue_style("reset", get_bloginfo('template_directory') . "/framework/css/reset.css", "", "", "all");
		
	//wp_enqueue_style("master", get_bloginfo('template_directory') . "/interface/css/master.less", "less_css", "1.0", "all");
		
	wp_enqueue_style("master-compiled", get_bloginfo('template_directory') . "/interface/css/master.css", "", "1.0", "all");
	
	wp_enqueue_script("functions", get_bloginfo('template_directory') . "/framework/js/functions.js", "jquery");

	//wp_enqueue_script( "cufon_font",  get_bloginfo('template_directory') . "/framework/fonts/avenir.js",fasle, "1.9");

 }// ENQUEUE FRONT END STYLES AND SCRIPTS


	/**
	* Lets LESS CSS work with wp_enqueue_styles
	* Adds rel="stylesheet/less" to the dynamicaaly generated style tags by (filtering) using the WordPress API 
	* Make sure to specify the stylesheets you want LESS to work with in the function.
	*/
	add_filter( 'style_loader_tag', 'less_rel_stylesheets', 10, 2);
	function less_rel_stylesheets($html, $handle){
       
	 if ( ! in_array( $handle, array( 'master' ) ) ) // dont't forget to add all of your LESS stylesheets
	                return $html;

	        return str_replace( "rel='stylesheet'", "rel='stylesheet/less'", $html );

	}

