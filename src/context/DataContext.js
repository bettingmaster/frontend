import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext({
  data: [],
  updateData: () => {},
});
// export const UserContext = createContext({
//   user: null,
//   updateUser: () => {},
// });

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateData = (newData) => {
    // Implement your data manipulation logic here (e.g., sorting, filtering)
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
