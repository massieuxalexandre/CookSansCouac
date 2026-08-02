## Setup backend

#### Aller dans terminal à la racine du projet (terminal vscode par exemple) puis taper : 
```bash
cd backend
```
```bash
python -m venv venv
source venv/bin/activate
venv\Scripts\activate
pip install -r requirements.txt
```

## Lancer le backend
```bash
cd backend
```
```bash
source venv/bin/activate
venv\Scripts\activate
uvicorn main:app --reload
```

## Lancer le frontend
```bash
cd frontend
```
```bash
npm run dev
```

