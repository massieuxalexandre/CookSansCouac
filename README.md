## Setup : 

#### Aller dans terminal à la racine du projet (terminal vscode par exemple) puis taper : 
```bash
cd backend
python -m venv venv
source venv/bin/activate
venv\Scripts\activate
pip install -r requirements.txt
```

## Lancer le backend
```bash
cd backend
source venv/bin/activate
venv\Scripts\activate
uvicorn main:app --reload
```

## Lancer le frontend
```bash
cd frontend
npm run dev
```

