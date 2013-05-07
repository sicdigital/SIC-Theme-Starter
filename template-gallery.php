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
  </style>          

	<section class="page_body">
        <div id="galleria">
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/800px-Biandintz_eta_zaldiak_-_modified2.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/100px-Biandintz_eta_zaldiak_-_modified2.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/1280px-Biandintz_eta_zaldiak_-_modified2.jpg"
                data-title="Biandintz eta zaldiak"
                data-description="Horses on Bianditz mountain, in Navarre, Spain.

                <?php echo "<div class='back alignright' style='margin-top:-20px'><a href='$url'>x</a></div>";?>


        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Athabasca_Rail_at_Brule_Lake.jpg/800px-Athabasca_Rail_at_Brule_Lake.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Athabasca_Rail_at_Brule_Lake.jpg/100px-Athabasca_Rail_at_Brule_Lake.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Athabasca_Rail_at_Brule_Lake.jpg/1280px-Athabasca_Rail_at_Brule_Lake.jpg"
                data-title="Athabasca Rail"
                data-description="The Athabasca River railroad track at the mouth of Brulé Lake in Alberta, Canada."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Back-scattering_crepuscular_rays_panorama_1.jpg/1280px-Back-scattering_crepuscular_rays_panorama_1.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Back-scattering_crepuscular_rays_panorama_1.jpg/100px-Back-scattering_crepuscular_rays_panorama_1.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Back-scattering_crepuscular_rays_panorama_1.jpg/1400px-Back-scattering_crepuscular_rays_panorama_1.jpg"
                data-title="Back-scattering crepuscular rays"
                data-description="Picture of the day on Wikimedia Commons 26 September 2010."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_convento_3.jpg/800px-Interior_convento_3.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_convento_3.jpg/120px-Interior_convento_3.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Interior_convento_3.jpg/1400px-Interior_convento_3.jpg"
                data-title="Interior convento"
                data-description="Interior view of Yuriria Convent, founded in 1550."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg/800px-Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg/100px-Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg/1280px-Oxbow_Bend_outlook_in_the_Grand_Teton_National_Park.jpg"
                data-title="Oxbow Bend outlook"
                data-description="View over the Snake River to the Mount Moran with the Skillet Glacier."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Hazy_blue_hour_in_Grand_Canyon.JPG/800px-Hazy_blue_hour_in_Grand_Canyon.JPG">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Hazy_blue_hour_in_Grand_Canyon.JPG/100px-Hazy_blue_hour_in_Grand_Canyon.JPG",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Hazy_blue_hour_in_Grand_Canyon.JPG/1280px-Hazy_blue_hour_in_Grand_Canyon.JPG"
                data-title="Hazy blue hour"
                data-description="Hazy blue hour in Grand Canyon. View from the South Rim."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2909_vallon_moy_res.jpg/800px-2909_vallon_moy_res.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2909_vallon_moy_res.jpg/100px-2909_vallon_moy_res.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2909_vallon_moy_res.jpg/1280px-2909_vallon_moy_res.jpg"
                data-title="Haute Severaisse valley"
                data-description="View of Haute Severaisse valley and surrounding summits from the slopes of Les Vernets."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bohinjsko_jezero_2.jpg/800px-Bohinjsko_jezero_2.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bohinjsko_jezero_2.jpg/100px-Bohinjsko_jezero_2.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bohinjsko_jezero_2.jpg/1280px-Bohinjsko_jezero_2.jpg"
                data-title="Bohinj lake"
                data-description="Bohinj lake (Triglav National Park, Slovenia) in the morning."
            >
        </a>
        <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/800px-Bowling_Balls_Beach_2_edit.jpg">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/100px-Bowling_Balls_Beach_2_edit.jpg",
                data-big="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bowling_Balls_Beach_2_edit.jpg/1280px-Bowling_Balls_Beach_2_edit.jpg"
                data-title="Bowling Balls"
                data-description="Mendocino county, California, USA."
            >
        </a>
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
