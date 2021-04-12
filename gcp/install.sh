#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
apt install -y open-iscsi
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.5.7 --server https://54.174.36.213 --token z7cpwnw7np8pljcfbtnpzffsl4bxwhtr9ldcmhzzg8cqj599td6qdt --ca-checksum 8215abcfef6bca8fb3c00c76d0d1ee88584cadac0f037d8487a4b3035ed53178 --etcd --controlplane --worker