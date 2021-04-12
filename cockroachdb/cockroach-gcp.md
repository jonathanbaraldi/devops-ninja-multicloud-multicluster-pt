

# LoadBalancer


https://cloud.google.com/load-balancing/docs/https/ext-https-lb-simple

b-backend-template

```sh
# Creating a managed instance group
$ gcloud compute instance-templates create cockroachdb \
   --region=us-east1 \
   --network=default \
   --boot-disk-size=60GB \
   --subnet=default \
   --tags=allow-health-check \
   --image-family=debian-9 \
   --image-project=debian-cloud \
   --machine-type=e2-medium \
   --metadata-from-file startup-script=node-gcp.sh

# Create the managed instance group based on the template.
$ gcloud compute instance-groups managed create cockroachdb \
   --template=cockroachdb --size=3 --zone=us-east1-b


```





# GCP

```sh

34.75.222.33
34.73.14.146
104.196.65.162


ssh -i devops-ninja.pem ubuntu@54.210.83.85
ssh -i devops-ninja.pem ubuntu@52.90.106.37

cockroach start --insecure --advertise-addr=34.75.222.33   --join=34.75.222.33,34.73.14.146,104.196.65.162 --cache=.25 --max-sql-memory=.25  --background
cockroach start --insecure --advertise-addr=34.73.14.146   --join=34.75.222.33,34.73.14.146,104.196.65.162 --cache=.25 --max-sql-memory=.25  --background
cockroach start --insecure --advertise-addr=104.196.65.162 --join=34.75.222.33,34.73.14.146,104.196.65.162 --cache=.25 --max-sql-memory=.25  --background

cockroach init --insecure
cockroach sql --insecure

CREATE DATABASE books;
```



```sh

# Adding a named port to the instance group
$ gcloud compute instance-groups set-named-ports cockroachdb \
    --named-ports http:80 \
    --zone us-east1-b


# Configuring a firewall rule
$ gcloud compute firewall-rules create fw-allow-health-check \
    --network=default \
    --action=allow \
    --direction=ingress \
    --source-ranges=130.211.0.0/22,35.191.0.0/16 \
    --target-tags=allow-health-check \
    --rules=tcp:80



# Reserving an external IP address
$ gcloud compute addresses create network-lb-ip \
    --region us-east1
    


# Healthcheck
$ gcloud compute health-checks create tcp tcp-health-check \
    --region us-east1 \
    --port 8080
    
# COLOCAR AQUI O CAMINHO :8080 /api/providers para responder no balanceador
# !!!!!
# SO FALTA COLOCAR O HTTPS

# Backend Service
$ gcloud compute backend-services create network-lb-backend-service \
    --protocol TCP \
    --load-balancing-scheme=internal \
    --health-checks tcp-health-check \
    --health-checks-region us-east1 \
    --region us-east1


# Add your instance group as the backend to the backend service.
$ gcloud compute backend-services add-backend network-lb-backend-service \
    --instance-group=cockroachdb \
    --instance-group-zone=us-east1-b \
    --region=us-east1


$ gcloud compute forwarding-rules create fr-ilb \
    --region=us-east1 \
    --load-balancing-scheme=internal \
    --ip-protocol=TCP \
    --ports=26257,8080 \
    --backend-service=network-lb-backend-service \
    --backend-service-region=us-east1
   
```

- 10.142.0.37


Atualizar o node na máquina para testar
```sh 
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install nodejs

```
