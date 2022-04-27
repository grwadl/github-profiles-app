import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import RoutesSelect from './RoutesSelect';
import AuthContext from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import NavBar from './components/UI/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes/themes.js';
function App() {
  const [theme, setTheme] = useState('');
  const [login, logout, token, userId, isLoading] = useAuth();
  const isLogined = !!token;
  const [redirectedValue, setRedirectedValue] = useState('');
  const themeToggler = async () => {
    await theme === 'dark' || '' ? setTheme('light') : setTheme('dark');
  };
  const [themeLoading, setThemeLoading] = useState(true);
  useEffect(() => {
    const theme1 = JSON.parse(localStorage.getItem('theme'));
    localStorage.setItem('theme', JSON.stringify(theme));
    if (theme === '') {
      setTheme(theme1);
      localStorage.setItem('theme', JSON.stringify(theme1));
      return setThemeLoading(false);
    }
    setTheme(theme);
    return setThemeLoading(false);
  }, [theme]);
  if (themeLoading)
  {
    return ''
    }
  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isLoading, isLogined, redirectedValue, setRedirectedValue, theme, setTheme }}>
      <div className="App">
        <ThemeProvider theme={theme === 'dark' || '' ? darkTheme : lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <NavBar theme={theme} themeToggler={themeToggler} />
            <RoutesSelect isLogined={isLogined} />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
