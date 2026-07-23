# Deployment Guide – Portfolio SPA

## Overview
This repository contains a **React + Vite** single‑page application (SPA) that showcases the personal portfolio of **Aditya Sharma**. The app is built locally on Windows and deployed to an **AWS EC2 (t2.micro, free‑tier)** instance served by **Nginx**.

---

## Prerequisites
| Item | Version / Detail |
|------|------------------|
| Operating System | Windows 10/11 (development) |
| Node.js | >= 18.x |
| npm / yarn | >= 9.x |
| Git | any recent version |
| AWS Account | Free‑tier sufficient |
| EC2 Instance | Ubuntu 22.04 LTS (or similar) |
| SSH key | `aditya-portfolio-key.pem` (stored securely) |
| Nginx | >= 1.18 |
| Domain (optional) | Route53 or any DNS pointing to the EC2 public IP |

---

## Local Build
```bash
# 1️⃣ Clone the repository (if not already)
git clone <repo‑url>
cd Portfolio

# 2️⃣ Install dependencies
npm ci   # or `npm install`

# 3️⃣ Build the production bundle
npm run build   # creates ./dist folder ready for deployment
```
The compiled static files end up in `dist/`.

---

## Prepare the EC2 Instance
1. **Launch an EC2 instance** (Ubuntu 22.04) and assign a security group that allows:
   - SSH (port 22) – **restricted to your IP**
   - HTTP (port 80) – open to `0.0.0.0/0`
2. **Copy the SSH key** to a safe location, e.g.
   ```
   C:\Users\hp\Downloads\aditya-portfolio-key.pem
   ```
3. **Connect**:
   ```bash
   ssh -i "C:\Users\hp\Downloads\aditya-portfolio-key.pem" ubuntu@15.207.87.224
   ```
4. **Update packages & install Nginx**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y nginx
   ```
5. **Create deployment directory** (owned by `www-data`):
   ```bash
   sudo mkdir -p /var/www/portfolio/dist
   sudo chown -R www-data:www-data /var/www/portfolio
   sudo chmod -R 755 /var/www/portfolio
   ```
---

## Transfer Build Artifacts
From your Windows machine, upload the `dist/` folder to the EC2 instance (you can use `scp` or an SFTP client).
```bash
# Using scp (PowerShell/Command Prompt)
scp -i "C:\Users\hp\Downloads\aditya-portfolio-key.pem" -r dist/* ubuntu@15.207.87.224:/var/www/portfolio/dist/
```
> **Tip**: If you see a `403` after copying, verify ownership and permissions (see step 5).

---

## Nginx Configuration
Create a site file:
```bash
sudo tee /etc/nginx/sites-available/portfolio <<'EOF'
server {
    listen 80;
    server_name _;   # replace with your domain or keep `_` for default
    root /var/www/portfolio/dist;

    # Serve index.html for any route (SPA fallback)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: cache static assets
    location ~* \.(js|css|png|jpg|jpeg|svg|gif|ico|webp)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
EOF
```
Enable the site and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t   # test config
sudo systemctl reload nginx
```
The app should now be reachable at `http://15.207.87.224` (or your domain).

---

## Common Issues & Fixes
| Symptom | Root Cause | Fix |
|----------|------------|-----|
| **403 Forbidden** after upload | `www-data` cannot read files | `sudo chown -R www-data:www-data /var/www/portfolio` and `sudo chmod -R 755 /var/www/portfolio` |
| **404 on routes** (e.g., `/about`) | Nginx not falling back to `index.html` | Ensure `try_files $uri $uri/ /index.html;` is present |
| **Assets not loading** | Wrong MIME or cache headers | Add the static asset location block above |
| **Server not responding** | Nginx not running | `sudo systemctl status nginx` and `sudo systemctl start nginx` |

---

## Optional – HTTPS with Let's Encrypt
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```
Follow the interactive prompts. The certificate will auto‑renew.

---

## Cleanup
When you no longer need the instance:
```bash
aws ec2 terminate-instances --instance-ids i-xxxxxxxxxxxx
```
Make sure to delete any associated security groups and key pairs you no longer need.

---

## Contact
For any questions, reach out to **Aditya Sharma**:
- Email: adityapradipsharma@gmail.com
- GitHub: https://https://github.com/Advaitam07
- LinkedIn: https://www.linkedin.com/in/aditya-sharma-73b377363

---

*This guide reflects the exact steps used to get the portfolio live on the AWS free tier.*
