const constants = require('../src/utils/constants');

module.exports = function (myMiddleware) {

    return function (req, res, next) {

        switch(myMiddleware) {
            case 'assets_middle_ware' :
                const d = new Date();
                twing.addGlobal('year', d.getFullYear());
                twing.addGlobal('session', req.session);
                twing.addGlobal('market_contracts_address', constants.contract_address);
                twing.addGlobal('bnb_market_contracts_address', constants.bnb_contract_address);
                twing.addGlobal('compoundCETHContractAddress', process.env.compoundCETHContractAddress);
                twing.addGlobal('site_url', process.env.website_url);
                twing.addGlobal('route_assets', process.env.ASSETS_LOCATION);
                    next();
                break;
        default:

    }

    }

};
