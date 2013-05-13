<?php 
/*
Template Name: Contact Page Template
*/

get_template_part('header');?>	
		
	<header class="page_header">
		<img width="940" src="<?php echo get_post_meta($post->ID, 'header_image_image', true);?>"/>
	</header>

	<section class="page_body cf">

						
				<?php while ( have_posts() ) : the_post(); ?>	
				
					<?php the_content(); ?>	

					<?php endwhile; ?>		
					
					<br /><br /><br /><!--yikes.-->
				
				<div class="association one_half cf">
					<div class="thumb">
						<img width="140" height="220" src="<?php echo sic_option('office_image');?>"/>
					</div>
					<div class="content">
						<h3>Office</h3>
						<a href="mailto:<?php echo sic_option('email');?>"><?php echo sic_option('email');?></a>
						<p><?php echo sic_option('office_address');?></p>
						<p><?php echo sic_option('office_city');?>, <?php echo sic_option('office_state');?>, <?php echo sic_option('office_zip');?></p><br  />
						<?php echo sic_option('primary_phone');?><br  />
						<?php echo sic_option('secondary_phone');?><br  /><br  />
						<h3>Warehouse</h3>
						<p><?php echo sic_option('warehouse_address');?></p>
						<p><?php echo sic_option('warehouse_city');?>, <?php echo sic_option('warehouse_state');?>, <?php echo sic_option('warehouse_zip');?></p><br  />
						</div>
				</div><!--one_half-->

<?php wp_reset_query();?>
						<div class="one_half last">

<?php
$get_transit = new WP_Query( 'post_type=staff' );

while ( $get_transit->have_posts() ) : $get_transit->the_post();
$image =  get_post_meta($post->ID, 'info_image', true);
$name =  get_the_title();
$title =  get_post_meta($post->ID, 'info_title', true);
$email =  get_post_meta($post->ID, 'info_email', true);
$phone =  get_post_meta($post->ID, 'info_phone', true);
?>

	<div class="employee cf">
						<div class="thumb">
						<img src="<?php echo $image;?>"/>
						</div>
						
						<div class="content">
							<span class="name"><?php echo $name;?></span><br  />						 
							<span class="title"><?php echo $title;?></span><br  />
							<a class="email" href="mailto:<?php echo $email;?>"><?php echo $email;?></a></span><br  />						  
							<span class="phone"><?php echo $phone;?></span><br  />						 
						</div>	
					</div>
	<?php endwhile;?>




				
				

					<!--employee
					
					<div class="employee cf">
						<div class="thumb">
						<img src="http://placehold.it/140x100"/>
						</div>
						
						<div class="content">
							<span class="name">Dave Jones</span><br  />						 
							<span class="title">Principle</span><br  />
							<a class="email" href="mailto:john@pleasebeseated.com">john@pleasebeseated.com</a></span><br  />						  
							<span class="phone">516.519.4823</span><br  />						 
						</div>	
					</div>

					employee-->
 

				</div><!--one_half last-->

		



			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>