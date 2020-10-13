module.exports =  {
    landing(req, res){
            twing.render('landing.twig', {
                'page_title': "D Office",
                'params': req.query,
            }).then((output) => {
                res.send(output);
            })

    },


    fileServer(req, res){
        twing.render('file_cdn.twig', {
            'page_title': "File/IMAGE CDN",
            'params': req.query,
        }).then((output) => {
            res.send(output);
        })

    },



    app(req, res){
        twing.render('app.twig', {
            'page_title': "APP",
            'params': req.query,
        }).then((output) => {
            res.send(output);
        })

    },

    market(req, res){
        twing.render('market.twig', {
            'page_title': "market",
            'params': req.query,
        }).then((output) => {
            res.send(output);
        })

    },





};


