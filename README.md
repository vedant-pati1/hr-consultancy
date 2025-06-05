# To run in Production

```bash
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env 
# Edit the .env files as needed
docker compose -f docker-compose.yml build
docker compose -f docker-compose.yml up -d
```

# To run in Development
currenly not supported, but you can run the backend and frontend separately 

### For Backend
```bash
cd backend
cp .env.example .env # Edit the .env file as needed
pip install -r requirements.txt
fastapi run main.py
```
### For Frontend
```bash
cd frontend
cp .env.example .env # Edit the .env file as needed
npm install -g pnpm
pnpm install
pnpm run dev