<?php
/*
Template Name: Portfolio
*/

 get_template_part( 'header' ); ?>
	
			<section id="primary_content">
			
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
										
					<header class="entry_header">											
						<!--INSERT OPTION in page to display or not-->
						<h1 class="entry_title"><?php the_title(); ?></h1> 
						<!---->
					</header><!-- .entry-header -->

					<div class="entry_content">		
											<ul id="filters">
					  <li><a href="#" data-filter="*">show all</a></li>
					  <li><a href="#" data-filter=".metal">metal</a></li>
					  <li><a href="#" data-filter=".transition">transition</a></li>
					  <li><a href="#" data-filter=".alkali, .alkaline-earth">alkali and alkaline-earth</a></li>
					  <li><a href="#" data-filter=":not(.transition)">not transition</a></li>
					  <li><a href="#" data-filter=".metal:not(.transition)">metal but not transition</a></li>
					</ul>	
					<?php
					if ( get_query_var('paged') ) $paged = get_query_var('paged');  
					if ( get_query_var('page') ) $paged = get_query_var('page');
					 
					$query = new WP_Query( array( 'post_type' => 'portfolio', 'paged' => $paged ) );
					 
					if ( $query->have_posts() ) : ?>
						<?php while ( $query->have_posts() ) : $query->the_post(); ?>	
							<div class="portfolio_entry">
								<?php sic_featured();?>
								<?php the_content(); ?>
							</div>
						<?php endwhile; wp_reset_postdata(); ?>
						<!-- show pagination here -->
					<?php else : ?>
						<!-- show 404 error here -->
					<?php endif; ?>
												
					
						<?php while ( have_posts() ) : the_post(); 
		 
					 the_content(); ?>		
					
					</div><!-- .entry-content -->

					<footer class="entry_meta">
						<?php edit_post_link(); ?>
					</footer><!-- .entry-meta -->
										
				</article><!-- #post-<?php the_ID(); ?> -->

				<?php endwhile; ?>


				<?php // get_template_part( 'loop-404' ); ?>

			</section><!--primary_content-->
			
			
			
			
			
			
		

	

			
			
			
			
			

<?php // get_template_part( 'sidebar' ); ?>

<?php get_template_part( 'footer' ); ?>
