<?php 
/*
Template Name: Gallery Page
*/

get_template_part('header');?>	

        <style>

            /* Demo styles */
            /* This rule is read by Galleria to define the gallery height: */
            #galleria{height:320px}

        </style>
		
	<section class="page_body">
        <div id="galleria">

				<?php
$attachments = get_children( array('post_parent' => get_the_ID(), 'post_type' => 'attachment', 'post_mime_type' =>'image', 'orderby' => 'date', 'order' => 'DESC') );

foreach ( $attachments as $attachment_id => $attachment ) {

	if($attachment_id != $thumb_ID){ //don't include the main page thumbnail'
		
	?>
	
	


	<?php $image = wp_get_attachment_url( $attachment_id, 'FULL' );?>
	
 
            <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
                <img 
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                    data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                    data-title="Bowling Balls"
                    data-description="Mendocino county, California, USA.">
            </a>
            <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
                <img 
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                    data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                    data-title="Bowling Balls"
                    data-description="Mendocino county, California, USA.">
            </a>
            <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
                <img 
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                    data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                    data-title="Bowling Balls"
                    data-description="Mendocino county, California, USA.">
            </a>
            <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
                <img 
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                    data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                    data-title="Bowling Balls"
                    data-description="Mendocino county, California, USA.">
            </a>
            <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
                <img 
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                    data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                    data-title="Bowling Balls"
                    data-description="Mendocino county, California, USA.">
            </a>
        </div>
<?php } } ?>
		
				
			 
		</section><!--page body-->

          <script>

    // Load the classic theme
    Galleria.loadTheme('<?php bloginfo('stylesheet_directory')?>/interface/galleria/themes/fullscreen/galleria.fullscreen.min.js');

    // Initialize Galleria
    Galleria.run('#galleria');

    </script>

<?php get_template_part( 'footer' ); ?>
