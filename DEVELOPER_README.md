
# BEFORE HOSTING APP / Migration / Deployments/ Running it: 
0. create .env from .env.example
1. run app using>> npm run start  (must have run npm install to pull dependencies)
1.b run app using:>> DEBUG=doffice:* npm start
1.c  using nodemon, do this >>> npm run dev  //// or [nodemon ./bin/www --watch  .]
1.d npm run test
RUNNING with DOCKER: (not suppoting nodemon yet)


# RUN TESTS with Mocha
>> npm run test
::: authomate with nodemon script(nodemon --exec 'mocha -R min)


on push : sudo chmod 777 src/routes/uploads
sudo chmod 777 uploads
