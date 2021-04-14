# Introdução

## Aula 1 - O curso e o instrutor
- Apresentação
- Agenda

https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-pt

https://www.udemy.com/user/jonathan-dias-baraldi/


## Aula 2 - Nuvens

https://www.gartner.com/en/documents/2020/3989743-magic-quadrant-for-cloud-infrastructure-and-platform-ser

- AWS
	https://pages.awscloud.com/GLOBAL-multi-DL-gartner-mq-cips-2020-learn.html
	https://aws.amazon.com/pt/about-aws/global-infrastructure/

- GCP
	https://cloud.google.com/gartner-cloud-infrastructure-as-a-service?hl=pt-br
	https://cloud.google.com/infrastructure?hl=pt-br

- Requisitos mínimos
	- 2 nuvens - Preferência AWS e GCP || 2 datacenters, ou algo que simule 2 provedores distintos.
	- 2 ou mais domínios - DNS
	- 4 maquinas virtuais  na primeira nuvem
	- 3 manquinas virtuais na segunda nuvem




## Aula 3 - Containers e Kubernetes
- Containers
- Kubernetes
doc/containers-kubernetes.pdf





# Conceito

## Aula 4 - Porquê multicloud?
doc/multicloud.md
	

## Aula 5 - Multi-cluster
doc/multicluster.md

















# Arquitetura

## Aula 6 - Nuvens
https://aws.amazon.com/pt/
https://cloud.google.com

	- VPC
	- EC2
	- ELB
	- IAM
	- Route53


```sh
$ ssh-keygen -t rsa -f chave -C multicloud
```

## Aula 7 - Kubernetes
https://kubernetes.io

https://kubernetes.io/docs/concepts/overview/

https://kubernetes.io/docs/concepts/workloads/

	- Rede
	- Pods
	- Containers
	- Service
	- Ingress
	- Volume


## Aula 8 - Aplicação
pasta app
	- Frontend - NGINX
	- backend - 3 microserviços - NODEJS
	- database - CockroachDB
	6 total - 

## Aula 9 - DNS 
	- Criação do domínio no Freenom

https://www.freenom.com/pt/index.html?lang=pt




# Single Deployment (Único)

## Aula 10 - AWS + Rancher
## Aula 11 - AWS + Kubernetes + Route53
pasta aws

## Aula 12 - GCP + Kubernetes
## Aula 13 - GCP + DNS
pasta gcp

## Aula 14 - Aplicação - Fleet
pasta single


# Distributed Deployment (Distribuído)

## Aula 15 - AWS 
## Aula 16 - Database
cockroachdb/cockroach-aws.md

## Aula 17 - GCP
## Aula 18 - Database
cockroachdb/cockroach-gcp.md

## Aula 19 - Aplicação - Fleet
Pasta distributed



# Revisão

## Aula 20
Revisar todos os itens do curso e agradecer, falar sobre os pontos a serem melhorados ainda, e que estarei atualizando o curso para que esteja sempre atualizado.





# ROADMAP - Próximas atualizações

- Terraform
- Github Actions
- Uso de VPN 
- Submariner
- ServiceMesh
- Chaos Engineering
- Testes automatizados


ENGLISH
	DevOps Ninja: Multicloud+Multicluster K8S+Traefik+Rancher
	https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-en


PORTUGUESE
	DevOps Ninja: Multicloud+Multicluster K8S+Rancher+Traefik
	https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-pt
