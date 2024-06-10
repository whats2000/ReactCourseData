import React, { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Item = styled.div<{ $isEven: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.$isEven ? 'lightgray' : 'white')};
`;

const StyledVirtuoso = styled(Virtuoso)`
  height: 400px !important;
  width: 100% !important;
`;

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    // 模擬異步數據加載
    const loadData = async () => {
      const data = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
      setItems(data);
    };

    loadData().catch((error) => {
      console.error(error);
    });
  }, []);

  const loadMoreItems = () => {
    const newItems = Array.from({ length: 50 }, (_, i) => `Item ${items.length + i}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <Container className={'mt-5'}>
      <h1>Virtuoso Example</h1>
      <p>你查看 HTML 的原始碼，會發現只有顯示在畫面上的元素會被渲染，這是因為 Virtuoso 只會渲染畫面上顯示的元素。</p>
      <StyledVirtuoso
        totalCount={items.length}
        itemContent={(index) => (
          <Item $isEven={index % 2 === 0}>{items[index]}</Item>
        )}
        endReached={loadMoreItems}
      />
    </Container>
  );
};

export default App;
