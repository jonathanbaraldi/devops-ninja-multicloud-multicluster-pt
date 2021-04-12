

# CERTIFICADO

*.dev-ops-ninja.com* 

*.multicloud-multicluster.ml*

*devops-ninja.ml*

```sh
$ openssl req -new -x509 -keyout cert.pem -out cert.pem  -keyout private.key -days 365 -nodes
	Country Name (2 letter code) [AU]:DE
	State or Province Name (full name) [Some-State]:Germany
	Locality Name (eg, city) []:nameOfYourCity
	Organization Name (eg, company) [Internet Widgits Pty Ltd]:nameOfYourCompany
	Organizational Unit Name (eg, section) []:nameOfYourDivision
	Common Name (eg, YOUR name) []:*.example.com
	Email Address []:webmaster@example.com
```
