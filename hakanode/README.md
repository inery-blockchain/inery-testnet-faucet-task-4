Inery Json RPC 4.G�rev
Inery Blockchain'de JSON RPC'yi �a��rmak i�in �rnek kod

??Bilgiler
JSON RPC �rnek kodu �rnek dizinde mevcuttur, example de�i�tirmeyi deneyebilir ve nas�l �al��t���n� anlayabilirsiniz, ayr�ca kodunuzu �al��t�rabilmek ve de�erli s�zle�me i�levini �a��rabilmek i�in Hesab�n�zda De�erli Ak�ll� S�zle�meye (G�rev 3) sahip olman�z gerekir.

?? Ba�lay�n
Eski Nodejs kald�r�n

sudo apt-get remove nodejs
Curl'� y�kleyin

sudo apt-get install curl
Curl'� y�kleyin

    curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
    sudo apt-get install -y nodejs
?? NPM kurulumu
sudo apt install npm
?? Kurulum
Repoyu klonlay�n

git clone https://github.com/herculessx/ineryjs.git
Dizine Girin

cd ineryjs
NPM Paket kurun

npm install
A�a��daki Kod ile env-sample dosyas�n�n ismini .env yap�n

cp .env-sample .env
.env bilgileriniz d�zenleyin

 nano .env
Burada a��lan pencerede


A�a��daki Bilgileri inery testnet Dashboard k�sm�nda bulabilirsiniz.


INERY_ACCOUNT="HESAP ADINIZ"
PRIVATE_KEY="KEY�N�Z"
NODE_URL="http://NODE�PADRES�:8888"


ctrl +X Yes diyip ��k�yoruz.




?? 8888 port a�ma
RPC �rne�i �al��t�r

sudo ufw allow 8888

?? �al��t�rma
npm run rpc-example
i�lem ��kt�s� a�a��daki gibi olmal�




https://explorer.inery.io/
image




?? Hata ��z�mleri
Serialization time limit 15000us exceeded

config.ini dosyanda max-transaction-time de�erini 15000 olarak de�i�tir
nano ./inery-node/inery.setup/master.node/blockchain/config/config.ini





connect ECONNREFUSED
sudo ufw allow 8888





missing create.issuer ( type=name )
Bu, hesab�n�zda G�rev 3'te olu�turdu�unuz De�erli Ak�ll� S�zle�me olmad��� anlam�na gelir.
Hesab�n�zda CRUD Ak�ll� S�zle�menizin olup olmad���n� kontrol etmek i�in
cline get abi ineryi-hesap-isminiz


bu ��kt�ya sahip oldu�unuzdan emin olun


