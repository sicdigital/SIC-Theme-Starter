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
	
 	//	$sections = array(); 

	
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
					'icon' => 'home',
					'icon_class' => 'icon-large',
					'title' => __('Home Page', 'nhp-opts'),
					'desc' => __('<p class="description">This section is for styling the images and links on the home page, items go from left to right. For managing the home page slider please see the sliders section in the main admin navigation. </p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//	'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array(

								array(	
										'id' => 'home_image',
										'type' => 'upload',
										'title' => __('Home Image 1', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Upload this image at 320x300', 'nhp-opts')
										),	
									array('id' => 'home_image_text1',
										'type' => 'text',
										'title' => __('Home Image Text 1', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	
									array('id' => 'home_image_link',
										'type' => 'text',
										'title' => __('Home Image Link 1', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	


										array(	
										'id' => 'home_image2',
										'type' => 'upload',
										'title' => __('Home Image 2', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Upload this image at 320x300', 'nhp-opts')
										),	

										array('id' => 'home_image_text2',
										'type' => 'text',
										'title' => __('Home Image Text 2', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	
										array('id' => 'home_image_link2',
										'type' => 'text',
										'title' => __('Home Image Link 2', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	

												array(	
										'id' => 'home_image3',
										'type' => 'upload',
										'title' => __('Home Image Small', 'nhp-opts'), 
										'sub_desc' => __('Upload your logo to use in the top left of the header. Will replace the Website Title in the header', 'nhp-opts'),
										'desc' => __('Upload this image at 180x300', 'nhp-opts')
										),	


	array('id' => 'home_image_link3',
										'type' => 'text',
										'title' => __('Home Image Link 3', 'nhp-opts'), 
										'sub_desc' => __('Upload this image at 320x300', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	
												)
					);
		
		$sections[] = array(
					'icon' => 'envelope-alt',
					'icon_class' => 'icon-small',
					'title' => __('Contact Page', 'nhp-opts'),
					'desc' => __('<p class="description">All Information Used in the Contact Page</p>', 'nhp-opts'),
					//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
					//You dont have to though, leave it blank for default.
					//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
					//Lets leave this as a blank section, no options just some intro text set above.
					'fields' => array(

									array(	
										'id' => 'office_image',
										'type' => 'upload',
										'title' => __('Office Image', 'nhp-opts'), 
										'sub_desc' => __('Upload the image to use on the contact page office thumbnail 140x220', 'nhp-opts'),
										'desc' => __('Upload this image at 180x300', 'nhp-opts')
										),	

							array('id' => 'email',
										'type' => 'text',
										'title' => __( 'Email Address', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('This is for the email link on the contact page', 'nhp-opts')
										),	
							
							array('id' => 'office_address',
										'type' => 'text',
										'title' => __('Office Address', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	
							array('id' => 'office_city',
										'type' => 'text',
										'title' => __('Office City', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	

							array('id' => 'office_state',
										'type' => 'text',
										'title' => __('Office State', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	
							
							array('id' => 'office_zip',
										'type' => 'text',
										'title' => __('Office Zip', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	


							array('id' => 'warehouse_address',
										'type' => 'text',
										'title' => __('Warehouse Address', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	
							array('id' => 'warehouse_city',
										'type' => 'text',
										'title' => __('Warehouse City', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	

							array('id' => 'warehouse_state',
										'type' => 'text',
										'title' => __('Warehouse State', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	
							
							array('id' => 'warehouse_zip',
										'type' => 'text',
										'title' => __('Warehouse Zip', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('', 'nhp-opts')
										),	
						)
					);

		$sections[] = array(
				'icon' => 'edit',
				'icon_class' => 'icon-large',
		 				'title' => __('Blog Page', 'nhp-opts'),
		 				'desc' => __('<p class="description">Controls for links and copyright information in the footer</p>', 'nhp-opts'),
		 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
		 				//You dont have to though, leave it blank for default.
		 				//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
		 				//Lets leave this as a blank section, no options just some intro text set above.
		 				'fields' => array(
										array('id' => 'blog_header',
										'type' => 'upload',
										'title' => __('Blog Header Image', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('This controls the Blogs Header 940x120', 'nhp-opts')
										),
		 					)//fields
		 				);
					
				
	
		$sections[] = array(
				'icon' => 'twitter-sign',
			'icon_class' => 'icon-large',
		 				'title' => __('Social Media', 'nhp-opts'),
		 				'desc' => __('<p class="description">This page has all the controls for the social media buttons in the footer. </p>', 'nhp-opts'),
		 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
		 				//You dont have to though, leave it blank for default.
		 				//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
		 				//Lets leave this as a blank section, no options just some intro text set above.
		 				'fields' => array(
										array('id' => 'google_plus',
										'type' => 'text',
										'title' => __('Google +', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	

											array('id' => 'facebook',
										'type' => 'text',
										'title' => __('Facebook', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	

												array('id' => 'twitter',
										'type' => 'text',
										'title' => __('Twitter', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	

										array('id' => 'pinterest',
										'type' => 'text',
										'title' => __('Pinterest', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Add the link you would like the image to go to', 'nhp-opts')
										),	

		 					)
		 				);
					
						$sections[] = array(
				'icon' => 'cloud-download',
				'icon_class' => 'icon-large',
		 				'title' => __('Footer', 'nhp-opts'),
		 				'desc' => __('<p class="description">Controls for links and copyright information in the footer</p>', 'nhp-opts'),
		 				//all the glyphicons are included in the options folder, so you can hook into them, or link to your own custom ones.
		 				//You dont have to though, leave it blank for default.
		 				//'icon' => get_bloginfo('template_directory') . '/framework/admin/options-framework/options/img/led-icons/emoticon_grin.png',
		 				//Lets leave this as a blank section, no options just some intro text set above.
		 				'fields' => array(
										array('id' => 'contact_url',
										'type' => 'pages_select',
										'title' => __('Contact Page', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('This controls links to the contact page', 'nhp-opts')
										),

						
										array('id' => 'copyright',
										'type' => 'text',
										'title' => __('Copyright Info', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Copyright information displayed in the footer.', 'nhp-opts')
										),

		 
						
										array('id' => 'legal_info',
										'type' => 'editor',
										'title' => __('Legal Info', 'nhp-opts'), 
										'sub_desc' => __('', 'nhp-opts'),
										'desc' => __('Legal Information displayed when the footer link is clicked. ', 'nhp-opts')
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
	 $args['menu_title'] = __('Theme Options', 'nhp-opts');

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
 
