<?php 
/*
Template Name: Home Page Template
*/

get_template_part('header');?>	



	<?php $get_slider = new WP_Query( 'post_type=slider' );
			while ( $get_slider->have_posts() ) : $get_slider->the_post();?>
	
			<?php $image =  get_post_meta($post->ID, 'slider_image_image', true);?>
			<?php $link =  get_post_meta($post->ID, 'slider_image_link', true);?>


			<?php $slides['link'] = $link;
					$slides['image'] = $image;

		$content[] = '<a href="' . $slides["link"] . '"><img alt="' . get_the_title() . '" src="' . $slides["image"] . '"/></a>';?>




			<?php endwhile;?>



		<?php $atts = array( 
		'id' => 'home_page_slider', 
		'animation' => 'slide',
		'controlNav' => TRUE, 
	);
		
		if($content){$slider = new Slider($content, $atts);
		echo $slider->output();}

		// $content2 = 'http://www.youtube.com/watch?v=FtJcSqlHcP4';
		// $player = new SicVideo('', $content2);
		// echo $player->output();
	

?>

			<?php wp_reset_query();?>

		
	<section class="page_body cf">
<div class="home_item">
<a href="<?php echo sic_option('home_image_link');?>"><img width="320" height="300" src="<?php echo sic_option('home_image');?>"/>
<div class="overlay"><?php echo sic_option('home_image_text1');?></div>
</a>
</div>

<div class="home_item">
<a href="<?php echo sic_option('home_image_link2');?>"><img width="320" height="300" src="<?php echo sic_option('home_image2');?>"/>
<div class="overlay"><?php echo sic_option('home_image_text2');?></div>
</a>
</div>

<div class="home_item small">
<a href="<?php echo sic_option('home_image_link3');?>"><img width="180" height="300" src="<?php echo sic_option('home_image3');?>"/></a>

</div>
		<section id="primary_content">
		
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
				<?php while ( have_posts() ) : the_post(); ?>	
		
				<div class="entry_content">											

					<?php the_content(); ?>		

				</div><!-- .entry-content -->

			</article><!-- #post-<?php the_ID(); ?> -->

			<?php endwhile; ?>

		</section><!--primary_content-->
			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>