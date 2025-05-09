import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'ITEM';

const DraggableItem = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-3 m-2 rounded bg-blue-200 cursor-pointer ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {name}
    </div>
  );
};

const DropZone = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => alert(`Tu as déposé : ${item.name}`),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`h-32 border-4 border-dashed rounded p-4 ${
        isOver ? 'bg-green-200' : 'bg-white'
      }`}
    >
      Dépose ici
    </div>
  );
};

const Game2 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">Test de Glisser-Déposer</h1>
        <DraggableItem name="Geste écologique" />
        <DropZone />
      </div>
    </DndProvider>
  );
};

export default Game2;
