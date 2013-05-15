<?php
/*
Single.php
The purpose of this page is as a fall back for all blog pages. 
*/
get_template_part( 'header' ); 	?>

<?php $categories = get_categories('taxonomy=type&post_type=specialty'); ?>

		<?php foreach ($categories as $category) : ?>

		<?php

		$the_query = new WP_Query("post_type=specialty&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged."&showposts=-1");

		// $wp_query->query("post_type=specialty&taxonomy=type&term=". $category->slug . "&". $catinclude ."&paged=".$paged."&showposts=-1"); 
	      
		        if ( have_posts() ){ $available_categories[] = $category->slug;}
				endforeach; 

				$term = $_GET["type"];
			    
			    
			  
				 ?>



		<section class="page_body cf">



	<div class="item_category_wrap cf">

		
		 <ul class="item_categories">
			 
		
<?php 
foreach ($available_categories as $cat ){ ?>

				<li><a <?php if($term == $cat ){echo 'class="active"';}?> href="/specialty?type=<?php echo $cat; ?>"><?php echo $cat ?></a></li>	


<?php } ?>
	 	</ul>

	</div>
			
			<?php if ( have_posts() ) : ?>	
			
			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<header class="entry_header">
									
							<h3 class="entry_title"><a href="<?php the_permalink();?>"><?php the_title(); ?></a></h3>
	 								
	 								<div class="entry_meta">
									
								

										<?php if ( comments_open() ) : comments_popup_link( '', '1 comment', '% comments', 'comments-link', 'Comments are off for this post'); endif;?>		
									
									</div><!--entry-meta -->

						</header><!--entry-header -->
					
						
						<div class="entry_image">
						
						<img width="520" height="520" src="<?php echo get_post_meta($post->ID, 'pop_up_image', true);?>">					
						
						</div><!--entry_image-->

						
						<div class="entry_content">
						
							<?php the_content(); ?>

<br  /><a  style="position:relative; background:#795DA4; top:0px;left:0px; padding:10px 10px 0px;" class="pop_share" href="mailto:someone@example.com?body=<?php the_permalink();?>"><img src="<?php bloginfo('stylesheet_directory');?>/interface/images/share_white.png"/></a>
						<div class="contact">
						<a href="mailto:info@pleasebesated.com" class="button">Email For Pricing and Availability</a><br  />
						or call <br  /><a class="phone" href="tel:<?php echo $clickable_phone;?>"><?php echo sic_option('primary_phone');?></a>
	
						<?php $clickable_phone = preg_replace("/[^A-Za-z0-9]/","", sic_option('primary_phone'));?>



					</div>
						
							<?php wp_link_pages( array( 'before' => '<div class="page-link"><span class="page-link-meta">' . __( 'Pages:') . '</span>', 'after' => '</div>', 'next_or_number' => 'number' ) ); ?>
						
						</div><!-- .entry-content -->

						
						<footer class="entry_meta">
						
							<?php edit_post_link( __( 'Edit'), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
						
						</footer><!-- .entry-meta -->

				</article><!-- #post-<?php the_ID(); ?> -->

	<?php comments_template( '', true ); ?>

							<?php get_template_part( 'pagination' ); ?>
			
			<?php endwhile; ?>
			
		

		<?php endif; ?>
							
		</section><!--page body-->

		<?php get_template_part( 'footer' ); ?>
				
