<?php 
/*
Template Name: Home Page Template
*/

get_template_part('header');?>	
		
	<section class="page_body cf">

<div class="home_item">
<a href="#"><img src="http://placehold.it/320x300"/>
<div class="overlay">Specialty Items</div>
</a>
</div>

<div class="home_item">
<a href="#"><img src="http://placehold.it/320x300"/>
<div class="overlay">Essential Items</div>

</a>
</div>

<div class="home_item small">
<a href="#"><img src="http://placehold.it/180x300"/>

</div>
		<section id="primary_content">
		
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
				<?php while ( have_posts() ) : the_post(); ?>	
		
				<div class="entry_content">											

					<?php the_content(); ?>		

				</div><!-- .entry-content -->

			</article><!-- #post-<?php the_ID(); ?> -->

			<?php endwhile; ?>

		</section><!--primary_content-->
			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>