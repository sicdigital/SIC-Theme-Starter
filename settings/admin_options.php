<?php


/*******************************************************************************

	Show Defaults
  
	Clears out the default array of $sections, to see available fields, uncomment.
	
	$sections = array(); 
	

*******************************************************************************/
		
	//$sections = array(); 
	

/*******************************************************************************

	Sections and Fields
  
	Create New Sections by adding additional arrays to the $sections variable.
	To find all posible options 

*******************************************************************************/
	
	add_filter('redux-opts-sections-sic_theme', 'add_new_section');
    
	function add_new_section($sections){
	
 		//$sections = array(); 

	
		$sections[] = array(
								'icon' => 'cogs',
								'icon_class' => 'icon-large',
				 				'title' => __('General Settings', 'nhp-opts'),
				 				'desc' => __('', 'nhp-opts'),
				 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				 				//You dont have to though, leave it blank for default.
				 				//'icon' => trailingslashit(get_template_directory_uri()).'/includes/admin/options-framework/options/img/led-icons/cog.png',
				 				//Lets leave this as a blank section, no options just some intro text set above.
				 				'fields' => array(
									array(	
										'id' => 'header_logo',
										'type' => 'upload',
										'title' => __('Header Logo', 'nhp-opts'), 
										'sub_desc' => __('Upload your logo to use in the top left of the header. Will replace the Website Title in the header', 'nhp-opts'),
										'desc' => __('Upload your logo to use in the top left of your website. Uploading an image logo replaces the header title on your site.', 'nhp-opts')
										),

									array(	
										'id' => 'favicon',
										'type' => 'upload',
										'title' => __('Favicon', 'nhp-opts'), 
										'sub_desc' => __('Upload your logo to use in the top left of the header. Will replace the Website Title in the header', 'nhp-opts'),
										'desc' => __('This is the tiny icon that goes in your browsers address bar. ', 'nhp-opts')
										),	
							
									array(	
										'id' => 'iphone_retina_icon',
										'type' => 'upload',
										'title' => __('IPhone Retina Icon', 'nhp-opts'), 
										'sub_desc' => __('Upload your logo to use in the top left of the header. Will replace the Website Title in the header', 'nhp-opts'),
										'desc' => __('This is the tiny icon that goes in your browsers address bar. ', 'nhp-opts')
										),	
							
									array(	
										'id' => 'iphone_standard_icon',
										'type' => 'upload',
										'title' => __('Mobile Icon', 'nhp-opts'), 
										'sub_desc' => __('Upload your logo to use in the top left of the header. Will replace the Website Title in the header', 'nhp-opts'),
										'desc' => __('This is the tiny icon that goes in your browsers address bar. ', 'nhp-opts')
										),	
								
						
									));
		
		


		$sections[] = array(
					'icon' => 'tablet',
					'icon_class' => 'icon-large',
					'title' => __('Mobile Settings', 'nhp-opts'),
					'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//	'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array(
           array(
                'id' => 'use_responsive',
                'type' => 'select_hide_below',
                'title' => __('Turn on Responsiveness', Redux_TEXT_DOMAIN), 
                'sub_desc' => __('No validation can be done on this field type', Redux_TEXT_DOMAIN),
                'desc' => __('This field requires certain options to be checked before the below field will be shown.', Redux_TEXT_DOMAIN),
                'options' => array(
                    '1' => array('name' => 'yes', 'allow' => 'true'),
                    '2' => array('name' => 'no', 'allow' => 'false'),
                ), // Must provide key => value(array) pairs for select options
                'std' => '2'

						),

                  array(
                'id' => 'mobile_sliders',
                'type' => 'checkbox',
                'title' => __('Page Sliders for Mobile', Redux_TEXT_DOMAIN), 
                'sub_desc' => __('No validation can be done on this field type', Redux_TEXT_DOMAIN),
                'desc' => __('This field requires certain options to be checked before the below field will be shown.', Redux_TEXT_DOMAIN),
                'switch' => TRUE,
                'options' => array(
               
	               '1' => array('name' => 'no', 'allow' => 'false'),

                    '2' => array('name' => 'yes', 'allow' => 'true'),
                ), // Must provide key => value(array) pairs for select options
                'std' => '2')

					));

		$sections[] = array(
					'icon' => 'cloud-upload',
					'icon_class' => 'icon-large',
					'title' => __('Header', 'nhp-opts'),
					'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//	'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array()
					);

		$sections[] = array(
					'icon' => 'cloud-download',
					'icon_class' => 'icon-large',
					'title' => __('Footer', 'nhp-opts'),
					'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array()
					);
		
		$sections[] = array(
					'icon' => 'envelope-alt',
					'icon_class' => 'icon-small',
					'title' => __('Contact Info', 'nhp-opts'),
					'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array()
					);
	
		$sections[] = array(
				'icon' => 'twitter-sign',
			'icon_class' => 'icon-large',
		 				'title' => __('Social Media', 'nhp-opts'),
		 				'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
		 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
		 				//You dont have to though, leave it blank for default.
		 				//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
		 				//Lets leave this as a blank section, no options just some intro text set above.
		 				'fields' => array()
		 				);
					
				
	$sections[] = array(
			'icon' => 'adjust',
		'icon_class' => 'icon-large',
	 				'title' => __('Styles', 'nhp-opts'),
	 				'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
	 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
	 				//You dont have to though, leave it blank for default.
	 				//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
	 				//Lets leave this as a blank section, no options just some intro text set above.
	 				'fields' => array()
	 				);
				
				
		
				
					$sections[] = array(
						'icon'=> 'th-list',
								'icon_class' => 'icon-large',

				 				'title' => __('Custom Sidebars', 'nhp-opts'),
				 				'desc' => __('<p class="description">This is a section created by adding a filter to the sections array, great to allow child themes, to add/remove sections from the options.</p>', 'nhp-opts'),
				 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
				 				//You dont have to though, leave it blank for default.
				 				//'icon' => trailingslashit(get_template_directory_uri()).'/includes/admin/options-framework/options/img/led-icons/layout_select_sidebar.png',
				 				//Lets leave this as a blank section, no options just some intro text set above.
				 				'fields' => array(
										array(
										'id' => 'multi_sidebar',
										'type' => 'multi_text',
										'title' => __('Add Custom Sidebars', 'nhp-opts'),
										'sub_desc' => __('Add As Many Extra Sidebars as you need here, then you can select which to use in each page, under the page options', 'nhp-opts'),
										'desc' => __('Click Add More to add More Sidebar Areas', 'nhp-opts')
										),

										)//fields
				 				);
				
				
	return $sections;
	
}


/*******************************************************************************

	Theme Options Settings
  
	This filter overides the default settings that come with the options package.

*******************************************************************************/

add_filter('redux-opts-args-sic_theme', 'change_theme_args');

//add_filter('nhp-opts-args-twenty_eleven', 'change_theme_args');

 

 function change_theme_args($args){
	
	 //Set it to dev mode to view the class settings/info in the form - default is false
	 $args['dev_mode'] = FALSE;

	 //Add HTML before the form
	 $args['intro_text'] = __('', 'nhp-opts');
    $args['footer_text'] = '';

	 
	 //Setup custom links in the footer for share icons
	 $args['share_icons']['twitter'] = array(
	 										'link' => 'http://twitter.com/sicdigital',
	 										'title' => 'Folow me on Twitter', 
	 										'img' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_322_twitter.png'
	 										);
	 $args['share_icons']['linked_in'] = array(
	 										'link' => 'http://www.linkedin.com/in/michaelachacon',
	 										'title' => 'Find me on LinkedIn', 
	 										'img' => NHP_OPTIONS_URL.'img/glyphicons/glyphicons_337_linked_in.png'
	 										);

	
	 //Choose to disable the import/export feature
	 $args['show_import_export'] = TRUE;

	 //Choose a custom option name for your theme options, the default is the theme name in lowercase with spaces replaced by underscores
	 $args['opt_name'] = 'sic_theme';

	 //Custom menu icon
	 //$args['menu_icon'] = '';

	 //Custom menu title for options page - default is "Options"
	 $args['menu_title'] = __('SOBE Options', 'nhp-opts');

	 //Custom Page Title for options page - default is "Options"
	 $args['page_title'] = __('Theme Options', 'nhp-opts');

	 //Custom page slug for options page (wp-admin/themes.php?page=***) - default is "nhp_theme_options"
	 $args['page_slug'] = 'theme_options';

	 //Custom page capability - default is set to "manage_options"
	 //$args['page_cap'] = 'manage_options';

	 //custom page location - default 100 - must be unique or will override other items
	 //$args['page_position'] = 10;

	 //Custom page icon class (used to override the page icon next to heading)
	 //$args['page_icon'] = 'icon-themes';
		
	 //Set ANY custom page help tabs - displayed using the new help tab API, show in order of definition		
	 $args['help_tabs'][] = array(
	 							'id' => 'nhp-opts-1',
	 							'title' => __('Theme Information 1', 'nhp-opts'),
	 							'content' => __('<p>This is the tab content, HTML is allowed.</p>', 'nhp-opts')
	 							);


	 //Set the Help Sidebar for the options page - no sidebar by default										
	 $args['help_sidebar'] = __('<p>This is the sidebar content, HTML is allowed.</p>', 'nhp-opts');
			
	
 	return $args;
	
 }//change_theme_args
 
