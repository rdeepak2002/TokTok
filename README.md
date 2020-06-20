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

## How to Add Nginx Reverse Proxy
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

## How to Autostart

Install pm2

```sh
sudo npm install -g pm2
```

Start server

```sh
pm2 start server.js
```

Get startup command

```sh
pm2 startup systemd
```

Copy and paste the output of the last command
```sh
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
```

Save current pm2 state (running server.js)
```sh
pm2 save
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
