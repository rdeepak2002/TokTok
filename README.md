# TokTok

## How to Run

Navigate to the 'back' folder

```sh
cd back
```

Install node modules

```sh
npm install
```

Run the server

```sh
node server.js
```

## How to Add NGINX Reverse Proxy
Edit the default config file

```sh
sudo nano /etc/nginx/sites-enabled/default
```

Replace its contents with the following

```sh
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;

  index index.html index.htm index.nginx-debian.html;

  server_name _;

  location / {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Restart nginx

```sh
sudo systemctl restart nginx
```

## How to Update Front-End (React) Code

Navigate to the 'front' folder

```sh
cd front
```

Install node modules

```sh
npm install
```

Build the React project for production

```sh
npm run build
```
