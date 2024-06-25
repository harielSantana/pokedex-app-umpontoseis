import { IPokemonHeight } from '@components/Modals/Filter/_types';
import { IPokemonType } from '@components/Type/_types';
import { Pokemon } from '@screens/Home/interface';
import React, { createContext, useContext, useState } from 'react';

// Definindo o formato dos filtros
interface FiltersState {
  type: IPokemonType | "";
  weakness: IPokemonType | "";
  height: IPokemonHeight | "";
}

// Definindo o formato dos dados de usuário
interface UserState {
  favoritePokemons: Pokemon[];
  // Adicione outros dados de usuário conforme necessário
}

// Definindo o formato do contexto
interface AppContextType {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

// Inicializando o contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Componente provedor que envolve toda a aplicação
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FiltersState>({
    type: 'fire',      // Valor padrão para tipo
    weakness: 'water', // Valor padrão para fraqueza
    height: 'medium',  // Valor padrão para altura
  });

  const [user, setUser] = useState<UserState>({
    favoritePokemons: [],
    // Inicialize outros dados de usuário conforme necessário
  });

  return (
    <AppContext.Provider value={{ filters, setFilters, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
