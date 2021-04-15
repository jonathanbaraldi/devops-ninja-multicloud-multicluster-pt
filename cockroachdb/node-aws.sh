#!/bin/bash
timedatectl set-ntp no
apt-get update
apt-get install ntp -y
service ntp stop
ntpd -b time.google.com
service ntp start
ntpq -p
wget -qO- https://binaries.cockroachdb.com/cockroach-v20.2.3.linux-amd64.tgz | tar  xvz
cp -i cockroach-v20.2.3.linux-amd64/cockroach /usr/local/bin/