# Roteiro

1. Iremos criar as máquinas na AWS e no GCP. Depois de criadas, iremos entrar nelas e configurar o cluster do banco de dados.

2. Depois de configurado, iremos criar os balanceadores de carga para os bancos de dados. 


```sh 


# --image-id              ami-01e7ca2ef94a0ae86
# --instance-type         t3.medium 
# --key-name              devops-multicloud 
# --security-group-ids    sg-0b0e8363b215900f0 
# --subnet-id             subnet-4f5e7705

# AWS NODE
$ aws ec2 run-instances --image-id ami-01e7ca2ef94a0ae86 --count 2 --instance-type t3.small --key-name devops-multicloud --security-group-ids sg-0b0e8363b215900f0 --subnet-id subnet-4f5e7705 --user-data file://node-aws.sh --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=cockroachdb}]' 'ResourceType=volume,Tags=[{Key=Name,Value=cockroachdb}]' 

```

Pegar os IP's das maquinas do Google Cloud

AWS 3.16.216.254
AWS 3.143.245.211

GCP 34.74.83.107
GCP 35.231.230.170


3.16.216.254,3.143.245.211,34.74.83.107,35.231.230.170


Entrar dentro das maquinas AWS e configurar

```sh

ssh -i devops-multicloud.pem ubuntu@3.16.216.254
ssh -i devops-multicloud.pem ubuntu@3.143.245.211

cockroach start --insecure --advertise-addr=3.16.216.254 --join=3.16.216.254,3.143.245.211,34.74.83.107,35.231.230.170 --cache=.25 --max-sql-memory=.25  --background

cockroach start --insecure --advertise-addr=3.143.245.211 --join=3.16.216.254,3.143.245.211,34.74.83.107,35.231.230.170 --cache=.25 --max-sql-memory=.25  --background


cockroach init --insecure
cockroach sql --insecure

CREATE DATABASE books;


```

3.143.245.211:8080

Erro que pode acontecer caso os nodes não estejam sincronizados.

***F210415 00:13:41.913691 2763 server/server.go:276 ⋮ [n1] clock synchronization error: this node is more than 500ms away from at least half of the known nodes (0 of 1 are within the offset)
goroutine 2763 [running]:
github.com/cockroachdb/coc***




# INSTALAÇÃO DO ELB PARA DB


```sh
# LOAD BALANCER

# Primeiro criar as instâncias, explicar a rede, ec2, ebs - Na aws e no gcp. 

# !! ESPECIFICAR O SECURITY GROUPS DO LOAD BALANCER

# --subnets subnet-67c83f0e subnet-4f5e7705

$ aws elbv2 create-load-balancer --name cockroachdb --type network  --scheme internal --subnets subnet-67c83f0e subnet-4f5e7705
# "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-2:984102645395:loadbalancer/net/cockroachdb/01a4ebfe23a8eada"


$ aws elbv2 modify-load-balancer-attributes \
	--load-balancer-arn arn:aws:elasticloadbalancing:us-east-2:984102645395:loadbalancer/net/cockroachdb/01a4ebfe23a8eada \
	--attributes '[{"Key":"load_balancing.cross_zone.enabled","Value":"true"}]'

# Key=string,Value=string
#	 "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-east-1:984102645395:loadbalancer/net/cockroachdb/95cf46020db458f1"

# --vpc vpc-238e664a
$ aws elbv2 create-target-group --name cockroachdb --protocol TCP --port 26257 --vpc-id vpc-238e664a --health-check-port 8080
#	"TargetGroupArn": "arn:aws:elasticloadbalancing:us-east-2:984102645395:targetgroup/cockroachdb/01e13a0c527b9250"
	

# REGISTRAR OS TARGETS  
$ aws elbv2 register-targets --target-group-arn arn:aws:elasticloadbalancing:us-east-2:984102645395:targetgroup/cockroachdb/01e13a0c527b9250 --targets Id=i-093f77b663051122c Id=i-0169f2dfdf8db18ca


# HTTPS - CRIADO PRIMEIRO
$ aws elbv2 create-listener \
    --load-balancer-arn arn:aws:elasticloadbalancing:us-east-2:984102645395:loadbalancer/net/cockroachdb/01a4ebfe23a8eada \
    --protocol TCP \
    --port 26257 \
	--default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:us-east-2:984102645395:targetgroup/cockroachdb/01e13a0c527b9250
# "ListenerArn": "arn:aws:elasticloadbalancing:us-east-2:984102645395:listener/net/cockroachdb/01a4ebfe23a8eada/14c400991f61696e"


$ aws elbv2 describe-target-health --target-group-arn targetgroup-arn

# DESCRIBE NO LISTENER
$ aws elbv2 describe-listeners --listener-arns arn:aws:elasticloadbalancing:us-east-1:984102645395:listener/net/cockroachdb/95cf46020db458f1/3f87271d6ce677cb
```
