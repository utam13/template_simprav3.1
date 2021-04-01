function struktur_apbd(komponen) {
    let tree = {
        1: {
            2: '',
            3: {
                6: '',
                7: '',
            },
            4: '',
            5: ''
        },
    };

    let treeParams = {
        1: { trad: 'Card 1' },
        2: { trad: 'Card 2' },
        3: { trad: 'Card 3' },
        4: { trad: 'Card 4' },
        5: { trad: 'Card 5' },
        6: { trad: 'Card 6' },
        7: { trad: 'Card 7' },
    };

    treeMaker(tree, {
        id: komponen, card_click: function (element) {
            console.log(element);
        },
        treeParams: treeParams,
        'link_width': '4px',
        'link_color': '#2199e8',
    });
}

$(document).ready(function () {
    struktur_apbd('apbd_murni_chart');
    struktur_apbd('container');
});