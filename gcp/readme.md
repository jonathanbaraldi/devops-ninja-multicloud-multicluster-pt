# Roteiro

O que iremos fazer?

1. Configuração do Cluster Kubernetes
2. Configuração do Traefik
3. Configuração do Longhorn
4. Criação do certificado não válido
5. Configuração do ELB
6. Configuração do DNS


ativar as apis do google
configurar o dns


# 1 - Configuração do Cluster Kubernetes
```sh
# Creating a managed instance group
$ gcloud compute instance-templates create multicloud \
   --region=us-east1 \
   --network=default \
   --boot-disk-size=60GB \
   --subnet=default \
   --tags=allow-health-check \
   --image-family=debian-9 \
   --image-project=debian-cloud \
   --machine-type=e2-medium \
   --metadata-from-file startup-script=install-k8s.sh

# Create the managed instance group based on the template.
$ gcloud compute instance-groups managed create multicloud-backend \
   --template=multicloud --size=3 --zone=us-east1-b

# Adding a named port to the instance group
$ gcloud compute instance-groups set-named-ports multicloud-backend \
    --named-ports https:443 \
    --zone us-east1-b




# Configuring a firewall rule
# $ gcloud compute firewall-rules create # fw-allow-health-check \
#     --network=default \
#     --action=allow \
#     --direction=ingress \
#     --source-ranges=130.211.0.0/22,35.191.0.0/16 \
#     --target-tags=allow-health-check \
#     --rules=tcp:80

```




# 2 - Configuração do Traefik

O Traefik é a aplicação que iremos usar como ingress. Ele irá ficar escutando pelas entradas de DNS que o cluster deve responder. Ele possui um dashboard de  monitoramento e com um resumo de todas as entradas que estão no cluster.
```sh
$ kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-rbac.yaml
$ kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-ds.yaml
$ kubectl --namespace=kube-system get pods
```
Agora iremos configurar o DNS pelo qual o Traefik irá responder. No arquivo ui.yml, localizar a url, e fazer a alteração. Após a alteração feita, iremos rodar o comando abaixo para aplicar o deployment no cluster.
```sh
$ kubectl apply -f traefik.yaml
```

# 3 - Configuração Longhorn



# 4 -  Criação do certificado não válido

```sh
> openssl req -new -x509 -keyout cert.pem -out cert.pem -days 365 -nodes
Country Name (2 letter code) [AU]:DE
State or Province Name (full name) [Some-State]:Germany
Locality Name (eg, city) []:nameOfYourCity
Organization Name (eg, company) [Internet Widgits Pty Ltd]:nameOfYourCompany
Organizational Unit Name (eg, section) []:nameOfYourDivision
Common Name (eg, YOUR name) []:*.example.com
Email Address []:webmaster@example.com
```
  
  *.multicloud.ml  

  multicloud

```sh

# ENVIAR O ARQUIVO CERT QUE CRIARMOS PARA multicloud.ml

# O codigo abaixo fazer o provisionamento automatico


# multi-cloud-2

# $ gcloud compute ssl-certificates create multicloud \
#         --certificate=certificate-file \
#         --private-key=private-key-file \
#         --global
    
#  nome do certificado que subi - devops-ninja
```


# 5 - Configuração do ELB


```sh 


# Reserving an external IP address
$ gcloud compute addresses create lb-ipv4-1 \
    --ip-version=IPV4 \
    --global

# Describe
$ gcloud compute addresses describe lb-ipv4-1 \
    --format="get(address)" \
    --global

#  34.96.99.180

# SETUP

# Healthcheck
$ gcloud compute health-checks create http http-basic-check \
	--port 8080 \
  --request-path /api/providers
    
# Backend Service
$ gcloud compute backend-services create web-backend-service \
    --protocol=HTTP \
    --port-name=http \
    --health-checks=http-basic-check \
    --global



# Add your instance group as the backend to the backend service.
$ gcloud compute backend-services add-backend web-backend-service \
    --instance-group=multicloud-backend \
    --instance-group-zone=us-east1-b \
    --global


# Create a URL map to route the incoming requests to the default backend service.
$  gcloud compute url-maps create web-map-https \
    --default-service web-backend-service


# Criar um http proxy para fazer o  roteamento
$ gcloud compute target-https-proxies create https-lb-proxy \
    --url-map web-map-https --ssl-certificates multicloud
    
# Criar regra global de forwarding 
$ gcloud compute forwarding-rules create https-content-rule \
    --address=lb-ipv4-1\
    --global \
    --target-https-proxy=https-lb-proxy \
    --ports=443

```

# 6 - Configuração do DNS



