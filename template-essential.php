<?php 
/*
Template Name: Essential Items Template
*/

get_template_part('header');?>	
		
	<section class="page_body cf">
		
		<h1>Event Services</h1>
		<div class="item_category_wrap cf">
		
			<ul class="item_categories">
				<li><a href="#" class="active">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
				<li><a href="#">Seating</a></li>
			</ul>

		</div>

	<div class="essentials_wrap">
		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>	

		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>	

		<div class="essential_item">
			<h2>Staging / Flooring / Ground Cover</h2>
			<strong>Dance Floors</strong><br  />
			<p>Dance Floors<br  />
			Dance Floors <br  /></p>
		</div>

	</div>

				<?php while ( have_posts() ) : the_post(); ?>	

					<?php the_content(); ?>		



			<?php endwhile; ?>

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>