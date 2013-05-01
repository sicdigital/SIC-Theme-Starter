<?php 
/*
Template Name: Contact Page Template
*/

get_template_part('header');?>	
		
	<section class="page_body cf">

						
				<?php while ( have_posts() ) : the_post(); ?>	
						<h2>Please B In Touch</h2>

					<p>Please B Seated We are a different kind of event rental company. We source hard-to-find items that. </span>
					<?php the_content(); ?>		
<br /><br /><br />
				
				<div class="association one_half cf">
					<div class="thumb">
						<img src="http://placehold.it/140x220"/>
					</div>
					<div class="content">
						<h3>Office</h3>
						<p>Please B Seated We are a </p>
						<p>Please B Seated We are a </p><br  /><br  />
						
						<h3>Warehouse</h3>
							<p>Please B Seated We are a </p>
							<p>Please B Seated We are a </p><br  />
						</div>
				</div><!--one_half-->
				
				<div class="one_half last">
 
					<div class="employee cf">
						<div class="thumb">
						<img src="http://placehold.it/140x100"/>
						</div>
						
						<div class="content">
							<span class="name">Dave Jones</span><br  />						 
							<span class="title">Principle</span><br  />	<br  />	
							<a class="email" href="mailto:john@pleasebeseated.com">john@pleasebeseated.com</a></span><br  />						  
							<span class="email">516.519.4823</span><br  />						 
						</div>	
					</div><!--employee-->


								<div class="employee cf">
						<div class="thumb">
						<img src="http://placehold.it/140x100"/>
						</div>
						
						<div class="content">
							<span class="name">Dave Jones</span><br  />						 
							<span class="title">Principle</span><br  />	<br  />	
							<a class="email" href="mailto:john@pleasebeseated.com">john@pleasebeseated.com</a></span><br  />						  
							<span class="email">516.519.4823</span><br  />						 
						</div>	
					</div><!--employee-->

								<div class="employee cf">
						<div class="thumb">
						<img src="http://placehold.it/140x100"/>
						</div>
						
						<div class="content">
							<span class="name">Dave Jones</span><br  />						 
							<span class="title">Principle</span><br  />	<br  />	
							<a class="email" href="mailto:john@pleasebeseated.com">john@pleasebeseated.com</a></span><br  />						  
							<span class="email">516.519.4823</span><br  />						 
						</div>	
					</div><!--employee-->

								<div class="employee cf">
						<div class="thumb">
						<img src="http://placehold.it/140x100"/>
						</div>
						
						<div class="content">
							<span class="name">Dave Jones</span><br  />						 
							<span class="title">Principle</span><br  />	<br  />	
							<a class="email" href="mailto:john@pleasebeseated.com">john@pleasebeseated.com</a></span><br  />						  
							<span class="email">516.519.4823</span><br  />						 
						</div>	
					</div><!--employee-->

				</div><!--one_half last-->

		


			<?php endwhile; ?>

			 
		</section><!--page body-->

<?php get_template_part( 'footer' ); ?>