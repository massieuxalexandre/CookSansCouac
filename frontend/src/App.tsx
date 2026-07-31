import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';
import './App.css';


function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1>Cook sans Couac</h1>
            <h2>L'art de cuisiner relax !</h2>
            
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <Link to="/recipes" style={{ padding: '10px 20px', background: '#eee', textDecoration: 'none', borderRadius: '5px' }}>
                    Mes recettes
                </Link>
                <Link to="/ingredients" style={{ padding: '10px 20px', background: '#eee', textDecoration: 'none', borderRadius: '5px' }}>
                    Mon ingrédients
                </Link>
            </nav>
        </header>

        <main>
            <Routes>
                {/* Si l'URL est "/recipes", on affiche les recettes */}
                <Route path="/recipes" element={<Recipes />} />
                
                {/* Si l'URL est "/ingredients", on affiche les ingrédients */}
                <Route path="/ingredients" element={<Ingredients />} />
            </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;