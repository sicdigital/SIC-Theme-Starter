<?php 
/*
Template Name: Essential Items Template
*/

get_template_part('header');?>	
		
	<section class="page_body cf">
		
		<h1>Event Services</h1>
		<div class="item_category_wrap cf">


<?php
$catArgs = array(
			'taxonomy'=>'type'
			// post_type isn't a valid argument, no matter how you use it.
			);
$categories = get_categories('taxonomy=type&post_type=essentials'); ?>

 <?php foreach ($categories as $category) : ?>
	 
	  <div class="job-cat"><?php echo $category->name; ?></div>
	  <pre>


<?var_dump($category);?></pre>
 <?php endforeach; ?>
 <?php wp_reset_query();?>

		
			<ul class="item_categories">
				<li><a href="#" class="active">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
			</ul>

		</div>



	<div class="essentials_wrap">

   <?php 
            $wp_query = null; $wp_query = $temp;
            $temp = $wp_query;
            $wp_query= null;
            $wp_query = new WP_Query();
            $wp_query->query("post_type=essentials&taxonomy=type&term=stages". "&". $catinclude ."&paged=".$paged.'&showposts=20'); 
            if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
            <?php the_title();?>
            <?php endwhile; ?>

		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>	

		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>	

		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>

	</div>

				<?php while ( have_posts() ) : the_post(); ?>	

					<?php the_content(); ?>		



			<?php endwhile; ?>

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>