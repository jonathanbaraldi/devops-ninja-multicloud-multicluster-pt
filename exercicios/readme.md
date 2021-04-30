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

Iniciar banco de dados


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
pasta app/db/books.sql



# Distributed Deployment (Distribuído)



## Aula 15 - AWS + GCP + Database
cockroachdb/cockroach-aws.md - Inicio
cockroachdb/cockroach-gcp.md - Inicio


## Aula 16 - AWS + GCP + LoadBalancer
cockroachdb/cockroach-aws.md - Restante
cockroachdb/cockroach-gcp.md - Restante



## Aula 17 - Traefik, Route53 e Load Balancer

Nessa aula, iremos configurar os 2 Traefiks dos 2 cluster para responderem pelo mesmo dominimo.

Fazer o apply do Traefik da AWS no cluster do GCP. Apenas isso. 


CRIACAO DE NOVO TARGET PARA ELB NO GCP, usando o mesmo certificado da AWS.

34.96.99.180


```sh


# Criar um http proxy para fazer o  roteamento
$ gcloud compute target-https-proxies create https-lb-proxy-devops \
    --url-map web-map-https --ssl-certificates devops-ninja
    
# Criar regra global de forwarding 
$ gcloud compute forwarding-rules create https-content-rule \
    --address=lb-ipv4-1\
    --global \
    --target-https-proxy=https-lb-proxy-devops \
    --ports=443

```

```sh
$ kubectl apply -f traefik.yaml
```

https://docs.aws.amazon.com/pt_br/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted


E iremos configurar o Route53 para fazer rota com base em peso, enviando 50% do tráfego para o cluster Kubernetes na AWS e 50% para o cluster Kubernetes no GCP.

Validar ambiente distribuído


## Aula 18 - Aplicação - Fleet

Popular o banco
```sh
$ ssh -i devops-multicloud.pem ubuntu@3.16.216.254

$ cockroach sql --insecure
```


```sql
CREATE DATABASE files;

CREATE TABLE files.book ( id SERIAL PRIMARY KEY, BookName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.book ( BOOKNAME, AUTHORNAME, PRICE) VALUES ('BookJones', 'Jonathan', 85000.00);


CREATE TABLE files.song ( id SERIAL PRIMARY KEY, SongName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.song ( SONGNAME, AUTHORNAME, PRICE) VALUES ('SongJones', 'Jonathan', 35000.00);

CREATE TABLE files.video ( id SERIAL PRIMARY KEY, VideoName TEXT NOT NULL, AuthorName TEXT NOT NULL, Price REAL); 
INSERT INTO files.video ( VIDEONAME, AUTHORNAME, PRICE) VALUES ('VideoJones', 'Jonathan', 25000.00);

```

Fleet na pasta distributed alterando os balanceadores de carga.




# Revisão

## Aula 19
Revisar todos os itens do curso e agradecer, falar sobre os pontos a serem melhorados ainda, e que estarei atualizando o curso para que esteja sempre atualizado.





# Controle de custos

## Aula 20 - Simulador
http://simulador-aws.s3-website-us-east-1.amazonaws.com/

## Aula 21 - Controle de custos AWS 

- Custo dos serviços
https://aws.amazon.com/pt/ec2/pricing/on-demand/

- Cost Explorer
https://aws.amazon.com/pt/aws-cost-management/aws-cost-explorer/
* Ferramentas mágicas


## Aula 22 - Controle de custos GCP

- Custo dos serviços
https://cloud.google.com/compute/vm-instance-pricing?hl=pt-br

- Console de Faturamento


# Monitoramento

## Aula 23 - AWS - CloudWatch
https://aws.amazon.com/pt/cloudwatch/

## Aula 24 - GCP - Monitoring
https://cloud.google.com/monitoring?hl=pt-br

## Aula 25 - Kubernetes Monitoring
- Habilitar Prometheus+Grafana














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

	https://www.udemy.com/course/
	multicloud-multicluster-k8s-rancher-cockroachdb-traefik


PORTUGUESE
	DevOps Ninja: Multicloud+Multicluster K8S+Rancher+Traefik
	https://github.com/jonathanbaraldi/devops-ninja-multicloud-multicluster-pt

	https://www.udemy.com/course/
	multicloud-multicluster-k8s-rancher-traefik-cockroachdb
