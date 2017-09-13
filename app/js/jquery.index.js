"use strict";
( function(){

    $(function(){

        $('.instagramm-slider').each( function() {
            var curElem = $(this),
                limit = curElem.data('limit'),
                feed = new Instafeed({
                get: 'user',
                clientId: '47210f502d7648a8b6fc630cef894853',
                userId: '5986814569',
                accessToken: '5986814569.47210f5.9f4283cb2f664ba4909158fad9cb4120',
                sortBy: 'most-recent',
                resolution: 'low_resolution',
                limit: limit,
                template: '<a href="{{link}}" class="swiper-slide" style="background-image: url({{image}})"></a>',
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
                var swiper = new Swiper('.swiper-container', {
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
                        _obj.addClass('open');
                    }
                });

                _obj.on({
                    'click': function() {
                        _obj.removeClass('open');
                    }
                });

                _scrollWrap.on({
                    'click': function(e) {
                        e.stopPropagation();
                    }
                });

                _btnClose.on({
                    'click': function() {
                        _obj.removeClass('open');
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
            _canMove = true;

        //private methods
        var _addEvents = function() {

                _window.on( {
                    'scroll': function() {
                        var scrollTop = $(window).scrollTop();
                        _move( scrollTop );
                    },
                    'load': function() {
                        var scrollTop = $(window).scrollTop();
                        _changeCanMove();
                        _move( scrollTop );
                    },
                    'resize': function() {
                        _changeCanMove();
                    },
                    'mousewheel': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
                    },
                    'DOMMouseScroll': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
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

                $('.works__item').each( function(i) {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .05;

                    if (!curElem.parents('.works_isotope').length) {
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
                    }
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

                $('.team__item').each( function(i) {
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

                $('.hero__gadgets').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .2;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
                        }
                    }
                } );

                $('.hero__list').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = -.1;

                    if ( ( scrollTop <= ( curTop + curHeight ) && ( ( winHeight + scrollTop ) >= curTop ) ) ) {

                        if ( curTop < winHeight ) {
                            _paralax( curElem, 0, scrollTop, curKoef);
                        } else {
                            _paralax( curElem, 0, scrollTop - (curTop - winHeight), curKoef);
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

                $('.doing__head-list').each( function() {
                    var curElem = $(this),
                        curTop = curElem.offset().top,
                        curHeight = curElem.height(),
                        curKoef = .04;

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

                TweenMax.to( _window, scrollTime, {
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
            _slider = _obj.find('.testimonials__slider'),
            _sliderItems = _slider.find('.testimonials__item'),
            _hm = new Hammer(_slider[0]),
            _wasSwipe = false,
            _canSwipe = true,
            _activeIndex = 0;

        //private methods
        var _addEvents = function() {

                $(window).on({
                    'resize': function () {

                    }
                });

                _hm.on('swipe panleft panright', function(e) {
                    if (_canSwipe) {
                        switch (e.type) {
                            case 'swipe':
                                _wasSwipe = true;
                                break;
                            case 'panleft':
                                if (_wasSwipe) {
                                    _wasSwipe = false;
                                    _canSwipe = false;
                                    _nextSlide();
                                }
                                break;
                            case 'panright':
                                if (_wasSwipe) {
                                    _wasSwipe = false;
                                    _canSwipe = false;
                                    _prevSlide();
                                }
                                break;
                            default:
                                break;
                        }
                    }
                });

            },
            _prevSlide = function() {
                console.log('prev');
                _sliderItems[_activeIndex].classList.remove('active');
                _sliderItems[_activeIndex].classList.add('to-next');

                if (_sliderItems[_activeIndex - 1]) {
                    _sliderItems[_activeIndex - 1].classList.add('from-prev');
                } else {
                    _sliderItems[_sliderItems.length - 1].classList.add('from-prev');
                }

                setTimeout(function() {
                    _sliderItems[_activeIndex].classList.remove('to-next');
                    _sliderItems.removeClass('next');
                    _sliderItems[_activeIndex].classList.add('next');

                    if (_sliderItems[_activeIndex - 1]) {
                        _sliderItems[_activeIndex - 1].classList.remove('from-prev');
                        _sliderItems[_activeIndex - 1].classList.add('active');
                        _activeIndex -= 1;
                    } else {
                        _sliderItems[_sliderItems.length - 1].classList.remove('from-prev');
                        _sliderItems[_sliderItems.length - 1].classList.add('active');
                        _activeIndex = _sliderItems.length - 1;
                    }
                    setTimeout(function () {
                        _canSwipe = true;
                    }, 350);
                }, 300);
            },
            _nextSlide = function() {
                console.log('next');
                _sliderItems[_activeIndex].classList.remove('active');
                _sliderItems[_activeIndex].classList.add('to-prev');

                if (_sliderItems[_activeIndex + 1]) {
                    _sliderItems[_activeIndex + 1].classList.add('from-next');
                } else {
                    _sliderItems[0].classList.add('from-next');
                }

                setTimeout(function() {
                    _sliderItems[_activeIndex].classList.remove('to-prev');
                    _sliderItems.removeClass('next');

                    if (_sliderItems[_activeIndex + 1]) {
                        _sliderItems[_activeIndex + 1].classList.remove('from-next');
                        _sliderItems[_activeIndex + 1].classList.add('active');
                        _activeIndex += 1;
                    } else {
                        _sliderItems[0].classList.remove('from-next');
                        _sliderItems[0].classList.add('active');
                        _activeIndex = 0;
                    }

                    if (_sliderItems[_activeIndex + 1]) {
                        _sliderItems[_activeIndex + 1].classList.add('next');
                    } else {
                        _sliderItems[0].classList.add('next');
                    }

                    setTimeout(function () {
                        _canSwipe = true;
                    }, 350);
                }, 300)
            },
            _init = function() {
                _sliderItems[_activeIndex].classList.add('active');
                _sliderItems[_activeIndex + 1].classList.add('next');
                _addEvents();
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

                            if (filterData.length) {
                                _items.slideUp(300);

                                setTimeout(function () {
                                    _items.removeClass('odd');
                                    _items.removeClass('even');

                                    var count = 0;
                                    _items.each(function () {
                                        var curElem = $(this);

                                        if (curElem.hasClass(filterData)) {
                                            count++;
                                            curElem.slideDown(300);

                                            if ( count % 2 == 0 ) {
                                                curElem.addClass('even');
                                            } else {
                                                curElem.addClass('odd');
                                            }
                                        }
                                    });
                                    _items.removeClass('is-hide');
                                }, 350)
                            } else {
                                _items.slideUp(300);

                                setTimeout(function () {
                                    _items.removeClass('odd');
                                    _items.removeClass('even');

                                    var count = 0;
                                    _items.each(function () {
                                        var curElem = $(this);

                                        count++;
                                        curElem.slideDown(300);

                                        if ( count % 2 == 0 ) {
                                            curElem.addClass('even');
                                        } else {
                                            curElem.addClass('odd');
                                        }
                                    });
                                    _items.removeClass('is-hide');
                                }, 350)
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

} )();