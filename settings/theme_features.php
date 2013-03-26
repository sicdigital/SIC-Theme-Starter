<?php
/******************************************************* 
 
  ENABLE THEME FEATURES
  
  Here's the switchboard so to speak, set the features 
  you want to have enabled by setting them to true, 
  could eventually build this in to a secret admin page
   
********************************************************/

define('LESS_CSS_Enabled', true); 

define('Cufon_Enabled', true);

define('PrettyPhoto_Enabled', true);

define('Modernizr_Enabled', false);

define('Backstretch_Enabled', true);
 
/****************************************** 
 
  Register Navigation Menus

*******************************************/
 
register_nav_menus(
	array(
	  'Primary Navigation' => 'Primary Navigation Menu',
	  'Footer Navigation' => 'Footer Menu'
	)
);


/****************************************** 
 
  Register Widget Areas

*******************************************/

register_sidebar( array(
	'name'          => sprintf(__('Main Sidebar')),
	'id'            => 'main-sidebar',
	'description'   => '',
	'before_widget' => '<div class="widget %2$s">',
	'after_widget'  => '</div>',
	'before_title'  => '<h3 class="widget-title">',
	'after_title'   => '</h3>' 
	));



add_theme_support('post-thumbnails');

add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'audio', 'chat', 'video')); 

add_post_type_support( 'page', 'excerpt' );



