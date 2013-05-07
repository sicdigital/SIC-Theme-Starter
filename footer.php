<?php wp_footer();?>

</section><!--content_block-->

<footer id="primary">
	<div class="footer_branding"><img src="<?php bloginfo('stylesheet_directory');?>/interface/images/footer-logo-29x26.jpg"/></div>
<ul class="social_links cs">
	<li class="google"><a href="<?php echo sic_option('google_plus');?>" target="_blank"></a></li>
	<li class="twitter"><a href="<?php echo sic_option('twitter');?>" target="_blank"></a></li>
	<li class="facebook"><a href="<?php echo sic_option('facebook');?>" target="_blank"></a></li>
	<li class="pinterest"><a href="<?php echo sic_option('pinterest');?>" target="_blank"></a></li>
	<li class="contact"><a href="/?p=<?php echo sic_option('contact_url');?>">Contact</a></li>
</ul>

<div class="copyright">
	<a href="#legal-info" rel="pbs" >LEGAL</a> | <?php echo sic_option('copyright')?>
	<div id="legal-info" style="display: none;">
		<div class="legal inner"><?php echo sic_option('legal_info');?></div></div>
</div><!--copyright-->

</footer>
</div><!--end body_wrap-->
<?php do_action('sic_footer')?>
</body>
</html>