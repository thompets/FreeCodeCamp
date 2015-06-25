(function(){
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    var gems = [
        {
            name: 'Azurite',
            description: 'Some gems have hidden qualities beyond their luster, ' +
                         'beyond their shine... Azurite is one of those gems.',
            shine: 8,
            price: 110.50,
            rarity: 7,
            color: '#CCC',
            faces: 14,
            images: []
        },
        {
            name: 'Bloodstone',
            description: 'Origin of the Bloodstone is unknown, hence its low value. ' +
                         'It has a very high shine and 12 sides, however.',
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            images: [
                'gem-01.gif',
                'gem-03.gif',
                'gem-04.gif'
            ]
        },
        {
            name: 'Zircon',
            description: 'Zircon is our most coveted and sought after gem. You will pay much to ' +
                         'be the proud owner of this gorgeous and high shine gem.',
            shine: 70,
            price: 1100,
            rarity: 2,
            color: '#000',
            faces: 6,
            images: [
                'gem-06.gif',
                'gem-07.gif',
                'gem-09.gif'
            ]
        }
    ];
}());

