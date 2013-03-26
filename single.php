<?php
/**
 * WordPress Template: Single
 *
 *
 */

get_template_part( 'header' ); ?>

					<?php if ( have_posts() ) : the_post(); ?>

			
						<section id="primary_content" class="hfeed">

							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
								
								<header class="entry_header">
									<h1 class="entry_title"><?php the_title(); ?></h1>

									<div class="entry_meta">
										<?php
											printf( __( '<span class="sep">Posted on </span><a href="%1$s" rel="bookmark"><time class="entry-date" datetime="%2$s" pubdate>%3$s</time></a> <span class="sep"> by </span> <span class="author vcard"><a class="url fn n" href="%4$s" title="%5$s">%6$s</a></span>' ),
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

								<div class="entry-content">
									<?php the_content( __( 'Continue reading <span class="meta_nav">&rarr;</span>' ) ); ?>
									<?php wp_link_pages( array( 'before' => '<div class="page_link"><span class="page_link_meta">' . __( 'Pages:') . '</span>', 'after' => '</div>', 'next_or_number' => 'number' ) ); ?>
								</div><!-- .entry-content -->

								<footer class="entry_meta">
									<span class="tax_link"></span>
									<span class="bookmark_link"><?php printf( __( 'Bookmark the <a href="%s" title="Permalink to %s" rel="bookmark">permalink</a>.'), get_permalink(), the_title_attribute( 'echo=0' ) ); ?></span>
									<span class="comments_link"><?php comments_popup_link( __( 'Leave a comment'), __( '1 Comment'), __( '% Comments' ) ); ?></span>
									<?php edit_post_link( __( 'Edit'), '<span class="meta_sep">|</span> <span class="edit_link">', '</span>' ); ?>
								</footer><!-- .entry-meta -->

							</article><!-- #post-<?php the_ID(); ?> -->	

							<?php comments_template( '', true ); ?>

							<?php get_template_part( 'pagination' ); ?>


						</section><!-- .hfeed -->

					<?php else : ?>

						<?php get_template_part( 'loop-404' ); ?>

					<?php endif; ?>


				<?php get_template_part( 'sidebar' ); ?>

<?php get_template_part( 'footer' ); ?>