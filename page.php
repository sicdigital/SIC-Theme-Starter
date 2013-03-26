<?php get_template_part('header');?>	
		
		<header class="entry_header">											
			<!--INSERT OPTION in page to display or not-->
			<h2 class="entry_title"><?php the_title();?></h1> 
			<?php sic_breadcrumbs();?>
			<!---->
		</header><!-- .entry-header -->

			<section id="primary_content">
			
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
			
<?php get_template_part( 'sidebar' ); ?>

<?php get_template_part( 'footer' ); ?>