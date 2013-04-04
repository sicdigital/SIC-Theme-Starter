 <?php 
/*
Checks to see if there is an individual override of the layout from the page. 
If not loads the default, set in General Options, or theme default. 

if is a left sidebar, this needs to be output before the content. 
*/
GLOBAL $sic_theme;
$position = rwmb_meta('sic_page_layout');


	if($position == "default" || $position == ''){
	$position = $sic_theme->settings['pages']['layout'];
	}

	if(is_single() || is_archive()|| is_home()){
		$position = $sic_theme->settings['blog']['layout'];
				}
$sidebar = rwmb_meta('sic_page_sidebar');
if($sidebar == ""){$sidebar = 'Default';}

if( $position == 'rsidebar' ){ ?>


	<aside id="aside_<?php echo $post->ID;?>" class="aside aside-right">
		<div class="inner">
		
		<?php	
			if(is_home() || is_single() || is_category() || is_archive()){
			 dynamic_sidebar( 'Main Sidebar' );
			}
			
			if(is_page() && $sidebar == 'Default'){
   			 dynamic_sidebar('Main Sidebar');
				
			}
			
			if(is_page() && $sidebar != 'Default'){
				 generated_dynamic_sidebar_webtreats(TRUE);
			 
			}

			?>
			
		</div>
	</aside>
	
<?php } 
if( $position == 'lsidebar'){?>

	<aside id="aside_<?php echo $post->ID; ?>" class="aside aside-left">
		<div class="inner">
			
			<?php if(is_home() || is_single()){
			 dynamic_sidebar( 'Main Sidebar' );
			}
			
			if(is_page() && $sidebar == 'Default'){
   			 dynamic_sidebar('Main Sidebar');
				
			}
			
			if(is_page() && $sidebar != 'Default'){
				
				 generated_dynamic_sidebar_webtreats(TRUE);
			 
			}?>
			
		</div>
</aside>
	
			
<?php
	
}
 ?>
