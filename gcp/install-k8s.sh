#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh
apt install -y open-iscsi
docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.5.7 --server https://3.15.240.135 --token gwrnmlqplqx9jn7hf9plwjjxn2jmxj5njjlljpmn8pwrj9twnpclg5 --ca-checksum 86fe7c904d5f5309f9b6fe56f3b34f7d540286af99062d266a8ad84764c998b6 --etcd --controlplane --worker