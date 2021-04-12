# Roteiro

https://www.cockroachlabs.com/docs/v20.2/start-a-local-cluster-in-docker-linux

```sh 

#!/bin/bash
curl https://releases.rancher.com/install-docker/19.03.sh | sh


# AWS NODE
$ aws ec2 run-instances --image-id ami-0dba2cb6798deb6d8 --count 2 --instance-type t3.small --key-name devops-ninja --security-group-ids sg-00c9550881117de86 --subnet-id subnet-09c5a4961e6056757 --user-data file://node-aws.sh --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=cockroachdb}]' 'ResourceType=volume,Tags=[{Key=Name,Value=cockroachdb}]' 

```


```sh

cockroach start --insecure --advertise-addr=3.128.79.143 --join=
 34.229.162.118, 54.175.25.19, 34.229.156.136 --cache=.25 --max-sql-memory=.25  --background

cockroach start --insecure --advertise-addr=18.222.100.185 --join=3.208.20.140,34.229.162.118,54.175.25.19,34.229.156.136,3.128.79.143 --cache=.25 --max-sql-memory=.25  --background

```



# GCP

```sh

i-05518db641e40af8b - 54.210.83.85
i-0c21cd4541001102a - 52.90.106.37

ssh -i devops-ninja.pem ubuntu@54.210.83.85
ssh -i devops-ninja.pem ubuntu@52.90.106.37

cockroach start --insecure --advertise-addr=54.210.83.85 --join=54.210.83.85,52.90.106.37 --cache=.25 --max-sql-memory=.25  --background
cockroach start --insecure --advertise-addr=52.90.106.37 --join=54.210.83.85,52.90.106.37 --cache=.25 --max-sql-memory=.25  --background

cockroach init --insecure
cockroach sql --insecure

CREATE DATABASE books;
```








```sh
$ kubectl -n jonjon run cockroachdb -it \
--image=cockroachdb/cockroach:v20.2.4 \
--rm \
--restart=Never \
-- sql \
--insecure \
--host=cockroachdb.jonjon.svc.cluster.local

$ CREATE DATABASE files;
```


# INSTALAÇÃO DO ELB PARA DB


```sh
# LOAD BALANCER

# Primeiro criar as instâncias, explicar a rede, ec2, ebs - Na aws e no gcp. 

# !! ESPECIFICAR O SECURITY GROUPS DO LOAD BALANCER

$ aws elbv2 create-load-balancer --name cockroachdb --type network  --scheme internal --subnets subnet-029d881ddd31e011e subnet-09c5a4961e6056757

$ aws elbv2 modify-load-balancer-attributes \
	--load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1 \
	--attributes '[{"Key":"load_balancing.cross_zone.enabled","Value":"true"}]'

# Key=string,Value=string
#	 "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1"

$ aws elbv2 create-target-group --name cockroachdb --protocol TCP --port 26257 --vpc-id vpc-02afbb5885b388b31 --health-check-port 8080
#	"TargetGroupArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5"
	

# REGISTRAR OS TARGETS  
$ aws elbv2 register-targets --target-group-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5 --targets Id=i-05518db641e40af8b Id=i-0c21cd4541001102a


# ARN DO Certificado - arn:aws:acm:us-east-1:984102645395:certificate/fa016001-254f-4127-b51a-61588b15c555
# HTTPS - CRIADO PRIMEIRO
$ aws elbv2 create-listener \
    --load-balancer-arn arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1 \
    --protocol TCP \
    --port 26257 \
	--default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:us-east-1:984102645395:targetgroup/cockroachdb/735022396a4422c5
# "ListenerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/net/cockroachdb/95cf46020db458f1/3f87271d6ce677cb"


$ aws elbv2 describe-target-health --target-group-arn targetgroup-arn

# DESCRIBE NO LISTENER
$ aws elbv2 describe-listeners --listener-arns arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/net/cockroachdb/95cf46020db458f1/3f87271d6ce677cb
```
