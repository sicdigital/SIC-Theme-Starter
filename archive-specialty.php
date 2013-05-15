<?php 
/*
Template Name: Specialty Items Template
*/

get_template_part('header');?>	

		<?php $categories = get_categories('taxonomy=type&post_type=specialty'); ?>

		<?php foreach ($categories as $category) : ?>

		<?php $wp_query->query("post_type=specialty&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged.'&showposts=-1'); 
	      
		        if ( have_posts() ){ $available_categories[] = $category->slug;}
				endforeach; 

				$term = $_GET["type"];
			    
			    if(!$term){$term = $available_categories[0];}
			  
				 ?>



<?php $wp_query->query("post_type=essentials&taxonomy=type&term=". $term . "&". $catinclude ."&paged=".$paged.'&showposts=1');

	        if ( have_posts() ){?>

	      <div class="call_to_action">  Our Specialty Items Include Our one-of-a-kind items. <br  />For more standard fare, please visit our <a href="/essentials?type=<?php echo $term;?>"/>Essential Items</a></div>
	       
	        <?php } 

			  wp_reset_query();?>



		
	<section class="page_body cf">


		
		<h1>Specialty Items</h1>



	<div class="item_category_wrap cf">

		
		 <ul class="item_categories">
			 
		
<?php 
foreach ($available_categories as $cat ){ ?>

				<li><a <?php if($term == $cat ){echo 'class="active"';}?> href="?type=<?php echo $cat; ?>"><?php echo $cat ?></a></li>	


<?php } ?>
	 	</ul>

	</div>

	<hr style="margin-top:20px;padding-bottom:20px"/>
	
	<div class="specialty_wrap">


	<div class="specialty_item featured three_fourth">

		
		 <?php $wp_query = new WP_Query();

		
	        $wp_query->query("post_type=callouts&taxonomy=type&term=". $term . "&". $catinclude ."&paged=".$paged.'&showposts=1'); 
	       

	        if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

			<?php $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'large'); ?>

					<a href="<?php echo get_post_meta($post->ID, 'image_link', true);?>"><img width="640" height="255" src="<?php echo get_post_meta($post->ID, 'image_image', true);?>">
			
			<div class="overlay">
				<div class="triangle"></div>
				<div class="inner">
				<h2><?php the_title();?></h2>
				<p><?php the_content();?></p>
			</div>
			</div>

			</a>
			<?php edit_post_link(); ?>

			 <?php endwhile; ?>

	</div>


		   <?php $wp_query = new WP_Query();

		
	        $wp_query->query("post_type=specialty&taxonomy=type&term=". $term . "&". $catinclude ."&paged=".$paged.'&showposts=-1'); 
	       
	       	$i = 0; 

	        if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

			<?php $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'large'); ?>

	
			
			<div class="specialty_item one_fourth <?php if ($i%4 == 0) echo 'last';?>">
			
			<a class="no-mobile" rel="pbs[]" href="#pop-up-<?php the_ID();?>"><img width="200" height="255" src="<?php echo $large_image_url[0];?>">
			
			<span class="overlay"><div class="inner"><?php the_title();?></div></span></a>

			<a class="mobile-only" href="<?php the_permalink();?>"><img width="200" height="255" src="<?php echo $large_image_url[0];?>">
			
			<span class="overlay"><div class="inner"><?php the_title();?></div></span></a>

			<div id="pop-up-<?php the_ID();?>" style="display:none;">

			<div class="pop_inner">
			
			<div class="pop_left">
	
				<div class="inner">
					<a class="pop_share" href="mailto:?body=<?php the_permalink();?>"><img src="<?php bloginfo('stylesheet_directory');?>/interface/images/share_white.png"/></a>
					<a class="pop_link"  style="color:#fff;position:absolute;top:15px;left:192px;font-size:12px;color:#efefef;font-style:italic;font-weight:200" href="#" onclick="window.prompt('Press CTRL+C, then ENTER', '<?php the_permalink();?>'); return false;">Copy Link</a>
		

					<h2><?php the_title();?></h2>
					
					<?php the_content();?>


						<div class="contact">
						<a href="mailto:info@pleasebesated.com" class="button">Email For Pricing and Availability</a>
						or call <br  /><br  /><a class="phone" href="tel:<?php echo $clickable_phone;?>"><?php echo sic_option('primary_phone');?></a>
	
						<?php $clickable_phone = preg_replace("/[^A-Za-z0-9]/","", sic_option('primary_phone'));?>



					</div>
				</div>

		
			</div>
				
			<div class="pop_right">
					<img width="520" height="520" src="<?php echo get_post_meta($post->ID, 'pop_up_image', true);?>">
			</div>
			</div><!--innner-->
				
			
		


		</div><!--lb-->
			<?php edit_post_link(); ?>
			</div>
		
			
			<?php $i++;?>
			 <?php endwhile; ?>


</div><!--specialty_wrap-->
	

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>