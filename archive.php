<?php
/*
Index.php
The purpose of this page is as a fall back for all blog pages. 
*/
?>
<?php get_template_part( 'header' ); 	?>

		<header class="page_header">											
			<!--INSERT OPTION in page to display or not-->
			<h2 class="page_title"><?php wp_title(''); ?></h2> 
			
		</header><!-- .entry-header -->
		
		<section class="page_body">

		<section id="primary_content">
			
			<?php if ( have_posts() ) : ?>	
			
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<header class="entry_header">
									
							<h3 class="entry_title"><?php the_title(); ?></h3>
	 								
					</header><!--entry-header -->
					
						
						<div class="entry_image">
						
							<?php the_post_thumbnail( 'post_featured'); ?>
					
						</div><!--entry_image-->

						
						<div class="entry_content">
						
							<?php the_content(); ?>
						
							<?php wp_link_pages( array( 'before' => '<div class="page-link"><span class="page-link-meta">' . __( 'Pages:') . '</span>', 'after' => '</div>', 'next_or_number' => 'number' ) ); ?>
						
						</div><!-- .entry-content -->

						
						<footer class="entry_meta">
						
							<?php edit_post_link( __( 'Edit'), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
						
						</footer><!-- .entry-meta -->

				</article><!-- #post-<?php the_ID(); ?> -->

			
			<?php endwhile; ?>

			
		<?php endif; ?>
						
		</section><!--primary_content -->

		<?php get_template_part( 'sidebar' ); ?>
			
		</section><!--page body-->

		<?php get_template_part( 'footer' ); ?>