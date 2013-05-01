<?php 
/*
Template Name: Specialty Items Template
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

	<hr style="margin-top:20px;padding-bottom:20px"/>
<div class="specialty_wrap">


	<div class="specialty_item featured">
	<a href="#"><img src="http://placehold.it/620x255"></a>
	</div>

	<div class="specialty_item last">
	<a href="#"><img src="http://placehold.it/185x255"></a>
	<a href="#" class="overlay">Magestic Gold</a>
	</div>



	<div class="specialty_item one_fourth">
	<a href="#"><img src="http://placehold.it/185x255"</a>
	<a href="#" class="overlay">Magestic Gold</a>
	</div>
		<div class="specialty_item one_fourth">
	<a href="#"><img src="http://placehold.it/185x255"</a>
	<a href="#" class="overlay">Magestic Gold</a>
	</div><div class="specialty_item one_fourth">
	<a href="#"><img src="http://placehold.it/185x255"</a>
	<a href="#" class="overlay">Magestic Gold</a>
	</div><div class="specialty_item one_fourth last">
	<a href="#"><img src="http://placehold.it/185x255"</a>
	<a href="#" class="overlay">Magestic Gold</a>
	</div>


</div><!--specialty_wrap-->
				<?php while ( have_posts() ) : the_post(); ?>	

					<?php the_content(); ?>		



			<?php endwhile; ?>

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>