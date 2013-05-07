<?php
/*
Index.php
The purpose of this page is as a fall back for all blog pages. 
*/

get_template_part( 'header' ); 	?>

		<header class="page_header">											
			<!--INSERT OPTION in page to display or not-->
						<!--<img width="940" height="120" src="<?php // echo sic_option('blog_header');?>"/>-->
			
		</header><!-- .entry-header -->
		
		<section class="page_body cf">

		<section id="primary_content">
												<h2><?php printf( __( 'Search Results for: %s' ), '<span>' . get_search_query() . '</span>'); ?></h2>

			
			<?php if ( have_posts() ) : ?>	
			
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<header class="entry_header">
									

							<h3 class="entry_title"><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
	 								
	 								<div class="entry_meta">
										<?php if ( comments_open() ) : comments_popup_link( '', '1 comment', '% comments', 'comments-link', 'Comments are off for this post'); endif;?>		
									
									</div><!--entry-meta -->

						</header><!--entry-header -->
					
				
						<div class="entry_content">
						
							<?php the_excerpt(); ?>
						
							<?php wp_link_pages( array( 'before' => '<div class="page-link"><span class="page-link-meta">' . __( 'Pages:') . '</span>', 'after' => '</div>', 'next_or_number' => 'number' ) ); ?>
						
						</div><!-- .entry-content -->

						
						<footer class="entry_meta">
						
							<?php edit_post_link( __( 'Edit'), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
						
						</footer><!-- .entry-meta -->

				</article><!-- #post-<?php the_ID(); ?> -->

			
			<?php endwhile; ?>
			
			<?php $index_pages = new sicPagination(); echo $index_pages->output();?>
		
		</section><!--primary_content -->

		<?php else : ?>

			<?php echo "Sorry, we couldn't find what you were looking for, please try again.";?>

		<?php endif; ?>
						

		<?php get_template_part( 'sidebar' ); ?>
			
		</section><!--page body-->

		<?php get_template_part( 'footer' ); ?>