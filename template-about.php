<?php 
/*
Template Name: About Page Template
*/

get_template_part('header');?>	
		
		<img width="940" src="<?php echo get_post_meta($post->ID, 'header_image_image', true);?>"/>

	<section class="page_body">

						
				<?php while ( have_posts() ) : the_post(); ?>	
				
					<?php the_content(); ?>	

					<?php endwhile; ?>	

				<hr style="margin:40px 0px;"  />
<div class="associations cf">
					<h2>Associations</h2>




			<?php 
$get_transit = new WP_Query( 'post_type=associations' );
$i = 1;
while ( $get_transit->have_posts() ) : $get_transit->the_post();
$image =  get_post_meta($post->ID, 'preview_image', true);?>

<?php if($i % 2 == 1){echo "<div class='cf'>";}?>
							
		<div class="association one_half <?php if($i % 2 == 1){echo "first";} ?> <?php if($i % 2 == 0){echo "last";} ?>">
					<div class="thumb">
						<img width="140" height="70" src="<?php echo $image;?>"/>
					</div>
					<div class="content"><?php the_content();?></div>

	</div>
		
<?php if($i % 2 == 0 && $i != 1){echo "</div>";}?>
		<?php $i++;?>
		
	<?php endwhile;?>



				</div><!--associations-->
			<?php wp_reset_query();?>




		<!-- 		<div class="associations cf">
					<h2>Associations</h2>

				<div class="association one_half">
					<div class="thumb">
						<img src="http://placehold.it/140x70"/>
					</div>
					<div class="content">Please B Seated We are a different kind of event rental company.</div>
				</div>
				
				<div class="association one_half last">

					<div class="thumb">
						<img src="http://placehold.it/140x70"/>
					</div>
					
					<div class="content">Please B Seated We are a different kind of event rental company.</div>
				
				</div><!--associations-->
				
			
		


			

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>