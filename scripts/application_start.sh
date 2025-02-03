#!/bin/bash


sudo cp /home/ubuntu/conf/.htaccess /var/www/zukarte_web/

# check service status
sudo systemctl restart apache2
