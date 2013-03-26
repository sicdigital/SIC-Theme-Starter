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
$sic_sidebars = array_merge($queue, $sic_sidebars);
$sic_sidebars = array_combine($sic_sidebars, $sic_sidebars);

$sic_theme = new SicFramework('sic', array(
		'dev_mode' => TRUE,
		'features' => array(
						'tabs' => TRUE,
						'lightbox' =>  TRUE,
						'isotope' => FALSE),
		
		'design' => array(
			'background' => array( 
				'type' => 'none',
				'url' => 'http://dev.framework/wp-content/themes/sic_theme/framework/img/defaults/graffiti_bg.jpg'),
			
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


add_action( 'template_redirect', 'enqueue_scripts_styles');

function enqueue_scripts_styles(){

	wp_enqueue_style("reset", get_bloginfo('template_directory') . "/framework/css/reset.css", "", "", "all");
			
	wp_enqueue_style("navigation", get_bloginfo('template_directory') . "/framework/css/navigation.css", "less_css", "1.0", "all");

	wp_enqueue_style("typography", get_bloginfo('template_directory') . "/framework/css/typography.css", "less_css", "1.0", "all");

	wp_enqueue_style("forms", get_bloginfo('template_directory') . "/framework/css/forms.css", "less_css", "1.0", "all");
	
	wp_enqueue_style("blog", get_bloginfo('template_directory') . "/framework/css/blog.css", "less_css", "1.0", "all");

	wp_enqueue_style("defaults", get_bloginfo('template_directory') . "/framework/css/defaults.css", "less_css", "", "all");

	wp_enqueue_style("media_queries", get_bloginfo('template_directory') . "/interface/css/media-queries.css", "less_css", "1.0", "all");
		
	wp_enqueue_style("master", get_bloginfo('template_directory') . "/interface/css/master.css", "less_css", "1.0", "all");
		
	wp_enqueue_script("jquery");
	
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
       
	 if ( ! in_array( $handle, array( 'master', 'defaults','forms', 'navigation', 'blog', 'typography','media-queries' ) ) ) // dont't forget to add all of your LESS stylesheets
	                return $html;

	        return str_replace( "rel='stylesheet'", "rel='stylesheet/less'", $html );

	}

