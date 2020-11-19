const express = require('express');
const router = express.Router();
const paths = require('./paths/paths');
const homePageController = require('../controller/app/index');
const actionController = require('../controller/app/action');
const supplyController = require('../controller/app/supplyController');
const path = require('path');
//const ipfsAPI = require('ipfs-api');


const multer = require('multer');
//const fs = require('fs');
//const dataUriToBuffer = require('data-uri-to-buffer');
//const imageToURI = require('image-to-data-uri');
//const MAX_SIZE = 52428800;
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
    },
});

const upload = multer({ storage });
router.get(paths.landing, homePageController.landing);
router.get(paths.file_server, homePageController.fileServer);
router.get(paths.app, homePageController.app);
router.get(paths.market, homePageController.market);
router.get(paths.bnb_market, homePageController.BnbMarket);


router.post(paths.upload_file, upload.single("image_file"), actionController.postUploadSingleImage);
router.post(paths.upload_file_url, actionController.postUploadImageFromUrl);
router.post(paths.upload_file_base64, actionController.postUploadImageFromBase);
router.delete(paths.upload_file_delete, actionController.notAllowed);
// admin group token supply
//router.post(paths.admin_supply_compound_eth, supplyController.adminSupplyGroupCompoundEth);

// COMPOUND PROTOCOLS
router.all(paths.admin_supply_compound_eth, supplyController.adminSupplyGroupCompoundEth);
router.all(paths.admin_withdraw_compound_eth, supplyController.adminWithdrawGroupCompoundCEth);

// AAVE PROTOCOLS
router.all(paths.admin_supply_aave_eth, supplyController.adminSupplyGroupAaveEth);


// YEARN PROTOCOLS
router.all(paths.admin_supply_yearn_eth, supplyController.adminSupplyGroupYearnEth);



module.exports = router;
