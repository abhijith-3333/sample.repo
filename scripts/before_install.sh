#!/bin/bash

# Stop running app
# sudo systemctl stop teaman.service


# Remove old backup
sudo rm -rf /home/ubuntu/zukarte_web/*
sudo rm -rf /var/www/zukarte_web/*
sudo  cp /home/ubuntu/conf/index.html /var/www/zukarte_web/
sudo  cp /home/ubuntu/conf/.htaccess /var/www/zukarte_web/


# Backup existing app
