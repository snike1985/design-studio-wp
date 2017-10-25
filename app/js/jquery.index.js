"use strict";
( function(){

    $(function(){

        if ($('.hero').length) {
            var isSceneCreated = false,
                timeline = new TimelineMax(),
                controller = new ScrollMagic.Controller(),
                scene = new ScrollMagic.Scene({
                duration: '100%',
                offset: 0,
                triggerElement: '#hero',
                triggerHook: 0
            });

            var createAnimateScene = function () {
                timeline = new TimelineMax();
                controller = new ScrollMagic.Controller();
                scene = new ScrollMagic.Scene({
                    duration: '100%',
                    offset: 0,
                    triggerElement: '#hero',
                    triggerHook: 0
                });

                timeline.to('#path5', 1, {y: -100})
                    .to('#path3', 1, {y: -50}, .8)
                    .to('#path4', 1, {y: -50}, .5)
                    .to('#path2', 1.5, {y: -110}, 1)
                    .to('#path1', 2, {y: -170}, 1);

                scene.setTween(timeline);
                scene.setPin('.hero');
                scene.addTo(controller);
            };

            var firstAnimate = function () {
                var delay = .5,
                    startTimeLine = new TimelineMax({
                    onComplete: function(){
                        console.log('complete');
                        $('body').removeClass('no-scrolling');
                    }
                });

                startTimeLine.from('#path5', .5, {y: -100}, delay)
                    .from('#path3', .5, {y: -50}, .3 + delay)
                    .from('#path4', .5, {y: -50}, 0 + delay)
                    .from('#path2', .8, {y: -110}, .5 + delay)
                    .from('#path1', 1, {y: -170}, .5 + delay);
            };

            var killScene = function () {
                timeline.kill();
                scene.destroy();
            };

            $(window).on({
                'load': function () {
                    var siteWidth = $('.site').width();

                    if ( siteWidth >= 1200 ) {

                        $('body').addClass('no-scrolling');
                        firstAnimate();

                        createAnimateScene();
                        isSceneCreated = true;
                    }
                },
                'resize': function () {
                    var siteWidth = $('.site').width();

                    if ( siteWidth < 1200 ) {
                        if (isSceneCreated) {
                            killScene();
                            isSceneCreated = false;
                        }
                    } else {
                        if (!isSceneCreated) {
                            createAnimateScene();
                            isSceneCreated = true;
                        }
                    }
                }
            });
        }

        $('.instagramm-slider').each( function() {
            var curElem = $(this),
                limit = curElem.data('limit'),
                clientId = curElem.data('client-id'),
                userId = curElem.data('user-id'),
                accessToken = curElem.data('access-token'),
                feed = new Instafeed({
                get: 'user',
                clientId: clientId,
                userId: userId,
                accessToken: accessToken,
                sortBy: 'most-recent',
                resolution: 'low_resolution',
                limit: limit,
                template: '<a href="{{link}}" class="swiper-slide"><span style="background-image: url({{image}})"></span></a>',
                after: function () {
                    setTimeout(function () {
                        new InstagrammSlider( curElem );
                    }, 2000)
                }
            });
            feed.run();
        } );

        $('.blog').each( function() {
            new Blog( $(this) );
        } );

        $('.case').each( function() {
            new Case( $(this) );
            new Sliders ( $( this ) );
        } );

        $('.contact-us').each( function() {
            new ContactUs( $(this) );
        } );

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.request').each( function(i) {
            new Request( $(this), i );
        } );

        $('.site').each( function() {
            new Site( $(this) );
        } );

        $('.show').each( function() {
            new Show( $(this) );
        } );

        $('.showing-text').each( function() {
            new ShowingText( $(this) );
        } );

        $('.tabs').each( function() {
            new Tabs( $(this) );
        } );

        $('.testimonials').each( function() {
            new Testimonials( $(this) );
        } );

        $('.works_isotope').each( function() {
            new Works( $(this) );
        } );

        $.each( $( '.team' ), function() {
            new Sliders ( $( this ) );
        } );

        $.each( $( '.cases' ), function() {
            new Sliders ( $( this ) );
        } );

        $.each( $( '.help' ), function() {
            new Sliders ( $( this ) );
        } );

        $.each( $( '.contact-cards' ), function() {
            new Sliders ( $( this ) );
        } );

        $.each( $( '.outsource' ), function() {
            new Sliders ( $( this ) );
        } );

    });

    var InstagrammSlider = function(obj) {

        //private properties
        var _obj = obj,
            _slider = _obj.find('.swiper-container'),
            _swiper = null;

        //private methods
        var _addEvents = function() {

            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    slidesPerView: 5,
                    paginationClickable: true,
                    loop: true,
                    spaceBetween: 0,
                    breakpoints: {
                        1200: {
                            slidesPerView: 4
                        }
                    }
                });
            },
            _init = function() {
                _addEvents();
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var Blog = function(obj) {

        //private properties
        var _obj = obj,
            _menu = _obj.find( '.blog__menu' ),
            _submit = _obj.find( 'input[type=submit]' ),
            _btn = document.createElement('div');

        //private methods
        var _addEvents = function() {

                $( window ).on({
                    'resize': function() {
                        _menu.perfectScrollbar('update');
                    }
                });

            },
            _initScroll = function() {
                _menu.perfectScrollbar();
            },
            _init = function() {
                _btn.className = 'btn';
                _btn.innerHTML = '<span>Send</span>';
                _submit.after(_btn);
                _addEvents();
                _initScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var Case = function(obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                $( window ).on({
                    'resize': function() {

                    }
                });

            },
            _initScroll = function() {

            },
            _init = function() {
                var swiper = new Swiper( '.swiper-container', {
                    nextButton: '.case__slider-next',
                    prevButton: '.case__slider-prev',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 0,
                    loop: true
                });
                _addEvents();
                _initScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var ContactUs = function(obj) {

        //private properties
        var _obj = obj,
            _form = _obj.find( '.contact-us__form' ),
            _submit = _obj.find( 'input[type=submit]' ),
            _btn = document.createElement('div');

        //private methods
        var _addEvents = function() {

                $('.contact-us__form .btn').on({
                    'click': function () {
                        _form.trigger('submit');
                    }
                });

            },
            _init = function() {
                _btn.className = 'btn';
                _btn.innerHTML = '<span>Send</span>';
                _submit.after(_btn);
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function(obj) {

        //private properties
        var _obj = obj,
            _objWrap = _obj.find('.menu__wrap');

        //private methods
        var _addEvents = function() {

                _obj.on({
                    'click': function() {

                        _obj.toggleClass('open');

                        if (_obj.hasClass('open')) {
                            $('.site')[0].obj.setCanUseScroll(false);
                        } else {
                            $('.site')[0].obj.setCanUseScroll(true);
                        }
                    }
                });

                _objWrap.on({
                    'click': function(e) {

                        e.stopPropagation();
                    }
                });

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Request = function(obj, objIndex) {

        //private properties
        var _obj = obj,
            _btnOpen = $( '.request-btn' ),
            _btnClose = _obj.find( '.request__close' ),
            _scrollWrap = _obj.find('.request__wrap'),
            _range = _obj.find('input[type=range]'),
            _rangeMin = _range.attr('min'),
            _rangeMax = _range.attr('max'),
            _curValue = _obj.find('.request__range'),
            _radioElems = _obj.find('.wpcf7-list-item'),
            _fontSize = 30;

        //private methods
        var _addEvents = function() {

                _btnOpen.on({
                    'click': function() {
                       _open();
                       return false;
                    }
                });

                _obj.on({
                    'click': function() {
                       _close();
                    }
                });

                _scrollWrap.on({
                    'click': function(e) {
                        e.stopPropagation();
                    }
                });

                _btnClose.on({
                    'click': function() {
                        _close();
                        return false;
                    }
                });

                $( window ).on({
                    'resize': function() {
                        _scrollWrap.perfectScrollbar('update');
                    }
                });

                _range.on({
                    'input': function() {
                        var currentValue = this.value;
                        _changeValue(currentValue);
                    }
                });

                _range.on({
                    'change': function() {
                        var currentValue = this.value;
                        _changeValue(currentValue);
                    }
                });

            },
            _open = function () {
                _obj.addClass('open');
                $('.site')[0].obj.setCanUseScroll(false);
            },
            _close = function () {
                _obj.removeClass('open');
                $('.site')[0].obj.setCanUseScroll(true);
            },
            _createNiceRadio = function () {

                for (var i = 0; i < _radioElems.length; i++) {
                    var text = _radioElems.eq(i).find('.wpcf7-list-item-label').text(),
                    currentInput = _radioElems.eq(i).find('input');
                    _radioElems.eq(i).addClass('nice-radio');
                    currentInput.attr('id', 'nice-radio_' + objIndex + '' + i);
                    currentInput.after('<label for="nice-radio_' + objIndex + '' + i +'">' + text + '</label>');
                }
            },
            _changeValue = function (val) {
                _curValue.text(val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
                _curValue.css({ 'font-size': _fontSize*val/(_rangeMax - _rangeMin) + 15 + 'px' });
            },
            _initScroll = function() {
                _scrollWrap.perfectScrollbar();
            },
            _init = function() {
                _addEvents();
                _range.after(_curValue);
                _changeValue(((_range.attr('max') - _range.attr('min'))/2).toString());
                _createNiceRadio();
                _initScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var Site = function(obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window ),
            _canUseSmoothScroll = true,
            _canMove = true,
            _loader = $('.loader');

        //private methods
        var _addEvents = function() {

                _window.on( {
                    'scroll': function() {
                        var scrollTop = $(window).scrollTop();
                        _move( scrollTop );
                    },
                    'load': function() {
                        var scrollTop = $(window).scrollTop();
                        $('html, body').animate({scrollTop: 0},1);
                        _changeCanMove();
                        // _move( scrollTop );
                        _loader.addClass('hide');
                    },
                    'resize': function() {
                        _changeCanMove();
                    },
                    'mousewheel': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
                        return false;
                    },
                    'DOMMouseScroll': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
                        return false;
                    }
                } );

            },
            _changeCanMove = function() {
                var siteWidth = $('.site').outerWidth();

                if ( siteWidth < 1200 ) {
                    _canMove = false;
                } else {
                    _canMove = true;
                }
            },
            _paralax = function( elem, x, y, koef ) {
                var translate = 'translate3d(' + Math.round(x*koef) + 'px, ' + Math.round(y*koef) + 'px, 0px )';

                if (!_canMove) {
                    translate = 'translate3d(0px, 0px)';
                }

                elem.css( {
                    'transform': translate
                } );
            },
            _blure = function( elem, value ) {
                var translate = 'blur(' + value + 'px)';

                elem.css( {
                    'filter': translate
                } );
            },
            _move = function( scrollTop ){
                var winHeight = $(window).height();

                $('.works__title').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .5;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                $('.works').each( function() {
                    var curElem = $(this),
                        items = curElem.find('.works__item'),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .05;

                    items.each( function() {
                        var curItem = $(this);

                        if (!curElem.parents('.works_isotope').length) {
                            curKoef = -curKoef;
                            if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                                if ( curTop < winHeight ) {
                                    _paralax( curItem, 0, scrollTop, curKoef);
                                } else {
                                    _paralax( curItem, 0, scrollTop - (curTop - winHeight), curKoef);
                                }
                            }
                        }
                    } );
                } );

                $('.team__title').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .5;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                /*$('.team__item').each( function(i) {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .05;

                    if ( i % 2 == 0 ) {
                        curKoef = -curKoef;
                    }

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );*/

                $('.circle').each( function(i) {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .3;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                            if ( i % 2 == 0 ) {
                                _blure(curElem, 7 - 10*(scrollTop + winHeight*.8 - curTop)/winHeight);
                            } else {
                                _blure(curElem, 10*(scrollTop + winHeight*.8 - curTop)/winHeight);
                            }
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                            if ( i % 2 == 0 ) {
                                _blure(curElem, 7 - 10*(scrollTop + winHeight*.8 - curTop)/winHeight);
                            } else {
                                _blure(curElem, 10*(scrollTop + winHeight*.8 - curTop)/winHeight);
                            }
                        }
                    }
                } );

                $('.hero__layout').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = -.07;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                $('.contacts__24hours').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = -.3;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                $('.blog__title').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .5;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                $('.blog__list-item').each( function(i) {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .05;

                    if ( i % 2 == 0 ) {
                        curKoef = -curKoef;
                    }

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

            },
            _siteScroll = function( event ) {
                var scrollTime = .5,
                    scrollDistance = 125,
                    delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3,
                    scrollTop = _window.scrollTop(),
                    finalScroll = scrollTop - parseInt( delta * scrollDistance );

                var tweenMax = new TweenMax.to( _window, scrollTime, {
                    scrollTo : { y: finalScroll, autoKill:true },
                    ease: Power1.easeOut,
                    overwrite: 5
                });

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
            };

        //public properties

        //public methods
        _self.setCanUseScroll = function ( param ) {
            console.log('setCanUse');
            _canUseSmoothScroll = param;
        };

        _init();
    };

    var Show = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window ),
            _canCheckScroll = false;

        //private methods
        var _onEvents = function () {
                _window.on({
                    'scroll': function () {
                        if (_canCheckScroll) {
                            _checkScroll();
                        }
                    },
                    'load': function () {
                        _canCheckScroll = true;
                        _checkScroll();
                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height();

                _obj.each(function () {

                    var curItem = $(this),
                        topPos = _obj.offset().top;

                    if( ( _window.scrollTop() + windowH*0.7 ) > topPos && !curItem.hasClass( 'is-show' ) ){

                        curItem.addClass( 'is-show' );
                    }
                })
            },
            _init = function () {
                _obj[ 0 ].obj = _self;
                _onEvents();
            };

        //public properties
        _self.checkScroll = function () {
            _checkScroll();
        };

        //public methods

        _init();
    };

    var ShowingText = function(obj) {

        //private properties
        var _obj = obj,
            _window = $(window);

        //private methods
        var _addEvents = function() {

                _window.on({
                    scroll: function () {

                        _checkScroll();

                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height();

                _obj.each(function () {

                    var curItem = $(this),
                        topPos = _obj.offset().top;

                    if( ( _window.scrollTop() + windowH*0.9 ) > topPos && !curItem.hasClass( 'is-show' ) ){

                        curItem.addClass( 'is-show' );
                    }
                })
            },
            _init = function() {
                _addEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var Tabs = function(obj) {

        //private properties
        var _obj = obj,
            _tabsControlsWrap = _obj.find('.tabs__controls'),
            _tabsControlsWrapLeft = _tabsControlsWrap.offset().left,
            _tabsControls = _tabsControlsWrap.find('.tabs__controls-item'),
            _activeControl = _tabsControlsWrap.find('.active'),
            _tabsSlider = _obj.find('.tabs__controls-slider'),
            _tabsContentWrap = _obj.find('.tabs__content'),
            _tabsContent = _tabsContentWrap.find('.tabs__content-item');

        //private methods
        var _addEvents = function() {

                _tabsControls.on({
                    'click': function () {
                        var activeElem = $(this);

                        if ( !activeElem.hasClass('active') ) {
                            _tabsControls.removeClass('active');
                            activeElem.addClass('active');
                            _sliding(activeElem);
                        }

                    }
                });

                $(window).on({
                    'resize': function () {
                        _tabsControlsWrapLeft = _tabsControlsWrap.offset().left;
                        _sliding(_tabsControlsWrap.find('.active'));
                    }
                });
            },
            _checkActiveControl = function() {
                if ( _activeControl.length > 0 ) {
                    if ( _activeControl.length > 1 ) {
                        _activeControl.removeClass('active');
                        _activeControl.eq(0).addClass('active');
                    }
                } else {
                    _activeControl = _tabsControls.eq(0);
                    _activeControl.addClass('active');
                }
                _sliding(_activeControl);

            },
            _sliding = function(elem) {
                _tabsSlider.css({
                    'width': elem.outerWidth(),
                    'left': (elem.offset().left - _tabsControlsWrapLeft) + 'px'
                });
                _showActiveContent(elem.index());
            },
            _showActiveContent = function(activeIndex) {
                _tabsContent.removeClass('active');
                _tabsContent.eq(activeIndex - 1).addClass('active');
                _tabsContentWrap.css({ 'height': _tabsContent.eq(activeIndex - 1).outerHeight() + 'px' });
            },
            _init = function() {
                _addEvents();
                _checkActiveControl();
            };

        //public properties

        //public methods

        _init();
    };

    var Testimonials = function(obj) {

        //private properties
        var _obj = obj,
            _slider = _obj.find('.swiper-container'),
            _pagination = _obj.find('.swiper-pagination'),
            _swiper = null;

        //private methods
        var _addEvents = function() {

                $(window).on({
                    'resize': function () {
                        _swiper.update();
                    }
                });
            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    pagination: _pagination,
                    paginationClickable: true,
                    loop: true,
                    spaceBetween: 0,
                    effect: 'cube',
                    cube: {
                        shadow: false,
                        slideShadows: false,
                        shadowOffset: 10,
                        shadowScale: 0.94
                    }
                });

            },
            _init = function() {
                _addEvents();
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var Works = function(obj) {

        //private properties
        var _obj = obj,
            _filter = _obj.find('.works__filter'),
            _filterItems = _filter.find('.works__filter-item'),
            _items = _obj.find('.works__item'),
            _grid = null;

        //private methods
        var _addEvents = function() {

                $(window).on({
                    'load': function () {
                        _initFilter();
                        _filterItems.eq(0).addClass('active');
                        _items.addClass('show is-show');
                    },
                    'resize': function () {
                        _filter.perfectScrollbar('update');
                    }
                });

                _filterItems.on({
                    'click': function () {
                        var curElem = $(this);

                        if (!curElem.hasClass('active')) {
                            _filterItems.removeClass('active');
                            curElem.addClass('active');

                            var filterData = curElem.data('filter').slice(1);

                            _items.removeClass('odd');
                            _items.removeClass('even');
                            _items.removeClass('show is-show');
                            _items.addClass('hide');

                            if (filterData.length) {

                                setTimeout(function () {
                                    _items.addClass('hide');

                                    var count = 0;
                                    _items.each(function () {
                                        var curElem = $(this);

                                        if (curElem.hasClass(filterData)) {
                                            count++;
                                            curElem.removeClass('hide');
                                            curElem.addClass('to-show');

                                            setTimeout(function () {
                                                curElem.addClass('show is-show')
                                            }, 100);

                                            if ( count % 2 == 0 ) {
                                                curElem.addClass('even');
                                            } else {
                                                curElem.addClass('odd');
                                            }
                                        }
                                    });
                                }, 300);
                            } else {
                                setTimeout(function () {
                                    _items.removeClass('hide');
                                    _items.addClass('to-show');

                                    setTimeout(function () {
                                        _items.addClass('show is-show')
                                    }, 100);
                                }, 300);
                            }
                        }
                    }
                });
            },
            _initFilter = function() {

            },
            _initScroll = function() {
                _filter.perfectScrollbar();
            },
            _init = function() {
                _addEvents();
                _initScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var Sliders = function( obj ) {

        //private properties
        var _obj = obj,
            _teamSlider = _obj.find( '.team__list' ),
            _casesSlider = _obj.find( '.cases__list' ),
            _helpSlider = _obj.find( '.help__swiper' ),
            _helpPagination = _obj.find( '.help__pagination' ),
            _contactCardsSlider = _obj.find( '.contact-cards__swiper' ),
            _contactCardsPagination = _obj.find( '.contact-cards__pagination' ),
            _outsourceSlider = _obj.find( '.outsource__swiper' ),
            _outsourcePagination = _obj.find( '.outsource__pagination' ),
            _caseSlider = _obj.find( '.case__slider' ),
            _casePagination = _obj.find( '.case__pagination' ),
            _team,
            _cases,
            _case,
            _help,
            _contactCards,
            _outsource,
            _window = $( window );

        //private methods
        var _initSlider = function() {

                if ( _window.outerWidth() < 1024 ) {

                    _team = new Swiper ( _teamSlider, {
                        effect: 'slide',
                        autoplay: false,
                        speed: 500,
                        slidesPerView: 'auto',
                        loop: false
                    } );

                    _help = new Swiper ( _helpSlider, {
                        effect: 'slide',
                        autoplay: false,
                        speed: 500,
                        slidesPerView: 1,
                        loop: false,
                        nextButton: '.help__slider-next',
                        prevButton: '.help__slider-prev',
                        onInit: function () {

                            var item = _helpSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _helpPagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        },
                        onSlideChangeStart: function () {

                            var item = _helpSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _helpPagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        }
                    } );

                    _contactCards = new Swiper ( _contactCardsSlider, {
                        effect: 'slide',
                        autoplay: false,
                        speed: 500,
                        slidesPerView: 1,
                        loop: false,
                        nextButton: '.contact-cards__slider-next',
                        prevButton: '.contact-cards__slider-prev',
                        onInit: function () {

                            var item = _contactCardsSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _contactCardsPagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        },
                        onSlideChangeStart: function () {

                            var item = _contactCardsSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _contactCardsPagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        }
                    } );

                    _outsource = new Swiper ( _outsourceSlider, {
                        effect: 'slide',
                        autoplay: false,
                        speed: 500,
                        slidesPerView: 1,
                        loop: false,
                        nextButton: '.outsource__slider-next',
                        prevButton: '.outsource__slider-prev',
                        onInit: function () {

                            var item = _outsourceSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _outsourcePagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        },
                        onSlideChangeStart: function () {

                            var item = _outsourceSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _outsourcePagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        }
                    } );

                }

                _cases = new Swiper ( _casesSlider, {
                    effect: 'slide',
                    autoplay: false,
                    speed: 500,
                    slidesPerView: 3,
                    loop: false,
                    spaceBetween: 30,
                    nextButton: '.case__slider-next',
                    prevButton: '.case__slider-prev',
                    breakpoints: {
                        640: {
                            slidesPerView: 'auto',
                            spaceBetween: 0
                        }
                    }
                } );

                if ( _caseSlider.find( '.swiper-slide' ).length > 1 ) {

                    _case = new Swiper ( _caseSlider, {
                        effect: 'slide',
                        autoplay: false,
                        speed: 500,
                        slidesPerView: 1,
                        loop: false,
                        nextButton: _casesSlider.find( '.case__next' ),
                        prevButton: _casesSlider.find( '.case__prev' ),
                        onInit: function () {

                            var item = _caseSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _casePagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        },
                        onSlideChangeStart: function () {

                            var item = _caseSlider.find( '.swiper-slide' ),
                                curItem = item.filter( '.swiper-slide-active' );

                            _casePagination.html( '<span>'+ ( curItem.index() + 1 ) +'</span> / '+ item.length );

                        }
                    } );

                }

            },
            _init = function() {
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

} )();