<?php 
/*
Template Name: Gallery Page
*/

get_template_part('header');?>	
		
	<section class="page_body">

				<?php
$attachments = get_children( array('post_parent' => get_the_ID(), 'post_type' => 'attachment', 'post_mime_type' =>'image', 'orderby' => 'date', 'order' => 'DESC') );

$i = 1;
foreach ( $attachments as $attachment_id => $attachment ) {
	if($attachment_id != $thumb_ID){ //don't include the main page thumbnail'
		
	if($i == 1 || $i % 4 == 1): ?>
	
	<div id="" class="row cf" style="margin-top:20px;">
	
	<?php endif; ?>


	<?php $image = wp_get_attachment_url( $attachment_id, 'FULL' );
	

	$thumb = $image;
	$overlay = $image;?>
<div class="one_fourth <?php if($i % 4 == 0 && $i != 1){echo "last";}?>">		
	<div class="portfolio_item">
		<a target="_blank" data-postid="fsg_post_<?php the_ID();?>" data-imgid="<?php echo $attachment_id;?>" href="<?php echo $overlay;?>">  
			<img class="frame" src="<?php echo $thumb;?>">
		</a>
		
			<a target="_blank" data-postid="fsg_post_<?php the_ID();?>" data-imgid="<?php echo $attachment_id;?>" href="<?php echo $overlay;?>">  
			<img class="frame" src="<?php echo $thumb;?>">
		</a>
	</div><!--portfolio_item-->
</div><!--one_fourth-->
	<?php if($i % 4 == 0 && $i != 1){echo "</div>";}?>

<?php $i++; }

} ?>
		
				
			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>