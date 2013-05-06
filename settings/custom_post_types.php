<?php

$slider = new PostType("Slider", 

	array(
            "label" => 'Slider',
            'singular_name' => 'Slider Image',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title"),
            'has_archive' => true
        )
	);


$slider->add_meta_box('Slider Image', array(
 'image' => array('croppedImage',2.93),
'link' => 'text',

));

$essentials = new PostType("Essentials", 

      array(
            "label" => 'Essentials',
            'singular_name' => 'Essential Item',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title", 'editor' ),
            'has_archive' => true
        )
      );




$specialty = new PostType("Specialty", 

      array(
            "label" => 'Specialty',
            'singular_name' => 'Specialty Item',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title", 'thumbnail' ),
            'has_archive' => true
        )
      );

$specialty->add_meta_box('Pop Up', array(
 'image' => array('croppedImage',2.93),
 'description' => 'editor',


));


add_action('init', 'sic_taxonomy');
function sic_taxonomy(){
register_taxonomy('type',
      array( 'specialty','essentials' ),
      array( 'hierarchical' => true,
             'label' => __('Type'),
             'query_var' => 'type',
             'rewrite' => array( 'slug' => 'type' )
      )
   );
}


$associations = new PostType("Associations", 

      array(
            "label" => 'Associations',
            'singular_name' => 'Association',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title", 'editor'),
            'has_archive' => true
        )
      );


$associations->add_meta_box('Preview', array(
 'image' => array('croppedImage',2),

));

$staff = new PostType("Staff", 

      array(
            "label" => 'Staff',
            'singular_name' => 'Staff',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title"),
            'has_archive' => true
        )
      );


$staff->add_meta_box('Info', array(
 'image' => array('croppedImage',2.93),
 'title' => 'text',
 'email' => 'text',
 'phone' => 'text',

));


$slider = new PostType("Gallery", 

      array(
            "label" => 'Gallery',
            'singular_name' => 'Image',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title"),
            'has_archive' => true
        )
      );


$slider->add_meta_box('Image', array(
 'image' => array('croppedImage',2.93),
'link' => 'text',
'description' => 'editor',

));

$slider = new PostType("CallOuts", 

      array(
            "label" => 'Call Outs',
            'singular_name' => 'Call Out',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            "menu_icon" => get_bloginfo('template_directory') . "/framework/admin/images/images.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title","editor"),
            'has_archive' => true
        )
      );


$slider->add_meta_box('Image', array(
 'image' => array('croppedImage',2.93),
'link' => 'text',
'description' => 'editor',

));


$page = new PostType("Page");


$page->add_meta_box('Header Image', array(
 'image' => array('croppedImage',3.41),
));

