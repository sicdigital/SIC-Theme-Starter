
/*
* Title                   : Thumbnail Gallery (WP NextGEN Gallery Template)
* Version                 : 1.5
* File                    : jquery.dop.NextGENThumbnailGallery.js
* File Version            : 1.5
* Created / Last Modified : 30 March 2013
* Author                  : Dot on Paper
* Copyright               : © 2012 Dot on Paper
* Website                 : http://www.dotonpaper.net
* Description             : Thumbnail Gallery jQuery Plugin.
*/

(function($){
    $.fn.DOPNextGENThumbnailGallery = function(options){
        var Container = this,
        ID = '0',
        Settings,
        Content,
        
        Width = 900,
        Height = 600,        
        BgColor = 'f1f1f1',        
        BgAlpha = 100,
        ImagesOrder = 'normal',
        ResponsiveEnabled = 'true',

        ThumbnailsPosition = 'bottom',
        ThumbnailsOverImage = 'false',
        ThumbnailsBgColor = 'f1f1f1',
        ThumbnailsBgAlpha = 100,
        ThumbnailsSpacing = 5,
        ThumbnailsPaddingTop = 0,
        ThumbnailsPaddingRight = 5,
        ThumbnailsPaddingBottom = 5,
        ThumbnailsPaddingLeft = 5,
        
        ThumbnailsNavigation = 'mouse',
        ThumbnailsNavigationPrev = 'assets/gui/images/ThumbnailsPrev.png',
        ThumbnailsNavigationPrevHover = 'assets/gui/images/ThumbnailsPrevHover.png',
        ThumbnailsNavigationNext = 'assets/gui/images/ThumbnailsNext.png',
        ThumbnailsNavigationNextHover = 'assets/gui/images/ThumbnailsNextHover.png',
        
        ThumbnailLoader = 'assets/gui/images/ThumbnailLoader.gif',
        ThumbnailWidth = 60,
        ThumbnailHeight = 60,
        ThumbnailWidthDesktop = 60,
        ThumbnailHeightDesktop = 60,
        ThumbnailWidthMobile = 60,
        ThumbnailHeightMobile = 60,
        ThumbnailAlpha = 50,
        ThumbnailAlphaHover = 100,
        ThumbnailAlphaSelected = 100,
        ThumbnailBgColor = 'f1f1f1',
        ThumbnailBgColorHover = '000000',
        ThumbnailBgColorSelected = '000000',
        ThumbnailBorderSize = 2,
        ThumbnailBorderColor = 'f1f1f1',
        ThumbnailBorderColorHover = '000000',
        ThumbnailBorderColorSelected = '000000',
        ThumbnailPaddingTop = 0,
        ThumbnailPaddingRight = 0,
        ThumbnailPaddingBottom = 0,
        ThumbnailPaddingLeft = 0,

        ImageLoader = 'assets/gui/images/ImageLoader.gif',
        ImageBgColor = 'afafaf',
        ImageBgAlpha = 100,
        ImageDisplayType = 'fit',
        ImageDisplayTime = 1000,
        ImageMarginTop = 20,
        ImageMarginRight = 20,
        ImageMarginBottom = 20,
        ImageMarginLeft = 20,
        ImagePaddingTop = 5,
        ImagePaddingRight = 5,
        ImagePaddingBottom = 5,        
        ImagePaddingLeft = 5,
        
        NavigationEnabled = 'true',
        NavigationOverImage = 'true',
        NavigationPrev = 'assets/gui/images/Prev.png',
        NavigationPrevHover = 'assets/gui/images/PrevHover.png',
        NavigationNext = 'assets/gui/images/Next.png',
        NavigationNextHover = 'assets/gui/images/NextHover.png',
        NavigationLightbox = 'assets/gui/images/Lightbox.png',
        NavigationLightboxHover = 'assets/gui/images/LightboxHover.png',
        NavigationTouchDeviceSwipeEnabled = 'true',

        CaptionWidth = 900,
        CaptionHeight = 70,
        CaptionTitleColor = '000000',
        CaptionTextColor = '000000',
        CaptionBgColor = 'ffffff',
        CaptionBgAlpha = 50,
        CaptionPosition = 'bottom',
        CaptionOverImage = 'true',
        CaptionScrollScrubColor = '777777',
        CaptionScrollBgColor = 'e0e0e0',
        CaptionMarginTop = 0,
        CaptionMarginRight = 0,
        CaptionMarginBottom = 0,
        CaptionMarginLeft = 0,
        CaptionPaddingTop = 10,
        CaptionPaddingRight = 10,
        CaptionPaddingBottom = 10,
        CaptionPaddingLeft = 10,
        
        LightboxEnabled = 'true',
        LightboxWindowColor = '000000',
        LightboxWindowAlpha = 80,
        LightboxLoader = 'assets/gui/images/LightboxLoader.gif',
        LightboxBgColor = '000000',
        LightboxBgAlpha = 100,
        LightboxMarginTop = 70,
        LightboxMarginRight = 70,
        LightboxMarginBottom = 70,
        LightboxMarginLeft = 70,
        LightboxPaddingTop = 10,
        LightboxPaddingRight = 10,
        LightboxPaddingBottom = 10,
        LightboxPaddingLeft = 10,
        
        LightboxNavigationPrev = 'assets/gui/images/LightboxPrev.png',
        LightboxNavigationPrevHover = 'assets/gui/images/LightboxPrevHover.png',
        LightboxNavigationNext = 'assets/gui/images/LightboxNext.png',
        LightboxNavigationNextHover = 'assets/gui/images/LightboxNextHover.png',
        LightboxNavigationClose = 'assets/gui/images/LightboxClose.png',
        LightboxNavigationCloseHover = 'assets/gui/images/LightboxCloseHover.png',
        LightboxNavigationInfoBgColor = '000000',
        LightboxNavigationInfoTextColor = 'dddddd',
        LightboxNavigationTouchDeviceSwipeEnabled = 'true',
        
        SocialShareEnabled = 'true',
        SocialShare = 'assets/gui/images/SocialShare.png',
        SocialShareLightbox = 'assets/gui/images/SocialShareLightbox.png',
        
        TooltipEnabled = 'false',
        TooltipBgColor = 'ffffff',
        TooltipStrokeColor = '000000',
        TooltipTextColor = '000000',
        
        Slideshow = 'false',
        SlideshowTime = 5000,
        SlideshowAutostart = 'true',
        SlideshowLoop = 'true',
        SlideshowPlay = 'assets/gui/images/Play.png',
        SlideshowPlayHover = 'assets/gui/images/PlayHover.png',
        SlideshowPause = 'assets/gui/images/Pause.png',
        SlideshowPauseHover = 'assets/gui/images/PauseHover.png',

        AutoHide = 'false',
        AutoHideTime = 2000,
        
        ThumbnailsPositionTime = 600,
        LightboxDisplayTime = 600,
        LightboxNavigationDisplayTime = 600,
        AutoHideDisplayTime = 600,
        
        Images = new Array(),
        Thumbs = new Array(),
        ThumbsWidth = new Array(),
        ThumbsHeight = new Array(),
        CaptionTitle = new Array(),
        CaptionText = new Array(),
        Media = new Array(),
        LightboxMedia = new Array(),
        noImages = 0,
        
        startGalleryID = 0,
        startWith = 1,
        startWithLightbox = false,
        
        initialWidth = Width,
        initialHeight = Height,
        
        MoveThumbnailsLeftID,
        MoveThumbnailsRightID,

        currentThumb = 0,
        thumbsDisplayed = false,
        currentImage = 0,
        imageLoaded = false,
        ImageWidth = 0,
        ImageHeight = 0,
        
        lightboxCurrentImage = 0,
        lightboxImageLoaded = false,
        lightboxImageWidth = 0,
        lightboxImageHeight = 0,

        SlideshowID,
        SlideshowStatus = 'play',

        HideID,
        ItemsHidden,

        socialShareInterval,

        methods = {
                    init:function(){// Init Plugin.
                        return this.each(function(){
                            if (options){
                                $.extend(Data, options);
                            }
                            methods.parseSettings();
                            $(window).bind('resize.DOPNextGENThumbnailGallery', methods.initRP);
                            $(window).bind('scroll.DOPThumbnailGallery', methods.initRPScroll);
                        });
                    },
                    parseSettings:function(){// Parse Settings.
                        ID = $(Container).attr('id').split('DOPNextGENThumbnailGallery')[1];
                        Settings = eval('DOPNextGENThumbnailGallerySettings'+ID);
                        
                        Width = parseInt(Settings['Width']);
                        Height = parseInt(Settings['Height']);
                        BgColor = Settings['BgColor'];
                        BgAlpha = parseInt(Settings['BgAlpha']);
                        ImagesOrder = Settings['ImagesOrder'];
                        ResponsiveEnabled = Settings['ResponsiveEnabled'];
                        ThumbnailsPosition = Settings['ThumbnailsPosition'];
                        ThumbnailsOverImage = Settings['ThumbnailsOverImage'];
                        ThumbnailsBgColor = Settings['ThumbnailsBgColor'];
                        ThumbnailsBgAlpha = parseInt(Settings['ThumbnailsBgAlpha']);
                        ThumbnailsSpacing = parseInt(Settings['ThumbnailsSpacing']);
                        ThumbnailsPaddingTop = parseInt(Settings['ThumbnailsPaddingTop']);
                        ThumbnailsPaddingRight = parseInt(Settings['ThumbnailsPaddingRight']);
                        ThumbnailsPaddingBottom = parseInt(Settings['ThumbnailsPaddingBottom']);
                        ThumbnailsPaddingLeft = parseInt(Settings['ThumbnailsPaddingLeft']);
                        ThumbnailsNavigation = Settings['ThumbnailsNavigation'];
                        ThumbnailsNavigationPrev = Settings['ThumbnailsNavigationPrev'];
                        ThumbnailsNavigationPrevHover = Settings['ThumbnailsNavigationPrevHover'];
                        ThumbnailsNavigationNext = Settings['ThumbnailsNavigationNext'];
                        ThumbnailsNavigationNextHover = Settings['ThumbnailsNavigationNextHover'];
                        ThumbnailLoader = Settings['ThumbnailLoader'];
                        ThumbnailWidth = parseInt(Settings['ThumbnailWidth']);
                        ThumbnailHeight = parseInt(Settings['ThumbnailHeight']);
                        ThumbnailWidthDesktop = parseInt(Settings['ThumbnailWidth']);
                        ThumbnailHeightDesktop = parseInt(Settings['ThumbnailHeight']);
                        ThumbnailWidthMobile = parseInt(Settings['ThumbnailWidthMobile']);
                        ThumbnailHeightMobile = parseInt(Settings['ThumbnailHeightMobile']);
                        ThumbnailAlpha = parseInt(Settings['ThumbnailAlpha']);
                        ThumbnailAlphaHover = parseInt(Settings['ThumbnailAlphaHover']);
                        ThumbnailAlphaSelected = parseInt(Settings['ThumbnailAlphaSelected']);
                        ThumbnailBgColor = Settings['ThumbnailBgColor'];
                        ThumbnailBgColorHover = Settings['ThumbnailBgColorHover'];
                        ThumbnailBgColorSelected = Settings['ThumbnailBgColorSelected'];
                        ThumbnailBorderSize = parseInt(Settings['ThumbnailBorderSize']);
                        ThumbnailBorderColor = Settings['ThumbnailBorderColor'];
                        ThumbnailBorderColorHover = Settings['ThumbnailBorderColorHover'];
                        ThumbnailBorderColorSelected = Settings['ThumbnailBorderColorSelected'];
                        ThumbnailPaddingTop = parseInt(Settings['ThumbnailPaddingTop']);
                        ThumbnailPaddingRight = parseInt(Settings['ThumbnailPaddingRight']);
                        ThumbnailPaddingBottom = parseInt(Settings['ThumbnailPaddingBottom']);
                        ThumbnailPaddingLeft = parseInt(Settings['ThumbnailPaddingLeft']);
                        ImageLoader = Settings['ImageLoader'];
                        ImageBgColor = Settings['ImageBgColor'];
                        ImageBgAlpha = parseInt(Settings['ImageBgAlpha']);
                        ImageDisplayType = Settings['ImageDisplayType'];
                        ImageDisplayTime = parseInt(Settings['ImageDisplayTime']);
                        ImageMarginTop = parseInt(Settings['ImageMarginTop']);
                        ImageMarginRight = parseInt(Settings['ImageMarginRight']);
                        ImageMarginBottom = parseInt(Settings['ImageMarginBottom']);
                        ImageMarginLeft = parseInt(Settings['ImageMarginLeft']);
                        ImagePaddingTop = parseInt(Settings['ImagePaddingTop']);
                        ImagePaddingRight = parseInt(Settings['ImagePaddingRight']);
                        ImagePaddingBottom = parseInt(Settings['ImagePaddingBottom']);
                        ImagePaddingLeft = parseInt(Settings['ImagePaddingLeft']);
                        NavigationEnabled = Settings['NavigationEnabled'];
                        NavigationOverImage = Settings['NavigationOverImage'];
                        NavigationPrev = Settings['NavigationPrev'];
                        NavigationPrevHover = Settings['NavigationPrevHover'];
                        NavigationNext = Settings['NavigationNext'];
                        NavigationNextHover = Settings['NavigationNextHover'];
                        NavigationLightbox = Settings['NavigationLightbox'];
                        NavigationLightboxHover = Settings['NavigationLightboxHover'];
                        NavigationTouchDeviceSwipeEnabled = Settings['NavigationTouchDeviceSwipeEnabled'];
                        CaptionWidth = parseInt(Settings['CaptionWidth']);
                        CaptionHeight = parseInt(Settings['CaptionHeight']);
                        CaptionTitleColor = Settings['CaptionTitleColor'];
                        CaptionTextColor = Settings['CaptionTextColor'];
                        CaptionBgColor = Settings['CaptionBgColor'];
                        CaptionBgAlpha = parseInt(Settings['CaptionBgAlpha']);
                        CaptionPosition = Settings['CaptionPosition'];
                        CaptionOverImage = Settings['CaptionOverImage'];
                        CaptionScrollScrubColor = Settings['CaptionScrollScrubColor'];
                        CaptionScrollBgColor = Settings['CaptionScrollBgColor'];
                        CaptionMarginTop = parseInt(Settings['CaptionMarginTop']);
                        CaptionMarginRight = parseInt(Settings['CaptionMarginRight']);
                        CaptionMarginBottom = parseInt(Settings['CaptionMarginBottom']);
                        CaptionMarginLeft = parseInt(Settings['CaptionMarginLeft']);
                        CaptionPaddingTop = parseInt(Settings['CaptionPaddingTop']);
                        CaptionPaddingRight = parseInt(Settings['CaptionPaddingRight']);
                        CaptionPaddingBottom = parseInt(Settings['CaptionPaddingBottom']);
                        CaptionPaddingLeft = parseInt(Settings['CaptionPaddingLeft']);
                        LightboxEnabled = Settings['LightboxEnabled'];
                        LightboxWindowColor = Settings['LightboxWindowColor'];
                        LightboxWindowAlpha = parseInt(Settings['LightboxWindowAlpha']);
                        LightboxLoader = Settings['LightboxLoader'];
                        LightboxBgColor = Settings['LightboxBgColor'];
                        LightboxBgAlpha = parseInt(Settings['LightboxBgAlpha']);
                        LightboxMarginTop = parseInt(Settings['LightboxMarginTop']);
                        LightboxMarginRight = parseInt(Settings['LightboxMarginRight']);
                        LightboxMarginBottom = parseInt(Settings['LightboxMarginBottom']);
                        LightboxMarginLeft = parseInt(Settings['LightboxMarginLeft']);
                        LightboxPaddingTop = parseInt(Settings['LightboxPaddingTop']);
                        LightboxPaddingRight = parseInt(Settings['LightboxPaddingRight']);
                        LightboxPaddingBottom = parseInt(Settings['LightboxPaddingBottom']);
                        LightboxPaddingLeft = parseInt(Settings['LightboxPaddingLeft']);
                        LightboxNavigationPrev = Settings['LightboxNavigationPrev'];
                        LightboxNavigationPrevHover = Settings['LightboxNavigationPrevHover'];
                        LightboxNavigationNext = Settings['LightboxNavigationNext'];
                        LightboxNavigationNextHover = Settings['LightboxNavigationNextHover'];
                        LightboxNavigationClose = Settings['LightboxNavigationClose'];
                        LightboxNavigationCloseHover = Settings['LightboxNavigationCloseHover'];
                        LightboxNavigationInfoBgColor = Settings['LightboxNavigationInfoBgColor'];
                        LightboxNavigationInfoTextColor = Settings['LightboxNavigationInfoTextColor'];
                        LightboxNavigationTouchDeviceSwipeEnabled = Settings['LightboxNavigationTouchDeviceSwipeEnabled'];
                        SocialShareEnabled = Settings['SocialShareEnabled'];
                        SocialShare = Settings['SocialShare'];
                        SocialShareLightbox = Settings['SocialShareLightbox'];
                        TooltipEnabled = Settings['TooltipEnabled'];
                        TooltipBgColor = Settings['TooltipBgColor'];
                        TooltipStrokeColor = Settings['TooltipStrokeColor'];
                        TooltipTextColor = Settings['TooltipTextColor'];
                        Slideshow = Settings['Slideshow'];
                        SlideshowTime = parseInt(Settings['SlideshowTime']);
                        SlideshowAutostart = Settings['SlideshowAutostart'];
                        SlideshowLoop = Settings['SlideshowLoop'];
                        SlideshowPlay = Settings['SlideshowPlay'];
                        SlideshowPlayHover = Settings['SlideshowPlayHover'];
                        SlideshowPause = Settings['SlideshowPause'];
                        SlideshowPauseHover = Settings['SlideshowPauseHover'];
                        AutoHide = Settings['AutoHide'];
                        AutoHideTime = parseInt(Settings['AutoHideTime']);

                        if (SlideshowAutostart == 'true'){
                            SlideshowStatus = 'play';                                
                        }
                        else{
                            SlideshowStatus = 'pause';
                        }

                        methods.parseContent();
                    },
                    parseContent:function(){// Parse Content.
                        Content = eval('DOPNextGENThumbnailGalleryContent'+ID);
                        
                        $.each(Content, function(index){
                            $.each(Content[index], function(key){
                                switch (key){
                                    case 'Image':
                                        Images.push(prototypes.acaoBuster(Content[index][key])); break;
                                    case 'Thumb':
                                        Thumbs.push(prototypes.acaoBuster(Content[index][key])); break;
                                    case 'CaptionTitle':
                                        CaptionTitle.push(Content[index][key]);break;
                                    case 'CaptionText':
                                        CaptionText.push(Content[index][key]);break;
                                    case 'Media':
                                        Media.push(Content[index][key]);break;
                                    case 'LightboxMedia':
                                        LightboxMedia.push(Content[index][key]);break;
                                }
                            });
                        });

                        noImages = Images.length;
                            
                        if (ImagesOrder == 'random'){
                            methods.randomizeImages();
                        }
                        
                        initialWidth = Width;
                        initialHeight = Height;
                        
                        if (ResponsiveEnabled == 'true'){  
                            methods.rpResponsive();   
                        }
                        methods.initGallery();
                    },
                    randomizeImages:function(){
                        var indexes = new Array(), i,
                        auxImages = new Array(),
                        auxThumbs = new Array(),
                        auxCaptionTitle = new Array(),
                        auxCaptionText = new Array(),
                        auxMedia = new Array(),
                        auxLightboxMedia = new Array();
                        
                        for (i=0; i<noImages; i++){
                            indexes[i] = i;
                            auxImages[i] = Images[i];
                            auxThumbs[i] = Thumbs[i];
                            auxCaptionTitle[i] = CaptionTitle[i];
                            auxCaptionText[i] = CaptionText[i];
                            auxMedia[i] = Media[i];
                            auxLightboxMedia[i] = LightboxMedia[i];
                        }
                        
                        indexes =  prototypes.randomize(indexes);
                        
                        for (i=0; i<noImages; i++){
                            Images[i] = auxImages[indexes[i]];
                            Thumbs[i] = auxThumbs[indexes[i]];
                            CaptionTitle[i] = auxCaptionTitle[indexes[i]];
                            CaptionText[i] = auxCaptionText[indexes[i]];
                            Media[i] = auxMedia[indexes[i]];
                            LightboxMedia[i] = auxLightboxMedia[indexes[i]];
                        }
                    },
                    initGallery:function(){// Init the Gallery
                        var HTML = new Array(),
                        LightboxHTML = new Array();

                        HTML.push('<div class="DOP_NextGENThumbnailGallery_Container">');

                        HTML.push('    <div class="DOP_NextGENThumbnailGallery_Background"></div>');

                        HTML.push('    <div class="DOP_NextGENThumbnailGallery_ThumbnailsContainer">');
                        HTML.push('        <div class="DOP_NextGENThumbnailGallery_ThumbnailsBg"></div>');
                        HTML.push('        <div class="DOP_NextGENThumbnailGallery_ThumbnailsWrapper">');
                        HTML.push('            <div class="DOP_NextGENThumbnailGallery_Thumbnails"></div>');
                        HTML.push('        </div>');                     
                        if (ThumbnailsNavigation == 'arrows' && !prototypes.isTouchDevice()){
                            HTML.push('    <div class="DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft">');
                            HTML.push('        <img src="'+ThumbnailsNavigationPrev+'" class="normal" alt="" />');
                            HTML.push('        <img src="'+ThumbnailsNavigationPrevHover+'" class="hover" alt="" />');  
                            HTML.push('    </div>');
                            HTML.push('    <div class="DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight">');
                            HTML.push('        <img src="'+ThumbnailsNavigationNext+'" class="normal" alt="" />');
                            HTML.push('        <img src="'+ThumbnailsNavigationNextHover+'" class="hover" alt="" />');  
                            HTML.push('    </div>');
                        }
                        HTML.push('    </div>');

                        HTML.push('    <div class="DOP_NextGENThumbnailGallery_ImageWrapper">');
                        HTML.push('        <div class="DOP_NextGENThumbnailGallery_ImageBg"></div>');
                        HTML.push('        <div class="DOP_NextGENThumbnailGallery_Image"></div>');
                        HTML.push('        <div class="DOP_NextGENThumbnailGallery_Caption">');
                        HTML.push('            <div class="DOP_NextGENThumbnailGallery_CaptionBg"></div>');
                        HTML.push('            <div class="DOP_NextGENThumbnailGallery_CaptionTextWrapper">');
                        HTML.push('                <div class="DOP_NextGENThumbnailGallery_CaptionTitle"></div>');
                        HTML.push('                <div class="DOP_NextGENThumbnailGallery_CaptionTextContainer">');
                        HTML.push('                    <div class="DOP_NextGENThumbnailGallery_CaptionText"></div>');
                        HTML.push('                </div>');
                        HTML.push('            </div>');
                        HTML.push('        </div>');
                        HTML.push('    </div>');

                        if (NavigationEnabled == 'true'){
                            HTML.push('    <div class="DOP_NextGENThumbnailGallery_NavigationButtons">');
                            HTML.push('        <div class="DOP_NextGENThumbnailGallery_NavigationLeft">');
                            HTML.push('            <img src="'+NavigationPrev+'" class="normal" alt="" />');
                            HTML.push('            <img src="'+NavigationPrevHover+'" class="hover" alt="" />');  
                            HTML.push('        </div>');
                            HTML.push('        <div class="DOP_NextGENThumbnailGallery_NavigationRight">');
                            HTML.push('            <img src="'+NavigationNext+'" class="normal" alt="" />');
                            HTML.push('            <img src="'+NavigationNextHover+'" class="hover" alt="" />');  
                            HTML.push('        </div>');
                            HTML.push('        <br class="DOP_NextGENThumbnailGallery_Clear" />');
                            HTML.push('   </div>');
                            HTML.push('   <div class="DOP_NextGENThumbnailGallery_NavigationExtraButtons">');
                            if (LightboxEnabled == 'true'){
                                HTML.push('        <div class="DOP_NextGENThumbnailGallery_NavigationLightbox">');
                                HTML.push('            <img src="'+NavigationLightbox+'" class="normal" alt="" />');
                                HTML.push('            <img src="'+NavigationLightboxHover+'" class="hover" alt="" />');  
                                HTML.push('        </div>');
                            }
                            if (Slideshow == 'true'){
                                HTML.push('        <div class="DOP_NextGENThumbnailGallery_NavigationPlay">');
                                HTML.push('            <img src="'+SlideshowPlay+'" class="normal" alt="" />');
                                HTML.push('            <img src="'+SlideshowPlayHover+'" class="hover" alt="" />');  
                                HTML.push('        </div>');
                                HTML.push('        <div class="DOP_NextGENThumbnailGallery_NavigationPause">');
                                HTML.push('            <img src="'+SlideshowPause+'" class="normal" alt="" />');
                                HTML.push('            <img src="'+SlideshowPauseHover+'" class="hover" alt="" />');  
                                HTML.push('        </div>');
                            }
                            if (SocialShareEnabled == 'true'){
                                HTML.push('        <div class="DOP_NextGENThumbnailGallery_SocialShare"></div>');
                            } 
                            HTML.push('        <br class="DOP_NextGENThumbnailGallery_Clear" />');
                            HTML.push('    </div>');
                        }
                        
                        if (LightboxEnabled == 'true'){
                            LightboxHTML.push('    <div class="DOP_NextGENThumbnailGallery_LightboxWrapper" id="DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+'">');
                            LightboxHTML.push('        <div class="DOP_NextGENThumbnailGallery_LightboxWindow"></div>');
                            LightboxHTML.push('        <div class="DOP_NextGENThumbnailGallery_LightboxLoader"><img src="'+LightboxLoader+'" alt="" /></div>');
                            LightboxHTML.push('        <div class="DOP_NextGENThumbnailGallery_LightboxContainer">');
                            LightboxHTML.push('            <div class="DOP_NextGENThumbnailGallery_LightboxBg"></div>');
                            LightboxHTML.push('            <div class="DOP_NextGENThumbnailGallery_Lightbox"></div>');
                            LightboxHTML.push('            <div class="DOP_NextGENThumbnailGallery_LightboxNavigation">');
                            LightboxHTML.push('                <div class="DOP_NextGENThumbnailGallery_LightboxNavigationExtraButtons">');
                            LightboxHTML.push('                    <div class="DOP_NextGENThumbnailGallery_LightboxNavigation_CloseBtn">');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationClose+'" class="normal" alt="" />');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationCloseHover+'" class="hover" alt="" />');   
                            LightboxHTML.push('                    </div>');
                            if (SocialShareEnabled == 'true'){
                                LightboxHTML.push('                    <div class="DOP_NextGENThumbnailGallery_LightboxSocialShare"></div>');
                            } 
                            LightboxHTML.push('                    <br class="DOP_NextGENThumbnailGallery_Clear" />'); 
                            LightboxHTML.push('                </div>'); 
                            LightboxHTML.push('                <div class="DOP_NextGENThumbnailGallery_LightboxNavigationButtons">');
                            LightboxHTML.push('                    <div class="DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn">');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationPrev+'" class="normal" alt="" />');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationPrevHover+'" class="hover" alt="" />');   
                            LightboxHTML.push('                    </div>');   
                            LightboxHTML.push('                    <div class="DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn">');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationNext+'" class="normal" alt="" />');
                            LightboxHTML.push('                        <img src="'+LightboxNavigationNextHover+'" class="hover" alt="" />');    
                            LightboxHTML.push('                    </div>');    
                            LightboxHTML.push('                    <br class="DOP_NextGENThumbnailGallery_Clear" />'); 
                            LightboxHTML.push('                </div>');     
                            LightboxHTML.push('                <div class="DOP_NextGENThumbnailGallery_LightboxNavigation_Info">');
                            LightboxHTML.push('                    <span class="current"></span> / '+noImages);
                            LightboxHTML.push('                </div>');                                   
                            LightboxHTML.push('            </div>');
                            LightboxHTML.push('        </div>');
                            LightboxHTML.push('    </div>');
                        }
                        
                        if (TooltipEnabled == 'true' && !prototypes.isTouchDevice()){
                            HTML.push('    <div class="DOP_NextGENThumbnailGallery_Tooltip"></div>');
                        }

                        HTML.push('</div>');

                        Container.html(HTML.join(''));
                        if (LightboxEnabled == 'true'){
                            $('body').append(LightboxHTML.join(''));
                        }
                        methods.initSettings();
                    },
                    initSettings:function(){// Init Settings
                        methods.initContainer();
                        methods.initBackground();
                        
                        if (Images.length > 0){
                            methods.initThumbnails();
                            methods.initImage();
                            
                            if (NavigationEnabled == 'true'){
                                methods.initNavigation();
                            }
                            
                            if (LightboxEnabled == 'true'){
                                methods.initLightbox();
                            }
                            
                            if (TooltipEnabled == 'true' && !prototypes.isTouchDevice()){
                                methods.initTooltip();
                            }
                            
                            methods.initCaption();
                            
                            if (AutoHide == 'true' && !prototypes.isTouchDevice()){
                                methods.initAutoHide();
                            }
                        
                            if (SocialShareEnabled == 'true'){
                                methods.initSocialShare();
                            }
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('display', 'none');
                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('display', 'none');
                            $('.DOP_NextGENThumbnailGallery_NavigationLeft', Container).css('display', 'none');
                            $('.DOP_NextGENThumbnailGallery_NavigationRight', Container).css('display', 'none');
                            $('.DOP_NextGENThumbnailGallery_NavigationLightbox', Container).css('display', 'none');
                        }
                    },
                    initRP:function(){// Init Resize & Positioning
                        if (ResponsiveEnabled == 'true'){   
                            methods.rpResponsive();    
                            methods.rpContainer();
                            methods.rpBackground();
                            methods.rpThumbnails();
                            if (Media[currentImage-1] == ''){
                                methods.rpImage();
                            }
                            else{
                                methods.rpMedia();
                            }
                            if (NavigationEnabled == 'true'){
                                methods.rpNavigation();
                            }
                            if (LightboxEnabled == 'true'){
                                if (Media[currentImage-1] == '' && LightboxMedia[currentImage-1] == ''){
                                    methods.rpLightboxImage();
                                }
                                else{
                                    methods.rpLightboxMedia();
                                }
                            }
                        }
                    },
                    initRPScroll:function(){// Init Resize & Positioning
                        if (lightboxImageLoaded){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height())/2+$(window).scrollTop(),
                                                                                                                           'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width())/2+$(window).scrollLeft()});   
                        }
                    },
                    rpResponsive:function(){
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        if ($(Container).width() < initialWidth){
                            Width = $(Container).width();                                
                        }
                        else{
                            Width = initialWidth;
                        }
                                                
                        if ($(window).width() <= 640 && initialWidth > initialHeight){
                            Height = Width;
                        }
                        else{
                            Height = Width*initialHeight/initialWidth;
                        }
                        
                        if ($(window).width() <= 640){
                            ThumbnailWidth = ThumbnailWidthMobile;
                            ThumbnailHeight = ThumbnailHeightMobile;
                        }
                        else{
                            ThumbnailWidth = ThumbnailWidthDesktop;
                            ThumbnailHeight = ThumbnailHeightDesktop;
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },

                    initContainer:function(){// Init Gallery Container
                        $('.DOP_NextGENThumbnailGallery_Container', Container).css('display', 'block');
                        methods.rpContainer();
                    },
                    rpContainer:function(){// Resize & Position the Container
                        if (Width != 'css'){
                            if (Width == '100%'){
                                $('.DOP_NextGENThumbnailGallery_Container', Container).width($(Container).width());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Container', Container).width(Width);
                            }
                        }
                        if (Height != 'css'){
                            if (Height == '100%'){
                                $('.DOP_NextGENThumbnailGallery_Container', Container).height($(Container).height());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Container', Container).height(Height);
                            }
                        }
                    },

                    initBackground:function(){// Init Background
                        if (BgColor != 'css'){
                            $('.DOP_NextGENThumbnailGallery_Background', Container).css('background-color', '#'+BgColor);
                        }
                        $('.DOP_NextGENThumbnailGallery_Background', Container).css('opacity', BgAlpha/100);

                        methods.rpBackground();
                    },
                    rpBackground:function(){// Resize & Position Background
                        if (Width != 'css'){
                            if (Width == '100%'){
                                $('.DOP_NextGENThumbnailGallery_Background', Container).width($(Container).width());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Background', Container).width(Width);
                            }
                        }
                        if (Height != 'css'){
                            if (Height == '100%'){
                                $('.DOP_NextGENThumbnailGallery_Background', Container).height($(Container).height());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Background', Container).height(Height);
                            }
                        }
                    },
                    
                    initThumbnails:function(){// Init Thumbnails
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsBg', Container).css('background-color', '#'+ThumbnailsBgColor);
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsBg', Container).css('opacity', ThumbnailsBgAlpha/100);

                        methods.rpThumbnails();
                        
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css('margin-top', ThumbnailsPaddingTop);
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css('margin-left', ThumbnailsPaddingLeft);
                        
                        if (ThumbnailsNavigation == 'arrows' && !prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('margin-top', ThumbnailsPaddingTop);
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('margin-top', ThumbnailsPaddingTop);
                            
                            if (ThumbnailsPosition == 'left' || ThumbnailsPosition == 'right'){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('margin-left', ThumbnailsPaddingLeft);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('margin-left', ThumbnailsPaddingLeft);
                            }
                        }
                        
                        if (ThumbnailsPosition == 'top'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-top', 0-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': 0}, 600, function(){
                                thumbsDisplayed = true;
                            });
                        }
                        
                        if (ThumbnailsPosition == 'right'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_Container', Container).width());
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': $('.DOP_NextGENThumbnailGallery_Container', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()}, 600, function(){
                                thumbsDisplayed = true;
                            });
                        }
                        
                        if (ThumbnailsPosition == 'bottom'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_Container', Container).height());
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': $('.DOP_NextGENThumbnailGallery_Container', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height()}, 600, function(){
                                thumbsDisplayed = true;
                            });
                        }
                        
                        if (ThumbnailsPosition == 'left'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-left', 0-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': 0}, 600, function(){
                                thumbsDisplayed = true;
                            });
                        }
                        
                        if (ThumbnailsNavigation == 'arrows' && !prototypes.isTouchDevice()){
                            methods.initThumbnailsArrows();
                        }
                        else{
                            methods.moveThumbnails();
                        }
                        methods.loadThumb(1);
                    },
                    loadThumb:function(no){// Load Thumbnail No
                        var img = new Image();
                        
                        methods.initThumb(no);
                        
                        $(img).load(function(){
                            $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no).html(this);
                            
                            var hiddenBustedItems = prototypes.doHideBuster($(Container));
                            ThumbsWidth[no-1] = $(this).width();
                            ThumbsHeight[no-1] = $(this).height();
                            prototypes.undoHideBuster(hiddenBustedItems);
                            
                            $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no+' img').attr('alt', CaptionTitle[no-1]);
                            methods.loadCompleteThumb(no);
                            
                            if (no < noImages){
                                methods.loadThumb(no+1);
                            }
                        }).attr('src', Thumbs[no-1]);
                    },
                    initThumb:function(no){// Init Thumbnail
                        var ThumbHTML = new Array();
                        
                        currentThumb = no;
                        
                        ThumbHTML.push('<div class="DOP_NextGENThumbnailGallery_ThumbContainer" id="DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no+'">');
                        ThumbHTML.push('   <div class="DOP_NextGENThumbnailGallery_Thumb" id="DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no+'"></div>');
                        ThumbHTML.push('</div>');

                        $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).append(ThumbHTML.join(""));
                        methods.rpThumbnails();
                        
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('opacity', ThumbnailAlpha/100);
                        $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).css('margin-top', ThumbnailPaddingTop);
                        $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).css('margin-left', ThumbnailPaddingLeft);
                        $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).css('margin-bottom', ThumbnailPaddingBottom);
                        $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).css('margin-right', ThumbnailPaddingRight);
                        
                        if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('float', 'left');
                        }

                        if (no != '1'){
                            if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                                $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('margin-left', ThumbnailsSpacing);
                            }
                            else{
                                $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('margin-top', ThumbnailsSpacing);
                            }
                        }

                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('background-color', '#'+ThumbnailBgColor);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('border-width', ThumbnailBorderSize);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).css('border-color', '#'+ThumbnailBorderColor);

                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).addClass('DOP_NextGENThumbnailGallery_ThumbLoader');
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no+'.DOP_NextGENThumbnailGallery_ThumbLoader', Container).css('background-image', 'url('+ThumbnailLoader+')');

                        if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                            if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width() <= $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                                prototypes.hCenterItem($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailGallery_Thumbnails', Container), $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width());
                            }
                            else if (parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left')) >= 0){
                                $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', 0);
                            }
                        }
                        else{
                            if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height() <= $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                                prototypes.vCenterItem($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailGallery_Thumbnails', Container), $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height());
                            }
                            else if (parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top')) >= 0){
                                $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', 0);
                            }
                        }
                    },
                    loadCompleteThumb:function(no){// Thumbnail Load complete event
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no+'.DOP_NextGENThumbnailGallery_ThumbLoader', Container).css('background-image', 'none');
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).removeClass('DOP_NextGENThumbnailGallery_ThumbLoader');
                        $('img', '#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).css('opacity', 0);
                        $('img', '#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+no, Container).stop(true, true).animate({'opacity':'1'}, 600);
                        
                        methods.rpThumbnails();
                                                
                        if (!prototypes.isTouchDevice()){
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).hover(function(){
                                if (currentImage != no){
                                    $(this).stop(true, true).animate({'opacity':ThumbnailAlphaHover/100}, 300);
                                    $(this).css('background-color', '#'+ThumbnailBgColorHover);
                                    $(this).css('border-color', '#'+ThumbnailBorderColorHover);
                                }
                                if (TooltipEnabled == 'true' && !prototypes.isTouchDevice()){
                                    methods.showTooltip(no-1);
                                }
                            },
                            function(){
                                if (currentImage != no){
                                    $(this).stop(true, true).animate({'opacity': ThumbnailAlpha/100}, 300);
                                    $(this).css('background-color', '#'+ThumbnailBgColor);
                                    $(this).css('border-color', '#'+ThumbnailBorderColor);
                                }
                                if (TooltipEnabled == 'true' && !prototypes.isTouchDevice()){
                                    $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('display', 'none');
                                }
                            });
                        }

                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+no, Container).click(function(){                            
                            if (imageLoaded){
                                if (Media[no-1] != ''){
                                    methods.loadMedia(no);
                                }
                                else{
                                    methods.loadImage(no);
                                }
                            }
                        });
                        
                        if (startWith == no && startWith != 1){                            
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).stop(true, true).animate({'opacity':parseInt(ThumbnailAlphaSelected)/100}, 300);
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('background-color', '#'+ThumbnailBgColorSelected);
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('border-color', '#'+ThumbnailBorderColorSelected);
                            startWith = 0;
                            methods.positionThumbnails();
                        }
                        
                        if (startWith == 1){                            
                            startWith = 0;                            
                        }
                    },
                    rpThumbnails:function(){// Resize & Position the Thumbnails
                        var i,
                        thumbnailWidth = ThumbnailWidth+2*ThumbnailBorderSize+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailWidthNB = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft,
                        thumbnailHeightNB = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom,
                        hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        for (i=1; i<=currentThumb; i++){
                            if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                                if (i == 1){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width(thumbnailWidth);
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()+thumbnailWidth+ThumbnailsSpacing);
                                }
                            }
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+i, Container).width(thumbnailWidthNB);
                            $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+i, Container).height(thumbnailHeightNB);
                            prototypes.resizeItem2($('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+i, Container), $('#DOP_NextGENThumbnailGallery_Thumb_'+ID+'_'+i, Container).children(), ThumbnailWidth, ThumbnailHeight, ThumbsWidth[i-1], ThumbsHeight[i-1], 'center');
                        }
                        
                        if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width());
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height(ThumbnailHeight+(2*ThumbnailBorderSize)+ThumbnailPaddingTop+ThumbnailPaddingBottom+ThumbnailsPaddingTop+ThumbnailsPaddingBottom);
                                
                            if (ThumbnailsNavigation == 'arrows' && !prototypes.isTouchDevice()){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width()-2*ThumbnailsSpacing-ThumbnailsPaddingRight-ThumbnailsPaddingLeft-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).width());
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('margin-left', ThumbnailsPaddingLeft);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).width()-ThumbnailsPaddingRight);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css({'margin-left': ThumbnailsPaddingLeft+$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).width()+ThumbnailsSpacing, 
                                                                                             'margin-right': ThumbnailsPaddingRight+$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).width()+ThumbnailsSpacing});
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width()-ThumbnailsPaddingRight-ThumbnailsPaddingLeft);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css({'margin-left': ThumbnailsPaddingLeft, 'margin-right': ThumbnailsPaddingRight});
                            }
                            
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height(ThumbnailHeight+(2*ThumbnailBorderSize)+ThumbnailPaddingTop+ThumbnailPaddingBottom);

                            if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width() <= $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                                prototypes.hCenterItem($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailGallery_Thumbnails', Container), $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width());
                            }
                            else{   
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'block');
                                                             
                                if (parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left')) >= 0){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', 0);
                                }
                                
                                if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()+parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left')) < $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()-$('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width());
                                }
                            }
                        }
                        else if (ThumbnailsPosition == 'right' || ThumbnailsPosition == 'left'){                            
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width(ThumbnailWidth+(2*ThumbnailBorderSize)+ThumbnailPaddingRight+ThumbnailPaddingLeft+ThumbnailsPaddingRight+ThumbnailsPaddingLeft);
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height());
                            
                            if (ThumbnailsNavigation == 'arrows' && !prototypes.isTouchDevice()){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height()-2*ThumbnailsSpacing-ThumbnailsPaddingBottom-ThumbnailsPaddingTop-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft').height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight').height());
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('margin-top', ThumbnailsPaddingTop);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight').height()-ThumbnailsPaddingBottom);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css({'margin-top': ThumbnailsPaddingTop+$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).height()+ThumbnailsSpacing, 
                                                                                             'margin-bottom': ThumbnailsPaddingBottom+$('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).height()+ThumbnailsSpacing});
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height()-ThumbnailsPaddingTop-ThumbnailsPaddingBottom);
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).css({'margin-top': ThumbnailsPaddingTop, 'margin-bottom': ThumbnailsPaddingBottom});
                            }
                            
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width(ThumbnailWidth+(2*ThumbnailBorderSize)+ThumbnailPaddingRight+ThumbnailPaddingLeft);

                            if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height() <= $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                                prototypes.vCenterItem($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailGallery_Thumbnails', Container), $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).css('display', 'block');
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).css('display', 'block');
                                
                                if (parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top')) >= 0){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', 0);
                                }
                                
                                if ($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()+parseInt($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top')) < $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()-$('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height());
                                }
                            }
                        }
                        
                        if (thumbsDisplayed){
                            if (ThumbnailsPosition == 'top'){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-top', 0);
                            }

                            if (ThumbnailsPosition == 'right'){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_Container', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            }

                            if (ThumbnailsPosition == 'bottom'){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_Container', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            }

                            if (ThumbnailsPosition == 'left'){
                                $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).css('margin-left', 0);
                            }
                        }
                        

                        $('.DOP_NextGENThumbnailGallery_ThumbnailsBg', Container).width($('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsBg', Container).height($('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                        
                        if (ThumbnailsNavigation == 'arrows' && ($('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).width() < 2 || $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).width() < 2)){
                            setTimeout(function(){
                                methods.rpThumbnails();
                            }, 100);
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    moveThumbnails:function(){// Move Thumbnails
                        if (prototypes.isTouchDevice()){
                            prototypes.touchNavigation($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container), $('.DOP_NextGENThumbnailGallery_Thumbnails', Container));
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).mousemove(function(e){
                                var thumbnailWidth, thumbnailHeight, mousePosition, thumbnailsPosition;

                                if ((ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                                    thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize;
                                    mousePosition = e.clientX-$(this).offset().left+$(document).scrollLeft();
                                    thumbnailsPosition = 0-(mousePosition-thumbnailWidth-ThumbnailsSpacing)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width())/($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()-2*thumbnailWidth);
                                    
                                    if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width())){
                                        thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width());
                                    }
                                    if (thumbnailsPosition > 0){
                                        thumbnailsPosition = 0;
                                    }
                                    
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', thumbnailsPosition);
                                }

                                if ((ThumbnailsPosition == 'right' || ThumbnailsPosition == 'left') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                                    thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                                    mousePosition = e.clientY-$(this).offset().top+$(document).scrollTop();
                                    thumbnailsPosition = 0-(mousePosition-thumbnailHeight-ThumbnailsSpacing)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height())/($('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()-2*thumbnailHeight);

                                    if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height())){
                                        thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height());
                                    }
                                    if (thumbnailsPosition > 0){
                                        thumbnailsPosition = 0;
                                    }
                                    
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', thumbnailsPosition);
                                }
                            });
                        }
                    },
                    initThumbnailsArrows:function(){
                        if (!prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');
                            });
                        
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');
                            });
                        }
                        
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).mousedown(function(){
                            methods.moveThumbnailsLeft();
                        });
                        
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationLeft', Container).mouseup(function(){
                            clearInterval(MoveThumbnailsLeftID);
                        });

                        $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).mousedown(function(){
                            methods.moveThumbnailsRight();
                        });

                        $('.DOP_NextGENThumbnailGallery_ThumbnailsNavigationRight', Container).mouseup(function(){    
                            clearInterval(MoveThumbnailsRightID);
                        });
                    },
                    positionThumbnails:function(){// Position thumbnails to be displayed when hidden.
                        var thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize,
                        thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                        
                        if (startWith == 0){
                            if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                                if ($('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().left < (-1)*parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left'))){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).stop(true, true).animate({'margin-left': (-1)*$('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().left}, ThumbnailsPositionTime, function(){
                                        if (parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left')) > 0){
                                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', 0);
                                        }
                                    });
                                }
                                else if ($('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().left+thumbnailWidth > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()+(-1)*parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left'))){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).stop(true, true).animate({'margin-left': (-1)*$('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage).position().left+$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()-thumbnailWidth-ThumbnailsSpacing}, ThumbnailsPositionTime, function(){
                                        if (parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left')) < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width())){
                                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()));
                                        }
                                    });                                
                                }
                            }
                            else{
                                if ($('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().top < (-1)*parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top'))){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).stop(true, true).animate({'margin-top': (-1)*$('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().top}, ThumbnailsPositionTime, function(){
                                        if (parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top')) > 0){
                                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', 0);
                                        }
                                    });
                                }
                                else if ($('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).position().top+thumbnailWidth > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()+(-1)*parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top'))){
                                    $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).stop(true, true).animate({'margin-top': (-1)*$('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage).position().top+$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()-thumbnailHeight-ThumbnailsSpacing}, ThumbnailsPositionTime, function(){
                                        if (parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top')) < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height())){
                                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()));
                                        }
                                    });                                
                                }                            
                            }
                        }
                    },
                    moveThumbnailsLeft:function(){      
                        clearInterval(MoveThumbnailsLeftID);                  
                        
                        var thumbnailWidth, thumbnailHeight, thumbnailsPosition;

                        if ((ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                            thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize;
                            thumbnailsPosition =  parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left'))+thumbnailWidth/5;

                            if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width())){
                                thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width());
                            }
                            if (thumbnailsPosition > 0){
                                thumbnailsPosition = 0;
                            }

                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', thumbnailsPosition);
                        }

                        if ((ThumbnailsPosition == 'right' || ThumbnailsPosition == 'left') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                            thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                            thumbnailsPosition =  parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top'))+thumbnailHeight/5;

                            if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height())){
                                thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height());
                            }
                            if (thumbnailsPosition > 0){
                                thumbnailsPosition = 0;
                            }

                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', thumbnailsPosition);
                        }
                        
                        MoveThumbnailsLeftID = setInterval(methods.moveThumbnailsLeft, 100);
                    },
                    moveThumbnailsRight:function(){
                        clearInterval(MoveThumbnailsRightID);
                        
                        var thumbnailWidth, thumbnailHeight, thumbnailsPosition;
                        
                        if ((ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width()){
                            thumbnailWidth = ThumbnailWidth+ThumbnailPaddingRight+ThumbnailPaddingLeft+2*ThumbnailBorderSize;
                            thumbnailsPosition = parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left'))-thumbnailWidth/5;

                            if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width())){
                                thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).width());
                            }
                            if (thumbnailsPosition > 0){
                                thumbnailsPosition = 0;
                            }

                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-left', thumbnailsPosition);
                        }

                        if ((ThumbnailsPosition == 'right' || ThumbnailsPosition == 'left') && $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height() > $('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height()){
                            thumbnailHeight = ThumbnailHeight+ThumbnailPaddingTop+ThumbnailPaddingBottom+2*ThumbnailBorderSize;
                            thumbnailsPosition = parseFloat($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top'))-thumbnailHeight/5;

                            if (thumbnailsPosition < (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height())){
                                thumbnailsPosition = (-1)*($('.DOP_NextGENThumbnailGallery_Thumbnails', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsWrapper', Container).height());
                            }
                            if (thumbnailsPosition > 0){
                                thumbnailsPosition = 0;
                            }

                            $('.DOP_NextGENThumbnailGallery_Thumbnails', Container).css('margin-top', thumbnailsPosition);
                        }
                        
                        MoveThumbnailsRightID = setInterval(methods.moveThumbnailsRight, 100);
                    },

                    initImage:function(){// Init Image
                        startGalleryID = prototypes.$_GET('dop_thumbnail_gallery_id') != undefined ? parseInt(prototypes.$_GET('dop_thumbnail_gallery_id')):0;
                        startWith = prototypes.$_GET('dop_thumbnail_gallery_share') != undefined && startGalleryID == ID ? parseInt(prototypes.$_GET('dop_thumbnail_gallery_share')):1;
                        startWithLightbox = prototypes.$_GET('dop_thumbnail_gallery_lightbox') != undefined && prototypes.$_GET('dop_thumbnail_gallery_lightbox').indexOf('true') != -1 && startGalleryID == ID ? true:false;
                                                                        
                        if (ImageBgColor != 'css'){
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('background-color', '#'+ImageBgColor);
                        }
                        $('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('opacity', ImageBgAlpha/100);
                        
                        methods.rpImage();
                                       
                        if (startGalleryID == ID){
                            var href = window.location.href,
                            variables = 'dop_thumbnail_gallery_id='+startGalleryID+'&dop_thumbnail_gallery_share='+startWith+'&dop_thumbnail_gallery_lightbox='+startWithLightbox;

                            if (href.indexOf('?'+variables) != -1){
                                variables = '?'+variables;
                            }
                            else{
                                variables = '&'+variables;
                            }
                                
                            window.location = '#DOPThumbnailGallery'+ID;
                            
                            try{
                                window.history.pushState({'html':'', 'pageTitle':document.title}, '', href.split(variables)[0]);
                            }catch(e){
                                //console.log(e);
                            }
                        }
                                       
                        if (Media[startWith-1] != ''){
                            methods.loadMedia(startWith);
                        }
                        else{
                            methods.loadImage(startWith);
                        }
                        
                        if (startWithLightbox && LightboxEnabled == 'true'){
                            methods.showLightbox();
                        }
                        
                        $(document).keydown(function(e){
                            if (imageLoaded && $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display') != 'block'){
                                switch (e.keyCode){
                                    case 13:
                                        methods.showLightbox();
                                        break;
                                    case 37:
                                        methods.previousImage();
                                        break;
                                    case 39:
                                        methods.nextImage();
                                        break;                                    
                                }
                            }
                        });
                    },
                    loadImage:function(no){// Load Image
                        var img = new Image();
                        
                        clearInterval(SlideshowID);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).stop(true, true).animate({'opacity':parseInt(ThumbnailAlpha)/100}, 300);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('background-color', '#'+ThumbnailBgColor);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('border-color', '#'+ThumbnailBorderColor);
                        currentImage = no;
                        imageLoaded = false;
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).stop(true, true).animate({'opacity':parseInt(ThumbnailAlphaSelected)/100}, 300);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('background-color', '#'+ThumbnailBgColorSelected);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('border-color', '#'+ThumbnailBorderColorSelected);
                        
                        methods.positionThumbnails();                        
                        methods.navigationDisplay('none'); 
                        methods.hideCaption();
                        
                        $('.DOP_NextGENThumbnailGallery_Image', Container).stop(true, true).animate({'opacity':'0'}, parseInt(ImageDisplayTime)/2, function(){
                            $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).addClass('DOP_NextGENThumbnailGallery_ImageLoader');
                            $('.DOP_NextGENThumbnailGallery_ImageLoader', Container).css('background-image', 'url('+ImageLoader+')');

                            $(img).load(function(){
                                $('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).html(CaptionTitle[no-1]);
                                $('.DOP_NextGENThumbnailGallery_CaptionText', Container).html(CaptionText[no-1]);
                                $('.DOP_NextGENThumbnailGallery_Image', Container).removeClass('DOP_NextGENThumbnailGallery_BigLoader');
                                $('.DOP_NextGENThumbnailGallery_Image', Container).html(this);
                                $('.DOP_NextGENThumbnailGallery_Image img', Container).attr('alt', CaptionTitle[no-1]);
                                
                                if (SocialShareEnabled == 'true' && !lightboxImageLoaded){
                                    methods.showSocialShare(false);
                                }
                                $('.DOP_NextGENThumbnailGallery_ImageLoader', Container).css('background-image', 'none');
                                $('.DOP_NextGENThumbnailGallery_ImageBg', Container).removeClass('DOP_NextGENThumbnailGallery_ImageLoader');
                                
                                var hiddenBustedItems = prototypes.doHideBuster($(Container));
                                ImageWidth = $(this).width();
                                ImageHeight = $(this).height();
                                prototypes.undoHideBuster(hiddenBustedItems);
                                
                                $('.DOP_NextGENThumbnailGallery_Image', Container).css('opacity', 0);

                                if (ImageDisplayType == 'fit'){
                                    var currW = 0, currH = 0, ml = 0, mt = 0, dw = ImageWidth, dh = ImageHeight,
                                    cw = $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-ImageMarginLeft-ImageMarginRight-ImagePaddingLeft-ImagePaddingRight,
                                    ch = $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageMarginTop-ImageMarginBottom-ImagePaddingTop-ImagePaddingBottom;

                                    if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                                        ch = ch-CaptionHeight;
                                    }
                            
                                    if (dw <= cw && dh <= ch){
                                        currW = dw;
                                        currH = dh;
                                    }
                                    else{
                                        currH = ch;
                                        currW = (dw*ch)/dh;

                                        if (currW > cw){
                                            currW = cw;
                                            currH = (dh*cw)/dw;
                                        }
                                    }

                                    currW = currW+ImagePaddingLeft+ImagePaddingRight;
                                    currH = currH+ImagePaddingTop+ImagePaddingBottom;
                                                                    
                                    if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                                        currH += CaptionHeight;
                                    }

                                    ml = ($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-currW)/2;
                                    mt = ($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-currH)/2;

                                    $('.DOP_NextGENThumbnailGallery_ImageBg', Container).stop(true, true).animate({'width':currW, 'height':currH, 'margin-left':ml, 'margin-top':mt}, parseInt(ImageDisplayTime)/2, function(){
                                        methods.rpImage();
                                        $('.DOP_NextGENThumbnailGallery_Image', Container).stop(true, true).animate({'opacity':'1'}, parseInt(ImageDisplayTime)/2, function(){
                                            if (Slideshow == 'true'){
                                                clearInterval(SlideshowID);
                                                
                                                if (((SlideshowLoop == 'true' && currentImage == noImages) || currentImage < noImages) && SlideshowStatus == 'play'){
                                                    SlideshowID = setInterval(methods.nextImage, parseInt(SlideshowTime));
                                                }
                                            }
                                            
                                            imageLoaded = true;
                                            
                                            if (!ItemsHidden){
                                                methods.rpNavigation();
                                            }
                                            
                                            methods.showCaption();
                                        });
                                    });
                                }
                                else{
                                    methods.rpImage();
                                    $('.DOP_NextGENThumbnailGallery_Image', Container).stop(true, true).animate({'opacity':'1'}, parseInt(ImageDisplayTime), function(){
                                        if (Slideshow == 'true'){
                                            clearInterval(SlideshowID);
                                                
                                            if (((SlideshowLoop == 'true' && currentImage == noImages) || currentImage < noImages) && SlideshowStatus == 'play'){
                                                SlideshowID = setInterval(methods.nextImage, parseInt(SlideshowTime));
                                            }
                                        }
                                        
                                        imageLoaded = true;
                                        
                                        if (!ItemsHidden){
                                            methods.rpNavigation();
                                        }
                                        
                                        methods.showCaption();
                                    });
                                }
                            }).attr('src', Images[no-1]);

                        });
                    },
                    rpImage:function(){// Resize & Position Image
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width());
                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height());
                        
                        if (ThumbnailsOverImage == 'false'){                        
                            if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            }

                            if (ThumbnailsPosition == 'top'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            }
                            if (ThumbnailsPosition == 'left'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            }
                        }

                        if (ImageDisplayType == 'fit'){
                            var currW = 0, currH = 0, ml = 0, mt = 0, dw = ImageWidth, dh = ImageHeight,
                            cw = $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-ImageMarginLeft-ImageMarginRight-ImagePaddingLeft-ImagePaddingRight,
                            ch = $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageMarginTop-ImageMarginBottom-ImagePaddingTop-ImagePaddingBottom;

                            if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                                ch = ch-CaptionHeight;
                            }
                            
                            if (ImageWidth == 0 || ImageHeight == 0){
                                dw = 200;
                                dh = 200;
                            }

                            if (dw <= cw && dh <= ch){
                                currW = dw;
                                currH = dh;
                            }
                            else{
                                currH = ch;
                                currW = (dw*ch)/dh;

                                if (currW > cw){
                                    currW = cw;
                                    currH = (dh*cw)/dw;
                                }
                            }

                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).width(currW+ImagePaddingLeft+ImagePaddingRight);
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).height(currH+ImagePaddingTop+ImagePaddingBottom);
                            
                            if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '') && ImageWidth != 0 && ImageHeight != 0){
                                $('.DOP_NextGENThumbnailGallery_ImageBg', Container).height(currH+ImagePaddingTop+ImagePaddingBottom+CaptionHeight);
                            }
                            $('.DOP_NextGENThumbnailGallery_Image', Container).width(currW);
                            $('.DOP_NextGENThumbnailGallery_Image', Container).height(currH);
                            $('.DOP_NextGENThumbnailGallery_Image', Container).children().width(currW);
                            $('.DOP_NextGENThumbnailGallery_Image', Container).children().height(currH);
                            
                            prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_ImageBg', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                            prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Image', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                            
                            if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                                if (CaptionPosition == 'top'){
                                    $('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))-CaptionHeight/2+CaptionHeight);
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))-CaptionHeight/2);
                                }
                            }
                        }
                        else{                            
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).width($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-ImageMarginLeft-ImageMarginRight);
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).height($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageMarginTop-ImageMarginBottom);
                            prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_ImageBg', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());                            
                            prototypes.resizeItem2($('.DOP_NextGENThumbnailGallery_Image', Container), $('.DOP_NextGENThumbnailGallery_Image', Container).children(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-ImageMarginLeft-ImageMarginRight, $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageMarginTop-ImageMarginBottom, ImageWidth, ImageHeight, 'center');
                            prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Image', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                        }

                        methods.rpCaption();
                        
                        if (NavigationEnabled == 'true'){
                            methods.rpNavigation();
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },

                    loadMedia:function(no){// Load Media                       
                        var iframeSRC = '';
                        
                        clearInterval(SlideshowID);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).stop(true, true).animate({'opacity': ThumbnailAlpha/100}, 300);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('background-color', '#'+ThumbnailBgColor);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('border-color', '#'+ThumbnailBorderColor);
                        currentImage = no;
                        imageLoaded = false;
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).stop(true, true).animate({'opacity':ThumbnailAlphaSelected/100}, 300);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('background-color', '#'+ThumbnailBgColorSelected);
                        $('#DOP_NextGENThumbnailGallery_ThumbContainer_'+ID+'_'+currentImage, Container).css('border-color', '#'+ThumbnailBorderColorSelected);
                        
                        methods.positionThumbnails();
                        methods.navigationDisplay('none'); 
                        methods.hideCaption();

                        $('.DOP_NextGENThumbnailGallery_Image', Container).stop(true, true).animate({'opacity':'0'}, ImageDisplayTime/2, function(){
                            $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).addClass('DOP_NextGENThumbnailGallery_ImageLoader');
                            $('.DOP_NextGENThumbnailGallery_ImageLoader', Container).css('background-image', 'url('+ImageLoader+')');

                            $('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).html(CaptionTitle[no-1]);
                            $('.DOP_NextGENThumbnailGallery_CaptionText', Container).html(CaptionText[no-1]);
                            $('.DOP_NextGENThumbnailGallery_Image', Container).removeClass('DOP_NextGENThumbnailGallery_BigLoader');
                            
                            $('.DOP_NextGENThumbnailGallery_Image', Container).html(Media[no-1]);
                            
                            if (SocialShareEnabled == 'true' && !lightboxImageLoaded){
                                methods.showSocialShare(false);
                            }
                            
                            var iframeSRC =  $('.DOP_NextGENThumbnailGallery_Image', Container).children().attr('src');
                        
                            if (iframeSRC != null){
                                if (iframeSRC.indexOf('?') != -1){
                                    $('.DOP_NextGENThumbnailGallery_Image', Container).children().attr('src', iframeSRC+'&wmode=transparent');                                
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_Image', Container).children().attr('src', iframeSRC+'?wmode=transparent');
                                }
                            }

                            $('.DOP_NextGENThumbnailGallery_ImageLoader', Container).css('background-image', 'none');
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).removeClass('DOP_NextGENThumbnailGallery_ImageLoader');
                            ImageWidth = $('.DOP_NextGENThumbnailGallery_Image', Container).children().width();
                            ImageHeight = $('.DOP_NextGENThumbnailGallery_Image', Container).children().height();
                            $('.DOP_NextGENThumbnailGallery_Image', Container).css('opacity', 0);
                            
                            var ml = ($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-ImageWidth-ImagePaddingLeft-ImagePaddingRight)/2,
                            mt = ($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageHeight-ImagePaddingTop-ImagePaddingBottom)/2, ch;
                                                  
                            if (CaptionOverImage == 'false' && (CaptionTitle[no-1] != '' || CaptionText[no-1] != '')){
                                ch = ImageHeight+ImagePaddingTop+ImagePaddingBottom+CaptionHeight;
                                mt = ($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height()-ImageHeight-ImagePaddingTop-ImagePaddingBottom-CaptionHeight)/2
                            }
                            else{
                                ch = ImageHeight+ImagePaddingTop+ImagePaddingBottom;
                            }
                            
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).stop(true, true).animate({'width':ImageWidth+ImagePaddingLeft+ImagePaddingRight, 'height':ch, 'margin-left':ml, 'margin-top':mt}, ImageDisplayTime/2, function(){
                                methods.rpMedia();
                                $('.DOP_NextGENThumbnailGallery_Image', Container).stop(true, true).animate({'opacity':'1'}, ImageDisplayTime/2, function(){
                                    if (Slideshow == 'true'){
                                        clearInterval(SlideshowID);
                                            
                                        if (((SlideshowLoop == 'true' && currentImage == noImages) || currentImage < noImages) && SlideshowStatus == 'play'){
                                            SlideshowID = setInterval(methods.nextImage, SlideshowTime);
                                        }
                                    }
                                    
                                    imageLoaded = true;
                                    
                                    if (!ItemsHidden){
                                        methods.rpNavigation();
                                    }
                                    
                                    methods.showCaption();
                                });
                            });
                        });
                    },
                    rpMedia:function(){// Resize & Position Media
                        var hiddenBustedItems = prototypes.doHideBuster($(Container));
                        
                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width());
                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height());
                        if (ThumbnailsOverImage == 'false'){
                            if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height($('.DOP_NextGENThumbnailGallery_Container', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width($('.DOP_NextGENThumbnailGallery_Container', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            }

                            if (ThumbnailsPosition == 'top'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height());
                            }
                            if (ThumbnailsPosition == 'left'){
                                $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width());
                            }
                        }

                        $('.DOP_NextGENThumbnailGallery_ImageBg', Container).width(ImageWidth+ImagePaddingLeft+ImagePaddingRight);
                        $('.DOP_NextGENThumbnailGallery_ImageBg', Container).height(ImageHeight+ImagePaddingTop+ImagePaddingBottom);
                                                
                        if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                            $('.DOP_NextGENThumbnailGallery_ImageBg', Container).height(ImageHeight+ImagePaddingTop+ImagePaddingBottom+CaptionHeight);
                        }
                        $('.DOP_NextGENThumbnailGallery_Image', Container).width(ImageWidth);
                        $('.DOP_NextGENThumbnailGallery_Image', Container).height(ImageHeight);
                        $('.DOP_NextGENThumbnailGallery_Image', Container).children().width(ImageWidth);
                        $('.DOP_NextGENThumbnailGallery_Image', Container).children().height(ImageHeight);
                        
                        prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_ImageBg', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                        prototypes.centerItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Image', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width(), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                        
                        if (CaptionOverImage == 'false' && (CaptionTitle[currentImage-1] != '' || CaptionText[currentImage-1] != '')){
                            if (CaptionPosition == 'top'){
                                $('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))-CaptionHeight/2+CaptionHeight);
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))-CaptionHeight/2);
                            }
                        }
                        
                        methods.rpCaption();
                        
                        if (NavigationEnabled == 'true'){
                            methods.rpNavigation();
                        }
                        
                        prototypes.undoHideBuster(hiddenBustedItems);
                    },
                    
                    initNavigation:function(){// Init Navigation   
                        if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){
                            $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).addClass('outside');
                            $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).addClass('outside');
                        }
                        
                        if (!prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailGallery_NavigationLeft', Container).hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');
                            });
                        
                            $('.DOP_NextGENThumbnailGallery_NavigationRight', Container).hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');
                            });
                        }
                        else{
                            if (NavigationTouchDeviceSwipeEnabled == 'true'){
                                methods.navigationSwipe();
                            }
                        }

                        $('.DOP_NextGENThumbnailGallery_NavigationLeft', Container).click(function(){
                            if (imageLoaded){
                                methods.previousImage();
                            }
                        });

                        $('.DOP_NextGENThumbnailGallery_NavigationRight', Container).click(function(){
                            if (imageLoaded){
                                methods.nextImage();
                            }
                        });
                        
                        if (LightboxEnabled == 'true'){
                            if (!prototypes.isTouchDevice()){
                                $('.DOP_NextGENThumbnailGallery_NavigationLightbox', Container).hover(function(){
                                    $('.normal', this).css('display', 'none');
                                    $('.hover', this).css('display', 'block');
                                }, function(){
                                    $('.normal', this).css('display', 'block');
                                    $('.hover', this).css('display', 'none');
                                });
                            }
                            
                            $('.DOP_NextGENThumbnailGallery_NavigationLightbox', Container).click(function(){
                                methods.showLightbox();
                            });
                        }
                                                
                        if (Slideshow == 'true'){
                            if (!prototypes.isTouchDevice()){
                                $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).hover(function(){
                                    $('.normal', this).css('display', 'none');
                                    $('.hover', this).css('display', 'block');
                                }, function(){
                                    $('.normal', this).css('display', 'block');
                                    $('.hover', this).css('display', 'none');
                                });
                                
                                $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).hover(function(){
                                    $('.normal', this).css('display', 'none');
                                    $('.hover', this).css('display', 'block');
                                }, function(){
                                    $('.normal', this).css('display', 'block');
                                    $('.hover', this).css('display', 'none');
                                });
                            }
                            
                            $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).click(function(){
                                SlideshowStatus = 'play';
                                $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).css('display', 'none');                            
                                $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).css('display', 'block');
                                if (imageLoaded){
                                    methods.nextImage();
                                }
                                methods.rpNavigation();
                            });
                                                        
                            $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).click(function(){
                                SlideshowStatus = 'pause';                        
                                $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).css('display', 'none');
                                $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).css('display', 'block');    
                                clearInterval(SlideshowID);
                                methods.rpNavigation();
                            });
                        }
                    },
                    previousImage:function(){// Go to previous image
                        if (currentImage == 1){
                            if (Media[noImages-1] != ''){
                                methods.loadMedia(noImages);
                            }
                            else{
                                methods.loadImage(noImages);
                            }
                        }
                        else{
                            if (Media[currentImage-2] != ''){
                                methods.loadMedia(currentImage-1);
                            }
                            else{
                                methods.loadImage(currentImage-1);
                            }
                        }
                    },
                    nextImage:function(){// Go to next image
                        if (imageLoaded){
                            if (currentImage == noImages){
                                if (Media[0] != ''){
                                    methods.loadMedia(1);
                                }
                                else{
                                    methods.loadImage(1);
                                }
                            }
                            else{
                                if (Media[currentImage] != ''){
                                    methods.loadMedia(currentImage+1);
                                }
                                else{
                                    methods.loadImage(currentImage+1);
                                }
                            }
                        }
                    },
                    rpNavigation:function(){// Resize & Position Navigation Buttons    
                        methods.navigationDisplay('block');                         
                        
                        if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){
                            $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().width(),
                                                                                         'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+($('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().height())/2,
                                                                                         'width': $('.DOP_NextGENThumbnailGallery_Image', Container).width()+$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().width()*2});
                            $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')),
                                                                                              'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('margin-top'))-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().height()+ImagePaddingTop,
                                                                                              'width': $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width()});
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')),
                                                                                         'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+($('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().height())/2,
                                                                                         'width': $('.DOP_NextGENThumbnailGallery_Image', Container).width()});
                            $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')),
                                                                                              'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+10,
                                                                                              'width': $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width()});
                        }
                        
                        if (ThumbnailsPosition == 'left'){
                            if (ThumbnailsOverImage == 'true'){
                                if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'left': $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()+$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().width(),
                                                                                                 'width': $('.DOP_NextGENThumbnailGallery_Image', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))});
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')),
                                                                                                      'width': $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width()});
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'left': $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width(),
                                                                                                 'width': $('.DOP_NextGENThumbnailGallery_Image', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))});
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'left': parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')),
                                                                                                      'width': $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width()});
                                }
                            }
                            else{
                                if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().width());
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css('left', parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')));
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left', $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')));
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css('left', parseFloat($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css('left')));
                                }
                            }
                        }                   
                        
                        if (ThumbnailsPosition == 'top'){
                            if (ThumbnailsOverImage == 'true'){    
                                if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){                      
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()});
                                }
                                else{                      
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).children().height()-10});
                                }
                            }
                            else{
                                if (NavigationOverImage == 'false' && ImageDisplayType == 'fit'){
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+($('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().height())/2});
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))});
                                }
                                else{
                                    $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+($('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).children().height())/2});
                                    $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css({'margin-top': parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))+parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+10});
                                }
                            }
                        }
                        
                        if (ThumbnailsPosition == 'right' && ThumbnailsOverImage == 'true'){
                            $('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()-parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')));
                            $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).width($('.DOP_NextGENThumbnailGallery_NavigationButtons', Container).width());
                        }
                        
                        if (!imageLoaded){    
                            methods.navigationDisplay('none');
                        }                                                       
                    },
                    navigationDisplay:function(value){
                        if (NavigationEnabled == 'true'){  
                            $('.DOP_NextGENThumbnailGallery_NavigationLeft', Container).css('display', value);
                            $('.DOP_NextGENThumbnailGallery_NavigationRight', Container).css('display', value);  
                            $('.DOP_NextGENThumbnailGallery_NavigationExtraButtons', Container).css('display', value);                            
                        }
                        
                        if (Slideshow == 'true'){ 
                            if (SlideshowStatus == 'play'){
                                $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).css('display', 'none');                            
                                $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).css('display', value);                                    
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).css('display', value);                            
                                $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).css('display', 'none');                                    
                            }
                        }
                    },
                    navigationSwipe:function(){
                        var prev, curr, touch, initial, positionX, positionY;

                        if (ThumbnailsPosition == 'top' || ThumbnailsPosition == 'bottom'){
                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchstart', function(e){
                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    touch = e.originalEvent.touches[0];
                                    prev = touch.clientX;
                                    initial = parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left')); 
                                }
                            });

                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchmove', function(e){
                                e.preventDefault();

                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    touch = e.originalEvent.touches[0],
                                    curr = touch.clientX,
                                    positionX = curr>prev ? parseInt($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left'))+(curr-prev):parseInt($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left'))-(prev-curr);

                                    methods.navigationDisplay('none'); 
                                    prev = curr;
                                    $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left', positionX);
                                }
                            });

                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchend', function(e){
                                if (!prototypes.isChromeMobileBrowser()){
                                    e.preventDefault();
                                }

                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    
                                    if (parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left'))+parseFloat($('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('margin-left')) < 0){
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css({'margin-left': initial, 'opacity': 0});
                                        $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).stop(true, true).animate({'opacity': 1}, ImageDisplayTime/2, function(){
                                            methods.nextImage();
                                        });                                    
                                    }
                                    else if (parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left'))-parseFloat($('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('margin-left'))+$('.DOP_NextGENThumbnailGallery_ImageBg', Container).width() > $('.DOP_NextGENThumbnailGallery_Container', Container).width()){
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css({'margin-left': initial, 'opacity': 0});
                                        $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).stop(true, true).animate({'opacity': 1}, ImageDisplayTime/2, function(){
                                            methods.previousImage();
                                        });
                                    }
                                    else{
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-left', initial);
                                        methods.navigationDisplay('block'); 

                                        if (Slideshow == 'true'){
                                            clearInterval(SlideshowID);
                                            
                                            if (((SlideshowLoop == 'true' && currentImage == noImages) || currentImage < noImages) && SlideshowStatus == 'play'){
                                                SlideshowID = setInterval(methods.nextImage, parseInt(SlideshowTime));
                                            }
                                        } 
                                    }
                                }
                            });                        
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchstart', function(e){
                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    touch = e.originalEvent.touches[0];
                                    prev = touch.clientY;
                                    initial = parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top')); 
                                }
                            });

                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchmove', function(e){
                                e.preventDefault();

                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    touch = e.originalEvent.touches[0],
                                    curr = touch.clientY,
                                    positionY = curr>prev ? parseInt($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))+(curr-prev):parseInt($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))-(prev-curr);

                                    methods.navigationDisplay('none'); 
                                    prev = curr;
                                    $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top', positionY);
                                }
                            });

                            $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).bind('touchend', function(e){
                                e.preventDefault();

                                if (imageLoaded){
                                    clearInterval(SlideshowID);
                                    
                                    if (parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))+parseFloat($('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('margin-top')) < 0){
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css({'margin-top': initial, 'opacity': 0});
                                        $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).stop(true, true).animate({'opacity': 1}, ImageDisplayTime/2, function(){
                                            methods.nextImage();
                                        });                                    
                                    }
                                    else if (parseFloat($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top'))-parseFloat($('.DOP_NextGENThumbnailGallery_ImageBg', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_ImageBg', Container).height() > $('.DOP_NextGENThumbnailGallery_Container', Container).height()){
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css({'margin-top': initial, 'opacity': 0});
                                        $('.DOP_NextGENThumbnailGallery_Image', Container).html('');
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).stop(true, true).animate({'opacity': 1}, ImageDisplayTime/2, function(){
                                            methods.previousImage();
                                        });
                                    }
                                    else{
                                        $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).css('margin-top', initial);
                                        methods.navigationDisplay('block'); 

                                        if (Slideshow == 'true'){
                                            clearInterval(SlideshowID);
                                            
                                            if (((SlideshowLoop == 'true' && currentImage == noImages) || currentImage < noImages) && SlideshowStatus == 'play'){
                                                SlideshowID = setInterval(methods.nextImage, parseInt(SlideshowTime));
                                            }
                                        } 
                                    }
                                }
                            });                        
                        }
                    },
                                        
                    initCaption:function(){// Init Caption
                        $('.DOP_NextGENThumbnailGallery_Caption', Container).css('opacity', 0);
                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).css('background-color', '#'+CaptionBgColor);
                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).css('opacity', CaptionBgAlpha/100);
                        $('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).css('color', '#'+CaptionTitleColor);
                        $('.DOP_NextGENThumbnailGallery_CaptionText', Container).css('color', '#'+CaptionTextColor);
                    },
                    showCaption:function(){// Show Caption
                        if (imageLoaded && ($('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).html() != '' || $('.DOP_NextGENThumbnailGallery_CaptionText', Container).html() != '')){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('display', 'block');
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).stop(true, true).animate({'opacity': 1}, 600, function(){
                                $('.DOP_NextGENThumbnailGallery_CaptionTextContainer', Container).height($('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).height()-$('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).height()-5);
                                $('.DOP_NextGENThumbnailGallery_CaptionTextContainer', Container).jScrollPane();
                                if (CaptionScrollScrubColor != 'css'){
                                    $('.jspDrag', Container).css('background-color', '#'+CaptionScrollScrubColor);
                                }
                                if (CaptionScrollBgColor != 'css'){
                                    $('.jspTrack', Container).css('background-color', '#'+CaptionScrollBgColor);
                                }
                            });
                        }
                    },
                    hideCaption:function(){// Hide Caption
                        $('.DOP_NextGENThumbnailGallery_Caption', Container).stop(true, true).animate({'opacity': 0}, 600, function(){
                            $(this).css('display', 'none');
                        });
                    },
                    rpCaption:function(){// Resize & Position Caption
                        if (CaptionWidth+CaptionMarginLeft+CaptionMarginRight > $('.DOP_NextGENThumbnailGallery_Image', Container).width()){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).width($('.DOP_NextGENThumbnailGallery_Image', Container).width());
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).width(CaptionWidth+CaptionMarginLeft+CaptionMarginRight);
                        }
                        if (CaptionHeight+CaptionMarginTop+CaptionMarginBottom > $('.DOP_NextGENThumbnailGallery_Image', Container).height()){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).height($('.DOP_NextGENThumbnailGallery_Image', Container).height());
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).height(CaptionHeight+CaptionMarginTop+CaptionMarginBottom);
                        }
                        
                        if (CaptionPosition == 'top'){
                            prototypes.hCenterItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Caption', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width());
                            
                            if (CaptionOverImage == 'false'){
                                $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))-CaptionHeight);
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top')));
                            }
                            
                        }
                        else if (CaptionPosition == 'top-left'){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top')));
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')));
                        }
                        else if (CaptionPosition == 'top-right'){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top')));
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))+$('.DOP_NextGENThumbnailGallery_Image', Container).width()-$('.DOP_NextGENThumbnailGallery_Caption', Container).width());
                        }
                        else if (CaptionPosition == 'right'){
                            prototypes.vCenterItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Caption', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))+$('.DOP_NextGENThumbnailGallery_Image', Container).width()-$('.DOP_NextGENThumbnailGallery_Caption', Container).width());
                        }
                        else if (CaptionPosition == 'left'){
                            prototypes.vCenterItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Caption', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).height());
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')));
                        }
                        else if (CaptionPosition == 'bottom-left'){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_Caption', Container).height());
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left')));
                        }
                        else if (CaptionPosition == 'bottom-right'){
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_Caption', Container).height());
                            $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-left', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-left'))+$('.DOP_NextGENThumbnailGallery_Image', Container).width()-$('.DOP_NextGENThumbnailGallery_Caption', Container).width());
                        }
                        else{
                            
                            prototypes.hCenterItem($('.DOP_NextGENThumbnailGallery_ImageWrapper', Container), $('.DOP_NextGENThumbnailGallery_Caption', Container), $('.DOP_NextGENThumbnailGallery_ImageWrapper', Container).width());
                            
                            if (CaptionOverImage == 'false'){
                                $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_Caption', Container).height()+CaptionHeight);
                            }
                            else{
                                $('.DOP_NextGENThumbnailGallery_Caption', Container).css('margin-top', parseFloat($('.DOP_NextGENThumbnailGallery_Image', Container).css('margin-top'))+$('.DOP_NextGENThumbnailGallery_Image', Container).height()-$('.DOP_NextGENThumbnailGallery_Caption', Container).height());
                            }
                        }

                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).width($('.DOP_NextGENThumbnailGallery_Caption', Container).width()-CaptionMarginLeft-CaptionMarginRight);
                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).height($('.DOP_NextGENThumbnailGallery_Caption', Container).height()-CaptionMarginTop-CaptionMarginBottom);
                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).css('margin-top', CaptionMarginTop);
                        $('.DOP_NextGENThumbnailGallery_CaptionBg', Container).css('margin-left', CaptionMarginLeft);

                        $('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).css('margin-top', CaptionMarginTop+CaptionPaddingTop);
                        $('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).css('margin-left', CaptionMarginLeft+CaptionPaddingLeft);
                        $('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).width($('.DOP_NextGENThumbnailGallery_CaptionBg', Container).width()-CaptionPaddingLeft-CaptionPaddingRight);
                        $('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).height($('.DOP_NextGENThumbnailGallery_CaptionBg', Container).height()-CaptionPaddingTop-CaptionPaddingBottom);
                        $('.DOP_NextGENThumbnailGallery_CaptionTextContainer', Container).height($('.DOP_NextGENThumbnailGallery_CaptionTextWrapper', Container).height()-$('.DOP_NextGENThumbnailGallery_CaptionTitle', Container).height()-5);
                        
                        if (prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailGallery_CaptionTextContainer', Container).css('overflow', 'scroll');
                        }
                        else{
                            $('.DOP_NextGENThumbnailGallery_CaptionTextContainer', Container).jScrollPane();
                            if (CaptionScrollScrubColor != 'css'){
                                $('.jspDrag', Container).css('background-color', '#'+CaptionScrollScrubColor);
                            }
                            if (CaptionScrollBgColor != 'css'){
                                $('.jspTrack', Container).css('background-color', '#'+CaptionScrollBgColor);
                            }
                        }
                    },

                    initLightbox:function(){// Init Lightbox
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').css({'background-color': '#'+LightboxWindowColor,
                                                                                                                    'opacity': LightboxWindowAlpha/100});
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxBg').css({'background-color': '#'+LightboxBgColor,
                                                                                                                'opacity': LightboxBgAlpha/100});
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info').css({'background-color': '#'+LightboxNavigationInfoBgColor,
                                                                                                                             'color': '#'+LightboxNavigationInfoTextColor});                                  

                        if (!prototypes.isTouchDevice()){                                                                                                               
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').hover(function(){
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').stop(true, true).animate({'opacity': 1}, LightboxNavigationDisplayTime);
                            }, function(){
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').stop(true, true).animate({'opacity': 0}, LightboxNavigationDisplayTime);
                            });
                            
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_CloseBtn').hover(function(){
                                $('.normal', this).css('display', 'none');
                                $('.hover', this).css('display', 'block');
                            }, function(){
                                $('.normal', this).css('display', 'block');
                                $('.hover', this).css('display', 'none');                            
                            });
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').css('opacity', 1);
                            
                            if (LightboxNavigationTouchDeviceSwipeEnabled == 'true'){
                                methods.lightboxNavigationSwipe();
                            }
                        }
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').click(function(){
                            methods.previousLightbox();
                        });
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').click(function(){
                            methods.nextLightbox();
                        });
                                                
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxSocialShare').hover(function(){
                            setTimeout(function(){                                
                                $('#at15s').css('position', 'fixed');
                                
                                $('#at15s').hover(function(){
                                    $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').stop(true, true).animate({'opacity': 1}, 0);  
                                }, function(){
                                    //$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').stop(true, true).animate({'opacity': 0}, LightboxNavigationDisplayTime);
                                });
                            }, 10);
                        }, function(){});
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_CloseBtn').click(function(){
                           methods.hideLightbox();                           
                        });
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').click(function(){
                           methods.hideLightbox();                           
                        });
                        
                        $(document).keydown(function(e){
                            if (lightboxImageLoaded){
                                switch (e.keyCode){
                                    case 27:
                                        methods.hideLightbox();
                                        break;
                                    case 37:
                                        methods.previousLightbox();
                                        break;
                                    case 39:
                                        methods.nextLightbox();
                                        break;                                    
                                }
                            }
                        });
                    },
                    showLightbox:function(){// Show Lightbox                        
                        if (Slideshow == 'true'){
                            SlideshowStatus = 'pause';                        
                            $('.DOP_NextGENThumbnailGallery_NavigationPause', Container).css('display', 'none');
                            $('.DOP_NextGENThumbnailGallery_NavigationPlay', Container).css('display', 'block');    
                            clearInterval(SlideshowID);
                        }
                        methods.rpNavigation();
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).fadeIn(LightboxDisplayTime, function(){                        
                            if (Media[currentImage-1] != '' || LightboxMedia[currentImage-1] != ''){
                                methods.loadLightboxMedia(currentImage);      
                            }
                            else{
                                methods.loadLightboxImage(currentImage);
                            }
                        }); 
                    },
                    hideLightbox:function(){// Hide Lightbox   
                        if (lightboxImageLoaded){ 
                            $('#at15s').css('position', 'absolute');

                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).fadeOut(LightboxDisplayTime, function(){
                                lightboxCurrentImage = 0;
                                lightboxImageLoaded = false;
                                clearInterval(socialShareInterval);
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('opacity', 0);
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').html('');
                            });        
                        }
                    },
                    loadLightboxImage:function(no){// Load Lightbox Image
                        var img = new Image(),                      
                        startLightbox = false;
                        lightboxImageLoaded = false;
                        
                        if (lightboxCurrentImage == 0){
                            startLightbox = true;
                        }                        
                            
                        lightboxCurrentImage = no;
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info .current').html(no);
                        
                        if (no == 1){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').css('display', 'block');
                        }
                        
                        if (no == noImages){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').css('display', 'block');
                        }
                        
                        $(img).load(function(){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'none');
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').html(this);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox img').attr('alt', CaptionTitle[no-1]);
                            
                            if (SocialShareEnabled == 'true'){
                                methods.showSocialShare(true);
                            }
                            lightboxImageWidth = $(this).width();
                            lightboxImageHeight = $(this).height();
                            lightboxImageLoaded = true;
                            methods.rpLightboxImage();
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').stop(true, true).animate({'opacity': 1}, LightboxDisplayTime, function(){
                                if (!startLightbox){
                                    methods.loadImage(no);
                                }
                            });
                        }).attr('src', Images[no-1]);
                    },
                    loadLightboxMedia:function(no){// Load Lightbox Media                          
                        var startLightbox = false;
                        lightboxImageLoaded = false;
                        
                        if (lightboxCurrentImage == 0){
                            startLightbox = true;
                        }
                        
                        clearInterval(SlideshowID);
                        lightboxCurrentImage = no;
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info .current').html(no);
                        
                        if (no == 1){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_PrevBtn').css('display', 'block');
                        }
                        
                        if (no == noImages){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').css('display', 'none');
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_NextBtn').css('display', 'block');
                        }
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'none');
                        
                        if (LightboxMedia[no-1] != ''){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').html(LightboxMedia[no-1]);
                        }
                        else{
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').html(Media[no-1]);                            
                        }
                        
                        if (SocialShareEnabled == 'true'){
                            methods.showSocialShare(true);
                        }
                        
                        var iframeSRC =  $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().attr('src');
                        
                        if (iframeSRC != null){
                            if (iframeSRC.indexOf('?') != -1){
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().attr('src', iframeSRC+'&wmode=transparent');                                
                            }
                            else{
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().attr('src', iframeSRC+'?wmode=transparent');
                            }
                        }
                        
                        lightboxImageLoaded = true;
                        methods.rpLightboxMedia();

                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').stop(true, true).animate({'opacity': 1}, LightboxDisplayTime, function(){
                            if (!startLightbox){
                                if (Media[no-1] != ''){
                                    methods.loadMedia(no);
                                }
                                else{
                                    methods.loadImage(no);
                                }
                            }
                        });
                    },
                    previousLightbox:function(){
                        if (lightboxCurrentImage > 1){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').stop(true, true).animate({'opacity': 0}, LightboxDisplayTime, function(){
                                if (Media[lightboxCurrentImage-2] != '' || LightboxMedia[lightboxCurrentImage-2] != ''){
                                    methods.loadLightboxMedia(lightboxCurrentImage-1);
                                }
                                else{
                                    methods.loadLightboxImage(lightboxCurrentImage-1);
                                }
                            });   
                        }
                    },
                    nextLightbox:function(){
                        if (lightboxCurrentImage < noImages){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').stop(true, true).animate({'opacity': 0}, LightboxDisplayTime, function(){
                                if (Media[lightboxCurrentImage] != '' || LightboxMedia[lightboxCurrentImage] != ''){
                                    methods.loadLightboxMedia(lightboxCurrentImage+1);
                                }
                                else{
                                    methods.loadLightboxImage(lightboxCurrentImage+1);
                                }
                            });  
                        }
                    },
                    rpLightboxImage:function(){// Resize & Position Lightbox Image
                        var maxWidth = $(window).width()-($(window).width() <= 640 ? 0:LightboxMarginRight)-($(window).width() <= 640 ? 0:LightboxMarginLeft)-LightboxPaddingRight-LightboxPaddingLeft, 
                        maxHeight = $(window).height()-($(window).width() <= 640 ? 0:LightboxMarginTop)-($(window).width() <= 640 ? 0:LightboxMarginBottom)-LightboxPaddingTop-LightboxPaddingBottom,
                        currW, currH;
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'none');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).width($(document).width());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).height($(document).height());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').width($(document).width());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').height($(document).height());
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css({'top': ($(window).height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').height())/2,
                                                                                                                    'left': ($(window).width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').width())/2});
                        if (lightboxCurrentImage == 0){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'none');                         
                        }
                        
                        if (lightboxCurrentImage == 0 || lightboxImageLoaded){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'none');
                        }
                        
                        if (lightboxImageLoaded){  
                            if (lightboxImageWidth <= maxWidth && lightboxImageHeight <= maxHeight){
                                currW = lightboxImageWidth;
                                currH = lightboxImageHeight;
                            }
                            else{
                                currH = maxHeight;
                                currW = (lightboxImageWidth*maxHeight)/lightboxImageHeight;

                                if (currW > maxWidth){
                                    currW = maxWidth;
                                    currH = (lightboxImageHeight*maxWidth)/lightboxImageWidth;
                                }
                            }
                            
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox img').width(currW);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox img').height(currH);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox img').css({'margin-top': LightboxPaddingTop,
                                                                                                                      'margin-left': LightboxPaddingLeft});
                            
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxBg').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxBg').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height())/2+$(window).scrollTop(),
                                                                                                                           'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width())/2+$(window).scrollLeft()});
                            methods.rpLightboxNavigation();
                        }
                    },
                    rpLightboxMedia:function(){// Resize & Position Lightbox Media
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'none');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').css({'height': $(document).height(),
                                                                                                              'width': $(document).width()});
                                                                                                          
                        var currW = $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().width(),
                        currH = $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().height();
                                                
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).width($(document).width());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).height($(document).height());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').width($(document).width());
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxWindow').height($(document).height());
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'block');
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css({'top': ($(window).height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').height())/2,
                                                                                                                    'left': ($(window).width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').width())/2});
                        if (lightboxCurrentImage == 0){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID).css('display', 'none');                         
                        }
                        
                        if (lightboxCurrentImage == 0 || lightboxImageLoaded){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxLoader').css('display', 'none');
                        }
                        
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').css({'height': $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().height(),
                                                                                                              'width': $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().width()});

                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().css({'margin-top': LightboxPaddingTop,
                                                                                                                         'margin-left': LightboxPaddingLeft});
                                                                                                                  
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxBg').width(currW+LightboxPaddingRight+LightboxPaddingLeft);
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxBg').height(currH+LightboxPaddingTop+LightboxPaddingBottom);
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css({'margin-top': ($(window).height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height())/2+$(window).scrollTop(),
                                                                                                                       'margin-left': ($(window).width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width())/2+$(window).scrollLeft()});                                                                                                                                                                                                                                              
                        methods.rpLightboxNavigation();
                    },
                    rpLightboxNavigation:function(){// Resize & Position Lightbox Navigation
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigationButtons').css({'margin-top': ($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigationButtons').children().height())/2,
                                                                                                                               'left': LightboxPaddingLeft,
                                                                                                                               'width': $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().width()});                 
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigationExtraButtons').css({'margin-top': LightboxPaddingTop+10,
                                                                                                                                    'left': LightboxPaddingLeft,
                                                                                                                                    'width': $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_Lightbox').children().width()});
                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info').css({'margin-top': $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').height()-LightboxPaddingBottom-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info').height(),
                                                                                                                             'left': ($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width()-$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation_Info').width())/2});                        
                    },     
                    lightboxNavigationSwipe:function(){
                        var prev, curr, touch, initial, positionX;

                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').bind('touchstart', function(e){
                            touch = e.originalEvent.touches[0];
                            prev = touch.clientX;
                            initial = parseFloat($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left')); 
                        });

                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').bind('touchmove', function(e){
                            e.preventDefault();
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').css('opacity', 0);

                            touch = e.originalEvent.touches[0],
                            curr = touch.clientX,
                            positionX = curr>prev ? parseInt($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left'))+(curr-prev):parseInt($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left'))-(prev-curr);

                            methods.navigationDisplay('none'); 
                            prev = curr;
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left', positionX);
                        });

                        $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').bind('touchend', function(e){
                            if (!prototypes.isChromeMobileBrowser()){
                                e.preventDefault();
                            }
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxNavigation').css('opacity', 1);
                                
                            if (parseFloat($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left')) < 0 && lightboxCurrentImage < noImages){
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css({'margin-left': initial, 'opacity': 0});
                                methods.nextLightbox();
                            }
                            else if (parseFloat($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left'))+$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').width() > $(window).width() && lightboxCurrentImage > 1){
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css({'margin-left': initial, 'opacity': 0});
                                methods.previousLightbox();
                            }
                            else{
                                $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxContainer').css('margin-left', initial);
                            }
                        });
                    },               
                                                        
                    initSocialShare:function(){
                        var HTML = new Array(), HTMLLightbox = new Array();
                        
                        HTML.push('       <div class="addthis_toolbox addthis_default_style">');
                        HTML.push('            <a class="addthis_button" addthis:url="" addthis:title="">');
                        HTML.push('                <img src="'+SocialShare+'" alt="" />');                            
                        HTML.push('            </a>');
                        HTML.push('       </div>');
                        
                        HTMLLightbox.push('       <div class="addthis_toolbox addthis_default_style">');
                        HTMLLightbox.push('            <a class="addthis_button" addthis:url="" addthis:title="">');
                        HTMLLightbox.push('                <img src="'+SocialShareLightbox+'" alt="" />');
                        HTMLLightbox.push('            </a>');
                        HTMLLightbox.push('       </div>');
                        
                        if ($('.DOP_NextGENThumbnailGallery_SocialShare', Container).html() == ''){
                            $('.DOP_NextGENThumbnailGallery_SocialShare', Container).html(HTML.join(''));
                        }
                        
                        if ($('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxSocialShare').html() == ''){
                            $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxSocialShare').html(HTMLLightbox.join(''));                            
                        }
                    },
                    showSocialShare:function(lightbox){
                        var URL = window.location.href+(window.location.href.indexOf('?') != -1 ? '&':'?')+'dop_thumbnail_gallery_id='+ID+'&dop_thumbnail_gallery_share='+currentImage+'&dop_thumbnail_gallery_lightbox='+lightbox;
                        
                        if (window.addthis == undefined){
                            $.getScript( 'http://s7.addthis.com/js/250/addthis_widget.js' , function(){
                                if (window.addthis){ 
                                    window.addthis.ost = 0; 
                                    window.addthis.init();

                                    window.addthis.update('share', 'url', URL);
                                    window.addthis.update('share', 'title', CaptionTitle[currentImage-1]);

                                    $('#at15s').css('top', parseFloat($('#at15s').css('top'))-$(window).scrollTop());
                                } 
                            }); 
                        }
                        else{
                            window.addthis.update('share', 'url', URL);
                            window.addthis.update('share', 'title', CaptionTitle[currentImage-1]);
                        }
                        
                        clearInterval(socialShareInterval);
                        socialShareInterval = setInterval(methods.rpSocialShare, 100);
                    },
                    rpSocialShare:function(){
                        if ($('#at15s') != undefined && lightboxImageLoaded){
                            $('#at15s').css('top', $('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxSocialShare').offset().top+$('#DOP_NextGENThumbnailGallery_LightboxWrapper_'+ID+' .DOP_NextGENThumbnailGallery_LightboxSocialShare').children().height()-$(window).scrollTop());
                        }
                    },
                    
                    initTooltip:function(){// Init Tooltip                        
                        $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).mousemove(function(e){
                            var mousePositionX = e.clientX-$(this).offset().left+parseInt($(this).css('margin-left'))+$(document).scrollLeft();
                            var mousePositionY = e.clientY-$(this).offset().top+parseInt($(this).css('margin-top'))+$(document).scrollTop();

                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('margin-left', mousePositionX-10);
                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('margin-top', mousePositionY-$('.DOP_NextGENThumbnailGallery_Tooltip', Container).height()-15);
                        });
                    },
                    showTooltip:function(no){// Resize, Position & Display the Tooltip
                        var HTML = new Array();
                        HTML.push(CaptionTitle[no]);
                        HTML.push('<div class="DOP_NextGENThumbnailGallery_Tooltip_ArrowBorder"></div>');
                        HTML.push('<div class="DOP_NextGENThumbnailGallery_Tooltip_Arrow"></div>');
                        $('.DOP_NextGENThumbnailGallery_Tooltip', Container).html(HTML.join(""));

                        if (TooltipBgColor != 'css'){
                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('background-color', '#'+TooltipBgColor);
                            $('.DOP_NextGENThumbnailGallery_Tooltip_Arrow', Container).css('border-top-color', '#'+TooltipBgColor);
                        }
                        if (TooltipStrokeColor != 'css'){
                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('border-color', '#'+TooltipStrokeColor);
                            $('.DOP_NextGENThumbnailGallery_Tooltip_ArrowBorder', Container).css('border-top-color', '#'+TooltipStrokeColor);
                        }
                        if (TooltipTextColor != 'css'){
                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('color', '#'+TooltipTextColor);
                        }
                        if (CaptionTitle[no] != '' || prototypes.isTouchDevice()){
                            $('.DOP_NextGENThumbnailGallery_Tooltip', Container).css('display', 'block');
                        }
                    },

                    initAutoHide:function(){// Init Auto Hide
                        HideID = setInterval(methods.hideItems, parseInt(AutoHideTime));

                        $('.DOP_NextGENThumbnailGallery_Container', Container).hover(function(){
                            methods.showItems();
                        }, function(){
                            HideID = setInterval(methods.hideItems, parseInt(AutoHideTime));
                        });
                    },
                    showItems:function(){// Show Items
                        clearInterval(HideID);
                        ItemsHidden = false;

                        if (imageLoaded){
                            methods.navigationDisplay('block');
                        }

                        if (ThumbnailsPosition == 'top'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': 0}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'right'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': $('.DOP_NextGENThumbnailGallery_Container', Container).width()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'bottom'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': $('.DOP_NextGENThumbnailGallery_Container', Container).height()-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height()}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'left'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': 0}, AutoHideDisplayTime);
                        }
                        methods.showCaption();
                    },
                    hideItems:function(){// Hide Items
                        clearInterval(HideID);
                        ItemsHidden = true;

                        if (NavigationEnabled == 'true'){     
                            methods.navigationDisplay('none');
                        }

                        if (ThumbnailsPosition == 'top'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': 0-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).height()}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'right'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': $('.DOP_NextGENThumbnailGallery_Container', Container).width()}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'bottom'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-top': $('.DOP_NextGENThumbnailGallery_Container', Container).height()}, AutoHideDisplayTime);
                        }
                        if (ThumbnailsPosition == 'left'){
                            $('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).stop(true, true).animate({'margin-left': 0-$('.DOP_NextGENThumbnailGallery_ThumbnailsContainer', Container).width()}, AutoHideDisplayTime);
                        }
                        methods.hideCaption();
                    }
                  },        
                  
        prototypes = {
                        resizeItem:function(parent, child, cw, ch, dw, dh, pos){// Resize & Position an item (the item is 100% visible)
                            var currW = 0, currH = 0;

                            if (dw <= cw && dh <= ch){
                                currW = dw;
                                currH = dh;
                            }
                            else{
                                currH = ch;
                                currW = (dw*ch)/dh;

                                if (currW > cw){
                                    currW = cw;
                                    currH = (dh*cw)/dw;
                                }
                            }

                            child.width(currW);
                            child.height(currH);
                            switch(pos.toLowerCase()){
                                case 'top':
                                    prototypes.topItem(parent, child, ch);
                                    break;
                                case 'bottom':
                                    prototypes.bottomItem(parent, child, ch);
                                    break;
                                case 'left':
                                    prototypes.leftItem(parent, child, cw);
                                    break;
                                case 'right':
                                    prototypes.rightItem(parent, child, cw);
                                    break;
                                case 'horizontal-center':
                                    prototypes.hCenterItem(parent, child, cw);
                                    break;
                                case 'vertical-center':
                                    prototypes.vCenterItem(parent, child, ch);
                                    break;
                                case 'center':
                                    prototypes.centerItem(parent, child, cw, ch);
                                    break;
                                case 'top-left':
                                    prototypes.tlItem(parent, child, cw, ch);
                                    break;
                                case 'top-center':
                                    prototypes.tcItem(parent, child, cw, ch);
                                    break;
                                case 'top-right':
                                    prototypes.trItem(parent, child, cw, ch);
                                    break;
                                case 'middle-left':
                                    prototypes.mlItem(parent, child, cw, ch);
                                    break;
                                case 'middle-right':
                                    prototypes.mrItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-left':
                                    prototypes.blItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-center':
                                    prototypes.bcItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-right':
                                    prototypes.brItem(parent, child, cw, ch);
                                    break;
                            }
                        },
                        resizeItem2:function(parent, child, cw, ch, dw, dh, pos){// Resize & Position an item (the item covers all the container)
                            var currW = 0, currH = 0;

                            currH = ch;
                            currW = (dw*ch)/dh;

                            if (currW < cw){
                                currW = cw;
                                currH = (dh*cw)/dw;
                            }

                            child.width(currW);
                            child.height(currH);

                            switch(pos.toLowerCase()){
                                case 'top':
                                    prototypes.topItem(parent, child, ch);
                                    break;
                                case 'bottom':
                                    prototypes.bottomItem(parent, child, ch);
                                    break;
                                case 'left':
                                    prototypes.leftItem(parent, child, cw);
                                    break;
                                case 'right':
                                    prototypes.rightItem(parent, child, cw);
                                    break;
                                case 'horizontal-center':
                                    prototypes.hCenterItem(parent, child, cw);
                                    break;
                                case 'vertical-center':
                                    prototypes.vCenterItem(parent, child, ch);
                                    break;
                                case 'center':
                                    prototypes.centerItem(parent, child, cw, ch);
                                    break;
                                case 'top-left':
                                    prototypes.tlItem(parent, child, cw, ch);
                                    break;
                                case 'top-center':
                                    prototypes.tcItem(parent, child, cw, ch);
                                    break;
                                case 'top-right':
                                    prototypes.trItem(parent, child, cw, ch);
                                    break;
                                case 'middle-left':
                                    prototypes.mlItem(parent, child, cw, ch);
                                    break;
                                case 'middle-right':
                                    prototypes.mrItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-left':
                                    prototypes.blItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-center':
                                    prototypes.bcItem(parent, child, cw, ch);
                                    break;
                                case 'bottom-right':
                                    prototypes.brItem(parent, child, cw, ch);
                                    break;
                            }
                        },

                        topItem:function(parent, child, ch){// Position item on Top
                            parent.height(ch);
                            child.css('margin-top', 0);
                        },
                        bottomItem:function(parent, child, ch){// Position item on Bottom
                            parent.height(ch);
                            child.css('margin-top', ch-child.height());
                        },
                        leftItem:function(parent, child, cw){// Position item on Left
                            parent.width(cw);
                            child.css('margin-left', 0);
                        },
                        rightItem:function(parent, child, cw){// Position item on Right
                            parent.width(cw);
                            child.css('margin-left', parent.width()-child.width());
                        },
                        hCenterItem:function(parent, child, cw){// Position item on Horizontal Center
                            parent.width(cw);
                            child.css('margin-left', (cw-child.width())/2);
                        },
                        vCenterItem:function(parent, child, ch){// Position item on Vertical Center
                            parent.height(ch);
                            child.css('margin-top', (ch-child.height())/2);
                        },
                        centerItem:function(parent, child, cw, ch){// Position item on Center
                            prototypes.hCenterItem(parent, child, cw);
                            prototypes.vCenterItem(parent, child, ch);
                        },
                        tlItem:function(parent, child, cw, ch){// Position item on Top-Left
                            prototypes.topItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        tcItem:function(parent, child, cw, ch){// Position item on Top-Center
                            prototypes.topItem(parent, child, ch);
                            prototypes.hCenterItem(parent, child, cw);
                        },
                        trItem:function(parent, child, cw, ch){// Position item on Top-Right
                            prototypes.topItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        mlItem:function(parent, child, cw, ch){// Position item on Middle-Left
                            prototypes.vCenterItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        mrItem:function(parent, child, cw, ch){// Position item on Middle-Right
                            prototypes.vCenterItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        blItem:function(parent, child, cw, ch){// Position item on Bottom-Left
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.leftItem(parent, child, cw);
                        },
                        bcItem:function(parent, child, cw, ch){// Position item on Bottom-Center
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.hCenterItem(parent, child, cw);
                        },
                        brItem:function(parent, child, cw, ch){// Position item on Bottom-Right
                            prototypes.bottomItem(parent, child, ch);
                            prototypes.rightItem(parent, child, cw);
                        },
                        
                        touchNavigation:function(parent, child){// One finger navigation for touchscreen devices
                            var prevX, prevY, currX, currY, touch, childX, childY;
                            
                            parent.bind('touchstart', function(e){
                                touch = e.originalEvent.touches[0];
                                prevX = touch.clientX;
                                prevY = touch.clientY;
                            });

                            parent.bind('touchmove', function(e){                                
                                touch = e.originalEvent.touches[0];
                                currX = touch.clientX;
                                currY = touch.clientY;
                                childX = currX>prevX ? parseInt(child.css('margin-left'))+(currX-prevX):parseInt(child.css('margin-left'))-(prevX-currX);
                                childY = currY>prevY ? parseInt(child.css('margin-top'))+(currY-prevY):parseInt(child.css('margin-top'))-(prevY-currY);

                                if (childX < (-1)*(child.width()-parent.width())){
                                    childX = (-1)*(child.width()-parent.width());
                                }
                                else if (childX > 0){
                                    childX = 0;
                                }
                                else{                                    
                                    e.preventDefault();
                                }

                                if (childY < (-1)*(child.height()-parent.height())){
                                    childY = (-1)*(child.height()-parent.height());
                                }
                                else if (childY > 0){
                                    childY = 0;
                                }
                                else{                                    
                                    e.preventDefault();
                                }

                                prevX = currX;
                                prevY = currY;

                                if (parent.width() < child.width()){
                                    child.css('margin-left', childX);
                                }
                                
                                if (parent.height() < child.height()){
                                    child.css('margin-top', childY);
                                }
                            });

                            parent.bind('touchend', function(e){
                                if (!prototypes.isChromeMobileBrowser()){
                                    e.preventDefault();
                                }
                            });
                        },

			rgb2hex:function(rgb){// Convert RGB color to HEX
                            var hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

                            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                            return (isNaN(rgb[1]) ? '00':hexDigits[(rgb[1]-rgb[1]%16)/16]+hexDigits[rgb[1]%16])+
                                   (isNaN(rgb[2]) ? '00':hexDigits[(rgb[2]-rgb[2]%16)/16]+hexDigits[rgb[2]%16])+
                                   (isNaN(rgb[3]) ? '00':hexDigits[(rgb[3]-rgb[3]%16)/16]+hexDigits[rgb[3]%16]);
			},

                        dateDiference:function(date1, date2){// Diference between 2 dates
                            var time1 = date1.getTime(),
                            time2 = date2.getTime(),
                            diff = Math.abs(time1-time2),
                            one_day = 1000*60*60*24;
                            
                            return parseInt(diff/(one_day))+1;
                        },
                        noDays:function(date1, date2){// Returns no of days between 2 days
                            var time1 = date1.getTime(),
                            time2 = date2.getTime(),
                            diff = Math.abs(time1-time2),
                            one_day = 1000*60*60*24;
                            
                            return Math.round(diff/(one_day))+1;
                        },
                        timeLongItem:function(item){// Return day/month with 0 in front if smaller then 10
                            if (item < 10){
                                return '0'+item;
                            }
                            else{
                                return item;
                            }
                        },
                        timeToAMPM:function(item){// Returns time in AM/PM format
                            var hour = parseInt(item.split(':')[0], 10),
                            minutes = item.split(':')[1],
                            result = '';
                            
                            if (hour == 0){
                                result = '12';
                            }
                            else if (hour > 12){
                                result = prototypes.timeLongItem(hour-12);
                            }
                            else{
                                result = prototypes.timeLongItem(hour);
                            }
                            
                            result += ':'+minutes+' '+(hour < 12 ? 'AM':'PM');
                            
                            return result;
                        },

                        stripslashes:function(str){// Remove slashes from string
                            return (str + '').replace(/\\(.?)/g, function (s, n1) {
                                switch (n1){
                                    case '\\':
                                        return '\\';
                                    case '0':
                                        return '\u0000';
                                    case '':
                                        return '';
                                    default:
                                        return n1;
                                }
                            });
                        },
                        
                        randomize:function(theArray){// Randomize the items of an array
                            theArray.sort(function(){
                                return 0.5-Math.random();
                            });
                            return theArray;
                        },
                        randomString:function(string_length){// Create a string with random elements
                            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
                            random_string = '';

                            for (var i=0; i<string_length; i++){
                                var rnum = Math.floor(Math.random()*chars.length);
                                random_string += chars.substring(rnum,rnum+1);
                            }
                            return random_string;
                        },

                        isIE8Browser:function(){// Detect the browser IE8
                            var isIE8 = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('msie 8') != -1){
                                isIE8 = true;
                            }
                            return isIE8;
                        },
                        isIEBrowser:function(){// Detect the browser IE
                            var isIE = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('msie') != -1){
                                isIE = true;
                            }
                            return isIE;
                        },
                        isChromeMobileBrowser:function(){// Detect the browser Mobile Chrome
                            var isChromeMobile = false,
                            agent = navigator.userAgent.toLowerCase();

                            if (agent.indexOf('crios') != -1){
                                isChromeMobile = true;
                            }
                            return isChromeMobile;
                        },
                        isTouchDevice:function(){// Detect touchscreen devices
                            var os = navigator.platform;
                            
                            if (os.toLowerCase().indexOf('win') != -1){
                                return window.navigator.msMaxTouchPoints;
                            }
                            else {
                                return 'ontouchstart' in document;
                            }
                        },

                        openLink:function(url, target){// Open a link
                            switch (target.toLowerCase()){
                                case '_blank':
                                    window.open(url);
                                    break;
                                case '_top':
                                    top.location.href = url;
                                    break;
                                case '_parent':
                                    parent.location.href = url;
                                    break;
                                default:    
                                    window.location = url;
                            }
                        },

                        validateCharacters:function(str, allowedCharacters){// Verify if a string contains allowed characters
                            var characters = str.split(''), i;

                            for (i=0; i<characters.length; i++){
                                if (allowedCharacters.indexOf(characters[i]) == -1){
                                    return false;
                                }
                            }
                            return true;
                        },
                        cleanInput:function(input, allowedCharacters, firstNotAllowed, min){// Remove characters that aren't allowed from a string
                            var characters = $(input).val().split(''),
                            returnStr = '', i, startIndex = 0;

                            if (characters.length > 1 && characters[0] == firstNotAllowed){
                                startIndex = 1;
                            }
                            
                            for (i=startIndex; i<characters.length; i++){
                                if (allowedCharacters.indexOf(characters[i]) != -1){
                                    returnStr += characters[i];
                                }
                            }
                                
                            if (min > returnStr){
                                returnStr = min;
                            }
                            
                            $(input).val(returnStr);
                        },
                        validEmail:function(email){// Validate email
                            var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            
                            if (filter.test(email)){
                                return true;
                            }
                            return false;
                        },
                        
                        $_GET:function(variable){// Parse $_GET variables
                            var url = window.location.href.split('?')[1],
                            variables = url != undefined ? url.split('&'):[],
                            i; 
                            
                            for (i=0; i<variables.length; i++){
                                if (variables[i].indexOf(variable) != -1){
                                    return variables[i].split('=')[1];
                                    break;
                                }
                            }
                            
                            return undefined;
                        },
                        acaoBuster:function(dataURL){// Access-Control-Allow-Origin buster
                            var topURL = window.location.href,
                            pathPiece1 = '', pathPiece2 = '';
                            
                            if (dataURL.indexOf('https') != -1 || dataURL.indexOf('http') != -1){
                                if (topURL.indexOf('http://www.') != -1){
                                    pathPiece1 = 'http://www.';
                                }
                                else if (topURL.indexOf('http://') != -1){
                                    pathPiece1 = 'http://';
                                }
                                else if (topURL.indexOf('https://www.') != -1){
                                    pathPiece1 = 'https://www.';
                                }
                                else if (topURL.indexOf('https://') != -1){
                                    pathPiece1 = 'https://';
                                }
                                    
                                if (dataURL.indexOf('http://www.') != -1){
                                    pathPiece2 = dataURL.split('http://www.')[1];
                                }
                                else if (dataURL.indexOf('http://') != -1){
                                    pathPiece2 = dataURL.split('http://')[1];
                                }
                                else if (dataURL.indexOf('https://www.') != -1){
                                    pathPiece2 = dataURL.split('https://www.')[1];
                                }
                                else if (dataURL.indexOf('https://') != -1){
                                    pathPiece2 = dataURL.split('https://')[1];
                                }
                                
                                return pathPiece1+pathPiece2;
                            }
                            else{
                                return dataURL;
                            }
                        },
                        
                        doHideBuster:function(item){// Make all parents & current item visible
                            var parent = item.parent(),
                            items = new Array();
                                
                            if (item.prop('tagName').toLowerCase() != 'body'){
                                items = prototypes.doHideBuster(parent);
                            }
                            
                            if (item.css('display') == 'none'){
                                item.css('display', 'block');
                                items.push(item);
                            }
                            
                            return items;
                        },
                        undoHideBuster:function(items){// Hide items in the array
                            var i;
                            
                            for (i=0; i<items.length; i++){
                                items[i].css('display', 'none');
                            }
                        },
                       
                        setCookie:function(c_name, value, expiredays){// Set cookie (name, value, expire in no days)
                            var exdate = new Date();
                            exdate.setDate(exdate.getDate()+expiredays);

                            document.cookie = c_name+"="+escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toUTCString())+";javahere=yes;path=/";
                        },
                        readCookie:function(name){// Read cookie (name) 
                            var nameEQ = name+"=",
                            ca = document.cookie.split(";");

                            for (var i=0; i<ca.length; i++){
                                var c = ca[i];

                                while (c.charAt(0)==" "){
                                    c = c.substring(1,c.length);            
                                } 

                                if (c.indexOf(nameEQ) == 0){
                                    return unescape(c.substring(nameEQ.length, c.length));
                                } 
                            }
                            return null;
                        },
                        deleteCookie:function(c_name, path, domain){// Delete cookie (name, path, domain)
                            if (readCookie(c_name)){
                                document.cookie = c_name+"="+((path) ? ";path="+path:"")+((domain) ? ";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";
                            }
                        }
                    };

        return methods.init.apply(this);
    }
})(jQuery);