#!/bin/bash

# This will get you a working environment on a stock Ubuntu 14.04
# Pull it down separately, run from your home directory

export DEBIAN_FRONTEND=noninteractive
sudo add-apt-repository -y ppa:ondrej/php5
sudo apt-get update
sudo -E apt-get -q -y install bibutils libreoffice ure uno-libs3 python3-uno libreoffice-script-provider-python unoconv python-lxml openjdk-7-jre exiftool pandoc pandoc-citeproc libghc-citeproc-hs-data ruby libxml-twig-perl libxml-writer-string-perl libxml-writer-perl php5-xsl php5-curl sendmail build-essential mysql-server apache2 php5-common zip git
sudo apt-get upgrade -y php5-common
wget -O crfpp.deb https://www.dropbox.com/s/svgq8xyz7bbouov/crfpp_0.58-raring-ppa0_amd64.deb?dl=0
wget -O libcrfpp.deb https://www.dropbox.com/s/zuycitdtyxuisfz/libcrfpp-dev_0.58-raring-ppa0_amd64.deb?dl=0
sudo dpkg -i *.deb
git clone https://github.com/mit-nlp/MITIE
cd MITIE
make MITIE-models
cd tools/ner_stream
make
sudo mkdir /opt/mitie
sudo cp ner_stream /opt/mitie/.
sudo mv ~/MITIE/MITIE-models /opt/mitie/.
cd /var/www/
sudo git clone https://github.com/pkp/xmlps.git
sudo rm html/index.html
sudo rmdir html
sudo mv xmlps html
cd html
sudo chown -R www-data:$USER /var/www
sudo chown -R www-data:$USER /var/cache
sudo chown -R www-data:$USER /var/local
sudo chmod -R 775 /var/www/html
rm var/cache/zfcache-ea/*
php composer.phar self-update
php composer.phar update
php composer.phar install
mysqladmin -uroot create xmlps
cp config/autoload/local.php.dist config/autoload/local.php
sed "s/'user' => '',/'user' => 'root',/g" -i config/autoload/local.php
vendor/doctrine/doctrine-module/bin/doctrine-module orm:schema-tool:update --force
rm /var/www/html/vendor/knmnyn/ParsCit/crfpp/crf_learn
rm /var/www/html/vendor/knmnyn/ParsCit/crfpp/crf_test
ln -s /usr/bin/crf_learn /var/www/html/vendor/knmnyn/ParsCit/crfpp/.
ln -s /usr/bin/crf_test /var/www/html/vendor/knmnyn/ParsCit/crfpp/.
sudo wget -O /etc/apache2/sites-available/xmlps.conf https://raw.githubusercontent.com/pkp/xmlps/master/docs/xmlps.conf
sudo rm /etc/apache2/sites-enabled/*
sudo ln -s /etc/apache2/sites-available/xmlps.conf /etc/apache2/sites-enabled/xmlps.conf
sudo ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load
sudo service apache2 restart