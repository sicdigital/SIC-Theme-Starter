<?php get_template_part('header');?>	
		
	<header class="page_header">											
		
		<!--INSERT OPTION in page to display or not-->

	</header><!-- .entry-header -->

	<section class="page_body" >
		
		<section id="primary_content" > 
		
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

		</section><!--primary_content-->
			
	<?php // get_template_part( 'sidebar' ); ?>
			
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>