export interface Recipe {
  id: string;
  nome: string;
  categoria: string;
  ingredientes: string;
  modoPreparo: string;
  fotoUrl?: string;
}

// URL of the published CSV
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJCWty_FsIZKQ7gSjjjSSUKFAuq-IAs82-HyPxlZ3z6uTVkme4JGMMh4Vtr2g8hWd9gRCVCmCKRP_e/pub?output=csv';

// Simple CSV parser that handles quoted fields
function parseCSV(csv: string): string[][] {
  const lines = csv.split('\n').filter(line => line.trim());
  return lines.map(line => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  });
}

export async function fetchRecipes(): Promise<Recipe[]> {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const csvText = await response.text();
    const data = parseCSV(csvText);
    
    // Skip header row
    const dataLines = data.slice(1);
    
    return dataLines.map((line, index) => {
      const [nome, categoria, ingredientes, modoPreparo, fotoUrl] = line;
      return {
        id: (index + 1).toString(),
        nome: nome?.trim() || '',
        categoria: categoria?.trim() || '',
        ingredientes: ingredientes?.trim() || '',
        modoPreparo: modoPreparo?.trim() || '',
        fotoUrl: fotoUrl?.trim() || undefined
      };
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Fallback to empty array
    return [];
  }
}

// For backward compatibility, keep static data as fallback
export const receitas: Recipe[] = [];

export const categorias = ["Todas", "Doce", "Salgado"];
