FROM node
# Autor/Mantenedor
MAINTAINER Jonathan Baraldi

RUN mkdir -p /src 

# Definir diretório de trabalho
WORKDIR /src
ADD . /src

# Expor porta 80
EXPOSE  8080

# Rodar o app usando nodemon
CMD ["node", "/src/server.js"]

# docker build -t jonathanbaraldi/api-book:dev .



# docker build -t jonathanbaraldi/api-book:dev .
# cd ../api-song
# docker build -t jonathanbaraldi/api-song:dev .	
# cd ../api-video
# docker build -t jonathanbaraldi/api-video:dev2 .


# docker push jonathanbaraldi/api-book:dev
# docker push jonathanbaraldi/api-song:dev
# docker push jonathanbaraldi/api-video:dev