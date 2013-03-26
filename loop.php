<?php
	
?>
		<section id="primary_content" class="hfeed">
			<?php if ( have_posts() ) : ?>	
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<header class="entry_header">
						<h3 class="entry_title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h3>

						<div class="entry_meta">
							<?php
								printf( __( '<span class="sep">Posted on </span><a href="%1$s" rel="bookmark"><time class="entry-date" datetime="%2$s" pubdate>%3$s</time></a> <span class="sep"> by </span> <span class="author vcard"><a class="url fn n" href="%4$s" title="%5$s">%6$s</a></span>', 'toolbox' ),
									get_permalink(),
									get_the_date( 'c' ),
									get_the_date(),
									get_author_posts_url( get_the_author_meta( 'ID' ) ),
									sprintf( esc_attr__( 'View all posts by %s'), get_the_author() ),
									get_the_author()
								);
							?>
						</div><!-- .entry-meta -->
					</header><!-- .entry-header -->

					<div class="entry_content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-link"><span class="page-link-meta">' . __( 'Pages:') . '</span>', 'after' => '</div>', 'next_or_number' => 'number' ) ); ?>
					</div><!-- .entry-content -->

					<footer class="entry_meta">
						<span class="taxonomy-lists"></span>
						
						<?php
						if ( comments_open() ) :
						  echo '<p>';
						  comments_popup_link( 'No comments yet', '1 comment', '% comments', 'comments-link', 'Comments are off for this post');
						  echo '</p>';
						endif;
						?>						<?php edit_post_link( __( 'Edit'), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
					</footer><!-- .entry-meta -->

				</article><!-- #post-<?php the_ID(); ?> -->

			<?php endwhile; ?>
			<?php $index_pages = new sicPagination();
			echo $index_pages->output();?>
		</section><!-- .hfeed -->
<?php else : ?>

	<?php get_template_part( 'loop-404' ); ?>

<?php endif; ?>
				
