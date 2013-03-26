<?php

$portfolio = new PostType("Portfolio", 

	array(
            "label" => 'Portfolio',
            'singular_name' => 'Portfolio Item',
            "public" => true,
            "publicly_queryable" => true,
            "query_var" => true,
            #"menu_icon" => get_stylesheet_directory_uri() . "/article16.png",
            "rewrite" => true,
            "capability_type" => "post",
            "hierarchical" => false,
            "menu_position" => null,
            "supports" => array("title", "editor", 'thumbnail', 'page-attributes', 'post-formats'),
            'has_archive' => true
        )
	);
