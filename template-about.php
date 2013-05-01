<?php 
/*
Template Name: About Page Template
*/

get_template_part('header');?>	
		
	<section class="page_body">

						
				<?php while ( have_posts() ) : the_post(); ?>	
						<h2>Please B Seated</h2>

					<p>Please B Seated We are a different kind of event rental company. We source hard-to-find items that make parties memorable and deliver them with an emphasis on service and reliability. We specialize in rare and exclusive seating, but also offer distinguished china, linens, glassware and more. We have experienced party rental veterans on staff as well as employees who have worked in catering and party planning. You and and your clients can trust that Please B Seated is peerless in the industry. 
					<span class="purple">So Please B Seated your event is about to begin. </span>
					<?php the_content(); ?>		

				<hr style="margin:40px 0px;"  />

				<div class="associations cf">
					<h2>Associations</h2>

				<div class="association one_half cf">
					<div class="thumb">
						<img src="http://placehold.it/140x70"/>
					</div>
					<div class="content">Please B Seated We are a different kind of event rental company.</div>
				</div>
				
				<div class="association one_half last"><div class="thumb">
						<img src="http://placehold.it/140x70"/>
					</div>
					<div class="content">Please B Seated We are a different kind of event rental company.</div></div>
				

		


			<?php endwhile; ?>

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>