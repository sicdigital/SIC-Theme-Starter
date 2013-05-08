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
		
                <?php


$url = get_bloginfo('url');
$url_parsed = parse_url($url);
$host = $url_parsed["host"];

$ref = $_SERVER['HTTP_REFERER'];

if (strpos($ref, $host) == FALSE) {
  $url = "/";
}
  else{
      $url = htmlspecialchars($_SERVER['HTTP_REFERER']);

  }
?>
  <style type="text/css">
    .back{

display:block;
position:absolute;
    top:35px;
    right:40px;
    font-size:12px;
    z-index: 9999;
}
    .share{
    display:block;
    position:absolute;
        top:35px;
        left:40px;
        font-size:12px;
        z-index: 9999;
    }

  </style>          

	<section class="page_body">
        <div id="galleria">
<!--         <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/800px-Biandintz_eta_zaldiak_-_modified2.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/100px-Biandintz_eta_zaldiak_-_modified2.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/1280px-Biandintz_eta_zaldiak_-_modified2.jpg"
                data-title="Biandintz eta zaldiak"
                data-description="Horses on Bianditz mountain, in Navarre, Spain.

                <?php echo "<div class='back alignright' style='margin-top:-20px'><a href='$url'>x</a></div>";?>
                <?php echo "<div class='share alignleft' style='margin-top:-20px'><a href='$url'><img src='" . get_bloginfo('stylesheet_directory') . "/interface/images/share.png'</a></div>";?>
  </a>
 -->

   <?php $get_slider = new WP_Query( 'post_type=gallery' );
   $x = 0;
            while ( $get_slider->have_posts() ) : $get_slider->the_post();?>
    
            <?php $image =  get_post_meta($post->ID, 'image_image', true);?>
            <?php $description = '<h2>' . the_title() . '</h2>' .  get_post_meta($post->ID, 'image_description', true);?>
            <?php $share_link = get_bloginfo('url') . '/image-gallery/#/' . $x; ?>
      
        <a href="<?php echo $image;?>">
            <img 
                src="<?php echo $image;?>",
                data-big="<?php echo $image;?>"
                data-title="<?php the_title();?>"
                data-description="<?php echo $description;?>

                <?php echo "<div class='back alignright' style='margin-top:-20px'><a href='$url'>x</a></div>";?>
                <?php echo '<div class=\'share alignleft\' style=\'margin-top:-20px\'><a href=\'mailto:someone@example.com?body=' . $share_link  . '\'><img src=\'' . get_bloginfo('stylesheet_directory') . '/interface/images/share.png\'</a></div>';?>"
  </a>

                    


 


$x++;
            <?php endwhile;?>

      
    </div>
		
				
			 
		</section><!--page body-->

          <script>

    // Load the classic theme
    Galleria.loadTheme('<?php bloginfo('stylesheet_directory')?>/interface/galleria/themes/fullscreen/galleria.fullscreen.min.js');

    // Initialize Galleria
    Galleria.run('#galleria');


     
            jQuery(document).ready(function() {
                
            jQuery('#galleria').data('galleria').toggleFullscreen(); // toggles the fullscreen
            
            });

    </script>

<?php get_template_part( 'footer' ); ?>
