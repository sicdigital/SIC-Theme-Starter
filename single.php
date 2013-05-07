<?php
/*
Single.php
The purpose of this page is as a fall back for all blog pages. 
*/

if ( 'essentials' == get_post_type() ){
	wp_redirect( '/essentials', 301 ); 
	exit;
}

if ( 'specialty' == get_post_type() ){
	wp_redirect( '/specialty', 301 ); 
	exit;
}

if ( 'associations' == get_post_type() ){
	wp_redirect( '/about', 301 ); 
	exit;
}

if ( 'staff' == get_post_type() ){
	wp_redirect( '/contact', 301 ); 
	exit;
}
?>


<?php get_template_part( 'header' ); 	?>

		<header class="page_header">											
			<!--INSERT OPTION in page to display or not-->
						<img width="940" height="120" src="<?php echo sic_option('blog_header');?>"/>
			
		</header><!-- .entry-header -->
		
		<section class="page_body cf">

		<section id="primary_content">
			
			<?php if ( have_posts() ) : ?>	
			
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<header class="entry_header">
									
							<h3 class="entry_title"><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
	 								
	 								<div class="entry_meta">
									
										<?php
											printf( __( '<span class="sep">Posted on </span><a href="%1$s" rel="bookmark"><time class="entry-date" datetime="%2$s" pubdate>%3$s</time></a>' ),
												get_permalink(),
												get_the_date( 'c' ),
												get_the_date(),
												get_author_posts_url( get_the_author_meta( 'ID' ) ),
												sprintf( esc_attr__( 'View all posts by %s'), get_the_author() ),
												get_the_author()
											);
										?>

										<?php if ( comments_open() ) : comments_popup_link( '', '1 comment', '% comments', 'comments-link', 'Comments are off for this post'); endif;?>		
									
									</div><!--entry-meta -->

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

	<?php comments_template( '', true ); ?>

							<?php get_template_part( 'pagination' ); ?>
			
			<?php endwhile; ?>
			
			<?php $index_pages = new sicPagination(); echo $index_pages->output();?>
		
		</section><!--primary_content -->

		<?php else : ?>

			<?php echo "Sorry, this article doesnt exist";?>

		<?php endif; ?>
						

		<?php get_template_part( 'sidebar' ); ?>
			
		</section><!--page body-->

		<?php get_template_part( 'footer' ); ?>
				
