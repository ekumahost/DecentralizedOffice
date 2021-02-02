$("#portisEmail").hide();
$(".uploadButton").on("click", function(e) {
    e.preventDefault();
    $('.uploadButton').LoadingOverlay("show");

    var post_path = $('#UploadImageForm').attr('action');
    var fd = new FormData();
    var files = $('#image_file')[0].files[0];
    fd.append('image_file', files);
    var contents = $('#UploadImageForm').serialize();
    $.ajax({
        url: post_path + '?'+contents,
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(result){

            // set the url to where he can copy it..

            if(result['status'] === 'success'){
                Swal.fire(
                    'IMAGE URL!',
                    result['data']['image_url'],
                    'success'
                );

            }else{

                Swal.fire(
                    'Error!',
                    result['message'],
                    'error'
                )

            }

            $('.uploadButton').LoadingOverlay("hide");

        },
        error: function (e) {
            Swal.fire(
                'Error!',
                "Something is wrong, make sure your image is not too large please, try again later..",
                'error'
            )

        }

    });

});

$(".comingSoonLink").on("click", function(e) {
  var message  = $(this).data("message");
    Swal.fire(
        'Coming Soon!',
        message,
        'warning'
    );
});






window.addEventListener('load', async () => {
    // Modern dapp browsers...


    // console.log("HAHAHAHA", window.BinanceChain);
    // load portis
    const myBinanceChainNode = {
        nodeUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        chainId: 97,
    };
    // const portis = new Portis('bf34ccdf-0d88-41be-ac07-d28f3dfba144', 'mainnet');
    const portis = new Portis('bf34ccdf-0d88-41be-ac07-d28f3dfba144', myBinanceChainNode);
    //const web3 = new Web3(portis.provider);
    // console.log('WE HAVE PORTIS', portis);

    portis.showPortis();
    portis.onLogin((walletAddress, email, reputation) => {
        console.log("Portis Logged in now!!!1", walletAddress, email, reputation);
    });

    portis.isLoggedIn().then(({ error, result }) => {
        $("#portisEmail").show();

        console.log("LOGGED PORTIS", error, result);
    });



    if (window.BinanceChain) {
        window.web3 = new Web3(BinanceChain);
        try {
            // Request account access if needed
            let eeet = await  BinanceChain.enable();
            // console.log("eeet OOO", eeet);
            // Acccounts now exposed
            //  web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
            Swal.fire(
                'Error!',
                "Something is wrong, Denying account access will not let you use this app.",
                'error'
            )


        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider); // not using portis
        //  window.web3 = new Web3(portis.provider); // using portis
        // Acccounts always exposed
        // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');

        Swal.fire(
            'Error!',
            "Non-Ethereum browser detected. You should consider trying MetaMask/Binance Wallet! on Google Chrome",
            'error'
        )
        $("#walletHolder").html('Non-Ethereum browser detected. You should consider trying MetaMask/Binance Wallet! on Google Chrome');

    }

    const web3 = window.web3;



    // console.log('ACOUNT NIIOO', web3.eth.accounts[0].wallet);


    //console.log("ABI LOG", abi_array);
    const networkID = await web3.eth.net.getId(); // we can validate for network here..
    // const walletAddress = await web3.eth.getAccounts(); // we can validate for network here.

    if(networkID != 97) { // bnb smartchain test net is 97
        Swal.fire(
            'Error!',
            "On a wrong network, this app run on BNB SmartChain Testnet, install Binance Wallet Chrome Extension and read how to configure your metamask here: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain "+networkID,
            'error'
        )
    }


    $("#portisLogout").on("click", function(e) {
        portis.logout();
        location.reload();
    });


});
