#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.5.7 --server https://3.134.108.244 --token s6lxdwcmkj54db5ssqn5pqlcs6lwqzhv2jrmpck7lqsq7qhp4fwf4m --ca-checksum 52e3480b79a7c3c79a20aea4e8598603b462d8951ce76940947e30ad36209e78 --etcd --controlplane --worker