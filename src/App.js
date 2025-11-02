import React, {useState} from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1200)); // імітація запиту
    setIsLoading(false);
    alert("Готово ✅");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Custom Button Demo</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <CustomButton onClick={handleClick} loading={isLoading}>
          Primary
        </CustomButton>

        <CustomButton variant="outline" onClick={() => alert("Outline")}>
          Outline
        </CustomButton>

        <CustomButton variant="danger" size="lg">
          Delete
        </CustomButton>

        <CustomButton size="sm" disabled>
          Disabled
        </CustomButton>
      </div>
    </div>
  );
}