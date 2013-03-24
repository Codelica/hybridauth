(function ($) {

/**
 * Click notifier for "native" window (non-popup) HybridAuth requests
 */
Drupal.behaviors.HybridAuthNativeWindow = {
  attach: function (context, settings) {
    $('a.hybridauth-widget-provider').click(function(){

      var href = $(this).attr('href');
      var provider = $(this).attr('title');

      $('.hybridauth-widget').after('<div id="hybridauth-contact-message" style="display:none;"><div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">' + Drupal.t('Contacting') + ' ' + provider + '...</div></div></div>');

      $('div #hybridauth-contact-message').fadeIn(350, function(){
        // Go to link when animation completes
        window.location = href;
      })

      // Stop browser from following link
      return false;
    })
  }
};

} (jQuery));
