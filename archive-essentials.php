<?php 
get_template_part('header');?>	
		
<section class="page_body cf">	

<h1>Event Services</h1>
	
	<div class="item_category_wrap cf">

		<?php $categories = get_categories('taxonomy=type&post_type=essentials'); ?>
		
		 <ul class="item_categories">
			 
			 <?php foreach ($categories as $category) : ?>

				<?php $wp_query->query("post_type=essentials&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged.'&showposts=-1'); 
	      
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


	<div class="essentials_wrap">

		   <?php $wp_query = new WP_Query();

		
	        $wp_query->query("post_type=essentials&taxonomy=type&term=". $term . "&". $catinclude ."&paged=".$paged.'&showposts=20'); 
	       
	        if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

				<div class="essential_item cf">
					
					<h2><?php the_title();?></h2>
					
					<p><?php wpautop(the_content()); ?></p>
					
					<?php edit_post_link(); ?>
				
				</div>	

			 <?php endwhile; ?>
	</div>
				 
</section><!--page body-->

<?php get_template_part( 'footer' ); ?>