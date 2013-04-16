<?php /*
Template Name: Page with a Gallery
*/
?>
<?php get_template_part('header');?>	
		
	<header class="page_header">											
		
		<!--INSERT OPTION in page to display or not-->

	</header><!-- .entry-header -->

	<section class="page_body" >


<style type="text/css">
	.gallery_wrap {
		float: left;
		position: relative;
		height: 630px;
		width:50%;
	}

	.page_gallery{
		position:absolute;
		bottom:0px;
	}

	.gallery_link{
		bottom:0px;
	}
	.gallery_link img{ 
		width:65px; 
		height:65px; 
		border-radius:100px;
	}
</style>
			
			<div class="gallery_wrap">
			<div class="page_gallery cf">
			<?php 
				$gallery = sic_post_gallery('FULL', 'gallery_link');
				foreach ($gallery as $key => $value) {
					echo $value;
				}
			?>
		</div>
		</div>
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
