<?php get_template_part('header');?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					
	<?php while ( have_posts() ) : the_post(); ?>	
						
	<div class="entry_content">											

		<?php the_content(); ?>		

	</div><!-- .entry-content -->

	<footer class="entry_meta">
						
		<?php edit_post_link(); ?>
					
	</footer><!-- .entry-meta -->
					
</article><!-- #post-<?php the_ID(); ?> -->
<?php endwhile; ?>
	
	
	
<script type="text/javascript" charset="utf-8">
jQuery(function($){
      
  var $container = jQuery('#menu_wrap');
      
  $container.isotope({
    itemSelector: '.menu_group'
  });


	$('#filters a').click(function(){
		
    var selector = $(this).attr('data-filter');
	
	$('.active').removeClass('active');
	
	$(this).addClass('active');
	

 	$container.isotope({ filter: selector });

    return false;
  });
  
  
  
      
});

</script>
	<div class="filter-wrap cf">
	<ul id="filters">
	  <li><a href="#" data-filter="*"  style="width:100%; text-align:center;" class="active">Full Menu</a></li>
	  <li><a href="#" data-filter=".breakfast"  style="width:100%; text-align:center;" class="active">Breakfast</a></li>
	  <li><a href="#" data-filter=".snacks"  style="width:100%; text-align:center;" class="active">Kid's Meals, Sides & Snacks</a></li>
	  <li><a href="#" data-filter=".dinner"  style="width:100%; text-align:center;" class="active">Lunches & Dinners</a></li>
	</ul>
	</div>
<div id="menu_wrap">
	<?php
	function menu_loop($section){	
	GLOBAL $post;
	$args = array( 'post_type' => $section, 'posts_per_page' => -1, 'orderby' => 'title', 'order' => 'ASC' );
	$loop = new WP_Query( $args );?>
					
	<ul>
	<?php while ( $loop->have_posts() ) : $loop->the_post();?>
		<li>
			<span class="item">
			<span class="title"><?php the_title();?></span><br  />
			<span class="content">							<?php sic_featured();?>
<?php the_content();?><br  /><a href="#inline-<?php echo the_id();?>" rel="lb" >Nutritional Info</a></span></span>
			<span class="price"><?php echo get_post_meta($post->ID, 'meal_info_price', true);?></span>
	

	
		</li>

			<div class="cf" id="inline-<?php echo the_id();?>" style="display:none;">
					<div class="inline_wrap cf">
						<h1><?php the_title();?></h1>
													<?php sic_featured();?>

						<div class="nutritional_info cf">
						<div class="label one_half">Price</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_price', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Calories</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_calories', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Protein</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_protein', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Carbohydrates</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_carbs', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Fat</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_fat', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Saturated Fat</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_saturated', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Cholesterol</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_cholesterol', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Sodium</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_sodium', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Dietary Fiber</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_fiber', true);?></div>
						</div>

						<div class="nutritional_info cf">
						<div class="label one_half">Weight Watchers Points</div>
						<div class="data one_half last"> <?php echo get_post_meta($post->ID, 'meal_info_fiber', true);?></div>
						</div>
					</div>
				</div>
	<?php endwhile;?>
	</ul>
	<?php }?>
			<div class="menu_group breakfast">
		<div class="inner">
			<div  class="fixedHeader"><h3>Breakfast</h3></div>
			
			<?php menu_loop('breakfast');?>
		</div><!--inner-->
	</div><!--menu_group-->
	
		<div class="menu_group snacks">
		<div class="inner">
			<div  class="fixedHeader"><h3>Kid's Meals, Sides & Snacks</h3></div>
			
			<?php menu_loop('sidessnack');?>
		</div><!--inner-->
	</div><!--menu_group-->
	
	<div class="menu_group dinner">
		<div class="inner">
			<div  class="fixedHeader"><h3>Lunches & Dinners</h3></div>
			
			<?php menu_loop('lunchesdinner');?>
		</div><!--inner-->
	</div><!--menu_group-->
	


	</div><!--menu_wrap-->

	
</div><!--content-->

<?php get_template_part('footer');?>
