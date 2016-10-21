Reveal.addEventListener( 'ready', function( event ) {
    var App = {

        init: function() {

            this._dataDomainElements;

            this._dataDomainElements = document.querySelectorAll('[data-domain]');
            var tempStr = '', dataDomainElement = null, domain = 'wanm', level = 1, fa_icon = 'fa-play';

            for(var i=0;i < this._dataDomainElements.length;i++) {
                dataDomainElement = this._dataDomainElements[i];
                domain = dataDomainElement.dataset.domain;
                level = dataDomainElement.dataset.level;
                switch(domain) {
                    case 'wanm': fa_icon = 'fa-star'; break;
                    case 'av3': fa_icon = 'fa-star'; break;
                    case 'cross': default: fa_icon = 'fa-star'; break;
                }
                tempStr = '';
                for(var l=0; l<level; l++) {
                    tempStr += `<i class="fa ${fa_icon}"></i>`;
                }
                dataDomainElement.innerHTML = tempStr;
            }
        }
    };

    App.init(); // Initialize App (application)
} );