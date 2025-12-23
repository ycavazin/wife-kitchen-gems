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

import { getGoogleDriveImageUrl, getImgurImageUrl } from "@/lib/utils/driveImage";
function parseCSV(csv: string): string[][] {
  const result: string[][] = [];
  let row: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;

  while (i < csv.length) {
    const char = csv[i];
    if (char === '"') {
      if (inQuotes && csv[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i += 2;
        continue;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push(current);
      current = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (current || row.length > 0) {
        row.push(current);
        result.push(row);
        row = [];
        current = '';
      }
      // Skip \r\n
      if (char === '\r' && csv[i + 1] === '\n') {
        i++;
      }
    } else {
      current += char;
    }
    i++;
  }

  // Add last field and row
  if (current || row.length > 0) {
    row.push(current);
    result.push(row);
  }

  return result;
}

export async function fetchRecipes(): Promise<Recipe[]> {
  console.log('Starting to fetch recipes');
  try {
    const response = await fetch(CSV_URL);
    console.log('Fetch response ok:', response.ok);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const csvText = await response.text();
    console.log('CSV text length:', csvText.length);
    const data = parseCSV(csvText);
    console.log('Parsed data rows:', data.length);
    
    // Skip header row
    const dataLines = data.slice(1);
    console.log('Data lines:', dataLines.length);
    
    return dataLines.map((line, index) => {
      const [nome, categoria, ingredientes, modoPreparo, fotoUrl, fotoImgur] = line;
      const imageUrl = getImgurImageUrl(fotoImgur?.trim());
      console.log('Recipe:', nome?.trim(), 'Image URL:', imageUrl);
      return {
        id: (index + 1).toString(),
        nome: nome?.trim() || '',
        categoria: categoria?.trim() || '',
        ingredientes: ingredientes?.trim() || '',
        modoPreparo: modoPreparo?.trim() || '',
        fotoUrl: imageUrl
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
