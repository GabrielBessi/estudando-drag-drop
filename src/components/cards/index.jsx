// import ListCards from "../listCards";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardStyle } from "./styled";
import { LiStyled } from "../listCards/styled";


function Cards({ persons, setPersons }) {

  function handleOnDragEnd(result){
    console.log(result)
    if (!result.destination) return

    const items = Array.from(persons)
    const [reorderedItem] = items.splice(result.source.index, 1)
    console.log(result.source.index)
    items.splice(result.destination.index, 0, reorderedItem)
    console.log(result.destination.index)

    setPersons(items)
  }

  function getStyle(style, snapshot) {
    console.log('-0---', style)
    if (!snapshot.isDropAnimating) {
      return style;
    }
    const { moveTo, curve, duration } = snapshot.dropAnimation;
    // move to the right spot
    const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
    // add a bit of turn for fun
    const rotate = 'rotate(0.5turn)';
  
    // patching the existing style
    console.log("-----", {
      ...style,
      transform: `${translate} ${rotate}`,
      // slowing down the drop because we can
      transition: `all ${curve} ${duration + 1}s`,
    })
    return {
      "position": "fixed",
      "top": 320,
      "left": 299,
      "boxSizing": "border-box",
      "width": 174,
      "height": 198,
      "transition": "transform 0.36s cubic-bezier(.2,1,.1,1), opacity 0.36s cubic-bezier(.2,1,.1,1)",
      "transform": "translate(0px, -208px)",
      "opacity": null,
      "zIndex": 4500,
      "pointerEvents": "none"
    };
  }
  
  return (
    <CardStyle>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="personagens" direction="horizontal" >
          {(provided) => (
            <ul
              className="personagens"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {persons.map(({ id, imagem, nome }, index) => {
                return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                    <LiStyled
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={true}
                    style={getStyle(provided.draggableProps.style, snapshot)}
                    >
                      <img src={imagem} alt={nome} />
                      <span>{nome}</span>
                    </LiStyled>
                  )}
                </Draggable>
              )})}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </CardStyle>
  );
}
// function App() {
//   const [frames, setFrames] = useState({ id: '', name: '', frames: [], selectedQueuesIds: [] })

//   return (
//     <TestandoProps frames={frames} setFrames={setFrames}/>
//   )
// }

// export default App

//https://codesandbox.io/s/using-script-tag-in-react-via-cdn-and-hooks-forked-206lsi?file=/src/dnd.js
export default Cards;
