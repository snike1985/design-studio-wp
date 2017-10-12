$(function () {

    $.each( $( '.message-field' ), function() {
        new MessageHigh( $( this ) );
    } );

} );

var MessageHigh = function ( obj ) {

    var _obj = obj,
        _message = _obj.find( '.contact-form__message' ),
        _messageText = _obj.find( '.message-field__text' ),
        _messageHeight = _obj.find( '.message-field__height' );

    var _onEvents = function() {

            _obj.on( {
                'keydown' : function() {

                    _messageText.html( _message.val() + '__' );
                    _message.css( 'height', _messageText.height() );
                    _messageHeight.css( 'height', _messageText.height() );

                },
                'change' : function () {

                    _messageText.html( _message.val() + '__' );
                    _message.css( 'height', _messageText.height() );
                    _messageHeight.css( 'height', _messageText.height() );

                }
            } );

        },
        _init = function() {
            _onEvents();
        };

    _init();

};