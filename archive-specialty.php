<?php 
/*
Template Name: Specialty Items Template
*/

get_template_part('header');?>	
		
	<section class="page_body cf">
		
		<h1>Event Services</h1>
	<div class="item_category_wrap cf">

		<?php $categories = get_categories('taxonomy=type&post_type=specialty'); ?>
		
		 <ul class="item_categories">
			 
			 <?php foreach ($categories as $category) : ?>

				<?php $wp_query->query("post_type=specialty&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged.'&showposts=-1'); 
	      
		        if ( have_posts() ){ 
						
						$available_categories[] = $category->slug;
						$term = $_GET["type"];

			    if(!$term){$term = $available_categories[0];}?>

					<li><a <?php if($term == $category->slug ){echo 'class="active"';}?> href="?type=<?php echo $category->slug; ?>"><?php echo $category->name; ?></a></li>	

				<?php } 

			  endforeach; ?>
			 
			 <?php wp_reset_query(); ?>
	 	
	 	</ul>

	</div>

	<hr style="margin-top:20px;padding-bottom:20px"/>
<div class="specialty_wrap">


	<div class="specialty_item featured three_fourth">
	<a href="#"><img src="http://placehold.it/640x255"></a>
	</div>





		   <?php $wp_query = new WP_Query();

		
	        $wp_query->query("post_type=specialty&taxonomy=type&term=". $term . "&". $catinclude ."&paged=".$paged.'&showposts=20'); 
	       
	       	$i = 0; 

	        if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

			<?php $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'large'); ?>


			<div class="specialty_item one_fourth <?php if ($i%4 == 0) echo 'last';?>">
			
			<a rel="pbs[]" href="#pop-up-<?php the_ID();?>"><img width="200" height="255" src="<?php echo $large_image_url[0];?>">
			
			<span class="overlay"><?php the_title();?></span></a>

			
			<div id="pop-up-<?php the_ID();?>" style="display:none;">

			<div class="pop_inner">
			
			<div class="pop_left">
				<div class="inner">
					<h2><?php the_title();?></h2>
					<?php the_content();?>


						<div class="contact">
			<a href="mailto:mike@pleasebesated.com" class="button">Email For Pricing and Availability</a>
							or call 555.555.5555

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